# Exemplo Completo: Feature Header

## 1. research.md

```markdown
# Header

## User Stories

### US-001: Header Desktop
Como visitante, eu quero ver um header com logo e menu de navegação 
para que eu possa navegar entre as páginas.

### US-002: Header Mobile
Como visitante mobile, eu quero um menu hamburger para que eu possa 
acessar a navegação em telas menores.

### US-003: Logo Clicável
Como visitante, eu quero clicar no logo para voltar à página inicial.

## Stack
- Next.js 16
- React 19
- TypeScript 5.9
- Tailwind CSS v4

## RFs
- RF-01: Header fixo no topo com altura 80px
- RF-02: Menu desktop com 4 itens (Início, Sobre, Descrição, Contato)
- RF-03: Menu mobile com hamburger e overlay
- RF-04: Logo clicável redireciona para "/"
```

---

## 2. plan.md

```markdown
# Plan: Header

## Artefatos de Alto Nível

| Artefato | Tipo | Descrição |
|----------|------|-----------|
| Header | organism | Container fixo com logo + menu |
| NavItem | type | { label: string, href: string } |
| HeaderProps | type | { logoAlt?, navItems? } |

## Estrutura de Arquivos

```
src/components/
└── header/
    └── header.tsx

src/app/
└── test-header/
    └── page.tsx

tests/features/
└── header/
    └── header.spec.ts
```

## Diagrama

```
NavItem (type)
    │
    ▼
HeaderProps (type)
    │
    ▼
Header (organism)
    │
    ├──► test-header/page.tsx
    └──► header.spec.ts
```

## Cenários BDD (estimativa)

- @desktop: 3 cenários
- @mobile: 3 cenários
- @a11y: 1 cenário
```

---

## 3. *.feature (Gherkin)

```gherkin
@pending @desktop
Feature: Header de Navegação

  @pending @desktop
  Scenario: Header desktop exibe logo e menu
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header é fixed, top-0, w-full com altura de 80px
    And o logo "Logo" aparece à esquerda
    And o menu exibe 4 itens: "Início", "Sobre", "Descrição", "Contato"
    And o botão hamburger está oculto

  @pending @desktop
  Scenario: Itens do menu respondem a hover
    Given que o usuário está em desktop
    When o mouse passa sobre um item do menu
    Then o item exibe feedback visual (underline ou cor)

  @pending @desktop
  Scenario: Logo redireciona para home
    Given que o usuário está em qualquer página
    When o usuário clica no logo
    Then a URL muda para "/"

  @pending @mobile
  Scenario: Mobile exibe hamburger
    Given que o usuário está em mobile (<768px)
    When a página carrega
    Then o menu horizontal está oculto
    And o botão hamburger está visível
    And o hamburger exibe ícone de 3 barras

  @pending @mobile
  Scenario: Mobile abre overlay ao clicar hamburger
    Given que o usuário está em mobile
    When o usuário clica no botão hamburger
    Then o overlay fullscreen aparece com animação de 300ms
    And o overlay lista as 4 opções de navegação

  @pending @mobile
  Scenario: Mobile fecha overlay
    Given que o overlay está aberto
    When o usuário clica no botão X
    Or o usuário clica fora do menu overlay
    Then o overlay fecha com animação

  @pending @a11y
  Scenario: Navegação por Tab funciona
    Given que o usuário está na página
    When pressiona Tab
    Then o foco move para primeiro item do menu
    And pressiona Tab novamente
    Then o foco move para próximo item
```

---

