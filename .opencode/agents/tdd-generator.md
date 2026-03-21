---
name: tdd-generator
description: "Gera testes Playwright documentados (*.spec.ts) e documentação (*.spec.docs.md) a partir de um arquivo *.feature. Inclui referências detalhadas, passos de implementação e snippets. TODOS os testes começam como SKIP exceto o primeiro."
mode: subagent
temperature: 0.1
tools:
  write: true
  edit: true
  read: true
permission:
  edit: allow
---

## Como Usar Este Agent

```
@tdd-generator feature=[nome-da-feature]
```

## Visão Geral

Gera testes Playwright documentados a partir de cenários BDD:

Input:
- `specs/features/[feature]/features/[feature].feature`

Output:
- `frontend/tests/features/[feature]/[feature].spec.ts`
- `frontend/tests/features/[feature]/[feature].spec.docs.md`

## Pré-requisitos

1. *.feature deve existir (gerado por @bdd-generator)

## Estrutura de Arquivos

```
frontend/tests/features/[feature]/
├── [feature].spec.ts       # Testes limpos
└── [feature].spec.docs.md  # Documentação completa
```

---

## Mapeamento de Tags para Testes

| Tag | Significado | Como Testar |
|-----|-------------|-------------|
| `@happy` | Fluxo normal (sucesso) | Teste positivo |
| `@rule` | Regra de negócio | Assert de validação/bloqueio |
| `@defensive` | Proteção (Lei de Murphy) | Double-click, rapid toggle |
| `@state` | Estados (loading/erro/sucesso) | Espera de estado |
| `@component` | Componente específico | Renderização |

---

## Templates de Mapeamento

### Given → Setup

```typescript
const GIVEN_TEMPLATES = {
  'desktop': {
    viewport: { width: 1280, height: 800 },
    code: `await page.setViewportSize({ width: 1280, height: 800 });`,
    description: 'Viewport Desktop (1280x800)',
    references: [
      { name: 'Viewport Sizes', link: 'https://playwright.dev/docs/api/class-page#page-set-viewport-size' },
    ],
  },
  'mobile': {
    viewport: { width: 375, height: 667 },
    code: `await page.setViewportSize({ width: 375, height: 667 });`,
    description: 'Viewport Mobile (375x667)',
    references: [
      { name: 'Viewport Sizes', link: 'https://playwright.dev/docs/api/class-page#page-set-viewport-size' },
    ],
  },
  'tablet': {
    viewport: { width: 768, height: 1024 },
    code: `await page.setViewportSize({ width: 768, height: 1024 });`,
    description: 'Viewport Tablet (768x1024)',
    references: [
      { name: 'Viewport Sizes', link: 'https://playwright.dev/docs/api/class-page#page-set-viewport-size' },
    ],
  },
  'página carrega': {
    code: `await page.goto('/test-{feature}');`,
    description: 'Navega para página de teste',
    references: [
      { name: 'page.goto', link: 'https://playwright.dev/docs/navigations' },
    ],
  },
  'overlay aberto': {
    code: `await page.click('[data-testid="hamburger-button"]');`,
    description: 'Abre overlay mobile',
    references: [
      { name: 'page.click', link: 'https://playwright.dev/docs/input#click' },
    ],
  },
  'formulário vazio': {
    code: `await page.locator('form').getByRole('textbox').fill('');`,
    description: 'Limpa campos do formulário',
    references: [
      { name: 'page.fill', link: 'https://playwright.dev/docs/input#filling-inputs' },
    ],
  },
};
```

### When → Action

