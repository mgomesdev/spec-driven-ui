# Plan: Button

> Gerado a partir de: `specs/components/atoms/button/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente Button atômico reutilizável. Será criado como componente React com props para variant, size, disabled e loading. Segue as convenções do projeto: arrow function, Tailwind CSS, TypeScript com inferência de tipos.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── atoms/
│       └── button/
│           └── button.tsx           # criado - componente com tipos no mesmo arquivo
└── app/
    └── test-button/
        └── page.tsx                # modificado - página de teste
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces e Types

```typescript
// button.tsx - tipos no mesmo arquivo

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
```

---

## 4. Componente: Props e Responsabilidades

### button.tsx

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|------------|
| children | React.ReactNode | - | Conteúdo do botão |
| variant | ButtonVariant | 'primary' | Estilo visual |
| size | ButtonSize | 'md' | Tamanho |
| disabled | boolean | false | Estado desabilitado |
| loading | boolean | false | Estado de carregamento |
| className | string | '' | Classes adicionais |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Tipo HTML |
| onClick | () => void | - | Callback de clique |

**Responsabilidades:**
- Renderizar botão com estilos base + variant + size
- Aplicar estados hover, active, disabled, loading
- Exibir spinner quando loading=true

---

## 5. Estilos por Variante

| Variante | background | text | border | hover |
|----------|------------|------|--------|-------|
| primary | bg-accent | text-white | none | hover:opacity-90 |
| secondary | bg-primary | text-white | none | hover:bg-gray-700 |
| outline | bg-transparent | text-accent | border-accent | hover:bg-accent/10 |
| ghost | bg-transparent | text-gray-300 | none | hover:bg-white/5 |
| danger | bg-red-600 | text-white | none | hover:bg-red-700 |

## 6. Estilos por Tamanho

| Tamanho | height | padding-x | font-size |
|---------|--------|-----------|-----------|
| sm | 32px | 12px | 14px |
| md | 40px | 16px | 14px |
| lg | 48px | 20px | 16px |

---

## 7. Questões em Abertas

- [ ] Ícone opcional será adicionado em feature futura
- [ ] Tooltip ainda não necessário