## 4. *.spec.ts (Playwright)

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature: Header de Navegação', () => {

  test.describe('Scenario: Header desktop exibe logo e menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
    });

    test('deve ter header fixed com altura de 80px', async ({ page }) => {
      const header = page.locator('[data-testid="header"]');
      await expect(header).toBeVisible();
      const box = await header.boundingBox();
      expect(box?.height).toBe(80);
    });

    test('deve exibir logo à esquerda', async ({ page }) => {
      const logo = page.locator('[data-testid="header-logo"]');
      await expect(logo).toBeVisible();
    });

    test('deve exibir 4 itens de navegação', async ({ page }) => {
      const menuItems = page.locator('[data-testid="header-menu"] a');
      await expect(menuItems).toHaveCount(4);
      await expect(page.getByRole('link', { name: 'Início' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Sobre' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Descrição' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Contato' })).toBeVisible();
    });

    test('deve ocultar hamburger em desktop', async ({ page }) => {
      const hamburger = page.locator('[data-testid="hamburger-button"]');
      await expect(hamburger).toBeHidden();
    });
  });

  test.describe('Scenario: Itens do menu respondem a hover', () => {
    test('deve exibir feedback visual no hover', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
      const menuItem = page.getByRole('link', { name: 'Sobre' });
      await menuItem.hover();
    });
  });

  test.describe('Scenario: Logo redireciona para home', () => {
    test('deve redirecionar para / ao clicar no logo', async ({ page }) => {
      await page.goto('/sobre');
      await page.click('[data-testid="header-logo"]');
      await expect(page).toHaveURL('/');
    });
  });

  test.describe('Scenario: Mobile exibe hamburger', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
    });

    test('deve ocultar menu horizontal', async ({ page }) => {
      const desktopMenu = page.locator('[data-testid="header-desktop-menu"]');
      await expect(desktopMenu).toBeHidden();
    });

    test('deve exibir botão hamburger', async ({ page }) => {
      const hamburger = page.locator('[data-testid="hamburger-button"]');
      await expect(hamburger).toBeVisible();
    });
  });

  test.describe('Scenario: Mobile abre overlay ao clicar hamburger', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
    });

    test('deve abrir overlay fullscreen', async ({ page }) => {
      await page.click('[data-testid="hamburger-button"]');
      const overlay = page.locator('[data-testid="mobile-overlay"]');
      await expect(overlay).toBeVisible();
    });

    test('deve listar 4 opções no overlay', async ({ page }) => {
      await page.click('[data-testid="hamburger-button"]');
      const overlayLinks = page.locator('[data-testid="mobile-overlay"] a');
      await expect(overlayLinks).toHaveCount(4);
    });
  });

  test.describe('Scenario: Mobile fecha overlay', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.click('[data-testid="hamburger-button"]');
    });

    test('deve fechar ao clicar no X', async ({ page }) => {
      await page.click('[data-testid="close-overlay-button"]');
      await expect(page.locator('[data-testid="mobile-overlay"]')).toBeHidden();
    });

    test('deve fechar ao clicar fora', async ({ page }) => {
      await page.click('[data-testid="mobile-overlay"]', { position: { x: 10, y: 10 } });
      await expect(page.locator('[data-testid="mobile-overlay"]')).toBeHidden();
    });
  });

  test.describe('Scenario: Navegação por Tab funciona', () => {
    test('deve mover foco para próximo item com Tab', async ({ page }) => {
      await page.goto('/');
      await page.keyboard.press('Tab');
    });
  });

});
```

---

## 5. progress.md

```markdown
# Progress: Header

## Feature: Header de Navegação
**Status:** 🔄 Em Progresso

## Cenários

### @desktop
| Scenario | Status | Testes |
|----------|--------|--------|
| Header desktop exibe logo e menu | ✅ Done | 4/4 |
| Itens do menu respondem a hover | 🔄 In Progress | 2/3 |
| Logo redireciona para home | ⏳ Pending | - |

### @mobile
| Scenario | Status | Testes |
|----------|--------|--------|
| Mobile exibe hamburger | ✅ Done | 3/3 |
| Mobile abre overlay | ✅ Done | 2/2 |
| Mobile fecha overlay | ✅ Done | 2/2 |

### @a11y
| Scenario | Status | Testes |
|----------|--------|--------|
| Navegação por Tab | ⏳ Pending | - |

---

## Histórico

### 2024-01-15 - Início

- [🔄] Feature Header iniciada

### 2024-01-15 - Cenário "Header desktop"

- [✅] Cenário "Header desktop exibe logo e menu" aprovado

### 2024-01-16 - Cenário "Mobile"

- [✅] Cenários @mobile todos aprovados
- [📝] Worktree feat/header-mobile mergeada

### 2024-01-16 - Em andamento

- [🔄] Hover no menu (2/3 testes)
- [⚠️] Último teste: "deve manter estilo após mouse leave"
```

---

## 6. Estrutura de Arquivos Final

```
specs/
└── features/
    └── header/
        ├── research.md
        ├── plan.md
        ├── progress.md
        └── features/
            └── header.feature

frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── test-header/
│   │       └── page.tsx
│   └── components/
│       └── header/
│           └── header.tsx
└── tests/
    └── features/
        └── header/
            └── header.spec.ts
```

---

## 7. PR Description

```markdown
## Pull Request: feat/header - Header de Navegação

### Resumo
Adiciona header responsivo com menu desktop e mobile hamburger.

### User Stories
- [x] US-001: Header Desktop
- [x] US-002: Header Mobile
- [x] US-003: Logo Clicável

### Cenários BDD
| Scenario | Status |
|----------|--------|
| Header desktop exibe logo e menu | ✅ |
| Itens do menu respondem a hover | ✅ |
| Logo redireciona para home | ✅ |
| Mobile exibe hamburger | ✅ |
| Mobile abre overlay | ✅ |
| Mobile fecha overlay | ✅ |
| Navegação por Tab | ✅ |

### Testes
- 15 testes, 15 passando

### Screenshots
[desktop-header.png]
[mobile-header.png]
[mobile-overlay.png]
```