```typescript
const WHEN_TEMPLATES = {
  'clica': {
    template: `await page.click('{selector}');`,
    description: 'Clica em elemento',
    references: [
      { name: 'page.click', link: 'https://playwright.dev/docs/input#click' },
      { name: 'Clicking', link: 'https://playwright.dev/docs/input#clicking' },
    ],
  },
  'digita': {
    template: `await page.fill('{selector}', '{value}');`,
    description: 'Preenche campo de texto',
    references: [
      { name: 'page.fill', link: 'https://playwright.dev/docs/input#filling-inputs' },
    ],
  },
  'pressiona': {
    template: `await page.keyboard.press('{key}');`,
    description: 'Pressiona tecla',
    references: [
      { name: 'keyboard.press', link: 'https://playwright.dev/docs/api/class-keyboard#keyboard-press' },
    ],
  },
  'seleciona': {
    template: `await page.selectOption('{selector}', '{value}');`,
    description: 'Seleciona opção em dropdown',
    references: [
      { name: 'page.selectOption', link: 'https://playwright.dev/docs/input#selecting-a-single-option' },
    ],
  },
  'submete': {
    template: `await page.click('[data-testid="submit"]');`,
    description: 'Submete formulário',
    references: [
      { name: 'page.click', link: 'https://playwright.dev/docs/input#click' },
    ],
  },
  'navega': {
    template: `await page.goto('{url}');`,
    description: 'Navega para URL',
    references: [
      { name: 'page.goto', link: 'https://playwright.dev/docs/navigations' },
    ],
  },
};
```

### Then → Assertion

```typescript
const THEN_TEMPLATES = {
  'visível': {
    template: `await expect(page.locator('{selector}')).toBeVisible();`,
    description: 'Elemento está visível',
    references: [
      { name: 'toBeVisible', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-be-visible' },
    ],
  },
  'oculto': {
    template: `await expect(page.locator('{selector}')).toBeHidden();`,
    description: 'Elemento está oculto',
    references: [
      { name: 'toBeHidden', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-be-hidden' },
    ],
  },
  'redireciona': {
    template: `await expect(page).toHaveURL('{url}');`,
    description: 'URL mudou para destino esperado',
    references: [
      { name: 'toHaveURL', link: 'https://playwright.dev/docs/test-assertions#expect-page-to-have-url' },
    ],
  },
  'contador': {
    template: `await expect(page.locator('{selector}')).toHaveCount({count});`,
    description: 'Quantidade de elementos é a esperada',
    references: [
      { name: 'toHaveCount', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-have-count' },
    ],
  },
  'texto': {
    template: `await expect(page.locator('{selector}')).toHaveText('{text}');`,
    description: 'Texto do elemento é o esperado',
    references: [
      { name: 'toHaveText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-have-text' },
    ],
  },
  'contém texto': {
    template: `await expect(page.locator('{selector}')).toContainText('{text}');`,
    description: 'Elemento contém texto',
    references: [
      { name: 'toContainText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-contain-text' },
    ],
  },
  'altura': {
    template: `const box = await page.locator('{selector}').boundingBox();\nexpect(box?.height).toBe({height});`,
    description: 'Altura do elemento é a esperada',
    references: [
      { name: 'boundingBox', link: 'https://playwright.dev/docs/api/class-locator#locator-bounding-box' },
    ],
  },
};
```

### Convenção de Data-Testids

```typescript
const DATA_TESTID_CONVENTION = {
  // Header
  'header': 'header',
  'logo': 'header-logo',
  'menu desktop': 'header-desktop-menu',
  'menu mobile': 'header-mobile-overlay',
  'hamburger': 'hamburger-button',
  'fechar': 'close-overlay-button',
  'nav item': 'header-nav-{index}',
  
  // Form / Checkout
  'form': '{component}-form',
  'input': '{component}-input',
  'submit': '{component}-submit',
  'submit button': '{component}-submit-button',
  'erro': '{component}-error',
  'loading': '{component}-loading',
  
  // Generic
  'botão': '{component}-button',
  'link': '{component}-link',
  'container': '{component}-container',
};
```

### Templates para Cenários @defensive (Lei de Murphy)

```typescript
const DEFENSIVE_TEMPLATES = {
  'double-click prevention': {
    template: `// Simular clique duplo/rápido
await page.locator('{selector}').click();
await page.locator('{selector}').click();
await page.locator('{selector}').click();

// Verificar que ação ocorreu apenas uma vez
const counter = await getActionCounter();
expect(counter).toBe(1);`,
    description: 'Previne double-click causando ações duplicadas',
    references: [
      { name: 'click', link: 'https://playwright.dev/docs/input#click' },
    ],
  },
  
  'button disabled on click': {
    template: `// Clicar e verificar desabilitação imediata
