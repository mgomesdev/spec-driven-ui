# Plan: Paragraph

> Gerado a partir de: `specs/features/paragraph/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente atômico de parágrafo React para exibição de texto secundário. Suporta tamanhos small (12px) e body, além de cores primary, secondary e muted. Utiliza tokens CSS do design-system para tipografia. Implementado como componente funcional standalone com props tipadas.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── Paragraph/
│       ├── Paragraph.tsx       # criado - componente principal
│       ├── Paragraph.module.css # criado - estilos CSS modules
│       └── index.ts             # criado - barrel export
└── tokens/
    └── typography.ts            # existente - tokens de fonte (referência)
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces e Tipos

### ParagraphProps

```typescript
interface ParagraphProps {
  children: React.ReactNode;
  size?: 'small' | 'body';
  color?: 'primary' | 'secondary' | 'muted';
  className?: string;
}
```

| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|--------------|--------|------------|
| children | React.ReactNode | Sim | - | Conteúdo textual do parágrafo |
| size | 'small' \\| 'body' | Não | 'body' | Tamanho da fonte |
| color | 'primary' \\| 'secondary' \\| 'muted' | Não | 'primary' | Cor do texto |
| className | string | Não | '' | Classes CSS adicionais |

---

## 4. Contratos de API

Este é um componente de UI sem integração com backend. Não há contratos de API.

---

## 5. Componentes

### Paragraph

| Prop | Origem | Tipo | Descrição |
|------|--------|------|------------|
| children | entrada | React.ReactNode | Conteúdo do parágrafo |
| size | entrada | 'small' \\| 'body' | Tamanho da fonte |
| color | entrada | 'primary' \\| 'secondary' \\| 'muted' | Cor do texto |
| className | entrada | string | Classes adicionais |

**Tokens CSS utilizados:**
- `--font-size-small` → 12px
- `--font-size-body` → 16px (default)
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-muted`

---

## 6. Mapeamento de Requisitos Funcionais

| RF | Artefato | Descrição |
|----|----------|-----------|
| RF-01 | Paragraph.tsx | Renderiza children como conteúdo |
| RF-02 | Paragraph.tsx + CSS | Aplica classe conforme prop size |
| RF-03 | Paragraph.tsx + CSS | Aplica classe conforme prop color |
| RF-04 | Paragraph.module.css | word-wrap: break-word no CSS |

---

## 7. Diagrama de Dependências

```
[tokens/typography.ts] (existente)
         │
         ▼
[Paragraph.module.css]
         │
         ▼
  [Paragraph.tsx] ──► [index.ts]
```

---

## 8. Questões em Aberto

- [ ] Precisamos de prop adicional para line-height?
- [ ] Precisamos de alinhamento (center, right)?
- [ ] O componente deve suportar truncate com ellipsis?
