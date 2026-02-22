This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: memory-bank/components/**/**.md, memory-bank/constitution/**/**.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
memory-bank/
  components/
    atoms/
      avatar.md
      button.md
      heading.md
      icon.md
      paragraph.md
    molecules/
      card.md
    organisms/
      footer.md
      header.md
      hero.md
    pages/
      home.md
  constitution/
    atomic-design-rules.md
    design-tokens.md
    global-rules.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="memory-bank/components/atoms/avatar.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "avatar.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "avatar"
id: "AT_AVATAR_ID"
---

# ATOM — Avatar

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Imagens**: para preencher o conteúdo de `img`, use imagens do `https://uifaces.co/`. Em produção, substituir pela imagem real.

---

## 2. Especificações Técnicas

### Default Specs — container

```json
{
  "className": "bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]"
}
```

> Tokens: `--color-gray-500: #667085` | `--border-width-4: 4px` | `--color-white: #ffffff` | `--border-radius-full: 9999px` | `--size-avatar: 92px`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    {
      "element": "img",
      "className": "object-cover h-full w-full"
    }
  ]
}
```

---

## 4. Exemplo de Uso

```tsx
<div className="bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]">
  <img
    src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg"
    alt="Avatar"
    className="object-cover h-full w-full"
  />
</div>
```
</file>

<file path="memory-bank/components/atoms/button.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "button.md"
variants: ["default", "primary", "link"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "button"
id: "AT_BUTTON_ID"
---

# ATOM — Button

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Restrição de Layout:** Nunca utilize dois botões com variant `primary` lado a lado. Em ações duplas, combine `primary` com `link`.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap"
}
```

### Variant: `primary` — sobrescreve Default Specs

```json
{
  "className": "bg-gradient-primary text-white"
}
```

> Herda do Default: `w-full h-12 rounded-lg border-none whitespace-nowrap`

### Variant: `link` — sobrescreve Default Specs

```json
{
  "className": "bg-transparent"
}
```

> Herda do Default: `w-full h-12 rounded-lg border-none text-gray-500 whitespace-nowrap`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório | Restrição |
|---|---|---|---|
| `label` | `string` | ✅ Sim | Máximo 50 caracteres |
| `variant` | `"default" \| "primary" \| "link"` | ❌ Não | Default: `"default"` |

---

## 4. Accessibility

- **role**: `button`
- **keyboard**: deve ser ativável via as teclas `Enter` e `Space`
- **contrast**: o contraste entre o label/ícone e o background-color deve seguir a norma WCAG AA (mínimo 4.5:1)

---

## 5. Exemplo de Uso

```tsx
// variant: default
<button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
  Label
</button>

// variant: primary
<button className="w-full h-12 rounded-lg border-none bg-gradient-primary text-white whitespace-nowrap">
  Entre em Contato
</button>

// variant: link
<button className="w-full h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
  Download CV
</button>
```
</file>

<file path="memory-bank/components/atoms/heading.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "heading.md"
variants: ["gradient"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "heading"
id: "AT_HEADING_ID"
---

# ATOM — Heading

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- O nível semântico (`h1`, `h2`, etc.) é determinado pelo contexto do componente pai.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "text-white text-xl"
}
```

### Variant: `gradient` — sobrescreve Default Specs

```json
{
  "className": "text-primary-600 text-5xl font-semibold"
}
```

> Token: `--color-primary-600: #7f56d9` | `--text-5xl: 3rem` | `--font-semibold: 600`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `label` | `string` | ✅ Sim |
| `variant` | `"default" \| "gradient"` | ❌ Não (default: `"default"`) |

---

## 4. Exemplo de Uso

```tsx
// variant: default
<h2 className="text-white text-xl">
  apaixonado por criação de interfaces inovadoras
</h2>

// variant: gradient
<h1 className="text-primary-600 text-5xl font-semibold">
  Programador Frontend
</h1>
```
</file>

<file path="memory-bank/components/atoms/icon.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "icon.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "icon"
id: "AT_ICON_ID"
---

