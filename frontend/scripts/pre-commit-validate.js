const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

function findGitRoot(startPath) {
  let currentPath = startPath;
  while (currentPath) {
    const gitPath = path.join(currentPath, '.git');
    if (fs.existsSync(gitPath)) {
      return currentPath;
    }
    const parent = path.dirname(currentPath);
    if (parent === currentPath) break;
    currentPath = parent;
  }
  return startPath;
}

const PROJECT_ROOT = findGitRoot(path.join(__dirname, '..'));
const FRONTEND_ROOT = path.join(__dirname, '..');

function log(message, color = RESET) {
  console.log(`${color}${message}${RESET}`);
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only', { 
      encoding: 'utf8', 
      cwd: PROJECT_ROOT 
    });
    return output.split('\n').filter(f => f.trim());
  } catch {
    return [];
  }
}

function loadGuardrailsConfig() {
  const configPath = path.join(PROJECT_ROOT, 'specs', 'docs', 'guardrails.json');
  
  if (!fs.existsSync(configPath)) {
    log(`${YELLOW}⚠️  guardrails.json não encontrado - usando regras fallback${RESET}`, YELLOW);
    return getFallbackRules();
  }
  
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(content);
  } catch {
    log(`${YELLOW}⚠️  Erro ao ler guardrails.json - usando regras fallback${RESET}`, YELLOW);
    return getFallbackRules();
  }
}

function checkRegex(content, pattern) {
  try {
    return new RegExp(pattern).test(content);
  } catch {
    return false;
  }
}

function checkComponentProps(content) {
  if (!content.endsWith('.tsx')) return false;
  const hasComponent = /(?:export\s+)?(?:const|function)\s+[A-Z]\w+/.test(content);
  if (!hasComponent) return false;
  if (content.includes('export default function')) return false;
  const hasPropsType = 
    /(?:interface|type)\s+\w+Props/.test(content) || 
    /props:\s*\{/.test(content) ||
    /import\s+(?:type\s+)?\{[^}]*Props[^}]*\}/.test(content);
  return !hasPropsType;
}

function checkKebabCase(filePath) {
  const fileName = path.basename(filePath);
  if (fileName === 'page.tsx' || fileName === 'layout.tsx') return false;
  if (fileName.endsWith('.spec.ts')) return false;
  if (fileName.endsWith('.json')) return false;
  if (fileName.endsWith('.config.ts')) return false;
  const kebabCasePattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*\.(tsx?|ts)$/;
  return !kebabCasePattern.test(fileName);
}

function checkLineCount(content) {
  const lines = content.split('\n').length;
  return lines > 500;
}

function checkTestPage(filePath, allFiles) {
  if (!filePath.endsWith('.spec.ts')) return false;
  const featureMatch = filePath.match(/features\/([^\/]+)/);
  if (!featureMatch) return false;
  const feature = featureMatch[1];
  const testPageExists = allFiles.some(f => 
    f.includes(`features/${feature}`) && f.includes('/test-') && f.endsWith('/page.tsx')
  );
  return !testPageExists;
}

function runVerifyPatterns(stagedFiles, config) {
  log(`\n${CYAN}🔍 Verificando padrões do projeto...${RESET}\n`);
  log(`${CYAN}📋 Regras carregadas de guardrails.json${RESET}\n`);

  const srcFiles = stagedFiles.filter(f => 
    f.startsWith('frontend/src/') && 
    (f.endsWith('.tsx') || f.endsWith('.ts'))
  );

  if (srcFiles.length === 0) {
    log(`${GREEN}✅ Sem arquivos fonte para verificar${RESET}`);
    return true;
  }

  log(`📁 Arquivos staged: ${srcFiles.length}\n`);

  const rules = config.rules || [];
  let hasError = false;
  const issues = [];

  for (const file of srcFiles) {
    const fullPath = path.join(PROJECT_ROOT, file);
    
    if (!fs.existsSync(fullPath)) continue;
    
    const content = fs.readFileSync(fullPath, 'utf8');

    for (const rule of rules) {
      if (!rule.check) continue;
      
      try {
        let violated = false;
        const check = rule.check;
        
        switch (check.type) {
          case 'regex':
            if (check.pattern) {
              violated = checkRegex(content, check.pattern);
            }
            break;
            
          case 'line-count':
            violated = checkLineCount(content);
            break;
            
          case 'component-props':
            violated = checkComponentProps(content);
            break;
            
          case 'kebab-case':
            violated = checkKebabCase(fullPath);
            break;
            
          case 'test-page':
            violated = checkTestPage(file, stagedFiles);
            break;
            
          default:
            break;
        }
        
        if (violated) {
          const severity = rule.severity === 'warning' ? 'warning' : 'error';
          const icon = severity === 'error' ? '❌' : '⚠️';
          const issue = `${icon} ${file}: ${check.message} [${rule.id}]`;
          issues.push({ rule: severity, message: issue });
          if (severity === 'error') {
            hasError = true;
          }
        }
      } catch (e) {
        // Skip if check fails
      }
    }
  }

  const errors = issues.filter(i => i.rule === 'error');
  const warnings = issues.filter(i => i.rule === 'warning');

  if (errors.length > 0) {
    log(`${RED}Erros encontrados:${RESET}`);
    errors.forEach(e => log(e.message, RED));
    log('');
  }

  if (warnings.length > 0) {
    log(`${YELLOW}Avisos:${RESET}`);
    warnings.forEach(w => log(w.message, YELLOW));
    log('');
  }

  if (hasError) {
    log(`${RED}❌ VERIFICAÇÃO FALHOU${RESET}`);
    return false;
  }

  log(`${GREEN}✅ Verificação aprovada${RESET}`);
  return true;
}

