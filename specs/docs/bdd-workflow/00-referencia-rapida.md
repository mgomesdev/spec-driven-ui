# Referência Rápida - BDD Workflow

## Comandos Principais

```bash
# 1. Criar specification
@research-to-plan feature=header

# 2. Gerar BDD
@bdd-generator feature=header

# 3. Criar worktrees
@worktree-runner feature=header tags=desktop,mobile,a11y

# 4. Listar cenários
@orchestrator list feature=header

# 5. Delegar cenário
@orchestrator delegate scenario="Mobile exibe hamburger" to worktree=feat/header-mobile

# 6. Status
@orchestrator status feature=header

# 7. Aprovar
@orchestrator approve scenario="Mobile exibe hamburger"

# 8. Merge
@orchestrator merge feature=header
```

---

## Tags de Status

| Tag | Significado |
|-----|-------------|
| `@pending` | Não iniciado |
| `@in-progress` | Em execução |
| `@done` | Completo |
| `@blocked` | Bloqueado |
| `@bug` | Bug reportado |
| `@rejected` | Reprovado |

---

## Tags de Contexto

| Tag | Significado |
|-----|-------------|
| `@desktop` | Desktop (≥768px) |
| `@mobile` | Mobile (<768px) |
| `@tablet` | Tablet |
| `@a11y` | Acessibilidade |

---

## Status de Progresso

| Status | Ícone |
|--------|-------|
| Done | ✅ |
| In Progress | 🔄 |
| Pending | ⏳ |
| Bug | 🔴 |
| Blocked | 🔒 |
| Rejected | ❌ |

---

## Fluxo Resumido

```
research.md
    │
    ▼ @research-to-plan
plan.md
    │
    ▼ @bdd-generator
*.feature (@pending)
    │
    ▼ @worktree-runner
Worktrees
    │
    ▼ @orchestrator (delegar)
@subagent (ciclo TDD)
    │
    ▼
Aprovação humana
    │
    ▼
*.feature (@done)
    │
    ▼ @orchestrator (merge)
PR
```

---

## Pontos de Aprovação

| # | Quando | Quem |
|---|--------|------|
| 1 | plan.md | PO |
| 2 | *.feature | PO |
| 3 | Cenário verde | Revisor |
| 4 | 100% @done | Revisor |
| 5 | PR | PO/Tech Lead |

---

## Fluxos de Exceção

| Situação | Ação |
|----------|------|
| Retomada | Detecta @in-progress, pergunta se retoma |
| Bug inline | Corrige no mesmo ciclo |
| Bug pós-aprovado | Marca @bug, workflow de correção |
| Mudança requisito | Atualiza *.feature, reexecuta afetados |
| Rejeição | Marca @rejected, corrige |
| Bloqueado | Marca @blocked, desbloqueia depois |

---

## Estrutura de Arquivos

```
specs/features/[feature]/
├── research.md
├── plan.md
├── progress.md
└── features/
    └── [feature].feature

frontend/src/components/[feature]/
└── [feature].tsx

frontend/tests/features/[feature]/
└── [feature].spec.ts
```
