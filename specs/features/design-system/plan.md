# Plan: Design System — Pencil ↔ Código Bidirectional Sync

> Gerado a partir de: `specs/features/design-system/research.md`

---

## 1. Visão Geral Técnica

Design system completo com:
- **Design tokens** como CSS vars em `globals.css`
- **Componentes atômicos** em `components/atoms/`
- **Componentes moleculares** em `components/molecules/`
- **Componentes de organismos** em `components/organisms/`
- **Fluxo de sync**: export → approve → import → diff

---

## 2. Estrutura de Arquivos

```
frontend/src/
├── app/
│   ├── globals.css              # criado - design tokens
│   └── layout.tsx              # modificado - importa globals
└── components/
    ├── atoms/
    │   ├── button.tsx           # criado
    │   ├── badge.tsx           # criado
    │   ├── input.tsx           # criado
    │   ├── avatar.tsx          # criado
    │   └── icon.tsx            # criado
    ├── molecules/
    │   ├── card.tsx            # criado
    │   ├── search-bar.tsx      # criado
    │   ├── breadcrumbs.tsx      # criado
    │   ├── pagination.tsx       # criado
    │   ├── banner.tsx           # criado
    │   └── quick-actions.tsx    # criado
    └── organisms/
        ├── sidebar.tsx          # criado
        ├── summary-cards.tsx    # criado
        ├── chart-section.tsx    # criado
        ├── table-section.tsx    # criado
        ├── gallery-section.tsx  # criado
        └── stacked-list.tsx     # criado
```

---

## 3. Design Tokens (globals.css)

```css
:root {
  /* Colors */
  --color-bg-primary: #0A0A0B;
  --color-bg-secondary: #141417;
  --color-accent: #FF5C00;
  --color-elevated: #1A1A1D;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A1A1AA;
  --color-success: #22C55E;
  --color-error: #EF4444;

  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-size-display: 48px;
  --font-size-heading: 20px;
  --font-size-body: 16px;
  --font-size-caption: 12px;
  --font-size-button: 14px;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-regular: 400;

  /* Spacing */
  --space-xs: 12px;
  --space-sm: 14px;
  --space-md: 16px;
  --space-lg: 20px;
  --space-xl: 32px;
  --space-2xl: 40px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Motion */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --easing: ease-out;
}
```

---

## 4. Interfaces TypeScript

```typescript
// types/design-system.ts

// Button
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// Badge
interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

// Input
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'search';
  placeholder?: string;
  state?: 'default' | 'focus' | 'error' | 'disabled';
  value?: string;
  onChange?: (value: string) => void;
}

// Avatar
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string; // initials
}

// Card
interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

// Navigation items
interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}
```

---

## 5. Componentes e Props

### 5.1 Atoms

| Componente | Props | Descrição |
|------------|-------|-----------|
| Button | variant, size, disabled, onClick, children | Botão com variants |
| Badge | variant, children | Label colorido |
| Input | type, placeholder, state, value, onChange | Campo de entrada |
| Avatar | src, alt, size, fallback | Imagem de perfil |
| Icon | name, size, color | Wrapper lucide-react |

### 5.2 Molecules

| Componente | Props | Descrição |
|------------|-------|-----------|
| Card | children, hoverable, padding | Container |
| SearchBar | placeholder, value, onSearch | Input + ícone |
| Breadcrumbs | items, onNavigate | Navegação hierárquica |
| Pagination | currentPage, totalPages, onPageChange | Controles |
| Banner | message, type, dismissible, onDismiss | Notificação |
| QuickActions | actions, onActionClick | Grid de ações |

### 5.3 Organisms

| Componente | Props | Descrição |
|------------|-------|-----------|
| Sidebar | navItems, user, isOpen, onToggle, onNavigate | Navegação lateral |
| SummaryCards | metrics, onMetricClick | Cards de métricas |
| ChartSection | title, data | Área de gráficos |
| TableSection | columns, data, onRowClick | Tabela |
| GallerySection | images, onImageClick | Grid de imagens |
| StackedList | items, pagination, onPageChange | Lista paginada |

---

## 6. Diagrama de Dependências

```
[globals.css] (design tokens)
       │
       ▼
[atoms/] (Button, Badge, Input, Avatar, Icon)
       │
       ▼
[molecules/] (Card, SearchBar, Breadcrumbs, Pagination, Banner, QuickActions)
       │
       ▼
[organisms/] (Sidebar, SummaryCards, ChartSection, TableSection, GallerySection, StackedList)
```

**Ordem de implementação:**
1. `globals.css` (design tokens)
2. `atoms/` (base)
3. `molecules/` (depende de atoms)
4. `organisms/` (depende de molecules)

---

## 7. Fluxo de Sync (Ferramentas)

### 7.1 export-code-to-design
- **Entrada:** `--component=[nome]`
- **Saída:** Nova proposta no Pencil "[Nome] [PROPOSTA]"
- **NÃO altera** componente original

### 7.2 import-design-to-code
- **Entrada:** `--component=[nome]`
- **Pré-requisito:** Designer aprovou no Pencil
- **Saída:** Código atualizado

### 7.3 diff-design-to-code
- **Entrada:** `--component=[nome]` ou `--all`
- **Saída:** Relatório de sincronização
- **Exit code:** 0 = synced, 1 = diff

---

## 8. Questões em Aberto

- [x] Definida estrutura de componentes
- [x] Definidos design tokens
- [x] Definido fluxo de sync
- [ ] Confirmar estratégia de ícones (lucide-react)
- [ ] Confirmar necessidade de stories (Radix/Shadcn)

---

## 9. Critérios de Implementação

- Todos componentes usam CSS vars de `globals.css`
- Componentes seguem Atomic Design
- Cada componente tem `.feature` com `pencil_id`
- Testes validam alinhamento com design tokens
- Código compila sem erros (typecheck)
- Lint passa

---

**Status:** ✅ Plan completo  
**Data:** 2026-03-21