await expect(page.locator('{selector}')).toBeEnabled();
await page.locator('{selector}').click();
await expect(page.locator('{selector}')).toBeDisabled();
await expect(page.locator('{selector}')).toHaveText(/loading|processando/i);`,
    description: 'Botão desabilita imediatamente após clique',
    references: [
      { name: 'toBeDisabled', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-be-disabled' },
    ],
  },
  
  'rapid toggle': {
    template: `// Toggle rápido
for (let i = 0; i < 5; i++) {
  await page.locator('{selector}').click();
}
// Verificar estado final consistente
await expect(page.locator('{state-selector}')).toHaveState('closed');`,
    description: 'Toggle rápido não causa estado inconsistente',
    references: [
      { name: 'click', link: 'https://playwright.dev/docs/input#click' },
    ],
  },
  
  'timeout preserves data': {
    template: `// Preencher form
await page.fill('{input-selector}', 'valor');
// Forçar timeout (simular)
// Verificar dados preservados
await expect(page.locator('{input-selector}')).toHaveValue('valor');`,
    description: 'Timeout não perde dados do formulário',
    references: [
      { name: 'page.fill', link: 'https://playwright.dev/docs/input#filling-inputs' },
      { name: 'toHaveValue', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-have-value' },
    ],
  },
};
```

### Templates para Cenários @state (Estados)

```typescript
const STATE_TEMPLATES = {
  'loading state': {
    template: `// Trigger ação assíncrona
await page.click('{submit-selector}');
// Verificar loading
await expect(page.locator('{loading-selector}')).toBeVisible();
// Aguardar conclusão
await page.waitForSelector('{success-selector}');`,
    description: 'Estado de loading durante processamento',
    references: [
      { name: 'waitForSelector', link: 'https://playwright.dev/docs/api/class-page#page-wait-for-selector' },
    ],
  },
  
  'error state': {
    template: `// Trigger ação
await page.click('{submit-selector}');
// Simular erro (mock ou intercept)
// Verificar mensagem de erro
await expect(page.locator('{error-selector}')).toContainText('{error-message}');
// Verificar que dados permanecem
await expect(page.locator('{input-selector}')).toHaveValue('{previous-value}');`,
    description: 'Estado de erro com mensagem clara',
    references: [
      { name: 'toContainText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-contain-text' },
    ],
  },
  
  'success state': {
    template: `// Trigger ação
await page.click('{submit-selector}');
// Aguardar sucesso
await expect(page.locator('{success-selector}')).toBeVisible();
await expect(page.locator('{success-selector}')).toContainText('{success-message}');`,
    description: 'Estado de sucesso com feedback',
    references: [
      { name: 'toBeVisible', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-be-visible' },
    ],
  },
};
```

### Templates para Cenários @rule (Regras de Negócio)

```typescript
const RULE_TEMPLATES = {
  'required field validation': {
    template: `// Deixar campo vazio
// Tentar submeter
await page.click('{submit-selector}');
// Verificar erro
await expect(page.locator('{error-selector}')).toContainText(/obrigatório|campo.*vazio/i);
// Verificar que nada foi enviado
expect(apiRequest).not.toHaveBeenSent();`,
    description: 'Campo obrigatório não pode ser vazio',
    references: [
      { name: 'toContainText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-contain-text' },
    ],
  },
  
  'stock validation': {
    template: `// Tentar adicionar quantidade maior que estoque
await page.fill('{quantity-selector}', '100');
await page.click('{submit-selector}');
// Verificar bloqueio
await expect(page.locator('{error-selector}')).toContainText(/estoque|disponível/i);
// Verificar que transação não ocorreu
expect(apiRequest).not.toHaveBeenCalled();`,
    description: 'Estoque insuficiente bloqueia transação',
    references: [
      { name: 'toContainText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-contain-text' },
    ],
  },
  
  'zero value validation': {
    template: `// Valor zero no carrinho
// Tentar finalizar
await page.click('{submit-selector}');
// Verificar bloqueio
await expect(page.locator('{error-selector}')).toContainText(/carrinho.*vazio|valor.*zero/i);`,
    description: 'Valor zero bloqueia transação',
    references: [
      { name: 'toContainText', link: 'https://playwright.dev/docs/test-assertions#expect-locator-to-contain-text' },
    ],
  },
};
```

