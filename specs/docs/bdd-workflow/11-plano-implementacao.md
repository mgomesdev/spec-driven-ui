# Plano de Implementação - BDD Workflow

> Data: 2024-01-XX
> Status: Planning

---

## Visão Geral

Implementar o fluxo BDD completo para desenvolvimento de features com:
- Geração automática de cenários BDD (*.feature)
- Geração automática de testes documentados (*.spec.ts + *.spec.docs.md)
- Orquestração com approval humano
- Worktrees para execução paralela

---

## Estrutura de Arquivos a Criar

```
.opencode/
└── agents/
    ├── bdd-generator.md          # Gera *.feature do research/plan
    └── tdd-generator.md          # Gera *.spec.ts + *.spec.docs.md

specs/
└── docs/
    └── bdd-workflow/             # Documentação (já existente)
        ├── README.md
        ├── 01-fluxo-principal.md
        ├── 02-artifacts.md
        ├── 03-tags-status.md
        ├── 04-orchestrator.md
        ├── 05-subagent.md
        ├── 06-progress.md
        ├── 07-aproval.md
        ├── 08-worktrees.md
        ├── 09-excecoes.md
        ├── 10-exemplo-header.md
        └── 11-plano-implementacao.md  # ESTE ARQUIVO
```

---

## Artefatos a Implementar

### 1. Agent: @bdd-generator

**Responsabilidade:** Gerar cenários BDD (*.feature) a partir de research.md e plan.md

**Input:**
- `specs/features/[feature]/research.md`
- `specs/features/[feature]/plan.md`

**Output:**
- `specs/features/[feature]/features/[feature].feature`

**Funcionalidades:**
- [ ] Parsear User Stories do research.md
- [ ] Extrair contextos (@desktop, @mobile, @a11y)
- [ ] Mapear critérios de aceitação para Given-When-Then
- [ ] Usar placeholders para constants (HEADER_HEIGHT, NAV_COUNT)
- [ ] Adicionar tags @pending
- [ ] Criar estrutura de cenários completos

### 2. Agent: @tdd-generator

**Responsabilidade:** Gerar testes Playwright documentados

**Input:**
- `specs/features/[feature]/features/[feature].feature`

**Output:**
- `frontend/tests/features/[feature]/[feature].spec.ts`
- `frontend/tests/features/[feature]/[feature].spec.docs.md`

**Funcionalidades:**
- [ ] Parsear cenários do *.feature
- [ ] Mapear Given-When-Then para Playwright (templates)
- [ ] Gerar data-testids por convenção
- [ ] Definir constants no spec.ts
- [ ] Gerar *.spec.docs.md com:
  - [ ] Passos de implementação detalhados
  - [ ] Referências completas (links com seções)
  - [ ] Snippets de código
  - [ ] Checklist de validações

### 3. Atualizar Agent: @implement-tasks

**Modificações:**
- [ ] Ler *.spec.docs.md para guidance
- [ ] Usar data-testids do spec.docs.md
- [ ] Seguir passos de implementação documentados

---

## Fluxo Completo Implementado

```
research.md ──► @research-to-plan ──► plan.md
                                        │
                                        ▼ @bdd-generator
                               *.feature (@pending)
                                        │
                                        ▼ @tdd-generator
                               ├── *.spec.ts (testes limpos)
                               └── *.spec.docs.md (docs completas)
                                        │
                                        ▼ @implement-tasks (Orchestrator)
                               código.tsx + testes green
                                        │
                                        ▼ @orchestrator
                               *.feature (@done)
                                        │
                                        ▼
                               PR
```

---

## Detalhamento: @bdd-generator

### Estrutura do Agent

