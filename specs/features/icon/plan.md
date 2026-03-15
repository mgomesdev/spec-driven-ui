# Plan: Icon

> Gerado a partir de: `specs/features/icon/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente atômico de ícone que funciona como wrapper para a biblioteca `lucide-react`. Será um componente React reutilizável que renderiza ícones baseados no nome passado via props. Integra com o design-system através de tokens de cores. Sem dependências de backend ou API.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── Icon/
│       ├── Icon.tsx                         # criado - componente principal
│       └── Icon.types.ts                    # criado - tipos e interfaces
└── types/
    └── index.ts                             # modificado - exporta IconProps
```

---

## 3. Interfaces e Tipos

### IconProps

```typescript
interface IconProps {
  name: string;
  size?: number;
  color?: string;
}
```

---

## 4. Artefatos

### 4.1 Icon.types.ts

**Propósito:** Definir tipos TypeScript do componente Icon

**Localização:** `src/components/Icon/Icon.types.ts`

**Tipos definidos:**
- `IconProps` - Interface das propriedades do componente

### 4.2 Icon.tsx

**Propósito:** Componente React que renderiza ícones do Lucide

**Localização:** `src/components/Icon/Icon.tsx`

**Responsabilidades:**
- RF-01: Renderizar ícone correspondente ao nome passado
- RF-02: Suportar prop size para dimensionamento
- RF-03: Suportar prop color para coloração customizada
- RNF-02: Preservar acessibilidade do Lucide

---

## 5. Contratos

### API de Componente

| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|--------------|--------|-----------|
| name | string | Sim | - | Nome do ícone Lucide (ex: "sun", "moon") |
| size | number | Não | 24 | Tamanho do ícone em pixels |
| color | string | Não | currentColor | Cor do ícone |

### Tratamento de Erros

- **Ícone não encontrado:** Renderizar ícone fallback ou exibir warning em desenvolvimento
- **Tamanho inválido:** Usar valor padrão de 24px

---

## 6. Diagrama de Dependências

```
[Icon.types.ts]
      │
      ▼
[Icon.tsx]
      │
      ▼
[Componentes que usam Icon]
```

---

## 7. Questões em Aberto

- [ ] Precisamos de fallback para ícone não encontrado?
- [ ] Devemos exibir warning em desenvolvimento quando ícone não existir?
