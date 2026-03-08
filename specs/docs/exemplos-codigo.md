## 3. Interfaces e Types

```typescript
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

// Um bloco por domínio/entidade.

```

## 4. Contratos de API Consumidos

O que o frontend vai **consumir** do backend. Documente cada contrato.

### [NomeDoContrato]

```typescript
// Método: GET | POST | PUT | PATCH | DELETE
// Endpoint: /api/[recurso]

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

## 5. Componentes: Props e Responsabilidades

Para cada componente criado, defina props e responsabilidade.

### NomeComponente

```typescript
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