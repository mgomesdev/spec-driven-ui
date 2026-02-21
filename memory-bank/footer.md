---
dependencies: ["AT_BUTTON_ID", "AT_PARAGRAPH_ID"]
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: footer.md
variants: ["light", "dark"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "footer"
id: "ORG_FOOTER_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.

# 2. Composição

- **Comportamento**: Siga a hierarquia definida no bloco JSON de Organism Specs.

# 3. Especificações Técnicas

## Organism Specs

```json
{
  "className": "w-full h-[60px] flex justify-between items-center bg-gray-900 p-4"
}
```


# 4. Definição de Conteúdo
```json
{
  "children": [
      {
      "atom_id": "AT_ICON_ID",
      "icon": "sun",
      "className": "w-max",
    }
  ]
}
```
