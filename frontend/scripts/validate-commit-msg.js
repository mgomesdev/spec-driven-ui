const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

function log(message, color = RESET) {
  console.log(`${color}${message}${RESET}`);
}

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

function validateCommitMessage(messageFile) {
  if (!messageFile) {
    log(`${RED}❌ Arquivo de mensagem não fornecido${RESET}`);
    process.exit(1);
  }

  let messagePath;
  if (path.isAbsolute(messageFile)) {
    messagePath = messageFile;
  } else {
    messagePath = path.resolve(process.cwd(), messageFile);
  }
  
  if (!fs.existsSync(messagePath)) {
    log(`${RED}❌ Arquivo de mensagem não encontrado: ${messagePath}${RESET}`);
    process.exit(1);
  }

  const message = fs.readFileSync(messagePath, 'utf8').trim();

  if (!message || message.length === 0) {
    log(`${RED}❌ Mensagem de commit vazia${RESET}`);
    process.exit(1);
  }

  const conventionalCommitRegex = /^(feat|fix|docs|style|refactor|test|chore|config)(\([\w-]+\))?!?: .+/;
  
  const lines = message.split('\n');
  const firstLine = lines[0].trim();
  
  if (!conventionalCommitRegex.test(firstLine)) {
    log(`\n${RED}❌ MENSAGEM INVÁLIDA${RESET}`);
    log(`
Formato esperado: <tipo>(<escopo>): <descrição>

Tipos válidos: feat, fix, docs, style, refactor, test, chore

Exemplo: feat(button): adiciona novo botão

Sua mensagem: ${firstLine}

💡 Para pular esta verificação: git commit --no-verify
`);
    process.exit(1);
  }
  
  if (lines.length > 1) {
    const hasEmptyLine = lines[1].trim() === '';
    if (!hasEmptyLine) {
      log(`${RED}❌ Corpo do commit deve ter linha em branco após o título${RESET}`);
      process.exit(1);
    }
  }
  
  log(`${GREEN}✅ Mensagem de commit válida${RESET}`);
  process.exit(0);
}

// Get message file from command line argument
const messageFile = process.argv[2];
validateCommitMessage(messageFile);
