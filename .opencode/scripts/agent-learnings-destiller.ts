import fs from 'fs';
import path from 'path';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

interface Learning {
  id: string;
  pattern: string;
  category: 'comando_errado' | 'mal_entendido' | 'correcao_humana';
  originalIncident: string;
  createdAt: string;
}

interface LearningsData {
  learnings: Learning[];
  meta: {
    lastDestillation: string;
    totalPatterns: number;
  };
}

interface SessionLog {
  incidents: Array<{
    timestamp: string;
    description: string;
    category: string;
  }>;
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

function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isSimilar(text1: string, text2: string): boolean {
  const norm1 = normalizeForComparison(text1);
  const norm2 = normalizeForComparison(text2);
  
  if (norm1 === norm2) return true;
  if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
  
  const words1 = new Set(norm1.split(' '));
  const words2 = new Set(norm2.split(' '));
  const intersection = [...words1].filter(w => words2.has(w));
  const union = new Set([...words1, ...words2]);
  
  const jaccard = intersection.length / union.size;
  return jaccard > 0.6;
}

function extractPattern(description: string): string {
  const cleaned = description
    .replace(/^\[\d{2}:\d{2}\]\s*/, '')
    .replace(/→.*$/, '')
    .trim();
  
  const words = cleaned.split(' ').slice(0, 8).join(' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function loadJson<T>(filePath: string, defaultValue: T): T {
  if (!fs.existsSync(filePath)) {
    return defaultValue;
  }
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return defaultValue;
  }
}

function saveJson(filePath: string, data: unknown): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function destill(sessionLogPath: string, learningsPath: string): void {
  log(`${CYAN}🔄 Processando Agent Learnings...${RESET}\n`);
  
  const sessionLog: SessionLog = loadJson(sessionLogPath, { incidents: [] });
  
  if (sessionLog.incidents.length === 0) {
    log(`${YELLOW}⚠️  Nenhum incidente registrado na sessão${RESET}`);
    log(`${GREEN}✅ Destilação concluída${RESET}\n`);
    return;
  }
  
  log(`${CYAN}📝 Incidentes encontrados: ${sessionLog.incidents.length}${RESET}\n`);
  
  const learningsData: LearningsData = loadJson(learningsPath, {
    learnings: [],
    meta: { lastDestillation: '', totalPatterns: 0 }
  });
  
  const existingPatterns = learningsData.learnings.map(l => l.pattern);
  const newLearnings: Learning[] = [];
  
  for (const incident of sessionLog.incidents) {
    const pattern = extractPattern(incident.description);
    
    const alreadyExists = existingPatterns.some(p => isSimilar(pattern, p));
    
    if (!alreadyExists) {
      newLearnings.push({
        id: generateId(),
        pattern,
        category: incident.category as Learning['category'],
        originalIncident: incident.description,
        createdAt: new Date().toISOString()
      });
      
      existingPatterns.push(pattern);
    }
  }
  
  const now = new Date().toISOString();
  
  if (newLearnings.length > 0) {
    log(`${GREEN}🆕 Novos padrões extraídos:${RESET}`);
    newLearnings.forEach(l => log(`  + ${l.pattern}`, GREEN));
    log('');
    
    learningsData.learnings.push(...newLearnings);
  } else {
    log(`${YELLOW}⚠️  Nenhum padrão novo (já registrados ou não relevante)${RESET}\n`);
  }
  
  learningsData.meta.lastDestillation = now;
  learningsData.meta.totalPatterns = learningsData.learnings.length;
  
  saveJson(learningsPath, learningsData);
  
  const defaultSessionLog: SessionLog = { incidents: [] };
  saveJson(sessionLogPath, defaultSessionLog);
  
  log(`${GREEN}✅ Destilação concluída!${RESET}`);
  log(`${GREEN}📊 Total padrões consolidados: ${learningsData.meta.totalPatterns}${RESET}`);
  log(`${YELLOW}🧹 Session log zerado${RESET}\n`);
}

function main(): void {
  const PROJECT_ROOT = findGitRoot(__dirname);
  
  const sessionLogPath = path.join(PROJECT_ROOT, '.opencode', 'agent-session-log.json');
  const learningsPath = path.join(PROJECT_ROOT, 'agent-learnings.json');
  
  log(`${CYAN}🚀 Agent Learnings Destiller${RESET}\n`);
  
  try {
    destill(sessionLogPath, learningsPath);
    process.exit(0);
  } catch (error) {
    log(`${RED}❌ Erro durante destilação:${RESET}`, RED);
    console.error(error);
    process.exit(1);
  }
}

main();
