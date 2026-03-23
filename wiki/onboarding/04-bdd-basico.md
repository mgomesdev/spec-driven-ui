# BDD Básico: Behavior-Driven Development

## O Que É BDD?

BDD é uma forma de escrever requisitos que **todos entendem** — PO, Dev, QA, cliente.

```
BDD = Given-When-Then

Given  = Dado que   (Contexto/pré-condição)
When   = Quando     (Ação do usuário)
Then   = Então      (Resultado esperado)
```

---

## Anatomia de Um Cenário

```gherkin
Feature: Sidebar Navigation

  @desktop @pending
  Scenario: Logo click redirects to home
    Given I am on any page
    When I click the sidebar logo
    Then I should be on the home page
```

### Decomposição

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANATOMIA DO CENÁRIO                          │
└─────────────────────────────────────────────────────────────────┘

Feature: Sidebar Navigation          ← TEMA (agrupa cenários)
│
├── @desktop                         ← TAG (contexto)
│
└── Scenario: Logo click...          ← TÍTULO (o que testar)
    │
    ├── Given I am on any page       ← CONTEXTO (onde estamos)
    │
    ├── When I click the logo        ← AÇÃO (o que fazer)
    │
    └── Then I should be on home     ← RESULTADO (o que esperar)
```

---

## Tags: Categorizando Cenários

| Tag | Uso | Exemplo |
|-----|-----|---------|
| `@desktop` | Testes desktop (1280px+) | Header em desktop |
| `@mobile` | Testes mobile (375px) | Menu hamburger |
| `@tablet` | Testes tablet (768px) | Menu responsivo |
| `@a11y` | Acessibilidade | Navegação por teclado |
| `@pending` | Não implementado | Sua tarefa! |
| `@done` | Implementado e testado | Pronto para PR |

### Múltiplas Tags

```gherkin
@desktop @a11y @pending
Scenario: User can navigate using keyboard
  Given I am on the home page
  When I press Tab three times
  Then the logo should be focused
```

---

## Cenário → Teste (Transformação)

```
┌─────────────────────────────────────────────────────────────────┐
│              CENÁRIO → TESTE PLAYWRIGHT                          │
└─────────────────────────────────────────────────────────────────┘

   *.feature                             frontend/tests/
   ─────────                             ───────────────

   Given I am on any page        →     await page.goto('/')

   When I click the logo         →     await page.click('[data-testid="sidebar-logo"]')

   Then I should be on home      →     await expect(page).toHaveURL('/')
```

---

## Exemplo Completo: Sidebar Feature

### O *.feature

```gherkin
# specs/features/sidebar/features/sidebar.feature

Feature: Sidebar Component

  Background:
    Given the viewport is desktop size

  @desktop @pending
  Scenario: Logo click navigates to home
    Given I am on the "/about" page
    When I click the sidebar logo
    Then I should be navigated to "/"

  @desktop @pending
  Scenario: Desktop menu shows all navigation items
    Given I am on the home page
    Then I should see the following navigation items:
      | Home     |
      | About    |
      | Projects |
      | Contact  |

  @mobile @pending
  Scenario: Mobile menu opens on hamburger click
    Given I am on the home page
    And the viewport is mobile size
    When I click the hamburger menu button
    Then the mobile overlay should be visible
```

### O Teste (Playwright)

```typescript
// frontend/tests/features/sidebar/sidebar.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Sidebar Component', () => {

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Logo click navigates to home', async ({ page }) => {
    await page.goto('/about');
    await page.click('[data-testid="sidebar-logo"]');
    await expect(page).toHaveURL('/');
  });

  test('Desktop menu shows all navigation items', async ({ page }) => {
    await page.goto('/');

    const items = ['Home', 'About', 'Projects', 'Contact'];
    for (let i = 0; i < items.length; i++) {
      await expect(page.locator(`[data-testid="sidebar-nav-${i}"]`))
        .toHaveText(items[i]);
    }
  });

  test('Mobile menu opens on hamburger click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.click('[data-testid="hamburger-button"]');
    await expect(page.locator('[data-testid="sidebar-mobile-overlay"]'))
      .toBeVisible();
  });
});
```

---

## Convenções de data-testid

```
Elemento                    data-testid
─────────────────────────────────────────
Sidebar principal           sidebar
Logo do sidebar            sidebar-logo
Menu desktop               sidebar-desktop-menu
Botão hamburger            hamburger-button
Overlay mobile             sidebar-mobile-overlay
Item de navegação (0..n)   sidebar-nav-0
```

---

## Boas Práticas

### ✅ Faça

- Use linguagem de negócio, não técnica
- Um cenário = uma unidade de comportamento
- Given-When-Then em uma linha lógica
- Tags para categorizar e filtrar

### ❌ Não Faça

- Não coloque implementação no cenário
- Não use "e" excessivamente (máx 2 por passo)
- Não teste múltiplos comportamentos juntos
- Não use linguagem técnica (ex: "clica no <a>")

---

## Exercício

**Requisito:** "Quando o usuário clica em 'Login' no sidebar, deve aparecer um modal de login."

### Sua resposta:

```gherkin
@desktop @pending
Scenario: Login modal opens on sidebar button click
  Given I am on the home page
  When I click the "Login" button in the sidebar
  Then the login modal should be visible
```

---

## Próximo Passo

Implemente seguindo TDD → `05-implementando.md`
