# Skill: research

> Camada: GENERATION LAYER
> Input: US/briefing do PO
> Output: `specs/features/[nome]/research.md`
> Token budget output: ≤ 600 tokens

---

## Quando usar

- "gere o research para [feature]"
- "analise essa US"

---

## Protocolo obrigatório ANTES de gerar

Verifique cada domínio. Se ambíguo → pergunte. Nunca assuma.

```
[ ] AUTH     — feature exige usuário autenticado? qual role/permissão?
[ ] DADOS    — quais endpoints? payload? response? paginação?
[ ] ESTADO   — dados persistidos onde? otimistic update?
[ ] LAYOUT   — breakpoints específicos? mobile-first?
[ ] A11Y     — requisitos WCAG? nível A ou AA?
[ ] I18N     — precisa de internacionalização?
[ ] FORA     — o que explicitamente NÃO está no escopo?
```

Se qualquer item for "a confirmar" → registre em `## Ambiguidades abertas`.
**Nunca invente um default silencioso.**

---

## Como gerar

1. Aplique o protocolo de esclarecimento
2. Use o template `/.agent/templates/research.template.md`
3. Preencha TODAS as seções — nenhuma pode ficar vazia
4. Estime tokens ao fim: se > 600, comprima a linguagem
5. Salve em `specs/features/[nome]/research.md`
6. Apresente resumo (3 linhas) e **aguarde aprovação**

---

## Checklist de qualidade

- [ ] Todos os ACs são verificáveis e mensuráveis?
- [ ] Endpoints listados com método, payload e response?
- [ ] Seção "Fora de escopo" preenchida?
- [ ] Ambiguidades abertas listadas (ou "nenhuma")?
- [ ] research.md ≤ 600 tokens?
