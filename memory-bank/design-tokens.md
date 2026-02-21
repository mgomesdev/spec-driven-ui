---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "21-02-2026:08:00"
file_name: design-tokens.md
version: "1.1"
extends: ["GLOBAL_RULES_ID"]
id: "DESIGN_TOKENS_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Priorizar os tokens**: Este arquivo é a "Single Source of Truth" para a geração de telas. Ferramentas de design (como Google Stitch) devem priorizar os tokens abaixo em vez de valores hex ou pixel fixos.
- **Theme Variables**: As o Tailwind CSS v4 e as convenções de chaves. Ao identificar um valor em pixel no design, utilize a variável CSS correspondente ou a utilidade padrão do Tailwind (ex: 16px -> `--spacing-4`).

# 2. Fonts

- **Global Font**: A font geral do sistema deve ser a `Inter`, ou seja, é a que deve estar configurada por padrão.

