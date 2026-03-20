# Estratégia de Worktrees

## Visão Geral

Worktrees permitem trabalho paralelo em branches isoladas. Cada worktree contém:
- Feature completa (mesmo código base)
- Worktree específica para um contexto (desktop, mobile, etc)

---

## Estratégias de Branching

### Opção 1: Uma Worktree por Tag

```
Main ─────────────────────────────────────────────────►
        │
        ├── feat/header-desktop    (@desktop scenarios)
        ├── feat/header-mobile     (@mobile scenarios)
        └── feat/header-a11y      (@a11y scenarios)
```

**Vantagens:**
- Paralelização máxima
- Contexto bem definido
- Merges incrementais

**Desvantagens:**
- Mais branches para gerenciar
- Potenciais conflitos

---

### Opção 2: Worktree por Feature

```
Main ─────────────────────────────────────────────────►
        │
        └── feat/header  (todos cenários)
```

**Vantagens:**
- Simplicidade
- Menos branches

**Desvantagens:**
- Sem paralelização real
- Gargalo de execução

---

### Recomendada: Opção 1 (por tag)

Para features com contextos bem definidos:
- `@desktop` scenarios → feat/[feature]-desktop
- `@mobile` scenarios → feat/[feature]-mobile
- `@a11y` scenarios → feat/[feature]-a11y
- `@api` scenarios → feat/[feature]-api

---

## Criação de Worktrees

### Comando

```bash
# Criar worktree para contexto desktop
git worktree add ../feat/header-desktop -b feat/header-desktop

# Criar worktree para contexto mobile
git worktree add ../feat/header-mobile -b feat/header-mobile
```

### Com Agent

```bash
# Usando worktree-runner
@worktree-runner create feature=header contexts=desktop,mobile,a11y
```

**Output:**
```
Worktrees criadas:
- feat/header-desktop (base: main)
- feat/header-mobile (base: main)
- feat/header-a11y (base: main)

Total: 3 worktrees
```

---

## Sincronização de *.feature

O arquivo *.feature deve ser sincronizado entre worktrees:

```
specs/features/header/
├── features/
│   └── header.feature    ← Arquivo fonte (main)
├── features-desktop/     ← Cópia para desktop worktree
├── features-mobile/     ← Cópia para mobile worktree
└── features-a11y/       ← Cópia para a11y worktree
```

**Sincronização:**
```bash
# Antes de iniciar trabalho
rsync -av specs/features/header/features/ worktree/feat/header-desktop/specs/features/header/features/

# Após completar cenário
rsync -av worktree/feat/header-desktop/specs/features/header/features/ specs/features/header/features/
```

---

## Gerenciamento de Conflitos

### Cenário: Conflito no *.feature

```
Worktree-1 (desktop) atualiza tag: @pending → @done
Worktree-2 (mobile) também atualiza: @pending → @in-progress
```

**Solução:**
```bash
# Antes de fazer pull/push, verificar última versão
git fetch origin

# Merge ou rebase conforme necessário
git merge origin/main

# Resolver conflitos manuais se necessário
```

---

## Ciclo de Vida

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CICLO DE VIDA DA WORKTREE                       │
└─────────────────────────────────────────────────────────────────────┘

1. CRIAÇÃO
   │
   ├── @worktree-runner cria worktree
   ├── Copia *.feature para worktree
   └── Prepara ambiente (npm install, etc)
   │
   ▼
2. EXECUÇÃO
   │
   ├── Subagent trabalha no cenário
   ├── *.spec.ts criado
   ├── Código implementado
   └── Testes passando
   │
   ▼
3. SINCRONIZAÇÃO
   │
   ├── Copia *.feature atualizado de volta
   ├── Copia *.spec.ts criado
   └── Copia código implementado
   │
   ▼
4. CONSOLIDAÇÃO
   │
   ├── Merge no main
   ├── Limpa worktree se não precisar mais
   └── Deleta worktree
   │
   ▼
5. FINALIZAÇÃO
   │
   └── Worktree removida
```

---

## Limpeza de Worktrees

```bash
# Listar worktrees ativas
git worktree list

# Output:
/spec-driven-ui            8a9b12c [main]
/spec-driven-ui-desktop    3b4c5d6 [feat/header-desktop]
/spec-driven-ui-mobile     7e8f9a0 [feat/header-mobile]
/spec-driven-ui-a11y       1a2b3c4 [feat/header-a11y]

# Remover worktree após merge
git worktree remove ../spec-driven-ui-desktop

# Remover branch após merge
git branch -d feat/header-desktop
```

---

## Exemplo: Header Feature

```
Main ───────────────────────────────────────────────────────────────►
        │
        ├───► feat/header-desktop ──► merge ──────────────────────►
        │         │
        │         ├── @desktop scenarios (3)
        │         ├── tests/features/header-desktop/
        │         └── src/components/header/
        │
        ├───► feat/header-mobile ───► merge ──────────────────────►
        │         │
        │         ├── @mobile scenarios (3)
        │         ├── tests/features/header-mobile/
        │         └── src/components/header/ (mesmo, sobrescreve)
        │
        └───► feat/header-a11y ─────► merge ──────────────────────►
                  │
                  ├── @a11y scenarios (1)
                  ├── tests/features/header-a11y/
                  └── src/components/header/ (mesmo, sobrescreve)
```

---

## Comandos Úteis

```bash
# Listar worktrees
git worktree list

# Criar worktree
git worktree add ../feat/[name] -b feat/[name]

# Remover worktree
git worktree remove ../feat/[name]

# Listar branches
git branch -a

# Verificar status de todas worktrees
git worktree list --porcelain | xargs -I {} sh -c 'echo {}; cd $(echo {} | cut -d" " -f1) && git status -s'
```
