# Plan: Heading

> Gerado a partir de: `specs/features/heading/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente átomo Heading para títulos de seções. Componente React standalone que renderiza semanticamente como h1-h6 com suporte a diferentes sizes (xl, lg) e weights (regular, bold). Utiliza tokens de tipografia do design-system Tailwind. Sem dependências de API ou estado complexo.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── atoms/
│       └── Heading/
│           ├── Heading.tsx        # criado - componente Heading
│           └── Heading.stories.tsx  # criado - stories para Storybook
├── tokens/
│   └── typography.ts             # modificado - adicionar tokens se necessário
```

---

## 3. Interface de Props

```typescript
// src/components/atoms/Heading/Heading.tsx
export interface HeadingProps {
  children: React.ReactNode;
  size?: 'xl' | 'lg';
  weight?: 'regular' | 'bold';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
```

---

## 4. Tokens CSS Utilizados

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-size-heading-xl` | 48px (3rem) | size="xl" |
| `--font-size-heading-lg` | 20px (1.25rem) | size="lg" |
| `--font-weight-regular` | 400 | weight="regular" |
| `--font-weight-bold` | 700 | weight="bold" |

---

## 5. Mapeamento de Requisitos Funcionais

| RF | Artefato | Descrição |
|----|----------|-----------|
| RF-01 | Heading.tsx | Renderiza children como conteúdo |
| RF-02 | Heading.tsx | Aplica classe de tamanho conforme size |
| RF-03 | Heading.tsx | Aplica classe de peso conforme weight |
| RF-04 | Heading.tsx | Usa prop `as` para tag semântica |
| RF-05 | Heading.tsx | CSS com word-wrap e overflow妥当 |

---

## 6. Contratos de API

Nenhum - componente standalone sem dependência de dados externos.

---

## 7. Diagrama de Dependências

```
[tokens/typography.ts]
          │
          ▼
   [Heading.tsx] ──► [Heading.stories.tsx]
          │
          ▼
   [pages que usam Heading]
```

---

## 8. Questões em Aberto

- [ ] Precisamos de size "md" ou "sm"? (do research)
- [ ] Os tokens `--font-size-heading-*` já existem no design-system?
