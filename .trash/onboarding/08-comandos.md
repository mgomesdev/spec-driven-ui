# Comandos Úteis: Referência Rápida

## Git

### Branches

```bash
# Ver branch atual
git branch

# Listar todas as branches
git branch -a

# Criar e trocar de branch
git checkout -b feat/header/US-001

# Trocar de branch
git checkout main
git checkout feat/header/US-001
```

### Commit e Push

```bash
# Adicionar arquivos
git add .
git add arquivo-especifico.ts

# Commitar (formato conventional commits)
git commit -m "feat(header): add logo navigation"

# Push
git push -u origin feat/header/US-001

# Amend (só se NÃO tiver pushado!)
git commit --amend -m "fix: corrigir mensagem"
```

### Status e Histórico

```bash
# Ver status
git status

# Ver alterações
git diff
git diff --staged

# Ver histórico
git log --oneline -10
git log --graph --oneline --all
```

### Worktrees

```bash
# Listar worktrees
git worktree list

# Criar worktree
git worktree add ../nova-pasta feat/branch-name

# Remover worktree
git worktree remove ../pasta
```

---

## NPM/PNPM

```bash
# Instalar dependências
pnpm install
npm install

# Instalar nova dependência
pnpm add nome-do-pacote
pnpm add -D nome-do-pacote  # dev dependency

# Rodar scripts
pnpm dev        # desenvolvimento
pnpm build      # produção
pnpm start      # iniciar produção
pnpm test       # Playwright
pnpm lint       # ESLint
```

---

## Playwright

```bash
# Rodar todos os testes
npx playwright test

# Rodar teste específico
npx playwright test tests/features/header/US-001.spec.ts

# Modo watch (re-runs on change)
npx playwright test --watch

# Gerar relatório HTML
npx playwright test --reporter=html

# Abrir UI para debug
npx playwright test --ui

# Apenas checar se página carrega
npx playwright open http://localhost:3000
```

---

## TypeScript

```bash
# Verificar tipos (todo projeto)
cd frontend && npx tsc --noEmit

# Verificar arquivo específico
cd frontend && npx tsc --noEmit src/components/header/header.tsx
```

---

## ESLint

```bash
# Verificar todo o código
cd frontend && npx eslint src/

# Corrigir automaticamente
cd frontend && npx eslint src/ --fix
```

---

## Pre-commit

```bash
# Rodar validação manualmente
cd frontend && node scripts/pre-commit-validate.js

# Validar mensagem de commit
node scripts/validate-commit-msg.js "feat(header): add logo"
```

---

## Atalhos Úteis (Terminal)

```bash
# Limpar tela
Ctrl + L

# Cancelar comando
Ctrl + C

# Auto-complete
Tab

# Histórico de comandos
↑ / ↓

# Sair do terminal
exit
```

---

## VS Code - Atalhos

```bash
# Command Palette
Ctrl + Shift + P

# Multi-cursor
Alt + Click

# Selecionar tudo igual
Ctrl + Shift + L

# Mover linha
Alt + ↑ / ↓

# Duplicar linha
Shift + Alt + ↑ / ↓

# Format code
Shift + Alt + F
```

---

## Resumo Visual

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    CHEAT SHEET RÁPIDO                           │
└─────────────────────────────────────────────────────────────────┘

  DESENVOLVIMENTO:
  ────────────────
  pnpm dev              → Roda projeto
  pnpm build            → Build produção
  npx playwright test   → Testa

  VALIDAÇÃO:
  ──────────
  npx tsc --noEmit      → Tipos
  npx eslint src/       → Estilo
  node scripts/pre-...  → Padrões

  GIT:
  ────
  git status            → O que mudou?
  git add .             → Adicionar tudo
  git commit -m "..."   → Commitar
  git push              → Subir
  git worktree list     → Ver worktrees
```

---

## Próximo Passo

Dicas e boas práticas → `09-tips.md`
