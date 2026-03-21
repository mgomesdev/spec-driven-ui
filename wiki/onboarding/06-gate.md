# Gate de Validação

## O Que É o Gate?

O Gate é um **checkpoint automático** que valida seu código antes de cada commit.

```
┌─────────────────────────────────────────────────────────────────┐
│                        GATE DE VALIDAÇÃO                         │
└─────────────────────────────────────────────────────────────────┘

    Seu código                        Se passar
    entra aqui                        → Commit OK
         │
         ▼
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ┌───────────┐    ┌────────────┐    ┌───────────┐         │
│   │    TDD    │───→│   Verify   │───→│  Typecheck│───→     │
│   │(Playwright)   │  Patterns  │    │   (tsc)   │         │
│   └───────────┘    └────────────┘    └───────────┘         │
│        │                  │                 │               │
│        │                  │                 │               │
│        └──────────────────┼─────────────────┘               │
│                           │                                 │
│                           ▼                                 │
│                    ┌───────────┐                           │
│                    │   Lint    │                           │
│                    │ (ESLint)  │                           │
│                    └───────────┘                           │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

## As 4 Etapas do Gate

### 1. TDD (Playwright) — Testes E2E

```bash
cd frontend
pnpm playwright test
```

**Verifica:** Cenários BDD passando, comportamento correto.

**Se falhar:**
```
✗ Logo click navigates to home
  Expected: URL to be "/"
  Actual: URL is "/about"
```
→ Corrija o código ou o teste.

---

### 2. Verify Patterns

```bash
cd frontend
pnpm pre-commit
# ou
node scripts/pre-commit-validate.js
```

**Verifica:**
- Props tipadas em componentes
- Sem uso de `any`
- Sem fetch em componentes
- Convenções de código

**Se falhar:**
```
Error: GR-003 - Component without typed props
  File: src/components/sidebar/sidebar.tsx
```
→ Adicione tipagem às props.

---

### 3. Typecheck (TypeScript)

```bash
cd frontend
pnpm tsc
# ou
pnpm typecheck
```

**Verifica:** Tipos corretos, sem erros TypeScript.

**Se falhar:**
```
Error: TS2322 - Type 'string' is not assignable to type 'number'
  src/components/button/button.tsx:15
```
→ Corrija os tipos.

---

### 4. Lint (ESLint)

```bash
cd frontend
pnpm lint
```

**Verifica:** Estilo de código, boas práticas.

**Se falhar:**
```
Warning: Prop 'className' should be camelCase
  src/components/sidebar/sidebar.tsx:10
```
→ Corrija o estilo.

---

## Fluxo do Gate

```
┌─────────────────────────────────────────────────────────────────┐
│                 SEU CÓDIGO NO GATE                              │
└─────────────────────────────────────────────────────────────────┘

  [CÓDIGO PRONTO]
        │
        ▼
  ┌───────────┐
  │   TDD     │ ──── FALHOU? ───→ Corrija código ──→ Repete
  │  ✓ PASS   │
  └─────┬─────┘
        │
        ▼
  ┌───────────┐
  │  Verify   │ ──── FALHOU? ───→ Corrija padrão ──→ Repete
  │  ✓ PASS   │
  └─────┬─────┘
        │
        ▼
  ┌───────────┐
  │Typecheck  │ ──── FALHOU? ───→ Corrija tipos ──→ Repete
  │  ✓ PASS   │
  └─────┬─────┘
        │
        ▼
  ┌───────────┐
  │   Lint    │ ──── FALHOU? ───→ Corrija estilo ──→ Repete
  │  ✓ PASS   │
  └─────┬─────┘
        │
        ▼
    ✅ PRONTO!
        │
        ▼
    git commit
```

---

## O Que Fazer Se Algo Falhar

### Situação 1: Teste Falhou

```typescript
test('Logo click navigates to home', async ({ page }) => {
  await page.goto('/about');
  await page.click('[data-testid="sidebar-logo"]');
  await expect(page).toHaveURL('/'); // Falhou! Ficou em /about
});
```

**Ação:** Verifique se:
1. O Link está com `href="/"`
2. O data-testid está correto
3. O componente está sendo renderizado

---

### Situação 2: Verify Patterns Falhou

```
Error: GR-004 - No fetch in components
  src/components/user-profile.tsx:15
```

**Ação:** Mova o fetch para um service ou hook.

---

### Situação 3: Typecheck Falhou

```
Error: TS2322 - Type 'string' is not assignable to type 'number'
```

**Ação:** Adicione cast ou corrija o tipo.

---

### Situação 4: Lint Falhou

```
Warning: 'console.log' should not be used
```

**Ação:** Remova `console.log` ou use logger.

---

## Pré-commit Hook

O `.husky/pre-commit` executa **automaticamente**:

```bash
git commit -m "feat: implement sidebar logo"
    │
    ▼
┌─────────────────┐
│  Agent Learnings │ ← Salva padrões
│  Destiller       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Code Pattern   │ ← Verifica padrões
│  Validation     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Playwright     │ ← Executa testes
│  Tests          │
└────────┬────────┘
         │
         ▼
    ✅ Commit OK!
```

---

## Validação Manual (Opcional)

Antes do commit:

```bash
cd frontend

# 1. Testes
pnpm playwright test --reporter=list

# 2. Typecheck
pnpm tsc --noEmit

# 3. Lint
pnpm lint --max-warnings=0
```

---

## Checklist Pré-Commit

```
□ TDD: pnpm playwright test passou
□ Verify: pnpm pre-commit passou
□ Typecheck: pnpm tsc --noEmit passou
□ Lint: pnpm lint passou
□ progress.md atualizado
□ *.feature: @pending → @done (se US completa)
```

---

## Quando Pedir Ajuda

```
PERGUNTE SE:
───────────────────────────────────────
□ Erro que você nunca viu antes
□ TDD não passa depois de 3 tentativas
□ Erro de arquitetura (onde colocar código)
□ Conflito entre requisitos e padrão do projeto

NÃO PRECISA PERGUNTAR:
───────────────────────────────────────
□ Erro de digitação
□ Import faltando
□ Erro de tipagem simples
```

---

## Próximo Passo

Trabalho em paralelo → `07-worktrees.md`
