# FLUXO-DEV.md — v2

> Fonte de verdade para o agente. Para documentação humana, veja README.md.
> Otimizado para Gemini Flash: contexto mínimo por invocação.

---

## Arquitetura em camadas

```
┌─────────────────────────────────────────────────────────────────┐
│  SPECIFICATION LAYER                                            │
│  AGENTS.md · FLUXO-DEV.md · specs/features/ · templates/       │
│  → Define o "o quê" e as regras invariantes do projeto          │
├─────────────────────────────────────────────────────────────────┤
│  GENERATION LAYER                                               │
│  Skills: research → gherkin → plan → tasks → orchestrator       │
│  → Human-in-the-loop. Humano aprova antes de cada avanço        │
├─────────────────────────────────────────────────────────────────┤
│  VALIDATION LAYER                                               │
│  cross-check · gherkin/BDD · typecheck · lint · testes · hooks  │
│  → Garante consistência entre artefatos e qualidade do código   │
├─────────────────────────────────────────────────────────────────┤
│  ARTIFACT LAYER                                                 │
│  research.md · *.feature · plan.md · tasks.md ·                 │
│  cross-check.md · progress.md                                   │
│  → Artefatos gerados, versionados e revisados por humanos       │
├─────────────────────────────────────────────────────────────────┤
│  RUNTIME LAYER                                                  │
│  src/ (componentes, hooks, services, types gerados)             │
│  → Código que vai para produção                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Fluxo completo

```
[AGENTS.md]  ← contexto base injetado em TODA skill

[US do PO]
     │
     ▼
[research]  →  research.md        →  👤 aprovação
     │         (≤600 tokens)
     ▼
[gherkin]   →  [nome].feature     →  👤 aprovação
     │         (ACs como cenários BDD)
     ▼
[plan]      →  plan.md            →  👤 aprovação
     │         (≤3k tokens, com âncoras)
     ▼
[tasks]     →  tasks.md           →  👤 aprovação
     │         (≤1.5k tokens, ctx_estimate por task)
     ▼
[cross-check] →  cross-check.md  →  👤 aprovação (BLOQUEANTE se issues)
     │         (cobertura AC, tipos, contratos)
     ▼
[orchestrator] — LOOP:
  1. ctx_estimate da task ≤ tokens disponíveis?
  2. progress.md > 100 linhas → destilar
  3. Carregar APENAS seção plan_ref + #section-types
  4. Aplicar Anti-Hallucination Guards
  5. Implementar
  6. Quality gates: typecheck → lint → testes → gherkin:@US-XXX → browser
  7. Commit: feat(nome): US-XXX - Título
  8. Passes: true | Passes: partial (falhou)
FIM LOOP → destilar progress.md → atualizar INDEX.md → 👤 PR
```

---

## Skills disponíveis

| Skill | Camada | Input | Output | Humano aprova? |
|-------|--------|-------|--------|----------------|
| `research` | Generation | US/briefing | `research.md` | ✅ Sim |
| `gherkin` | Validation | `research.md` | `[nome].feature` | ✅ Sim |
| `plan` | Generation | `research.md` + `.feature` | `plan.md` | ✅ Sim |
| `tasks` | Generation | `research.md` + `plan.md` | `tasks.md` | ✅ Sim |
| `cross-check` | Validation | todos acima | `cross-check.md` | ✅ Sim (bloqueante) |
| `orchestrator` | Generation | `tasks.md` + `plan.md` | código + commits | 🔁 por iteração |

---

## Como acionar cada skill

```
"gere o research para [feature]"
"gere os cenários gherkin para [feature]"
"gere o plan para [feature]"
"gere as tasks para [feature]"
"execute o cross-check da [feature]"
"execute as tasks da [feature]"
"crie uma nova feature: [nome]"   ← roda scripts/new-feature.sh
```

---

## Regras de token budget

| Artefato | Limite | Motivo |
|----------|--------|--------|
| `AGENTS.md` | ≤ 400 tokens | sempre no contexto |
| `research.md` | ≤ 600 tokens | lido por plan e tasks |
| `plan.md` | ≤ 3.000 tokens | lido por seção (cirúrgico) |
| `tasks.md` | ≤ 1.500 tokens | lido por completo pelo orchestrator |
| `progress.md` | ≤ 100 linhas | lido a cada iteração |
| contexto por task | ≤ 2.000 tokens | uma janela segura para Gemini Flash |
