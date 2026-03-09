# AGENTS.md
# Lido em TODA invocação de skill.
# Valores vêm de PROJECT.config.md — não repita aqui, referencie.
# Limite: [tokens].agents_max

---

## Configuração central

> Todos os valores numéricos, flags e padrões estão em:
> **`.agent/PROJECT.config.md`**
> Leia-o antes de qualquer decisão sobre limites, gates ou convenções.

---

## Stack

> Ver `[stack]` em PROJECT.config.md.

Proibições absolutas (não-negociáveis):
- Pages Router, CSS Modules, styled-components, `any`, Jest, useState para server state

---

## Convenções de nomes

> Ver `[conventions]` em PROJECT.config.md.

---

## Anti-Hallucination Guards

> Ver `[guards]` em PROJECT.config.md.

Regra de ouro: **em caso de dúvida → pergunte ao humano. Nunca invente.**

---

## Token Budget

> Ver `[tokens]` em PROJECT.config.md.

Cada skill lê seu próprio limite antes de gerar o artefato.

---

## Commit

> Ver `[conventions].commit_pattern` em PROJECT.config.md.

```
feat(nome-feature): US-XXX - Título
fix(nome-feature): US-XXX - Descrição
```

---

## Fluxo de camadas

```
SPECIFICATION  → PROJECT.config.md · AGENTS.md · FLUXO-DEV.md · specs/
GENERATION     → research → gherkin → plan → tasks → orchestrator
VALIDATION     → cross-check · quality-gates · gherkin · typecheck · lint · testes · hooks
ARTIFACT       → research.md · *.feature · plan.md · tasks.md · cross-check.md · progress.md
RUNTIME        → src/ (código gerado e commitado)
```
