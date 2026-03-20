# Responsabilidades do Orquestrador

## Visão Geral

O orquestrador é a entidade que coordena a execução dos cenários BDD. Pode ser:
- Um agente de IA específico (`@orchestrator`)
- Um processo manual do humano
- Uma combinação de ambos

---

## Responsabilidades

| # | Responsabilidade | Descrição |
|---|------------------|-----------|
| 1 | Analisar estado | Lê *.feature e progress.md |
| 2 | Identificar próximos | Filtra cenários @pending |
| 3 | Delegar tarefas | Repassa cenários para subagents |
| 4 | Coordenar paralelos | Gerencia worktrees simultâneas |
| 5 | Monitorar progresso | Acompanha status dos cenários |
| 6 | Consolidar | Merge quando 100% @done |
| 7 | Criar PR | Gera Pull Request final |

---

## Fluxo de Decisão

```
┌─────────────────────────────────────────────────────────────────────┐
│                      ORCHESTRADOR                                   │
└─────────────────────────────────────────────────────────────────────┘

1. ANALISAR ESTADO
   │
   ▼
   Lê *.feature + progress.md
   │
   ▼
2. IDENTIFICAR PRÓXIMOS
   │
   ├─ @pending cenários → podem delegar
   ├─ @in-progress → retomar?
   ├─ @blocked → desbloquear?
   ├─ @bug → corrigir?
   └─ @done → OK, continuar
   │
   ▼
3. DELEGAR (se humano confirmar)
   │
   └─ "Qual cenário executar?"
   │
   ▼
4. MONITORAR
   │
   └─ Aguarda retorno do subagent
   │
   ▼
5. APROVAR/NEGAR
   │
   ├─ Aprova → marca @done
   └─ Nega → retorna ao subagent
   │
   ▼
6. REPETIR até 100%
```

---

## Comandos do Orchestrator

### Listar Cenários

```bash
# Todos cenários pendentes
@orchestrator list --status=@pending feature=header

# Cenários por tag
@orchestrator list --tag=@desktop feature=header

# Status completo
@orchestrator status feature=header
```

**Output:**
```
Header - Status: 3/7 cenários

@desktop
  ✅ Header desktop exibe logo e menu
  🔄 Hover no menu (2/3 testes)
  ⏳ Logo redireciona

@mobile
  ⏳ Mobile exibe hamburger
  ⏳ Mobile abre overlay
  🔴 Bug: overlay não anima

@a11y
  ⏳ Navegação por Tab
```

### Delegar Cenário

```bash
@orchestrator delegate scenario="Mobile exibe hamburger" to worktree=feat/header-mobile
```

**Output:**
```
Delegado: "Mobile exibe hamburger"
Worktree: feat/header-mobile
Tags: @mobile, @pending
Aguardando execução do subagent...
```

### Verificar Progresso

```bash
@orchestrator progress feature=header
```

**Output:**
```
Header - Progresso

✅ 2/7 cenários completos
🔄 1/7 em andamento
⏳ 3/7 pendentes
🔴 1/7 com bug

Testes: 12/21 passando
```

### Consolidar

```bash
@orchestrator merge feature=header
```

**Output:**
```
Todos cenários @done!
- Merge das worktrees: feat/header-desktop, feat/header-mobile, feat/header-a11y
- Run testes integrados: 21/21 passando
- Criando PR...
```

---

## Interações com Humano

| Momento | Pergunta | Ação |
|---------|----------|------|
| Início | "Qual cenário executar?" | Delegar próximo |
| Retomada | "Cenário 'X' está @in-progress. Retomar?" | Confirmar ou cancelar |
| Bug | "Bug reportado em 'X'. Criar correção?" | Criar workflow de correção |
| Rejeição | "Cenário 'X' reprovado. Corrigir?" | Voltar ao subagent |
| Mudança | "Requisito mudou. Impacto em 'X'." | Reexecutar cenários afetados |
| 100% | "Todos cenários @done. Fazer merge?" | Consolidar e criar PR |

---

## Exemplo de Sessão

```
> @orchestrator status feature=header

Header - Status: 2/7 cenários

@desktop
  ✅ Header desktop exibe logo e menu
  🔄 Hover no menu (2/3 testes)
  ⏳ Logo redireciona

@mobile
  ⏳ Mobile exibe hamburger
  ⏳ Mobile abre overlay

> @orchestrator delegate scenario="Mobile exibe hamburger" to worktree=feat/header-mobile

Delegado: "Mobile exibe hamburger"
Aguardando...

[Subagent executa...]

> @orchestrator

Cenário "Mobile exibe hamburger" verde (3/3 testes).
Aprova?

[ Aprovar ] [ Revisar ] [ Modificar ]

> Aprovar

✅ Cenário marcado como @done
Próximo: "Logo redireciona" ou "Mobile abre overlay"

> @orchestrator delegate scenario="Logo redireciona" to worktree=feat/header-desktop

...
```

---

## Regras do Orchestrator

| Regra | Descrição |
|-------|-----------|
| Não delegar @done | Cenários completos não re-executam |
| Não delegar @blocked | Resolver dependência primeiro |
| Priorizar @pending | Cenários waiting primeiro |
| Max параллельных | Limitar worktrees simultâneas |
| Sempre confirmar | Humano aprova antes de delegar |
