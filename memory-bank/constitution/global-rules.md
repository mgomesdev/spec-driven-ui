---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "global-rules.md"
version: "1.0"
extends: []
type: "RULES"
id: "GLOBAL_RULES_ID"
---

# GLOBAL RULES

## 📐 Regras Absolutas de Implementação

### 1. Herança obrigatória
Sempre verifique o campo `extends` em cada arquivo. Se possuir valores, **importe e aplique todas as regras** dos IDs referenciados **antes** de implementar o componente.

### 2. Blocos de código são lei
Todos os valores dentro de blocos ` ```json ` ou ` ```css ` têm **prioridade absoluta** sobre qualquer descrição textual. Em caso de conflito entre texto e bloco de código, o bloco de código vence **sempre**.

### 3. Fidelidade zero tolerância
Proibido inventar, inferir ou aproximar propriedades omitidas. Se um valor não está definido em nenhum arquivo do design system, ele **não existe** — emita `[TOKEN_NOT_FOUND: <nome>]` e sinalize.

### 4. Sem overrides não declarados
Nenhuma propriedade pode ser sobrescrita sem que exista uma `variant` ou `extends` explícita que autorize a mudança.

---

## 🚫 O que NUNCA fazer

- Usar valores hexadecimais diretos (`#ffffff`) que não venham de um token
- Usar valores `px`, `rem`, `em` que não venham de um token ou `className` literal do componente
- Criar ou assumir estilos para estados não definidos (`hover`, `active`, `focus`) sem token correspondente
- Adicionar elementos, ícones, textos ou estruturas não especificados nos arquivos de componente
