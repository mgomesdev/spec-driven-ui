# Tutorial: Fluxo de Desenvolvimento com Agents

Este documento ensina como usar os agents do OpenCode para implementar features seguindo o fluxo completo de desenvolvimento.

---

## 🚀 Visão Geral do Fluxo

```
Requisitos → Research → Plan → Tasks → Implementação (TDD) → Verify → PR
            us-to-    research-  plan-to-  implement-             
            research  to-plan     tasks     tasks
```

---

## 📋 Pré-requisitos

1. **Servidor OpenCode rodando** - Execute `opencode` na raiz do projeto
2. **Branch correto** - Crie uma branch para sua feature: `git checkout -b us/nome-da-feature`
3. **Docs lidos** - Leia antes de começar:
   - `specs/docs/guardrails.md`
   - `specs/docs/convencoes-codigo.md`
   - `specs/docs/padroes-git.md`

---

## 🎯 passo a Passo

### Passo 1: Converter Requisitos em Research

**Agent:** `us-to-research`

```bash
"use a skill us-to-research para converter requisitos em research"
```

**Quando usar:**
- Recebeu uma User Story ou requisito abstrato
- Precisa transformar em documento estruturado para desenvolvimento

**O que faz:**
- Cria `specs/features/[nome-da-feature]/research.md`
- Verifica dependências (componentes necessários)
- Gera histórias de usuário

---

### Passo 2: Gerar Plano Técnico

**Agent:** `research-to-plan`

```bash
"execute research-to-plan para [nome-da-feature]"
```

**Quando usar:**
- Tem o research.md aprovado
- Precisa do plano técnico

**O que faz:**
- Cria `specs/features/[nome-da-feature]/plan.md`
- Define interfaces, tipos, estrutura de arquivos
- Detalha contratos de API (se aplicável)

---

### Passo 3: Criar Tasks

**Agent:** `plan-to-tasks`

```bash
"execute plan-to-tasks para [nome-da-feature]"
```

**Quando usar:**
- Tem o plan.md aprovado
- Precisa de user stories detalhadas

**O que faz:**
- Cria `specs/features/[nome-da-feature]/tasks.md`
- Gera US-001, US-002, etc. com critérios de aceitação
- Define prioridades

---

### Passo 4: Implementar as Tasks

**Agent:** `implement-tasks`

```bash
"execute as tasks da feature [nome-da-feature]"
```

**Quando usar:**
- Tem tasks.md aprovado
- Pronto para implementar

**O que faz:**
1. Lê os documentos de referência
2. Seleciona a história com maior prioridade (`Passes: false`)
3. Chama `tdd-playwright` para implementar com TDD
4. Chama `verify-patterns` para verificar padrões
5. Commita as mudanças
6. Atualiza tasks.md e progress.md
7. Repete até todas as histórias concluídas

---

### Passo 5: TDD (Test-Driven Development)

**Agent:** `tdd-playwright`

```bash
"execute tdd da US-[ID] para [nome-da-feature]"
```

**Quando usar:**
- Chamado automaticamente pelo `implement-tasks`
- Ou para testar manualmente uma implementação

**O que faz:**
1. Cria teste que **falha** (vermelho)
2. Implementa código para teste **passar** (verde)
3. Refatora se necessário
4. Commita

**Importante:** O teste deve falhar primeiro. Se passar sem código, o fluxo está errado.

---

### Passo 6: Verificar Padrões

**Agent:** `verify-patterns`

```bash
"execute verify-patterns para [nome-da-feature] US-[ID]"
```

**Quando usar:**
- Após o TDD passar
- Antes do commit

**O que faz:**
- Verifica convenções de código
- Verifica guardrails
- Verifica arquitetura
- Verifica contrato com plan.md
- Detecta drift

**Se drift detectado:** Retorna para o TDD para corrigir.

---

## 🔧 Como Resolver Problemas Comuns

### Problema 1: Agent não está disponível

**Sintoma:** O agent não responde ou dá erro "não disponível"

**Solução:**
1. Verifique se o servidor OpenCode está rodando
2. Atualize a lista de agents:
   ```bash
   # No AGENTS.md, verifique se o agent está registrado
   cat AGENTS.md
   ```
3. Recarregue o OpenCode

### Problema 2: Testes não são criados antes do código

**Sintoma:** Código foi implementado sem testes (fluxo TDD violado)

**Solução:**
1. Remova o código implementado
2. Execute novamente o `implement-tasks`:
   ```
   "execute as tasks da feature [nome-da-feature]"
   ```