# ATOM — Icon

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Ícones**: para os ícones, busque da lib `@radix-ui/react-icons`. Proibido usar outra biblioteca.
- O nome do ícone é passado via prop `icon` pelo componente pai.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "size-5 rounded-full text-white"
}
```

> Tokens: `--size-icon: 1.25rem` | `--border-radius-full: 9999px` | `--color-white: #ffffff`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `icon` | `string` (nome do ícone Radix UI) | ✅ Sim |
| `className` | `string` | ❌ Sobrescrita permitida pelo pai |

---

## 4. Exemplo de Uso

```tsx
import { SunIcon } from "@radix-ui/react-icons";

// default
<SunIcon className="size-5 rounded-full text-white" />

// override pelo header
<SunIcon className="size-5 rounded-full text-white" />

// override pelo footer
<SunIcon className="size-5 rounded-full text-white w-max" />
```
</file>

<file path="memory-bank/components/atoms/paragraph.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "paragraph.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "paragraph"
id: "AT_PARAGRAPH_ID"
---

# ATOM — Paragraph

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- O componente pai pode sobrescrever `className` via prop para ajustar cor e tamanho conforme contexto — nunca adicionando propriedades fora dos tokens definidos em `DESIGN_TOKENS_ID`.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "text-primary-600 text-sm"
}
```

> Token: `--color-primary-600: #7f56d9` | `--text-sm: 0.875rem`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `label` | `string` | ✅ Sim |
| `className` | `string` | ❌ Sobrescrita permitida pelo pai |

---

## 4. Exemplo de Uso

```tsx
// default
<p className="text-primary-600 text-sm">
  Texto padrão
</p>

// override pelo hero
<p className="text-gray-50 text-xl">
  Visite meu perfil no Linkedin...
</p>

// override pelo footer
<p className="text-xs text-white">
  © 2026 matheusgomesdev.
</p>

// override pelo hero (tag de identificação)
<p className="text-xs text-white">
  &lt;MatheusGomesDev /&gt;
</p>
```
</file>

<file path="memory-bank/components/molecules/card.md">
---
dependencies: ["AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "card.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "MOLECULE"
role: "div"
id: "MOL_CARD_ID"
---

# MOLECULE — Card

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Molecule Specs.
- A ordem dos filhos declarada em `children` é **obrigatória** — não reordene.

---

## 2. Especificações Técnicas

### Molecule Specs — container

```json
{
  "className": "w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2"
}
```

> Tokens: `--max-width-card: 352px` | `--color-gray-900: #101828` | `--border-width-2: 2px` | `--border-color-default: #667085` | `--border-radius-md: 0.375rem`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    {
      "atom_id": "AT_HEADING_ID",
      "props": { "label": "Card Pixel-Perfect" }
    },
    {
      "atom_id": "AT_PARAGRAPH_ID",
      "props": {
        "label": "Este Card foi gerado através de prompt com técnicas RAG e estratégias avançadas, Atomic Design, Orientação a Objetos e Arquitetura."
      }
    },
    {
      "atom_id": "AT_BUTTON_ID",
      "props": { "label": "Gostou ?" }
    }
  ]
}
```

---

## 4. Exemplo de Uso

```tsx
<div className="w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2">
  <h2 className="text-white text-xl">Card Pixel-Perfect</h2>
  <p className="text-primary-600 text-sm">
    Este Card foi gerado através de prompt com técnicas RAG e estratégias avançadas, Atomic Design, Orientação a Objetos e Arquitetura.
  </p>
  <button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
    Gostou ?
  </button>
