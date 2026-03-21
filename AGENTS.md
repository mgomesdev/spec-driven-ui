# AGENTS.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

---

## ⚠️ PRIORIDADE MÁXIMA — Leia primeiro

1. **`agent-learnings.json`**: Padrões consolidados das sessões anteriores — **sempre leia antes de implementar**. Evita erros recorrentes.
2. **`specs/docs/guardrails.md`**: Regras mandatory do projeto — **nunca violar**. Define o que pode e não pode fazer.

---

## 🚀 Início de Sessão

```
1. Leia agent-learnings.json
2. Leia specs/docs/guardrails.md
3. Inicie o subagente @agent-learnings-runner em paralelo
4. Leia specs/docs/design.md
5. Leia specs/docs/convencoes-codigo.md
6. Leia specs/docs/padroes-git.md
```

---

## 📚 Referências

| Tópico | Arquivo |
|--------|---------|
| Design System | `@specs/docs/design.md` |
| Tecnologias e fontes | `@specs/docs/tecnologias.md` |
| Convenções de código | `@specs/docs/convencoes-codigo.md` |
| Guardrails | `@specs/docs/guardrails.md` |
| Arquitetura | `@specs/docs/architecture.md` |
| Padrões git | `@specs/docs/padroes-git.md` |

---

## ⚓ Pre-commit

Antes de commitar, o hook `.husky/pre-commit` executa:
1. Agent Learnings Destiller
2. Code Pattern Validation
3. Playwright Tests

Detalhes em `@specs/docs/pre-commit.md`

---

## 🧠 Subagentes Disponíveis

Use `@nome-do-subagente` para invocar:

### Fluxo Spec-Driven

| Subagente | Descrição | Arquivo |
|-----------|-----------|---------|
| `us-to-research` | Converte requisitos de PO em research.md estruturado | `.opencode/agents/us-to-research.md` |
| `research-to-plan` | Gera plan.md técnico a partir do research.md | `.opencode/agents/research-to-plan.md` |
| `bdd-generator` | Gera arquivos *.feature (Gherkin) a partir de research.md e plan.md | `.opencode/agents/bdd-generator.md` |
| `analyze-consistency` | Análise não destrutiva de consistência entre research.md, plan.md e *.feature | `.opencode/agents/analyze-consistency.md` |
| `tdd-generator` | Gera testes Playwright (*.spec.ts) e documentação (*.spec.docs.md) a partir de *.feature | `.opencode/agents/tdd-generator.md` |
| `tdd-playwright` | Executa ciclo TDD: cria teste que falha → implementa código → teste passa | `.opencode/agents/tdd-playwright.md` |
| `verify-patterns` | Verifica se código segue convenções e contrato do plan.md | `.opencode/agents/verify-patterns.md` |
| `implement-tasks` | Executa subtask de US com GATE: TDD + Verify + Typecheck + Lint | `.opencode/agents/implement-tasks.md` |

### Utilitários

| Subagente | Descrição | Arquivo |
|-----------|-----------|---------|
| `agent-learnings-runner` | Registra incidents e aprendizados durante a sessão | `.opencode/agents/agent-learnings-runner.md` |

### Fluxo Worktree

| Subagente | Descrição | Arquivo |
|-----------|-----------|---------|
| `worktree-mapper` | Mapeia dependências de componentes e gera distribuição otimizada para worktrees Git | `.opencode/agents/worktree-mapper.md` |
| `worktree-runner` | Cria worktrees Git em paralelo para múltiplas features | `.opencode/agents/worktree-runner.md` |

### Design System (Pencil ↔ Código)

| Subagente | Descrição | Arquivo |
|-----------|-----------|---------|
| `design-system-builder` | Implementa estrutura completa do design-system: atualiza agentes, cria arquivos | `.opencode/agents/design-system-builder.md` |
| `export-code-to-design` | Cria NOVA proposta no Pencil (não altera original) | `.opencode/agents/export-code-to-design.md` |
| `import-design-to-code` | Importa design APÓS aprovação do designer | `.opencode/agents/import-design-to-code.md` |
| `diff-design-vs-code` | Compara BDD spec ↔ Pencil (--component ou --all) | `.opencode/agents/diff-design-vs-code.md` |

### Como usar

```
# Spec-Driven (fluxo completo)
@us-to-research [requisito do PO]
@research-to-plan [nome-da-feature]
@bdd-generator feature=[nome]
@analyze-consistency analise: [feature]
@tdd-generator feature=[nome]
@tdd-playwright execute tdd da [us-id] subtask [subtask-id] para [feature]
@verify-patterns execute verificação para [feature] [us-id] subtask [subtask-id]
@implement-tasks implemente a subtask [n] da US-[id] para [feature]

# Worktrees
@worktree-mapper analise a feature: dashboard-analytics
@worktree-runner [feature1] [feature2]

# Design System
@design-system-builder execute implementação
@export-code-to-design --component=button
@import-design-to-code --component=button
@diff-design-vs-code --component=button
@diff-design-vs-code --all
```
