# Glossário: Termos e Siglas

## Termos Técnicos

| Termo | Definição |
|-------|-----------|
| **BDD** | Behavior-Driven Development — Metodologia de desenvolvimento focada em comportamento |
| **TDD** | Test-Driven Development — Escrever testes antes do código |
| **Spec** | Especificação — Documento que define o que deve ser implementado |
| **Feature** | Funcionalidade — Uma capacidade do sistema |
| **Scenario** | Cenário — Um caso de uso específico dentro de uma feature |
| **PR** | Pull Request — Requisição para mesclar código |
| **Gate** | Checkpoint automático que valida código |
| **Hook** | Script que executa automaticamente em eventos Git |
| **Worktree** | Cópia do repositório em pasta separada para trabalho paralelo |
| **Branch** | Ramificação do código |
| **Commit** | Snapshot do código |
| **Merge** | Mesclar branches |

---

## Tags BDD

| Tag | Significado | Quando Usar |
|-----|-------------|-------------|
| `@desktop` | Teste em desktop (1280px+) | UI desktop |
| `@mobile` | Teste em mobile (375px) | UI mobile |
| `@tablet` | Teste em tablet (768px) | UI tablet |
| `@a11y` | Teste de acessibilidade | WCAG compliance |
| `@pending` | Não implementado | Sua tarefa! |
| `@done` | Implementado e testado | Pronto |
| `@wip` | Work in progress | Em andamento |
| `@slow` | Teste demorado | Skip em dev |

---

## Estrutura de Arquivos

| Arquivo | Localização | O Que Contém |
|---------|-------------|--------------|
| `*.feature` | `specs/features/[name]/` | Cenários BDD |
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

Exemplo: feat(header): add logo navigation
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
| **UI** | User Interface |
| **UX** | User Experience |
| **API** | Application Programming Interface |
| **WCAG** | Web Content Accessibility Guidelines |

---

## Papéis

| Papél | Responsabilidade |
|-------|------------------|
| **Dev Junior** | Implementar seguindo TDD/BDD |
| **Dev Senior** | Code review, arquitetura |
| **Tech Lead** | Decisões técnicas, mentor |
| **PO** | Requisitos de negócio |
| **QA** | Validação de qualidade |

---

## Estrutura do Projeto

```ascii
spec-driven-ui/
├── frontend/                    # Projeto Next.js
│   ├── src/
│   │   ├── app/                # Páginas
│   │   ├── components/         # Componentes React
│   │   └── generated/          # Tipos gerados
│   ├── tests/
│   │   └── features/           # Testes E2E
│   └── scripts/                # Scripts de validação
│
├── specs/                       # Especificações
│   ├── docs/                   # Documentação
│   └── features/               # Features specs
│
├── onboarding/                  # Este guia
│
└── .husky/                      # Git hooks
```

---

## Fluxo Resumido

```ascii
REQ → RESEARCH → PLAN → *.feature → TDD → CÓDIGO → GATE → PR
```

| Etapa | O Que Acontece |
|-------|----------------|
| REQ | Requisito do cliente |
| RESEARCH | Análise e contexto |
| PLAN | Decisões técnicas |
| *.feature | Cenários BDD |
| TDD | Testes primeiro |
| CÓDIGO | Implementação |
| GATE | Validação automática |
| PR | Pull Request |

---

## Links Úteis

| Recurso | Link |
|---------|------|
| Playwright | https://playwright.dev |
| Gherkin | https://cucumber.io/docs/gherkin/ |
| Conventional Commits | https://www.conventionalcommits.org |
| TypeScript | https://www.typescriptlang.org |
| Tailwind | https://tailwindcss.com |

---

## Comandos Rápidos

```bash
# Desenvolvimento
pnpm dev
pnpm build
pnpm test

# Validação
npx tsc --noEmit
npx eslint src/
node scripts/pre-commit-validate.js

# Git
git checkout -b feat/[name]/[us-id]
git add .
git commit -m "feat([scope]): [desc]"
git push -u origin HEAD
```

---

*Última atualização: 2026-03-20*
