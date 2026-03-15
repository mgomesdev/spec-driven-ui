---
name: plan-to-tasks
description: "Gera o tasks.md lendo o research.md e o plan.md. Converte o planejamento técnico em histórias de usuário atômicas, ordenadas por dependência, prontas para execução. Use esta skill após o plan.md estar aprovado."
mode: subagent
temperature: 0.1
tools:
  write: false
  edit: false
  bash: false
permission:
  edit: ask
---

## Acionamento

'gere as tasks'. Deve ser usada APÓS o plan.md estar aprovado.

## Funcionamento

### Etapa 1: Leitura dos artefatos

1. Solicite o nome da feature (se não informado)
2. Leia `specs/features/[nome-da-feature]/research.md`
3. Leia `specs/features/[nome-da-feature]/plan.md`
4. Se algum não existir, informe o usuário — ambos são obrigatórios

### Etapa 2: Arquivar execução anterior (se houver)

Antes de escrever o novo `tasks.md`:

1. Verifique se existe `specs/features/[nome-da-feature]/tasks.md`
2. Se existir e tiver um `branchName` diferente da feature atual:
   - Crie `specs/features/[nome-da-feature]/archive/YYYY-MM-DD-[nome-anterior]/`
   - Mova os arquivos `tasks.md` e `progress.md` para o arquivo
   - Reinicie `progress.md` com cabeçalho limpo

### Etapa 3: Gerar o tasks.md

Transforme os artefatos do plan em histórias atômicas. Siga as regras de tamanho e ordenação abaixo.

### Etapa 4: Apresentar ao usuário e encerre

```
✅ tasks.md gerado em specs/features/[nome]/tasks.md

Resumo:
- X histórias geradas
- Ordem: types → services → hooks → componentes → página
- Branch: us/[nome-da-feature]

Histórias:
  US-001: [título] (prioridade 1)
  US-002: [título] (prioridade 2)
  ...
```

## Regra #1: Tamanho das Histórias

**Cada história deve ser concluída em UMA iteração (uma janela de contexto do agente).**

O Orchestrator cria uma nova instância de agente por história, sem memória da anterior. Se a história for grande demais, o agente fica sem contexto e produz código com erros.

### ✅ Histórias no tamanho certo:
- Criar o arquivo `types.ts` com todas as interfaces da feature
- Criar o serviço `nomeService.ts` com os métodos de chamada à API
- Criar o hook `useNomeHook.ts` consumindo o serviço
- Criar o componente `NomeComponente.tsx` com suas props
- Integrar componente na `page.tsx` existente

### ❌ Muito grandes (divida):
- "Criar toda a feature X" → dividir em types, service, hook, componentes, página
- "Criar tela de listagem com filtros e paginação" → dividir em: hook de dados, componente de lista, componente de filtro, componente de paginação, integração na página

**Regra prática:** Se não consegue descrever a mudança em 2–3 frases, é grande demais.

## Regra #2: Ordem das Histórias (Dependências Primeiro)

As histórias rodam em sequência. Histórias posteriores não podem depender de algo que ainda não foi criado.

**Ordem correta para frontend:**

1. `types.ts` — interfaces, enums, types (sem dependências)
2. `[nome]Service.ts` — chamadas à API (depende dos types)
3. `use[Nome]Hook.ts` — lógica de estado e dados (depende do service)
4. Componentes folha (sem filhos) — dependem dos types e hooks
5. Componentes compostos — dependem dos componentes folha
6. Integração na página — depende de tudo acima

**Nunca crie um componente antes do type que ele usa.**

## Formato do tasks.md

```markdown
# Projeto: [Nome do Projeto]

**Branch:** us/[feature-name-kebab-case]
**Research:** specs/features/[nome]/research.md
**Plan:** specs/features/[nome]/plan.md

## Descrição

[Descrição da feature em 2–3 linhas, extraída do research.md]

## User Stories

### US-001: [Título]

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como [usuário/desenvolvedor], eu quero [o que será feito] para que [benefício].

**Artefatos:**
- Cria: `src/features/[nome]/types.ts`
- Modifica: (nenhum)
- Depende de: (nenhum - primeira história)

**Contexto do plan:**
> [Trecho relevante do plan.md que o agente deve consultar para esta história]
> Ex: "Ver seção '3. Interfaces e Types' do plan.md"

#### Critérios de Aceitação

* [Critério verificável específico]
* [Critério verificável específico]
* Typecheck aprovado

#### Notas

(Sem notas)
```

## Critérios de Aceitação: Como Escrever