```markdown
# @bdd-generator

## Input
- research.md
- plan.md

## Output
- *.feature

## Passos

1. Ler research.md
   - Extrair User Stories
   - Extrair critérios de aceitação
   - Extrair contextos (desktop/mobile/a11y)

2. Ler plan.md
   - Extrair artefatos
   - Extrair tipos/interfaces

3. Para cada User Story:
   - Gerar cenários Given-When-Then
   - Mapear AC para Then clauses
   - Identificar contextos das tags

4. Gerar *.feature
   - Header com tags @pending
   - Cenários com Given-When-Then
   - Placeholders para constants

5. Salvar em specs/features/[feature]/features/[feature].feature
```

### Templates de Mapeamento

| AC do Research | Gherkin |
|---------------|---------|
| "Header fixo no topo" | `Then o header é fixed no topo` |
| "Logo à esquerda" | `Then o logo aparece à esquerda` |
| "Menu com 4 itens" | `Then o menu exibe NAV_COUNT itens` |
| "Em mobile (<768px)" | `Given que o usuário está em mobile (<768px)` |
| "Clicar hamburger" | `When o usuário clica no botão hamburger` |
| "Overlay aparece" | `Then o overlay aparece com animação` |

### Placeholders de Constants

```typescript
// Mapeamento de valores para placeholders
const PLACEHOLDERS = {
  '80px': 'HEADER_HEIGHT',
  '4': 'NAV_COUNT',
  '768px': 'BREAKPOINT',
  '300ms': 'ANIMATION_DURATION',
  '375x667': 'MOBILE_VIEWPORT',
  '1280x800': 'DESKTOP_VIEWPORT',
};
```

---

## Detalhamento: @tdd-generator

### Estrutura do Agent

```markdown
# @tdd-generator

## Input
- *.feature

## Output
- *.spec.ts
- *.spec.docs.md

## Passos

1. Ler *.feature
   - Parsear cenários
   - Extrair Given-When-Then

2. Gerar *.spec.ts
   - Definir constants
   - Para cada Scenario:
     - Criar test.describe
     - Mapear Given → beforeEach
     - Mapear When → test
     - Mapear Then → assertions

3. Gerar *.spec.docs.md
   - Visão geral (tabela de cenários)
   - Para cada teste:
     - Elemento data-testid
     - Passos de implementação
     - Referências com links
     - Snippets de código
```

### Templates: Given → Playwright

```typescript
const GIVEN_TEMPLATES = {
  'desktop': `await page.setViewportSize({ width: 1280, height: 800 });`,
  'mobile': `await page.setViewportSize({ width: 375, height: 667 });`,
  'tablet': `await page.setViewportSize({ width: 768, height: 1024 });`,
  'página carrega': `await page.goto('/test-{feature}');`,
  'overlay aberto': `await page.click('[data-testid="hamburger-button"]');`,
};
```

### Templates: When → Playwright

```typescript
const WHEN_TEMPLATES = {
  'clica no': `await page.click('[data-testid="{element}"]');`,
  'digita': `await page.fill('[data-testid="{element}"]', '{value}');`,
  'pressiona': `await page.keyboard.press('{key}');`,
  'seleciona': `await page.selectOption('[data-testid="{element}"]', '{value}');`,
};
```

### Templates: Then → Playwright

```typescript
const THEN_TEMPLATES = {
  'visível': `await expect(page.locator('[data-testid="{element}"]')).toBeVisible();`,
  'oculto': `await expect(page.locator('[data-testid="{element}"]')).toBeHidden();`,
  'URL muda para': `await expect(page).toHaveURL('{url}');`,
  'contador é': `await expect(page.locator('{selector}')).toHaveCount({count});`,
  'texto é': `await expect(page.locator('[data-testid="{element}"]')).toHaveText('{text}');`,
};
```

### Convenção de Data-Testids

```typescript
const DATA_TESTID_CONVENTION = {
  'header': 'header',
  'logo': 'header-logo',
  'menu desktop': 'header-desktop-menu',
  'menu mobile': 'header-mobile-overlay',
  'hamburger': 'hamburger-button',
  'fechar overlay': 'close-overlay-button',
  'nav items': 'header-nav-{index}',
};
```

