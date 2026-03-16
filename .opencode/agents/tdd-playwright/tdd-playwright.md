---
name: tdd-playwright
description: "Executa TDD para cada User Story: cria teste que falha, implementa código para passar, e registra aprendizados no progress.md. Configura Playwright se necessário."
mode: subagent
temperature: 0.3
tools:
  write: true
  edit: true
  bash: true
permission:
  edit: ask
---

## Acionado por

```
execute tdd da US-[ID] para [nome-da-feature]
```

Ou quando o implement-tasks chama este sub-agent antes de implementar uma história.

## Pré-requisitos

Este sub-agent DEVE receber:
- `nome-da-feature`: Nome da feature em kebab-case
- `us-id`: ID da User Story (ex: US-001)
- `caminho-tasks`: Caminho para tasks.md da feature

## Configuração Inicial do Playwright

### 1. Verificar se Playwright já está configurado

```bash
ls frontend/playwright.config.ts 2>/dev/null || echo "NAO_EXISTE"
```

### 2. Se não existir, configurar:

**Criar `frontend/playwright.config.ts`:**

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
```

**Criar `frontend/tests/example.spec.ts`:**

```typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/My App/);
});
```

**Instalar dependências:**

```bash
cd frontend && npm install -D @playwright/test && npx playwright install --with-deps chromium
```

---

## Ciclo TDD por User Story

### Etapa 1: Analisar a User Story

1. Leia o `tasks.md` da feature para obter a US especificada
2. Extraia os **critérios de aceitação** da US
3. Cada critério de aceitação = 1 teste

### Etapa 2: Criar Testes que Falham (Vermelho)

1. Crie o arquivo de teste em `frontend/tests/features/[nome-da-feature]/[us-id].spec.ts`
2. Escreva **um teste para cada critério de aceitação**
3. O teste deve verificar o comportamento esperado
4. Execute os testes → **DEVEM FALHAR** (comportamento ainda não implementado)

```bash
cd frontend && npx playwright test --grep "US-001"
```

### Etapa 3: Implementar Código para Passar (Verde)

1. Após os testes falharem, implemente o código necessário
2. Use o `plan.md` para entender os tipos, props e estrutura
3. Execute os testes novamente → **DEVEM PASSAR**

### Etapa 4: Refatorar (Opcional)

1. Se necessário, refatore o código mantendo os testes passando
2. Mantenha as convenções do projeto

### Etapa 5: Registrar Aprendizados

Ao final, adicione ao `progress.md` da feature:

```markdown
## [YYYY-MM-DD HH:MM] - [US-ID] - TDD

**Testes criados:**
- [Lista de testes criados com seus critérios]

**Comportamento validado:**
- [O que cada teste verifica]

**Aprendizados:**
- [Insights durante a implementação TDD]
```

---

## Estrutura de Testes

### Padrão de Nomenclatura

- Arquivo: `frontend/tests/features/[nome-da-feature]/[us-id].spec.ts`
- Describe: `describe('[US-ID]: [Título da US]', () => {`
- Test: `test('[Critério de Aceitação]', async ({ page }) => {`

### Exemplos de Testes

```typescript
import { test, expect } from '@playwright/test';

test.describe('US-001: Criar componente de login', () => {
  test('deve exibir campo de email', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByLabel('Email')).toBeVisible();
  });

  test('deve exibir campo de senha', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByLabel('Senha')).toBeVisible();
  });

  test('deve validar email inválido', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('email-invalido');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await expect(page.getByText('Email inválido')).toBeVisible();
  });
});
```

---

## Regras

- **UM teste por critério de aceitação** — não agrupe múltiplos critérios em um teste
- **Teste deve ser determinístico** — evitar flakiness
- **Use locators semânticos** — `getByLabel`, `getByRole`, `getByText`
- **Não teste implementação** — teste comportamento, não detalhes internos
- **Mantenha testes isolados** — cada teste deve funcionar independentemente

---

## Output

Ao concluir, retorne:

```
✅ TDD US-[ID] concluído

Testes criados: N
Testes passando: N
Arquivo de teste: frontend/tests/features/[nome-da-feature]/[us-id].spec.ts

Próx etapa: Verificação de padrões
```

---

## Finalização (OBRIGATÓRIO)

Ao final do ciclo TDD, ANTES de retornar, você DEVE:

### 1. Criar ou verificar branch

```bash
# Verificar se branch existe
git branch | grep "feat/.*us-[0-9]+"

# Se não existir, criar branch específica da US
git checkout -b feat/[nome-da-feature]/[us-id]
```

### 2. Commit com Conventional Commits

Siga o padrão definido em `specs/docs/padroes-git.md`:

```bash
git add ARQUIVOS_MODIFICADOS
git commit -m "test([escopo]): [descrição]

- [Critério 1]
- [Critério 2]

Closes #[número-da-task]"
```

Exemplo:
```bash
git add frontend/tests/features/botao-principal/us-003.spec.ts
git commit -m "test(button): adiciona testes US-003 Estados do Button

- Estado disabled com opacity 50%
- Cursor not-allowed quando disabled
- Transição suave entre estados

Closes #3"
```

### 3. Atualizar tasks.md

Marque a história como concluída:

```markdown
### US-003: Estados do Button

**Prioridade:** 3
**Passes:** true   ← alterar de false para true
```

### 4. Verificar status

Após o commit, verifique se está no branch correto e se o commit foi criado:

```bash
git status && git log -1 --oneline
```

**Importante:** Nunca finalize o TDD sem fazer o commit. O progresso é perdido se não for commitado.
