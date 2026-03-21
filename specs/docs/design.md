# Design System: Dashboard Analytics
**Project ID:** dashboard-analytics
**Source:** `pencil-demo.pen`
**Last Updated:** 2026-03-21

---

## 1. Visual Theme & Atmosphere

O dashboard adota um tema **dark mode** sofisticado com atmosfera **data-dense** — inspirado em ferramentas como Linear e Vercel. A estética é minimalista com alta densidade informacional, usando contraste dramático entre backgrounds escuros e acentos vibrantes em laranja.

**Palavras-chave de atmosfera:** Professional, Dense, Modern, High-contrast, Data-focused

---

## 2. Color Palette & Roles

| Nome Descritivo | Hex | RGB | Função |
|-----------------|-----|-----|--------|
| **Void Black** | `#0A0A0B` | rgb(10, 10, 11) | Background principal da página — cria profundidade infinita |
| **Carbon** | `#141417` | rgb(20, 20, 23) | Background de cards e containers — superfície elevada |
| **Ember Orange** | `#FF5C00` | rgb(255, 92, 0) | Accent primário — interações, bordas destacadas, CTAs, energia |
| **Obsidian** | `#1A1A1D` | rgb(26, 26, 29) | Background de banners e elementos elevados — distingue camadas |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Texto primário e elementos que precisam de máximo contraste |
| **Zinc Gray** | `#A1A1AA` | rgb(161, 161, 170) | Texto secundário e labels — informação complementar |

### Cores Semânticas Adicionais

| Nome | Hex | Uso |
|------|-----|-----|
| **Success Green** | `#22C55E` | Variações positivas, status de sucesso |
| **Error Red** | `#EF4444` | Variações negativas, erros, status crítico |

---

## 3. Typography Rules

### Font Family
**Inter** — fonte primária do sistema. Clean, moderna, excelente legibilidade em tamanhos pequenos.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Hierarquia Tipográfica

| Estilo | Font | Size | Weight | Letter-Spacing | Uso |
|--------|------|------|--------|----------------|-----|
| **Display** | Inter | 48px / 3rem | 700 (Bold) | tight (-0.02em) | KPIs principais, números de destaque |
| **Heading** | Inter | 20px / 1.25rem | 600 (Semibold) | normal | Títulos de seções, cards |
| **Body** | Inter | 16px / 1rem | 400 (Regular) | normal | Texto padrão, descrições |
| **Caption** | Inter | 12px / 0.75rem | 400 (Regular) | normal | Labels secundários, metadata |
| **Button** | Inter | 14px / 0.875rem | 600 (Semibold) | normal | Texto de botões, ações |

### Guidelines de Uso
- Display usa `letter-spacing: -0.02em` para título mais apertado e impactante
- Body e Caption usam `letter-spacing: normal` para máxima legibilidade
- Nunca usar peso inferior a 400 para body text

---

## 4. Component Stylings

### 4.1 Sidebar (Organismo)
- **Width:** 260px fixo — espaço generoso para navegação
- **Background:** Carbon `#141417`
- **Borda accent:** Ember Orange `#FF5C00` (stroke 2px, lado esquerdo) — cria destaque vertical
- **Padding:** 24px vertical, 20px horizontal
- **Layout interno:** logo no topo, navItems no centro, perfil no bottom
- **Shadow:** Nenhuma — contraste de cores suficiente

### 4.2 Cards — Summary Cards (Molécula/Organismo)
- **Background:** Carbon `#141417`
- **Corner radius:** 12px (rounded-xl) — suavemente arredondado, não muito "pill"
- **Padding:** 24px interno — respiro generoso
- **Gap entre cards:** 16px (gap-4)
- **Hover:** Borda accent `#FF5C00` aparece — feedback imediato de interatividade

### 4.3 Chart Section (Organismo)
- **Background:** Carbon `#141417`
- **Corner radius:** 12px (rounded-xl)
- **Padding:** 24px
- **Border:** 1px solid — delimitação sutil sem peso visual

### 4.4 Banner/Alert (Molécula)
- **Background:** Obsidian `#1A1A1D`
- **Corner radius:** 10px (rounded-lg)
- **Padding:** 14px vertical, 16px horizontal
- **Border:** 1px solid — distingue do background

### 4.5 Navigation Items (Molécula)
- **Hover:** Texto muda para Ember Orange `#FF5C00` — cor accent indica interatividade
- **Transition:** 200ms ease — rápido e responsivo
- **Active state:** Texto accent com indicador visual

### 4.6 Buttons (Átomo)
| Variante | Background | Text | Border | Uso |
|----------|------------|------|--------|-----|
| **Primary** | Ember Orange `#FF5C00` | White | none | CTAs principais |
| **Secondary** | Transparent | Zinc Gray | 1px Zinc Gray | Ações secundárias |
| **Ghost** | Transparent | Zinc Gray | none | Navegação, links |

- **Corner radius:** 8px (rounded)
- **Padding:** 12px vertical, 16px horizontal
- **Hover (Primary):** Brightness aumenta 10%
- **Hover (Secondary/Ghost):** Background sutil `#1A1A1D`

### 4.7 Input Fields (Átomo)
- **Background:** Carbon `#141417`
- **Corner radius:** 8px (rounded)
- **Border:** 1px solid transparent → focus: Ember Orange `#FF5C00`
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** Zinc Gray `#A1A1AA`

### 4.8 Badges/Labels (Átomo)
- **Background:** Semi-transparent accent (10-20% opacity)
- **Text:** Ember Orange `#FF5C00`
- **Corner radius:** 4px (rounded-sm)
- **Padding:** 4px 8px

