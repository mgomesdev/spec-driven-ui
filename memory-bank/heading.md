---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: heading.md
variants: ["h1", "h2", "h3", "h4", "h5", "h6"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "heading"
id: "AT_HEADING_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.

# 2. Especificações Técnicas

## Default Specs

```json
{
 "color": "--color-white",
 "font-size": "--text-xl"
}
```