# Sidebar: Documentação de Implementação dos Testes

> **Feature:** Sidebar de Navegação  
> **Arquivo Fonte:** `specs/features/dashboard-analytics/features/sidebar.feature`  
> **Planejamento:** `specs/features/dashboard-analytics/plan.md`  
> **Data:** 2026-03-20

---

## 🚀 Estratégia: TDD Incremental com Skip

### Como Funciona

1. **Testes gerados com skip**: Todos começam como `test.skip()`
2. **Apenas o primeiro teste está ativo**: Para implementação inicial
3. **Execute e implemente**: Apenas 1 teste falhará, fácil de debugar
4. **Remova skip progressivamente**: Ao passar um teste, remova `.skip()` do próximo

### Fluxo de Trabalho

```
1. Execute: npx playwright test
   ↓ (apenas 1 teste falha)
2. Implemente código mínimo para passar
   ↓
3. Teste passa ✅ → Remova .skip() do próximo
   ↓
4. Repita até o primeiro cenário completo
   ↓
5. Passe para o próximo cenário
```

### Prioridade de Implementação

| Status | Testes | Descrição |
|--------|--------|-----------|
| ✅ ATIVO | 1 | Primeiro teste - implementar primeiro |
| ⏭️ SKIP | 33 | Implementar depois |

---

## 📋 Visão Geral

Este documento descreve os testes Playwright gerados para a feature **Sidebar de Navegação** do dashboard de analytics. Os testes seguem o padrão **Page Object Pattern** e são organizados por tags BDD.

---

## 📊 Matriz de Cenários

| # | Cenário | Tags | Testes | Status |
|---|---------|------|--------|--------|
| 1 | Sidebar desktop exibe estrutura completa | `@desktop @happy` | 8 | ⏭️ (1 ativo) |
| 2 | Sidebar mobile inicia colapsada | `@mobile @happy` | 2 | ⏭️ SKIP |
| 3 | Sidebar aplica dark theme corretamente | `@desktop @style` | 2 | ⏭️ SKIP |
| 4 | Menu deve exibir exatamente NAV_COUNT itens | `@desktop @rule` | 4 | ⏭️ SKIP |
| 5 | Sidebar width deve ser SIDEBAR_WIDTH pixels | `@desktop @rule` | 4 | ⏭️ SKIP |
| 6 | Toggle rápido do hamburger | `@mobile @defensive` | 2 | ⏭️ SKIP |
| 7 | Navegação rápida entre itens | `@mobile @defensive` | 2 | ⏭️ SKIP |
| 8 | Resize da janela não quebra layout | `@desktop @defensive` | 1 | ⏭️ SKIP |
| 9 | Sidebar em estado de loading | `@state @loading` | 1 | ⏭️ SKIP |
| 10 | Sidebar preserva estado em erro | `@state @error` | 1 | ⏭️ SKIP |
| 11 | Logo renderiza corretamente | `@component @Logo` | 3 | ⏭️ SKIP |
| 12 | Área de perfil exibe avatar e nome | `@component @ProfileArea` | 3 | ⏭️ SKIP |
| 13 | Botão premium visível e estilizado | `@component @PremiumButton` | 3 | ⏭️ SKIP |

**Total: 13 cenários | 34 testes**
- ✅ **1 ATIVO** (primeiro teste)
- ⏭️ **33 SKIPPED**

---

## 🎯 Constantes Definidas (Extraídas do plan.md)

| Constante | Valor | Origem |
|-----------|-------|--------|
| `SIDEBAR_WIDTH` | `260` | `plan.md → DIMENSIONS.sidebarWidth` |
| `NAV_COUNT` | `4` | `plan.md → NavItems (Dashboard, Analytics, Reports, Settings)` |
| `BREAKPOINT` | `768` | `plan.md → RNF-05` |
| `COLORS.bgPrimary` | `#0A0A0B` | `plan.md → COLORS.bgPrimary` |
| `COLORS.accent` | `#FF5C00` | `plan.md → COLORS.accent` |

### Viewports de Teste

| Viewport | Largura | Altura | Uso |
|----------|---------|--------|-----|
| Desktop | 1280px | 800px | Testes `@desktop` |
| Mobile | 375px | 667px | Testes `@mobile` |
| Breakpoint | 768px | 800px | Testes de responsividade |