### Estrutura: *.spec.docs.md

```markdown
# [Feature]: Documentação de Implementação dos Testes

## Visão Geral
- Tabela de cenários

## Referências Completas
- Tailwind (com links e seções)
- React (com links e seções)
- Next.js (com links e seções)
- Playwright (com links e seções)
- TypeScript (com links e seções)
- MDN (com links e seções)

## Data-Testids
- Tabela com todos os data-testids

## [SCENARIO: Nome]
### [Teste 1: deve...]

#### Passos de Implementação
1. Passo 1...
2. Passo 2...

#### Código
```tsx
// código
```

#### Referências
- [Tailwind X](link) - Seção
- [React Y](link) - Seção

## Validações Finais
- Checklist
```

---

## Implementação: Prioridades

### Fase 1: Core (essencial)

1. **@bdd-generator**
   - Ler research.md + plan.md
   - Gerar *.feature com Given-When-Then
   - Usar tags @pending

2. **@tdd-generator**
   - Ler *.feature
   - Gerar *.spec.ts com constants
   - Gerar *.spec.docs.md com referências

### Fase 2: Integração

3. **Atualizar fluxo**
   - Integrar agentes no fluxo research → plan → bdd → spec → tdd
   - Adicionar comandos de uso

4. **Documentação**
   - Atualizar README do bdd-workflow
   - Adicionar exemplos de uso

### Fase 3: Enhancements

5. **Melhorias**
   - Adicionar mais templates
   - Suporte a mais componentes
   - Validação de *.feature

---

## Comandos de Uso

### Após Implementação

```bash
# 1. Gerar research + plan (já existe)
@research-to-plan feature=header

# 2. Gerar BDD (NOVO)
@bdd-generator feature=header

# 3. Gerar testes (NOVO)
@tdd-generator feature=header

# 4. Implementar (já existe)
@implement-tasks scenario="Header desktop"
```

---

## Testes de Validação

### Teste 1: BDD Generator

```bash
# Dado: research.md e plan.md existem
# Quando: @bdd-generator feature=header
# Então: *.feature é criado com cenários
```

**Verificações:**
- [ ] *.feature existe
- [ ] Cenários têm Given-When-Then
- [ ] Tags @pending estão presentes
- [ ] Placeholders para constants

### Teste 2: TDD Generator

```bash
# Dado: *.feature existe
# Quando: @tdd-generator feature=header
# Então: *.spec.ts e *.spec.docs.md são criados
```

**Verificações:**
- [ ] *.spec.ts existe
- [ ] Constants definidas
- [ ] test.describe por cenário
- [ ] *.spec.docs.md existe
- [ ] Referências com links
- [ ] Passos de implementação

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Templates insuficientes | Média | Alta | Começar com templates básicos, expandir |
| Conflitos de nomenclatura | Baixa | Média | Usar convenção clara de data-testids |
| Docs desatualizadas | Média | Baixa | Regenerar docs quando *.feature muda |

---

## Estimativa de Esforço

| Artefato | Complexidade | Estimativa |
|----------|-------------|------------|
| @bdd-generator | Média | 2-3 horas |
| @tdd-generator | Alta | 4-6 horas |
| Documentação | Baixa | 1 hora |
| Integração | Média | 2 horas |
| **Total** | - | **9-12 horas** |

---

## Próximos Passos

1. [ ] Implementar @bdd-generator
2. [ ] Testar com feature Header
3. [ ] Implementar @tdd-generator
4. [ ] Testar geração de *.spec.docs.md
5. [ ] Integrar no fluxo
6. [ ] Documentar uso
7. [ ] Testar com nova feature

---

## Referências

- [BDD Workflow Docs](../bdd-workflow/)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Tailwind Documentation](https://tailwindcss.com/docs)
