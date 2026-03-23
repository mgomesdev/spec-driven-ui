---
name: design-system-builder
description: "Implementa a estrutura completa do design-system: atualiza agentes existentes, cria estrutura de arquivos, e configura o fluxo spec-driven para design system."
mode: subagent
temperature: 0.1
tools:
  write: true
  edit: true
  read: true
  bash: true
permission:
  edit: allow
---

## Objetivo

Implementar o plano completo do design-system:
1. Atualizar agentes existentes (bdd-generator, diff, export, import)
2. Atualizar estrutura do design-system em specs/features/design-system/
3. Configurar fluxo spec-driven com pencil_id

## Fluxo de Execução

### Etapa 1: Analisar estado atual

Verificar arquivos existentes:
- `.opencode/agents/bdd-generator.md`
- `.opencode/agents/diff-design-vs-code.md`
- `.opencode/agents/export-code-to-design.md`
- `.opencode/agents/import-design-to-code.md`
- `specs/features/design-system/`

### Etapa 2: Atualizar bdd-generator.md

Adicionar seção para design-system que:
1. Detecta se feature = "design-system"
2. Gera .feature para cada categoria:
   - `design-tokens.feature` (sem pencil_id)
   - `atoms/*.feature` (com pencil_id)
   - `molecules/*.feature` (com pencil_id)
   - `organisms/*.feature` (com pencil_id)

**Template para pencil_id em .feature:**

```markdown
Funcionalidade: [Nome do Componente]
  **pencil_id:** "[id_no_pencil]"
```

### Etapa 3: Atualizar diff-design-vs-code.md

Adicionar:
1. Modo individual: `--component=[nome]`
2. Modo all: `--all`
3. Usar pencil_id da spec para buscar no Pencil
4. Remover menção a mappings.yaml
5. Exit code: 0 = synced, 1 = diff

### Etapa 4: Atualizar export-code-to-design.md

Adicionar:
1. Criar NOVO componente no Pencil (sufixo [PROPOSTA])
2. NÃO alterar componente original
3. Atualizar mappings na spec
4. Workflow de aprovação

### Etapa 5: Atualizar import-design-to-code.md

Adicionar:
1. Buscar componente aprovado por pencil_id
2. Verificar status: approved/rejected
3. Importar após aprovação do designer
4. Atualizar código com base no Pencil

### Etapa 6: Atualizar us-to-research do design-system

Criar versão específica para design-system que:
1. Lê componentes do Pencil via MCP
2. Extrai pencil_ids
3. Estrutura research.md com categorias Atomic Design
4. Design tokens como referência

### Etapa 7: Atualizar research.md do design-system

Estrutura:
- Lista de componentes por categoria
- pencil_id de cada componente
- Design tokens (referência)
- atomic design mapping

### Etapa 8: Atualizar plan.md do design-system

Estrutura:
- atoms/: button, badge, input, avatar, icon
- molecules/: card, search-bar, breadcrumbs, pagination, banner, quick-actions
- organisms/: sidebar, summary-cards, chart-section, table-section, gallery-section, stacked-list
- design-tokens.md

## Saída Esperada

```
✅ Design System Builder executado com sucesso

Arquivos atualizados:
- bdd-generator.md
- diff-design-vs-code.md
- export-code-to-design.md
- import-design-to-code.md
- specs/features/design-system/us-to-research.md
- specs/features/design-system/research.md
- specs/features/design-system/plan.md

Próximos passos:
1. Execute @bdd-generator design-system
2. Execute @implement-tasks design-system
```

## Validações

- [ ] bdd-generator detecta design-system
- [ ] .feature incluem pencil_id
- [ ] diff suporta --component e --all
- [ ] export cria NOVO no Pencil
- [ ] import requer aprovação prévia
