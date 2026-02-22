---
dependencies: ["AT_AVATAR_ID", "AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
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
  "className": "w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16"
}
```

# 4. Definição de Conteúdo
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
            },
          ],          
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
