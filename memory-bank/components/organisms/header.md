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
