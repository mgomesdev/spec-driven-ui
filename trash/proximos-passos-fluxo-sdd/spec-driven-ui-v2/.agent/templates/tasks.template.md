# Tasks: [nome-da-feature]
<!-- ctx_total: ~Xt | Limite: [tokens].tasks_max tokens -->

---

## US-001 — Tipos & Interfaces

```
Passes: false
Priority: 1
ctx_estimate: ~Xt
plan_ref: "#section-types"
gherkin_ref: —
files_affected:
  - src/app/types/xxx.types.ts
```

AC:
- [ ] Tipos exportados sem erros de typecheck

Quality gates: typecheck

---

## US-002 — Service & Hook

```
Passes: false
Priority: 2
ctx_estimate: ~Xt
plan_ref: "#section-hooks"
gherkin_ref: "specs/features/[f]/[f].feature:@US-002"
files_affected:
  - src/app/services/xxxService.ts
  - src/app/hooks/useXxx.ts
```

AC:
- [ ] Hook retorna data/isLoading/error
- [ ] Erro de API tratado

Quality gates: typecheck, lint, gherkin:@US-002

---

## US-003 — Componente

```
Passes: false
Priority: 3
ctx_estimate: ~Xt
plan_ref: "#section-componentes"
gherkin_ref: "specs/features/[f]/[f].feature:@US-003"
files_affected:
  - src/app/components/XxxComponent.tsx
```

AC:
- [ ] Renderiza com props válidas
- [ ] Estado de loading visível

Quality gates: typecheck, lint, gherkin:@US-003, browser_check
