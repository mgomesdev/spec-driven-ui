# Fluxo de Implementação

## Pipeline Completo

```
research.md → plan.md → tasks.md → implement-tasks
                              ↘ (TDD) → tdd-playwright
                              ↘ (Verify) → verify-patterns
                              ↘ (Pre-commit) → validate + tests
```

## Etapas

| Etapa | Artefato | Descrição |
|-------|----------|-----------|
| 1 | `research.md` | Requisitos e análise de mercado |
| 2 | `plan.md` | Plano técnico com interfaces e estrutura |
| 3 | `tasks.md` | User stories atômicas |
| 4 | `implement-tasks` | Implementação com TDD + verify-patterns |
| 5 | **Pre-commit** | Validação automática antes do commit |

## Boas Práticas

- **Sempre siga o fluxo** — não pule etapas
- **Leia os artefatos antes de implementar** — entenda o contexto
- **Commite frequentemente** — cada história = 1 commit
- **Use TDD** — teste falha → código passa → verifica → commit
- **Não commite com erros** — pre-commit hook bloqueia

---

Para detalhes do pre-commit hook, veja `@specs/docs/pre-commit.md`
