import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-header');
  });

  test('renders header with logo and desktop menu', async ({ page }) => {
    const header = page.locator('[data-testid="header"]').first();
    await expect(header).toBeVisible();

    const logoLink = page.locator('[data-testid="logo-link"]').first();
    await expect(logoLink).toBeVisible();
    await expect(logoLink).toHaveAttribute('href', '/');

    const desktopMenu = page.locator('[data-testid="desktop-menu"]').first();
    await expect(desktopMenu).toBeVisible();

    const navLinks = page.locator('[data-testid="desktop-menu"] a');
    await expect(navLinks).toHaveCount(4);
  });

  test('desktop nav links have correct hrefs', async ({ page }) => {
    const inicioLink = page.locator('[data-testid="nav-link-início"]').first();
    await expect(inicioLink).toHaveAttribute('href', '/');

    const sobreLink = page.locator('[data-testid="nav-link-sobre"]').first();
    await expect(sobreLink).toHaveAttribute('href', '/sobre');

    const descricaoLink = page.locator('[data-testid="nav-link-descrição"]').first();
    await expect(descricaoLink).toHaveAttribute('href', '/descricao');

    const contatoLink = page.locator('[data-testid="nav-link-contato"]').first();
    await expect(contatoLink).toHaveAttribute('href', '/contato');
  });

  test('hamburger button is hidden on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    await expect(hamburgerButton).toBeHidden();
  });

  test('hamburger button is visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    await expect(hamburgerButton).toBeVisible();
  });

  test('mobile overlay is hidden by default', async ({ page }) => {
    const overlay = page.locator('[data-testid="menu-overlay"]').first();
    await expect(overlay).toHaveAttribute('aria-hidden', 'true');
  });

  test('hamburger button has correct accessibility attributes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    await expect(hamburgerButton).toHaveAttribute('aria-label', 'Abrir menu de navegação');
    await expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking hamburger opens mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    const overlay = page.locator('[data-testid="menu-overlay"]').first();
    const mobileMenu = page.locator('[data-testid="mobile-menu"]').first();

    await hamburgerButton.click();

    await expect(overlay).toHaveAttribute('aria-hidden', 'false');
    await expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileMenu).toHaveClass(/translate-x-0/);
  });

  test('close button closes mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    const closeButton = page.locator('[data-testid="close-menu-button"]').first();
    const overlay = page.locator('[data-testid="menu-overlay"]').first();

    await hamburgerButton.click();
    await expect(overlay).toHaveAttribute('aria-hidden', 'false');

    await closeButton.click();
    await expect(overlay).toHaveAttribute('aria-hidden', 'true');
    await expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile menu contains all navigation items', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    await hamburgerButton.click();

    const mobileNav = page.locator('[data-testid="mobile-nav"]').first();
    await expect(mobileNav).toBeVisible();

    const mobileLinks = page.locator('[data-testid="mobile-nav"] a');
    await expect(mobileLinks).toHaveCount(4);
  });

  test('clicking outside overlay closes mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburgerButton = page.locator('[data-testid="hamburger-button"]').first();
    const overlay = page.locator('[data-testid="menu-overlay"]').first();

    await hamburgerButton.click();
    await expect(overlay).toHaveAttribute('aria-hidden', 'false');

    await page.mouse.click(10, 400);
    await expect(overlay).toHaveAttribute('aria-hidden', 'true');
  });
});
