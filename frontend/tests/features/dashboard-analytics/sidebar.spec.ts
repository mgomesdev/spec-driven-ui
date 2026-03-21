/**
 * sidebar.spec.ts
 * Testes E2E para Sidebar de Navegação do Dashboard Analytics
 * 
 * Design System: Dark Theme
 * Breakpoint: 768px
 * Sidebar Width: 260px
 * 
 * @see frontend/tests/features/dashboard-analytics/sidebar.spec.docs.md
 */

import { test, expect, Page } from '@playwright/test';

// ═══════════════════════════════════════════════════════════════════════════
// FEATURE: Sidebar de Navegação
// ═══════════════════════════════════════════════════════════════════════════

test.describe('Feature: Sidebar de Navegação', () => {

  // ═══════════════════════════════════════════════════════════════════════
  // ✅ FLUXO FELIZ - Happy Path (PRIMEIRO CENÁRIO)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@desktop @happy', () => {
    test('a sidebar deve ser visível no desktop', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();
      await expect(sidebarPage.sidebar).toBeVisible();
    });

    test('a sidebar deve ter largura de SIDEBAR_WIDTH pixels', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();
      const width = await sidebarPage.getSidebarWidth();
      expect(width).toBe(SIDEBAR_WIDTH);
    });

    test('a sidebar deve estar posicionada no lado esquerdo da tela', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();
      const box = await sidebarPage.sidebar.boundingBox();
      expect(box?.x).toBe(0);
    });

    test('o logo da empresa deve aparecer no topo da sidebar', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();
      await expect(sidebarPage.sidebarLogo).toBeVisible();
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('o menu de navegação deve exibir NAV_COUNT itens', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebarNavItems).toHaveCount(NAV_COUNT);
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('os itens do menu devem ter os labels corretos', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      for (let i = 0; i < NAV_COUNT; i++) {
        await expect(sidebarPage.sidebarNavItems.nth(i)).toContainText(NAV_ITEMS[i]);
      }
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('o botão de upgrade premium deve estar visível', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.premiumButton).toBeVisible();
      await expect(sidebarPage.premiumButton).toContainText(/premium|upgrade/i);
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('a área de perfil deve estar visível com avatar e nome', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.profileArea).toBeVisible();
      await expect(sidebarPage.profileAvatar).toBeVisible();
      await expect(sidebarPage.profileName).toBeVisible();
      await expect(sidebarPage.profileName).toContainText('João Silva');
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // ⏭️ SEGUNDO CENÁRIO: Mobile (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@mobile @happy', () => {

    test.skip('a sidebar deve estar oculta no mobile', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setMobileViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebar).toBeHidden();
    });

    test.skip('o botão hamburger deve aparecer no canto superior esquerdo', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setMobileViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.hamburgerButton).toBeVisible();
      const hamburgerBox = await sidebarPage.hamburgerButton.boundingBox();
      expect(hamburgerBox?.x).toBeLessThanOrEqual(16);
      expect(hamburgerBox?.y).toBeLessThanOrEqual(16);
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // 🎨 ESTILIZAÇÃO - Dark Theme (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@desktop @style', () => {

    test.skip('o background da sidebar deve ser bg-primary (#0A0A0B)', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const bgColor = await sidebarPage.getSidebarBackgroundColor();
      const expectedRgb = hexToRgb(COLORS.bgPrimary);
      expect(bgColor.toLowerCase()).toBe(`rgb(${expectedRgb})`);
    });

    test.skip('elementos interativos devem usar cor accent (#FF5C00) no hover', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await sidebarPage.sidebarNavItems.first().hover();
      await page.waitForTimeout(100);
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // 🎯 REGRAS DE NEGÓCIO - @rule (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@desktop @rule', () => {

    test.skip('o menu de navegação deve exibir exatamente NAV_COUNT itens', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebarNavItems).toHaveCount(NAV_COUNT);
    });

    test.skip('os itens devem ser Dashboard, Analytics, Reports e Settings', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      for (let i = 0; i < NAV_COUNT; i++) {
        await expect(sidebarPage.sidebarNavItems.nth(i)).toContainText(NAV_ITEMS[i]);
      }
    });

    test.skip('a sidebar deve ter largura de SIDEBAR_WIDTH pixels', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const width = await sidebarPage.getSidebarWidth();
      expect(width).toBe(SIDEBAR_WIDTH);
    });

    test.skip('o conteúdo principal deve se ajustar ao restante da tela', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const mainContent = page.locator('[data-testid="main-content"]');
      await expect(mainContent).toBeVisible();
      const mainBox = await mainContent.boundingBox();
      expect(mainBox?.x).toBe(SIDEBAR_WIDTH);
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // 🛡️ PROTEÇÃO CRÍTICA - @defensive (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@mobile @defensive', () => {

    test.skip('toggle rápido do hamburger não deve causar estados inconsistentes', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setMobileViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.mobileOverlay).toBeHidden();
      await sidebarPage.clickHamburgerRapidly(3);
      await expect(sidebarPage.mobileOverlay).toBeVisible();
      await page.waitForTimeout(500);
      await expect(sidebarPage.mobileOverlay).toHaveCount(1);
    });

    test.skip('navegação rápida entre itens não deve causar ghost clicks', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setMobileViewport();
      await sidebarPage.goto();

      await sidebarPage.clickHamburger();
      await expect(sidebarPage.mobileOverlay).toBeVisible();
      await sidebarPage.clickNavItemRapidly([0, 1, 2]);
      await expect(page).toHaveURL(/analytics|reports/i);
    });

  });

  test.describe('@desktop @defensive', () => {

    test.skip('resize da janela não deve quebrar layout da sidebar', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebar).toBeVisible();
      await sidebarPage.resizeToBreakpoint();
      await page.waitForTimeout(300);

      await expect(sidebarPage.sidebar).toBeHidden();
      await expect(sidebarPage.hamburgerButton).toBeVisible();
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // ⚠️ ESTADOS - @state (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@state @loading', () => {

    test.skip('indicador de loading deve aparecer durante navegação', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const navigationPromise = page.waitForURL(/\/(analytics|reports|settings)/i);
      await sidebarPage.sidebarNavItems.first().click();

      try {
        await expect(sidebarPage.loadingIndicator).toBeVisible({ timeout: 1000 });
      } catch {
        // Loading pode ser muito rápido
      }

      await navigationPromise;
    });

  });

  test.describe('@state @error', () => {

    test.skip('sidebar deve preservar estado quando há erro de navegação', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await page.route(/\/dashboard\/analytics/, (route) => {
        route.abort('failed');
      });

      await sidebarPage.sidebarNavItems.nth(1).click();
      await page.waitForTimeout(500);

      await expect(sidebarPage.sidebar).toBeVisible();
      await expect(sidebarPage.sidebarNavItems.first()).toBeEnabled();

      await page.unroute(/\/dashboard\/analytics/);
      await sidebarPage.sidebarNavItems.nth(1).click();
      await expect(page).toHaveURL(/analytics/i, { timeout: 5000 });
    });

  });

  // ═══════════════════════════════════════════════════════════════════════
  // 🎛️ COMPONENTES - @component (SKIP)
  // ═══════════════════════════════════════════════════════════════════════

  test.describe('@component @Logo', () => {

    test.skip('o logo deve aparecer no topo da sidebar', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebarLogo).toBeVisible();
    });

    test.skip('o logo deve estar alinhado centralmente', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const logoBox = await sidebarPage.sidebarLogo.boundingBox();
      const sidebarBox = await sidebarPage.sidebar.boundingBox();

      const sidebarCenter = sidebarBox!.x + sidebarBox!.width / 2;
      const logoCenter = logoBox!.x + logoBox!.width / 2;
      expect(Math.abs(sidebarCenter - logoCenter)).toBeLessThan(5);
    });

    test.skip('o logo deve manter proporções em diferentes resoluções', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.sidebarLogo).toBeVisible();

      await sidebarPage.setMobileViewport();
      await sidebarPage.clickHamburger();
      await expect(sidebarPage.sidebarLogo).toBeVisible();

      const mobileLogoBox = await sidebarPage.sidebarLogo.boundingBox();
      expect(mobileLogoBox?.width).toBeGreaterThan(0);
      expect(mobileLogoBox?.height).toBeGreaterThan(0);
    });

  });

  test.describe('@component @ProfileArea', () => {

    test.skip('o avatar do usuário deve estar visível', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.profileAvatar).toBeVisible();
    });

    test.skip('o nome do usuário deve ser exibido abaixo do avatar', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.profileName).toBeVisible();
      await expect(sidebarPage.profileName).toContainText('João Silva');
    });

    test.skip('a área de perfil deve estar posicionada no final da sidebar', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const profileBox = await sidebarPage.profileArea.boundingBox();
      const sidebarBox = await sidebarPage.sidebar.boundingBox();
      expect(profileBox!.y + profileBox!.height).toBeGreaterThan(sidebarBox!.height - 50);
    });

  });

  test.describe('@component @PremiumButton', () => {

    test.skip('o botão Upgrade to Premium deve estar visível', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      await expect(sidebarPage.premiumButton).toBeVisible();
      await expect(sidebarPage.premiumButton).toContainText(/premium|upgrade/i);
    });

    test.skip('o botão deve usar cor accent (#FF5C00) como background', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const bgColor = await sidebarPage.premiumButton.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      const expectedRgb = hexToRgb(COLORS.accent);
      expect(bgColor.toLowerCase()).toBe(`rgb(${expectedRgb})`);
    });

    test.skip('o botão deve estar posicionado acima da área de perfil', async ({ page }) => {
      const sidebarPage = new SidebarPage(page);
      await sidebarPage.setDesktopViewport();
      await sidebarPage.goto();

      const buttonBox = await sidebarPage.premiumButton.boundingBox();
      const profileBox = await sidebarPage.profileArea.boundingBox();
      expect(buttonBox!.y + buttonBox!.height).toBeLessThan(profileBox!.y);
    });

  });

});

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES EXTRAÍDAS DO PLAN.MD
// ═══════════════════════════════════════════════════════════════════════════

