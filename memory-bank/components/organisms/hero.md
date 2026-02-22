---
dependencies: ["AT_AVATAR_ID", "AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "21-02-2026:11:48"
updated_at: "21-02-2026:11:48"
file_name: "hero.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ORGANISM"
role: "section"
id: "ORG_HERO_ID"
---

# ORGANISM — Hero

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Organism Specs.
- A hierarquia de `children` é **obrigatória**. Não reordene, não adicione elementos.
- O botão `"Entre em Contato"` usa `variant: primary` — nunca posicionar outro `primary` ao lado.

---

## 2. Especificações Técnicas

### Organism Specs — container `<section>`

```json
{
  "className": "w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16"
}
```

> Tokens: `--color-gray-900: #101828` | `--spacing-16: 4rem`

---

## 3. Definição de Conteúdo

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
            }
          ]
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

---

## 4. Exemplo de Uso

```tsx
<section className="w-full min-h-[calc(100vh-140px)] flex flex-col md:justify-center items-center bg-gray-900 py-16">
  <div className="w-full max-w-[700px] flex flex-col gap-8 text-center">

    {/* Avatar + identificação */}
    <div className="flex flex-column items-center gap-3">
      <div className="bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]">
        <img src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" alt="Avatar" className="object-cover h-full w-full" />
      </div>
      <p className="text-xs text-white">&lt;MatheusGomesDev /&gt;</p>
    </div>

    {/* Headings */}
    <div>
      <h1 className="text-primary-600 text-5xl font-semibold">Programador Frontend</h1>
      <h2 className="text-white text-5xl">apaixonado por criação de interfaces inovadoras</h2>
    </div>

    {/* Parágrafo */}
    <p className="text-gray-50 text-xl">
      Visite meu perfil no Linkedin e explore meus projetos no GitHub para descobrir como minhas habilidades podem agregar valor á sua equipe.
    </p>

    {/* CTA link */}
    <button className="w-full h-12 rounded-lg border-none bg-transparent text-primary-600 whitespace-nowrap">
      Vamos criar algo incrível juntos?
    </button>

    {/* CTAs duplos */}
    <div className="flex">
      <button className="w-full h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
        Download CV
      </button>
      <button className="w-full h-12 rounded-lg border-none bg-gradient-primary text-white whitespace-nowrap">
        Entre em Contato
      </button>
    </div>

  </div>
</section>
```
