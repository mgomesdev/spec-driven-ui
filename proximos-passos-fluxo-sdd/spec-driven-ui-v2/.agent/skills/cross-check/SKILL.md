# Skill: cross-check
# Camada: VALIDATION LAYER
# Config: .agent/PROJECT.config.md → [cross_check] · [features].skill_cross_check

---

## Acionamento

- "execute o cross-check de [feature]"
- Verificar `[features].skill_cross_check = true` antes de executar

---

## Verificações

Execute apenas as verificações com `[cross_check].check_* = true`.

### check_ac_coverage (bloqueante se true)
Para cada AC em `research.md`:
- Existe task com esse AC listado?
- Existe `gherkin_ref` correspondente?
- Se não → **BLOQUEANTE**

### check_type_consistency (bloqueante se true)
- Tipo referenciado nas tasks existe em `#section-types` do plan?
- Tipo definido no plan é usado em ao menos 1 task?
- Se inconsistência → **BLOQUEANTE**

### check_api_contracts (bloqueante se true)
- Cada endpoint no plan existe no research?
- Método, payload e response batem?
- Se divergência → **BLOQUEANTE**

### check_circular_deps (aviso se true)
- Tasks que afetam o mesmo arquivo em ordem conflitante?
- Se sim → **AVISO (não bloqueia)**

### check_token_budget (aviso se true)
- Alguma task com `ctx_estimate` > `[tokens].task_ctx_max`?
- Se sim → **AVISO (não bloqueia)**

---

## Template do output

```markdown
# Cross-check: [feature]

## Status: ✅ OK | ⛔ BLOQUEADO

### Bloqueantes
- [ ] AC "..." não coberto por nenhuma task

### Avisos
- Task US-004 ctx_estimate ~2.800t > limite configurado

### Confirmado
- [x] Todos os ACs cobertos
- [x] Todos os tipos consistentes
- [x] Contratos de API verificados
```

---

## Regra de avanço

- Zero bloqueantes → orchestrator pode iniciar
- Qualquer bloqueante → humano corrige o artefato → re-executar cross-check

Salvar em: `specs/features/[nome]/cross-check.md`
**Aguarde aprovação**