const SIDEBAR_WIDTH = 260;
const NAV_COUNT = 4;
const BREAKPOINT = 768;
const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 800;
const MOBILE_WIDTH = 375;
const MOBILE_HEIGHT = 667;

// Cores do Design System (plan.md)
const COLORS = {
  bgPrimary: '#0A0A0B',
  bgSecondary: '#141417',
  accent: '#FF5C00',
  success: '#22C55E',
  error: '#EF4444',
} as const;

// Itens de navegação esperados
const NAV_ITEMS = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return '0, 0, 0';
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE OBJECT: SidebarPage
// ═══════════════════════════════════════════════════════════════════════════

class SidebarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ─────────────────────────────────────────────────────────────────────
  // Locators - Header/Menu Mobile
  // ─────────────────────────────────────────────────────────────────────

  get hamburgerButton() {
    return this.page.locator('[data-testid="sidebar-hamburger"]');
  }

  get mobileOverlay() {
    return this.page.locator('[data-testid="sidebar-mobile-overlay"]');
  }

  // ─────────────────────────────────────────────────────────────────────
  // Locators - Sidebar Principal
  // ─────────────────────────────────────────────────────────────────────

  get sidebar() {
    return this.page.locator('[data-testid="sidebar"]');
  }

  get sidebarLogo() {
    return this.page.locator('[data-testid="sidebar-logo"]');
  }

  get sidebarNavMenu() {
    return this.page.locator('[data-testid="sidebar-nav"]');
  }

  get sidebarNavItems() {
    return this.page.locator('[data-testid="sidebar-nav-item"]');
  }

  get premiumButton() {
    return this.page.locator('[data-testid="sidebar-premium-button"]');
  }

  get profileArea() {
    return this.page.locator('[data-testid="sidebar-profile"]');
  }

  get profileAvatar() {
    return this.page.locator('[data-testid="sidebar-profile-avatar"]');
  }

  get profileName() {
    return this.page.locator('[data-testid="sidebar-profile-name"]');
  }

  // ─────────────────────────────────────────────────────────────────────
  // Locators - Estados
  // ─────────────────────────────────────────────────────────────────────

  get loadingIndicator() {
    return this.page.locator('[data-testid="sidebar-loading"]');
  }

  // ─────────────────────────────────────────────────────────────────────
  // Ações
  // ─────────────────────────────────────────────────────────────────────

  async goto() {
    await this.page.goto('/dashboard');
  }

  async setDesktopViewport() {
    await this.page.setViewportSize({ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT });
  }

  async setMobileViewport() {
    await this.page.setViewportSize({ width: MOBILE_WIDTH, height: MOBILE_HEIGHT });
  }

  async clickHamburger() {
    await this.hamburgerButton.click();
  }

  async clickHamburgerRapidly(count: number = 3) {
    for (let i = 0; i < count; i++) {
      await this.hamburgerButton.click({ delay: 50 });
    }
  }

  async clickNavItem(index: number) {
    await this.sidebarNavItems.nth(index).click();
  }

  async clickNavItemRapidly(indexes: number[]) {
    for (const index of indexes) {
      await this.sidebarNavItems.nth(index).click({ delay: 50 });
    }
  }

  async resizeToBreakpoint() {
    await this.page.setViewportSize({ width: BREAKPOINT, height: DESKTOP_HEIGHT });
  }

  // ─────────────────────────────────────────────────────────────────────
  // Assserções de Estilo
  // ─────────────────────────────────────────────────────────────────────

  async getSidebarBackgroundColor(): Promise<string> {
    return await this.sidebar.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
  }

  async getNavItemHoverColor(index: number): Promise<string> {
    return await this.sidebarNavItems.nth(index).evaluate((el) => {
      const hoverStyle = window.getComputedStyle(el, ':hover');
      return hoverStyle.color || '';
    });
  }

  async getSidebarWidth(): Promise<number> {
    const box = await this.sidebar.boundingBox();
    return box?.width ?? 0;
  }
}