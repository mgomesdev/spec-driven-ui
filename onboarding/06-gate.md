# Gate de Validação: Seu Código Passa Aqui!

## O Que É o Gate?

O Gate é um **checkpoint automático** que valida seu código antes de cada commit.

```
┌─────────────────────────────────────────────────────────────────┐
│                        GATE DE VALIDAÇÃO                         │
└─────────────────────────────────────────────────────────────────┘

   Seu código                        Se passar
   entra aqui                        → Commit OK
        │                                 ▲
        ▼                                 │
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ┌───────────┐    ┌────────────┐    ┌───────────┐         │
│   │    TDD    │───→│   Verify   │───→│  Typecheck│───→     │
│   │ (Playwright)   │  Patterns  │    │   (tsc)   │         │
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
npx playwright test
```

**O que verifica:**
- Cenários BDD estão passando
- Comportamento está correto

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
npx pre-commit  # ou node scripts/pre-commit-validate.js
```

**O que verifica:**
- Props tipadas em componentes
- Sem uso de `any`
- Sem fetch em componentes
- Convenções de código

**Se falhar:**
```
Error: GR-003 - Component without typed props
  File: src/components/header/header.tsx
  Line: 3
```
→ Adicione tipagem às props.

---

### 3. Typecheck (TypeScript)

```bash
cd frontend
npx tsc --noEmit
```

**O que verifica:**
- Tipos corretos
- Sem erros de TypeScript

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
npx eslint src/
```

**O que verifica:**
- Estilo de código
- Boas práticas

**Se falhar:**
```
Warning: Prop 'className' should be camelCase
  src/components/header/header.tsx:10
```
→ Corrija o estilo.

---

## Diagrama: Fluxo do Gate

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
// ❌ Teste falhou
test('Logo click navigates to home', async ({ page }) => {
  await page.goto('/about');
  await page.click('[data-testid="header-logo"]');
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

## Quando Pedir Ajuda

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    QUANDO PERGUNTAR?                             │
└─────────────────────────────────────────────────────────────────┘

  PERGUNTE SE:
  ────────────
  □ Erro que você nunca viu antes
  □ TDD não passa depois de 3 tentativas
  □ Erro de arquitetura (não sabe onde colocar código)
  □ Conflito entre requisitos e padrão do projeto
  
  NÃO PRECISA PERGUNTAR:
  ─────────────────────
  □ Erro de digitação
  □ Tag faltando
  □ Import faltando
  □ Erro de tipagem simples
```

---

## Validação Manual (Opcional)

Antes do commit, você pode validar manualmente:

```bash
# Na pasta frontend
cd frontend

# 1. Testes
npx playwright test --reporter=list

# 2. Typecheck
npx tsc --noEmit

# 3. Lint
npx eslint src/ --max-warnings=0
```

---

## Pré-commit Hook

O `.husky/pre-commit` executa **automaticamente**:

```
git commit -m "feat: implement header logo"
    │
    ▼
┌─────────────────┐
│  Agent Learnings │ ← Salva padrões
│  Destiller      │
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

## Checklist Pré-Commit

```ascii
□ TDD: npx playwright test passou
□ Verify: node scripts/pre-commit-validate.js passou
□ Typecheck: npx tsc --noEmit passou
□ Lint: npx eslint src/ passou
□ progress.md atualizado
□ *.feature: @pending → @done (se US completa)
```

---

## Próximo Passo

Trabalho em paralelo → `07-worktrees.md`
