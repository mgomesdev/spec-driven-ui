---
name: research-to-plan
description: "Gera um documento de Plan técnico a partir do research.md. Use esta skill na etapa de planejamento técnico do fluxo research → plan → tasks. Acionada por: 'gere o plan', 'criar plan', 'planejar artefatos', 'analisar artefatos do research', 'gerar plan.md', 'quais artefatos são necessários', 'mapear contratos e interfaces'. Deve ser usada sempre que o research.md estiver completo e antes de gerar o TASKS.md."
---

# Plan Generator

Analisa o `research.md` e gera um `plan.md` com todos os artefatos técnicos necessários para a implementação: contratos de API, interfaces/types, estrutura de arquivos e diagrama de dependências.

## Posição no fluxo

```
research.md  →  [ESTA SKILL] plan.md  →  TASKS.md
```

## Quando usar

- Após o `research.md` estar completo e aprovado
- Antes de gerar o `TASKS.md`
- Quando a equipe precisa alinhar contratos e interfaces antes de implementar

---

## Funcionamento

### Etapa 1: Leitura do research

1. Solicite o nome da feature no formato `nome-da-feature` (se não informado)
2. Leia o arquivo `specs/features/[nome-da-feature]/research.md`
3. Se o arquivo não existir ou estiver incompleto, informe o usuário e encerre

### Etapa 2: Análise de ambiguidades técnicas

Antes de gerar o plan, verifique se há ambiguidades técnicas **que impactam os artefatos**. Não faça perguntas sobre regras de negócio (isso é papel do research).

**Pergunte apenas se houver dúvida real em pelo menos um destes pontos:**

- Stack ou framework não está claro (ex: REST vs tRPC, Prisma vs Drizzle)
- Não é possível inferir se um contrato é interno (server action) ou externo (API REST)
- Há múltiplos módulos que poderiam ser o responsável por um domínio

**Formato das perguntas (quando necessário):**

```
1. Os contratos de dados serão expostos como:
   A. API REST (endpoints HTTP)
   B. Server Actions (Next.js)
   C. tRPC / RPC interno
   D. Outro: [especifique]

2. O ORM utilizado no projeto é:
   A. Prisma
   B. Drizzle
   C. TypeORM
   D. Outro: [especifique]
```

O usuário pode responder com "1B, 2A". Se o contexto já deixar claro, **pule esta etapa e gere diretamente**.

### Etapa 3: Geração do plan.md

Gere o arquivo com as seções abaixo e salve em `specs/features/[nome-da-feature]/plan.md`.

---

## Estrutura do plan.md

```markdown
# Plan: [Nome da Feature]

> Gerado a partir de: `specs/features/[nome-da-feature]/research.md`

## 1. Visão Geral Técnica

Resumo de 3–5 linhas do que será construído do ponto de vista técnico. Mencione as camadas envolvidas (banco, backend, frontend).

---

## 2. Estrutura de Arquivos

Liste todos os arquivos que serão **criados ou modificados**. Use o formato de árvore.

```
src/
├── features/
│   └── [nome-da-feature]/
│       ├── components/
│       │   └── NomeComponente.tsx       # criado - descrição breve
│       ├── actions/
│       │   └── nomeAction.ts            # criado - descrição breve
│       ├── types.ts                     # criado - interfaces e enums
│       └── schema.ts                    # criado - validação Zod
├── db/
│   └── migrations/
│       └── XXXXXX_nome_da_feature.sql   # criado - migration
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente que receberá alterações

---

## 3. Interfaces e Types

Defina **todas** as interfaces, types e enums necessários. Seja explícito nos campos e tipos.

### [NomeDaEntidade]

```typescript
// Local: src/features/[nome]/types.ts

export type StatusTarefa = 'pendente' | 'em_andamento' | 'concluido';

export interface Tarefa {
  id: string;
  titulo: string;
  status: StatusTarefa;
  prioridade: 'alta' | 'media' | 'baixa';
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface CriarTarefaInput {
  titulo: string;
  prioridade?: 'alta' | 'media' | 'baixa'; // default: 'media'
}

export interface AtualizarTarefaInput {
  id: string;
  titulo?: string;
  status?: StatusTarefa;
  prioridade?: 'alta' | 'media' | 'baixa';
}
```

Inclua um bloco por domínio/entidade relevante.

---

## 4. Contratos de API / Server Actions

Documente cada contrato de forma explícita: nome, entrada, saída e comportamento esperado.

### [nomeDoContrato]