### Tailwind References

```typescript
const TAILWIND_REFERENCES = {
  'fixed': {
    link: 'https://tailwindcss.com/docs/position#fixed',
    section: '#fixed-positioning',
    description: 'Posiciona elemento fixo em relação ao viewport',
  },
  'top-0': {
    link: 'https://tailwindcss.com/docs/top-right-bottom-left',
    section: '#top',
    description: 'Posiciona no topo',
  },
  'w-full': {
    link: 'https://tailwindcss.com/docs/width',
    section: '#setting-width',
    description: 'Largura 100%',
  },
  'h-[80px]': {
    link: 'https://tailwindcss.com/docs/height',
    section: '#setting-height',
    description: 'Altura fixa de 80px',
  },
  'flex': {
    link: 'https://tailwindcss.com/docs/flex',
    section: '#flexbox',
    description: 'Container flexbox',
  },
  'justify-between': {
    link: 'https://tailwindcss.com/docs/justify-content',
    section: '#justify-between',
    description: 'Espaça elementos igualmente',
  },
  'items-center': {
    link: 'https://tailwindcss.com/docs/align-items',
    section: '#align-items',
    description: 'Alinha itens no centro',
  },
  'hidden': {
    link: 'https://tailwindcss.com/docs/display',
    section: '#hidden',
    description: 'Display none',
  },
  'md:block': {
    link: 'https://tailwindcss.com/docs/responsive-design',
    section: '#breakpoint-prefixes',
    description: 'Visível a partir de md (768px)',
  },
  'md:hidden': {
    link: 'https://tailwindcss.com/docs/responsive-design',
    section: '#breakpoint-prefixes',
    description: 'Oculto a partir de md (768px)',
  },
  'hover:underline': {
    link: 'https://tailwindcss.com/docs/hover-and-focus',
    section: '#hover',
    description: 'Underline no hover',
  },
  'inset-0': {
    link: 'https://tailwindcss.com/docs/inset',
    section: '#setting-inset-values',
    description: 'Preenche container pai',
  },
  'bg-black/50': {
    link: 'https://tailwindcss.com/docs/background-color',
    section: '#changing-opacity',
    description: 'Background com opacidade 50%',
  },
  'z-50': {
    link: 'https://tailwindcss.com/docs/z-index',
    section: '#z-index',
    description: 'Z-index 50',
  },
  'flex-col': {
    link: 'https://tailwindcss.com/docs/flex-direction',
    section: '#column-direction',
    description: 'Flex em coluna',
  },
  'gap-4': {
    link: 'https://tailwindcss.com/docs/gap',
    section: '#gap',
    description: 'Espaçamento de 1rem entre itens',
  },
  'p-8': {
    link: 'https://tailwindcss.com/docs/padding',
    section: '#padding',
    description: 'Padding de 2rem',
  },
  'transition': {
    link: 'https://tailwindcss.com/docs/transition-property',
    section: '#transition-property',
    description: 'Transição CSS',
  },
  'duration-300': {
    link: 'https://tailwindcss.com/docs/transition-duration',
    section: '#transition-duration',
    description: 'Duração de 300ms',
  },
};
```

### React References

```typescript
const REACT_REFERENCES = {
  'useState': {
    link: 'https://react.dev/reference/react/useState',
    section: '#useState',
    description: 'Gerencia estado local do componente',
  },
  'useState boolean': {
    link: 'https://react.dev/reference/react/useState#examples-basic',
    section: '#updating-state',
    description: 'Exemplo de toggle com useState boolean',
  },
  'onClick': {
    link: 'https://react.dev/reference/react-dom/components/button#onclick',
    section: '#onclick',
    description: 'Handler de clique em botão',
  },
  'conditional rendering': {
    link: 'https://react.dev/learn/conditional-rendering',
    section: '#conditional-rendering',
    description: 'Renderização condicional com && ou ternário',
  },
  'stop propagation': {
    link: 'https://react.dev/learn/responding-to-events#stop-propagation',
    section: '#stop-propagation',
    description: 'Impede evento de bubbling',
  },
};
```

