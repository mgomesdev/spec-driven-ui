# Fluxo Principal: Do Zero ao PR

## Visão Geral do Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FLUXO COMPLETO                                  │
│                     Do requisito ao Pull Request                         │
└─────────────────────────────────────────────────────────────────────────┘

   PO/CONtexto
      │
      ▼
┌──────────────┐
│   RESEARCH   │ ← "O que o usuário realmente precisa?"
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     PLAN     │ ← "Como vamos fazer isso?"
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  *.feature   │ ← "O que vamos testar? (cenários BDD)"
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    TDD       │ ← "Escreve o teste primeiro!"
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    CÓDIGO    │ ← "A implementação"
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     GATE     │ ← "Valida tudo antes de subir"
└──────┬───────┘
       │
       ▼
      PR 🎉
```

---

## Descrição de Cada Etapa

### 1. Research (Pesquisa)
**Responsável:** PO/Analista de Negócio
**Você:** Recebe o contexto

```
O que acontece:
├── Requisito do cliente
├── Análise de impacto
└── Documentação inicial (research.md)
```

### 2. Plan (Planejamento)
**Responsável:** Tech Lead + Dev Team
**Você:** Participa como aprendiz

```
O que acontece:
├── Decisões técnicas
├── Estimativas
├── Arquitetura da solução
└── Documentação (plan.md)
```

### 3. *.feature (Cenários BDD)
**Responsável:** PO + Dev em conjunto
**Você:** Começa a atuar aqui!

```
Formato: Given → When → Then

Exemplo (header.feature):
─────────────────────────────────
Feature: Header Navigation

  @desktop @pending
  Scenario: Logo click redirects to home
    Given I am on any page
    When I click the logo
    Then I should be on the home page
```

### 4. TDD (Test-Driven Development)
**Responsável:** Você! (dev)
**Ferramenta:** Playwright

```
Ciclo:
┌─────────┐    RED     ┌─────────┐   GREEN   ┌─────────┐
│  TESTE  │ ────────→ │ CÓDIGO  │ ────────→ │  REFAC  │
│ FAILING │            │ MINIMO  │           │ TORING  │
└─────────┘            └─────────┘           └─────────┘
```

### 5. Código (Implementação)
**Responsável:** Você
**Onde:** `frontend/src/components/`

```
Sua estrutura:
frontend/src/
└── components/
    └── header/
        ├── header.tsx        ← Componente
        └── header.test.ts    ← Teste
```

### 6. Gate (Validação)
**Responsável:** hooks automáticos
**Você:** Não precisa fazer manualmente!

```
Gate executa automaticamente:
┌─────────────────────────────────────┐
│                                     │
│  1. TDD (Playwright)  → Testes OK?  │
│  2. Verify Patterns    → Padrões?  │
│  3. Typecheck          → Tipos OK? │
│  4. Lint               → Estilo OK? │
│                                     │
└─────────────────────────────────────┘
```

### 7. PR (Pull Request)
**Responsável:** Você + Reviewers
**Resultado:** Código no main

---

## Onde Você Entra no Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SUA ENTRADA NO FLUXO                          │
└─────────────────────────────────────────────────────────────────────────┘

   RESEARCH ──→ PLAN ──────→ *.feature
                            (você recebe isso)
                                  │
                                  ▼
                        ┌─────────────────┐
                        │   VOCÊ COMEÇA   │
                        │    AQUI!        │
                        └────────┬────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
                ┌───────┐   ┌─────────┐   ┌───────┐
                │ TDD   │   │ CÓDIGO  │   │ GATE  │
                │ RED   │──→│ MINIMO  │──→│AUTO   │
                └───────┘   └─────────┘   └───────┘
```

**Você é responsável por:**
1. Ler e entender o `*.feature`
2. Implementar seguindo TDD (RED → GREEN)
3. Garantir que o Gate passe
4. Criar o Pull Request

---

## Responsabilidades por Papél

| Papél | Responsabilidades |
|-------|-------------------|
| **PO** | Research, Requirements, *.feature |
| **Tech Lead** | Plan, Code Review, Architecture |
| **Dev** | TDD, Implementação, Gate |
| **Husky (bot)** | Validação automática no commit |

---

## Fluxo Visual Detalhado

```
                        ┌─────────────────────────────────────┐
                        │           SUA JORNADA               │
                        └─────────────────────────────────────┘

    INÍCIO                                              FIM
      │                                                   ▲
      │  1. Escolha uma US                               │
      │                                                   │
      ▼  2. Leia *.feature                               │
  ┌─────────┐                                            │
  │ Entendi │   "Given I am on any page                  │
  │ o que   │    When I click the logo                   │
  │ fazer   │    Then I should be on home"               │
  └────┬────┘                                            │
       │                                                 │
       ▼  3. Crie teste (vai falhar!)                   │
  ┌─────────┐     RED phase                              │
  │  TESTE  │────────────────────────────────────────────┤
  │ FAILING │                                            │
  └────┬────┘                                            │
       │                                                 │
       ▼  4. Implemente o mínimo                        │
  ┌─────────┐     GREEN phase                            │
  │ CÓDIGO  │────────────────────────────────────────────┤
  │ MINIMO  │                                            │
  └────┬────┘                                            │
       │                                                 │
       ▼  5. Gate valida automaticamente                │
  ┌─────────┐                                            │
  │  GATE   │────────────────────────────────────────────┤
  │  AUTO   │                                            │
  └────┬────┘                                            │
       │                                                 │
       ▼  6. Crie o PR                                  │
  ┌─────────┐     🎉 PARABÉNS!                          │
  │   PR    │────────────────────────────────────────────┘
  └─────────┘
```

---

## Próximo Passo

Configure seu ambiente → `03-primeiros-passos.md`
