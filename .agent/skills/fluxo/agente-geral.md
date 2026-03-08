# GEMINI.md — Agente Geral do Projeto

## Sobre o Projeto

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potencial clientes.

---

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript (strict)
- **Estilo:** Tailwind CSS
- **Qualidade:** ESLint
- **Integração:** REST API externa via `fetch`

---

## Fluxo de Desenvolvimento

Este projeto segue o fluxo **research → plan → tasks → orchestrator**. Toda feature começa com uma especificação e só chega ao código após aprovação humana em cada etapa.

```
[US / ideia]
    │
    ▼
research  →  specs/features/[nome]/research.md   (aprovação humana)
    │
    ▼
plan      →  specs/features/[nome]/plan.md        (aprovação humana)
    │
    ▼
tasks     →  specs/features/[nome]/TASKS.md       (aprovação humana)
    │
    ▼
orchestrator  →  implementa história por história  →  commits
```

**Nunca inicie implementação sem passar pelo fluxo.** Se receber uma ideia ou US diretamente, acione a skill `research` primeiro.

---

## Estrutura de Diretórios

```
src/
├── app/                        # Rotas (Next.js App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── [rota]/
│       └── page.tsx
├── features/                   # Features isoladas por domínio
│   └── [nome-da-feature]/
│       ├── components/         # Componentes da feature
│       ├── hooks/              # Hooks customizados
│       ├── services/           # Chamadas à API REST
│       └── types.ts            # Interfaces e types da feature
├── components/                 # Componentes globais/compartilhados
│   └── ui/                     # Componentes de UI reutilizáveis
├── lib/                        # Utilitários e helpers
└── styles/                     # Estilos globais

specs/
└── features/
    └── [nome-da-feature]/
        ├── research.md
        ├── plan.md
        ├── TASKS.md
        └── progress.md
```

---

## Convenções de Código

### TypeScript

- **Sem `any`**. Use `unknown` quando o tipo não for conhecido e documente o motivo
- Interfaces de props sempre nomeadas: `NomeComponenteProps`
- Types de domínio definidos em `features/[nome]/types.ts`, nunca inline no componente
- Imports de tipos com `import type { X } from '...'`

### Componentes

- Um componente por arquivo
- Sempre `export default` + `export` nomeado no mesmo arquivo
- Props explicitamente tipadas — nunca `props: any` ou desestruturação sem tipo
- Componentes de UI pura não fazem `fetch` direto — usam hooks ou recebem dados por props
- Nomes em PascalCase: `ItemCard.tsx`, não `item-card.tsx`

### Serviços (API REST)

- Todo `fetch` fica em `features/[nome]/services/[nome]Service.ts`
- Nunca chame `fetch` diretamente em componentes ou hooks
- Trate erros HTTP explicitamente — lance erro com mensagem legível
- Exemplo de padrão:

```typescript
// src/features/[nome]/services/[nome]Service.ts
import type { Item, CriarItemPayload } from '../types';

export async function buscarItems(): Promise<Item[]> {
  const res = await fetch('/api/items');
  if (!res.ok) throw new Error(`Erro ao buscar items: ${res.statusText}`);
  return res.json();
}
```

### Hooks

- Nomes em camelCase com prefixo `use`: `useItems`, `useProjetos`
- Retorno sempre tipado explicitamente
- Encapsulam lógica de estado + chamada ao service
- Nunca fazem fetch direto — delegam ao service

### Tailwind CSS

- Classes utilitárias diretamente no JSX — sem `className` dinâmico com strings manuais
- Para variantes condicionais, use `clsx` ou `cn` (lib de utilidade)
- Nunca use `style={{}}` inline para o que pode ser feito com Tailwind
- Componentes responsivos por padrão: mobile-first (`sm:`, `md:`, `lg:`)

### Nomenclatura de Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente | PascalCase | `ProjetoCard.tsx` |
| Hook | camelCase | `useProjetos.ts` |
| Service | camelCase + Service | `projetosService.ts` |
| Types | camelCase | `types.ts` |
| Página | kebab-case (pasta) | `app/sobre/page.tsx` |

---

## Qualidade

### Antes de todo commit

```bash
# Typecheck obrigatório
npx tsc --noEmit

# Lint
npx eslint src/
```

**Não commite com erros de typecheck ou lint.** Corrija antes.

### Verificação no navegador

Para qualquer alteração de UI, verificar visualmente no navegador antes de commitar. Use a skill `dev-browser` quando disponível.

---

## Padrão de Commits

```
feat: US-XXX - Título da história
fix: descrição do que foi corrigido
chore: descrição de tarefa de manutenção
```

Commits devem ser atômicos — um por história implementada.

---

## Skills Disponíveis

| Skill | Quando usar |
|-------|-------------|
| `research` | Recebeu uma US ou ideia do PO e precisa converter para linguagem de dev |
| `plan` | research.md aprovado, precisa mapear artefatos técnicos |
| `tasks` | plan.md aprovado, precisa gerar o plano de execução |
| `orchestrator` | TASKS.md aprovado, pronto para implementar |

---

## O que NÃO fazer

- ❌ Não implemente nada sem passar pelo fluxo research → plan → tasks
- ❌ Não use `any` no TypeScript
- ❌ Não faça `fetch` direto em componentes
- ❌ Não refatore código fora do escopo da história atual
- ❌ Não commite com erros de typecheck ou lint
- ❌ Não crie componentes sem tipar as props
- ❌ Não invente contratos de API — consulte o `plan.md`