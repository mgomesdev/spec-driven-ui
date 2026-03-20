# Fluxo Principal - Feature: Início ao PR

## Fases do Fluxo

```
═══════════════════════════════════════════════════════════════════════
                         FASE 1: SPECIFICAÇÃO
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│  research.md                                                        │
│  ├── User Stories                                                   │
│  ├── Stack / Dependências                                          │
│  ├── RFs (Requisitos Funcionais)                                   │
│  └── RNFs (Requisitos Não-Funcionais)                               │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼ @research-to-plan
┌─────────────────────────────────────────────────────────────────────┐
│  plan.md                                                           │
│  ├── Artefatos de alto nível (serviços, componentes, endpoints)     │
│  ├── Estrutura de arquivos                                         │
│  └── Diagrama de dependências                                      │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼ @bdd-generator
┌─────────────────────────────────────────────────────────────────────┐
│  *.feature                                                         │
│  ├── Cenários BDD com tags (@desktop, @mobile, etc)                 │
│  ├── Todos cenários iniciam com @pending                          │
│  └── Given-When-Then cobre todos os RFs                           │
└─────────────────────────────────────────────────────────────────────┘
                              │
                         Aprovação PO
                              │
═══════════════════════════════════════════════════════════════════════
                         FASE 2: PREPARAÇÃO
═══════════════════════════════════════════════════════════════════════

                              ▼ @worktree-runner
┌─────────────────────────────────────────────────────────────────────┐
│  Worktrees criadas por tag/contexto                                 │
│                                                                      │
│  feat/header-desktop   → @desktop scenarios                        │
│  feat/header-mobile    → @mobile scenarios                         │
│  feat/header-a11y     → @a11y scenarios                          │
└─────────────────────────────────────────────────────────────────────┘
                              │
═══════════════════════════════════════════════════════════════════════
                         FASE 3: EXECUÇÃO PARALELA
═══════════════════════════════════════════════════════════════════════

┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│  WORKTREE-1        │  │  WORKTREE-2        │  │  WORKTREE-3        │
│  feat/header-desktop│  │  feat/header-mobile │  │  feat/header-a11y  │
│                    │  │                    │  │                    │
│  1. Lê *.feature  │  │  1. Lê *.feature  │  │  1. Lê *.feature  │
│  2. Filtra @desktop│  │  2. Filtra @mobile│  │  2. Filtra @a11y  │
│     @pending       │  │     @pending       │  │     @pending       │
│  3. Gera *.spec.ts│  │  3. Gera *.spec.ts│  │  3. Gera *.spec.ts│
│  4. Implementa     │  │  4. Implementa     │  │  4. Implementa     │
│  5. Testes fail   │  │  5. Testes fail   │  │  5. Testes fail   │
│  6. Corrige       │  │  6. Corrige       │  │  6. Corrige       │
│  7. Testes pass   │  │  7. Testes pass   │  │  7. Testes pass   │
│  8. Atualiza tags │  │  8. Atualiza tags │  │  8. Atualiza tags │
│  9. Return approve │  │  9. Return approve │  │  9. Return approve │
└────────────────────┘  └────────────────────┘  └────────────────────┘
           │                    │                     │
           └────────────────────┴─────────────────────┘
                                │
                         Aprovação humana
                                │
═══════════════════════════════════════════════════════════════════════
                         FASE 4: CONSOLIDAÇÃO
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│  *.feature: todos cenários @done                                    │
│                                                                      │
│  @orchestrator:                                                    │
│  1. Verifica todos cenários verdes                                 │
│  2. Merge das worktrees                                            │
│  3. Run testes integrados                                          │
│  4. Cria PR                                                        │
└─────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
                         FASE 5: PR
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│  Pull Request: feat/header                                         │
│                                                                      │
│  ## User Stories                                                   │
│  - [x] US-001: Header Desktop                                      │
│  - [x] US-002: Header Mobile                                       │
│  - [x] US-003: Logo Clicável                                       │
│                                                                      │
│  ## Cenários BDD (@done)                                           │
│  - [x] Header desktop exibe logo e menu                            │
│  - [x] Mobile exibe hamburger                                      │
│  - [x] Mobile abre overlay                                         │
│  - [x] Navegação por teclado                                       │
│                                                                      │
│  ## Testes: 15/15 passando                                         │
│                                                                      │
│  ## Arquivos                                                       │
│  - src/components/header/header.tsx                                │
│  - tests/features/header/header.spec.ts                            │
│  - specs/features/header/features/header.feature                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Pontos de Verificação

| Checkpoint | Critério | Quem Approva |
|------------|----------|--------------|
| research → plan | Requisitos claros | PO |
| plan → *.feature | Cenários cobrem RFs | PO |
| *.feature → worktrees | Tags corretas | Orchestrator |
| Cenário completo | Testes passando + validações | Humano |
| PR | 100% cenários @done | PO/Revisor |
