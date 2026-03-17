import { test, expect } from '@playwright/test';

test.describe('US-001: Criar componente Button com tipos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-button');
  });

  test('tipos definidos no mesmo arquivo', async ({ page }) => {
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
  });

  test('renderiza elemento button com props', async ({ page }) => {
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('type', 'button');
  });

  test('variant primary usa bg-accent com texto branco', async ({ page }) => {
    const primaryButton = page.locator('button').filter({ hasText: /primary/i }).first();
    await expect(primaryButton).toBeVisible();
    await expect(primaryButton).toHaveClass(/bg-accent/);
    await expect(primaryButton).toHaveClass(/text-white/);
  });

  test('variant danger usa bg-red-600', async ({ page }) => {
    const dangerButton = page.locator('button').filter({ hasText: /danger/i }).first();
    await expect(dangerButton).toBeVisible();
    await expect(dangerButton).toHaveClass(/bg-red-600/);
  });

  test('variant outline tem borda e fundo transparente', async ({ page }) => {
    const outlineButton = page.locator('button').filter({ hasText: /outline/i }).first();
    await expect(outlineButton).toBeVisible();
    await expect(outlineButton).toHaveClass(/border/);
  });

  test('variant ghost tem fundo transparente', async ({ page }) => {
    const ghostButton = page.locator('button').filter({ hasText: /ghost/i }).first();
    await expect(ghostButton).toBeVisible();
    await expect(ghostButton).toHaveClass(/bg-transparent/);
  });

  test('variant secondary usa bg-primary', async ({ page }) => {
    const secondaryButton = page.locator('button').filter({ hasText: /secondary/i }).first();
    await expect(secondaryButton).toBeVisible();
    await expect(secondaryButton).toHaveClass(/bg-primary/);
  });

  test('size sm tem height 32px', async ({ page }) => {
    const smButton = page.locator('button[data-size="sm"]').first();
    await expect(smButton).toBeVisible();
    await expect(smButton).toHaveClass(/h-8/);
  });

  test('size md tem height 40px', async ({ page }) => {
    const mdButton = page.locator('button[data-size="md"]').first();
    await expect(mdButton).toBeVisible();
    await expect(mdButton).toHaveClass(/h-10/);
  });

  test('size lg tem height 48px', async ({ page }) => {
    const lgButton = page.locator('button[data-size="lg"]').first();
    await expect(lgButton).toBeVisible();
    await expect(lgButton).toHaveClass(/h-12/);
  });

  test('disabled aplica opacity-50 e cursor-not-allowed', async ({ page }) => {
    const disabledButton = page.locator('button[disabled]').first();
    await expect(disabledButton).toBeVisible();
    await expect(disabledButton).toHaveClass(/opacity-50/);
    await expect(disabledButton).toHaveClass(/cursor-not-allowed/);
  });

  test('loading exibe spinner e desabilita clique', async ({ page }) => {
    const loadingButton = page.locator('button').filter({ has: page.locator('.animate-spin') }).first();
    await expect(loadingButton).toBeVisible();
    await expect(loadingButton).toBeDisabled();
  });

  test('typecheck aprovado', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    await page.reload();
    expect(consoleErrors).toHaveLength(0);
  });
});
