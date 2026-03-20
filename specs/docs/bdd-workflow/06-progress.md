# Progress.md - Formato e Uso

## Propósito

Rastrear o progresso dos cenários BDD durante a execução. Serve como:
- Contexto para retomada de trabalho
- Histórico de decisões
- Evidence de bugs e correções

---

## Estrutura Base

```markdown
# Progress: [Nome da Feature]

## Feature: [Nome]
**Status:** 🔄 Em Progresso | ✅ Completo

## Cenários

### @[contexto]
| Scenario | Status | Testes |
|----------|--------|--------|
| [Nome do cenário] | ✅ Done | 4/4 |
| [Nome do cenário] | 🔄 In Progress | 2/3 |
| [Nome do cenário] | ⏳ Pending | - |
| [Nome do cenário] | 🔴 Bug | 3/3 |

---

## Seção: Histórico

### [Data] - [Evento]
- [✅] Cenário "[Nome]" aprovado
- [⚠️] Bug: [descrição]
- [📝] Nota: [observação]

---

## Seção: Interrupções

| Data | Cenário | Estado | Contexto |
|------|---------|--------|----------|
| 15/01 14:30 | Hover no menu | 2/3 testes | Sessão encerrada |

---

## Seção: Correções

| Data | Cenário | Bug | Status |
|------|---------|-----|--------|
| 16/01 10:00 | Overlay mobile | Animação não funciona | ✅ Corrigido |

---

## Seção: Mudanças de Requisitos

| Data | Descrição | Cenários Afetados |
|------|-----------|-------------------|
| 17/01 09:00 | Menu com 5 itens | Overlay mobile |
```

---

## Status dos Cenários

| Status | Ícone | Significado |
|--------|-------|-------------|
| Done | ✅ | Completo, testes passando, aprovado |
| In Progress | 🔄 | Em execução |
| Pending | ⏳ | Não iniciado |
| Bug | 🔴 | Bug reportado |
| Blocked | 🔒 | Bloqueado por dependência |
| Rejected | ❌ | Reprovado após approval |

---

## Status da Feature

| Status | Ícone | Significado |
|--------|-------|-------------|
| Não Iniciado | ⏸️ | Nenhum cenário iniciado |
| Em Progresso | 🔄 | Cenários em andamento |
| Completo | ✅ | Todos cenários @done |
| Bloqueado | 🔒 | Feature bloqueada |

---

## Exemplo Completo

```markdown
# Progress: Header

## Feature: Header de Navegação
**Status:** 🔄 Em Progresso

## Cenários

### @desktop
| Scenario | Status | Testes |
|----------|--------|--------|
| Header desktop exibe logo e menu | ✅ Done | 4/4 |
| Itens do menu respondem a hover | 🔄 In Progress | 2/3 |
| Logo redireciona para home | ⏳ Pending | - |

### @mobile
| Scenario | Status | Testes |
|----------|--------|--------|
| Mobile exibe hamburger | ✅ Done | 3/3 |
| Mobile abre overlay | 🔴 Bug | 3/3 |
| Mobile fecha overlay com X | ⏳ Pending | - |

### @a11y
| Scenario | Status | Testes |
|----------|--------|--------|
| Navegação por Tab | ⏳ Pending | - |

---

## Histórico

### 2024-01-15 - Início da feature

- [🔄] Feature Header iniciada
- [📝] Plan aprovado: 7 cenários identificados

### 2024-01-15 - Cenário "Header desktop"

- [✅] Cenário "Header desktop exibe logo e menu" aprovado
- [⚠️] Hover state precisou correção (Tailwind `hover:` não funcionava no teste)
- [📝] Solução: usar `group-hover` com classe no container

### 2024-01-16 - Cenário "Mobile hamburger"

- [✅] Cenário "Mobile exibe hamburger" aprovado
- [📝] Viewport 375x667 para mobile

### 2024-01-16 - Bug encontrado

- [🔴] Bug: Overlay não anima ao abrir
- [⚠️] Teste 'deve abrir com animação' falha
- [📝] Causa: Tailwind transition não aplicado corretamente

---

## Interrupções

| Data | Cenário | Estado | Contexto |
|------|---------|--------|----------|
| 16/01 14:30 | Hover no menu | 2/3 testes | Sessão encerrada |

---

## Correções

| Data | Cenário | Bug | Status |
|------|---------|-----|--------|
| 17/01 09:00 | Overlay mobile | Animação não funciona | 🔄 Em correção |

---

## Mudanças de Requisitos

| Data | Descrição | Cenários Afetados |
|------|-----------|-------------------|
| - | - | - |
```

---

## Regras de Atualização

| Momento | O que atualizar |
|---------|----------------|
| Cenário inicia | Status → 🔄 In Progress |
| Cenário completo | Status → ✅ Done + testes count |
| Bug encontrado | Status → 🔴 Bug + descrição |
| Bug corrigido | Status → ✅ Done |
| Interrupção | Seção Interrupções + status atual |
| Aprovação | Histórico com ✅ |
| Rejeição | Histórico com ❌ |

---

## Uso pelo Orchestrator

```bash
# Ler estado atual
@orchestrator status feature=header

# Output:
Progress: Header
Status: 🔄 Em Progresso (4/7 cenários)

@desktop:
  ✅ Header desktop exibe logo (4/4 testes)
  🔄 Hover no menu (2/3 testes)
  ⏳ Logo redireciona

@mobile:
  ✅ Mobile exibe hamburger (3/3 testes)
  🔴 Mobile abre overlay (bug: animação)
  ⏳ Mobile fecha overlay

Interrupção ativa: Hover no menu (sessão 16/01 14:30)
```