---

## 📊 Matriz de Cenários

| # | Cenário | Tags | Testes | Prioridade |
|---|---------|------|--------|------------|
| 1 | Sidebar desktop exibe estrutura completa | `@desktop @happy` | 6 | Alta |
| 2 | Sidebar mobile inicia colapsada | `@mobile @happy` | 2 | Alta |
| 3 | Sidebar aplica dark theme corretamente | `@desktop @style` | 1 | Média |
| 4 | Menu deve exibir exatamente NAV_COUNT itens | `@desktop @rule` | 2 | Crítica |
| 5 | Sidebar width deve ser SIDEBAR_WIDTH pixels | `@desktop @rule` | 2 | Crítica |
| 6 | Toggle rápido do hamburger | `@mobile @defensive` | 3 | Alta |
| 7 | Navegação rápida entre itens | `@mobile @defensive` | 2 | Alta |
| 8 | Resize da janela não quebra layout | `@desktop @defensive` | 2 | Alta |
| 9 | Sidebar em estado de loading | `@state @loading` | 1 | Média |
| 10 | Sidebar preserva estado em erro | `@state @error` | 2 | Alta |
| 11 | Logo renderiza corretamente | `@component @Logo` | 3 | Média |
| 12 | Área de perfil exibe avatar e nome | `@component @ProfileArea` | 4 | Média |
| 13 | Botão premium visível e estilizado | `@component @PremiumButton` | 3 | Média |

**Total: 13 cenários | 33 testes**

---

## 🏗️ Page Object: SidebarPage

### Estrutura do Page Object

```typescript
class SidebarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get hamburgerButton() { /* ... */ }
  get mobileOverlay() { /* ... */ }
  get sidebar() { /* ... */ }
  get sidebarLogo() { /* ... */ }
  get sidebarNavMenu() { /* ... */ }
  get sidebarNavItems() { /* ... */ }
  get premiumButton() { /* ... */ }
  get profileArea() { /* ... */ }
  get profileAvatar() { /* ... */ }
  get profileName() { /* ... */ }
  get loadingIndicator() { /* ... */ }

  // Ações
  async goto() { /* ... */ }
  async setDesktopViewport() { /* ... */ }
  async setMobileViewport() { /* ... */ }
  async clickHamburger() { /* ... */ }
  async clickHamburgerRapidly(count: number) { /* ... */ }
  async clickNavItem(index: number) { /* ... */ }
  async clickNavItemRapidly(indexes: number[]) { /* ... */ }
  async resizeToBreakpoint() { /* ... */ }

  // Assserções de estilo
  async getSidebarBackgroundColor() { /* ... */ }
  async getNavItemHoverColor(index: number) { /* ... */ }
  async getSidebarWidth() { /* ... */ }
}
```

### Data-Testids Utilizados

| Data-Testid | Elemento | Componente |
|-------------|----------|------------|
| `sidebar-hamburger` | Botão hamburger mobile | HeaderMobile |
| `sidebar-mobile-overlay` | Overlay do menu mobile | SidebarMobile |
| `sidebar` | Container principal da sidebar | Sidebar |
| `sidebar-logo` | Logo da empresa | SidebarLogo |
| `sidebar-nav` | Menu de navegação | SidebarNav |
| `sidebar-nav-item` | Item individual do menu | SidebarNavItem |
| `sidebar-premium-button` | Botão de upgrade premium | PremiumButton |
| `sidebar-profile` | Área de perfil completa | ProfileArea |
| `sidebar-profile-avatar` | Avatar do usuário | ProfileAvatar |
| `sidebar-profile-name` | Nome do usuário | ProfileName |
| `sidebar-loading` | Indicador de loading | LoadingIndicator |
| `main-content` | Conteúdo principal | MainContent |

---

## ✅ Cenários Detalhados

### Cenário 1: Sidebar desktop exibe estrutura completa

**Tags:** `@desktop @happy`  
**Given:** `que o usuário está em desktop (≥768px)`  
**When:** `a página do dashboard carrega`  
**Then:** `a sidebar tem largura de SIDEBAR_WIDTH pixels`

