# Arquitetura do Projeto

## Raiz do Projeto

| Pasta/Arquivo | Descrição |
|--------------|-----------|
| `.husky/` | Git hooks (pre-commit + commit-msg) |
| `.opencode/` | Configuração e agentes do OpenCode |
| `frontend/` | Projeto Next.js principal |
| `marketing/` | Documentos de negócio e planejamento |
| `specs/` | Especificações e documentação do projeto |
| `AGENTS.md` | Configuração do agente principal |
| `agent-learnings.json` | Aprendizados consolidados |
| `opencode.json` | Configuração do OpenCode |
| `portfolio.pen` | Design do projeto (Pencil) |
| `README.md` | Documentação inicial |

---

## .husky/ — Git Hooks

| Arquivo | Descrição |
|---------|-----------|
| `pre-commit` | Executa validações antes do commit (destiller + tests) |
| `commit-msg` | Valida mensagem de commit (Conventional Commits) |

---

## .opencode/ — Configuração OpenCode

| Arquivo/Pasta | Descrição |
|--------------|-----------|
| `agent-session-log.json` | Buffer temporário de incidents da sessão atual |
| `agents/` | Diretório com 13 sub-agents |
| `scripts/agent-learnings-destiller.ts` | Script de destilação de aprendizados |
| `bun.lock` | Lockfile do Bun |
| `node_modules/` | Dependências (ignorado no git) |
| `package.json` | Dependências do OpenCode |
| `tsconfig.json` | Configuração TypeScript |

### .opencode/agents/ — Sub-agents

| Agent | Descrição |
|-------|-----------|
| `agent-learnings-runner/` | Registra incidents durante a sessão |
| `analyse-consistency/` | Analisa consistência entre research/plan/tasks/code |
| `diff-design-vs-code/` | Compara design .pen com código existente |
| `export-code-to-design/` | Exporta código React para arquivo .pen |
| `implement-tasks/` | Executa tasks com TDD + verify-patterns |
| `import-design-to-code/` | Importa design validado do Pencil |
| `plan-to-tasks/` | Converte plano em user stories |
| `research-to-plan/` | Gera plano técnico a partir do research |
| `tasks-parallel-analyzer/` | Analisa tasks para execução paralela |
| `tdd-playwright/` | Executa ciclo TDD com testes Playwright |
| `us-to-research/` | Converte requisitos em research.md |
| `verify-patterns/` | Verifica convenções e guardrails |
| `worktree-runner/` | Cria worktrees Git para features |

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

### frontend/src/app/ — Páginas

| Arquivo/Pasta | Descrição |
|--------------|-----------|
| `layout.tsx` | Layout raiz do Next.js |
| `page.tsx` | Página home |
| `globals.css` | Estilos globais (Tailwind) |
| `test-button/` | Página de teste do componente button |

### frontend/src/components/ — Componentes

| Caminho | Descrição |
|---------|-----------|
| `atoms/button/` | Componente Button (atomic design) |

### frontend/tests/features/ — Testes

| Caminho | Descrição |
|---------|-----------|
| `button/us-001.spec.ts` | Teste E2E do componente Button |

---

## marketing/ — Documentos de Marketing

| Arquivo | Descrição |
|---------|-----------|
| `caso-negocio.md` | Estudo de viabilidade |
| `plano-acao-comparativo.md` | Plano de ação e comparativo |
| `plano-implementacao-custos.md` | Custos de implementação |
| `tecnologias-e-metodologias.md` | Tecnologias e metodologias adotadas |
| `tutorial-agentes.md` | Tutorial de uso dos agentes |
| `visao-automacao.md` | Visão de automação |
| `workflow.md` | Workflow do projeto |

---

## specs/ — Especificações

| Pasta | Descrição |
|-------|-----------|
| `docs/` | Documentação geral do projeto |
| `features/` | Especificações por feature |

### specs/docs/ — Documentação

| Arquivo | Descrição |
|---------|-----------|
| `agent-learnings.md` | Sistema de memória institucional |
| `architecture.md` | Este arquivo - estrutura do projeto |
| `convencoes-codigo.md` | Convenções de código |
| `fluxo-implementacao.md` | Pipeline de implementação |
| `guardrails.md` | Regras obrigatórias |
| `padroes-git.md` | Padrões de commits |
| `pre-commit.md` | Hook de validação |
| `sub-agents.md` | Lista de sub-agents |
| `tecnologias.md` | Versões das tecnologias |

### specs/features/ — Features

| Caminho | Descrição |
|---------|-----------|
| `components/button/` | Feature do componente Button |
| `components/button/plan.md` | Plano técnico |
| `components/button/tasks.md` | User stories |
| `components/button/research.md` | Requisitos |
| `components/button/progress.md` | Andamento |

---

## Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `AGENTS.md` | Configuração do agente principal |
| `agent-learnings.json` | Aprendizados consolidados |
| `opencode.json` | Configuração do OpenCode |
| `portfolio.pen` | Design do projeto (Pencil) |
| `README.md` | Documentação inicial |
| `.gitignore` | Arquivos ignorados pelo Git |
| `.gitattributes` | Atributos Git |

---

## Fluxo de Arquivos por Etapa

| Fase | Arquivo | Localização |
|------|---------|-------------|
| Requirements | `research.md` | `specs/features/[categoria]/[feature]/` |
| Planejamento | `plan.md` | `specs/features/[categoria]/[feature]/` |
| Tasks | `tasks.md` | `specs/features/[categoria]/[feature]/` |
| Implementação | `*.tsx` | `frontend/src/app/` ou `frontend/src/components/` |
| Testes | `*.spec.ts` | `frontend/tests/features/[feature]/` |
| Design | `*.pen` | Raiz do projeto |
