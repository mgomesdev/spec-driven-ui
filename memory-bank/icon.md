---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: "icon.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "icon"
id: "AT_ICON_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Icones**: para os icones, busque da lib `@radix-ui/react-icons`.

# 2. Especificações Técnicas

## Default Specs

```json
{
  "className": "size-5 rounded-full text-white"
}
```