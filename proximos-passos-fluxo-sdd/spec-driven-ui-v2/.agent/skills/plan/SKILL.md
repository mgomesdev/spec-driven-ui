# Skill: plan
# Camada: GENERATION LAYER
# Config: .agent/PROJECT.config.md → [tokens].plan_max · [stack]

---

## Acionamento

- "gere o plan para [feature]"

---

## Regras de geração

### Âncoras — obrigatórias para leitura cirúrgica

O orchestrator carrega APENAS a seção referenciada (`[orchestrator].plan_load_strategy = surgical`).
Sem âncoras = orchestrator carrega o arquivo inteiro = desperdício de tokens.

Formato obrigatório em cada seção:
```markdown
<!-- #section-id ctx: ~Xt -->
## Nome da Seção
```

`ctx: ~Xt` = estimativa de tokens desta seção.

### ctx_total no topo

```markdown
<!-- ctx_total: ~Xt -->
# Plan: [nome]
```

Deve refletir a soma de todas as seções.
Se total > `[tokens].plan_max` → comprima até caber.

### Mocks (quando necessário)

Se qualquer endpoint no `research.md` está como "a confirmar":
- Gere seção `<!-- #section-mocks -->` com factories tipadas
- Usa os tipos já definidos em `#section-types`
- Permite substituir mock por real sem alterar tipos

---

## Estrutura obrigatória

```
<!-- ctx_total: ~Xt -->
# Plan: [nome]

<!-- #section-types ctx: ~Xt -->
## Tipos & Interfaces

<!-- #section-estrutura ctx: ~Xt -->
## Estrutura de arquivos

<!-- #section-componentes ctx: ~Xt -->
## Componentes

<!-- #section-hooks ctx: ~Xt -->
## Hooks

<!-- #section-api ctx: ~Xt -->
## Contratos de API

<!-- #section-mocks ctx: ~Xt -->
## Mocks  ← omitir se todos endpoints confirmados
```

---

## Limites por seção

- Cada seção: máx `[tokens].task_ctx_max` tokens
- Total: máx `[tokens].plan_max` tokens

---

## Após gerar

Liste seções com ctx estimado e total → **aguarde aprovação**
