# Design System — matheusgomesdev
> Pixel-perfect. Zero alucinação. Single Source of Truth.

---

## 📦 Estrutura do Repositório

```
memory-bank/
├── agents/
│   └── UI-PIXEL-AGENT.md         # Instruções do agente orquestrador
├── components/
│   ├── atoms/
│   │   ├── avatar.md
│   │   ├── button.md
│   │   ├── heading.md
│   │   ├── icon.md
│   │   └── paragraph.md
│   ├── molecules/
│   │   └── card.md
│   ├── organisms/
│   │   ├── footer.md
│   │   ├── header.md
│   │   └── hero.md
│   └── pages/
│       └── home.md
├── constitution/
│   ├── atomic-design-rules.md
│   ├── design-tokens.md
│   └── global-rules.md
└── README.md
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

---

## ⚙️ Setup do Projeto

### 1. Instalar dependências

```bash
npm install @radix-ui/react-icons
```

### 2. Configurar Tailwind CSS v4

No arquivo `globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary-500: #9e77ed;
  --color-primary-600: #7f56d9;
  --color-gray-50: #f9fafb;
  --color-gray-500: #667085;
  --color-gray-900: #101828;
  --color-white: #ffffff;
  --color-gradient-primary: linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);
}
```

> ⚠️ Sem esse bloco, classes como `bg-gradient-primary`, `text-primary-600` e `bg-gray-900` **não renderizam**.

---

## 🤖 Como usar com agente/LLM

1. Gere o JSON do repomix com todos os `.md`:
   ```bash
   npx repomix --include "memory-bank/**/*.md"
   ```
2. Cole o JSON na conversa com o agente junto com `UI-PIXEL-AGENT.md`.
3. Aguarde o Bootstrap de Contexto (confirmação com lista de IDs indexados).
4. Solicite componentes pelo ID — ex: `gere HOME_ID`.

---

## ✅ Checklist Pixel-Perfect

### Tokens
- [ ] Nenhum valor hex direto no código — apenas classes Tailwind mapeadas para tokens
- [ ] Nenhum `px`/`rem` hardcoded fora dos `className` literais dos componentes
- [ ] Bloco `@theme` presente no CSS global com todos os tokens de cor

### Componentes
- [ ] Cada componente usa apenas `className` declarados no seu arquivo `.md`
- [ ] Nenhum elemento HTML adicionado além dos declarados em `children`
- [ ] Variants aplicadas corretamente — `gradient` no heading, `primary`/`link` no button
- [ ] Nunca dois botões `variant="primary"` lado a lado
- [ ] `file_name` preservado em todos os frontmatters

### Acessibilidade
- [ ] Botões ativáveis via `Enter` e `Space`
- [ ] Contraste label/background ≥ 4.5:1 (WCAG AA)
- [ ] Atributo `alt` presente em todas as `<img>`

### Estrutura da Home
- [ ] Ordem Header → Hero → Footer mantida
- [ ] `{{year}}` substituído por ano real no footer
- [ ] Imagens de avatar substituídas pelas reais em produção
