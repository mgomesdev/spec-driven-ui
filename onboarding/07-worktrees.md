# Worktrees: Trabalhando em Paralelo

## O Problema

Você está implementando a US-001 (Header). O Tech Lead pede: "Precisa mexer no Header também para a US-003."

```
❌ SEM WORKTREE

Branch atual: feat/header/US-001
                    │
                    ├── Header feito (50%)
                    └── Não pode parar para US-003!
                    
Resultado:blocking ou branch bagunçada
```

---

## A Solução: Git Worktree

Worktree permite ter **múltiplos branches simultâneos** em pastas diferentes.

```
✅ COM WORKTREE

Main repo (feat/header/US-001)
        │
        └── worktree: feat/header/US-003
              └──Header isolated, ready to merge
```

---

## Diagrama: Worktree em Ação

```
┌─────────────────────────────────────────────────────────────────┐
│                    WORKTREE: PARALELO                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  ~/projects/spec-driven-ui (main)                               │
│                                                                 │
│  Branches:                                                      │
│  ├── feat/header/US-001 (você trabalha aqui)                    │
│  └── feat/header/US-003 (worktree em outra pasta)              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
          │
          │        pasta 1: ~/projects/header-us001
          │        branch: feat/header/US-001
          │        status: 🔄 Working
          │
          │        pasta 2: ~/projects/header-us003  
          │        branch: feat/header/US-003
          │        status: 🔄 Worktree
          │
          │        pasta 3: ~/projects/header-mobile
          │        branch: feat/header/mobile-menu
          │        status: 🔄 Worktree
          │
          ▼
     Você pode alternar entre tarefas!
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
git worktree add ../header-us003 feat/header/US-003
```

**Resultado:**
```
Creating worktree on branch 'feat/header/US-003':
  U  /home/user/projects/header-us003
```

---

### 3. Verifique

```bash
git worktree list
```

**Saída:**
```
~/projects/spec-driven-ui          abc1234 [main]
~/projects/header-us003            def5678 [feat/header/US-003]
```

---

## Como Trabalhar Com Worktrees

### Acessar Cada Worktree

```bash
# Worktree principal
cd ~/projects/spec-driven-ui
git checkout feat/header/US-001

# Worktree secundário
cd ~/projects/header-us003
# Já está na branch certa!
```

### Alternar Entre Tarefas

```bash
# Terminal 1: US-001
cd ~/projects/spec-driven-ui

# Terminal 2: US-003
cd ~/projects/header-us003

# Ambos rodam simultaneamente!
```

---

## Boas Práticas

### ✅ Faça

- Use worktrees para tarefas **relacionadas mas isoladas**
- Mantenha cada worktree em pasta separada
- Dê nomes descritivos às pastas (ex: `feature-x`, `bugfix-y`)
- Commite e push antes de voltar ao main

### ❌ Não Faça

- Não abra o **mesmo arquivo em dois worktrees**
- Não use worktrees para branches totalmente diferentes
- Não esqueça de fazer `git pull` antes de criar worktree

---

## Exemplo Prático: Header e Mobile Menu

### Cenário

Você está implementando:
- **US-001:** Header desktop
- **US-005:** Mobile menu

### Passo a Passo

```bash
# 1. No repo principal, crie branch para mobile
git checkout -b feat/header/US-005-mobile-menu

# 2. Crie worktree para isolar
git worktree add ../header-mobile feat/header/US-005-mobile-menu

# 3. Agora você tem:
# Main: ~/projects/spec-driven-ui (US-001)
# Worktree: ~/projects/header-mobile (US-005)
```

### Resultado Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                    USANDO WORKTREES                              │
└─────────────────────────────────────────────────────────────────┘

  Terminal 1:                              Terminal 2:
  ─────────────────────────────────        ─────────────────────────────────
  $ cd ~/projects/spec-driven-ui          $ cd ~/projects/header-mobile
  $ git checkout feat/header/US-001       $ git checkout feat/header/US-005
  
  Working on Header desktop...             Working on Mobile menu...
  
  $ npx playwright test                    $ npx playwright test
  ✓ US-001 passing!                        ✓ US-005 passing!
  
  $ git add . && git commit                $ git add . && git commit
  $ git push                               
```

---

## Removendo Worktrees

```bash
# Remova quando terminar
git worktree remove ../header-mobile

# Ou se tiver mudanças não commitadas
git worktree remove ../header-mobile --force
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

## Troubleshooting

### Erro: " fatal: 'branch-name' is already being worked on"

```bash
# A branch já tem um worktree
# Liste para ver onde
git worktree list

# Use -f para forçar (se tiver certeza)
git worktree add -f ../pasta-nova feature/branch
```

### Erro: " fatal: cannot reset"

```bash
#-worktree tem mudanças não commitadas
# Commite ou descarte
git checkout -- .

# Depois tente novamente
git checkout main
```

---

## Quando Usar Worktrees

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    QUANDO USAR WORKTREES                         │
└─────────────────────────────────────────────────────────────────┘

  USE:
  ────
  □ Duas tasks no mesmo componente simultaneamente
  □ Precisa testar uma branch sem perder trabalho atual
  □ Code review que precisa mexer em código diferente
  
  NÃO USE:
  ─────────
  □ Tasks totalmente independentes (branches diferentes)
  □ Só precisa trocar de branch (use git checkout)
  □ Trabalhos pequenos que dá pra fazer em uma branch
```

---

## Próximo Passo

Comandos úteis → `08-comandos.md`
