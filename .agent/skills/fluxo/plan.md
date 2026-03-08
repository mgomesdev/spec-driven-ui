---
name: plan
description: "Gera um documento de Plan técnico a partir do research.md com foco em frontend. Mapeia todos os artefatos, interfaces TypeScript, contratos de API consumidos, estrutura de componentes e diagrama de dependências. Use esta skill na etapa de planejamento técnico do fluxo research → plan → tasks. Acionada por: 'gere o plan', 'criar plan', 'planejar artefatos', 'analisar artefatos do research', 'gerar plan.md', 'quais componentes serão necessários', 'mapear contratos e interfaces'. Deve ser usada APÓS o research.md estar aprovado e ANTES de gerar o TASKS.md."
---

# Plan Generator

Lê o `research.md` aprovado e gera um `plan.md` com todos os artefatos técnicos de **frontend** necessários para a implementação: componentes, tipos TypeScript, contratos de API consumidos, estrutura de arquivos e diagrama de dependências.

## Posição no fluxo

```
research.md (aprovado)  →  [ESTA SKILL] plan.md  →  TASKS.md
```

---

## Funcionamento

### Etapa 1: Leitura do research

1. Solicite o nome da feature no formato `nome-da-feature` (se não informado)
2. Leia `specs/features/[nome-da-feature]/research.md`
3. Se não existir ou não estiver aprovado, informe o usuário e encerre — o research precisa vir antes

### Etapa 2: Perguntas de ambiguidade técnica

Pergunte **somente** se houver dúvida real que impacte os artefatos gerados. Não pergunte sobre regras de negócio.

Situações que exigem pergunta:
- Stack de UI não está clara (ex: shadcn/ui vs componentes próprios vs MUI)
- Gerenciamento de estado não está claro (ex: useState local vs Zustand vs React Query)
- Roteamento ambíguo (ex: Next.js App Router vs Pages Router)
- Não é possível inferir se há autenticação envolvida

**Formato:**

```
1. O gerenciamento de estado dos dados remotos será feito com:
   A. React Query / TanStack Query
   B. SWR
   C. useState + useEffect manual
   D. Outro: [especifique]

2. A biblioteca de componentes base do projeto é:
   A. shadcn/ui
   B. MUI (Material UI)
   C. Componentes próprios (sem biblioteca externa)
   D. Outro: [especifique]
```

**Se o contexto já deixar claro, pule esta etapa e gere diretamente.**

### Etapa 3: Gerar e salvar o plan.md

Gere o arquivo em `specs/features/[nome-da-feature]/plan.md`.

**Após salvar, apresente um resumo ao usuário e aguarde aprovação:**

```
✅ plan.md gerado em specs/features/[nome]/plan.md

Resumo:
- X componentes novos, Y modificados
- Z tipos/interfaces definidos
- Contratos de API: [lista de endpoints/actions]
- Ordem de implementação: [resumo do diagrama]

👉 Revise o arquivo e responda "aprovado" para prosseguir para as tasks,
   ou indique o que deve ser ajustado.
```

---

## Estrutura do plan.md

```markdown
# Plan: [Nome da Feature]

> Gerado a partir de: `specs/features/[nome-da-feature]/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Resumo de 3–5 linhas do que será construído no frontend. Mencione as camadas: quais páginas mudam, quais componentes são criados, como o frontend se comunica com o backend.

---

## 2. Estrutura de Arquivos

Todos os arquivos que serão **criados ou modificados**. Use árvore de diretórios.

```
src/
├── app/
│   └── [rota]/
│       └── page.tsx                          # modificado - adiciona seção X
├── features/
│   └── [nome-da-feature]/
│       ├── components/
│       │   ├── NomeComponentePrincipal.tsx   # criado - descrição breve
│       │   └── NomeSubComponente.tsx         # criado - descrição breve
│       ├── hooks/
│       │   └── useNomeHook.ts                # criado - lógica de dados
│       ├── services/
│       │   └── nomeService.ts                # criado - chamadas à API
│       └── types.ts                          # criado - interfaces e enums
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces e Types

Todos os tipos, interfaces e enums necessários. **Sem `any`, sem `object` genérico.**

```typescript
// Local: src/features/[nome]/types.ts

// Enums / union types
export type StatusItem = 'ativo' | 'inativo' | 'pendente';

// Entidade retornada pela API
export interface Item {
  id: string;
  nome: string;
  status: StatusItem;
  criadoEm: string; // ISO 8601
}

