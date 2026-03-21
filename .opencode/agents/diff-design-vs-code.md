---
name: diff-design-vs-code
description: "Compara design tokens e componentes entre o Pencil (via pencil_id na spec) e o código. Suporta modo individual (--component) e em massa (--all). Retorna exit code: 0 = synced, 1 = diff."
mode: subagent
temperature: 0.1
tools: 
    read: true
    pencil_open_document: true
    pencil_get_editor_state: true
    pencil_batch_get: true
    pencil_get_variables: true
    bash: true
---

## Acionamento

- 'diff design vs código'
- 'diff --component=[nome]'
- 'diff --all'
- 'comparar design com código'
- 'analise sincronização do design'

## Modos de Execução

| Modo | Comando | Descrição |
|------|---------|-----------|
| **Individual** | `diff-design-to-code --component=sidebar` | Compara apenas um componente |
| **Em massa** | `diff-design-to-code --all` | Compara todos os componentes |

## Entradas

- Arquivos `.pen` na raiz do projeto
- `@specs/features/*/features/*.feature` (especificações BDD)
- `@frontend/src/app/global.css` (se existir)
- `@frontend/src/components/**/*` (componentes React existentes)

## Fonte da Verdade

**BDD Spec (.feature) é a fonte da verdade.**

O diff compara:
1. **Spec (.feature)** → Contém `pencil_id` e valores esperados
2. **Pencil (.pen)** → Busca nó por `pencil_id` via MCP
3. **Código** → Implementação React/Tailwind

## Funcionamento

### Etapa 1 — Identificar o que comparar

**Modo Individual (`--component=[nome]`):**
1. Localizar `.feature` do componente especificado
2. Extrair `pencil_id` da especificação
3. Comparar apenas esse componente

**Modo All (`--all`):**
1. Listar todos os `.feature` em `specs/features/*/features/`
2. Para cada um, extrair `pencil_id` se existir
3. Comparar todos os componentes

### Etapa 2 — Obter dados da Spec (.feature)

1. Ler arquivo `.feature` do componente
2. Extrair `pencil_id` (formato: `**pencil_id:** "xxx"`)
3. Parsear cenários para extrair valores esperados:
   - Cores (hex codes)
   - Tamanhos (px, rem)
   - Border radius
   - Padding/Margin
   - Tipografia

```typescript
// Extração de pencil_id
const pencilIdMatch = featureContent.match(/\*\*pencil_id:\*\*\s*["']?([\w-]+)/i);
const pencilId = pencilIdMatch ? pencilIdMatch[1] : null;

// Extração de valores esperados dos cenários
const expectedValues = parseScenarios(featureContent);
```

### Etapa 3 — Obter dados do Pencil (via MCP)

1. Abrir documento: `pencil_open_document` com arquivo `.pen`
2. Buscar nó pelo `pencil_id`: usar `pencil_batch_get` com nodeIds
3. Extrair propriedades:
   - `fill` → cor de background
   - `cornerRadius` → border-radius
   - `width`, `height` → dimensões
   - `padding` → espaçamento interno
   - `stroke` → bordas

```typescript
// Buscar nó no Pencil por ID
const nodeData = await pencil_batch_get({
  filePath: 'pencil-demo.pen',
  nodeIds: [pencilId],
  readDepth: 3
});

// Extrair valores do Pencil
const pencilValues = {
  fill: nodeData.fill,
  cornerRadius: nodeData.cornerRadius,
  width: nodeData.width,
  // ...
};
```

### Etapa 4 — Obter dados do Código

1. Ler componente React em `frontend/src/components/`
2. Parsear Tailwind classes ou CSS inline
3. Converter para formato comparável

```typescript
// Exemplo de conversão Tailwind → valores
const tailwindToValue = {
  'bg-[#141417]': '#141417',
  'rounded-xl': 12,
  'w-[260px]': 260,
  'py-6': 24,
  'px-5': 20,
};
```

### Etapa 5 — Comparação

Comparar valores: **Spec vs Pencil vs Código**

| Propriedade | Spec (BDD) | Pencil | Código | Resultado |
|-------------|------------|--------|--------|----------|
| fill | #141417 | #141417 | #141417 | ✅ |
| cornerRadius | 12 | 12 | 8 | ❌ |
| width | 260 | 260 | 260 | ✅ |

### Etapa 6 — Classificação

- `✅ SINCRONIZADO` — Spec = Pencil = Código
- `❌ DIVERGENTE_PENCIL` — Spec ≠ Pencil
- `❌ DIVERGENTE_CODIGO` — Spec ≠ Código
- `⚠️ PARCIAL` — Pencil e Código sincronizados, mas Spec desatualizada
- `🆕 SEM_IMPLEMENTACAO` — Spec existe, Pencil/Código não

### Etapa 7 — Gerar relatório

**Modo Individual:**
```
diff-design-to-code --component=sidebar

✅ Sidebar (ncY1p) está sincronizado
   - fill: #141417 ✅
   - radius: 12 ✅
   - width: 260px ✅
```

```
diff-design-to-code --component=button

❌ Button (btn001) dessincronizado
   - fill: BDD #FF5C00 ≠ Pencil #FF5500 ❌
   - radius: BDD 8 = Código 8 ✅
```

**Modo All:**
```
diff-design-to-code --all

📊 Relatório Geral:
─────────────────────────────────────────────────────
✅ 14 componentes sincronizados
❌ 3 componentes com divergências

Componentes Dessincronizados:
─────────────────────────────────────────────────────
❌ Sidebar (ncY1p)
   - fill: BDD #141417 ≠ Pencil #FF5500

❌ Button (btn001)
   - radius: BDD 8 ≠ Código 12

❌ Card (card001)
   - padding: BDD 24 ≠ Código 16

─────────────────────────────────────────────────────
Exit Code: 1 (há divergências)
```

### Etapa 8 — Exit Codes

| Código | Significado |
|--------|------------|
| 0 | Todos os componentes sincronizados |
| 1 | Há divergências (spec ≠ pencil ou spec ≠ código) |

**Para CI/Hooks:**
```bash
diff-design-to-code --all
if [ $? -eq 0 ]; then
  echo "✅ Design sincronizado"
else
  echo "❌ Design dessincronizado"
  exit 1
fi
```

## Arquivos de Saída

- Relatório formatado no terminal (stdout)
- Exit code para automação (0 = synced, 1 = diff)

## Fluxo para Design System

Quando a feature é `design-system`:

1. Listar todos os `.feature` em `specs/features/design-system/features/`
2. Para cada categoria (atoms, molecules, organisms):
   - design-tokens.feature: testar CSS vars diretamente
   - Demais: extrair pencil_id e comparar com Pencil
3. Gerar relatório consolidado
