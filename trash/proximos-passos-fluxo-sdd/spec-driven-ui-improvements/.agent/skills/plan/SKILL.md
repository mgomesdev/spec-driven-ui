# Skill: plan

> Camada: GENERATION LAYER
> Input: `research.md` + `[nome].feature` aprovados
> Output: `specs/features/[nome]/plan.md`
> Token budget output: ≤ 3.000 tokens total

---

## Quando usar

- "gere o plan para [feature]"

---

## Regras de geração

### Âncoras obrigatórias

Cada seção deve ter um comentário de âncora:

```markdown
<!-- #section-types ctx: ~800t -->
## Tipos & Interfaces
...

<!-- #section-componentes ctx: ~600t -->
## Componentes
...
```

O orchestrator usa `plan_ref: "#section-componentes"` para carregar APENAS essa seção.
**Sem âncoras = o orchestrator carrega o arquivo inteiro = desperdício de tokens.**

### ctx_total no topo

```markdown
<!-- ctx_total: ~2.400t -->
# Plan: [nome-da-feature]
```

### Seção de Mocks (quando necessário)

Se qualquer endpoint no `research.md` está marcado como "a confirmar":

```typescript
// Gere factories tipadas usando os tipos definidos no plan
export const mockItem = (overrides?: Partial<ItemType>): ItemType => ({
  id: 'mock-id',
  name: 'Mock Item',
  ...overrides
})
```

Isso garante que substituir o mock pelo real não exige mudanças de tipo.

---

## Estrutura obrigatória do plan.md

```
<!-- ctx_total: ~Xt -->
# Plan: [nome]

<!-- #section-types ctx: ~Xt -->
## Tipos & Interfaces

<!-- #section-estrutura ctx: ~Xt -->
## Estrutura de arquivos

<!-- #section-componentes ctx: ~Xt -->
## Componentes (um por subseção)

<!-- #section-hooks ctx: ~Xt -->
## Hooks

<!-- #section-api ctx: ~Xt -->
## Contratos de API

<!-- #section-mocks ctx: ~Xt -->
## Mocks (omitir se todos endpoints confirmados)
```

---

## Token budget

- Cada seção: máx 800 tokens
- Total: máx 3.000 tokens
- Se ultrapassar: comprima interfaces (omita comentários óbvios), remova exemplos

---

## Após gerar

1. Apresente lista de seções com ctx estimado
2. **Aguarde aprovação**