### 4.9 Tables (Organismo)
- **Header Background:** Void Black `#0A0A0B`
- **Row Background:** Carbon `#141417`
- **Row Hover:** Sutil highlight `#1A1A1D`
- **Border:** 1px solid `#1A1A1D` entre linhas
- **Corner radius:** 8px no container

### 4.10 Avatars (Átomo)
- **Shape:** Circular (rounded-full)
- **Sizes:** 24px (sm), 32px (md), 40px (lg)
- **Fallback:** Iniciais em background Carbon com texto White

---

## 5. Layout Principles

### Grid System
| Regra | Valor | Tailwind |
|-------|-------|----------|
| Sidebar width | 260px | `w-[260px]` ou `w-64` |
| Content area | calc(100vw - 260px) | flex-1 |
| Content padding X | 40px | `px-10` |
| Content padding Y | 32px | `py-8` |
| Section gap | 28px | `gap-7` |
| Component gap | 16px | `gap-4` |
| Sidebar padding | 24px py, 20px px | `py-6 px-5` |

### Breakpoints
| Breakpoint | Largura | Comportamento |
|------------|---------|---------------|
| Mobile | < 768px | Sidebar colapsa, menu hamburguer |
| Tablet | 768px - 1024px | Sidebar colapsável |
| Desktop | > 1024px | Sidebar fixa expandida |

### Estrutura de Layout do Dashboard
```
┌─────────────┬────────────────────────────────┐
│             │  Breadcrumbs                    │
│   Sidebar   │  Page Header                   │
│   (260px)   │  Search Row                    │
│   fixed     │  Summary Cards (4 cards)       │
│             │  Quick Actions                 │
│             │  Chart Section                 │
│             │  Stacked List                 │
│             │  Banner                        │
│             │  Table Section                │
│             │  Gallery Section              │
└─────────────┴────────────────────────────────┘
```

### Whitespace Strategy
- **Section spacing:** 28px (gap-7) entre seções principais
- **Component spacing:** 16px (gap-4) entre componentes relacionados
- **Inner padding:** 24px em containers, 12px em elementos menores
- **Principle:** "Generous breathing room" — componentes nunca devem parecer espremidos

---

## 6. Spacing Scale

| Token | Valor | Tailwind | Uso |
|-------|-------|----------|-----|
| `space-xs` | 12px | `gap-3` | Gap mínimo entre elementos inline |
| `space-sm` | 14px | `gap-3.5` | Padding interno de elementos compactos |
| `space-md` | 16px | `gap-4` | Gap padrão entre componentes |
| `space-lg` | 20px | `gap-5` | Padding interno de cards |
| `space-xl` | 32px | `gap-8` | Padding de seções |
| `space-2xl` | 40px | `gap-10` | Margens de página |

---

## 7. Border Radius Scale

| Token | Valor | Tailwind | Uso |
|-------|-------|----------|-----|
| `radius-sm` | 4px | `rounded-sm` | Badges, labels, tags |
| `radius-md` | 8px | `rounded` | Buttons, inputs, small cards |
| `radius-lg` | 10px | `rounded-lg` | Banners, medium containers |
| `radius-xl` | 12px | `rounded-xl` | Cards, sections, main containers |
| `radius-full` | 9999px | `rounded-full` | Avatars, pills, circular buttons |

---

## 8. Shadows

**Decisão de design:** O design atual NÃO utiliza sombras — o contraste de cores é suficiente para criar hierarquia visual.

### Motivo
- Dark theme já possui profundidade através de valores de cor
- Shadows em dark theme podem parecer "sujas" ou pesadas
- Carbon `#141417` sobre Void Black `#0A0A0B` já cria distinção suficiente

### Se sombra for necessária no futuro
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
```

---

## 9. Motion

| Tipo | Valor | Uso |
|------|-------|-----|
| **Duration-fast** | 150ms | Hover states, micro-interações |
| **Duration-normal** | 200ms | Transições padrão, modais |
| **Duration-slow** | 300ms | Animações de entrada/saída |
| **Easing** | ease-out | Interface — rápido no início, desacelera suavemente |

### Guidelines de Motion
- Hover states: 150ms ease-out
- Focus states: 200ms ease-out com outline accent
- Page transitions: 300ms ease-out
- Nunca usar ease-in para hover (parece "travado")

---

## 10. Accessibility

| Regra | Implementação |
|-------|---------------|
| **Contrast ratio** | Mínimo 4.5:1 para texto normal, 3:1 para texto grande |
| **Focus visible** | Outline 2px Ember Orange em elementos focus |
| **Touch targets** | Mínimo 44x44px em mobile |
| **Reduced motion** | Respeitar `prefers-reduced-motion` |

---

## 11. Atomic Design Mapping

| Atomic Level | Componentes | Status |
|--------------|-------------|--------|
| **Atoms** | Button, Icon, Badge, Input, Avatar | ⏳ Planejado |
| **Molecules** | Card, SearchBar, Breadcrumbs, Pagination, Banner, QuickActions | ⏳ Planejado |
| **Organisms** | Sidebar, SummaryCards, ChartSection, TableSection, GallerySection, StackedList | ⏳ Planejado |

---

## 12. Sync Status

| Artefato | Última Sync | Status |
|----------|-------------|--------|
| `pencil-demo.pen` | 2026-03-21 | ✅ Sincronizado |
| `DESIGN.md` | 2026-03-21 | ✅ Atualizado |
| `globals.css` | ⏳ Pendente | ⏳ Aguardando export |
| `frontend/src/components/` | ⏳ Pendente | ⏳ Aguardando implementação |

---

## 13. GitHub/Changelog

### 2026-03-21
- **Inicial:** DESIGN.md criado seguindo Stitch methodology
- **Source:** Extraído de `pencil-demo.pen` e `specs/docs/design.md`
