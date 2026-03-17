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
4. Leia specs/docs/convencoes-codigo.md
5. Leia specs/docs/padroes-git.md
```

---

## 📚 Referências

| Tópico | Arquivo |
|--------|---------|
| Tecnologias e fontes | `@specs/docs/tecnologias.md` |
| Fluxo de implementação | `@specs/docs/fluxo-implementacao.md` |
| Pre-commit hook | `@specs/docs/pre-commit.md` |
| Sub-agents | `@specs/docs/sub-agents.md` |
| Convenções de código | `@specs/docs/convencoes-codigo.md` |
| Guardrails | `@specs/docs/guardrails.md` |
| Arquitetura | `@specs/docs/architecture.md` |
| Padrões git | `@specs/docs/padroes-git.md` |
| Agent learnings | `@specs/docs/agent-learnings.md` |

---

## ⚓ Pre-commit

Antes de commitar, o hook `.husky/pre-commit` executa:
1. Agent Learnings Destiller
2. Code Pattern Validation
3. Playwright Tests

Detalhes em `@specs/docs/pre-commit.md`
