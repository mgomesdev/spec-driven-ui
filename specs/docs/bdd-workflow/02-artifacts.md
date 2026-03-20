# Artefatos do BDD Workflow

## Visão Geral

```
research.md      → Contexto de negócio (input PO)
plan.md          → Artefatos de alto nível (input Dev)
*.feature        → Cenários BDD executáveis (input BDD Generator)
*.spec.ts        → Testes Playwright (output TDD)
código.tsx       → Implementação (output Dev)
progress.md      → Status dos cenários
```

---

## 1. research.md

**Propósito:** Documentar requisitos de negócio

**Responsável:** Product Owner

**Conteúdo:**
```markdown
# Feature: Nome

## User Stories
- US-001: Como... eu quero... para que...
- US-002: ...

## Stack
- Next.js 16
- React 19
- TypeScript 5.9

## Dependências
- API: /api/users (mock)

## RFs (Requisitos Funcionais)
- RF-01: ...

## RNFs (Requisitos Não-Funcionais)
- RNF-01: ...

## Fora do Escopo
- Dropdown
- Busca
```

---

## 2. plan.md

**Propósito:** Identificar artefatos de alto nível (sem detalhamento técnico)

**Responsável:** Dev/Arquiteto

**Conteúdo:**
```markdown
# Plan: Nome

> Gerado a partir de: research.md

## Artefatos de Alto Nível

| Artefato | Tipo | Descrição |
|----------|------|-----------|
| Header | organism | Container fixo com logo + menu |
| NavItem | type | { label, href } |
| MobileOverlay | component | Menu fullscreen mobile |

## Estrutura de Arquivos

```
src/components/
└── header/
    └── header.tsx

src/app/
└── test-header/
    └── page.tsx
```

## Dependências

```
NavItem (type)
    │
    ▼
Header (organism)
    │
    ▼
test-header/page.tsx
```
```

---

## 3. *.feature (Gherkin)

**Propósito:** Cenários executáveis em linguagem de domínio

**Responsável:** BDD Generator (derivado de research.md)

**Estrutura:**
```gherkin
@pending @desktop
Feature: Header de Navegação

  @pending
  Scenario: Header desktop exibe logo e menu
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header é fixed com altura de 80px
    And o logo aparece à esquerda
    And o menu exibe 4 itens

  @pending
  Scenario: Mobile exibe hamburger
    Given que o usuário está em mobile (<768px)
    When a página carrega
    Then o hamburger está visível
```

**Tags de Status:**
- `@pending` - Não iniciado (default)
- `@in-progress` - Em execução
- `@done` - Completo (testes passando)
- `@blocked` - Bloqueado por dependência
- `@bug` - Bug reportado

**Tags de Contexto:**
- `@desktop` - Cenário desktop
- `@mobile` - Cenário mobile
- `@a11y` - Acessibilidade
- `@api` - Integração com API

---

## 4. *.spec.ts (Playwright)

**Propósito:** Testes executáveis derivados dos cenários

**Responsável:** TDD Playwright Agent

**Estrutura:**
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature: Header de Navegação', () => {

  test.describe('Scenario: Header desktop exibe logo e menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
    });

    test('deve estar fixo com altura de 80px', async ({ page }) => {
      const header = page.locator('[data-testid="header"]');
      await expect(header).toBeVisible();
      const box = await header.boundingBox();
      expect(box?.height).toBe(80);
    });
  });

});
```

**Rastreabilidade:**
- Cada `test.describe` = 1 Scenario do *.feature
- Cada `test` = 1 Then clause
- Nome do describe contém tags: `@desktop`, `@mobile`, etc

---

## 5. progress.md

**Propósito:** Rastrear status dos cenários

**Responsável:** Subagent (atualiza durante execução)

**Estrutura:**
```markdown
# Progress: Header

## Feature: Header de Navegação
**Status:** 🔄 Em Progresso

## Cenários

### @desktop
| Scenario | Status | Testes |
|----------|--------|--------|
| Header desktop exibe logo e menu | ✅ Done | 4/4 |
| Itens do menu respondem a hover | 🔄 In Progress | 2/3 |
| Logo redireciona para home | ⏳ Pending | - |

### @mobile
| Scenario | Status | Testes |
|----------|--------|--------|
| Mobile exibe hamburger | ⏳ Pending | - |
| Mobile abre overlay | ⏳ Pending | - |

---

## Histórico

### 2024-01-15
- ✅ Cenário "Header desktop" aprovado
- ⚠️ Hover state corrigido após 1 falha
```

---

## Resumo: Artefatos por Fase

| Fase | Input | Output | Artefato |
|------|-------|--------|----------|
| Research | Requisitos PO | Documento | research.md |
| Plan | research.md | Artefatos | plan.md |
| BDD | plan.md + research.md | Cenários | *.feature |
| TDD | *.feature | Testes | *.spec.ts |
| Implementação | *.spec.ts | Código | *.tsx |
| Rastreamento | Todos | Status | progress.md |
