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

```
specs/features/
├── [nome-da-feature]/           # Feature normal
│   ├── research.md
│   ├── plan.md
│   └── features/
│       └── [nome].feature
│
└── design-system/              # Design System (special)
    ├── research.md
    ├── plan.md
    └── features/
        ├── design-tokens.feature  # Tokens GLOBAIS
        ├── atoms/
        │   └── *.feature
        ├── molecules/
        │   └── *.feature
        └── organisms/
            └── *.feature
```

### Fluxo: Design System vs Features Normais

| Aspecto | Features Normais | Design System |
|---------|------------------|---------------|
| **Source of Truth** | `*.feature` | `*.feature` (BDD) |
| **Testes** | Gera `*.spec.ts` via @tdd-generator | Não gera testes |
| **Output CSS** | N/A | `globals.css` via @design-tokens-generator |
| **Arquivos** | Um `*.feature` por feature | Múltiplos `*.feature` (tokens + componentes) |

### Modelo Híbrido de Tokens

| Tipo | Fonte | Destino |
|------|-------|---------|
| **Globais** | `design-tokens.feature` | `:root` do `globals.css` |
| **Componente** | `atoms/*.feature`, etc | CSS inline do componente |

**Fluxo de Extração:**
```
*.feature (BDD)
    ↓
@design-tokens-generator
    ↓
globals.css (Tailwind CSS vars)
```

