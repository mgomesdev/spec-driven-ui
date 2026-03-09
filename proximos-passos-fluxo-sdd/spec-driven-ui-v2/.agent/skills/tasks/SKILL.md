# Skill: tasks
# Camada: GENERATION LAYER
# Config: .agent/PROJECT.config.md → [tokens].tasks_max · [tokens].task_ctx_max

---

## Acionamento

- "gere as tasks para [feature]"

---

## Regras de atomicidade

Cada task deve:
- Ter `ctx_estimate` ≤ `[tokens].task_ctx_max`
- Afetar ≤ 3 arquivos
- Ter ACs verificáveis por typecheck ou teste
- Se ultrapassar esses limites → **quebre em subtasks**

---

## Template de task

```markdown
## US-XXX — Título

Passes: false
Priority: 1
ctx_estimate: ~Xt
plan_ref: "#section-id"
gherkin_ref: "specs/features/[f]/[f].feature:@US-XXX"
files_affected:
  - src/app/types/xxx.types.ts

AC:
  - [ ] Critério verificável

Quality gates: typecheck, lint, gherkin:@US-XXX
```

`Quality gates` = subconjunto dos gates ativos em `[features].gate_*`.
Tasks sem UI não precisam de `browser_check`.
Tasks de types não precisam de `gherkin`.

---

## Ordenação obrigatória

```
1. types         → sem dependências
2. services      → depende de types
3. hooks         → depende de types + services
4. components    → depende de hooks + types
5. pages/layouts → depende de components
6. wiring        → integração final
```

---

## Limite total

`tasks.md` ≤ `[tokens].tasks_max` tokens.
Se feature for grande: `tasks-fase-1.md` + `tasks-fase-2.md`.

---

## Após gerar

Liste tasks com ctx_estimate e total → **aguarde aprovação**
