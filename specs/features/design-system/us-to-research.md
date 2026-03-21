# us-to-research: Design System — Pencil ↔ Código Bidirectional Sync

> **Objetivo:** Criar um design system reutilizável que mantém sincronização bidirecional entre o Pencil (`.pen`) e o código fonte (`frontend/src`).

---

## 1. Problema

**Situação atual:**
- `pencil-demo.pen` contém o layout do Dashboard mas SEM componentes reutilizáveis
- `specs/docs/design.md` contém design tokens (cores, tipografia, spacing)
- `frontend/src/components/` está vazio (pendente implementação)
- Não existe processo de sincronização entre design e código

**Dores identificadas:**
- Designer faz mudança no Pencil → desenvolvedor precisa recriar manualmente no código
- Desenvolvedor implementa novo componente → designer não sabe que existe
- Inconsistência visual entre o que foi projetado e o que foi implementado
- Falta de "single source of truth" para o design system

---

## 2. Arquitetura

### 2.1 Fonte da Verdade

**BDD Spec (.feature) é a fonte da verdade.**

Cada `.feature` contém:
- `pencil_id`: referência ao nó no Pencil
- Valores esperados: cores, tamanhos, etc.
- Testes que validam a implementação

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   sidebar.feature                                           │
│   ┌─────────────────────────────────────────────────────┐ │
│   │ **pencil_id:** "ncY1p"                             │ │
│   │                                                     │ │
│   │ Cenário: Sidebar com estilo correto                  │ │
│   │   Dado que...                                       │ │
│   │   Entao deve ter background #141417                  │ │
│   └─────────────────────────────────────────────────────┘ │
│                    │                                       │
│                    │ diff-design-to-code                   │
│                    ▼                                       │
│   ┌─────────────────────────────────────────────────────┐ │
│   │  pencil-demo.pen                                    │ │
│   │  ID: "ncY1p"                                       │ │
│   │  fill: #141417  ←─────────────┐                    │ │
│   │  cornerRadius: 12             │                    │ │
│   │  width: 260                  │                    │ │
│   └──────────────────────────────┼────────────────────┘ │
│                                   │                     │
│                                   ▼                     │
│                         Comparação: BDD ↔ Pencil        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Fluxos de Sincronização

| Comando | Direção | Descrição |
|---------|---------|-----------|
| `export-code-to-design` | Código → Pencil | Dev propõe (CRIA NOVO, não altera original) |
| `import-design-to-code` | Pencil → Código | Dev importa após Designer aprovar |
| `diff-design-to-code` | Comparar | Mostra diferenças (--component ou --all) |

---

## 3. Requisitos Funcionais

### RF-01: Design Tokens

**Descrição:** Sistema de tokens de design (CSS vars) que serve como referência.

**Valores mandatórios:**

| Nome | Hex | Uso |
|------|-----|-----|
| Void Black | `#0A0A0B` | Background principal |
| Carbon | `#141417` | Background de cards |
| Ember Orange | `#FF5C00` | Accent, CTAs |
| Obsidian | `#1A1A1D` | Elementos elevados |
| Pure White | `#FFFFFF` | Texto primário |
| Zinc Gray | `#A1A1AA` | Texto secundário |
| Success Green | `#22C55E` | Variações positivas |
| Error Red | `#EF4444` | Variações negativas |

### RF-02: Componentes Atômicos

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Button | `btn001` | variants: primary, secondary, ghost; sizes: sm, md, lg |
| Badge | `badge001` | variants: default, success, warning, error |
| Input | `input001` | states: default, focus, error, disabled |
| Avatar | `avatar001` | sizes: sm, md, lg; fallback: initials |
| Icon | `icon001` | lucide-react wrapper |

### RF-03: Componentes Moleculares

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Card | `card001` | Container com border-radius, padding |
| SearchBar | `search001` | Input + ícone de busca |
| Breadcrumbs | `bread001` | Navegação hierárquica |
| Pagination | `page001` | Controles de paginação |
| Banner | `banner001` | Notificações/Alertas |
| QuickActions | `quick001` | Grid de ações rápidas |

### RF-04: Componentes de Organismos

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Sidebar | `ncY1p` | Navegação lateral fixa |
| SummaryCards | `L1zBB` | Grid de 4 cards de métricas |
| ChartSection | `chart001` | Área reservada para gráficos |
| TableSection | `table001` | Tabela com dados |
| GallerySection | `gallery001` | Grid de imagens |
| StackedList | `stack001` | Lista com paginação |

