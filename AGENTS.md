# AGENTS.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

---

## ⚠️ PRIORIDADE MÁXIMA — Leia primeiro

1. **`specs/docs/guardrails.md`**: Regras mandatory do projeto — **nunca violar**. Define o que pode e não pode fazer.

---

## 🚀 Início de Sessão

```
1. Leia specs/docs/guardrails.md
2. Leia .opencode/agent-session-log.json (evitar erros recorrentes)
3. Leia specs/docs/design.md
4. Leia specs/docs/convencoes-codigo.md
5. Leia specs/docs/padroes-git.md
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

Antes de commitar, os hooks `.husky/` executam:
1. **commit-msg**: Validação de Conventional Commits
2. **pre-commit**: Playwright Tests