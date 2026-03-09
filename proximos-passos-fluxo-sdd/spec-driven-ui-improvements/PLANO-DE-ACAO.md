# Plano de Ação — spec-driven-ui

> Objetivo: aumentar precisão do fluxo, reduzir alucinações, respeitar janela de contexto do Gemini Flash (~1M tokens, mas custo alto — economizar agressivamente).

---

## Arquitetura em Camadas

```
┌─────────────────────────────────────────────┐
│           GENERATION LAYER                  │
│  Skills: research, plan, tasks, orchestrator│
│  Human-in-the-loop em cada etapa            │
├─────────────────────────────────────────────┤
│           VALIDATION LAYER                  │
│  cross-check, gherkin/BDD, typecheck,       │
│  lint, hooks, testes                        │
├─────────────────────────────────────────────┤
│           ARTIFACT LAYER                    │
│  research.md, plan.md, tasks.md,            │
│  cross-check.md, progress.md                │
├─────────────────────────────────────────────┤
│           RUNTIME LAYER                     │
│  Next.js/React, hooks, services,            │
│  componentes gerados                        │
├─────────────────────────────────────────────┤
│           SPECIFICATION LAYER               │
│  AGENTS.md, FLUXO-DEV.md,                  │
│  features/, templates/                      │
└─────────────────────────────────────────────┘
```

---

## Fases de Implementação

### Fase 1 — Imediato (sem código, só Markdown)
| # | Arquivo | Ação |
|---|---------|------|
| 1 | `AGENTS.md` | Adicionar invariantes de stack, guards anti-alucinação, protocolo token-budget |
| 2 | `.agent/skills/research/SKILL.md` | Adicionar protocolo de esclarecimento estruturado |
| 3 | `.agent/skills/plan/SKILL.md` | Adicionar âncoras de seção + ctx_size por seção |
| 4 | `.agent/skills/tasks/SKILL.md` | Adicionar ctx_estimate + files_affected por task |
| 5 | `.agent/skills/orchestrator/SKILL.md` | Guards + destilação progress.md + rollback |
| 6 | `.agent/templates/research.template.md` | Template estruturado |
| 7 | `.agent/templates/plan.template.md` | Template com âncoras |
| 8 | `.agent/templates/tasks.template.md` | Template com ctx_estimate |

### Fase 2 — Validation Layer (novas skills + config)
| # | Arquivo | Ação |
|---|---------|------|
| 9 | `.agent/skills/cross-check/SKILL.md` | Nova skill de validação cruzada |
| 10 | `.agent/skills/gherkin/SKILL.md` | Nova skill de BDD/Gherkin |
| 11 | `.agent/quality-gates.json` | Configuração de quality gates |
| 12 | `scripts/new-feature.sh` | Scaffold automático de features |

### Fase 3 — Tooling (package.json + config files)
| # | Arquivo | Ação |
|---|---------|------|
| 13 | `package.json` | Adicionar scripts de validação |
| 14 | `.husky/pre-commit` | Hook de pré-commit |
| 15 | `vitest.config.ts` | Config de testes |
| 16 | `.commitlintrc.json` | Lint de commits |

---

## Arquivos deste plano

```
PLANO-DE-ACAO.md                          ← este arquivo
ANTES-DEPOIS.md                           ← diff visual de cada mudança

.agent/
  AGENTS.md                               ← MODIFICAR (era constitution implícita)
  quality-gates.json                      ← NOVO
  skills/
    research/SKILL.md                     ← MODIFICAR
    plan/SKILL.md                         ← MODIFICAR
    tasks/SKILL.md                        ← MODIFICAR
    orchestrator/SKILL.md                 ← MODIFICAR
    cross-check/SKILL.md                  ← NOVO
    gherkin/SKILL.md                      ← NOVO
  templates/
    research.template.md                  ← NOVO
    plan.template.md                      ← NOVO
    tasks.template.md                     ← NOVO

scripts/
  new-feature.sh                          ← NOVO

specs/
  INDEX.md                                ← NOVO
```
