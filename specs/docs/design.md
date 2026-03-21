# Design System: Dashboard Analytics
**Project ID:** dashboard-analytics
**Source:** pencil-demo.pen

## 1. Visual Theme & Atmosphere

O dashboard adota um tema **dark mode** sofisticado com atmosfera **data-dense** — inspirado em ferramentas como Linear e Vercel. A estética é minimalista com alta densidade informacional, usando contraste dramático entre backgrounds escuros e acentos vibrantes em laranja.

---

## 2. Color Palette & Roles

| Nome Descritivo | Hex | RGB | Função |
|-----------------|-----|-----|--------|
| Void Black | `#0A0A0B` | rgb(10, 10, 11) | Background principal da página |
| Carbon | `#141417` | rgb(20, 20, 23) | Background de cards, sidebar, seções |
| Ember Orange | `#FF5C00` | rgb(255, 92, 0) | Accent — interações, bordas destacadas, CTAs |
| Obsidian | `#1A1A1D` | rgb(26, 26, 29) | Background de banners, elementos elevados |
| Pure White | `#FFFFFF` | rgb(255, 255, 255) | Texto primário |
| Zinc Gray | `#A1A1AA` | rgb(161, 161, 170) | Texto secundário |

---

## 3. Typography Rules

| Estilo | Font | Size | Weight | Letter-Spacing |
|--------|------|------|--------|----------------|
| Display | Inter | 48px / 3rem | 700 (Bold) | tight (-0.02em) |
| Heading | Inter | 20px / 1.25rem | 600 (Semibold) | normal |
| Body | Inter | 16px / 1rem | 400 (Regular) | normal |
| Caption | Inter | 12px / 0.75rem | 400 (Regular) | normal |
| Button | Inter | 14px / 0.875rem | 600 (Semibold) | normal |

---

## 4. Component Stylings

### Sidebar
- **Width:** 260px fixo
- **Background:** Carbon `#141417`
- **Borda accent:** Ember Orange `#FF5C00` (stroke 2px, lado esquerdo)
- **Padding:** 24px vertical, 20px horizontal
- **Layout interno:** logo no topo, navItems no centro, perfil no bottom

### Cards (Summary Cards)
- **Background:** Carbon `#141417`
- **Corner radius:** 12px
- **Padding:** 24px interno
- **Gap entre cards:** 16px

### Chart Section
- **Background:** Carbon `#141417`
- **Corner radius:** 12px
- **Padding:** 24px
- **Border:** 1px solid (sem cor especificada)

### Banner
- **Background:** Obsidian `#1A1A1D`
- **Corner radius:** 10px
- **Padding:** 14px vertical, 16px horizontal
- **Border:** 1px solid

### Navigation Items
- **Hover:** Ember Orange `#FF5C00` (cor do texto)
- **Transition:** 200ms ease

### Premium Button
- **Background:** Ember Orange `#FF5C00`
- **Corner radius:** 8px (rounded-lg)
- **Padding:** 12px vertical, 16px horizontal

---

## 5. Layout Principles

| Regra | Valor | Tailwind |
|-------|-------|----------|
| Sidebar width | 260px | `w-[260px]` ou `w-64` |
| Sidebar position | fixed left-0 top-0 | `fixed left-0 top-0 h-screen` |
| Content padding X | 40px | `px-10` |
| Content padding Y | 32px | `py-8` |
| Section gap | 28px | `gap-7` |
| Component gap | 16px | `gap-4` |
| Sidebar padding | 24px py, 20px px | `py-6 px-5` |
| Breakpoint mobile | 768px | `md:` prefix |

### Estrutura de Layout
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

---

## 6. Spacing Scale

| Token | Valor | Tailwind |
|-------|-------|----------|
| `space-xs` | 12px | `gap-3` |
| `space-sm` | 14px | `gap-3.5` |
| `space-md` | 16px | `gap-4` |
| `space-lg` | 20px | `gap-5` |
| `space-xl` | 32px | `gap-8` |
| `space-2xl` | 40px | `gap-10` |

---

## 7. Border Radius Scale

| Token | Valor | Tailwind |
|-------|-------|----------|
| `radius-sm` | 4px | `rounded-sm` |
| `radius-md` | 8px | `rounded` |
| `radius-lg` | 10px | `rounded-lg` |
| `radius-xl` | 12px | `rounded-xl` |
| `radius-full` | 9999px | `rounded-full` |

---

## 8. Shadows

O design atual não utiliza sombras — o contraste de cores é suficiente para hierarquia visual.

---

## 9. Motion

| Tipo | Valor | Uso |
|------|-------|-----|
| Duration-fast | 150ms | Hover states |
| Duration-normal | 200ms | Transições padrão |
| Easing | ease-out | Interface |
