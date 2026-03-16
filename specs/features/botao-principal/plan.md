# Plan: Botão Principal

## Visão Geral Técnica

Componente React de botão com variantes visuais, estados e tipagem TypeScript. Segue convenções do projeto (arrow functions, Tailwind only, sem React.FC).

## Estrutura de Arquivos

```
frontend/src/components/button/
├── button.tsx          # Componente principal
└── types.ts            # Tipos exportados (se necessário)
```

## Interfaces e Types

```typescript
// button.tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
```

## Componente: Button

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| variant | 'primary' \| 'secondary' \| 'ghost' | 'primary' | Variante visual |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Tamanho do botão |
| children | ReactNode | - | Conteúdo do botão |
| className | string | '' | Classes extras |
| disabled | boolean | false | Estado desabilitado |
| onClick | () => void | - | Handler de click |

### Responsabilidades

- Renderizar elemento `<button>` com props nativas
- Aplicar estilos baseados em variant e size
- Gerenciar estados hover/disabled
- Suprimir warnings de tipagem React

## Estilização (Tokens CSS)

- Altura: `--height-sm` (32px), `--height-md` (40px), `--height-lg` (48px)
- Border radius: `--radius-md` (8px)
- Cores: `--color-accent` para primary, transparente para ghost/secondary
- Transição: `transition-opacity` 150ms

## Contrato de API

```tsx
// Uso esperado
<Button variant="primary" size="md" onClick={() => {}}>
  Clique aqui
</Button>

<Button variant="secondary" disabled>
  Desabilitado
</Button>
```

## Dependências

- React 19
- Tailwind CSS v4
- Tokens CSS do projeto
