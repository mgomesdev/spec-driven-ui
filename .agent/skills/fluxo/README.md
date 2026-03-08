# Fluxo: Research → Plan → Tasks → Orchestrator

Fluxo completo de desenvolvimento frontend orientado a specs, com humano no loop revisando e aprovando cada etapa antes de avançar.

---

## Visão Geral

```
[US do PO]
    │
    ▼
research  →  research.md  →  [👤 revisão humana]
    │
    ▼
plan      →  plan.md      →  [👤 revisão humana]
    │
    ▼
tasks     →  TASKS.md     →  [👤 revisão humana]
    │
    ▼
orchestrator  →  implementa US-001  →  commit
                 implementa US-002  →  commit
                 implementa US-003  →  commit
                 ...
                 ✅ CONCLUÍDO
```

---

## Skills

| Skill | Input | Output | Humano aprova? |
|-------|-------|--------|----------------|
| `research` | US/briefing do PO | `research.md` | ✅ Sim |
| `plan` | `research.md` | `plan.md` | ✅ Sim |
| `tasks` | `research.md` + `plan.md` | `TASKS.md` | ✅ Sim |
| `orchestrator` | `TASKS.md` + `plan.md` | código commitado | 🔁 Por iteração |

---

## Estrutura de Arquivos Gerada

```
specs/
└── features/
    └── [nome-da-feature]/
        ├── research.md       ← gerado pela skill research
        ├── plan.md           ← gerado pela skill plan
        ├── TASKS.md          ← gerado pela skill tasks
        └── progress.md       ← mantido pelo orchestrator
```

---

## Passo a Passo

### 1. Research

**Quando usar:** Você tem uma US do PO/Notion e precisa convertê-la para linguagem de desenvolvimento.

**Como acionar:**
> "converta a US para o research" / "gere o research para a feature X"

**O que acontece:**
1. Skill lê o requisito
2. Faz perguntas de esclarecimento se necessário
3. Gera `specs/features/[nome]/research.md`
4. Apresenta resumo e **aguarda sua aprovação**

**Você revisa:**
- As histórias de usuário fazem sentido?
- Os critérios de aceitação são verificáveis?
- O escopo está correto?
- A integração com o backend está descrita?

---

### 2. Plan

**Quando usar:** Após aprovar o `research.md`.

**Como acionar:**
> "gere o plan" / "criar plan para [nome-da-feature]"

**O que acontece:**
1. Skill lê o `research.md`
2. Pergunta sobre stack se ambígua
3. Gera `specs/features/[nome]/plan.md` com:
   - Estrutura de arquivos
   - Interfaces e Types TypeScript
   - Contratos de API consumidos
   - Props dos componentes
   - Hooks customizados
   - Diagrama de dependências
4. Apresenta resumo e **aguarda sua aprovação**

**Você revisa:**
- Os tipos estão corretos para o seu projeto?
- Os contratos de API batem com o que o backend vai entregar?
- A estrutura de arquivos segue as convenções do projeto?
- Algum componente está faltando?

---

### 3. Tasks

**Quando usar:** Após aprovar o `plan.md`.

**Como acionar:**
> "gere as tasks" / "criar TASKS.md para [nome-da-feature]"

**O que acontece:**
1. Skill lê `research.md` + `plan.md`
2. Gera histórias atômicas ordenadas por dependência
3. Cada história referencia a seção do `plan.md` para contexto
4. Salva em `specs/features/[nome]/TASKS.md`
5. Apresenta resumo e **aguarda sua aprovação**

**Você revisa:**
- As histórias estão pequenas o suficiente (uma janela de contexto)?
- A ordem de implementação faz sentido (types antes de componentes)?
- Os critérios de aceitação são específicos e verificáveis?

---

### 4. Orchestrator

**Quando usar:** Após aprovar o `TASKS.md`.

**Como acionar:**
> "execute as tasks" / "iniciar o orchestrator para [nome-da-feature]"

**O que acontece por iteração:**
1. Lê padrões do `progress.md`
2. Seleciona a próxima história (`Passes: false`, maior prioridade)
3. Consulta seção do `plan.md` referenciada
4. Implementa a história
5. Roda typecheck (e lint/testes se configurados)
6. Verifica no navegador (para histórias com UI)
7. Commita: `feat: US-XXX - Título`
8. Marca `Passes: true` no TASKS.md
9. Registra aprendizados no `progress.md`
10. Verifica se há mais histórias

**Você pode interromper** a qualquer momento para revisar o código antes de continuar.

---

## Dicas

### Humano no loop
Cada skill para e pede aprovação antes de avançar. Isso garante que você valide o planejamento antes da implementação começar. Não pule as revisões — elas economizam tempo de debugging.

### Padrões do projeto
O `progress.md` acumula padrões descobertos durante a implementação. Após as primeiras features, ele se torna um guia valioso que o orchestrator consulta automaticamente.

### Ajustando entre etapas
Se durante o plan você perceber que o research está incompleto, volte e ajuste o `research.md` antes de continuar. O mesmo vale para o plan antes de gerar as tasks.

### Features com backend em paralelo
Se o backend ainda não está pronto, defina os contratos no `plan.md` como "a confirmar" e use mocks nos serviços. O orchestrator implementará os mocks; você substitui depois quando o backend estiver pronto.