</div>
```
</file>

<file path="memory-bank/components/organisms/footer.md">
---
dependencies: ["AT_BUTTON_ID", "AT_PARAGRAPH_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "footer.md"
variants: ["light", "dark"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "footer"
id: "ORG_FOOTER_ID"
---

# ORGANISM — Footer

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Organism Specs.
- `{{year}}` deve ser substituído pelo ano atual em runtime.

---

## 2. Especificações Técnicas

### Organism Specs — container

```json
{
  "className": "w-full h-[60px] flex justify-between items-center bg-gray-900 p-4"
}
```

> Tokens: `--height-footer: 60px` | `--color-gray-900: #101828` | `--spacing-4: 1rem`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    {
      "atom_id": "AT_PARAGRAPH_ID",
      "label": "© {{year}} matheusgomesdev.",
      "className": "text-xs text-white"
    },
    {
      "atom_id": "AT_ICON_ID",
      "icon": "sun",
      "className": "w-max"
    }
  ]
}
```

---

## 4. Exemplo de Uso

```tsx
import { SunIcon } from "@radix-ui/react-icons";

<footer className="w-full h-[60px] flex justify-between items-center bg-gray-900 p-4">
  <p className="text-xs text-white">
    © {new Date().getFullYear()} matheusgomesdev.
  </p>
  <SunIcon className="size-5 rounded-full text-white w-max" />
</footer>
```
</file>

<file path="memory-bank/components/organisms/header.md">
---
dependencies: ["AT_BUTTON_ID", "AT_ICON_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "header.md"
variants: ["light", "dark"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "header"
id: "ORG_HEADER_ID"
---

# ORGANISM — Header

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Organism Specs.

---

## 2. Especificações Técnicas

### Organism Specs — container

```json
{
  "className": "w-full h-[80px] flex justify-end items-end bg-gray-900 px-5"
}
```

> Tokens: `--height-header: 80px` | `--color-gray-900: #101828` | `--spacing-5: 1.25rem`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    {
      "atom_id": "AT_BUTTON_ID",
      "props": { "label": "", "variant": "link" },
      "className": "w-max",
      "children": {
        "atom_id": "AT_ICON_ID",
        "icon": "sun",
        "className": "text-white"
      }
    }
  ]
}
```

---

## 4. Exemplo de Uso

```tsx
import { SunIcon } from "@radix-ui/react-icons";

<header className="w-full h-[80px] flex justify-end items-end bg-gray-900 px-5">
  <button className="w-max h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
    <SunIcon className="size-5 rounded-full text-white" />
  </button>
