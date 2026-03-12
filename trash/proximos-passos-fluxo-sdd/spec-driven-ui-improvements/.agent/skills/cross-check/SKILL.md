# Skill: cross-check

> Camada: VALIDATION LAYER
> Input: `research.md` + `plan.md` + `tasks.md` + `[nome].feature`
> Output: `specs/features/[nome]/cross-check.md`

---

## Quando usar

- "execute o cross-check da [feature]"
- Obrigatório após aprovação das tasks, antes do orchestrator

---

## Verificações

### 1. Cobertura de ACs (BLOQUEANTE)

Para cada AC no `research.md`:
- Existe ao menos 1 task com esse AC listado?
- O AC aparece no `gherkin_ref` de alguma task?

Se AC sem cobertura → **BLOQUEANTE: liste ACs descobertos**

### 2. Consistência de tipos (BLOQUEANTE)

Para cada tipo em `plan.md`:
- O tipo é usado em ao menos 1 `files_affected` de alguma task?
- Não há tipo referenciado nas tasks que não existe no plan?

Se tipo ausente no plan mas usado nas tasks → **BLOQUEANTE**

### 3. Contratos de API (BLOQUEANTE)

Para cada endpoint no `plan.md`:
- O endpoint existe no `research.md`?
- Método, payload e response batem?

Se divergência → **BLOQUEANTE**

### 4. Dependências circulares (AVISO)

Analise os `files_affected` de todas as tasks.
Se task A afeta arquivo X e task B afeta arquivo X e B vem antes de A → AVISO de conflito potencial.

### 5. Token budget (AVISO)

- Alguma task tem `ctx_estimate` > 2.000 tokens? → AVISO, sugerir quebrar
- `plan.md` total > 3.000 tokens? → AVISO

---

## Template do output

```markdown
# Cross-check: [nome-da-feature]

## Status: ✅ OK | ⛔ BLOQUEADO

### Bloqueantes
- [ ] AC "descrição" do research não coberto por nenhuma task
- [ ] Tipo `XxxType` usado em US-003 não definido no plan.md

### Avisos (não-bloqueantes)
- Task US-004 ctx_estimate ~2.800t — considere quebrar
- Tipo `InternalHelper` definido no plan mas não usado em nenhuma task

### Confirmado
- [x] Todos os 5 ACs cobertos
- [x] Todos os 8 tipos do plan referenciados
- [x] 3 endpoints confirmados batem com research
```

---

## Regra de avanço

- **Zero bloqueantes** → pode prosseguir para o orchestrator
- **Qualquer bloqueante** → humano corrige o artefato afetado antes de continuar