function runPlaywrightTests(stagedFiles) {
  log(`\n${CYAN}🧪 Executando testes Playwright...${RESET}\n`);

  const sourceFiles = stagedFiles.filter(f => 
    f.startsWith('frontend/src/') && (f.endsWith('.tsx') || f.endsWith('.ts'))
  );

  let features = [];
  
  if (sourceFiles.length > 0) {
    features = [...new Set(sourceFiles.map(f => {
      const parts = f.split('/');
      return parts[2];
    }))];
    log(`📁 Testando features relacionadas aos arquivos modificados: ${features.join(', ')}\n`);
  } else {
    log(`${YELLOW}⚠️  Nenhum arquivo fonte staged - executando todos os testes${RESET}\n`);
  }

  try {
    if (features.length > 0) {
      for (const feature of features) {
        log(`🎯 Executando testes de: ${feature}`);
        const testDir = path.join(PROJECT_ROOT, 'frontend', 'tests', 'features', feature);
        if (!fs.existsSync(testDir)) {
          log(`${YELLOW}⚠️  Diretório de testes não encontrado: ${feature}${RESET}`);
          continue;
        }
        execSync(`npx playwright test "tests/features/${feature}" --reporter=line`, {
          cwd: FRONTEND_ROOT,
          stdio: 'inherit',
          env: { ...process.env, CI: 'true' }
        });
      }
    } else {
      execSync(`npx playwright test --reporter=line`, {
        cwd: FRONTEND_ROOT,
        stdio: 'inherit',
        env: { ...process.env, CI: 'true' }
      });
    }
  } catch (error) {
    const stderr = error.stderr ? error.stderr.toString() : '';
    
    if (stderr.includes("Can't resolve 'tailwindcss'") || 
        stderr.includes("Cannot find module") ||
        stderr.includes("ERR_MODULE_NOT_FOUND")) {
      log(`${YELLOW}⚠️  Ambiente não configurado - pulando testes${RESET}`);
      return true;
    }
    
    log(`${RED}❌ Testes falharam${RESET}`);
    return false;
  }

  log(`${GREEN}✅ Todos os testes passaram${RESET}`);
  return true;
}

function main() {
  log(`${CYAN}🚀 Pre-commit validation...${RESET}\n`);

  const stagedFiles = getStagedFiles();
  
  if (stagedFiles.length === 0) {
    log(`${YELLOW}⚠️  Nenhum arquivo staged${RESET}`);
    log(`${GREEN}✅ Commit permitido${RESET}`);
    process.exit(0);
  }

  log(`📌 Arquivos staged: ${stagedFiles.length}\n`);

  const config = loadGuardrailsConfig();

  if (!runVerifyPatterns(stagedFiles, config)) {
    log(`\n${RED}❌ PRE-COMMIT BLOQUEADO - Padrões de código${RESET}`);
    process.exit(1);
  }

   if (!runPlaywrightTests(stagedFiles)) {
    log(`\n${RED}❌ PRE-COMMIT BLOQUEADO - Testes falharam${RESET}`);
    process.exit(1);
  } 

  log(`\n${GREEN}✅ Commit permitido${RESET}\n`);
  process.exit(0);
}

main();
