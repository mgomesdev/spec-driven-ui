# Comandos Úteis: Referência Rápida

## Git

### Branches

```bash
# Ver branch atual
git branch

# Listar todas as branches
git branch -a

# Criar e trocar de branch
git checkout -b feat/sidebar/US-001

# Trocar de branch
git checkout main
git checkout feat/sidebar/US-001
```

### Commit e Push

```bash
# Adicionar arquivos
git add .
git add arquivo-especifico.ts

# Commitar (formato conventional commits)
git commit -m "feat(sidebar): add logo navigation"

# Push
git push -u origin feat/sidebar/US-001

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

## Frontend (pasta frontend/)

```bash
# Instalar dependências
pnpm install

# Rodar scripts
pnpm dev          # desenvolvimento (localhost:3000)
pnpm build        # produção
pnpm start        # iniciar produção
pnpm test         # Playwright
pnpm lint         # ESLint
pnpm tsc          # TypeScript
pnpm pre-commit   # Validação completa
```

---

## Playwright

```bash
# Rodar todos os testes
pnpm playwright test

# Rodar teste específico
pnpm playwright test tests/features/sidebar/sidebar.spec.ts

# Modo watch (re-runs on change)
pnpm playwright test --watch

# Modo UI para debug
pnpm playwright test --ui

# Abrir página para debug
pnpm playwright open http://localhost:3000
```

---

## TypeScript

```bash
# Verificar tipos
cd frontend && pnpm tsc

# Verificar arquivo específico
cd frontend && pnpm tsc src/components/sidebar/sidebar.tsx
```

---

## ESLint

```bash
# Verificar todo o código
cd frontend && pnpm lint

# Corrigir automaticamente
cd frontend && pnpm lint --fix
```

---

## Atalhos VS Code

```bash
# Command Palette
Ctrl + Shift + P

# Multi-cursor
Alt + Click

# Mover linha
Alt + ↑ / ↓

# Format code
Shift + Alt + F
```

---

## Resumo Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                    CHEAT SHEET RÁPIDO                           │
└─────────────────────────────────────────────────────────────────┘

  DESENVOLVIMENTO:
  ────────────────
  pnpm dev              → Roda projeto
  pnpm build            → Build produção
  pnpm playwright test  → Testa

  VALIDAÇÃO:
  ──────────
  pnpm tsc              → Tipos
  pnpm lint             → Estilo
  pnpm pre-commit       → Tudo

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

Consulte o glossário → `09-glossario.md`
