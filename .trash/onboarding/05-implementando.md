# Implementando: Como Codificar com Confiança

## O Segredo: TDD First

TDD (Test-Driven Development) é codificar **escrevendo o teste antes**.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CICLO TDD: RED → GREEN → REFACTOR             │
└─────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────────────────────────┐
    │                                                      │
    │   1. RED          2. GREEN          3. REFACTOR      │
    │   ┌────────┐       ┌────────┐       ┌────────┐       │
    │   │ ESCREVE│       │ ESCREVE│       │ MELHORA│       │
    │   │TESTE   │──────→│ CÓDIGO │──────→│ CÓDIGO │──────→│
    │   │QUE     │  FAIL │MÍNIMO │  PASS │SEMMUDAR│       │
    │   │FAIL   │       │PARA   │       │COMPORT.│       │
    │   └────────┘       │PASSAR │       └────────┘       │
    │                    └────────┘                        │
    │                                                      │
    └──────────────────────────────────────────────────────┘
```

---

## Passo a Passo: Implementando Uma Tarefa

### Cenário de Exemplo

```gherkin
# *.feature
@desktop @pending
Scenario: Logo click navigates to home
  Given I am on the "/about" page
  When I click the header logo
  Then I should be navigated to "/"
```

### Passo 1: Leia o *.spec.docs.md

Se existir, leia para guidance:

```bash
# Verifique se existe
ls frontend/tests/features/header/*.spec.docs.md
```

**O que encontrar:**
- data-testids documentados
- Passos de implementação sugeridos
- Referências de código

### Passo 2: Crie/Execute o Teste (RED)

```bash
# Execute o teste (vai falhar!)
cd frontend
npx playwright test tests/features/header/US-001.spec.ts
```

**Saída esperada:**
```
  ✗ Logo click navigates to home
    Error: locator.click("[data-testid="header-logo"]")
    Error: No such element: [data-testid="header-logo"]
```

**Isso é bom!** Significa que o teste está funcionando.

### Passo 3: Implemente o Código Mínimo (GREEN)

Edite `frontend/src/components/header/header.tsx`:

```tsx
import Link from 'next/link';

export const Header = () => {
  return (
    <header data-testid="header" className="fixed top-0 w-full h-[80px]">
      <Link href="/" data-testid="header-logo">
        Logo
      </Link>
    </header>
  );
};
```

### Passo 4: Execute o Teste Novamente (GREEN)

```bash
npx playwright test tests/features/header/US-001.spec.ts
```

**Saída esperada:**
```
  ✓ Logo click navigates to home
```

### Passo 5: Refatore (Se Necessário)

```tsx
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header 
      data-testid="header" 
      className={`fixed top-0 w-full h-[80px] bg-white ${className || ''}`}
    >
      <Link href="/" data-testid="header-logo" className="flex items-center">
        <span className="text-xl font-bold">Logo</span>
      </Link>
    </header>
  );
};
```

---

## Diagrama: Fluxo de Implementação

```
┌─────────────────────────────────────────────────────────────────┐
│              FLUXO DE IMPLEMENTAÇÃO POR TAREFA                  │
└─────────────────────────────────────────────────────────────────┘

    *.feature                    *.spec.docs.md
    ─────────                    ────────────────
         │                             │
         │  Leia cenários               │ Leia guidance
         │  e data-testids             │ e referências
         ▼                             ▼
    ┌────────────────────────────────────────┐
    │         ENTENDA O REQUISITO            │
    └────────────────┬───────────────────────┘
                     │
         ┌───────────┼───────────┐
         ▼           ▼           ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │   RED   │ │  GREEN  │ │ REFAC.  │
    │  Teste  │ │ Código  │ │  Clean  │
    │  first! │ │  min.   │ │  code   │
    └────┬────┘ └────┬────┘ └────┬────┘
         │           │           │
         │           │           │
         ▼           ▼           ▼
    ┌────────────────────────────────────────┐
    │              GATE VALIDA                │
    │  TDD → Verify → Typecheck → Lint      │
    └────────────────┬───────────────────────┘
                     │
                     ▼
                 ✅ DONE
```

---

## Onde Colocar o Código

```
frontend/
├── src/
│   ├── app/                    ← Páginas Next.js
│   │   ├── page.tsx           ← Home
│   │   ├── about/page.tsx     ← About
│   │   └── test-[name]/       ← Páginas de teste
│   │
│   └── components/            ← Componentes
│       ├── header/
│       │   ├── header.tsx     ← Componente
│       │   └── index.ts       ← Export
│       │
│       └── button/
│           ├── button.tsx
│           └── index.ts
│
└── tests/
    └── features/              ← Testes E2E
        └── header/
            ├── header.spec.ts ← Teste gerado
            └── US-001.spec.ts  ← Seu teste
```

---

## Como Saber Se Está Pronto?

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    CHECKLIST PRONTO!                            │
└─────────────────────────────────────────────────────────────────┘

□ Teste criado seguindo *.feature
□ Teste passa com @tdd-playwright
□ @verify-patterns passou
□ npx tsc --noEmit passou
□ npx eslint passou
□ progress.md atualizado
□ Revisão humana aprovada

Se tudo verde → Você está pronto para o PR! 🎉
```

---

## Exemplo Completo: Header

### 1. O Cenário

```gherkin
@desktop @pending
Scenario: Desktop menu shows all navigation items
  Given I am on the home page
  Then I should see the following navigation items:
    | Home     |
    | About    |
    | Projects |
    | Contact  |
```

### 2. O Teste (primeiro!)

```typescript
// US-003.spec.ts
test('Desktop menu shows all navigation items', async ({ page }) => {
  await page.goto('/');
  
  const items = ['Home', 'About', 'Projects', 'Contact'];
  for (let i = 0; i < items.length; i++) {
    await expect(page.locator(`[data-testid="header-nav-${i}"]`))
      .toHaveText(items[i]);
  }
});
```

### 3. A Implementação

```tsx
// header.tsx
const NAV_ITEMS = ['Home', 'About', 'Projects', 'Contact'];

export const Header = () => {
  return (
    <header data-testid="header" className="h-[80px]">
      <nav data-testid="header-desktop-menu" className="flex gap-6">
        {NAV_ITEMS.map((item, index) => (
          <Link 
            key={item}
            href={`/${item.toLowerCase()}`}
            data-testid={`header-nav-${index}`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};
```

### 4. O Resultado

```
✓ Desktop menu shows all navigation items
```

---

## Err Common Mistakes

| ❌ Error | ✅ Correção |
|----------|------------|
| Implementar antes do teste | RED primeiro! |
| Escrever teste complexo | Um assert por vez |
| Ignorar o data-testid | Use o que está no *.spec.docs.md |
| Testar implementação, não comportamento | Given-When-Then = comportamento |

---

## Próximo Passo

Entenda a validação → `06-gate.md`