// Payload de criação
export interface CriarItemPayload {
  nome: string;
  status?: StatusItem; // default: 'pendente'
}

// Payload de atualização
export interface AtualizarItemPayload {
  id: string;
  nome?: string;
  status?: StatusItem;
}

// Estado de UI (se necessário)
export interface ItemFormState {
  isLoading: boolean;
  erro: string | null;
}
```

Um bloco por domínio/entidade.

---

## 4. Contratos de API Consumidos

O que o frontend vai **consumir** do backend. Documente cada contrato.

### [NomeDoContrato]

```typescript
// Método: GET | POST | PUT | PATCH | DELETE
// Endpoint: /api/[recurso]
// Ou: Server Action em src/features/[nome]/actions/nomeAction.ts

// Request
interface NomeRequest {
  campo: tipo; // descrição do campo
}

// Response (sucesso 200/201)
interface NomeResponse {
  campo: tipo;
}

// Erros esperados (para tratamento no frontend)
// 400 - Dados inválidos: exibir erro de validação inline
// 401 - Não autenticado: redirecionar para login
// 404 - Não encontrado: exibir estado vazio
// 500 - Erro servidor: exibir toast de erro genérico
```

Liste um bloco por endpoint/action.

---

## 5. Componentes: Props e Responsabilidades

Para cada componente criado, defina props e responsabilidade.

### NomeComponente

```typescript
// Local: src/features/[nome]/components/NomeComponente.tsx

interface NomeComponenteProps {
  // props tipadas explicitamente
  items: Item[];
  onSelecionar: (id: string) => void;
  isLoading?: boolean;
}

// Responsabilidade: [o que este componente renderiza e faz]
// Estado local: [o que gerencia internamente, se algo]
// Não faz: [o que é responsabilidade do pai ou do hook]
```

---

## 6. Hooks Customizados

Hooks que encapsulam lógica de dados ou side-effects.

### useNomeHook

```typescript
// Local: src/features/[nome]/hooks/useNomeHook.ts

// Input
interface UseNomeHookParams {
  filtro?: string;
}

// Output
interface UseNomeHookReturn {
  items: Item[];
  isLoading: boolean;
  erro: string | null;
  criar: (payload: CriarItemPayload) => Promise<void>;
  atualizar: (payload: AtualizarItemPayload) => Promise<void>;
}

// Responsabilidade: busca e mutação de items via [React Query / SWR / fetch]
```

---

## 7. Diagrama de Dependências

Ordem de implementação. Artefatos anteriores devem existir antes dos posteriores.

```
[types.ts]
    │
    ├──► [nomeService.ts]
    │         │
    │         ▼
    │    [useNomeHook.ts]
    │         │
    ▼         ▼
[NomeSubComponente.tsx] ──► [NomeComponentePrincipal.tsx]
                                        │
                                        ▼
                                  [page.tsx (modificado)]
```

Regra: `──►` significa "depende de / deve existir antes".

---

## 8. Questões em Aberto

Decisões que ainda precisam de resposta antes ou durante a implementação.

- [ ] [Questão técnica pendente]
- [ ] [Decisão de UX que impacta implementação]
```

---

## Regras de Qualidade

- **Foco em frontend:** Não documente implementação de backend. Se o backend ainda não existe, documente o contrato esperado e marque como "a confirmar"
- **Types explícitos:** `any` e `object` são proibidos. Se não souber o tipo, use `unknown` e documente o motivo
- **Props completas:** Todo componente listado deve ter suas props tipadas na seção 5
- **Consistência de nomes:** O nome do tipo em `types.ts` deve ser o mesmo usado em componentes, hooks e serviços
- **Cobrir todos os RFs:** Cada requisito funcional do research deve ter pelo menos um artefato correspondente

---

## Lista de Verificação (antes de salvar)

- [ ] Todos os RFs do research têm artefato correspondente
- [ ] Nenhum tipo usa `any` ou `object` genérico
- [ ] Nomes são consistentes entre types, componentes, hooks e serviços
- [ ] Todos os componentes têm props definidas na seção 5
- [ ] Contratos documentam os erros e como o frontend deve tratá-los
- [ ] Diagrama cobre todos os artefatos criados
- [ ] Arquivo salvo em `specs/features/[nome-da-feature]/plan.md`
- [ ] Resumo apresentado ao usuário para aprovação
