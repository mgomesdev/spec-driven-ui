---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "avatar.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "avatar"
id: "AT_AVATAR_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Imagens**: para preencher o conteúdo de `img`, use imagens do `https://uifaces.co/`.

# 2. Especificações Técnicas

## Default Specs

```json
{
  "className": "bg-gray-500 flex justify-center items-center rounded-full border-[4px] select-none border-white border-solid overflow-hidden size-[92px]"
}
```

# 3. Definição de Conteúdo
```json
{
    "children": [
        {
            "element": "img",
            "className": "object-cover h-full w-full"
        }
    ]
}
```