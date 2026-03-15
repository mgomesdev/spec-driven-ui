---
name: diff-design-vs-code
description: "Ler o arquivo .pen do Pencil, comparar com o código existente usando Atomic Design e gerar um relatório de diferenças em formato amigável."
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

## Atomic Design - Estrutura de Classificação

O agente deve classificar os elementos em:

- **Atom** (Átomo): Elementos indivisíveis — botões, ícones, labels, inputs, cores, fontes, spacings, tokens de design
- **Molecule** (Molécula): Combinação simples de átomos — SearchBar (input + botão), CardSimple (título + descrição)
- **Organism** (Organismo): Grupo de moléculas funcionando junto — Header (Logo + Nav + SearchBar), Footer (Links + Copyright), CardComplex (Image + Title + Description + Button)
- **Template** (Template): Estrutura de layout sem conteúdo — PageLayout, DashboardLayout, FormLayout
- **Page** (Página): Instância concreta de template com conteúdo real — HomePage, AboutPage, ContactPage

## Funcionamento

### Etapa 1 — Obter dados reais do Pencil

1. Usar `pencil_open_document` com arquivos `.pen` para carregar o design
2. Usar `pencil_get_editor_state` para obter a estrutura do documento
3. Usar `pencil_batch_get` com `patterns: [{type: "frame"}, {type: "text"}, {type: "rectangle"}]` para buscar componentes
4. Usar `pencil_get_variables` para obter os tokens de design definidos
5. Extrair valores REAIS: cores, tamanhos, fontes, spacings diretamente dos nós
6. **Classificar cada nó no nível atômico apropriado** (Atom/Molecule/Organism/Template/Page)

### Etapa 2 — Obter dados reais do código

1. Ler `frontend/src/app/global.css` (todo o conteúdo)
2. Listar todos os componentes em `frontend/src/components/`
3. **Mapear componentes para estrutura Atomic Design**:
   - `components/atoms/` → Atoms
   - `components/molecules/` → Molecules
   - `components/organisms/` → Organisms
   - `components/templates/` → Templates
   - `components/pages/` → Pages

### Etapa 3 — Comparação REAL por Nível Atômico

Para CADA elemento, classificar primeiro o nível (Atom/Molecule/Organism/Template/Page), depois:

1. **Para Atoms (Tokens)**:
   - Pegar o valor EXATO do Pencil (ex: #101828)
   - Pegar o valor EXATO do código (ex: --color-bg-primary: #000000)
   - Comparar cores, fonts, spacings, sizes

2. **Para Molecules**:
   - Comparar composição de átomos
   - Verificar propriedades de cada átomo interno
   - Comparar estilos e props

3. **Para Organisms**:
   - Comparar moléculas que o compõe
   - Verificar layout e posicionamento
   - Comparar propriedades de estilo

4. **Para Templates**:
   - Comparar estrutura de layout
   - Verificar regions/grids
   - Comparar positioning

5. **Para Pages**:
   - Comparar instâncias de templates
   - Verificar conteúdo específico

### Etapa 4 — Classificação

- `✅ SINCRONIZADO` — valor no Pencil = valor no código
- `❌ DIVERGENTE` — existe em ambos, mas valores diferentes
- `🆕 NOVO NO DESIGN` — existe no Pencil, não existe no código
- `📦 NÃO IMPLEMENTADO` — especificado mas não implementado
- `🗑️ REMOVIDO` — existe no código mas foi removido do design

### Etapa 5 — Gerar relatório amigável

Escrever em `@/specs/report/design-diff.md` com formato claro e amigável:

```markdown
# 🎨 Design vs Código — Relatório de Comparação (Atomic Design)

> Gerado em: [data e hora horário de brasília]

## 📊 Resumo Geral

| Status | Quantidade |
|--------|------------|
| ✅ SINCRONIZADOS | X |
| ❌ DIVERGENTES | X |
| 🆕 NOVOS NO DESIGN | X |
| 📦 NÃO IMPLEMENTADOS | X |

---

## ⚛️ Átomos (Atoms)

Elementos indivisíveis: cores, fontes, botões, inputs, ícones, tokens

### Cores
| Token | Pencil | Código | Status |
|-------|--------|--------|--------|
| --color-bg | #101828 | #101828 | ✅ |

### Tipografia
| Token | Pencil | Código | Status |
|-------|--------|--------|--------|
| --font-heading | Inter | Inter | ✅ |

---

## 🔬 Moléculas (Molecules)

Combinações simples de átomos: SearchBar, CardSimple, FormGroup

### SearchBar
- **Status**: ✅ SINCRONIZADO
- **Código**: `frontend/src/components/molecules/SearchBar/` ✓
- **Átomos**: Input + Button

### CardSimple
- **Status**: ❌ DIVERGENTE
- **Código**: `frontend/src/components/molecules/CardSimple/` ⚠️
- **Diferenças**: border-radius: 8px (Pencil) vs 12px (código)

---

## 🧬 Organismos (Organisms)

Grupos de moléculas: Header, Footer, CardComplex, Navigation

### Header
- **Status**: ✅ SINCRONIZADO
- **Código**: `frontend/src/components/organisms/Header/` ✓
- **Moléculas**: Logo + NavMenu + SearchBar

### HeroSection
- **Status**: ❌ DIVERGENTE
- **Código**: `frontend/src/components/organisms/HeroSection/` ⚠️
- **Diferenças**: padding-bottom: 131px (Pencil) vs 64px (código)

---

## 📐 Templates

Estruturas de layout: PageLayout, DashboardLayout, FormLayout

### PageLayout
- **Status**: ✅ SINCRONIZADO
- **Código**: `frontend/src/components/templates/PageLayout/` ✓

### DashboardLayout
- **Status**: 🆕 NOVO NO DESIGN
- **Não implementado no código**

---

## 📄 Páginas (Pages)

Instâncias concretas: HomePage, AboutPage, ContactPage

### HomePage
- **Status**: ✅ SINCRONIZADO
- **Código**: `frontend/src/app/page.tsx` ✓

### AboutPage
- **Status**: 🆕 NOVO NO DESIGN
- **Não implementado no código**

---

## 🚀 Ações Prioritárias

1. **[ALTA]** Corrigir divergência no CardSimple — border-radius diferente
2. **[ALTA]** Implementar novo template DashboardLayout
3. **[ALTA]** Implementar nova página AboutPage
4. **[MÉDIA]** Sincronizar tokens de cor com o design

---

## 📁 Arquivos de Referência

- Design: arquivos `.pen` na raiz do projeto
- CSS: `frontend/src/app/global.css`
- Componentes: `frontend/src/components/` (atoms|molecules|organisms|templates|pages/)
```

## Arquivos de saída

- `@/specs/report/design-diff.md` (criado/sobrescrito com relatório amigável)

## Próximo agente

O próximo agente deve ler `@/specs/report/design-diff.md` e executar as ações prioritárias listadas.
