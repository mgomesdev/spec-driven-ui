---
dependencies: ["AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: card.md
variants: []
version: "1.0"
extends: ["MOL_RULES"]
type: "MOLECULE"
role: "div"
id: "MOL_CARD_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.

# 2. Composição

- **Comportamento**: Siga a hierarquia definida no bloco JSON de Molecule Specs.

# 3. Especificações Técnicas

## Molecule Specs

```json
{
  "width": "352px",
  "height": "auto",
  "display": "flex",
  "flex-direction": "column",
  "gap": "--spacing-2",
  "background-color": "--color-gray-900",
  "opacity": "--opacity-50",
  "border-radius": "--raidus-md",
  "border": "2px solid --color-gray-500",
  "padding": "--spacing-2"
}
```

# 3. Definição de Conteúdo
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
