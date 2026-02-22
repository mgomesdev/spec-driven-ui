# Design System — matheusgomesdev
> Pixel-perfect. Zero alucinação. Single Source of Truth.

---

## 📦 Estrutura do Projeto

**Fonte Única de Verdade:** `memory-bank/memory-bank.md`

Este arquivo consolidado contém:

```
memory-bank.md (consolidado)
├── Components (Atomic Design)
│   ├── Atoms (5): avatar, button, heading, icon, paragraph
│   ├── Molecules (1): card
│   ├── Organisms (3): header, hero, footer
│   └── Pages (1): home
└── Constitution (Rules & Tokens)
    ├── atomic-design-rules.md
    ├── design-tokens.md
    ├── global-rules.md
    └── como-usar.md (guia de uso)
```

---

## 🎨 Identidade Visual

| Propriedade | Valor |
|---|---|
| **Fonte global** | `Inter` |
| **Cor primária 500** | `#9e77ed` |
| **Cor primária 600** | `#7f56d9` |
| **Cor de fundo** | `#101828` (gray-900) |
| **Gradiente primário** | `linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)` |
| **Framework CSS** | Tailwind CSS v4 |
| **Lib de ícones** | `@radix-ui/react-icons` |
| **Imagens placeholder** | `https://uifaces.co/` |

---

## 🔗 Cadeia de Herança

```
GLOBAL_RULES_ID
  └── DESIGN_TOKENS_ID
        └── ATOMIC_DESIGN_RULES_ID
              ├── AT_AVATAR_ID
              ├── AT_BUTTON_ID
              ├── AT_HEADING_ID
              ├── AT_ICON_ID
              ├── AT_PARAGRAPH_ID
              ├── MOL_CARD_ID         → deps: AT_HEADING_ID, AT_PARAGRAPH_ID, AT_BUTTON_ID
              ├── ORG_HEADER_ID       → deps: AT_BUTTON_ID, AT_ICON_ID
              ├── ORG_HERO_ID         → deps: AT_AVATAR_ID, AT_HEADING_ID, AT_PARAGRAPH_ID, AT_BUTTON_ID
              ├── ORG_FOOTER_ID       → deps: AT_PARAGRAPH_ID, AT_ICON_ID
              └── HOME_ID             → deps: ORG_HEADER_ID, ORG_HERO_ID, ORG_FOOTER_ID
```