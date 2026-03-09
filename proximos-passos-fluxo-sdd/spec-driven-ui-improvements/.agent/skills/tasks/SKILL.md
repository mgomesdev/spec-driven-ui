# Skill: tasks

> Camada: GENERATION LAYER
> Input: `research.md` + `plan.md` + `[nome].feature`
> Output: `specs/features/[nome]/tasks.md`
> Token budget output: ≤ 1.500 tokens total

---

## Quando usar

- "gere as tasks para [feature]"

---

## Regras de atomicidade

Cada task deve:
- Ser implementável em **uma única sessão** do orchestrator
- Ter `ctx_estimate` ≤ 2.000 tokens (contexto necessário para implementar)
- Afetar ≤ 3 arquivos
- Ter critérios de aceite verificáveis por typecheck ou teste

Se uma task ultrapassar esses limites → **quebre em subtasks**.

---

## Template de cada task

```markdown
## US-XXX — Título da história

Passes: false
Priority: 1
ctx_estimate: ~1.200t
plan_ref: "#section-componentes"
gherkin_ref: "specs/features/[nome]/[nome].feature:@US-XXX"
files_affected:
  - src/app/components/XxxComponent.tsx
  - src/app/hooks/useXxx.ts

AC:
  - [ ] Critério 1 verificável
  - [ ] Critério 2 verificável

Quality gates:
  - typecheck
  - lint
  - gherkin: @US-XXX
```

---

## Ordenação

Ordene por dependência:
1. Types & Interfaces (sem dependências)
2. Services / API calls
3. Hooks (dependem de types + services)
4. Componentes (dependem de hooks + types)
5. Páginas / layouts (dependem de componentes)
6. Integração / wiring final

---

## Token budget

- tasks.md total: ≤ 1.500 tokens
- Se feature for grande: divida em `tasks-fase-1.md` e `tasks-fase-2.md`

---

## Após gerar

1. Apresente lista de tasks com ctx_estimate e total estimado
2. **Aguarde aprovação**
