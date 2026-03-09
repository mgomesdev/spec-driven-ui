# Skill: gherkin
# Camada: VALIDATION LAYER — especificação executável
# Config: .agent/PROJECT.config.md → [gherkin] · [features].skill_gherkin

---

## Acionamento

- "gere o gherkin para [feature]"
- Verificar `[features].skill_gherkin = true` antes de executar

---

## Regras de escrita

Leia `[gherkin]` em PROJECT.config.md:

- Idioma: `[gherkin].language`
- Máx linhas por cenário: `[gherkin].max_lines_per_scenario`
  - Se AC precisar de mais linhas → o AC está grande demais, peça ao humano para quebrar
- Tags obrigatórias (se `[gherkin].tags_us = true`): `@US-XXX` em todo cenário
- `@smoke` para happy paths (se `[gherkin].tags_smoke = true`)
- `@regression` para edge cases (se `[gherkin].tags_regression = true`)

---

## Mapeamento: 1 AC = 1 Cenário

```gherkin
@US-XXX @smoke
Cenário: [nome do AC em linguagem natural]
  Dado [estado inicial]
  Quando [ação do usuário]
  Então [resultado verificável]
```

Para múltiplos dados → `Esquema do Cenário` + `Exemplos`.

---

## Estrutura do arquivo

```
# language: {[gherkin].language}

Funcionalidade: [nome-da-feature]
  Como [persona]
  Quero [ação]
  Para [valor]

  @US-001 @smoke
  Cenário: ...

  @US-001 @regression
  Cenário: ...
```

Salvar em: `specs/features/[nome]/[nome].feature`

---

## Integração com testes

Steps ficam em: `{[gherkin].steps_dir}[nome]/[nome].steps.ts`
Executados pelo orchestrator via: `vitest run --grep @US-XXX`
(se `[features].gate_gherkin = true`)

---

## Após gerar

Apresente lista de cenários por US → **aguarde aprovação**
