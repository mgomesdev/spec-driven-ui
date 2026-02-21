---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: design-tokens.md
version: "1.1"
extends: ["GLOBAL_RULES_ID"]
id: "DESIGN_TOKENS_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Priorizar os tokens**: Este arquivo é a "Single Source of Truth" para a geração de telas. Ferramentas de design (como Google Stitch) devem priorizar os tokens abaixo em vez de valores hex ou pixel fixos.
- **Theme Variables**: Use o Tailwind CSS v4 e as convenções de chaves. Primeiro verifique se a chave existe neste arquivo, senão existir, use do Tailwind. Ao identificar um valor em pixel no design, utilize a variável CSS correspondente ou a utilidade padrão do Tailwind (ex: 16px -> `--spacing-4`).

# 2. Fonts

- **Global Font**: A font geral do sistema deve ser a `Inter`, ou seja, é a que deve estar configurada por padrão.

# 3. Color Tokens

Cores fundamentais para serem usadas sempre que encontrar referências em componentes.

````json
{
    "--color-primary-500": "#9e77ed",
    "--color-primary-600:" "#7f56d9",
    "--color-gray-50": "#f9fafb",
    "--color-gray-500": "#667085",
    "--color-gray-900": "#101828",
    "--color-gradient-primary": "linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)"
}```
