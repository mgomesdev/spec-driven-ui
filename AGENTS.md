# AGENTS.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

## Diretrizes Gerais

**⚠️ PRIORIDADE MÁXIMA — Leia primeiro:**

1. **`agent-learnings.json`**: Padrões consolidados das sessões anteriores — **sempre leia antes de implementar**. Evita erros recorrentes.

2. **`specs/docs/guardrails.md`**: Regras mandatory do projeto — **nunca violar**. Define o que pode e não pode fazer.

## Início de Sessão

1. Leia `agent-learnings.json` para evitar erros recorrentes
2. Inicie o subagente `@agent-learnings-runner` em paralelo para registrar incidents durante a sessão

Leia também:
- `./specs/docs/convencoes-codigo.md`
- `@specs/docs/architecture.md`
- `@specs/docs/padroes-git.md`

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
| agent-learnings-runner | `.opencode/agents/agent-learnings-runner/` | Registra incidents durante a sessão para destilação futura |
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

### Descrição do Fluxo

| Etapa | Artefato | Descrição |
|-------|----------|-----------|
| 1 | `research.md` | Requisitos e análise de mercado |
| 2 | `plan.md` | Plano técnico com interfaces e estrutura |
| 3 | `tasks.md` | User stories atômicas |
| 4 | `implement-tasks` | Implementação com TDD + verify-patterns |

### Boas Práticas

- **Sempre siga o fluxo** — não pule etapas
- **Leia os artefatos antes de implementar** — entenda o contexto
- **Commite frequentemente** — cada história = 1 commit
- **Respeite os guardrails** — nunca viole as regras do projeto
