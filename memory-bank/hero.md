---
dependencies: ["AT_AVATAR", "AT_HEADING", "AT_PARAGRAPH", "AT_BUTTON"]
created_at: "21-02-2026:11:48"
updated_at: "21-02-2026:11:48"
file_name: hero.md
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "section"
id: "ORG_HERO_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.

# 2. Composição

- **Comportamento**: Siga a hierarquia definida no bloco JSON de Organism Specs.

# 3. Especificações Técnicas

## Organism Specs

```json
{
  "width": "--s-full",
  "min-height": "calc(100vh - (--s-17))",
  "display": "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
  "background-color": "--color-gray-900",
  "padding-top": "--spacing-16"
}
```

# 4. Definição de Conteúdo
```json
{
  "children": [
    {
      "element": "div",
      "style": {
        "width": "--s-full",
        "max-width": "700px",
        "display": "flex",
        "flex-direction": "column",
        "gap": "--spacing-8",
        "text-align": "center"
      },
      "children": [
        {
          "atom_id": "AT_HEADING_ID",
          "label": "Programador Frontend",
          "variant": "gradient"
        },
        {
          "atom_id": "AT_HEADING_ID",
          "label": "apaixonado por criação de interfaces inovadoras"
        },
        {
          "atom_id": "AT_PARAGRAPH_ID",
          "label": "Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua equipe."
        },
        {
          "atom_id": "AT_BUTTON_ID",
          "label": "Vamos criar algo incrível juntos?",
          "variant": "link",
          "color": "--color-primary-600"
        },
        {
          "element": "div",
          "style": {
            "display": "flex"
          },
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
