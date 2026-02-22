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
