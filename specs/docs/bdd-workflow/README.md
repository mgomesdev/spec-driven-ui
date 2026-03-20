# BDD Workflow

> Orquestração de features com BDD, Worktrees e Approval Humano

## Índice

| Documento | Descrição |
|-----------|-----------|
| [00-referencia-rapida.md](00-referencia-rapida.md) | Referência rápida de comandos |
| [01-fluxo-principal.md](01-fluxo-principal.md) | Fluxo completo do início ao PR |
| [02-artifacts.md](02-artifacts.md) | Estrutura dos artefatos (research, plan, feature, spec) |
| [03-tags-status.md](03-tags-status.md) | Sistema de tags para cenários BDD |
| [04-orchestrator.md](04-orchestrator.md) | Responsabilidades do orquestrador |
| [05-subagent.md](05-subagent.md) | Ciclo de execução do subagent |
| [06-progress.md](06-progress.md) | Formato e uso do progress.md |
| [07-aproval.md](07-aproval.md) | Fluxo de aprovação humana |
| [08-worktrees.md](08-worktrees.md) | Estratégia de worktrees |
| [09-excecoes.md](09-excecoes.md) | Fluxos de exceção (retomada, correção, mudança) |
| [10-exemplo-header.md](10-exemplo-header.md) | Exemplo completo com feature Header |
| [11-plano-implementacao.md](11-plano-implementacao.md) | Plano de implementação dos agents |

## Agents

| Agent | Descrição | Arquivo |
|-------|-----------|---------|
| @bdd-generator | Gera *.feature do research.md | `.opencode/agents/bdd-generator.md` |
| @tdd-generator | Gera *.spec.ts + *.spec.docs.md | `.opencode/agents/tdd-generator.md` |

## Visão Geral

```
research.md → plan.md → *.feature → *.spec.ts → código → PR
     │            │           │           │          │
     │            │           │           │          └── Testes como âncora
     │            │           │           └── Cenários executáveis
     │            │           └── Given-When-Then
     │            └── Artefatos de alto nível
     └── Contexto de negócio
```

## Princípios

1. **Testes como âncora** - Todos os agentes convergem para testes passando
2. **Tags como estado** - *.feature com tags indica status de cada cenário
3. **Approval humano** - Aprovação necessária em cada ciclo
4. **Worktrees isoladas** - Cada cenário/contexto em branch separada
5. **Idempotência** - Cenários @done não re-executam

## Início Rápido

```bash
# 1. Criar research + plan
@research-to-plan feature=header

# 2. Gerar cenários BDD (*.feature)
@bdd-generator feature=header

# 3. Gerar testes documentados (*.spec.ts + *.spec.docs.md)
@tdd-generator feature=header

# 4. Criar worktrees
@worktree-runner feature=header tags=desktop,mobile,a11y

# 5. Ler *.spec.docs.md para implementar
# 6. Executar testes
# 7. Aprovação humana
# 8. Consolidação
@orchestrator merge feature=header
```

## Arquivos Gerados por Feature

```
specs/features/[nome]/
├── research.md           # Contexto de negócio
├── plan.md               # Artefatos de alto nível
├── features/
│   └── [nome].feature    # Cenários BDD com tags
└── progress.md           # Status dos cenários

frontend/
├── src/
│   └── components/[nome]/ # Código implementado
└── tests/
    └── features/[nome]/
        ├── [nome].spec.ts       # Testes Playwright
        └── [nome].spec.docs.md # Documentação detalhada
```