### RF-05: Agentes de Sync

| Agente | Descrição | Comandos |
|--------|-----------|----------|
| `export-code-to-design` | Cria NOVA proposta no Pencil | `--component=[nome]` |
| `import-design-to-code` | Importa após aprovação | `--component=[nome]` |
| `diff-design-to-code` | Compara Spec ↔ Pencil | `--component=[nome]` / `--all` |

---

## 4. Requisitos Não-Funcionais

### RNF-01: Tipografia

| Estilo | Font | Size | Weight |
|--------|------|------|--------|
| Display | Inter | 48px | 700 |
| Heading | Inter | 20px | 600 |
| Body | Inter | 16px | 400 |
| Caption | Inter | 12px | 400 |
| Button | Inter | 14px | 600 |

### RNF-02: Border Radius

| Token | Valor | Tailwind |
|-------|-------|----------|
| radius-sm | 4px | rounded-sm |
| radius-md | 8px | rounded |
| radius-lg | 10px | rounded-lg |
| radius-xl | 12px | rounded-xl |
| radius-full | 9999px | rounded-full |

### RNF-03: Spacing

| Token | Valor | Tailwind |
|-------|-------|----------|
| space-xs | 12px | gap-3 |
| space-sm | 14px | gap-3.5 |
| space-md | 16px | gap-4 |
| space-lg | 20px | gap-5 |
| space-xl | 32px | gap-8 |
| space-2xl | 40px | gap-10 |

### RNF-04: Motion

| Tipo | Valor | Uso |
|------|-------|-----|
| Duration-fast | 150ms | Hover states |
| Duration-normal | 200ms | Transições |
| Easing | ease-out | Interface |

---

## 5. Estrutura de Artefatos

### 5.1 Specs

```
specs/features/design-system/
├── research.md
├── plan.md
└── features/
    ├── design-tokens.feature    (testa CSS vars)
    ├── atoms/
    │   ├── button.feature
    │   ├── badge.feature
    │   ├── input.feature
    │   ├── avatar.feature
    │   └── icon.feature
    ├── molecules/
    │   ├── card.feature
    │   ├── search-bar.feature
    │   ├── breadcrumbs.feature
    │   ├── pagination.feature
    │   ├── banner.feature
    │   └── quick-actions.feature
    └── organisms/
        ├── sidebar.feature
        ├── summary-cards.feature
        ├── chart-section.feature
        ├── table-section.feature
        ├── gallery-section.feature
        └── stacked-list.feature
```

### 5.2 Código

```
frontend/src/
├── app/
│   └── globals.css              (design tokens)
└── components/
    ├── atoms/
    │   ├── button.tsx
    │   ├── badge.tsx
    │   ├── input.tsx
    │   ├── avatar.tsx
    │   └── icon.tsx
    ├── molecules/
    │   ├── card.tsx
    │   ├── search-bar.tsx
    │   ├── breadcrumbs.tsx
    │   ├── pagination.tsx
    │   ├── banner.tsx
    │   └── quick-actions.tsx
    └── organisms/
        ├── sidebar.tsx
        ├── summary-cards.tsx
        ├── chart-section.tsx
        ├── table-section.tsx
        ├── gallery-section.tsx
        └── stacked-list.tsx
```

---

## 6. Fluxo de Sync

```
┌─────────────────────────────────────────────────────────────────┐
│  1. export-code-to-design --component=button                    │
│     → NOVO componente criado no Pencil: "Button [PROPOSTA]"     │
│     → NÃO altera componente original                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. Designer revisa no Pencil                                  │
│     → Aprova / Modifica e Approva / Rejeita                   │
│     → Marca status como "approved"                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. import-design-to-code --component=button                   │
│     → Código atualizado com base no Pencil                     │
│     → Spec atualizada com status "imported"                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. Métricas de Sucesso

| Métrica | Target |
|---------|--------|
| Componentes com pencil_id | 17 |
| Design tokens testados | 100% |
| Alinhamento visual (design ↔ código) | 100% |

---

## 8. Fora do Escopo

- Integração com APIs backend
- Autenticação
- Dark/light mode toggle
- Animações complexas

---

## 9. Referências

- **Atomic Design:** Brad Frost (https://atomicdesign.bradfrost.com/)
- **Stitch DESIGN.md:** https://stitch.withgoogle.com/docs/design-md/

---

**Aprovado para Research:** _________________  
**Data:** _________________