**Bons critérios (verificáveis):**
- "Arquivo `types.ts` exporta os tipos `Item`, `CriarItemPayload` e `StatusItem`"
- "Hook retorna `{ items, isLoading, erro, criar, atualizar }`"
- "Componente exibe skeleton loader quando `isLoading` é true"
- "Ao submeter form com campo vazio, exibe mensagem 'Campo obrigatório' abaixo do input"
- "Typecheck aprovado"
- "Verificar no navegador usando a skill dev-browser"

**Critérios ruins (vagos):**
- "Funciona corretamente"
- "Boa experiência do usuário"
- "Trata erros"

**Regras fixas:**
- Toda história: adicionar `"Typecheck aprovado"` como critério final
- Toda história com componente/UI: adicionar `"Verificar no navegador usando a skill dev-browser"`
- Toda história com lógica de dados: adicionar critério que verifica o contrato da API (ex: "chama `GET /api/items` com o header Authorization")

## Incluir Contexto do Plan nas Histórias

Cada história deve referenciar explicitamente qual seção do `plan.md` o agente deve consultar. Isso evita que o agente invente interfaces ou ignore o planejamento.

**Exemplo:**
```markdown
**Contexto do plan:**
> Consultar seção "3. Interfaces e Types" do plan.md para os tipos exatos.
> O type `StatusItem` deve ser `'ativo' | 'inativo' | 'pendente'` conforme definido.
```

## Regra #3: Inferir Dependências Automáticamente

Para enabling paralelização com o worktree-runner, você DEVE adicionar o campo "Depende de:" em cada história que não seja a primeira.

### Como inferir dependências:

**Por tipo de arquivo:**
| Se a história cria | Outras histórias que dependem dela |
|-------------------|-----------------------------------|
| `types.ts` | Qualquer uma que use tipos (services, hooks, componentes) |
| `*Service.ts` | Hooks e componentes que usam o serviço |
| `use*.ts` | Componentes que usam o hook |
| `components/*.tsx` | Componentes compostos ou páginas que usam |
| `page.tsx` | (nenhuma -通常是 última) |

**Por estrutura de pastas:**
- `src/features/feature/types.ts` → `src/features/feature/*` depende
- `src/components/component/component.tsx` → qualquer página que usa

**Por uso no código (se mencionado no plan):**
- Se o plan.md diz que o hook usa o service → hook depende do service
- Se o plan.md diz que o componente usa o hook → componente depende do hook

### Exemplo de dependências no tasks.md:

```markdown
### US-001: Criar types
**Artefatos:**
- Cria: `src/features/item/types.ts`
- Depende de: (nenhum)

### US-002: Criar service
**Artefatos:**
- Cria: `src/features/item/services/itemService.ts`
- Depende de: `US-001` (precisa dos tipos)

### US-003: Criar hook
**Artefatos:**
- Cria: `src/features/item/hooks/useItems.ts`
- Depende de: `US-002` (usa o serviço)

### US-004: Criar componente Card
**Artefatos:**
- Cria: `src/features/item/components/ItemCard.tsx`
- Depende de: `US-001` (usa tipos Item)

### US-005: Criar componente List
**Artefatos:**
- Cria: `src/features/item/components/ItemList.tsx`
- Depende de: `US-003` (usa useItems), `US-004` (usa ItemCard)
```

### Por que dependências importam:

Com dependências explícitas, o `tasks-parallel-analyzer` pode:
1. Identificar quais tasks podem rodar em paralelo
2. Criar grupos de execução otimizados
3. O worktree-runner pode executar groups em paralelo

## Exemplo Completo

**Input (feature: `item-list`):**
- research.md define: tela de listagem de itens com filtro por status
- plan.md define: types.ts, itemService.ts, useItems hook, ItemCard componente, ItemList componente, page.tsx modificado

**Output tasks.md:**

