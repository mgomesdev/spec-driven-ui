import { test, expect } from '@playwright/test';

test.describe('US-003: Estados do Button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-button');
  });

  test('estado disabled com opacity 50%', async ({ page }) => {
    const button = page.locator('[data-testid="disabled-button"]');
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS('opacity', '0.5');
  });

  test('cursor not-allowed quando disabled', async ({ page }) => {
    const button = page.locator('[data-testid="disabled-button"]');
    await expect(button).toHaveCSS('cursor', 'not-allowed');
  });

  test('transição suave entre estados', async ({ page }) => {
    const button = page.locator('[data-testid="enabled-button"]');
    await expect(button).toHaveCSS('transition-property', /opacity|all/);
    const transitionDuration = await button.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.transitionDuration;
    });
    const durationSeconds = parseFloat(transitionDuration);
    expect(durationSeconds).toBeGreaterThan(0);
  });
});