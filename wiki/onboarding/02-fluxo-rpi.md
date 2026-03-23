# Fluxo RPI: Research → Plan → Implement

## Visão Geral

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         FLUXO RPI (SPEC-DRIVEN)                        │
└─────────────────────────────────────────────────────────────────────────┘

    REQUISITO
       │
       ▼
┌──────────────┐
│   RESEARCH   │ ← "O que o usuário precisa?" (research.md)
└──────┬───────┘
       │ ✅ Aprovado pelo PO
       ▼
┌──────────────┐
│     PLAN     │ ← "Como vamos fazer?" (plan.md)
└──────┬───────┘
       │ ✅ Aprovado pelo Tech Lead
       ▼
┌──────────────┐
│  *.feature   │ ← "O que testar?" (cenários BDD)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    TDD       │ ← RED: teste falha → GREEN: código passa
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    CÓDIGO    │ ← Implementação mínima
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     GATE     │ ← TDD → Verify → Typecheck → Lint
└──────┬───────┘
       │
       ▼
       PR 🎉
```

---

## 1. Research (Pesquisa)

**Responsável:** PO / Analista
**Documento:** `specs/features/[nome]/research.md`

```
O que acontece:
├── Requisito do cliente
├── Contexto de uso
├── Wireframes ou mockups
├── Dependências identificadas
└── User Stories com critérios de aceite
```

### Exemplo de research.md

```markdown
# Research: Sidebar Component

## Contexto
Sidebar de navegação para dashboard administrativo.

## User Stories
- US-001: Sidebar exibe logo no topo
- US-002: Sidebar exibe menu de navegação

## Dependências
- Design System (tokens)
- Icon component (atoms)
```

---

## 2. Plan (Planejamento)

**Responsável:** Tech Lead + Dev
**Documento:** `specs/features/[nome]/plan.md`

```
O que acontece:
├── Interfaces TypeScript definidas
├── Contratos de API documentados
├── Estrutura de componentes (Atomic Design)
├── Diagrama de dependências
└── Folder structure do frontend
```

### Exemplo de plan.md

```markdown
# Plan: Sidebar Component

## Interfaces
interface SidebarProps {
  className?: string;
}

## Estrutura
frontend/src/components/sidebar/
├── sidebar.tsx
└── index.ts

## Dependências
- design-system (tokens)
- icon (atom)
- nav-list (molecule)
```

---

## 3. *.feature (Cenários BDD)

**Responsável:** PO + Dev juntos
**Documento:** `specs/features/[nome]/features/*.feature`

```gherkin
Feature: Sidebar Navigation

  @desktop @pending
  Scenario: Logo click redirects to home
    Given I am on any page
    When I click the sidebar logo
    Then I should be on the home page
```

### Tags

| Tag | Significado |
|-----|-------------|
| `@desktop` | Teste em 1280px+ |
| `@mobile` | Teste em 375px |
| `@pending` | Não implementado (sua tarefa!) |
| `@done` | Implementado e testado |

---

## 4. TDD (Test-Driven Development)

**Responsável:** Dev
**Ferramenta:** Playwright

```
Ciclo:
┌─────────┐  RED     ┌─────────┐ GREEN   ┌─────────┐
│  TESTE  │ ───────→│ CÓDIGO  │ ───────→│  REFAC  │
│ FAILING │          │ MINIMO  │          │  (opt)  │
└─────────┘          └─────────┘          └─────────┘
```

---

## 5. Código (Implementação)

**Responsável:** Dev
**Onde:** `frontend/src/components/`

```
Ordem (Atomic Design):
1. Design System (tokens) ← SEMPRE primeiro!
2. Atoms (icon, button)
3. Molecules (nav-list)
4. Organisms (sidebar)
```

---

## 6. Gate (Validação)

**Responsável:** Hooks automáticos (`.husky/`)

```
Gate executa automaticamente:
┌─────────────────────────────────────┐
│  1. TDD (Playwright)  → Testes OK  │
│  2. Verify Patterns    → Padrões   │
│  3. Typecheck (tsc)    → Tipos OK   │
│  4. Lint (ESLint)      → Estilo OK │
└─────────────────────────────────────┘
```

---

## Onde Você Entra

```
    RESEARCH ──→ PLAN ──→ *.feature
                            (você recebe isso)
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   VOCÊ COMEÇA   │
                         │    AQUI!        │
                         └────────┬────────┘
                                  │
                     ┌────────────┼────────────┐
                     │            │            │
                     ▼            ▼            ▼
                 ┌───────┐   ┌─────────┐   ┌───────┐
                 │ TDD   │   │ CÓDIGO  │   │ GATE  │
                 │ RED   │──→│ MINIMO  │──→│ AUTO  │
                 └───────┘   └─────────┘   └───────┘
```

**Você é responsável por:**
1. Ler e entender o `*.feature`
2. Implementar seguindo TDD (RED → GREEN)
3. Garantir que o Gate passe
4. Criar o Pull Request

---

## Próximo Passo

Conheça a estrutura do projeto → `03-estrutura-projeto.md`