### Next.js References

```typescript
const NEXTJS_REFERENCES = {
  'use client': {
    link: 'https://nextjs.org/docs/app/building-your-application/rendering',
    section: '#client-component',
    description: 'Marca componente como Client Component',
  },
  'App Router': {
    link: 'https://nextjs.org/docs/app/building-your-application/routing',
    section: '#file-system-routing',
    description: 'Sistema de rotas do App Router',
  },
  'Link': {
    link: 'https://nextjs.org/docs/app/api-reference/components/link',
    section: '#link-component',
    description: 'Componente de link do Next.js',
  },
};
```

---

## Passos de Execução

### Passo 1: Verificar Pré-requisitos

```typescript
const featurePath = `specs/features/${feature}/features/${feature}.feature`;
if (!await fileExists(featurePath)) {
  return { error: '*.feature não encontrado. Execute @bdd-generator primeiro.' };
}
```

### Passo 2: Ler *.feature

```typescript
const featureContent = await readFile(featurePath);

// Parsear cenários
const scenarios = parseFeatureFile(featureContent);

// Estrutura:
// Feature: Nome
//   @tag1 @tag2
//   Scenario: Nome do cenário
//     Given ...
//     When ...
//     Then ...
```

### Passo 3: Extrair Constants

Identificar placeholders do *.feature e gerar constants:

```typescript
const PLACEHOLDER_MAPPING = {
  'HEADER_HEIGHT': 80,
  'NAV_COUNT': 4,
  'BREAKPOINT': 768,
  'ANIMATION_DURATION': 300,
  'MOBILE_WIDTH': 375,
  'MOBILE_HEIGHT': 667,
  'DESKTOP_WIDTH': 1280,
  'DESKTOP_HEIGHT': 800,
};
```

### Passo 4: Gerar *.spec.ts

```typescript
function generateSpecTs(feature: string, scenarios: Scenario[]): string {
  let output = `import { test, expect } from '@playwright/test';\n\n`;
  
  // Constants
  output += `const HEADER_HEIGHT = 80;\n`;
  output += `const NAV_COUNT = 4;\n`;
  output += `const MOBILE_WIDTH = 375;\n`;
  output += `const MOBILE_HEIGHT = 667;\n`;
  output += `const DESKTOP_WIDTH = 1280;\n`;
  output += `const DESKTOP_HEIGHT = 800;\n\n`;
  
  // Feature header
  output += `test.describe('Feature: ${formatFeatureName(feature)}', () => {\n`;
  
  for (const [index, scenario] of scenarios.entries()) {
    output += generateScenarioTests(scenario, index);
  }
  
  output += `});\n`;
  
  return output;
}

function generateScenarioTests(scenario: Scenario, scenarioIndex: number): string {
  let output = `\n  test.describe('Scenario: ${scenario.name}', () => {\n`;
  
  // beforeEach baseado no Given
  output += `    test.beforeEach(async ({ page }) => {\n`;
  output += generateGivenSetup(scenario.given);
  output += `    });\n\n`;
  
  // Tests baseados no Then - primeiro é skip por padrão
  const isFirstScenario = scenarioIndex === 0;
  
  for (const [index, then] of scenario.then.entries()) {
    const isFirstTest = isFirstScenario && index === 0;
    output += generateTest(then, index, isFirstTest);
  }
  
  output += `  });\n`;
  
  return output;
}
```

### Passo 5: Gerar *.spec.docs.md

```typescript
function generateDocsMd(feature: string, scenarios: Scenario[]): string {
  let output = `# ${formatFeatureName(feature)}: Documentação de Implementação dos Testes\n\n`;
  
  // Visão geral
  output += generateOverviewTable(scenarios);
  
  // Referências completas
  output += generateCompleteReferences();
  
  // Data-testids
  output += generateDataTestidTable(scenarios);
  
  // Para cada cenário
  for (const scenario of scenarios) {
    output += generateScenarioDocs(scenario);
  }
  
  // Validações
  output += generateValidationChecklist();
  
  // Snippets
  output += generateCompleteSnippets();
  
  return output;
}
```

### Passo 6: Criar diretórios e salvar

```typescript
// Criar diretórios
const testsDir = `frontend/tests/features/${feature}`;
await mkdir(testsDir, { recursive: true });

