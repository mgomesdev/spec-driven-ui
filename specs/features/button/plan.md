# Plan: Button

> Gerado a partir de: `specs/features/button/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente Button átomo do Design System com duas variantes: Link (navegação header) e CTA (call-to-action hero). Implementado como componente React standalone utilizando tokens CSS do design-system. Suporta estados default, hover e disabled com styling específico por variante.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── button/
│       ├── button.tsx      # criado - componente principal
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces TypeScript

### 3.1 ButtonProps

```typescript
export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'link' | 'cta';
}
```

---

## 4. Artefatos por Requisito Funcional

| RF | Descrição | Artefato |
|----|-----------|----------|
| RF-01 | Renderizar botão com children | `button.tsx` |
| RF-02 | Aplicar estilos conforme variant | `button.tsx` |
| RF-03 | Suportar estado disabled | `button.tsx` |
| RF-04 | Executar onClick | `button.tsx` |
| RF-05 | Renderizar children | `button.tsx` |

---

## 5. Contratos e Definições

### 5.1 Tokens CSS Utilizados

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-accent` | #7f59d9 | Background CTA |
| `--height-md` | 48px | Altura do botão |
| `--radius-md` | 8px | Border radius |

### 5.2 Contratos de API

N/A - Componente sem dependência de API.

---

## 6. Tratamento de Erros

N/A - Componente de UI puro sem chamadas assíncronas.

---

## 7. Diagrama de Dependências

```
[button.tsx (componente)]
```

Regra: `──►` significa "depende de / deve existir antes".

---

## 8. Questões em Abertas
