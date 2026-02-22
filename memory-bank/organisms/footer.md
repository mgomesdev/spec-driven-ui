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
