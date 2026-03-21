# Agentes Disponíveis: Guia de Referência

Este documento lista todos os agentes (subagents) disponíveis no projeto e como utilizá-los.

## Índice

1. [Agents de Feature (Fluxo Completo)](#1-agents-de-feature-fluxo-completo)
2. [Agents de Geração](#2-agents-de-geração)
3. [Agents de Design](#3-agents-de-design)
4. [Agents Utilitários](#4-agents-utilitários)
5. [Quick Reference](#5-quick-reference)

---

## 1. Agents de Feature (Fluxo Completo)

Usados para transformar requisitos em código através do fluxo: Research → Plan → *.feature → Implementação.

### us-to-research

**Purpose:** Converte requisitos abstratos do Product Owner em research.md estruturado.

**Quando usar:**
- Recebe User Story ou briefing de feature não-técnica
- Necessita traduzir para linguagem de desenvolvimento

**Como invocar:**
```
@us-to-research [requisito do PO]
```

**Input:**
- Requisito do PO (texto ou descritivo)
- Decisões do usuário (mock vs real API, etc)

**Output:**
- `specs/features/[feature-name]/research.md`
- User Stories com critérios de aceitação
- Dependências identificadas (Atomic Design)
- Requisitos funcionais e não-funcionais

**Exemplo de uso:**
```
@us-to-research Desenvolver um Dashboard de Analytics com tema escuro moderno que permita 
profissionais de negócio visualizarem métricas-chave em tempo real. Decisões: bottom-up, 
mock data, Sidebar como prioridade, cores mandatórias #0A0A0B e #141417.
```

---

### research-to-plan

**Purpose:** Gera documento de Plan técnico a partir do research.md.

**Quando usar:**
- Após research.md estar aprovado
- Necessita mapear artefatos, interfaces, componentes

**Como invocar:**
```
@research-to-plan specs/features/dashboard-analytics/research.md
```

**Input:**
- `specs/features/[feature-name]/research.md`

**Output:**
- `specs/features/[feature-name]/plan.md`
- Interfaces TypeScript definidas
- Contratos de API documentados
- Estrutura de componentes
- Diagrama de dependências
- Folder structure do frontend

**Exemplo de uso:**
```
@research-to-plan specs/features/dashboard-analytics/research.md
Decisões: bottom-up, mock data, Sidebar primeiro, cores #0A0A0B #141417 #FF5C00
```

---

### bdd-generator

**Purpose:** Gera arquivos *.feature (Gherkin) a partir do research.md e plan.md.

**Quando usar:**
- Após plan.md estar aprovado
- Necessita cenários BDD para testes

**Como invocar:**
```
@bdd-generator specs/features/dashboard-analytics/research.md specs/features/dashboard-analytics/plan.md
```

**Input:**
- `specs/features/[feature-name]/research.md`
- `specs/features/[feature-name]/plan.md`

**Output:**
- `specs/features/[feature-name]/features/*.feature`
- Cenários Given-When-Then documentados
- Tags @desktop, @mobile, @happy, @rule, @defensive

**Exemplo de uso:**
```
@bdd-generator specs/features/dashboard-analytics/research.md specs/features/dashboard-analytics/plan.md
Gerar todos os arquivos .feature para a feature dashboard-analytics
```

---

### analyse-consistency

**Purpose:** Análise não destrutiva de consistência entre research.md, plan.md e *.feature.

**Quando usar:**
- Após gerar os arquivos .feature
- Antes de iniciar implementação
- Para identificar inconsistências e duplicações

**Como invocar:**
```
@analyse-consistency specs/features/dashboard-analytics
```

**Input:**
- `specs/features/[feature-name]/research.md`
- `specs/features/[feature-name]/plan.md`
- `specs/features/[feature-name]/features/*.feature`

**Output:**
- Relatório de inconsistências
- Plano de correção opcional
- Este agent é READ-ONLY (não modifica arquivos)

**Exemplo de uso:**
```
@analyse-consistency Verifique a consistência entre todos os artefatos da feature dashboard-analytics
```

---

### tdd-generator

**Purpose:** Gera testes Playwright documentados e documentação de spec a partir dos *.feature.

**Quando usar:**
- Após *.feature estar pronto
- Necessita criar testes E2E antes da implementação

**Como invocar:**
```
@tdd-generator specs/features/dashboard-analytics/features/sidebar.feature
```

**Input:**
- `specs/features/[feature-name]/features/[feature-name].feature`

**Output:**
- `frontend/tests/features/[feature-name]/[feature-name].spec.docs.md`
- data-testids referenciados
- Passos de implementação documentados

**Exemplo de uso:**
```
@tdd-generator specs/features/dashboard-analytics/features/sidebar.feature
```

---

### implement-tasks

**Purpose:** Executa uma subtask específica de uma User Story. Implementa código, executa gate (TDD + Verify + Typecheck + Lint), registra no progress.md.

**Quando usar:**
- Task específica atribuída a você
- Implementação código + testes
- Após *.feature estar pronto

**Como invocar:**
```
@implement-tasks implemente a subtask 1.2 da US-001 para a feature dashboard-analytics
```

**Input:**
- `specs/features/[feature-name]/features/[feature-name].feature`
- `specs/features/[feature-name]/plan.md`
- `specs/features/[feature-name]/progress.md`

**Output:**
- Código implementado em `frontend/src/components/`
- Testes E2E em `frontend/tests/features/`
- Gate executado (TDD + Verify + Typecheck + Lint)
- progress.md atualizado

**Fluxo interno:**
```
1. Lê docs de convenções (guardrails, convencoes-codigo)
2. Lê contexto da feature (*.feature, plan.md)
3. Cria/atualiza branch: feat/[feature]/[us-id]
4. Gera teste (*.spec.ts) → RED
5. Implementa código mínimo → GREEN
6. Executa gate (verify-patterns, tsc, eslint)
7. Atualiza progress.md
8. Retorna para revisão humana
```

**Exemplo de uso:**
```
@implement-tasks Execute a implementação completa da US-001 (Sidebar) para dashboard-analytics
```

---

### verify-patterns

**Purpose:** Verifica se código segue convenções do projeto (faz parte do GATE).

**Quando usar:**
- Parte do GATE antes de commit
- Após implementação de código

**Como invocar:**
```
@verify-patterns frontend/src/components/atoms/button.tsx
```

**Input:**
- Código implementado
- `specs/docs/guardrails.md`
- `specs/docs/convencoes-codigo.md`

**Output:**
- Validação de padrões
- Erros de convenção listados
- Este agent é READ-ONLY

**Verificações:**
- Props tipadas (sem `any`)
- Sem `style={{}}` inline
- Sem `React.FC`
- Sem `console.log`
- Nomenclatura correta (kebab-case)

**Exemplo de uso:**
```
@verify-patterns Verifique se o componente Sidebar segue todas as convenções do projeto
```

---

## 2. Agents de Geração

### tdd-playwright

**Purpose:** Executa ciclo TDD (RED → GREEN → REFACTOR) para uma subtask específica.

**Quando usar:**
- Implementando uma task específica
- Ciclo de desenvolvimento TDD
- Criar teste primeiro, depois código

**Como invocar:**
```
@tdd-playwright Crie o teste e implementação para o cenário "Sidebar exibe logo no topo"
```

**Input:**
- Task ou cenário específico
- `*.spec.docs.md` existente (se houver)

**Output:**
- Teste criado (RED phase)
- Código implementado (GREEN phase)
- Refatoração se necessário

**Fluxo:**
```
1. RED: Cria teste que falha
2. GREEN: Implementa código mínimo para passar
3. REFACTOR: Melhora código mantendo comportamento
```

**Exemplo de uso:**
```
@tdd-playwright Implemente TDD para o cenário "Sidebar desktop exibe estrutura completa"
```

---

## 3. Agents de Design

### export-code-to-design

**Purpose:** Envia código React para o arquivo .pen do Pencil, criando prototype visual.

**Quando usar:**
- Após implementação de página
- Deseja criar prototype visual para revisão de design

**Como invocar:**
```
@export-code-to-design
```

**Input:**
- Código React implementado em `frontend/src/`
- specs (research/plan) para intent

**Output:**
- Arquivo .pen atualizado
- Nova página/frame criada para revisão

**Fluxo:**
```
Código React → .pen Pencil → Revisão Design → import-design-to-code
```

**Exemplo de uso:**
```
@export-code-to-design Exporte o código da página dashboard-analytics para o arquivo designs/dashboard.pen
```

---

### import-design-to-code

**Purpose:** Importa design validado do Pencil de volta para o código.

**Quando usar:**
- Design foi revisado e ajustado no Pencil
- Necessita atualizar código fonte com base no design

**Como invocar:**
```
@import-design-to-code
```

**Input:**
- Alterações no .pen (design validado)
- Código atual em `frontend/src/`

**Output:**
- Código fonte atualizado com base no design

**Fluxo:**
```
export-code-to-design → Revisão no Pencil → import-design-to-code → Código atualizado
```

**Exemplo de uso:**
```
@import-design-to-code Atualize o código com as alterações que fiz no design do dashboard.pen
```

---

### diff-design-vs-code

**Purpose:** Compara arquivo .pen com código existente para identificar diferenças.

**Quando usar:**
- Antes de importar design
- Identificar gaps entre spec e implementação
- Preparar alinhamento entre design e código

**Como invocar:**
```
@diff-design-vs-code
```

**Input:**
- Arquivo .pen (design)
- Código React existente

**Output:**
- Relatório de diferenças estruturado
- Atomic Design breakdown das diferenças
- Sugestões de alinhamento

**Exemplo de uso:**
```
@diff-design-vs-code Compare o arquivo designs/dashboard.pen com a implementação atual
```

---

## 4. Agents Utilitários

### worktree-runner

**Purpose:** Cria Git worktrees para trabalho paralelo em múltiplas features.

**Quando usar:**
- Múltiplas features/fixes simultâneos
- Necessita branches isoladas para trabalho paralelo

**Como invocar:**
```
@worktree-runner
```

**Input:**
- Lista de features para criar worktrees
- Branches de destino

**Output:**
- Worktrees criados em `../[feature-name]/`
- Branches prontas para uso

**Comandos Git equivalentes:**
```bash
git worktree add ../feature-1 feat/feature-1
git worktree add ../feature-2 feat/feature-2
```

**Exemplo de uso:**
```
@worktree-runner Crie worktrees para as features dashboard-analytics e home-imobiliaria
```

---

### agent-learnings-runner

**Purpose:** Registra incidents e aprendizados durante a sessão.

**Quando usar:**
- Início de cada sessão (automático)
- Durante a sessão para registrar insights
- Final da sessão para consolidação

**Como invocar:**
- Iniciado automaticamente no início da sessão

**Input:**
- `agent-learnings.json` (existente)
- Conversação atual

**Output:**
- Insights registrados em `.opencode/agent-session-log.json`
- Padrões consolidados para sessões futuras

**Processo:**
```
1. Executa em paralelo ao agente principal
2. Monitora erros e acertos
3. Registra aprendizados durante a sessão
4. Ao final, consolida insights
```

**Exemplo de uso:**
```
Este agent inicia automaticamente. O humano não precisa invocá-lo manualmente.
```

---

## 5. Quick Reference

### Diagrama de Fluxo de Agents

```
┌─────────────────────────────────────────────────────────────────┐
│                    FLUXO DE FEATURE                              │
└─────────────────────────────────────────────────────────────────┘

   REQUISITO PO
       │
       ▼
   ┌─────────────┐
   │us-to-research│
   └──────┬──────┘
          │
          ▼
   ┌───────────────┐
   │research-to-plan│
   └──────┬────────┘
          │
          ▼
   ┌─────────────┐
   │ bdd-generator│
   └──────┬──────┘
          │
          ▼
   ┌──────────────────┐
   │analyse-consistency│  ← READ-ONLY (opcional)
   └──────┬───────────┘
          │
          ▼
   ┌─────────────┐
   │tdd-generator │  ← opcional
   └──────┬──────┘
          │
          ▼
   ┌─────────────────┐
   │ implement-tasks │
   └──────┬──────────┘
          │
          ▼
   ┌─────────────┐
   │tdd-playwright│  ← RED → GREEN
   └──────┬──────┘
          │
          ▼
      ┌───────┐
      │VERIFY  │  ← verify-patterns
      │PATTERNS│
      └────┬───┘
           │
           ▼
        ✅ PR
```

---

### Tabela Resumo

| Agent | Input | Output | Exemplo de Uso |
|-------|-------|--------|---------------|
| us-to-research | Requisito PO | research.md | "Desenvolver Dashboard Analytics..." |
| research-to-plan | research.md | plan.md | "specs/.../research.md" |
| bdd-generator | research + plan | *.feature | "specs/.../research.md specs/.../plan.md" |
| analyse-consistency | research + plan + *.feature | Relatório | "Verifique consistência da feature X" |
| tdd-generator | *.feature | *.spec.docs.md | "specs/.../sidebar.feature" |
| implement-tasks | *.feature + plan | Código + Testes | "Implemente US-001 da feature X" |
| verify-patterns | Código | Validação | "Verifique convenções do componente Y" |
| tdd-playwright | Task | RED → GREEN | "TDD para cenário X" |
| export-code-to-design | Código | .pen | "Exporte página X para designs/Y.pen" |
| import-design-to-code | .pen | Código | "Atualize código com design" |
| diff-design-vs-code | .pen + Código | Diff | "Compare .pen com código" |
| worktree-runner | Features | Worktrees | "Crie worktrees para X e Y" |
| agent-learnings-runner | Sessão | Learnings | (automático) |

---

### Atalhos por Situação

| Situação | Agent a Usar |
|----------|--------------|
| Recebi requisito do PO | `@us-to-research` |
| Research aprovado | `@research-to-plan` |
| Plan aprovado | `@bdd-generator` |
| Preciso validar artefatos | `@analyse-consistency` |
| Preciso de testes | `@tdd-generator` |
| Vou implementar | `@implement-tasks` |
| Ciclo TDD | `@tdd-playwright` |
| Validar código | `@verify-patterns` |
| Criar worktrees | `@worktree-runner` |
| Exportar para design | `@export-code-to-design` |
| Importar design | `@import-design-to-code` |
| Comparar design vs código | `@diff-design-vs-code` |

---

## Próximo Passo

Volte para `08-comandos.md` para comandos de terminal, ou vá para `09-tips.md` para dicas práticas.
