import { test, expect } from '@playwright/test';

test.describe('US-002: Variantes do Button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-button');
  });

  test('variante primary tem cor de fundo accent', async ({ page }) => {
    const button = page.locator('[data-testid="primary-button"]');
    await expect(button).toBeVisible();
    const className = await button.getAttribute('class');
    expect(className).toContain('bg-[--color-accent]');
  });

  test('variante secondary tem borda e texto accent', async ({ page }) => {
    const button = page.locator('[data-testid="secondary-button"]');
    await expect(button).toBeVisible();
    const className = await button.getAttribute('class');
    expect(className).toContain('border');
    expect(className).toContain('border-[--color-accent]');
    expect(className).toContain('text-[--color-accent]');
  });

  test('variante ghost é transparente', async ({ page }) => {
    const button = page.locator('[data-testid="ghost-button"]');
    await expect(button).toBeVisible();
    const className = await button.getAttribute('class');
    expect(className).toContain('bg-transparent');
  });

  test('hover state visível na variante primary', async ({ page }) => {
    const button = page.locator('[data-testid="primary-button"]');
    await button.hover();
    const className = await button.getAttribute('class');
    expect(className).toContain('hover:opacity-90');
  });

  test('hover state visível na variante secondary', async ({ page }) => {
    const button = page.locator('[data-testid="secondary-button"]');
    await button.hover();
    const className = await button.getAttribute('class');
    expect(className).toContain('hover:opacity-80');
  });

  test('hover state visível na variante ghost', async ({ page }) => {
    const button = page.locator('[data-testid="ghost-button"]');
    await button.hover();
    const className = await button.getAttribute('class');
    expect(className).toContain('hover:bg-black/5');
  });
});
