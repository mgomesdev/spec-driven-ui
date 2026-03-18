# Arquitetura do Projeto

## Raiz do Projeto

| Pasta/Arquivo | Descrição |
|--------------|-----------|
| `.husky/` | Git hooks (pre-commit + commit-msg) |
| `.opencode/` | Configuração e agentes do OpenCode |
| `frontend/` | Projeto Next.js principal |
| `specs/` | Especificações e documentação do projeto |
| `AGENTS.md` | Configuração do agente principal |
| `agent-learnings.json` | Aprendizados consolidados |
| `opencode.json` | Configuração do OpenCode |

---

## frontend/ — Projeto Next.js

| Arquivo/Pasta | Descrição |
|--------------|-----------|
| `src/app/` | Next.js App Router (páginas) |
| `src/components/` | Componentes React |
| `tests/features/` | Testes E2E Playwright por feature |
| `scripts/pre-commit-validate.js` | Script de validação de código |
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

### specs/docs/ — Documentação

| Arquivo | Descrição |
|---------|-----------|
| `architecture.md` | Este arquivo - estrutura do projeto |
| `convencoes-codigo.md` | Convenções de código |
| `guardrails.md` | Regras obrigatórias |
| `padroes-git.md` | Padrões de commits |
| `tecnologias.md` | Versões das tecnologias |

