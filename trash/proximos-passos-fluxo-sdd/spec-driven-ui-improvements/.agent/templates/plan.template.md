<!-- ctx_total: ~Xt -->
# Plan: [nome-da-feature]

<!-- #section-types ctx: ~Xt -->
## Tipos & Interfaces

```typescript
export type XxxType = {
  id: string
  // ...
}

export type XxxProps = {
  // ...
}
```

<!-- #section-estrutura ctx: ~Xt -->
## Estrutura de arquivos

```
src/app/
  components/
    XxxComponent.tsx
  hooks/
    useXxx.ts
  services/
    xxxService.ts
  types/
    xxx.types.ts
```

<!-- #section-componentes ctx: ~Xt -->
## Componentes

### XxxComponent
- **Props:** `XxxProps`
- **Hook:** `useXxx`
- **Responsabilidade:** [o que renderiza, sem lógica de negócio]

<!-- #section-hooks ctx: ~Xt -->
## Hooks

### useXxx
- **Input:** `params: XxxParams`
- **Output:** `{ data, isLoading, error, mutate }`
- **Depende de:** `xxxService`

<!-- #section-api ctx: ~Xt -->
## Contratos de API

| Endpoint | Método | Request | Response |
|----------|--------|---------|----------|
| `/api/xxx` | `GET` | — | `XxxType[]` |
| `/api/xxx` | `POST` | `CreateXxxDto` | `XxxType` |

<!-- #section-mocks ctx: ~Xt -->
## Mocks (remover seção se todos endpoints confirmados)

```typescript
export const mockXxx = (overrides?: Partial<XxxType>): XxxType => ({
  id: 'mock-id',
  // ...
  ...overrides
})
```
