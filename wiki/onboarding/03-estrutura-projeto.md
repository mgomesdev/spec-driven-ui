# Estrutura do Projeto

## Visão Geral da Raiz

```
spec-driven-ui/
├── .husky/                        ← Git hooks (pre-commit + commit-msg)
├── .opencode/                     ← Configuração do OpenCode
├── frontend/                     ← Projeto Next.js
├── specs/                        ← Especificações e documentação
├── AGENTS.md                     ← Configuração dos agentes
└── opencode.json                 ← Configuração do OpenCode
```

---

## frontend/ — Projeto Next.js

```
frontend/
├── src/
│   ├── app/                      ← Next.js App Router (páginas)
│   │   ├── layout.tsx           ← Layout raiz
│   │   ├── page.tsx             ← Home
│   │   └── test-[name]/         ← Páginas de teste
│   │
│   └── components/              ← Componentes React (pasta plana)
│       ├── icon/
│       ├── button/
│       ├── avatar/
│       ├── logo/
│       ├── nav-list/
│       ├── sidebar/
│       └── header/
│
├── tests/
│   └── features/                 ← Testes E2E Playwright
│       └── [feature-name]/
│           ├── [feature].spec.ts
│           └── [feature].spec.docs.md
│
├── playwright.config.ts
├── next.config.ts
├── eslint.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## specs/ — Especificações

```
specs/
├── docs/                         ← Documentação geral
│   ├── architecture.md          ← Este arquivo
│   ├── guardrails.md             ← REGRAS CRÍTICAS
│   ├── convencoes-codigo.md      ← Convenções de código
│   ├── padroes-git.md            ← Commits e branches
│   └── tecnologias.md            ← Stack do projeto
│
└── features/                     ← Especificações por feature
    ├── design-system/            ← Design System (tokens globais)
    │   ├── research.md
    │   ├── plan.md
    │   └── features/
    │       └── design-tokens.feature
    │
    └── [nome-da-feature]/       ← Cada feature = 1 pasta
        ├── research.md
        ├── plan.md
        ├── progress.md
        └── features/
            └── [feature].feature
```

---

## Estrutura de Cada Feature

```
specs/features/[nome]/
├── research.md          ← Contexto e requisitos (PO)
├── plan.md              ← Plano técnico (Tech Lead)
├── progress.md         ← Status da implementação (auto)
└── features/
    └── [feature].feature ← Cenários BDD (Given-When-Then)
```

---

## Estrutura de Componentes (Atomic Design)

Componentes ficam em **pasta plana** (sem separação por tipo):

```
frontend/src/components/
├── icon/                  ← Atom
│   └── Icon.tsx
├── button/                ← Atom
│   └── Button.tsx
├── avatar/                ← Atom
│   └── Avatar.tsx
├── logo/                  ← Atom
│   └── Logo.tsx
├── nav-list/              ← Molecule
│   └── NavList.tsx
├── card/                  ← Molecule
│   └── Card.tsx
├── sidebar/               ← Organism
│   └── Sidebar.tsx
└── header/                ← Organism
    └── Header.tsx
```

> **Importante:** Cada componente tem pasta própria. Não aninhe!

---

## Ordem de Implementação

```
1. Design System (tokens globais)
   ↓
2. Atoms (icon, button, avatar, logo)
   ↓
3. Molecules (nav-list, card)
   ↓
4. Organisms (sidebar, header)
```

> **Regra (Guardrails):** Design System **SEMPRE** primeiro, antes de qualquer componente!

---

## Design System vs Features

| Aspecto | Design System | Componentes (RPI) | Features |
|---------|---------------|-------------------|----------|
| **Source of Truth** | `design-tokens.feature` | `*.feature` | `*.feature` |
| **Output CSS** | `globals.css` via @design-tokens-generator | Componente.tsx | N/A |
| **Testes** | Não gera | Gera via @tdd-generator | Gera via @tdd-generator |
| **Propósito** | Tokens globais | UI components | Funcionalidades |

---

## Setup do Projeto

```bash
# 1. Clone
git clone <url>
cd spec-driven-ui

# 2. Instale dependências
cd frontend
pnpm install

# 3. Setup hooks
pnpm prepare

# 4. Rode localmente
pnpm dev
# → http://localhost:3000
```

---

## Próximo Passo

Entenda BDD → `04-bdd-basico.md`
