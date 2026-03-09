# ANTES × DEPOIS — Mudanças detalhadas

---

## 1. AGENTS.md

### ANTES (inferido do README)
```
# AGENTS.md
Instruções gerais para o agente.
Sem stack definida explicitamente.
Sem proibições codificadas.
Sem protocolo de token budget.
```

### DEPOIS
> Ver arquivo completo: `.agent/AGENTS.md`

Principais adições:
- Seção `## Stack` com tecnologias obrigatórias e proibidas
- Seção `## Anti-Hallucination Guards` com regras NUNCA/SEMPRE
- Seção `## Token Budget` com limites por camada
- Seção `## Commit Convention` com padrão `feat(feature): US-XXX`

---

## 2. .agent/skills/research/SKILL.md

### ANTES
```markdown
Skill lê o requisito.
Faz perguntas de esclarecimento se necessário.
Gera research.md.
```

### DEPOIS
Adicionado:
- `## Protocolo de Esclarecimento` — checklist obrigatório de 6 domínios antes de gerar
- `## Seções obrigatórias` — research.md precisa ter todas as seções do template
- `## Token budget` — research.md não deve ultrapassar 600 tokens

---

## 3. .agent/skills/plan/SKILL.md

### ANTES
```markdown
Gera plan.md com:
- Estrutura de arquivos
- Interfaces e Types TypeScript
- Contratos de API
- Props dos componentes
- Hooks customizados
- Diagrama de dependências
```

### DEPOIS
Adicionado:
- `## Âncoras obrigatórias` — cada seção precisa de `<!-- #section-id ctx: ~Xk -->` 
- `## ctx_total` — comentário no topo com estimativa total
- `## Seção de Mocks` — obrigatória quando endpoints marcados como "a confirmar"
- `## Token budget` — plan.md não deve ultrapassar 3k tokens total

---

## 4. .agent/skills/tasks/SKILL.md

### ANTES
```markdown
Gera histórias atômicas ordenadas por dependência.
Cada história referencia a seção do plan.md para contexto.
```

### DEPOIS
Adicionado:
- Campo `ctx_estimate` obrigatório em cada task
- Campo `files_affected` obrigatório em cada task
- Campo `gherkin_ref` referenciando o arquivo .feature
- Regra: nenhuma task pode ter ctx_estimate > 2k tokens
- Se ultrapassar, quebrar em subtasks

---

## 5. .agent/skills/orchestrator/SKILL.md

### ANTES
```markdown
1. Lê padrões do progress.md
2. Seleciona a próxima história (Passes: false)
3. Consulta seção do plan.md referenciada
4. Implementa a história
5. Roda typecheck
6. Verifica no navegador
7. Commita
8. Marca Passes: true
9. Registra aprendizados no progress.md
```

### DEPOIS
Adicionado entre cada etapa:
- **Antes do passo 1:** verificar ctx_disponível vs ctx_estimate; se progress.md > 150 linhas → destilar
- **Antes do passo 3:** carregar APENAS seção referenciada em plan_ref + seção #section-types
- **Antes do passo 4:** aplicar Anti-Hallucination Guards explícitos
- **No passo 5:** expandido para typecheck + lint + quality-gates.json
- **Novo passo 5b:** verificar cenários Gherkin do gherkin_ref passando
- **Após passo 8:** verificar se progress.md precisa de destilação
- **Tratamento de falha:** rollback explícito com git stash + Passes: partial

---

## 6. NOVO: .agent/skills/cross-check/SKILL.md

Skill inteiramente nova entre tasks e orchestrator.

Verifica:
1. Cobertura de ACs (todo AC tem ao menos 1 task)
2. Consistência de tipos (tipos do plan usados nas tasks)
3. Contratos de API (plan bate com research)
4. Dependências circulares entre tasks

Output: `cross-check.md` com lista de bloqueantes e avisos.

---

## 7. NOVO: .agent/skills/gherkin/SKILL.md

Skill nova que transforma ACs do research em cenários Gherkin.

Gerada após o research, antes do plan.
Output: `specs/features/[nome]/[nome].feature`

---

## 8. Estrutura de arquivos completa

### ANTES
```
specs/features/[nome]/
├── research.md
├── plan.md
├── tasks.md
└── progress.md
```

### DEPOIS
```
specs/features/[nome]/
├── research.md
├── [nome].feature          ← NOVO (Gherkin)
├── plan.md
├── tasks.md
├── cross-check.md          ← NOVO (gerado pela skill cross-check)
└── progress.md

.agent/
├── AGENTS.md               ← MODIFICADO
├── quality-gates.json      ← NOVO
├── skills/
│   ├── research/SKILL.md   ← MODIFICADO
│   ├── plan/SKILL.md       ← MODIFICADO
│   ├── tasks/SKILL.md      ← MODIFICADO
│   ├── orchestrator/SKILL.md ← MODIFICADO
│   ├── cross-check/SKILL.md  ← NOVO
│   └── gherkin/SKILL.md      ← NOVO
└── templates/
    ├── research.template.md  ← NOVO
    ├── plan.template.md      ← NOVO
    └── tasks.template.md     ← NOVO
```
