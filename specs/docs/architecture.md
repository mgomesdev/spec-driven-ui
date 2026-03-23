# Arquitetura do Projeto

## Raiz do Projeto

| Pasta/Arquivo | Descrição |
|--------------|-----------|
| `.husky/` | Git hooks (pre-commit + commit-msg) |
| `.opencode/` | Configuração e agentes do OpenCode |
| `frontend/` | Projeto Next.js principal |
| `specs/` | Especificações e documentação do projeto |
| `AGENTS.md` | Configuração do agente principal |
| `opencode.json` | Configuração do OpenCode |
| `.opencode/agent-session-log.json` | Aprendizados da sessão (versionado) |

---

## frontend/ — Projeto Next.js

| Arquivo/Pasta | Descrição |
|--------------|-----------|
| `src/app/` | Next.js App Router (páginas) |
| `src/components/` | Componentes React |
| `tests/features/` | Testes E2E Playwright por feature |
| `playwright.config.ts` | Configuração do Playwright |
| `next.config.ts` | Configuração do Next.js |
| `eslint.config.mjs` | Configuração do ESLint |
| `postcss.config.mjs` | Configuração do PostCSS |
| `tsconfig.json` | Configuração TypeScript |

## specs/ — Especificações

| Pasta | Descrição |
|-------|-----------|
| `docs/` | Documentação geral do projeto |
| `features/` | Especificações por feature |

### specs/features/ — Estrutura de Features

Cada feature/componente tem **pasta própria** com fluxo RPI completo:

```
specs/features/
├── design-system/              # Design System (tokens globais)
│   ├── research.md
│   ├── plan.md
│   └── features/
│       └── design-tokens.feature  # Tokens GLOBAIS
│
├── [nome-do-componente]/      # Cada componente = 1 pasta
│   ├── research.md
│   ├── plan.md
│   └── features/
│       └── [nome].feature
│
├── [nome-da-feature]/          # Features normais
│   ├── research.md
│   ├── plan.md
│   └── features/
│       └── [nome].feature
```

> **Importante**: Cada componente possui pasta própria com research, plan e *.feature. Arquivos de componentes **NUNCA** ficam em subpastas de outra feature (ex: não usar `design-system/features/atoms/`).

### Ordem de Implementação (Atomic Design)

Implementar sempre **bottom-up** seguindo a dependência de componentes:

```
1. Design System (tokens globais)
   ↓
2. Atoms (base: icon, button, avatar, logo, etc)
   ↓
3. Molecules (compostas de atoms: nav-list, card, etc)
   ↓
4. Organisms (compostos de molecules: sidebar, header, etc)
```

### frontend/src/components/ — Estrutura de Componentes

Componentes em **pasta plana** (sem separação por tipo):

```
frontend/src/components/
├── icon/
│   └── Icon.tsx
├── button/
│   └── Button.tsx
├── nav-item/
│   └── NavItem.tsx
├── avatar/
│   └── Avatar.tsx
├── logo/
│   └── Logo.tsx
├── nav-list/
│   └── NavList.tsx
├── sidebar/
│   └── Sidebar.tsx
```

### Fluxo: Design System vs Features vs Componentes

| Aspecto | Design System | Componentes (RPI) | Features Normais |
|---------|---------------|------------------|------------------|
| **Source of Truth** | `design-tokens.feature` | `*.feature` por componente | `*.feature` |
| **Testes** | Não gera | Gera via @tdd-generator | Gera via @tdd-generator |
| **Output CSS** | `globals.css` via @design-tokens-generator | Componente.tsx | N/A |
| **Propósito** | Tokens globais | UI components | Funcionalidades |