#### Testes Gerados

```typescript
test('Sidebar desktop exibe estrutura completa', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: a sidebar tem largura de SIDEBAR_WIDTH pixels
  await expect(sidebarPage.sidebar).toBeVisible();
  const width = await sidebarPage.getSidebarWidth();
  expect(width).toBe(SIDEBAR_WIDTH);

  // And: está posicionada no lado esquerdo da tela
  const box = await sidebarPage.sidebar.boundingBox();
  expect(box?.x).toBe(0);

  // And: o logo da empresa aparece no topo da sidebar
  await expect(sidebarPage.sidebarLogo).toBeVisible();

  // And: o menu de navegação exibe NAV_COUNT itens
  await expect(sidebarPage.sidebarNavItems).toHaveCount(NAV_COUNT);

  // And: o botão de upgrade premium está visível
  await expect(sidebarPage.premiumButton).toBeVisible();

  // And: a área de perfil do usuário aparece no final
  await expect(sidebarPage.profileArea).toBeVisible();
  await expect(sidebarPage.profileAvatar).toBeVisible();
  await expect(sidebarPage.profileName).toContainText('João Silva');
});
```

#### Snippet de Implementação

```tsx
// organisms/sidebar.tsx
import { useState } from 'react';
import { NavItem, UserProfile } from '@/generated/types';

interface SidebarProps {
  navItems: NavItem[];
  user: UserProfile;
  isOpen?: boolean;
  onToggle?: () => void;
  onNavigate?: (href: string) => void;
}

export function Sidebar({ navItems, user, isOpen = true, onToggle, onNavigate }: SidebarProps) {
  return (
    <aside
      data-testid="sidebar"
      className="fixed left-0 top-0 h-full"
      style={{ width: SIDEBAR_WIDTH }}
    >
      {/* Logo */}
      <div data-testid="sidebar-logo" className="flex justify-center py-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav data-testid="sidebar-nav">
        {navItems.map((item, index) => (
          <div
            key={item.href}
            data-testid="sidebar-nav-item"
            onClick={() => onNavigate?.(item.href)}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Premium Button */}
      <button data-testid="sidebar-premium-button">
        Upgrade to Premium
      </button>

      {/* Profile Area */}
      <div data-testid="sidebar-profile" className="absolute bottom-0">
        <img data-testid="sidebar-profile-avatar" src={user.avatar} alt={user.name} />
        <span data-testid="sidebar-profile-name">{user.name}</span>
      </div>
    </aside>
  );
}
```

#### Referências

