# Tasks: [nome-da-feature]

<!-- ctx_total_tasks: ~Xt -->

---

## US-001 — [Título]

```
Passes: false
Priority: 1
ctx_estimate: ~Xt
plan_ref: "#section-types"
gherkin_ref: "specs/features/[nome]/[nome].feature:@US-001"
files_affected:
  - src/app/types/xxx.types.ts
```

**AC:**
- [ ] Critério verificável
- [ ] Critério verificável

**Quality gates:** typecheck

---

## US-002 — [Título]

```
Passes: false
Priority: 2
ctx_estimate: ~Xt
plan_ref: "#section-hooks"
gherkin_ref: "specs/features/[nome]/[nome].feature:@US-002"
files_affected:
  - src/app/services/xxxService.ts
  - src/app/hooks/useXxx.ts
```

**AC:**
- [ ] Critério verificável

**Quality gates:** typecheck, lint, gherkin:@US-002

---

## US-003 — [Título]

```
Passes: false
Priority: 3
ctx_estimate: ~Xt
plan_ref: "#section-componentes"
gherkin_ref: "specs/features/[nome]/[nome].feature:@US-003"
files_affected:
  - src/app/components/XxxComponent.tsx
```

**AC:**
- [ ] Critério verificável

**Quality gates:** typecheck, lint, gherkin:@US-003, browser_check
