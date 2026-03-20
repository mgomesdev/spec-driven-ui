# Fluxos de Exceção

## 1. Retomada de Trabalho Interrompido

### Situação

Sessão foi encerrada no meio da execução de um cenário.

### Detecção

```bash
# Orchestrator verifica progress.md
@orchestrator status feature=header

# Output:
# 🔄 Hover no menu (2/3 testes)
# Interrupção detectada: Sessão 16/01 14:30
```

### Fluxo

```
┌─────────────────────────────────────────────────────────────────────┐
│                    RETOMADA DE TRABALHO                             │
└─────────────────────────────────────────────────────────────────────┘

1. ORCHESTRADOR DETECTA
   │
   ├── Lê progress.md
   ├── Identifica cenário @in-progress
   └── Pergunta: "Retomar 'Hover no menu'?"
   │
   ▼
2. HUMANO CONFIRMA
   │
   ├── Orchestrator delega novamente
   └── Subagent abre worktree
   │
   ▼
3. SUBAGENT RETOMA
   │
   ├── Lê progress.md para contexto
   ├── Lê *.spec.ts para ver estado
   ├── Identifica: 2/3 testes passando
   ├── Completa último teste
   └── Retorna para aprovação
   │
   ▼
4. CONTINUA CICLO NORMAL
```

### Contexto Salvo em progress.md

```markdown
## Interrupções

| Data | Cenário | Estado | Contexto |
|------|---------|--------|----------|
| 16/01 14:30 | Hover no menu | 2/3 testes | Sessão encerrada |
```

---

## 2. Correção de Bug

### Situação A: Bug durante implementação

O bug é encontrado antes da aprovação. Corrigido inline.

```
Subagent executa cenário
    │
    ├── Implementa código
    ├── Teste falha: "overlay não anima"
    │
    ▼
Corrige inline (mesmo ciclo)
    │
    ├── Corrige transição CSS
    ├── Teste passa
    └── Retorna para aprovação
```

### Situação B: Bug reportado após aprovação

O cenário estava @done, mas bug foi descoberto depois.

```
*.feature:
@mobile
  ✅ Mobile abre overlay    ← Bug descoberto!
  ⏳ Mobile fecha overlay

progress.md:
- Bug: Animação não funciona no overlay
```

### Fluxo: Correção Pós-Aprovação

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CORREÇÃO DE BUG PÓS-APROVADO                     │
└─────────────────────────────────────────────────────────────────────┘

1. BUG REPORTADO
   │
   ├── PO/Dev reporta bug em cenário @done
   └── Orchestrator marca como @bug
   │
   ▼
2. DECISÃO
   │
   ├── Pergunta: "Criar task de correção?"
   └── Se SIM → delega para subagent
   │
   ▼
3. WORKFLOW DE CORREÇÃO
   │
   ├── Subagent cria branch hotfix
   ├── Marca cenário como @in-progress
   ├── Cria teste que reproduz bug (deve falhar)
   ├── Corrige código
   ├── Teste passa
   ├── Validações
   └── Retorna para aprovação
   │
   ▼
4. REAPROVAÇÃO
   │
   ├── Humano aprova correção
   └── Marca como @done novamente
```

### Progress Atualizado

```markdown
## Correções

| Data | Cenário | Bug | Status |
|------|---------|-----|--------|
| 17/01 09:00 | Overlay mobile | Animação não funciona | ✅ Corrigido |
```

---

## 3. Mudança de Requisitos

### Situação

PO muda requisitos durante ou após desenvolvimento.

```
Requisito mudou: Menu mobile com 5 itens (não 4)
```

### Impacto

```
*.feature:
  Scenario: Mobile abre overlay
    Then o overlay lista 4 opções  ← MUDOU PARA 5!

*.spec.ts:
  await expect(links).toHaveCount(4)  ← PRECISA ATUALIZAR