| Tecnologia | Recurso | Link |
|------------|---------|------|
| Playwright | `expect(locator).toBeVisible()` | [Documentação](https://playwright.dev/docs/test-assertions#expect-locator-to-be-visible) |
| Playwright | `boundingBox()` | [Documentação](https://playwright.dev/docs/api/class-locator#locator-bounding-box) |
| Playwright | `page.setViewportSize()` | [Documentação](https://playwright.dev/docs/api/class-page#page-set-viewport-size) |
| Tailwind | `fixed` | [Documentação](https://tailwindcss.com/docs/position#fixed-positioning) |
| Tailwind | `left-0` | [Documentação](https://tailwindcss.com/docs/top-right-bottom-left#left) |
| Tailwind | `h-full` | [Documentação](https://tailwindcss.com/docs/height#percentage-lengths) |

---

### Cenário 2: Sidebar mobile inicia colapsada

**Tags:** `@mobile @happy`  
**Given:** `que o usuário está em mobile (<768px)`  
**When:** `a página do dashboard carrega`  
**Then:** `a sidebar está oculta por padrão`

#### Testes Gerados

```typescript
test('Sidebar mobile inicia colapsada', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setMobileViewport();
  await sidebarPage.goto();

  // Then: a sidebar está oculta por padrão
  await expect(sidebarPage.sidebar).toBeHidden();

  // And: o botão hamburger aparece no canto superior esquerdo
  await expect(sidebarPage.hamburgerButton).toBeVisible();
  const hamburgerBox = await sidebarPage.hamburgerButton.boundingBox();
  expect(hamburgerBox?.x).toBeLessThanOrEqual(16);
  expect(hamburgerBox?.y).toBeLessThanOrEqual(16);
});
```

#### Snippet de Implementação

```tsx
// organisms/header-mobile.tsx
export function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        data-testid="sidebar-hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50"
      >
        <MenuIcon />
      </button>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          data-testid="sidebar-mobile-overlay"
          className="fixed inset-0 bg-black/50 z-40"
        >
          <aside data-testid="sidebar" className="translate-x-0">
            {/* Sidebar content */}
          </aside>
        </div>
      )}
    </>
  );
}
```

#### Referências

| Tecnologia | Recurso | Link |
|------------|---------|------|
| React | `useState` | [Documentação](https://react.dev/reference/react/useState) |
| Tailwind | `hidden` | [Documentação](https://tailwindcss.com/docs/display#hidden) |
| Tailwind | `fixed` | [Documentação](https://tailwindcss.com/docs/position#fixed-positioning) |
| Tailwind | `inset-0` | [Documentação](https://tailwindcss.com/docs/inset#setting-inset-values) |
| Tailwind | `bg-black/50` | [Documentação](https://tailwindcss.com/docs/background-color#changing-opacity) |

---

### Cenário 3: Sidebar aplica dark theme corretamente

**Tags:** `@desktop @style`  
**Given:** `que o usuário está em desktop (≥768px)`  
**When:** `a página do dashboard carrega`  
**Then:** `o background da sidebar é bg-primary (#0A0A0B)`

#### Testes Gerados

```typescript
test('Sidebar aplica dark theme corretamente', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: o background da sidebar é bg-primary (#0A0A0B)
  const bgColor = await sidebarPage.getSidebarBackgroundColor();
  const expectedRgb = hexToRgb(COLORS.bgPrimary);
  expect(bgColor.toLowerCase()).toBe(`rgb(${expectedRgb})`);

  // And: elementos interativos usam cor accent (#FF5C00) no hover
  await sidebarPage.sidebarNavItems.first().hover();
  await page.waitForTimeout(100);
});
```

#### Snippet de Implementação

```tsx
// organisms/sidebar.tsx
export function Sidebar() {
  return (
    <aside
      data-testid="sidebar"
      className="bg-[#0A0A0B]"
    >
      <nav>
        {navItems.map((item) => (
          <div
            key={item.href}
            className="hover:text-[#FF5C00] transition-colors"
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
```

#### Referências

| Tecnologia | Recurso | Link |
|------------|---------|------|
| CSS | `rgb()` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) |
| Tailwind | `bg-[#0A0A0B]` | [Documentação](https://tailwindcss.com/docs/background-color#using-arbitrary-values) |
| Tailwind | `hover:text-[#FF5C00]` | [Documentação](https://tailwindcss.com/docs/hover-and-focus#hover) |
| Tailwind | `transition-colors` | [Documentação](https://tailwindcss.com/docs/transition-property) |

---

### Cenário 4: Menu deve exibir exatamente NAV_COUNT itens

**Tags:** `@desktop @rule`  
**Given:** `que o usuário está em desktop (≥768px)`  
**When:** `a página do dashboard carrega`  
**Then:** `o menu de navegação exibe exatamente NAV_COUNT itens`

#### Testes Gerados

```typescript
test('Menu deve exibir exatamente NAV_COUNT itens de navegação', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: o menu de navegação exibe exatamente NAV_COUNT itens
  await expect(sidebarPage.sidebarNavItems).toHaveCount(NAV_COUNT);

  // And: os itens são: Dashboard, Analytics, Reports, Settings
  const NAV_ITEMS = ['Dashboard', 'Analytics', 'Reports', 'Settings'];
  for (let i = 0; i < NAV_COUNT; i++) {
    await expect(sidebarPage.sidebarNavItems.nth(i)).toContainText(NAV_ITEMS[i]);
  }
});
```

#### Snippet de Implementação

```tsx
// services/dashboard-service.ts
export const getNavItems = (): NavItem[] => [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Reports', href: '/dashboard/reports' },
  { label: 'Settings', href: '/dashboard/settings' },
];
```

---

### Cenário 5: Toggle rápido do hamburger

**Tags:** `@mobile @defensive`  
**Given:** `que o usuário está em mobile (<768px)` e `o menu está fechado`  
**When:** `o usuário clica 3x rapidamente no botão hamburger`  
**Then:** `o overlay abre apenas uma vez`

#### Testes Gerados

```typescript
test('Toggle rápido do hamburger não causa estados inconsistentes', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setMobileViewport();
  await sidebarPage.goto();

  // Given: o menu está fechado
  await expect(sidebarPage.mobileOverlay).toBeHidden();

  // When: o usuário clica 3x rapidamente no botão hamburger
  await sidebarPage.clickHamburgerRapidly(3);

  // Then: o overlay abre apenas uma vez
  await expect(sidebarPage.mobileOverlay).toBeVisible();

  // And: o estado final do menu é consistente
  await page.waitForTimeout(500);
  await expect(sidebarPage.mobileOverlay).toHaveCount(1);
});
```

#### Snippet de Implementação (Proteção contra Double-Click)

```tsx
// organisms/sidebar-mobile.tsx
import { useState, useCallback, useRef } from 'react';

export function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const isAnimating = useRef(false);

  const handleToggle = useCallback(() => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setIsOpen((prev) => !prev);
    
    // Prevenir múltiplos cliques durante animação
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  }, []);

  return (
    <button
      data-testid="sidebar-hamburger"
      onClick={handleToggle}
      disabled={isAnimating.current}
    >
      <MenuIcon />
    </button>
  );
}
```

#### Referências

| Tecnologia | Recurso | Link |
|------------|---------|------|
| React | `useRef` | [Documentação](https://react.dev/reference/react/useRef) |
| React | `useCallback` | [Documentação](https://react.dev/reference/react/useCallback) |
| React | `stopPropagation` | [Documentação](https://react.dev/learn/responding-to-events#stop-propagation) |

---

### Cenário 6: Resize da janela não quebra layout

**Tags:** `@desktop @defensive`  
**Given:** `que o usuário está em desktop (≥768px)` e `a sidebar está visível`  
**When:** `o usuário redimensiona a janela para BREAKPOINT pixels (768px)`  
**Then:** `a sidebar colapsa para mobile`

#### Testes Gerados

```typescript
test('Resize da janela não quebra layout da sidebar', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);

  // Given: que o usuário está em desktop (≥768px)
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();
  await expect(sidebarPage.sidebar).toBeVisible();

  // When: o usuário redimensiona a janela para BREAKPOINT pixels (768px)
  await sidebarPage.resizeToBreakpoint();
  await page.waitForTimeout(300);

  // Then: a sidebar colapsa para mobile
  await expect(sidebarPage.sidebar).toBeHidden();
  await expect(sidebarPage.hamburgerButton).toBeVisible();
});
```

#### Snippet de Implementação (Responsividade)

```tsx
// organisms/sidebar.tsx
export function Sidebar() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < BREAKPOINT;

  if (isMobile) {
    return <SidebarMobile />;
  }

  return <SidebarDesktop />;
}
```

#### Referências

| Tecnologia | Recurso | Link |
|------------|---------|------|
| Tailwind | `md:block` | [Documentação](https://tailwindcss.com/docs/responsive-design#breakpoint-prefixes) |
| Tailwind | `md:hidden` | [Documentação](https://tailwindcss.com/docs/responsive-design#breakpoint-prefixes) |
| React | `useEffect` | [Documentação](https://react.dev/reference/react/useEffect) |

---

### Cenário 7: Sidebar em estado de loading

**Tags:** `@state @loading`  
**Given:** `que o usuário está na página do dashboard`  
**When:** `o usuário clica em um item do menu`  
**Then:** `indicador de loading aparece brevemente`

#### Testes Gerados

```typescript
test('Sidebar em estado de loading durante navegação', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  const navigationPromise = page.waitForURL(/\/(analytics|reports|settings)/i);
  await sidebarPage.sidebarNavItems.first().click();

  // Then: indicador de loading aparece brevemente
  try {
    await expect(sidebarPage.loadingIndicator).toBeVisible({ timeout: 1000 });
  } catch {
    // Se não houver loading indicator, pular
  }

  // And: a página destino é carregada
  await navigationPromise;
});
```

---

### Cenário 8: Sidebar preserva estado em erro

**Tags:** `@state @error`  
**Given:** `que o usuário está na página do dashboard`  
**When:** `há falha ao carregar a página destino`  
**Then:** `a sidebar permanece visível e interativa`

#### Testes Gerados

```typescript
test('Sidebar preserva estado quando há erro de navegação', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Mock de erro de rede
  await page.route(/\/dashboard\/analytics/, (route) => {
    route.abort('failed');
  });

  // When: há falha ao carregar a página destino
  await sidebarPage.sidebarNavItems.nth(1).click();
  await page.waitForTimeout(500);

  // Then: a sidebar permanece visível e interativa
  await expect(sidebarPage.sidebar).toBeVisible();
  await expect(sidebarPage.sidebarNavItems.first()).toBeEnabled();

  // And: o usuário pode tentar navegar novamente
  await page.unroute(/\/dashboard\/analytics/);
  await sidebarPage.sidebarNavItems.nth(1).click();
  await expect(page).toHaveURL(/analytics/i, { timeout: 5000 });
});
```

---

### Cenário 9: Logo renderiza corretamente

**Tags:** `@component @Logo`  
**Given:** `que a página do dashboard carrega`  
**Then:** `o logo aparece no topo da sidebar`

#### Testes Gerados

```typescript
test('Logo da empresa renderiza corretamente no topo da sidebar', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: o logo aparece no topo da sidebar
  await expect(sidebarPage.sidebarLogo).toBeVisible();

  // Verificar posição no topo
  const logoBox = await sidebarPage.sidebarLogo.boundingBox();
  const sidebarBox = await sidebarPage.sidebar.boundingBox();
  expect(logoBox?.y).toBeLessThanOrEqual(sidebarBox!.y + 20);

  // And: está alinhado centralmente
  const sidebarCenter = sidebarBox!.x + sidebarBox!.width / 2;
  const logoCenter = logoBox!.x + logoBox!.width / 2;
  expect(Math.abs(sidebarCenter - logoCenter)).toBeLessThan(5);
});
```

#### Snippet de Implementação

```tsx
// organisms/sidebar-logo.tsx
export function SidebarLogo() {
  return (
    <div
      data-testid="sidebar-logo"
      className="flex justify-center py-6"
    >
      <img 
        src="/logo.svg" 
        alt="Logo da Empresa" 
        className="h-10 w-auto"
      />
    </div>
  );
}
```

---

### Cenário 10: Área de perfil exibe avatar e nome

**Tags:** `@component @ProfileArea`  
**Given:** `que a página do dashboard carrega`  
**Then:** `o avatar do usuário está visível`

#### Testes Gerados

```typescript
test('Área de perfil do usuário exibe avatar e nome', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: o avatar do usuário está visível
  await expect(sidebarPage.profileAvatar).toBeVisible();

  // And: o nome do usuário é exibido abaixo do avatar
  await expect(sidebarPage.profileName).toContainText('João Silva');

  // And: a área está posicionada no final da sidebar
  const profileBox = await sidebarPage.profileArea.boundingBox();
  const sidebarBox = await sidebarPage.sidebar.boundingBox();
  expect(profileBox!.y + profileBox!.height).toBeGreaterThan(sidebarBox!.height - 50);
});
```

#### Snippet de Implementação

```tsx
// organisms/profile-area.tsx
export function ProfileArea({ user }: { user: UserProfile }) {
  return (
    <div
      data-testid="sidebar-profile"
      className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800"
    >
      <div className="flex items-center gap-3">
        <img
          data-testid="sidebar-profile-avatar"
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <span
          data-testid="sidebar-profile-name"
          className="text-sm text-white"
        >
          {user.name}
        </span>
      </div>
    </div>
  );
}
```

---

### Cenário 11: Botão premium visível e estilizado

**Tags:** `@component @PremiumButton`  
**Given:** `que a página do dashboard carrega`  
**Then:** `o botão "Upgrade to Premium" está visível`

#### Testes Gerados

```typescript
test('Botão de upgrade premium está visível e estilizado', async ({ page }) => {
  const sidebarPage = new SidebarPage(page);
  await sidebarPage.setDesktopViewport();
  await sidebarPage.goto();

  // Then: o botão "Upgrade to Premium" está visível
  await expect(sidebarPage.premiumButton).toBeVisible();
  await expect(sidebarPage.premiumButton).toContainText(/premium|upgrade/i);

  // And: usa a cor accent (#FF5C00) como background
  const bgColor = await sidebarPage.premiumButton.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });
  const expectedRgb = hexToRgb(COLORS.accent);
  expect(bgColor.toLowerCase()).toBe(`rgb(${expectedRgb})`);
});
```

#### Snippet de Implementação

```tsx
// organisms/premium-button.tsx
export function PremiumButton() {
  return (
    <button
      data-testid="sidebar-premium-button"
      className="w-full py-3 px-4 bg-[#FF5C00] text-white font-semibold rounded-lg hover:bg-[#E65300] transition-colors"
    >
      Upgrade to Premium
    </button>
  );
}
```

---

## 🔧 Helpers Utilizados

```typescript
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return '0, 0, 0';
}
```

---

## ✅ Checklist de Validação

Antes de executar os testes, verificar:

- [ ] `sidebar.feature` está presente em `specs/features/dashboard-analytics/features/`
- [ ] `plan.md` define as constantes: `SIDEBAR_WIDTH`, `NAV_COUNT`, `BREAKPOINT`
- [ ] Componentes implementados com data-testids corretos
- [ ] Dark theme com cores `#0A0A0B` e `#FF5C00` aplicado
- [ ] Responsividade com breakpoint em 768px

---

## 🚀 Execução dos Testes

### Passo 1: Executar Teste Ativo

```bash
# Executar todos os testes (apenas 1 falhará)
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts

# Ou executar em modo UI
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts --ui
```

### Passo 2: Implementar e Passar

O primeiro teste verificará se a sidebar está visível. Implemente o componente mínimo.

### Passo 3: Remover Skip do Próximo

```typescript
// Antes (skip)
test.skip('a sidebar deve ter largura SIDEBAR_WIDTH pixels', async ({ page }) => {

// Depois (ativo)
test('a sidebar deve ter largura SIDEBAR_WIDTH pixels', async ({ page }) => {
```

### Passo 4: Repetir

```bash
# Executar novamente para verificar
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts
```

### Comandos Úteis

```bash
# Executar apenas testes ativos (não-skipped)
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts

# Executar em modo watch (re-executa ao salvar)
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts --watch

# Ver apenas testes falhados
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts --only-changed

# Executar em modo debug
npx playwright test frontend/tests/features/dashboard-analytics/sidebar.spec.ts --debug
```

### Progressão Recomendada

| Fase | Ação | Resultado |
|------|------|-----------|
| 1 | Execute `npx playwright test` | 1 teste falha |
| 2 | Implemente sidebar visível | 1 teste passa |
| 3 | Remova `.skip()` do próximo | 2 testes ativos |
| 4 | Implemente largura SIDEBAR_WIDTH | 2 testes passam |
| 5 | Repita até cenário 1 completo | 8 testes passam |
| 6 | Vá para cenário 2 | - |

---

## 📁 Arquivos Gerados

| Arquivo | Descrição |
|---------|-----------|
| `tests/sidebar.spec.ts` | Testes Playwright com Page Object Pattern |
| `tests/sidebar.spec.docs.md` | Esta documentação |

---

## 🔗 Referências Completas

### Playwright
- [Test Assertions](https://playwright.dev/docs/test-assertions)
- [Locators](https://playwright.dev/docs/locators)
- [Page Object Pattern](https://playwright.dev/docs/pom)
- [Network Mocking](https://playwright.dev/docs/network#mocking)

### React
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
- [useRef](https://react.dev/reference/react/useRef)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

### Tailwind CSS
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Position](https://tailwindcss.com/docs/position)
- [Hover and Focus](https://tailwindcss.com/docs/hover-and-focus)
- [Transitions](https://tailwindcss.com/docs/transition-property)

### Next.js
- [App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

---

*Documento gerado automaticamente pelo TDD Generator*
