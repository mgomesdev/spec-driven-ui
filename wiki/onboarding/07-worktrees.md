# Worktrees: Trabalhando em Paralelo

## O Problema

Você está implementando a US-001 (Sidebar). O Tech Lead pede: "Precisa mexer no Sidebar também para a US-003."

```
❌ SEM WORKTREE

Branch atual: feat/sidebar/US-001
              │
              ├── Sidebar feito (50%)
              └── Não pode parar para US-003!

Resultado: blocking ou branch bagunçada
```

---

## A Solução: Git Worktree

Worktree permite ter **múltiplos branches simultâneos** em pastas diferentes.

```
✅ COM WORKTREE

Main repo (feat/sidebar/US-001)
        │
        └── worktree: feat/sidebar/US-003
              └── Sidebar isolated, ready to merge
```

---

## Como Criar Um Worktree

### 1. Liste os Worktrees Atuais

```bash
git worktree list
```

**Saída:**
```
~/projects/spec-driven-ui    abc1234 [main]
```

---

### 2. Crie Um Novo Worktree

```bash
# Formato: git worktree add <caminho> <branch>
git worktree add ../sidebar-us003 feat/sidebar/US-003
```

**Resultado:**
```
Creating worktree on branch 'feat/sidebar/US-003':
  U  /home/user/projects/sidebar-us003
```

---

### 3. Verifique

```bash
git worktree list
```

**Saída:**
```
~/projects/spec-driven-ui          abc1234 [main]
~/projects/sidebar-us003          def5678 [feat/sidebar/US-003]
```

---

## Como Trabalhar Com Worktrees

### Acessar Cada Worktree

```bash
# Worktree principal
cd ~/projects/spec-driven-ui
git checkout feat/sidebar/US-001

# Worktree secundário
cd ~/projects/sidebar-us003
# Já está na branch certa!
```

### Alternar Entre Tarefas

```bash
# Terminal 1: US-001
cd ~/projects/spec-driven-ui

# Terminal 2: US-003
cd ~/projects/sidebar-us003

# Ambos rodam simultaneamente!
```

---

## Usando @worktree-runner

Crie worktrees via agente:

```bash
@worktree-runner Crie worktrees para as features sidebar e header
```

---

## Usando @worktree-mapper

Mapeia dependências entre componentes:

```bash
@worktree-mapper Analise as dependências da feature dashboard
```

---

## Removendo Worktrees

```bash
# Remova quando terminar
git worktree remove ../sidebar-us003

# Ou se tiver mudanças não commitadas
git worktree remove ../sidebar-us003 --force
```

---

## Comandos Rápidos

| Comando | Descrição |
|---------|-----------|
| `git worktree list` | Lista todos os worktrees |
| `git worktree add <path> <branch>` | Cria novo worktree |
| `git worktree remove <path>` | Remove worktree |
| `git worktree prune` | Limpa worktrees inválidos |

---

## Quando Usar Worktrees

```
USE:
─────────────────────────────────────────
□ Duas tasks no mesmo componente simultaneamente
□ Precisa testar uma branch sem perder trabalho atual
□ Code review que precisa mexer em código diferente

NÃO USE:
─────────────────────────────────────────
□ Tasks totalmente independentes
□ Só precisa trocar de branch (use git checkout)
□ Trabalhos pequenos que dá pra fazer em uma branch
```

---

## Troubleshooting

### Erro: "fatal: 'branch-name' is already being worked on"

```bash
# A branch já tem um worktree
git worktree list

# Use -f para forçar
git worktree add -f ../pasta-nova feature/branch
```

### Erro: "fatal: cannot reset"

```bash
# Worktree tem mudanças não commitadas
git checkout -- .

# Depois tente novamente
git checkout main
```

---

## Próximo Passo

Comandos úteis → `08-comandos.md`
