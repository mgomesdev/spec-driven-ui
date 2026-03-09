# Skill: gherkin

> Camada: VALIDATION LAYER (especificação executável)
> Input: `research.md` aprovado
> Output: `specs/features/[nome]/[nome].feature`

---

## Quando usar

- "gere os cenários gherkin para [feature]"
- Automaticamente após aprovação do research

---

## Regras de escrita

- **Feature** = 1 arquivo por feature
- **Scenario** = 1 AC do research = 1 cenário
- **Dado/Quando/Então** em português (consistente com o projeto)
- Use `Esquema do Cenário` + `Exemplos` para casos com múltiplos dados
- **Máx 5 linhas por cenário** — se precisar de mais, o AC está grande demais
- **Sem lógica de UI** nos steps — descreva comportamento, não implementação

---

## Mapeamento AC → Gherkin

Para cada AC do `research.md`:

```gherkin
Cenário: [nome do AC em linguagem natural]
  Dado [estado inicial / contexto]
  Quando [ação do usuário]
  Então [resultado esperado e verificável]
```

---

## Tags obrigatórias

```gherkin
@US-001          # referência à história de usuário
@smoke           # para cenários críticos do happy path
@regression      # para cenários de borda
```

---

## Exemplo

```gherkin
# language: pt

Funcionalidade: Criação de item
  Como usuário autenticado
  Quero criar um novo item
  Para organizar meu trabalho

  @US-001 @smoke
  Cenário: Criar item com dados válidos
    Dado que estou na página de criação
    Quando preencho o formulário com dados válidos
    E clico em "Salvar"
    Então o item é criado com sucesso
    E sou redirecionado para a listagem

  @US-001 @regression
  Cenário: Tentativa com campo obrigatório vazio
    Dado que estou na página de criação
    Quando submeto o formulário sem preencher "Nome"
    Então vejo a mensagem de erro "Nome é obrigatório"
    E o item não é criado

  @US-002 @regression
  Esquema do Cenário: Validação de comprimento
    Dado que estou na página de criação
    Quando preencho "Nome" com "<valor>"
    Então vejo "<mensagem>"

    Exemplos:
      | valor       | mensagem                          |
      | ""          | "Nome é obrigatório"              |
      | "ab"        | "Nome deve ter ao menos 3 chars"  |
      | "a" * 101   | "Nome deve ter no máximo 100 chars"|
```

---

## Integração com Vitest

Os cenários Gherkin são executados pelo orchestrator como parte dos quality-gates.
Configure `vitest.config.ts` para ler arquivos `.feature` via `@vitest/gherkin` ou `jest-cucumber` adaptado.

```typescript
// vitest.config.ts — integração Gherkin
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.ts', '**/*.spec.ts'],
    // Steps dos cenários ficam em:
    // src/app/features/[nome]/[nome].steps.ts
  }
})
```

---

## Após gerar

1. Apresente os cenários para revisão
2. **Aguarde aprovação**
3. Armazene referência no `tasks.md` via campo `gherkin_ref`
