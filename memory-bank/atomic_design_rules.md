---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: atomic_design_rules.md
version: "1.0"
extends: ["TOKENS_GLOBAL_ID"]
type: "RULES"
id: "ATOMIC_DESIGN_RULES_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui algo para ser herdado e caso possua, busque e importe todas as regras e definições especificadas em cada arquivo.
- **Resolução de Tokens:** Use o `TOKENS_GLOBAL_ID` como verdade absoluta. Substitua valores fixos (ex: 8px) pelos tokens correspondentes (ex: $radius_sm). Mantenha valores manuais apenas se o token não existir.
- **Lógica de Herança:** Todas as variants devem herdar por padrão de `Default Specs` e sobrescrever apenas o necessário.
- **Tipo de Elemento**: o tipo de elemento a ser criado está especificado no atributo 'role' em cada documento.
- **Dependências**: as dependências que o componente utiliza estão declaradas no atributo `dependencies` em cada documento.