```typescript
// Tipo: Server Action | REST Endpoint | tRPC
// Local: src/features/[nome]/actions/nomeAction.ts

/**
 * Descrição do que esta função faz.
 * Quando retorna erro e quando retorna sucesso.
 */
async function nomeDoContrato(input: NomeInput): Promise<NomeOutput>

// Input
interface NomeInput {
  campo: tipo; // descrição
}

// Output (sucesso)
interface NomeOutput {
  campo: tipo;
}

// Erros esperados
// - "NOT_FOUND": quando o recurso não existe
// - "UNAUTHORIZED": quando o usuário não tem permissão
```

Liste um bloco por contrato/action/endpoint.

---

## 5. Schema de Banco de Dados

Descreva as alterações no banco de dados.

### Tabela: [nome_da_tabela]

```sql
-- Novo campo
ALTER TABLE tarefas ADD COLUMN prioridade TEXT NOT NULL DEFAULT 'media';

-- Nova tabela (se aplicável)
CREATE TABLE notificacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tarefa_id UUID NOT NULL REFERENCES tarefas(id),
  tipo TEXT NOT NULL,
  lida BOOLEAN NOT NULL DEFAULT false,
  criado_em TIMESTAMP NOT NULL DEFAULT now()
);
```

Se não há alterações no banco, escreva: `Nenhuma alteração no banco de dados.`

---

## 6. Diagrama de Dependências

Mostre a ordem de implementação e as dependências entre artefatos.

```
[migration] ──► [types.ts] ──► [actions/criar.ts]
                                      │
                                      ▼
                              [components/Form.tsx]
                                      │
                                      ▼
                              [page/index.tsx]
```

Regras:
- `──►` significa "deve existir antes de"
- Artefatos sem dependência podem ser implementados em paralelo

---

## 7. Questões em Aberto

Liste qualquer decisão técnica que ainda precisa de resposta antes ou durante a implementação.

- [ ] Pergunta técnica específica?
- [ ] Definir limite de responsabilidade entre módulo X e Y?
```

---

## Regras de Qualidade

- **Seja explícito:** Types vagos como `any` ou `object` são proibidos no plan. Defina os campos reais.
- **Nomes consistentes:** Use os mesmos nomes de tipos, funções e campos em todas as seções. O que está em `types.ts` deve bater com o que está nos contratos.
- **Não invente campos:** Se o research não menciona um campo, não o adicione. Se for necessário por questão técnica, coloque em "Questões em Aberto".
- **Cubra todos os requisitos funcionais:** Cada RF do research deve ter um artefato correspondente no plan.

---

## Lista de Verificação (antes de salvar)

- [ ] Todos os RFs do research têm um artefato correspondente
- [ ] Types não usam `any` nem `object` genérico
- [ ] Nomes de tipos/funções são consistentes entre seções
- [ ] Diagrama de dependências cobre todos os artefatos criados
- [ ] Contratos documentam os erros esperados
- [ ] Arquivo salvo em `specs/features/[nome-da-feature]/plan.md`

---

## Exemplo de Saída

Veja abaixo um exemplo resumido para a feature `task-priority`:

```markdown
# Plan: Task Priority

> Gerado a partir de: `specs/features/task-priority/research.md`

## 1. Visão Geral Técnica

Adicionar campo `prioridade` à tabela `tarefas` com os valores `alta`, `media` e `baixa`. Expor a alteração via server actions e refletir na UI com indicadores visuais e filtro por prioridade.

## 2. Estrutura de Arquivos

src/
├── features/task-priority/
│   ├── components/
│   │   ├── PrioridadeBadge.tsx     # criado - badge colorido de prioridade
│   │   └── FiltroPrioridade.tsx    # criado - dropdown de filtro
│   ├── actions/
│   │   └── atualizarPrioridade.ts  # criado - server action
│   └── types.ts                    # criado - Prioridade type
└── db/migrations/
    └── 20240601_add_prioridade.sql # criado - migration

## 3. Interfaces e Types

```typescript
export type Prioridade = 'alta' | 'media' | 'baixa';

export interface AtualizarPrioridadeInput {
  tarefaId: string;
  prioridade: Prioridade;
}
```

## 4. Contratos

```typescript
// Server Action
async function atualizarPrioridade(input: AtualizarPrioridadeInput): Promise<void>
// Erros: "NOT_FOUND" se tarefa não existe
```

## 5. Schema de Banco

```sql
ALTER TABLE tarefas ADD COLUMN prioridade TEXT NOT NULL DEFAULT 'media';
```

## 6. Diagrama de Dependências

[migration] ──► [types.ts] ──► [atualizarPrioridade.ts] ──► [PrioridadeBadge.tsx]
                                                                      │
                                                               [FiltroPrioridade.tsx]

## 7. Questões em Aberto

- [ ] A ordenação por prioridade deve ser persistida no banco ou aplicada no frontend?
```