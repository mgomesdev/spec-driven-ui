# AGENTS.md

> Lido em TODA invocação de skill. Mantenha este arquivo conciso — cada linha consome tokens.
> Gemini Flash: priorize brevidade. Máx 400 tokens neste arquivo.

---

## Stack (obrigatório)

| Tecnologia | Regra |
|-----------|-------|
| Next.js 15 | App Router APENAS. Nunca Pages Router |
| TypeScript | strict mode. Zero `any` |
| Tailwind CSS | Único método de estilo. Nunca CSS Modules, styled-components |
| Zod | Validação de formulários e schemas de API |
| React Query | Server state. Nunca useState para dados remotos |
| Vitest + Testing Library | Testes. Nunca Jest |

## Convenções de nomes

- Componentes: `PascalCase` → `src/app/components/`
- Hooks: `useXxx` → `src/app/hooks/`
- Services: `camelCase` → `src/app/services/`
- Types: `XxxType` ou `XxxProps` → `src/app/types/`

## Anti-Hallucination Guards

**NUNCA:**
- Invente componentes não listados no `plan.md`
- Assuma biblioteca instalada sem checar `package.json`
- Crie arquivos fora dos paths do `plan.md`
- Implemente lógica além do escopo da task atual
- Marque `Passes: true` sem typecheck passando

**SEMPRE:**
- Se tipo necessário não existe no `plan.md` → PARE e reporte
- Se endpoint não está no `plan.md` → PARE e reporte
- Em caso de dúvida → pergunte ao humano, não invente

## Token Budget por camada

| Artefato | Limite |
|----------|--------|
| `research.md` | ≤ 600 tokens |
| `plan.md` | ≤ 3.000 tokens |
| `tasks.md` | ≤ 1.500 tokens |
| `progress.md` (ativo) | ≤ 100 linhas |
| Contexto por task | ≤ 2.000 tokens |

## Commit Convention

```
feat(nome-feature): US-XXX - Título da história
fix(nome-feature): US-XXX - O que foi corrigido
```

## Fluxo de camadas

```
GENERATION:   research → gherkin → plan → tasks → cross-check → orchestrator
VALIDATION:   cross-check + quality-gates (typecheck, lint, testes, gherkin)
ARTIFACT:     research.md, *.feature, plan.md, tasks.md, cross-check.md, progress.md
RUNTIME:      src/ (componentes, hooks, services gerados)
SPECIFICATION: AGENTS.md, FLUXO-DEV.md, specs/features/
```
