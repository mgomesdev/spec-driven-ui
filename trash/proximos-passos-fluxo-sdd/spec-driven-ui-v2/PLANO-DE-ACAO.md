# PLANO DE AÇÃO — spec-driven-ui v2

---

## Objetivo

Centralizar toda configuração em `PROJECT.config.md` (singleton).
Filhos leem e referenciam. Nunca duplicam valores.

---

## Fase 1 — Criar o singleton (começar aqui)

> Sem isso, nada mais faz sentido.

| # | Ação | Arquivo |
|---|------|---------|
| 1.1 | Criar | `.agent/PROJECT.config.md` |
| 1.2 | Atualizar | `.agent/AGENTS.md` — remover valores hardcoded, apontar para config |
| 1.3 | Atualizar | `FLUXO-DEV.md` — substituir valores por referências `[secao].chave` |
| 1.4 | Deletar | `.agent/quality-gates.json` — consolidado em `[features].gate_*` |

---

## Fase 2 — Atualizar skills existentes

> Cada skill passa a ler do config em vez de ter valores próprios.

| # | Ação | Arquivo | Referências do config |
|---|------|---------|----------------------|
| 2.1 | Atualizar | `.agent/skills/research/SKILL.md` | `[research].clarify_*` · `[tokens].research_max` |
| 2.2 | Atualizar | `.agent/skills/plan/SKILL.md` | `[tokens].plan_max` · `[tokens].task_ctx_max` |
| 2.3 | Atualizar | `.agent/skills/tasks/SKILL.md` | `[tokens].tasks_max` · `[tokens].task_ctx_max` |
| 2.4 | Atualizar | `.agent/skills/orchestrator/SKILL.md` | `[orchestrator]` · `[guards]` · `[features].gate_*` · `[progress]` · `[tokens]` |

---

## Fase 3 — Criar novas skills (Validation Layer)

| # | Ação | Arquivo | Referências do config |
|---|------|---------|----------------------|
| 3.1 | Criar | `.agent/skills/gherkin/SKILL.md` | `[gherkin].*` · `[features].skill_gherkin` |
| 3.2 | Criar | `.agent/skills/cross-check/SKILL.md` | `[cross_check].check_*` · `[features].skill_cross_check` |

---

## Fase 4 — Templates

| # | Ação | Arquivo |
|---|------|---------|
| 4.1 | Criar | `.agent/templates/research.template.md` |
| 4.2 | Criar | `.agent/templates/plan.template.md` |
| 4.3 | Criar | `.agent/templates/tasks.template.md` |

---

## Fase 5 — Tooling (Validation Layer)

> Habilitar progressivamente via `[features]` no config.

| # | Ação | Arquivo | Flag no config |
|---|------|---------|----------------|
| 5.1 | Criar | `.husky/pre-commit` | `hook_pre_commit` |
| 5.2 | Criar | `.husky/commit-msg` | `hook_commit_msg` |
| 5.3 | Criar | `vitest.config.ts` | `use_vitest` |
| 5.4 | Criar | `.commitlintrc.json` | `use_commitlint` |
| 5.5 | Atualizar | `package.json` — scripts de validação | — |
| 5.6 | Atualizar | `eslint.config.mjs` — regras adicionais | `gate_lint` |
| 5.7 | Criar | `.prettierrc` | `use_prettier` |

---

## Fase 6 — Infraestrutura de features

| # | Ação | Arquivo |
|---|------|---------|
| 6.1 | Criar | `scripts/new-feature.sh` |
| 6.2 | Criar | `specs/INDEX.md` |
| 6.3 | Criar | `VALIDATION-LAYER.md` |

---

## Ordem recomendada

```
Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 6 → Fase 5
  ↑
  Singleton primeiro. Tudo depende dele.
```

---

## Verificação final

Após implementar, verifique:

- [ ] Nenhum arquivo fora do config contém valores de token hardcoded
- [ ] Nenhuma skill tem flags booleanas próprias — todas leem `[features].*`
- [ ] Nenhuma convenção de nome duplicada fora do config
- [ ] `new-feature.sh` gera estrutura completa sem erros
- [ ] `pnpm validate` (typecheck + lint + test) passa
