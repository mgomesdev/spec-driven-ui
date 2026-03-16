---
name: worktree-runner
description: "Cria worktrees Git параллельно para múltiplas features e executa as tasks de cada uma em sua própria branch isolada. Ideal para implementar múltiplos componentes em paralelo sem conflitos."
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
   - `specs/features/[feature]/tasks.md` existe
   - Branch `us/[feature]` não existe
   - Diretório `../spec-driven-ui-[feature]` não existe

3. Se alguma validação falhar:
   - Informar erro e abortar

### Etapa 2: Setup dos Worktrees

Para cada feature em paralelo (usar jobs ou subagents):

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

### Etapa 3: Execução das Tasks

Para cada worktree criado, executar a task correspondente:

1. Ler `specs/features/[feature]/tasks.md`
2. Identificar as User Stories (US-001, US-002, etc.)
3. Executar cada US conforme os critérios de aceitação

**Importante:** 
- Cada worktree é independente. Execute o trabalho de forma isolada.
- **APÓS executar cada US, faça o commit** — siga o padrão de Conventional Commits em `specs/docs/padroes-git.md`
- **Atualize o tasks.md** marcando `Passes: true` para cada história concluída
- **Registre os aprendizados no progress.md**

### Etapa 4: Tratamento de Erros

- Se uma feature falhar → continuar com as outras
- Registrar erro para relatório final
- Não fazer cleanup automático

### Etapa 5: Relatório Final

```
=== Execução Paralela Concluída ===

Features processadas: X
✅ Sucesso: [lista]
❌ Falhou: [lista]

Worktrees criados:
- ../spec-driven-ui-avatar → us/avatar
- ../spec-driven-ui-button → us/button

Pronto para PR manual.
```

## Comandos Úteis (durante execução)

```bash
# Verificar worktrees ativos
git worktree list

# Ver status de um worktree específico
cd ../spec-driven-ui-[feature] && git status

# Ver logs de uma feature
cd ../spec-driven-ui-[feature] && git log --oneline -5
```

## Checklist (antes de finalizar)

- [ ] Todos os worktrees criados com sucesso
- [ ] Dependências instaladas em cada worktree
- [ ] Features executadas (ou erro registrado)
- [ ] Relatório final apresentado ao usuário
- [ ] Não fez cleanup - worktrees prontos para revisão

## Exemplo de Execução

**Input:** `rode avatar, button em paralelo`

**Output:**
```
=== Setup Worktrees ===

✅ Worktree criado: ../spec-driven-ui-avatar (branch: us/avatar)
✅ Worktree criado: ../spec-driven-ui-button (branch: us/button)

=== Execução das Features ===

📦 avatar: Executando US-001...
   - Criando src/components/avatar/avatar.tsx
   ✅ Concluído

📦 button: Executando US-001...
   - Criando src/components/button/button.tsx
   - Criando src/components/button/button.module.css
   ✅ Concluído

=== Execução Paralela Concluída ===

Features processadas: 2
✅ Sucesso: avatar, button
❌ Falhou: (nenhum)

Worktrees criados:
- ../spec-driven-ui-avatar → us/avatar
- ../spec-driven-ui-button → us/button

Pronto para PR manual.
```
