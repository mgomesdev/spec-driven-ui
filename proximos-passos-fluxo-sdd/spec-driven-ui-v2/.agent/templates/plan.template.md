<!-- ctx_total: ~Xt -->
<!-- Limite: [tokens].plan_max tokens -->
# Plan: [nome-da-feature]

<!-- #section-types ctx: ~Xt -->
## Tipos & Interfaces

```typescript
export type XxxType = {
  id: string
}
export type XxxProps = {
  // ...
}
```

<!-- #section-estrutura ctx: ~Xt -->
## Estrutura de arquivos

```
src/app/
  components/ XxxComponent.tsx
  hooks/      useXxx.ts
  services/   xxxService.ts
  types/      xxx.types.ts
  features/   [nome]/[nome].steps.ts
```

<!-- #section-componentes ctx: ~Xt -->
## Componentes

### XxxComponent
- Props: `XxxProps` | Hook: `useXxx` | [responsabilidade em 1 linha]

<!-- #section-hooks ctx: ~Xt -->
## Hooks

### useXxx
- Input: `XxxParams` | Output: `{ data, isLoading, error, mutate }`
- Depende de: `xxxService`

<!-- #section-api ctx: ~Xt -->
## Contratos de API

| Endpoint | Método | Request | Response |
|----------|--------|---------|----------|
| `/api/xxx` | `GET` | — | `XxxType[]` |

<!-- #section-mocks ctx: ~Xt -->
## Mocks
<!-- Remover seção se todos endpoints confirmados -->

```typescript
export const mockXxx = (o?: Partial<XxxType>): XxxType => ({
  id: 'mock-id', ...o
})
```
