---
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
dependencies: ["AT_HEADING", "AT_PARAGRAPH", "AT_BUTTON"]
file_name: card.md
variants: []
version: "1.0"
extends: ["MOL_RULES"]
type: "MOLECULE"
role: "div"
id: "MOL_CARD"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo 'extends' possui algo para ser herdado e caso possua, busque e importe todas as regras e definições especificadas em cada arquivo.

---

# 2. Composição

- **Comportamento**: Siga a hierarquia definida no bloco JSON de Molecule Specs.

# 3. Especificações Técnicas

## Molecule Specs

````json
{
  "width": "352px",
  "height": "auto",
  "display": "flex",
  "flex-direction": "column",
  "gap": $spacing_nano,
  "background-color": $deep_black,
  "opacity": $opacity_50,
  "border-radius": $radius_quark,
  "border": "2px solid $gray",
  "padding": $spacing_nano
}```

---

# 3. Definição de Conteúdo
```json
{
  "children": [
    {
      "atom_id": "AT_HEADING",
      "props": { "label": "Live Server Output" }
    },
    {
      "atom_id": "AT_PARAGRAPH",
      "props": {
        "label": "Currently focused on building high-performance 3D web experiences using Three.js and React. Available for new collaborations starting 03 2024."
      }
    },
    {
      "atom_id": "AT_BUTTON",
      "props": { "label": "Get In Touch" }
    }
  ]
}
````
