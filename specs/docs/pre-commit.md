# Pre-commit Hook

O projeto possui um hook em `.husky/pre-commit` que executa automaticamente antes de cada commit.

## Fluxo

```
git commit
    ↓
Agent Learnings Destiller
    ↓ (sucesso)
Code Pattern Validation
    ↓ (sucesso)
Playwright Tests
    ↓ (sucesso)
Commit permitido ✅
```

---

## 1. Agent Learnings Destiller

| Item | Detalhe |
|------|---------|
| Script | `.opencode/scripts/agent-learnings-destiller.ts` |
| Função | Extrai padrões únicos do session-log e atualiza `agent-learnings.json` |
| Executa | **Antes** de qualquer validação |

---

## 2. Code Pattern Validation

| Item | Detalhe |
|------|---------|
| Script | `frontend/scripts/pre-commit-validate.js` |
| Função | Verifica violações de guardrails |

### Regras Verificadas

| Regra | Severidade |
|-------|------------|
| Não usar `any` no TypeScript | ❌ Error |
| Não fazer `fetch` direto em componentes | ❌ Error |
| Não criar componentes sem tipar props | ❌ Error |
| Não adicionar comentários no código | ⚠️ Warning |
| Não adicionar tipagem de retorno explícita | ⚠️ Warning |

---

## 3. Playwright Tests

| Item | Detalhe |
|------|---------|
| Função | Executa testes E2E das features modificadas |
| Bloqueio | **Bloqueia commit** se testes falharem |

---

## Como Usar

```bash
# Commit normal (executa todas as validações)
git commit -m "feat: nova feature"

# Se bloqueio ocorrer:
# 1. Corrija os erros indicadps
# 2. Faça as correções necessárias
# 3. Tente commit novamente
```
