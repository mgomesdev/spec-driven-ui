# PROJECT.config.md
# FONTE DE VERDADE — lida por todos os arquivos do .agent/
# Altere aqui. Os filhos leem daqui. Nunca duplique valores.

---

## [tokens]

```
research_max    = 600
plan_max        = 3000
tasks_max       = 1500
progress_max    = 100   # linhas (acima disso → destilar)
progress_active = 80    # linhas após destilação
task_ctx_max    = 2000  # tokens por iteração do orchestrator
agents_max      = 400   # o próprio AGENTS.md
ctx_safe_pct    = 60    # % da janela do modelo para considerar "seguro"
```

---

## [model]

```
provider        = gemini-flash
strategy        = token-economy   # priorizar brevidade em tudo
```

---

## [features]

```
# Camada GENERATION LAYER
skill_research      = true
skill_gherkin       = true
skill_plan          = true
skill_tasks         = true
skill_orchestrator  = true

# Camada VALIDATION LAYER
skill_cross_check   = true

# Camada VALIDATION LAYER — quality gates
gate_typecheck      = true
gate_lint           = true
gate_tests          = true
gate_gherkin        = true
gate_browser_check  = true
gate_a11y           = false
gate_coverage       = false   # habilitar quando base de testes amadurecer

# Camada VALIDATION LAYER — hooks
hook_pre_commit     = true
hook_commit_msg     = true

# Camada RUNTIME LAYER — tooling
use_vitest          = true
use_prettier        = true
use_commitlint      = true
use_husky           = true
```

---

## [stack]

```
framework       = next@15           # App Router APENAS. Nunca Pages Router.
language        = typescript        # strict mode. Zero `any`.
styling         = tailwindcss       # ÚNICO método. Nunca CSS Modules, styled-components.
validation      = zod               # formulários + schemas de API
server_state    = react-query       # Nunca useState para dados remotos
test_runner     = vitest            # Nunca Jest
test_ui         = @testing-library/react
```

---

## [conventions]

```
# Nomenclatura
component_case  = PascalCase
component_dir   = src/app/components/
hook_prefix     = use
hook_dir        = src/app/hooks/
service_case    = camelCase
service_dir     = src/app/services/
type_suffix     = Type | Props
type_dir        = src/app/types/
feature_dir     = src/app/features/
steps_suffix    = .steps.ts

# Git
commit_pattern  = {type}({feature}): {US-XXX} - {título}
commit_types    = feat | fix | refactor | test | chore | docs
commit_max_len  = 72
```

---

## [guards]

```
# Regras NUNCA — violação = PARAR e reportar ao humano
never_invent_component    = true   # se não está no plan.md → PARE
never_assume_lib          = true   # checar package.json sempre
never_file_outside_plan   = true   # só criar files_affected
never_beyond_task_scope   = true   # sem lógica extra
never_passes_without_gate = true   # Passes:true só com gates passando
never_invent_endpoint     = true   # endpoint não no plan.md → PARE

# Regras SEMPRE
always_report_missing_type = true  # tipo ausente no plan → PARE
always_report_missing_ep   = true  # endpoint ausente → PARE
always_ask_on_doubt        = true  # dúvida → humano, não invente
```

---

## [orchestrator]

```
max_fix_attempts    = 2     # tentativas de corrigir antes de desistir
progress_read_lines = 50    # quantas linhas do progress.md ler por iteração
plan_load_strategy  = surgical  # carregar APENAS seção plan_ref + #section-types
```

---

## [research]

```
# Domínios do protocolo de esclarecimento (true = obrigatório confirmar)
clarify_auth        = true
clarify_data        = true
clarify_state       = true
clarify_layout      = true
clarify_a11y        = true
clarify_i18n        = true
clarify_out_of_scope = true
```

---

## [gherkin]

```
language            = pt
max_lines_per_scenario = 5    # cenários maiores = AC grande demais → quebrar
tags_us             = true    # @US-XXX obrigatório em todo cenário
tags_smoke          = true    # @smoke para happy paths
tags_regression     = true    # @regression para edge cases
steps_dir           = src/app/features/
```

---

## [cross_check]

```
# Verificações (true = bloqueante se falhar)
check_ac_coverage       = true   # todo AC tem ao menos 1 task
check_type_consistency  = true   # tipos do plan usados nas tasks
check_api_contracts     = true   # plan bate com research
check_circular_deps     = false  # aviso não-bloqueante
check_token_budget      = false  # aviso não-bloqueante
```

---

## [progress]

```
max_lines_per_task  = 3     # linhas adicionadas por task concluída
archive_file        = progress-archive.md
distill_threshold   = 100   # linhas (igual a [tokens].progress_max)
distill_target      = 80    # linhas após destilação
confirmed_patterns_max = 20 # linhas na seção "Padrões confirmados"
```
