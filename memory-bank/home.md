---
dependencies: ["ORG_HEADER_ID", "ORG_HERO_ID", "ORG_FOOTER_ID"]
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: home.md
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "PAGE"
role: "div"
id: "HOME_ID"
---


# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.

# 2. Composição

- **Comportamento**: Siga a hierarquia definida no bloco JSON de Page Specs.

# 3. Especificações Técnicas

## Page Specs

```json
{
  "width": "--s-full",
  "display": "flex",
  "flex-direction": "column",
  "background-color": "--color-gray-900"
}
```

# 4. Definição de Conteúdo
```json
{
  "children": [
    {
      "atom_id": "ORG_HEADER_ID"
    },
    {
      "atom_id": "ORG_HERO_ID",
    },
    {
      "atom_id": "ORG_FOOTER_ID"
    }
  ]
}
```
