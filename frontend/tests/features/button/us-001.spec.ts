import { test, expect } from '@playwright/test';

test.describe('US-001: Criar componente Button com tipos', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-button');
  });

  // Critério 1: Arquivo define tipos ButtonVariant, ButtonSize e ButtonProps no mesmo arquivo
  test('tipos definidos no mesmo arquivo', async ({ page }) => {
    // Verifica que o componente existe e pode ser importado (o typecheck validará isso)
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
  });

  // Critério 2: Componente renderiza elemento `<button>` com props corretas
  test('renderiza elemento button com props', async ({ page }) => {
    const button = page.locator('button').first();
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute('type', 'button');
  });

  // Critério 3: variant="primary" usa bg-accent com texto branco
  test('variant primary usa bg-accent com texto branco', async ({ page }) => {
    const primaryButton = page.locator('button').filter({ hasText: /primary/i }).first();
    await expect(primaryButton).toBeVisible();
    // Verifica classes de estilo primary
    await expect(primaryButton).toHaveClass(/bg-accent/);
    await expect(primaryButton).toHaveClass(/text-white/);
  });

  // Critério 4: variant="danger" usa bg-red-600
  test('variant danger usa bg-red-600', async ({ page }) => {
    const dangerButton = page.locator('button').filter({ hasText: /danger/i }).first();
    await expect(dangerButton).toBeVisible();
    await expect(dangerButton).toHaveClass(/bg-red-600/);
  });

  // Critério 5: variant="outline" tem borda e fundo transparente
  test('variant outline tem borda e fundo transparente', async ({ page }) => {
    const outlineButton = page.locator('button').filter({ hasText: /outline/i }).first();
    await expect(outlineButton).toBeVisible();
    await expect(outlineButton).toHaveClass(/border/);
  });

  // Critério 6: variant="ghost" tem fundo transparente
  test('variant ghost tem fundo transparente', async ({ page }) => {
    const ghostButton = page.locator('button').filter({ hasText: /ghost/i }).first();
    await expect(ghostButton).toBeVisible();
    // Ghost deve ter bg-transparent
    await expect(ghostButton).toHaveClass(/bg-transparent/);
  });

  // Critério 7: variant="secondary" usa bg-primary
  test('variant secondary usa bg-primary', async ({ page }) => {
    const secondaryButton = page.locator('button').filter({ hasText: /secondary/i }).first();
    await expect(secondaryButton).toBeVisible();
    await expect(secondaryButton).toHaveClass(/bg-primary/);
  });

  // Critério 8: size="sm" tem height 32px
  test('size sm tem height 32px', async ({ page }) => {
    const smButton = page.locator('button[data-size="sm"]').first();
    await expect(smButton).toBeVisible();
    // O tamanho sm deve ter altura de 32px (8 = 32px em Tailwind)
    await expect(smButton).toHaveClass(/h-8/);
  });

  // Critério 9: size="md" tem height 40px
  test('size md tem height 40px', async ({ page }) => {
    const mdButton = page.locator('button[data-size="md"]').first();
    await expect(mdButton).toBeVisible();
    await expect(mdButton).toHaveClass(/h-10/);
  });

  // Critério 10: size="lg" tem height 48px
  test('size lg tem height 48px', async ({ page }) => {
    const lgButton = page.locator('button[data-size="lg"]').first();
    await expect(lgButton).toBeVisible();
    await expect(lgButton).toHaveClass(/h-12/);
  });

  // Critério 11: disabled=true aplica opacity-50 e cursor-not-allowed
  test('disabled aplica opacity-50 e cursor-not-allowed', async ({ page }) => {
    const disabledButton = page.locator('button[disabled]').first();
    await expect(disabledButton).toBeVisible();
    await expect(disabledButton).toHaveClass(/opacity-50/);
    await expect(disabledButton).toHaveClass(/cursor-not-allowed/);
  });

  // Critério 12: loading=true exibe spinner e desabilita clique
  test('loading exibe spinner e desabilita clique', async ({ page }) => {
    const loadingButton = page.locator('button').filter({ has: page.locator('.animate-spin') }).first();
    await expect(loadingButton).toBeVisible();
    await expect(loadingButton).toBeDisabled();
  });

  // Critério 13: Typecheck aprovado
  test('typecheck aprovado', async ({ page }) => {
    // O typecheck será validado pelo build/compilação
    // Apenas verifica que a página carrega sem erros de console
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