```markdown
# Projeto: MeuApp

**Branch:** us/item-list
**Research:** specs/features/item-list/research.md
**Plan:** specs/features/item-list/plan.md

## Descrição

Tela de listagem de itens com filtro por status. O usuário pode visualizar todos os itens,
filtrar por status (ativo/inativo/pendente) e clicar para ver detalhes.

## User Stories

### US-001: Criar types da feature item-list

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript da feature definidos para que
> todos os outros artefatos possam ser criados com tipagem correta.

**Artefatos:**
- Cria: `src/features/item-list/types.ts`

**Contexto do plan:**
> Consultar seção "3. Interfaces e Types" do plan.md.
> Tipos necessários: `Item`, `StatusItem`, `CriarItemPayload`, `FiltroItemParams`.

#### Critérios de Aceitação

* Arquivo exporta `StatusItem = 'ativo' | 'inativo' | 'pendente'`
* Arquivo exporta interface `Item` com campos: id, nome, status, criadoEm
* Arquivo exporta interface `FiltroItemParams` com campo opcional `status?: StatusItem`
* Typecheck aprovado

#### Notas

(Sem notas)

### US-002: Criar itemService com chamadas à API

**Prioridade:** 2
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero um serviço que encapsule as chamadas à API de items
> para que os hooks e componentes não façam fetch diretamente.

**Artefatos:**
- Cria: `src/features/item-list/services/itemService.ts`
- Depende de: `US-001` (types.ts)

**Contexto do plan:**
> Consultar seção "4. Contratos de API Consumidos" do plan.md.
> Endpoint: GET /api/items?status=[valor]
> Response: `{ items: Item[], total: number }`

#### Critérios de Aceitação

* Exporta função `buscarItems(filtro?: FiltroItemParams): Promise<Item[]>`
* Passa o parâmetro `status` como query string quando fornecido
* Em caso de erro HTTP, lança erro com a mensagem do servidor
* Typecheck aprovado

#### Notas

(Sem notas)

### US-003: Criar hook useItems

**Prioridade:** 3
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero um hook que gerencie o estado da listagem de items
> para que os componentes não precisem lidar com lógica de fetch.

**Artefatos:**
- Cria: `src/features/item-list/hooks/useItems.ts`
- Depende de: `US-002` (itemService.ts)

**Contexto do plan:**
> Consultar seção "6. Hooks Customizados" do plan.md.
> Retorno esperado: `{ items, isLoading, erro, refetch }`

#### Critérios de Aceitação

* Hook aceita parâmetro opcional `filtro?: FiltroItemParams`
* Retorna `{ items: Item[], isLoading: boolean, erro: string | null, refetch: () => void }`
* `isLoading` é true durante a requisição e false após
* `erro` contém mensagem legível em caso de falha
* Typecheck aprovado

#### Notas

(Sem notas)

### US-004: Criar componente ItemCard

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como usuário, eu quero ver cada item da lista em um card visual com seu status
> para identificar rapidamente o estado de cada item.

**Artefatos:**
- Cria: `src/features/item-list/components/ItemCard.tsx`
- Depende de: `US-001` (types.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" do plan.md.
> Props: `{ item: Item; onClick: (id: string) => void }`

#### Critérios de Aceitação

* Exibe o nome do item
* Exibe badge de status: verde (ativo), cinza (inativo), amarelo (pendente)
* Ao clicar no card, chama `onClick` com o id do item
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-005: Criar componente ItemList com filtro

**Prioridade:** 5
**Passes:** false

**Descrição:**
> Como usuário, eu quero ver a listagem de items com opção de filtrar por status
> para encontrar rapidamente os items que me interessam.

**Artefatos:**
- Cria: `src/features/item-list/components/ItemList.tsx`
- Depende de: `US-003` (useItems), `US-004` (ItemCard)

**Contexto do plan:**
> Consultar seção "5. Componentes" do plan.md.
> Usa o hook `useItems` internamente. Renderiza um `ItemCard` por item.

#### Critérios de Aceitação

* Exibe dropdown de filtro com opções: Todos | Ativo | Inativo | Pendente
* Exibe skeleton loader (3 cards) enquanto `isLoading` é true
* Exibe mensagem "Nenhum item encontrado" quando lista está vazia
* Exibe mensagem de erro quando `erro` não é null
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-006: Integrar ItemList na página

**Prioridade:** 6
**Passes:** false

**Descrição:**
> Como usuário, eu quero acessar a listagem de items pela URL /items
> para visualizar e filtrar os items do sistema.

**Artefatos:**
- Modifica: `src/app/items/page.tsx`
- Depende de: `US-005` (ItemList)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" do plan.md.
> A página já existe, apenas adicionar o componente ItemList.

#### Critérios de Aceitação

* Componente `ItemList` renderizado na página `/items`
* Título da página é "Items"
* Página é acessível sem autenticação (conforme research.md)
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser: navegar até /items e confirmar que a lista carrega

#### Notas

(Sem notas)
```

## Lista de Verificação (antes de salvar)

- [ ] Execução anterior arquivada (se tasks.md existia com branch diferente)
- [ ] Cada história pode ser concluída em uma única iteração
- [ ] Histórias estão ordenadas por dependência (types → service → hook → componentes → página)
- [ ] Nenhuma história depende de uma história posterior
- [ ] Toda história tem campo "Depende de:" preenchido (exceto a primeira)
- [ ] Dependências inferidas corretamente por tipo de arquivo
- [ ] Toda história referencia qual seção do plan.md consultar
- [ ] Toda história tem `"Typecheck aprovado"` como critério
- [ ] Toda história com UI tem `"Verificar no navegador usando a skill dev-browser"`
- [ ] Critérios de aceitação são verificáveis (não vagos)
- [ ] Arquivo salvo em `specs/features/[nome-da-feature]/tasks.md`
- [ ] Resumo apresentado ao usuário para aprovação
