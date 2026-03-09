# FLUXO-DEV.md — v2
# Fonte de verdade do fluxo para o agente.
# Para documentação humana → README.md
# Para valores de configuração → PROJECT.config.md

---

## Arquitetura em camadas

```
SPECIFICATION  → PROJECT.config.md (singleton) · AGENTS.md · FLUXO-DEV.md · specs/
GENERATION     → skills: research · gherkin · plan · tasks · orchestrator
VALIDATION     → cross-check · quality-gates · testes · hooks
ARTIFACT       → *.md gerados por feature + *.feature (Gherkin)
RUNTIME        → src/ (Next.js/React commitado)
```

---

## Pipeline

```
[PROJECT.config.md] ← singleton injetado em TODA skill

[US do PO]
     │
     ▼
research    → specs/features/[f]/research.md     → 👤 aprovação
     │          limite: [tokens].research_max
     │          protocolo: [research].clarify_*
     ▼
gherkin     → specs/features/[f]/[f].feature     → 👤 aprovação
     │          ativo se: [features].skill_gherkin
     │          idioma: [gherkin].language
     ▼
plan        → specs/features/[f]/plan.md         → 👤 aprovação
     │          limite: [tokens].plan_max
     │          âncoras obrigatórias: #section-id
     ▼
tasks       → specs/features/[f]/tasks.md        → 👤 aprovação
     │          limite: [tokens].tasks_max
     │          ctx_estimate ≤ [tokens].task_ctx_max
     ▼
cross-check → specs/features/[f]/cross-check.md  → 👤 aprovação (BLOQUEANTE)
     │          ativo se: [features].skill_cross_check
     │          checks: [cross_check].check_*
     ▼
orchestrator — LOOP por task:
  1. ctx_estimate ≤ [tokens].ctx_safe_pct% da janela?
  2. progress.md > [tokens].progress_max linhas? → destilar
  3. Carregar: plan_ref + #section-types ([orchestrator].plan_load_strategy)
  4. Guards: [guards].never_* + [guards].always_*
  5. Implementar
  6. Quality gates (ordem, ativo se [features].gate_*):
     typecheck → lint → tests → gherkin:@US-XXX → browser_check
  7. Commit: [conventions].commit_pattern
  8. Passes: true | Passes: partial
FIM LOOP → destilar progress.md → atualizar specs/INDEX.md → 👤 PR
```

---

## Skills & camadas

| Skill | Camada | Flag em config | Humano aprova? |
|-------|--------|----------------|----------------|
| research | Generation | `skill_research` | ✅ |
| gherkin | Validation | `skill_gherkin` | ✅ |
| plan | Generation | `skill_plan` | ✅ |
| tasks | Generation | `skill_tasks` | ✅ |
| cross-check | Validation | `skill_cross_check` | ✅ bloqueante |
| orchestrator | Generation | `skill_orchestrator` | 🔁 por iteração |

---

## Acionamento

```
"crie a feature [nome]"           → scripts/new-feature.sh [nome]
"gere o research para [feature]"
"gere o gherkin para [feature]"
"gere o plan para [feature]"
"gere as tasks para [feature]"
"execute o cross-check de [feature]"
"execute as tasks de [feature]"
```
