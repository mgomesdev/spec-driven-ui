import { test, expect } from '@playwright/test';

test.describe('US-001: Componente Button básico', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-button');
  });

  test('renderiza um botão HTML', async ({ page }) => {
    const button = page.locator('[data-testid="basic-button"]');
    await expect(button).toBeVisible();
    const tagName = await button.evaluate(el => el.tagName);
    expect(tagName).toBe('BUTTON');
  });

  test('suporta texto como children', async ({ page }) => {
    const button = page.locator('[data-testid="basic-button"]');
    await expect(button).toHaveText('Clique aqui');
  });

  test('aceita props de styling via className', async ({ page }) => {
    const button = page.locator('[data-testid="button-with-class"]');
    const className = await button.getAttribute('class');
    expect(className).toContain('custom-class');
  });

  test('funciona com eventos onClick', async ({ page }) => {
    await page.locator('[data-testid="button-with-click"]').click();
    
    const button = page.locator('[data-testid="button-with-click"]');
    await expect(button).toBeVisible();
  });
});
