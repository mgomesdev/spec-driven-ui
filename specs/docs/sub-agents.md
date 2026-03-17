# Sub-agents Disponíveis

## Como Usar

Use `@menção` para invocar sub-agents durante a sessão.

---

## Agent Learnings

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| agent-learnings-runner | `.opencode/agents/agent-learnings-runner/` | Registra incidents durante a sessão |

### agent-learnings-runner

```
@agent-learnings-runner registre: "[descrição]" categoria: "[categoria]"
```

**Categorias:** `comando_errado`, `mal_entendido`, `correcao_humana`, `acerto_evitou_problema`

---

## Fluxo de Desenvolvimento

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| us-to-research | `.opencode/agents/us-to-research/` | Converte requisitos em research.md |
| research-to-plan | `.opencode/agents/research-to-plan/` | Gera plano técnico |
| plan-to-tasks | `.opencode/agents/plan-to-tasks/` | Converte plano em tasks |
| implement-tasks | `.opencode/agents/implement-tasks/` | Executa tasks (TDD + verify) |

### Comandos

```bash
# Converter requisitos em research
@us-to-research [requisitos]

# Gerar plano técnico
@research-to-plan [nome-da-feature]

# Converter plano em tasks
@plan-to-tasks [nome-da-feature]

# Executar tasks
@implement-tasks execute as tasks da feature [nome]
```

---

## TDD e Verificação

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| tdd-playwright | `.opencode/agents/tdd-playwright/` | Executa TDD |
| verify-patterns | `.opencode/agents/verify-patterns/` | Verifica padrões e convenções |

### Comandos

```bash
# Executar TDD
@tdd-playwright execute tdd da US-[ID] para [feature]

# Verificar padrões
@verify-patterns execute verificação para [feature] US-[ID]
```

---

## Worktree e Paralelismo

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| worktree-runner | `.opencode/agents/worktree-runner/` | Cria worktrees para features |
| tasks-parallel-analyzer | `.opencode/agents/tasks-parallel-analyzer/` | Analisa paralelismo |
| analyse-consistency | `.opencode/agents/analyse-consistency/` | Analisa consistência |

---

## Design

| Sub-agent | Arquivo | Descrição |
|-----------|---------|-----------|
| export-code-to-design | `.opencode/agents/export-code-to-design/` | Exporta código para .pen |
| import-design-to-code | `.opencode/agents/import-design-to-code/` | Importa design para código |
| diff-design-vs-code | `.opencode/agents/diff-design-vs-code/` | Compara design com código |

---

## Atalhos Rápidos

| Ação | Comando |
|------|--------|
| Registrar aprendizado | `@agent-learnings-runner registre: "..." categoria: "..."` |
| Executar TDD | `@tdd-playwright execute tdd da US-001 para minha-feature` |
| Verificar padrões | `@verify-patterns execute verificação para minha-feature US-001` |
| Executar tasks | `@implement-tasks execute as tasks da feature minha-feature` |
