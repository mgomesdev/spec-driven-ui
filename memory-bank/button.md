---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: "button.md"
variants: ["default", "primary", "link"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "button"
id: "AT_BUTTON_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Restrição de Layout:** Nunca utilize dois botões com variant `primary` lado a lado. Em ações duplas, combine `primary` com `secondary`.

# 2. Especificações Técnicas

## Default Specs

```json
{
  "width": "--w-full",
  "height": "--h-12",
  "border-radius": "--radius-lg",
  "border": "none",
  "background-color": "--color-white",
  "color": "--color-gray-500"
}
```

## Variant Primary Specs

```json
{
  "background-color": "--color-gradient-primary",
  "color": "--color-white"
}
```

## Variant Link Specs

```json
{
  "background-color": "--color-transparent",
}
```

# 3. Definição de Conteúdo
- **label**:
  - **type**: string.
  - **required**: true;
  - **max-length**: tamanho máximo de 50 caracteres.

# 4. Accessibility
- **role**: button.
- **keyboard**: deve ser ativável via as teclas Enter e Space.
- **contrast**: o contraste entre o label/ícone e o background-color deve seguir a norma WCAG AA (mínimo 4.5:1).
