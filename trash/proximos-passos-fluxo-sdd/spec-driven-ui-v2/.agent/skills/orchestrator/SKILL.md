# Skill: orchestrator
# Camada: GENERATION LAYER (execução) + VALIDATION LAYER (gates)
# Config: .agent/PROJECT.config.md → [orchestrator] · [tokens] · [guards] · [features] · [progress]

---

## Acionamento

- "execute as tasks de [feature]"

---

## PRÉ-LOOP — executar uma vez

```
1. Ler PROJECT.config.md inteiro (é o singleton — sempre atualizado)
2. Verificar cross-check.md: status = OK?
   Se BLOQUEADO → PARE. Reporte ao humano.
3. Verificar progress.md:
   Se linhas > [tokens].progress_max → executar SUB-ROTINA DESTILAÇÃO
```

---

## LOOP — uma task por vez

### 1. Selecionar
- Próxima task: `Passes: false`, maior `Priority`
- `ctx_estimate` ≤ `[tokens].ctx_safe_pct`% da janela disponível?
  - Se não cabe → compactar histórico ou iniciar nova sessão

### 2. Carregar contexto (cirúrgico)
Estratégia: `[orchestrator].plan_load_strategy`

```
Carregar APENAS:
  ✓ Seção plan_ref da task (âncora do plan.md)
  ✓ Seção #section-types do plan.md (sempre)
  ✓ progress.md → últimas [orchestrator].progress_read_lines linhas
  ✓ A task atual (arquivo tasks.md, só a task em execução)

NÃO carregar:
  ✗ plan.md inteiro
  ✗ research.md (já processado nas etapas anteriores)
  ✗ histórico completo de mensagens
```

### 3. Verificar guards
Leia `[guards]` em PROJECT.config.md.

Para cada `never_* = true`:
```
never_invent_component    → componente no plan.md? Se não → PARE
never_assume_lib          → checar package.json antes de qualquer import
never_file_outside_plan   → só criar arquivos em files_affected
never_beyond_task_scope   → sem lógica extra além do AC
never_passes_without_gate → não marcar Passes:true sem gates OK
never_invent_endpoint     → endpoint no plan.md? Se não → PARE
```

Para cada `always_* = true`:
```
always_report_missing_type → tipo ausente → PARE e liste o que falta
always_report_missing_ep   → endpoint ausente → PARE
always_ask_on_doubt        → dúvida → pergunte. Nunca invente.
```

### 4. Implementar
- Seguir tipos de `#section-types` exatamente
- Criar apenas arquivos em `files_affected`
- Sem lógica além do escopo da task

### 5. Quality gates
Execute apenas os gates com `[features].gate_* = true`.
Ordem — parar no primeiro falho:

```
gate_typecheck    → tsc --noEmit
gate_lint         → eslint --max-warnings 0
gate_tests        → vitest run [files_affected]
gate_gherkin      → vitest run --grep {gherkin_ref}
gate_browser_check → verificação visual (só tasks com UI)
gate_a11y         → axe-core (se habilitado)
gate_coverage     → vitest run --coverage (se habilitado)
```

### 6. SE gates passam
```
git add [files_affected apenas]
git commit -m "[conventions].commit_pattern"
  ex: "feat(nome-feature): US-XXX - Título"
Marcar: Passes: true
Registrar no progress.md → máx [progress].max_lines_per_task linhas
```

### 7. SE gates falham
```
Tentar corrigir → máx [orchestrator].max_fix_attempts vezes
Se ainda falha:
  git stash
  Marcar: Passes: partial
  Registrar erro exato no progress.md
  Reportar ao humano: erros + arquivos afetados
  PARAR
```

### 8. Próxima task
- Há tasks com `Passes: false`? → voltar ao passo 1
- Todas `Passes: true`? → executar PÓS-LOOP

---

## PÓS-LOOP

```
1. Executar SUB-ROTINA DESTILAÇÃO
2. Atualizar specs/INDEX.md: feature = ✅ Concluída
3. Reportar: N tasks | N commits | arquivos criados
4. Humano faz PR
```

---

## Sub-rotina: destilação do progress.md

Executar quando `linhas > [progress].distill_threshold`:

```
1. Identificar padrões repetidos
2. Consolidar em "## Padrões confirmados"
   máx [progress].confirmed_patterns_max linhas
3. Mover histórico para [progress].archive_file
4. Manter progress.md ≤ [progress].distill_target linhas
```
