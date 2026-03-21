# Introdução: Por Que Fazemos Spec-Driven?

## O Problema Comum

```
❌ Você pergunta: "Qual cor é o botão primário?"
Dev 1: "Acho que é azul..."
Dev 2: "Era verde antes da refatoração"
Dev 3: "Deixa eu ver... 5 min... #3B82F6, mas só em desktop"

Resultado: 30 min perdido, bugs de "cor diferente"
```

## A Solução: Spec-Driven Development

Spec-driven é como fazer um **mapa antes de sair dirigindo**:

- **Para onde vai** → Requisitos claros (research.md)
- **Qual caminho** → Plano definido (plan.md)
- **Quando chegou** → Critérios de aceite (*.feature + TDD)

---

## Comparação

```
┌────────────────────────────────────────────────────────────┐
│        SEM SPEC                    COM SPEC                │
├────────────────────────────────────────────────────────────┤
│ PO: "Faz o botão azul"       PO: "Botão primário:         │
│      ↓                            - Desktop: #3B82F6      │
│ Dev: "Azul como?"                  - Mobile: #2563EB      │
│      ↓                            - Hover: #1D4ED8"        │
│ PO: "Esse mesmo"                                           │
│      ↓                        Dev: "Implementado!"        │
│ [Deploy]                                                      │
│      ↓                        [Deploy]                     │
│ ❌ "Isso não é azul"         ✅ "Perfeito!"                │
└────────────────────────────────────────────────────────────┘
```

---

## O Que Você Vai Aprender

| Habilidade | Benefício |
|------------|-----------|
| **BDD** | Testes que todos entendem (Given-When-Then) |
| **TDD** | Codificar com confiança (RED→GREEN) |
| **Atomic Design** | Componentes reutilizáveis e testáveis |
| **Spec-Driven** | Evitar retrabalho e mal-entendidos |

---

## BDD: Traduzindo Português para Código

```gherkin
# *.feature
Dado que o usuário está na página inicial
Quando ele clica no botão "Login"
Então deve aparecer o formulário de login
```

```typescript
// *.spec.ts (Playwright)
test('deve mostrar formulário ao clicar em Login', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="login-button"]');
  await expect(page.locator('[data-testid="login-form"]')).toBeVisible();
});
```

**Benefício:** PO, Tech Lead e Dev — todos entendem!

---

## Fluxo Em Uma Linha

```
REQUISITO → RESEARCH → PLAN → *.feature → TDD → CÓDIGO → GATE → PR
```

Cada etapa existe por um motivo. Pulando = perdendo tempo.

---

## Ordem de Implementação (Atomic Design)

```
1. Design System (tokens globais)
   ↓
2. Atoms (icon, button, avatar, logo)
   ↓
3. Molecules (nav-list, card)
   ↓
4. Organisms (sidebar, header)
```

> **Regra:** Design System **SEMPRE** primeiro!

---

## Próximo Passo

Entenda o fluxo RPI → `02-fluxo-rpi.md`
