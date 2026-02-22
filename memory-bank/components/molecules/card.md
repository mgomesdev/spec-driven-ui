---
dependencies: ["AT_HEADING_ID", "AT_PARAGRAPH_ID", "AT_BUTTON_ID"]
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "card.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "MOLECULE"
role: "div"
id: "MOL_CARD_ID"
---

# MOLECULE — Card

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Comportamento**: siga a hierarquia definida no bloco JSON de Molecule Specs.
- A ordem dos filhos declarada em `children` é **obrigatória** — não reordene.

---

## 2. Especificações Técnicas

### Molecule Specs — container

```json
{
  "className": "w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2"
}
```

> Tokens: `--max-width-card: 352px` | `--color-gray-900: #101828` | `--border-width-2: 2px` | `--border-color-default: #667085` | `--border-radius-md: 0.375rem`

---

## 3. Definição de Conteúdo

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

---

## 4. Exemplo de Uso

```tsx
<div className="w-[352px] h-auto flex flex-col gap-2 bg-gray-900 opacity-50 rounded-md border-2 border-gray-500 p-2">
  <h2 className="text-white text-xl">Card Pixel-Perfect</h2>
  <p className="text-primary-600 text-sm">
    Este Card foi gerado através de prompt com técnicas RAG e estratégias avançadas, Atomic Design, Orientação a Objetos e Arquitetura.
  </p>
  <button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
    Gostou ?
  </button>
</div>
```
