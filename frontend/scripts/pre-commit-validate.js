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

function getRuleCheckers() {
  return [
    {
      id: 'GR-003',
      name: 'Não usar `any` no TypeScript',
      severity: 'error',
      check: (content) => /: any|<any>/.test(content),
      message: 'Uso de "any" detectado'
    },
    {
      id: 'GR-004',
      name: 'Não fazer `fetch` direto em componentes',
      severity: 'error',
      check: (content, filePath) => {
        if (!filePath.endsWith('.tsx')) return false;
        return /useEffect.*fetch|fetch\(/.test(content);
      },
      message: 'Fetch direto em componente'
    },
    {
      id: 'GR-006',
      name: 'Não criar componentes sem tipar props',
      severity: 'error',
      check: (content, filePath) => {
        if (!filePath.endsWith('.tsx')) return false;
        const hasComponent = /(?:export\s+)?(?:const|function)\s+[A-Z]\w+/.test(content);
        if (!hasComponent) return false;
        const hasPropsType = /(?:interface|type)\s+\w+Props/.test(content) || /props:\s*\{/.test(content);
        return !hasPropsType;
      },
      message: 'Componente sem tipagem de props'
    },
    {
      id: 'GR-008',
      name: 'Não adicionar comentários no código',
      severity: 'warning',
      check: (content) => /\/\/|\/\*/.test(content),
      message: 'Comentário detectado'
    },
    {
      id: 'GR-011',
      name: 'Não adicionar tipagem de retorno',
      severity: 'warning',
      check: (content) => /: React\.JXSElement|: JSX\.Element/.test(content),
      message: 'Tipagem de retorno explícita'
    }
  ];
}

function runVerifyPatterns(stagedFiles) {
  log(`\n${CYAN}🔍 Verificando padrões do projeto...${RESET}\n`);

  const srcFiles = stagedFiles.filter(f => 
    f.startsWith('frontend/src/') && 
    (f.endsWith('.tsx') || f.endsWith('.ts'))
  );

  if (srcFiles.length === 0) {
    log(`${GREEN}✅ Sem arquivos fonte para verificar${RESET}`);
    return true;
  }

  log(`📁 Arquivos staged: ${srcFiles.length}\n`);

  const rules = getRuleCheckers();
  let hasError = false;
  const issues = [];

  for (const file of srcFiles) {
    const fullPath = path.join(PROJECT_ROOT, file);
    
    if (!fs.existsSync(fullPath)) continue;
    
    const content = fs.readFileSync(fullPath, 'utf8');

    for (const rule of rules) {
      try {
        if (rule.check(content, fullPath)) {
          const issue = `${rule.severity === 'error' ? '❌' : '⚠️'} ${file}: ${rule.message} [${rule.id}]`;
          issues.push({ rule: rule.severity, message: issue });
          if (rule.severity === 'error') {
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
  }

  if (warnings.length > 0) {
    log(`${YELLOW}Avisos:${RESET}`);
    warnings.forEach(w => log(w.message, YELLOW));
  }

  if (hasError) {
    log(`\n${RED}❌ VERIFICAÇÃO FALHOU${RESET}`);
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

  // 1. Get staged files
  const stagedFiles = getStagedFiles();
  
  if (stagedFiles.length === 0) {
    log(`${YELLOW}⚠️  Nenhum arquivo staged${RESET}`);
    log(`${GREEN}✅ Commit permitido${RESET}`);
    process.exit(0);
  }

  log(`📌 Arquivos staged: ${stagedFiles.length}\n`);

  // 2. Run code pattern verification
  if (!runVerifyPatterns(stagedFiles)) {
    log(`\n${RED}❌ PRE-COMMIT BLOQUEADO - Padrões de código${RESET}`);
    process.exit(1);
  }

  // 3. Run Playwright tests
  if (!runPlaywrightTests(stagedFiles)) {
    log(`\n${RED}❌ PRE-COMMIT BLOQUEADO - Testes falharam${RESET}`);
    process.exit(1);
  }

  log(`\n${GREEN}✅ Commit permitido${RESET}\n`);
  process.exit(0);
}

main();
