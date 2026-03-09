# ANTES × DEPOIS

> Este documento mostra exatamente o que muda e onde.

---

## Princípio da refatoração

```
ANTES: cada arquivo repete seus próprios valores (tokens, flags, padrões)
DEPOIS: PROJECT.config.md é o singleton — filhos leem e referenciam
```

---

## Arquivos NOVOS (criar do zero)

| Arquivo | Propósito |
|---------|-----------|
| `.agent/PROJECT.config.md` | **Singleton central** — toda configuração do projeto |
| `.agent/skills/cross-check/SKILL.md` | Skill de validação cruzada entre artefatos |
| `.agent/skills/gherkin/SKILL.md` | Skill de geração de cenários BDD |
| `.agent/templates/research.template.md` | Template estruturado com seções obrigatórias |
| `.agent/templates/plan.template.md` | Template com âncoras `#section-id` |
| `.agent/templates/tasks.template.md` | Template com `ctx_estimate` + `gherkin_ref` |
| `scripts/new-feature.sh` | Scaffold automático de feature |
| `specs/INDEX.md` | Índice de features mantido pelo orchestrator |
| `VALIDATION-LAYER.md` | Guia de todas as ferramentas de validação |

---

## Arquivos MODIFICADOS

### AGENTS.md

**ANTES:**
```markdown
## Token Budget por camada
| research.md | ≤ 600 tokens |
| plan.md     | ≤ 3.000 tokens |
...

## Stack
| Next.js 15 | App Router APENAS |
...
```

**DEPOIS:**
```markdown
## Configuração central
> Todos os valores em: `.agent/PROJECT.config.md`
> Leia-o antes de qualquer decisão.

## Stack
> Ver `[stack]` em PROJECT.config.md.
```

Princípio: AGENTS.md aponta para o config. Não repete valores.

---

### FLUXO-DEV.md

**ANTES:**
- Valores hardcoded no texto (`> 150 linhas`, `60%`, etc.)

**DEPOIS:**
- Referências ao config: `[tokens].progress_max`, `[tokens].ctx_safe_pct`
- Tabela de skills com coluna `Flag em config`
- Diagrama do pipeline menciona qual campo do config ativa cada etapa

---

### .agent/skills/\*/SKILL.md (todas as skills)

**ANTES:**
```markdown
## Token budget
- research.md: ≤ 600 tokens
- Se > 600, comprima...
```

**DEPOIS:**
```markdown
## Limite
Leia `[tokens].research_max` em PROJECT.config.md.
Se estimativa > esse valor → comprima até caber.
```

---

### .agent/skills/orchestrator/SKILL.md

**ANTES:**
```
3. Se progress.md > 100 linhas → destilar
5b. vitest run --grep @US-XXX (cenários Gherkin)
```

**DEPOIS:**
```
3. Se linhas > [tokens].progress_max → destilar
5. gate_gherkin → vitest run --grep {gherkin_ref}
   (só executa se [features].gate_gherkin = true)
```

---

### .agent/quality-gates.json

**ANTES:** arquivo JSON separado com booleanos duplicados do config

**DEPOIS:** removido. Flags consolidadas em `PROJECT.config.md → [features].gate_*`

---

## Estrutura final

```
.agent/
  PROJECT.config.md          ← SINGLETON — altere aqui
  AGENTS.md                  ← lê config, não repete
  skills/
    research/SKILL.md         ← lê [research] + [tokens].research_max
    gherkin/SKILL.md          ← lê [gherkin] + [features].skill_gherkin
    plan/SKILL.md             ← lê [tokens].plan_max
    tasks/SKILL.md            ← lê [tokens].tasks_max + task_ctx_max
    cross-check/SKILL.md      ← lê [cross_check].check_*
    orchestrator/SKILL.md     ← lê [orchestrator] + [guards] + [features].gate_*
  templates/
    research.template.md      ← referencia [tokens].research_max
    plan.template.md          ← referencia [tokens].plan_max
    tasks.template.md         ← referencia [tokens].tasks_max

FLUXO-DEV.md                 ← lê config para valores no pipeline
VALIDATION-LAYER.md          ← lê [features].gate_* + use_* + hook_*
scripts/new-feature.sh       ← scaffold, lê caminhos do config
specs/INDEX.md               ← mantido pelo orchestrator
```

---

## Como fazer uma mudança

**Exemplo: desabilitar testes Gherkin temporariamente**

```diff
# PROJECT.config.md → [features]
- gate_gherkin = true
+ gate_gherkin = false
```

Resultado: orchestrator para de rodar `vitest run --grep @US-XXX`.
Zero outras mudanças necessárias.

---

**Exemplo: aumentar limite do plan.md**

```diff
# PROJECT.config.md → [tokens]
- plan_max = 3000
+ plan_max = 4000
```

Resultado: skills/plan/SKILL.md e templates/plan.template.md usam automaticamente o novo valor.
