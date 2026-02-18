---
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: button.md
variants: ["primary", "secondary"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES"]
type: "ATOM"
role: "button"
id: "AT_BUTTON"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo 'extends' possui algo para ser herdado e caso possua, busque e importe todas as regras e definições especificadas em cada arquivo.
- **Restrição de Layout:** Nunca utilize dois botões com variant `primary` lado a lado. Em ações duplas, combine `primary` com `secondary`.

---

# 2. Especificações Técnicas

## Default Specs

````json
{
  "width": "$size_full",
  "height": "$size_md",
  "border-radius": "$radius_quark",
  "background-color": "$cyan",
  "color": "$black"
}```

## Variant Secondary Specs
```json
{
  "background-color": "$gray",
  "color": "$white"
}```

---

3. Definição de Conteúdo
- **label**:
  - **type**: string.
  - **required**: true;
  - **max-length**: tamanho máximo de 50 caracteres.

---

4. Accessibility
- **role**: button.
- **keyboard**: deve ser ativável via as teclas Enter e Space.
- **contrast**: o contraste entre o label/ícone e o background-color deve seguir a norma WCAG AA (mínimo 4.5:1).
````