</header>
```
</file>

<file path="memory-bank/components/organisms/hero.md">
---
dependencies: ["AT_AVATAR_ID", "AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "21-02-2026:11:48"
updated_at: "21-02-2026:11:48"
file_name: "hero.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "section"
id: "ORG_HERO_ID"
---

# ORGANISM — Hero

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Organism Specs.
- A hierarquia de `children` é **obrigatória**. Não reordene, não adicione elementos.
- O botão `"Entre em Contato"` usa `variant: primary` — nunca posicionar outro `primary` ao lado.

---

## 2. Especificações Técnicas

### Organism Specs — container `<section>`

```json
{
  "className": "w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16"
}
```

> Tokens: `--color-gray-900: #101828` | `--spacing-16: 4rem`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    {
      "element": "div",
      "className": "w-full max-w-[700px] flex flex-col gap-8 text-center",
      "children": [
        {
          "element": "div",
          "className": "flex flex-column items-center gap-3",
          "children": [
            {
              "atom_id": "AT_AVATAR_ID"
            },
            {
              "atom_id": "AT_PARAGRAPH_ID",
              "label": "<MatheusGomesDev />",
              "className": "text-xs text-white"
            }
          ]
        },
        {
          "element": "div",
          "children": [
            {
              "atom_id": "AT_HEADING_ID",
              "label": "Programador Frontend",
              "variant": "gradient",
              "className": "text-5xl"
            },
            {
              "atom_id": "AT_HEADING_ID",
              "label": "apaixonado por criação de interfaces inovadoras",
              "className": "text-5xl"
            }
          ]
        },
        {
          "atom_id": "AT_PARAGRAPH_ID",
          "label": "Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua equipe.",
          "className": "text-gray-50 text-xl"
        },
        {
          "atom_id": "AT_BUTTON_ID",
          "label": "Vamos criar algo incrível juntos?",
          "variant": "link",
          "className": "text-primary-600"
        },
        {
          "element": "div",
          "className": "flex",
          "children": [
            {
              "atom_id": "AT_BUTTON_ID",
              "label": "Download CV",
              "variant": "link"
            },
            {
              "atom_id": "AT_BUTTON_ID",
              "label": "Entre em Contato",
              "variant": "primary"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 4. Exemplo de Uso

```tsx
<section className="w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16">
  <div className="w-full max-w-[700px] flex flex-col gap-8 text-center">

    {/* Avatar + identificação */}
    <div className="flex flex-column items-center gap-3">
      <div className="bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]">
        <img src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" alt="Avatar" className="object-cover h-full w-full" />
      </div>
      <p className="text-xs text-white">&lt;MatheusGomesDev /&gt;</p>
    </div>

    {/* Headings */}
    <div>
      <h1 className="text-primary-600 text-5xl font-semibold">Programador Frontend</h1>
      <h2 className="text-white text-5xl">apaixonado por criação de interfaces inovadoras</h2>
    </div>

    {/* Parágrafo */}
    <p className="text-gray-50 text-xl">
      Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua equipe.
    </p>

    {/* CTA link */}
    <button className="w-full h-12 rounded-lg border-none bg-transparent text-primary-600 whitespace-nowrap">
      Vamos criar algo incrível juntos?
    </button>

    {/* CTAs duplos */}
    <div className="flex">
      <button className="w-full h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
        Download CV
      </button>
      <button className="w-full h-12 rounded-lg border-none bg-gradient-primary text-white whitespace-nowrap">
        Entre em Contato
      </button>
    </div>

  </div>
</section>
```
</file>

<file path="memory-bank/components/pages/home.md">
---
dependencies: ["ORG_HEADER_ID", "ORG_HERO_ID", "ORG_FOOTER_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "home.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "PAGE"
role: "div"
id: "HOME_ID"
---

# PAGE — Home

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Page Specs.
- A ordem dos organismos é **obrigatória**: `ORG_HEADER_ID` → `ORG_HERO_ID` → `ORG_FOOTER_ID`.
- **Setup obrigatório**: incluir o bloco `@theme` do `DESIGN_TOKENS_ID` no CSS global antes de gerar esta página.

---

## 2. Especificações Técnicas

### Page Specs — container raiz

```json
{
  "className": "w-full max-w-7xl mx-auto flex flex-col bg-gray-900 min-h-screen px-4"
}
```

> Tokens: `--color-gray-900: #101828` | `--spacing-4: 1rem`

---

## 3. Definição de Conteúdo

```json
{
  "children": [
    { "org_id": "ORG_HEADER_ID" },
    { "org_id": "ORG_HERO_ID" },
    { "org_id": "ORG_FOOTER_ID" }
  ]
}
```

---

## 4. Setup obrigatório — CSS Global (`globals.css`)

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

---

## 5. Exemplo de Uso

```tsx
// app/page.tsx (Next.js App Router)
export default function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col bg-gray-900 min-h-screen px-4">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
```
</file>

<file path="memory-bank/constitution/atomic-design-rules.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "atomic-design-rules.md"
version: "1.0"
extends: ["DESIGN_TOKENS_ID"]
type: "RULES"
id: "ATOMIC_DESIGN_RULES_ID"
---

# ATOMIC DESIGN RULES

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Resolução de Tokens:** Use o `DESIGN_TOKENS_ID` como verdade absoluta. Substitua valores fixos (ex: `14px`) pelos tokens correspondentes (ex: `--text-sm`). Se o token não existir em `DESIGN_TOKENS_ID`, emita `[TOKEN_NOT_FOUND: <nome>]`. Nunca mantenha valores manuais como fallback.
- **Lógica de Herança:** Todas as variants devem herdar por padrão de `Default Specs` e sobrescrever apenas o necessário.
- **Tipo de Elemento**: o tipo de elemento a ser criado está especificado no atributo `role` em cada documento.
- **Dependências**: as dependências que o componente utiliza estão declaradas com seus `ID` no atributo `dependencies` em cada documento, e serve como referência para encontrá-los.

---

## 2. Hierarquia Atomic Design

```
ATOM → MOLECULE → ORGANISM → TEMPLATE → PAGE
```

| Nível | Descrição | Exemplos no projeto |
|---|---|---|
| `ATOM` | Elemento indivisível | `AT_BUTTON_ID`, `AT_HEADING_ID`, `AT_PARAGRAPH_ID`, `AT_AVATAR_ID`, `AT_ICON_ID` |
| `MOLECULE` | Composição de ATOMs | `MOL_CARD_ID` |
| `ORGANISM` | Composição de MOLECULEs e/ou ATOMs | `ORG_HEADER_ID`, `ORG_HERO_ID`, `ORG_FOOTER_ID` |
| `PAGE` | Composição de ORGANISMs com conteúdo real | `HOME_ID` |

---

## 3. Proibições Absolutas

| Proibição | Emitir |
|---|---|
| Alterar `className` sem base nos arquivos | `[VIOLATION: className não autorizado]` |
| Adicionar elementos não declarados em `children` | `[VIOLATION: elemento não declarado]` |
| Criar variants não listadas em `variants` | `[VIOLATION: variant não declarada]` |
| Gerar componente com dependency não resolvida | `[DEPENDENCY_NOT_FOUND: <id>]` |
| Usar token não definido em `DESIGN_TOKENS_ID` | `[TOKEN_NOT_FOUND: <nome>]` |
</file>

<file path="memory-bank/constitution/design-tokens.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "22-02-2026:13:00"
file_name: "design-tokens.md"
version: "1.3"
extends: ["GLOBAL_RULES_ID"]
type: "RULES"
id: "DESIGN_TOKENS_ID"
---

# DESIGN TOKENS

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Priorizar os tokens**: Este arquivo é a "Single Source of Truth" para valores visuais. Nenhum valor de cor, tipografia, borda, sombra ou estado interativo pode ser usado se não estiver definido aqui.
- **Política de Token Ausente**: Se um valor não existir neste arquivo, **NÃO invente um substituto**. Emita `[TOKEN_NOT_FOUND: <nome_do_token>]` no output e sinalize para o usuário.
- **Tailwind como fallback**: O uso de utilitários Tailwind CSS v4 é permitido **exclusivamente** para propriedades estruturais neutras que não envolvam valores visuais (ex: `flex`, `grid`, `w-full`, `overflow-hidden`, `items-center`, `justify-between`). **Proibido** usar utilitários Tailwind para cores, tipografia, bordas, sombras, espaçamentos decorativos ou quaisquer estados interativos que não estejam definidos nos tokens abaixo.

---

## 2. Configuração Obrigatória — Tailwind CSS v4

> ⚠️ **ATENÇÃO**: Os tokens abaixo **só funcionam em produção** se o bloco `@theme` estiver configurado no CSS global do projeto (ex: `globals.css` ou `app.css`). Sem essa configuração, classes como `bg-gradient-primary` não serão reconhecidas pelo Tailwind e não renderizarão.

O agente **deve incluir este bloco** ao gerar o setup inicial do projeto ou ao gerar a página `HOME_ID`.

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

**Mapeamento className → token** (referência para validação do agente):

| Classe usada nos componentes | Token CSS correspondente |
|---|---|
| `text-primary-500` | `--color-primary-500` |
| `text-primary-600` | `--color-primary-600` |
| `bg-primary-600` | `--color-primary-600` |
| `bg-gradient-primary` | `--color-gradient-primary` |
| `text-gray-50` | `--color-gray-50` |
| `text-gray-500` | `--color-gray-500` |
| `bg-gray-500` | `--color-gray-500` |
| `bg-gray-900` | `--color-gray-900` |
| `text-white` | `--color-white` |
| `border-white` | `--color-white` |

---

## 3. Fonts

- **Global Font**: `Inter` — configurada por padrão em todo o sistema.

---

## 4. Color Tokens

```json
{
  "--color-primary-500": "#9e77ed",
  "--color-primary-600": "#7f56d9",
  "--color-gray-50":  "#f9fafb",
  "--color-gray-500": "#667085",
  "--color-gray-900": "#101828",
  "--color-white":    "#ffffff",
  "--color-gradient-primary": "linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)"
}
```

---

## 5. Typography Tokens

```json
{
  "--text-xs":       "0.75rem",
  "--text-sm":       "0.875rem",
  "--text-base":     "1rem",
  "--text-xl":       "1.25rem",
  "--text-5xl":      "3rem",
  "--font-semibold": "600"
}
```

---

## 6. Spacing Tokens

```json
{
  "--spacing-2":  "0.5rem",
  "--spacing-3":  "0.75rem",
  "--spacing-4":  "1rem",
  "--spacing-5":  "1.25rem",
  "--spacing-8":  "2rem",
  "--spacing-16": "4rem"
}
```

---

## 7. Border Tokens

```json
{
  "--border-radius-md":     "0.375rem",
  "--border-radius-lg":     "0.5rem",
  "--border-radius-full":   "9999px",
  "--border-width-2":       "2px",
  "--border-width-4":       "4px",
  "--border-color-default": "var(--color-gray-500)",
  "--border-color-white":   "var(--color-white)"
}
```

---

## 8. Shadow Tokens

```json
{
  "--shadow-none": "none"
}
```

> ⚠️ Sombras não definidas aqui devem emitir `[TOKEN_NOT_FOUND: shadow-<nome>]`.

---

## 9. Interactive State Tokens

```json
{
  "--state-disabled-opacity": "0.5",
  "--state-focus-ring": "0 0 0 3px rgba(127, 86, 217, 0.4)"
}
```

> ⚠️ Estados como `hover` e `active` não possuem tokens definidos nesta versão. Qualquer cor de hover/active deve emitir `[TOKEN_NOT_FOUND: state-hover-<contexto>]`.

---

## 10. Sizing Tokens

```json
{
  "--size-avatar":    "92px",
  "--size-icon":      "1.25rem",
  "--height-header":  "80px",
  "--height-footer":  "60px",
  "--height-button":  "3rem",
  "--max-width-card": "352px",
  "--max-width-hero": "700px"
}
```
</file>

<file path="memory-bank/constitution/global-rules.md">
---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "global-rules.md"
version: "1.0"
extends: []
type: "RULES"
id: "GLOBAL_RULES_ID"
---

# GLOBAL RULES

## 📐 Regras Absolutas de Implementação

### 1. Herança obrigatória
Sempre verifique o campo `extends` em cada arquivo. Se possuir valores, **importe e aplique todas as regras** dos IDs referenciados **antes** de implementar o componente.

### 2. Blocos de código são lei
Todos os valores dentro de blocos ` ```json ` ou ` ```css ` têm **prioridade absoluta** sobre qualquer descrição textual. Em caso de conflito entre texto e bloco de código, o bloco de código vence **sempre**.

### 3. Fidelidade zero tolerância
Proibido inventar, inferir ou aproximar propriedades omitidas. Se um valor não está definido em nenhum arquivo do design system, ele **não existe** — emita `[TOKEN_NOT_FOUND: <nome>]` e sinalize.

### 4. Sem overrides não declarados
Nenhuma propriedade pode ser sobrescrita sem que exista uma `variant` ou `extends` explícita que autorize a mudança.

---

## 🚫 O que NUNCA fazer

- Usar valores hexadecimais diretos (`#ffffff`) que não venham de um token
- Usar valores `px`, `rem`, `em` que não venham de um token ou `className` literal do componente
- Criar ou assumir estilos para estados não definidos (`hover`, `active`, `focus`) sem token correspondente
- Adicionar elementos, ícones, textos ou estruturas não especificados nos arquivos de componente
</file>

</files>
