---
dependencies: ["AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: card.md
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
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
  "className": "w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2"
}
```

# 4. Definição de Conteúdo
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