3. O agent deve criar testes primeiro (que falham), depois código

### Problema 3: Verify-patterns não detecta problemas

**Sintoma:** Código com comentários passou na verificação

**Solução:**
1. Verifique se o `verify-patterns.md` inclui a regra:
   - Deve verificar comentários em `.tsx` E `.spec.ts`
2. Se não inclui, edite o agent:
   ```
   # Edite .opencode/agents/verify-patterns/verify-patterns.md
   | 8 | Não adicionar comentários | Grep por `//` ou `/*` em .tsx e .spec.ts |
   ```
3. Reexecute a verificação

### Problema 4: Destilação incompleta

**Sintoma:** Aprendizados não foram propagados para documentos gerais

**Solução:**
1. Atualize os documentos relevantes:
   - `specs/docs/guardrails.md` - se nova regra antipadrão descoberta
   - `specs/docs/convencoes-codigo.md` - se novo padrão de código
   - `specs/docs/architecture.md` - se estrutura mudou
2. Limpe o progress.md (deixe apenas esqueleto):
   ```markdown
   # Progress: [Feature]
   
   ---
   
   ## Padrões do Projeto
   
   <!-- Padrões específicos da feature [nome] -->
   
   ---
   ```
3. Commite com mensagem de destilação

### Problema 5: Commits não estão sendo feitos

**Sintoma:** Implementação feita mas não commitada

**Solução:**
1. Verifique se há changes:
   ```bash
   git status
   ```
2. Adicione e commite manualmente:
   ```bash
   git add .
   git commit -m "feat([feature]): descrição"
   ```
3. Siga o padrão de Conventional Commits:
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `docs:` documentação
   - `chore:` manutenção

### Problema 6: TypeScript errors

**Sintoma:** Typecheck falha

**Solução:**
1. Execute typecheck:
   ```bash
   cd frontend && pnpm tsc --noEmit
   ```
2. Corra os erros um por um
3. Não use `any` para resolver (viola guardrail)

### Problema 7: Testes Playwright falham

**Sintoma:** Testes não passam

**Solução:**
1. Verifique se servidor está rodando:
   ```bash
   # Em outro terminal
   cd frontend && pnpm dev
   ```
2. Execute testes:
   ```bash
   cd frontend && pnpm playwright test
   ```
3. Leia os erros e corrija o código ou o teste

---

## 📦 Estrutura de Arquivos

### Durante implementação, você trabalhará com:

```
specs/
└── features/
    └── [nome-da-feature]/
        ├── research.md      # Pesquisa e requisitos
        ├── plan.md          # Plano técnico
        ├── tasks.md         # User stories (implemente estas)
        └── progress.md      # Aprendizados (não edite manualmente)

frontend/
├── src/
│   ├── components/          # Componentes React
│   ├── app/                 # Páginas Next.js
│   └── ...
└── tests/
    └── features/
        └── [feature]/
            └── [us-id].spec.ts  # Testes E2E
```

---

## ✅ Checklist Antes de Criar PR

- [ ] Todas as tasks com `Passes: true`
- [ ] Typecheck passando (`pnpm tsc --noEmit`)
- [ ] Testes passando (`pnpm playwright test`)
- [ ] Verify-patterns aprovado
- [ ] Commits seguindo Conventional Commits
- [ ] Progress.md limpo (apenas esqueleto)
- [ ] Destilação feita (docs atualizados se necessário)

---

## 🆘 Precisa de Ajuda?

1. **Leia os guardrails:** `specs/docs/guardrails.md`
2. **Leia as convenções:** `specs/docs/convencoes-codigo.md`
3. **Consulte este tutorial**
4. **Peça ajuda** describindo o problema específico

---

## 📚 Referência Rápida de Comandos

| Ação | Comando |
|------|---------|
| Converter requisitos em research | `"use a skill us-to-research para [requisito]"` |
| Gerar plano | `"execute research-to-plan para [feature]"` |
| Criar tasks | `"execute plan-to-tasks para [feature]"` |
| Implementar tasks | `"execute as tasks da feature [feature]"` |
| Verificar padrões | `"execute verify-patterns para [feature] US-[ID]"` |
| Rodar testes | `cd frontend && pnpm playwright test` |
| Typecheck | `cd frontend && pnpm tsc --noEmit` |
| Servidor dev | `cd frontend && pnpm dev` |

---

**Última atualização:** 2026-03-16
