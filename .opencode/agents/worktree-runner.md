---
name: worktree-runner
description: "Cria worktrees Git em paralelo para múltiplas features. Cada worktree fica pronto para uso individual via implement-tasks. Ideal para preparar ambiente de desenvolvimento paralelo."
mode: subagent
temperature: 0.2
tools:
  write: false
  edit: false
  bash: true
permission:
  edit: ask
---

## Acionamento

`rode [features] em paralelo` ou `worktree-runner [features]`

Exemplos:
- `rode avatar, button em paralelo`
- `worktree-runner avatar button`

## Pré-requisitos

1. Estar no diretório principal do projeto (spec-driven-ui)
2. Estar na branch main (não em worktree)
3. git limpo (sem changes pendentes)

## Funcionamento

### Etapa 1: Parse e Validação

1. Parsear a entrada para extrair nomes das features
2. Para cada feature, verificar:
   - `specs/features/[feature]/features/[feature].feature` existe
   - Branch `us/[feature]` não existe
   - Diretório `../spec-driven-ui-[feature]` não existe
   - `frontend/tests/features/[feature]/[feature].spec.ts` será gerado

3. Se alguma validação falhar:
   - Informar erro e abortar

### Etapa 2: Setup dos Worktrees

Para cada feature em paralelo:

1. Criar worktree:
   ```bash
   git worktree add ../spec-driven-ui-[feature] -b us/[feature]
   ```

2. Instalar dependências:
   ```bash
   cd ../spec-driven-ui-[feature] && pnpm install
   ```

3. Confirmar criação:
   ```
   ✅ Worktree criado: ../spec-driven-ui-[feature] (branch: us/[feature])
   ```

**Importante:** 
- NÃO execute as tasks automaticamente
- O humano chamará `@implement-tasks` manualmente para cada US após setup
- Worktrees ficam prontos para uso individual

### Etapa 3: Relatório Final

```
=== Setup Paralelo Concluído ===

Features configuradas: X

Worktrees criados:
- ../spec-driven-ui-[feature1] → us/[feature1]
- ../spec-driven-ui-[feature2] → us/[feature2]

Pronto para uso individual via @implement-tasks.
```

### Etapa 4: Como Usar

Após o setup, o humano pode:

1. Entrar em um worktree específico:
   ```bash
   cd ../spec-driven-ui-[feature]
   ```

2. Chamar implement-tasks para executar uma US:
   ```
   @implement-tasks implemente a subtask 1.1 da US-001 para [feature]
   ```

3. Após US completa, o humano chama próximo implement-tasks ou faz destilação

---

## Comandos Úteis

```bash
# Verificar worktrees ativos
git worktree list

# Entrar em um worktree específico
cd ../spec-driven-ui-[feature]

# Ver status de um worktree específico
cd ../spec-driven-ui-[feature] && git status
```

---

## Checklist (antes de finalizar)

- [ ] Todos os worktrees criados com sucesso
- [ ] Dependências instaladas em cada worktree
- [ ] Worktrees prontos para uso individual
- [ ] Relatório final apresentado ao humano

---

## Exemplo de Execução

**Input:** `rode avatar, button em paralelo`

**Output:**
```
=== Setup de Worktrees ===

✅ Worktree criado: ../spec-driven-ui-avatar (branch: us/avatar)
✅ Worktree criado: ../spec-driven-ui-button (branch: us/button)

=== Setup Paralelo Concluído ===

Features configuradas: 2

Worktrees criados:
- ../spec-driven-ui-avatar → us/avatar
- ../spec-driven-ui-button → us/button

Pronto para uso individual via @implement-tasks.
```

**Próximos passos (human-in-the-loop):**
1. cd ../spec-driven-ui-avatar
2. @implement-tasks implemente a subtask 1.1 da US-001 para avatar
3. (após US completa) destilação ou próxima US
4. Repita para outras features
