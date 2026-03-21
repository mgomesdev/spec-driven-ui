const fs = require('fs');
const path = require('path');
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
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

const PROJECT_ROOT = findGitRoot(__dirname);
const messageFile = path.join(PROJECT_ROOT, '.git', 'COMMIT_EDITMSG');

if (!fs.existsSync(messageFile)) {
  console.log(`${RED}❌ Commit message file not found${RESET}`);
  process.exit(1);
}

const msg = fs.readFileSync(messageFile, 'utf8').trim();
const regex = /^(feat|fix|docs|style|refactor|test|chore|config)(\([\w-]+\))?!?: .+/;

if (!regex.test(msg.split('\n')[0])) {
  console.log(`${RED}❌ Invalid commit message format${RESET}`);
  console.log(`Expected: ${GREEN}<type>(<scope>): <description>${RESET}`);
  console.log(`Types: feat, fix, docs, style, refactor, test, chore, config`);
  process.exit(1);
}

console.log(`${GREEN}✅ Commit message valid${RESET}`);
