---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: atomic-design-rules.md
version: "1.0"
extends: ["DESIGN_TOKENS_ID"]
type: "RULES"
id: "ATOMIC_DESIGN_RULES_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Resolução de Tokens:** Use o `DESIGN_TOKENS_ID` como verdade absoluta. Substitua valores fixos (ex: `14px`) pelos tokens correspondentes (ex: `--text-sm`). Mantenha valores manuais apenas se o token não existir.
- **Lógica de Herança:** Todas as variants devem herdar por padrão de `Default Specs` e sobrescrever apenas o necessário.
- **Tipo de Elemento**: o tipo de elemento a ser criado está especificado no atributo `role` em cada documento.
- **Dependências**: as dependências que o componente utiliza estão declaradas com seus `ID` no atributo `dependencies` em cada documento, e serve como referência para encontra-los.