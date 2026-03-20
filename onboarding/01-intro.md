# Introdução: Por Que Fazemos Assim?

## A Realidade do Desenvolvimento de Software

Você já se deparou com uma situação assim?

```
❌ CENÁRIO FRUSTRANTE

Você:  "Qual cor é o botão primário?"
Dev 1: "Acho que é azul..."
Dev 2: "Não, era verde antes da refatoração"
Dev 3: "Deixa eu ver no código... 5 minutos depois... 
        Ah, é #3B82F6, mas só em desktop"
```

**Resultado:** 30 minutos perdido, bugs de "cor diferente em produção".

---

## E Agora? Apresentamos: Spec-Driven Development

Spec-driven é como fazer um **mapa antes de sair dirigindo**. Você sabe:
- **Para onde vai** (requisitos claros)
- **Qual caminho seguir** (fluxo definido)
- **Quando chegou** (critérios de aceite)

### Comparação Visual

```
┌─────────────────────────────────────────────────────────────────┐
│           SEM SPEC (Caos)          │    COM SPEC (Clareza)      │
├─────────────────────────────────────────────────────────────────┤
│                                     │                            │
│   PO: "Faz o botão azul"           │   PO: "Botão primário:      │
│        ↓                            │   - Desktop: #3B82F6       │
│   Dev: "Azul como?"                 │   - Mobile: #2563EB       │
│        ↓                            │   - Hover: #1D4ED8"        │
│   PO: "Esse mesmo"                  │                            │
│        ↓                            │   Dev: "Implementado!"     │
│   [Deploy]                          │   [Deploy]                 │
│        ↓                            │                            │
│   ❌ Cliente: "Isso não é azul"    │   ✅ Cliente: "Perfeito!"   │
│                                     │                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## O Que Você Vai Aprender

| Habilidade | Por Que Importa |
|------------|-----------------|
| **BDD** | Escrever testes que todos entendem |
| **TDD** | Codificar com confiança |
| **Spec-Driven** | Evitar retrabalho |
| **Clean Code** | Manter o código legível |

### Por Que BDD Importa Para Você?

BDD (Behavior-Driven Development) é como **traduzir português para código**:

```
📝 PORTUGUÊS (Entendido por todos)
───────────────────────────────────
Dado que o usuário está na página inicial
Quando ele clica no botão "Login"
Então deve aparecer o formulário de login
```

```typescript
// TIPO ASSIM NO CÓDIGO (Playwright)
test('deve mostrar formulário de login ao clicar em Login', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="login-button"]');
  await expect(page.locator('[data-testid="login-form"]')).toBeVisible();
});
```

**Benefício:** Seu PM, seu Tech Lead, e você — todos entendem o que está sendo testado!

---

## Metáfora: O Mapa Antes da Estrada

Imagine que você vai viajar de São Paulo para Rio de Janeiro.

```
❌ SEM MAPA                    ✅ COM MAPA
─────────────────────────────────────────────────
"Siga em frente"           "Na rotatória, vire à direita
 → Depois à esquerda?       no km 45, depois 
 → Qual esquerda?            pegue a BR-116"
 → Ops, errou o caminho

Perdeu 2 horas              Chegou em 5 horas
completas                  direto
```

**Spec-driven é o mapa do seu código.** Você sabe:
- O que implementar (Requirements)
- Como testar (Scenarios)
- Quando está pronto (Done Criteria)

---

## Fluxo em Uma Linha

```
REQ → RESEARCH → PLAN → *.feature → TDD → CÓDIGO → GATE → PR 🎉
```

Cada etapa existe por um motivo. Pulando etapas = perdendo tempo.

---

## Resumo

| O que você ganha | O que você evita |
|-----------------|------------------|
| Clareza no que fazer | "O que o cliente quer?" |
| Testes que fazem sentido | Testes que ninguém entende |
| Menos retrabalho | "Ah, não era assim..." |
| Code review mais rápido | "Isso tá certo?" |

---

## Próximo Passo

Entenda o fluxo completo → `02-fluxo-principal.md`