// Salvar *.spec.ts
await writeFile(`${testsDir}/${feature}.spec.ts`, specTsContent);

// Salvar *.spec.docs.md
await writeFile(`${testsDir}/${feature}.spec.docs.md`, docsMdContent);
```

---

## Funções Auxiliares

### parseFeatureFile

```typescript
function parseFeatureFile(content: string): ParsedFeature {
  const lines = content.split('\n');
  let feature = '';
  const scenarios: Scenario[] = [];
  let currentScenario: Partial<Scenario> = {};
  
  for (const line of lines) {
    if (line.startsWith('Feature:')) {
      feature = line.replace('Feature:', '').trim();
    } else if (line.startsWith('@')) {
      const tags = line.match(/@(\w+)/g)?.map(t => t.replace('@', '')) || [];
      currentScenario.tags = tags;
    } else if (line.startsWith('Scenario:')) {
      currentScenario.name = line.replace('Scenario:', '').trim();
    } else if (line.startsWith('Given')) {
      currentScenario.given = currentScenario.given || [];
      currentScenario.given.push(line.replace('Given', '').trim());
    } else if (line.startsWith('When')) {
      currentScenario.when = currentScenario.when || [];
      currentScenario.when.push(line.replace('When', '').trim());
    } else if (line.startsWith('Then')) {
      currentScenario.then = currentScenario.then || [];
      currentScenario.then.push(line.replace('Then', '').trim());
    } else if (line.trim() === '' && currentScenario.name) {
      scenarios.push(currentScenario as Scenario);
      currentScenario = {};
    }
  }
  
  return { feature, scenarios };
}
```

### mapGivenToPlaywright

```typescript
function mapGivenToPlaywright(given: string): string {
  const givenLower = given.toLowerCase();
  
  if (givenLower.includes('desktop') || givenLower.includes('≥768px')) {
    return `await page.setViewportSize({ width: 1280, height: 800 });`;
  }
  
  if (givenLower.includes('mobile') || givenLower.includes('<768px')) {
    return `await page.setViewportSize({ width: 375, height: 667 });`;
  }
  
  if (givenLower.includes('página carrega')) {
    return `await page.goto('/test-{feature}');`;
  }
  
  return `// TODO: Setup para: ${given}`;
}
```

---

## Funções Auxiliares (Test Generation)

### formatThenToTestName

```typescript
function formatThenToTestName(then: string): string {
  // Remove "Then " do início
  let testName = then.replace(/^Then\s+/i, '');
  
  // Converte para minúsculas
  testName = testName.toLowerCase();
  
  // Substitui placeholders por descrições genéricas
  testName = testName.replace(/\{[\w_]+\}/g, 'valor');
  
  // Remove caracteres especiais
  testName = testName.replace(/[^a-z0-9\s]/g, '');
  
  // Substitui múltiplos espaços por um único
  testName = testName.replace(/\s+/g, ' ').trim();
  
  // Limita tamanho
  if (testName.length > 60) {
    testName = testName.substring(0, 60);
  }
  
  return testName;
}
```

### generateThenAssertion

```typescript
function generateThenAssertion(then: string): string {
  const thenLower = then.toLowerCase();
  
  // Extrair elemento do Then
  const element = extractElement(then);
  const selector = mapToDataTestid(element);
  
  // Mapear para asserção Playwright
  if (thenLower.includes('visível') || thenLower.includes('visible')) {
    return `      await expect(page.locator('[data-testid="${selector}"]')).toBeVisible();\n`;
  }
  
  if (thenLower.includes('oculto') || thenLower.includes('hidden')) {
    return `      await expect(page.locator('[data-testid="${selector}"]')).toBeHidden();\n`;
  }
  
  if (thenLower.includes('contém') || thenLower.includes('text')) {
    const textMatch = then.match(/['""]?([^'"",]+)['""]?/);
    const text = textMatch ? textMatch[1] : '';
    return `      await expect(page.locator('[data-testid="${selector}"]')).toContainText('${text}');\n`;
  }
  
  if (thenLower.includes('contador') || thenLower.includes('count')) {
    const countMatch = then.match(/\d+/);
    const count = countMatch ? countMatch[0] : '0';
    return `      await expect(page.locator('[data-testid="${selector}"]')).toHaveCount(${count});\n`;
  }
  
  // Default: verificar visibilidade
  return `      await expect(page.locator('[data-testid="${selector}"]')).toBeVisible();\n`;
}
```

### extractElement

```typescript
function extractElement(then: string): string {
  // Padrões comuns:
  // - "a sidebar" → "sidebar"
  // - "o logo" → "logo"
  // - "menu de navegação" → "nav-menu"
  // - "botão" → "button"
  
  let element = then
    .replace(/^(Then|And)\s+/i, '')
    .replace(/^(está|tem|exibe|mostra|é)\s+/i, '')
    .trim();
  
  // Mapeamento de tradução
  const elementMap: Record<string, string> = {
    'a sidebar': 'sidebar',
    'o logo': 'logo',
    'a empresa': 'logo',
    'menu de navegação': 'nav',
    'navegação': 'nav',
    'botão': 'button',
    'botão hamburger': 'hamburger',
    'botão premium': 'premium-button',
    'área de perfil': 'profile',
    'perfil': 'profile',
    'avatar': 'profile-avatar',
    'nome': 'profile-name',
    'overlay': 'overlay',
    'item': 'nav-item',
    'itens': 'nav-item',
    'conteúdo': 'content',
    'main': 'content',
  };
  
  for (const [key, value] of Object.entries(elementMap)) {
    if (element.toLowerCase().includes(key)) {
      return value;
    }
  }
  
  return element.split(' ')[0].toLowerCase();
}
```

### mapToDataTestid

```typescript
function mapToDataTestid(element: string): string {
  const kebabCase = element
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
  
  return kebabCase;
}
```

---

## Output

```
✅ Testes gerados para feature [nome]

Arquivos criados:
- frontend/tests/features/[feature]/[feature].spec.ts
- frontend/tests/features/[feature]/[feature].spec.docs.md

Testes gerados: N
  - 1 ATIVO (primeiro teste - implementar primeiro)
  - N-1 SKIPPED (implementar depois)

Cenários: M

Próx passos:
1. Execute: npx playwright test
   → Apenas 1 teste falhará (fácil de debugar)
2. Implemente o código mínimo para passar
3. Remova .skip() do próximo teste
4. Repita até o primeiro cenário completo
5. Passe para o próximo cenário
```

---

## Validações

Antes de salvar:

- [ ] *.spec.tscompila (sintaxe válida)
- [ ] Constants definidas corretamente
- [ ] Cada Then tem pelo menos 1 teste
- [ ] data-testids seguem convenção
- [ ] *.spec.docs.md tem referências completas
- [ ] Links estão corretos e formatados
- [ ] Primeiro teste SEM skip (ativo)
- [ ] Demais testes COM skip

---

## Regras

1. **Constants no spec.ts** - valores centralizados
2. **data-testids por convenção** - seguir mapeamento
3. **Referências completas** - incluir links e seções
4. **Given no beforeEach** - setup agrupado
5. **Then = 1 teste** - cada Then = 1 assertion
6. **Skip por padrão** - TODOS os testes começam como `test.skip()` exceto o primeiro
   - Primeiro cenário + primeira asserção = `test()` (ATIVO para implementação)
   - Demais cenários e asserções = `test.skip()` (implementar depois)

---

## Exemplo de Output: *.spec.ts

```typescript
import { test, expect } from '@playwright/test';

const HEADER_HEIGHT = 80;
const NAV_COUNT = 4;
const MOBILE_WIDTH = 375;
const MOBILE_HEIGHT = 667;
const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 800;

test.describe('Feature: Header de Navegação', () => {

  test.describe('Scenario: Header desktop exibe logo e menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT });
      await page.goto('/test-header');
    });

    // ✅ PRIORIDADE: Implementar primeiro
    test('header deve ser visível', async ({ page }) => {
      const header = page.locator('[data-testid="header"]');
      await expect(header).toBeVisible();
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('header deve ter altura HEADER_HEIGHT', async ({ page }) => {
      const header = page.locator('[data-testid="header"]');
      const box = await header.boundingBox();
      expect(box?.height).toBe(HEADER_HEIGHT);
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('deve exibir logo à esquerda', async ({ page }) => {
      const logo = page.locator('[data-testid="header-logo"]');
      await expect(logo).toBeVisible();
    });

    // ⏭️ Implementar após o primeiro teste passar
    test.skip('deve exibir NAV_COUNT itens de navegação', async ({ page }) => {
      const menuItems = page.locator('[data-testid="header-desktop-menu"] a');
      await expect(menuItems).toHaveCount(NAV_COUNT);
    });
  });

  // ⏭️ SEGUNDO CENÁRIO: Todos skip
  test.describe('Scenario: Header mobile exibe hamburger', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: MOBILE_WIDTH, height: MOBILE_HEIGHT });
      await page.goto('/test-header');
    });

    // ⏭️ Implementar após primeiro cenário completo
    test.skip('sidebar deve estar oculta', async ({ page }) => {
      const sidebar = page.locator('[data-testid="sidebar"]');
      await expect(sidebar).toBeHidden();
    });

    // ⏭️ Implementar após primeiro cenário completo
    test.skip('hamburger deve estar visível', async ({ page }) => {
      const hamburger = page.locator('[data-testid="hamburger-button"]');
      await expect(hamburger).toBeVisible();
    });
  });

});
```

---

## Estratégia: TDD Incremental com Skip

### Fluxo de Trabalho

```
1. @tdd-generator feature=sidebar
   ↓
