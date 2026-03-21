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

| Subagente | Descrição | Arquivo |
|-----------|-----------|---------|
| `analyze-consistency` | Análise não destrutiva de consistência entre research.md, plan.md e *.feature | `.opencode/agents/analyze-consistency.md` |
| `tdd-generator` | Gera testes Playwright (*.spec.ts) e documentação (*.spec.docs.md) a partir de *.feature | `.opencode/agents/tdd-generator.md` |
| `tdd-playwright` | Executa ciclo TDD: cria teste que falha → implementa código → teste passa | `.opencode/agents/tdd-playwright.md` |
| `worktree-mapper` | Mapeia dependências de componentes e gera distribuição otimizada para worktrees Git | `.opencode/agents/worktree-mapper.md` |

### Como usar

```
@worktree-mapper analise a feature: dashboard-analytics
@analyze-consistency analise: dashboard-analytics
@tdd-generator gere testes para: sidebar.feature
```
