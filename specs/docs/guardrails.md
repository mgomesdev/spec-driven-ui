# Guardrails

## Carregamento de Arquivos Externos

> **CRÍTICO**: Quando encontrar uma referência de arquivo (ex: `@specs/docs/arquitecture.md`), use sua ferramenta de leitura para carregá-lo sob demanda. Eles são relevantes para a TAREFA ESPECÍFICA em questão.

### Instruções

- NÃO carregue todas as referências preventivamente — use lazy loading baseado na necessidade real
- Quando carregado, trate o conteúdo como instruções obrigatórias que sobrepõem os padrões
- Siga referências recursivamente quando necessário

---

## Antipadrões a Evitar

| # | Regra |
|---|-------|
| 1 | Não implemente nada sem passar pelo fluxo research → plan → tasks |
| 2 | Não invente contratos de API — consulte o `plan.md` |
| 3 | Não use `any` no TypeScript |
| 4 | Não faça `fetch` direto em componentes |
| 5 | Não refatore código fora do escopo da história atual |
| 6 | Não crie componentes sem tipar as props |
| 7 | Não crie arquivos sem seguir o padrão de nomenclatura |
| 8 | Não adicione comentários no código |
| 9 | Não crie arquivos desnecessários |
| 10 | Não ultrapasse 500 linhas por arquivo |
| 11 | Não adicione tipagem de retorno, prefira a inferência de tipos |
| 12 | Não crie testes para componentes sem página de teste |
| 13 | Não adicione comentários em código (.tsx) nem em testes (.spec.ts) |

---

## Testes E2E com Playwright

### Configuração

- Framework: Playwright (`@playwright/test`)
- Arquivo de config: `frontend/playwright.config.ts`
- Testes em: `frontend/tests/features/[feature]/[us-id].spec.ts`

### Página de Teste

Para testar componentes React, criar página de teste em `frontend/src/app/test-button/page.tsx`:
- Renderiza o componente com `data-testid`
- Permite verificação E2E dos comportamentos

### Estados com Tailwind

Para estilizar estados de elementos desabilitados, usar prefixo `disabled:`:
- `disabled:opacity-50`
- `disabled:cursor-not-allowed`

### Elementos Duplicados

Quando um componente está no layout (ex: Header) e também é renderizado na página de teste, usar `.first()` para evitar strict mode violation:
```typescript
const header = page.locator('[data-testid="header"]').first();
```
