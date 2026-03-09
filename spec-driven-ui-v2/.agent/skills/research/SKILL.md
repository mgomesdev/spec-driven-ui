# Skill: research
# Camada: GENERATION LAYER
# Config: .agent/PROJECT.config.md → [research] · [tokens].research_max

---

## Acionamento

- "gere o research para [feature]"

---

## Pré-geração — protocolo de esclarecimento

Leia `[research]` em PROJECT.config.md.
Para cada `clarify_* = true`, confirme antes de escrever.
Se ambíguo → **pergunte. Nunca assuma.**

```
[research].clarify_auth        → requer auth? qual role/permissão?
[research].clarify_data        → endpoints? payload? response? paginação?
[research].clarify_state       → persistido onde? otimistic update?
[research].clarify_layout      → breakpoints? mobile-first?
[research].clarify_a11y        → requisitos WCAG? nível?
[research].clarify_i18n        → precisa i18n?
[research].clarify_out_of_scope → o que explicitamente NÃO entra?
```

Itens não confirmados → registrar em `## Ambiguidades abertas`.

---

## Geração

1. Use template: `.agent/templates/research.template.md`
2. Preencha TODAS as seções — nenhuma vazia
3. Ao terminar: estime tokens
4. Se estimativa > `[tokens].research_max` → comprima até caber
5. Salve em `specs/features/[nome]/research.md`
6. Apresente resumo em 3 linhas → **aguarde aprovação**

---

## Checklist antes de entregar

- [ ] Todos os ACs são verificáveis e mensuráveis?
- [ ] Todos os endpoints têm método + payload + response?
- [ ] "Fora de escopo" preenchido?
- [ ] "Ambiguidades abertas" preenchido (ou "nenhuma")?
- [ ] Tamanho ≤ `[tokens].research_max` tokens?
