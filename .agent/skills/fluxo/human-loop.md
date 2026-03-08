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

## Fluxo de Atualização de Feature Existente

Atualizações em features já desenvolvidas seguem caminhos diferentes dependendo do tipo de mudança. A regra geral é: **quanto maior o impacto, mais etapas do fluxo precisam ser refeitas.**

### Mapa de decisão

```
[pedido de atualização]
         │
         ▼
  Qual é o tipo?
         │
    ┌────┴─────────────────────────┐
    │                              │
    ▼                              ▼
Bug / Ajuste visual           Mudança de requisito
(escopo claro, localizado)    ou Expansão de feature
         │                         │
         ▼                         ▼
   Fast Track                Fluxo Completo
(tasks direto, sem            (research → plan
 research/plan)                → tasks → orq.)
```

---

### Tipo 1: Correção de Bug

**Quando:** Comportamento está errado — algo que deveria funcionar não funciona.

**Fluxo:**
```
[descrição do bug]  →  tasks (história de fix)  →  orchestrator
```

Não precisa de research nem plan. Crie diretamente uma história no `TASKS.md` existente:

```markdown
### US-FIX-001: Corrigir [descrição do bug]

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como usuário, o sistema deve [comportamento correto] mas está [comportamento errado].

**Arquivos afetados:** `src/features/[nome]/components/X.tsx`

**Contexto do plan:**
> Consultar seção correspondente do plan.md para não quebrar o contrato existente.

#### Critérios de Aceitação

* [Comportamento correto verificável]
* Comportamento anterior não regride
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser
```

**Commit:** `fix: US-FIX-001 - Descrição do bug corrigido`

---

### Tipo 2: Ajuste Visual / UX

**Quando:** O comportamento está certo, mas o visual ou a experiência precisa mudar (novo design, feedback do PO, revisão de layout).

**Fluxo:**
```
[descrição do ajuste visual]  →  tasks (história de ajuste)  →  orchestrator
```

Também vai direto para tasks. Seja específico nos critérios — descreva o estado visual esperado, não "melhorar o design".

```markdown
### US-UX-001: Ajustar [componente] — [descrição]

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como usuário, quero que [componente] exiba [novo visual] para [motivo].

**Referência visual:** [link do Figma ou descrição detalhada]

#### Critérios de Aceitação

* [Estado visual verificável: ex "botão tem fundo #0F172A e texto branco"]
* [Comportamento responsivo: ex "em mobile, ocupa 100% da largura"]
* Nenhum outro componente foi afetado visualmente
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser
```

**Commit:** `feat: US-UX-001 - Ajuste visual em [componente]`

---

### Tipo 3: Mudança de Requisito

**Quando:** O PO mudou o que a feature deve fazer — a lógica, o fluxo ou as regras de negócio mudam.

**Fluxo:**
```
[novo requisito]
      │
      ▼
research (atualiza o research.md existente, marca o que muda)
      │
      ▼                     ← aprovação humana
plan (atualiza apenas as seções afetadas do plan.md)
      │
      ▼                     ← aprovação humana
tasks (novas histórias ou histórias de reversão + reimplementação)
      │
      ▼                     ← aprovação humana
orchestrator
```

No `research.md`, adicione uma seção de atualização no topo:

```markdown
## ⚠️ Atualização — [data]

**Motivo:** [O que o PO pediu de diferente]
**O que muda:** [Lista das histórias/requisitos afetados]
**O que permanece igual:** [O que não deve ser tocado]
```

No `TASKS.md`, as histórias afetadas voltam para `Passes: false` e recebem uma nota explicando a mudança.

---

### Tipo 4: Expansão de Feature

**Quando:** A feature existe e funciona, mas vai ganhar algo novo (nova tela, novo filtro, nova ação).

**Fluxo:**
```
[descrição da expansão]
      │
      ├── É pequena? (1–2 componentes, sem novos tipos)
      │       │
      │       ▼
      │   tasks direto  →  orchestrator
      │
      └── É maior? (novos tipos, novos contratos, múltiplos componentes)
              │
              ▼
          research (seção nova no research.md existente)
              │
              ▼           ← aprovação humana
          plan (seção nova no plan.md existente)
              │
              ▼           ← aprovação humana
          tasks  →  orchestrator
```

**Regra prática:** Se a expansão precisa de novos tipos ou novos contratos de API, passe pelo plan. Se é só um componente novo usando o que já existe, vá direto para tasks.

---

## Human in the Loop — Ciclo de Revisão e Rejeição

### Durante o planejamento (research / plan / tasks)

Cada skill para e exibe um resumo antes de avançar:

```
✅ [artefato] gerado.

[resumo do que foi gerado]

👉 Responda "aprovado" para continuar ou descreva o que deve ser ajustado.
```

**Para aprovar:** responda `aprovado` — a skill avança para a próxima etapa.

**Para pedir ajuste:** descreva o problema em texto livre. A skill reprocessa apenas o que foi apontado e apresenta novamente para aprovação. Esse ciclo se repete até você aprovar.

```
[você]: "O escopo está grande demais, remove a parte de filtro por data"
[skill]: atualiza o artefato e apresenta novamente
[você]: "aprovado"
[skill]: avança
```

Não há limite de rodadas — você pode pedir ajustes quantas vezes precisar antes de aprovar.

---

### Durante a implementação (orchestrator)

O orchestrator implementa uma história e apresenta o resultado antes de commitar:

```
✅ US-XXX implementada.

Arquivos alterados:
- src/features/[nome]/components/X.tsx (criado)
- src/features/[nome]/hooks/useX.ts (criado)

Typecheck: ✅ passou
Navegador: ✅ verificado (screenshot anexo)

👉 Responda "aprovado" para commitar e avançar para a próxima história,
   ou descreva o que deve ser corrigido.
```

**Para aprovar:** responda `aprovado` — orchestrator commita e passa para a próxima história.

**Para rejeitar:** descreva o problema. O orchestrator corrige **na mesma iteração**, sem commitar o código com erro, e apresenta novamente.

```
[você]: "O skeleton loader não aparece, está mostrando a lista vazia direto"
[orchestrator]: corrige o componente, verifica no navegador novamente
[orchestrator]: apresenta o resultado corrigido
[você]: "aprovado"
[orchestrator]: commita e avança
```

**Regras do ciclo de correção:**
- O orchestrator nunca commita antes da aprovação
- Cada rejeição gera uma tentativa de correção na mesma iteração
- Se após 2 tentativas o problema persistir, o orchestrator registra no `progress.md` e sinaliza que precisa de intervenção manual antes de continuar
- O que foi corrigido é registrado nos aprendizados do `progress.md` para evitar repetição

---

### Resumo: quando cada tipo volta para qual etapa

| Tipo de atualização | Volta para research? | Volta para plan? | Vai direto para tasks? |
|---------------------|---------------------|-----------------|----------------------|
| Bug | ❌ | ❌ | ✅ |
| Ajuste visual/UX | ❌ | ❌ | ✅ |
| Mudança de requisito | ✅ | ✅ | ❌ |
| Expansão pequena | ❌ | ❌ | ✅ |
| Expansão grande | ✅ | ✅ | ❌ |

---

## O que NÃO fazer

- ❌ Não implemente nada sem passar pelo fluxo research → plan → tasks
- ❌ Não use `any` no TypeScript
- ❌ Não faça `fetch` direto em componentes
- ❌ Não refatore código fora do escopo da história atual
- ❌ Não commite com erros de typecheck ou lint
- ❌ Não crie componentes sem tipar as props
- ❌ Não invente contratos de API — consulte o `plan.md`