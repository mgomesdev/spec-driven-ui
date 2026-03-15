---
name: diff-design-vs-code
description: "Ler o arquivo .pen do Pencil, comparar com o código existente e gerar um relatório de diferenças em formato amigável."
mode: subagent
temperature: 0.1
tools: 
    read: true
    pencil_get_editor_state: true
    pencil_batch_get: true
    pencil_get_variables: true
---

## Acionamento

- 'analise as alterações no design do pencil'
- 'compare o design com o código'
- 'diff design vs código'

## Entradas

- Arquivos `.pen` na raiz do projeto
- `@frontend/src/app/global.css` (se existir)
- `@frontend/src/components/**/*` (componentes React existentes)

## Funcionamento

### Etapa 1 — Obter dados reais do Pencil

1. Usar `pencil_open_document` com arquivos `.pen` para carregar o design
2. Usar `pencil_get_editor_state` para obter a estrutura do documento
3. Usar `pencil_batch_get` com `patterns: [{type: "frame"}, {type: "text"}, {type: "rectangle"}]` para buscar componentes
4. Usar `pencil_get_variables` para obter os tokens de design definidos
5. Extrair valores REAIS: cores, tamanhos, fontes, spacings diretamente dos nós

### Etapa 2 — Obter dados reais do código

1. Ler `frontend/src/app/global.css` (todo o conteúdo)
2. Listar todos os componentes em `frontend/src/components/`

### Etapa 3 — Comparação REAL

Para CADA token/componente:
1. Pegar o valor EXATO do Pencil (ex: #101828)
2. Pegar o valor EXATO do código (ex: --color-bg-primary: #000000)
3. Comparar e determinar o status real

### Etapa 4 — Classificação

- `✅ SINCRONIZADO` — valor no Pencil = valor no código
- `❌ DIVERGENTE` — existe em ambos, mas valores diferentes
- `🆕 NOVO NO DESIGN` — existe no Pencil, não existe no código
- `📦 NÃO IMPLEMENTADO` — especificado mas não implementado
- `🗑️ REMOVIDO` — existe no código mas foi removido do design

### Etapa 5 — Gerar relatório amigável

Escrever em `@/specs/report/design-diff.md` com formato claro e amigável:

```markdown
# 🎨 Design vs Código — Relatório de Comparação

> Gerado em: [data]

## 📊 Resumo Geral

| Status | Quantidade |
|--------|------------|
| ✅ SINCRONIZADOS | X |
| ❌ DIVERGENTES | X |
| 🆕 NOVOS NO DESIGN | X |
| 📦 NÃO IMPLEMENTADOS | X |

---

## 🎯 Tokens de Design

### Cores
| Token | Pencil | Código | Status |
|-------|--------|--------|--------|
| --color-bg | #101828 | #101828 | ✅ |

### Dimensões
| Token | Pencil | Código | Status |
|-------|--------|--------|--------|
| --header-height | 80px | 80px | ✅ |

---

## 🧩 Componentes

### Header
- **Status**: ✅ SINCRONIZADO
- **Código**: `frontend/src/components/Header/` ✓

### Hero Section
- **Status**: ❌ DIVERGENTE
- **Código**: `frontend/src/components/Hero/` ⚠️ valores diferentes
- **Diferenças**: padding-bottom: 131px (Pencil) vs 64px (código)

---

## 🚀 Ações Prioritárias

1. **[ALTA]** Corrigir divergência no Hero — padding está diferente
2. **[ALTA]** Implementar novo componente FooterFoundations
3. **[MÉDIA]** Sincronizar tokens de cor com o design

---

## 📁 Arquivos de Referência

- Design: arquivos `.pen` na raiz do projeto
- CSS: `frontend/src/app/global.css`
- Componentes: `frontend/src/components/`
```

## Arquivos de saída

- `@/specs/report/design-diff.md` (criado/sobrescrito com relatório amigável)

## Próximo agente

O próximo agente deve ler `@/specs/report/design-diff.md` e executar as ações prioritárias listadas.
