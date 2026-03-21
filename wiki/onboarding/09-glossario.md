# Glossário: Termos e Siglas

## Termos Técnicos

| Termo | Definição |
|-------|-----------|
| **BDD** | Behavior-Driven Development — Metodologia focada em comportamento |
| **TDD** | Test-Driven Development — Escrever testes antes do código |
| **RPI** | Research → Plan → Implement (fluxo spec-driven) |
| **Spec** | Especificação — Documento que define o que implementar |
| **Feature** | Funcionalidade — Uma capacidade do sistema |
| **Scenario** | Cenário — Um caso de uso dentro de uma feature |
| **Gate** | Checkpoint automático que valida código |
| **Worktree** | Cópia do repositório em pasta separada |
| **Atomic Design** | Metodologia: atoms → molecules → organisms |

---

## Tags BDD

| Tag | Significado | Quando Usar |
|-----|-------------|-------------|
| `@desktop` | Teste desktop (1280px+) | UI desktop |
| `@mobile` | Teste mobile (375px) | UI mobile |
| `@tablet` | Teste tablet (768px) | UI tablet |
| `@a11y` | Acessibilidade | WCAG compliance |
| `@pending` | Não implementado | Sua tarefa! |
| `@done` | Implementado e testado | Pronto |
| `@wip` | Work in progress | Em andamento |

---

## Estrutura de Arquivos

| Arquivo | Localização | O Que Contém |
|---------|-------------|--------------|
| `*.feature` | `specs/features/[name]/features/` | Cenários BDD |
| `*.spec.ts` | `frontend/tests/features/[name]/` | Testes Playwright |
| `*.spec.docs.md` | `frontend/tests/features/[name]/` | Documentação de testes |
| `progress.md` | `specs/features/[name]/` | Status da implementação |
| `plan.md` | `specs/features/[name]/` | Plano técnico |
| `research.md` | `specs/features/[name]/` | Pesquisa e requisitos |

---

## Conventional Commits

| Tipo | Uso |
|------|-----|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Estilo (não afeta lógica) |
| `refactor` | Refatoração |
| `test` | Testes |
| `chore` | Manutenção |

**Formato:**
```
<tipo>(<escopo>): <descrição>

Exemplo: feat(sidebar): add logo navigation
```

---

## Siglas

| Sigla | Significado |
|-------|-------------|
| **PO** | Product Owner |
| **PM** | Product Manager |
| **TL** | Tech Lead |
| **US** | User Story |
| **PR** | Pull Request |
| **QA** | Quality Assurance |

---

## Estrutura do Projeto

```
spec-driven-ui/
├── frontend/                    # Projeto Next.js
│   ├── src/
│   │   ├── app/                # Páginas
│   │   └── components/         # Componentes React
│   └── tests/
│       └── features/           # Testes E2E
│
├── specs/                       # Especificações
│   ├── docs/                   # Documentação
│   └── features/               # Features specs
│
└── .husky/                      # Git hooks
```

---

## Fluxo Resumido

```
REQUISITO → RESEARCH → PLAN → *.feature → TDD → CÓDIGO → GATE → PR
```

| Etapa | O Que Acontece |
|-------|----------------|
| REQUISITO | Requisito do cliente/PO |
| RESEARCH | Análise e contexto |
| PLAN | Decisões técnicas |
| *.feature | Cenários BDD |
| TDD | Testes primeiro (RED→GREEN) |
| CÓDIGO | Implementação |
| GATE | Validação automática |
| PR | Pull Request |

---

## Atomic Design (Ordem de Implementação)

```
1. Design System (tokens globais) ← SEMPRE primeiro!
   ↓
2. Atoms (icon, button, avatar, logo)
   ↓
3. Molecules (nav-list, card)
   ↓
4. Organisms (sidebar, header)
```

---

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js | 16.1.6 |
| React | 19.2 |
| TypeScript | 5.9 |
| Tailwind | v4.2 |
| Playwright | (testes E2E) |

---

*Última atualização: 2026-03-21*
