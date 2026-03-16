# Tasks: Botão Principal

## Feature
- **Nome:** botao-principal
- **Branch:** feat/botao-principal

## User Stories

### US-001: Criar componente Button básico

**Prioridade:** 1
**Passes:** true

**Contexto:** plan.md - Componente Button

**Critérios de Aceitação:**
- Componente renderiza um botão HTML
- Suporta texto como children
- Aceita props de styling via className
- Funciona com eventos onClick

**Artefatos:**
- Criar: `frontend/src/components/button/button.tsx`

---

### US-002: Variantes do Button

**Prioridade:** 2
**Passes:** true

**Contexto:** plan.md - Variantes

**Critérios de Aceitação:**
- Variante "primary" com cor de fundo accent
- Variante "secondary" com borda e texto accent
- Variante "ghost" transparente
- Hover state visível em todas variantes

**Artefatos:**
- Modificar: `frontend/src/components/button/button.tsx`

---

### US-003: Estados do Button

**Prioridade:** 3
**Passes:** true

**Contexto:** plan.md - Estados

**Critérios de Aceitação:**
- Estado disabled com opacity 50%
- Cursor not-allowed quando disabled
- Transição suave entre estados

**Artefatos:**
- Modificar: `frontend/src/components/button/button.tsx`
