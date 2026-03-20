import fs from 'fs';
import path from 'path';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

interface GuardrailCheck {
  type: 'regex' | 'file-exists' | 'line-count' | 'none';
  pattern?: string;
  maxLines?: number;
  extensions?: string[];
  message: string;
}

interface GuardrailRule {
  id: string;
  rule: string;
  severity: 'error' | 'warning' | 'critical';
  check: GuardrailCheck;
}

interface GuardrailsConfig {
  version: string;
  generatedFrom: string;
  generatedAt: string;
  rules: GuardrailRule[];
}

function findGitRoot(startPath: string): string {
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

function log(message: string, color: string = RESET): void {
  console.log(`${color}${message}${RESET}`);
}

function parseGuardrailsMarkdown(content: string): GuardrailRule[] {
  const rules: GuardrailRule[] = [];
  
  const lines = content.split('\n');
  let inAntiPatternsSection = false;
  let skipNextDash = false;
  
  for (const line of lines) {
    if (line.includes('Antipadrões a Evitar') || line.includes('antipadrões')) {
      inAntiPatternsSection = true;
      continue;
    }
    
    if (inAntiPatternsSection) {
      if (line.includes('---') && !skipNextDash) {
        skipNextDash = true;
        continue;
      }
      if (skipNextDash && line.includes('---')) {
        break;
      }
      
      const match = line.match(/^\s*\|\s*(\d+)\s*\|\s*(.+?)\s*\|?\s*$/);
      if (match) {
        const id = match[1];
        const ruleText = match[2].trim();
        
        if (ruleText && ruleText.length > 0) {
          const rule = convertRuleToCheck(id, ruleText);
          if (rule) {
            rules.push(rule);
          }
        }
      }
    }
  }
  
  return rules;
}

function convertRuleToCheck(id: string, ruleText: string): GuardrailRule | null {
  const ruleLower = ruleText.toLowerCase();
  
  if (ruleLower.includes('não use `any`') || ruleLower.includes('não usar `any`')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'regex',
        pattern: ': any|<any>',
        message: 'Uso de "any" detectado'
      }
    };
  }
  
  if (ruleLower.includes('não faça `fetch`') || ruleLower.includes('não fazer `fetch`')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'regex',
        pattern: 'useEffect.*fetch|fetch\\(',
        message: 'Fetch direto em componente'
      }
    };
  }
  
  if (ruleLower.includes('não crie componentes sem tipar')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'regex',
        pattern: '(?:export\\s+)?(?:const|function)\\s+[A-Z]\\w+.*(?:(?!Props).)*$',
        message: 'Componente sem tipagem de props'
      }
    };
  }
  
  if (ruleLower.includes('não ultrapasse 500 linhas') || ruleLower.includes('não exceder')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'line-count',
        maxLines: 500,
        message: 'Arquivo excede limite de linhas'
      }
    };
  }
  
  if (ruleLower.includes('não adicione comentários') || ruleLower.includes('não criar arquivos')) {
    if (ruleLower.includes('comentário')) {
      return {
        id: `GR-${id.padStart(3, '0')}`,
        rule: ruleText,
        severity: 'warning',
        check: {
          type: 'regex',
          pattern: '\\/\\/|\\/\\*',
          message: 'Comentário detectado'
        }
      };
    }
  }
  
  if (ruleLower.includes('padrão de nomenclatura')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'regex',
        pattern: '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*\\.(tsx?|ts)$',
        message: 'Nome de arquivo não segue padrão kebab-case'
      }
    };
  }
  
  if (ruleLower.includes('tipagem de retorno')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'warning',
      check: {
        type: 'regex',
        pattern: ': React\\.JXSElement|: JSX\\.Element',
        message: 'Tipagem de retorno explícita'
      }
    };
  }
  
  if (ruleLower.includes('teste') && ruleLower.includes('página')) {
    return {
      id: `GR-${id.padStart(3, '0')}`,
      rule: ruleText,
      severity: 'error',
      check: {
        type: 'file-exists',
        pattern: '**/test-*/page.tsx',
        message: 'Teste sem página de teste'
      }
    };
  }
  
  return {
    id: `GR-${id.padStart(3, '0')}`,
    rule: ruleText,
    severity: 'error',
    check: {
      type: 'none',
      message: `Violação da regra: ${ruleText}`
    }
  };
}

function generateGuardrailsJson(inputPath: string, outputPath: string): void {
  log(`${CYAN}🔄 Gerando guardrails.json do markdown...${RESET}\n`);
  
  if (!fs.existsSync(inputPath)) {
    log(`${RED}❌ Arquivo não encontrado: ${inputPath}${RESET}`, RED);
    process.exit(1);
  }
  
  const content = fs.readFileSync(inputPath, 'utf8');
  const rules = parseGuardrailsMarkdown(content);
  
  const config: GuardrailsConfig = {
    version: '1.0',
    generatedFrom: inputPath,
    generatedAt: new Date().toISOString(),
    rules
  };
  
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(config, null, 2), 'utf8');
  
  log(`${GREEN}✅ guardrails.json gerado com sucesso${RESET}`);
  log(`${GREEN}📊 Total de regras: ${rules.length}${RESET}\n`);
  
  rules.forEach(rule => {
    log(`  - ${rule.id}: ${rule.rule.substring(0, 50)}...`, CYAN);
  });
}

function main(): void {
  const PROJECT_ROOT = findGitRoot(__dirname);
  
  const inputPath = path.join(PROJECT_ROOT, 'specs', 'docs', 'guardrails.md');
  const outputPath = path.join(PROJECT_ROOT, 'specs', 'docs', 'guardrails.json');
  
  log(`${CYAN}🚀 Guardrails JSON Generator${RESET}\n`);
  
  try {
    generateGuardrailsJson(inputPath, outputPath);
    process.exit(0);
  } catch (error) {
    log(`${RED}❌ Erro durante geração:${RESET}`, RED);
    console.error(error);
    process.exit(1);
  }
}

main();
