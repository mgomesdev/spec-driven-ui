# AGENTS.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

## Diretrizes Gerais

Leia o seguinte arquivo imediatamente pois é relevante para todos os workflows: `./specs/docs/guardrails.md`

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js    | 16.1.6 |
| React      | 19.2   |
| TypeScript | 5.9    |
| Tailwind   | v4.2   |

## Diretrizes de Desenvolvimento

- **Convenções de código:** `specs/docs/convencoes-codigo.md` (Nomenclatura de arquivos e componentes, Padrões de tipagem TypeScript, Estrutura de componentes React)
- **Arquitetura geral do projeto:** `@specs/docs/architecture.md`
- **Padrões git:** `@specs/docs/padroes-git.md`

## Fontes Confiáveis

### Documentação Oficial

- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Blogs e Artigos

- [Atomic Design](https://atomicdesign.bradfrost.com/)

## Sub-Agents Disponíveis

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| us-to-research | `.opencode/agents/us-to-research/` | Converte requisitos abstratos em research.md estruturado |
| research-to-plan | `.opencode/agents/research-to-plan/` | Gera plano técnico a partir do research.md |
| plan-to-tasks | `.opencode/agents/plan-to-tasks/` | Converte plano em tarefas/atoms (user stories) |
| implement-tasks | `.opencode/agents/implement-tasks/` | Executa as tarefas do tasks.md uma por vez (TDD + verify-patterns) |
| tdd-playwright | `.opencode/agents/tdd-playwright/` | Executa TDD: cria teste → implementa código → testa passam |
| verify-patterns | `.opencode/agents/verify-patterns/` | Verifica convenções, guardrails, arquitetura e contrato plan.md |
| worktree-runner | `.opencode/agents/worktree-runner/` | Cria worktrees Git параллельно para múltiplas features |
| export-code-to-design | `.opencode/agents/export-code-to-design/` | Envia código React para arquivo .pen do Pencil |
| import-design-to-code | `.opencode/agents/import-design-to-code/` | Importa design validado do Pencil para código |
| diff-design-vs-code | `.opencode/agents/diff-design-vs-code/` | Compara design .pen com código existente |
| tasks-parallel-analyzer | `.opencode/agents/tasks-parallel-analyzer/` | Analisa tasks para identificar execução em paralelo |
| analyse-consistency | `.opencode/agents/analyse-consistency/` | Analisa consistência entre research/plan/tasks/code |

## Fluxo de Trabalho

```
research.md → plan.md → tasks.md → implement-tasks
                              ↘ (TDD) → tdd-playwright
                              ↘ (Verify) → verify-patterns
```