2. Testes gerados com PRIMEIRO ativo, demais skip
   ↓
3. Executar: npx playwright test
   ↓ (apenas 1 teste falha - fácil de debugar)
4. Implementar componente mínimo para passar
   ↓
5. Teste passa ✅ → Remover .skip() do próximo
   ↓
6. Repetir até o primeiro cenário completo
   ↓
7. Passar para o segundo cenário
   ↓
8. Repetir até todos os testes passarem
```

### Comandos Úteis

```bash
# Executar apenas o primeiro teste (ignora skips)
npx playwright test --grep "@PRIORIDADE" --grep-invert

# Ou usar grep para buscar apenas testes sem skip
npx playwright test | grep -v "skipped"

# Executar em modo watch durante implementação
npx playwright test --watch

# Ver apenas testes ativos (não-skipped)
npx playwright test --list | grep -v "skip"
```

### Critérios para Prioridade

| Prioridade | Critério | Status |
|------------|----------|--------|
| 1º | Primeiro cenário, primeira asserção | ATIVO |
| 2º | Primeiro cenário, demais asserções | SKIP |
| 3º | Demais cenários | SKIP |

### Removendo Skip Progressivamente

```typescript
// Antes (gerado)
test.skip('deve ter sidebar visível', async ({ page }) => {
  // ...
});

// Depois de implementar
test('deve ter sidebar visível', async ({ page }) => {
  // ...
});
```

---

## Exemplo de Output: *.spec.docs.md

```markdown
# Header: Documentação de Implementação dos Testes

## Visão Geral

| Scenario | Tags | Testes |
|----------|------|--------|
| Header desktop | @desktop | 3 |

---

## SCENARIO: Header desktop exibe logo e menu
**Tags:** @desktop
**Viewport:** Desktop (≥768px)
**Testes:** 3

---

### Teste 1: deve ter header fixed com altura de HEADER_HEIGHT

**Elemento:** `[data-testid="header"]`

**Passos:**
1. Criar página de teste
2. Criar componente Header
3. Adicionar elemento com classes

**Código:**
```tsx
<header data-testid="header" className="fixed top-0 w-full h-[80px]">
```

**Referências:**
- [Tailwind Fixed](https://tailwindcss.com/docs/position#fixed) - #fixed-positioning
- [Tailwind Height](https://tailwindcss.com/docs/height) - #setting-height
- [Playwright toBeVisible](https://playwright.dev/docs/test-assertions#expect-locator-to-be-visible)
```