código:
  DEFAULT_NAV_ITEMS = [5 itens]  ← PRECISA ATUALIZAR
```

### Fluxo

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MUDANÇA DE REQUISITOS                             │
└─────────────────────────────────────────────────────────────────────┘

1. REQUISITO MUDA
   │
   ├── PO atualiza *.feature
   ├── Adiciona nota: @requirements-changed
   └── Identifica cenários afetados
   │
   ▼
2. IMPACTO ANALISADO
   │
   ├── Orchestrator identifica:
   │   - Cenário "Mobile abre overlay" afetado
   │   - Teste precisa atualizar (4 → 5)
   │   - Código pode precisar atualizar
   │
   ▼
3. AÇÃO
   │
   ├── Se cenário @done: reexecutar
   ├── Se cenário @pending: atualizar e continuar
   └── *.spec.ts regenerado
   │
   ▼
4. REEXECUÇÃO SE NECESSÁRIO
   │
   ├── Cenário volta para @pending
   ├── Subagent executa novamente
   ├── Teste falha (5 != 4)
   ├── Corrige código/teste
   ├── Teste passa
   └── Retorna para aprovação
```

### Progress Atualizado

```markdown
## Mudanças de Requisitos

| Data | Descrição | Cenários Afetados |
|------|-----------|-------------------|
| 17/01 09:00 | Menu com 5 itens | Overlay mobile |
```

---

## 4. Rejeição após Aprovação

### Situação

Cenário foi aprovado, mas PO encontrou problema na revisão do PR.

```
Cenário "Header desktop" estava @done
PR criado
PO no code review: "Logo precisa ter 40x40, não 32x32"
```

### Fluxo

```
┌─────────────────────────────────────────────────────────────────────┐
│                    REJEIÇÃO PÓS-APROVAÇÃO                            │
└─────────────────────────────────────────────────────────────────────┘

1. PO REPORTA PROBLEMA
   │
   ├── Marca cenário como @rejected
   └── Detalha problema
   │
   ▼
2. ORCHESTRADOR IDENTIFICA
   │
   ├── Pergunta: "Criar correção?"
   └── Se SIM → delega
   │
   ▼
3. CORREÇÃO
   │
   ├── Subagent marca @in-progress
   ├── Corrige código (32x32 → 40x40)
   ├── Teste passa
   ├── Validações
   └── Retorna para aprovação
   │
   ▼
4. REAPROVAÇÃO
```

---

## 5. Dependência Bloqueada

### Situação

Cenário depende de outro que ainda não está pronto.

```
Scenario: Mobile abre overlay
  Depende de: Mobile exibe hamburger (ainda @pending)
```

### Fluxo

```
*.feature:
@mobile
  ⏳ Mobile exibe hamburger    ← Blocos o próximo
  🔒 Mobile abre overlay      ← Bloqueado!

progress.md:
| Scenario | Status | Dependência |
|----------|--------|-------------|
| Mobile exibe hamburger | ⏳ Pending | - |
| Mobile abre overlay | 🔒 Blocked | Mobile exibe hamburger |
```

### Quando Dependência Resolve

```
Mobile exibe hamburger: @done
    │
    ▼
Mobile abre overlay: @blocked → @pending
    │
    ▼
Orchestrator delega para subagent
```

---

## Resumo: Fluxos de Exceção

| Cenário | Gatilho | Ação |
|---------|---------|------|
| **Retomada** | Sessão interrompida | Detecta @in-progress, pergunta se retoma |
| **Bug inline** | Falha durante ciclo | Corrige inline, continua |
| **Bug pós-aprovado** | Bug reportado depois | Marca @bug, workflow de correção |
| **Mudança requisito** | PO atualiza *.feature | Reexecuta cenários afetados |
| **Rejeição** | PO nega após @done | Marca @rejected, corrige |
| **Bloqueado** | Dependência não pronta | Marca @blocked, desbloqueia depois |
