# Guia de Processo: Design System + Sidebar

## 🎯 Visão Geral

| Fase | Artefatos | Paralelo? |
|------|-----------|-----------|
| 0. Design System | Tokens | ❌ Sequencial |
| 1. Atoms | icon, button, nav-item, avatar, logo | ✅ Sim |
| 2. Molecules | upgrade-box, nav-list, account-section | ✅ Sim |
| 3. Organisms | sidebar | ❌ Sequencial |

---

## 📌 Regra de Ouro

> **Design System SEMPRE primeiro!**
> Componentes que dependem de tokens (todos) só começam após `globals.css` existir.

---

## 🔄 Fluxo RPI (Research → Plan → Implementation)

Para **cada artefato**, seguir esta sequência:

```
1. @us-to-research           → research.md
2. @research-to-plan        → plan.md  
3. @bdd-generator           → *.feature
4. @tdd-generator           → *.spec.ts + *.spec.docs.md
5. @implement-tasks         → implementação + GATE
```

---

## 📊 FASE 0: Design System (Tokens Globais)

### Passo a Passo

| # | Ação | Agente/Comando | Saída |
|---|------|----------------|-------|
| 0.1 | Criar research | `@us-to-research` feature=design-system | `specs/features/design-system/research.md` |
| 0.2 | Criar plan | `@research-to-plan` feature=design-system | `specs/features/design-system/plan.md` |
| 0.3 | Gerar tokens | `@bdd-generator` feature=design-system | `specs/features/design-system/features/design-tokens.feature` |
| 0.4 | Extrair CSS | `@design-tokens-generator` | `frontend/src/app/globals.css` |

### Frases para Executar

```
1. @us-to-research
   → "crie o research para design-system com tokens globais"

2. @research-to-plan
   → "gere o plan para design-system"

3. @bdd-generator
   → "feature=design-system"

4. @design-tokens-generator
   → "@design-tokens-generator"
```

### Análise: Pode Paralelizar?
```
❌ NÃO - Design System é pré-requisito para TODOS os componentes
✅ Apenas após globals.css existir, componentes podem começar
```

---

## 📊 FASE 1: Atoms (Base)

### Componentes e Dependências

| Componente | Dependências | Status |
|------------|--------------|--------|
| `icon` | lucide-react | Independente |
| `button` | icon | Depende de icon |
| `nav-item` | icon | Depende de icon |
| `avatar` | - | Independente |
| `logo` | icon | Depende de icon |

### Ordem de Implementação

```
icon     → button, nav-item, logo (podem iniciar juntos)
avatar   → pode iniciar junto com icon
```

### Passo a Passo (Paralelo)

| # | Ação | Frase | Saída |
|---|------|-------|-------|
| 1.1 | Research icon | `@us-to-research` feature=icon | `specs/features/icon/research.md` |
| 1.2 | Research button | `@us-to-research` feature=button | `specs/features/button/research.md` |
| 1.3 | Research nav-item | `@us-to-research` feature=nav-item | `specs/features/nav-item/research.md` |
| 1.4 | Research avatar | `@us-to-research` feature=avatar | `specs/features/avatar/research.md` |
| 1.5 | Research logo | `@us-to-research` feature=logo | `specs/features/logo/research.md` |

**Após todos os researchs → Plans:**

| # | Ação | Frase | Saída |
|---|------|-------|-------|
| 1.6 | Plan icon | `@research-to-plan` feature=icon | `specs/features/icon/plan.md` |
| 1.7 | Plan button | `@research-to-plan` feature=button | `specs/features/button/plan.md` |
| 1.8 | Plan nav-item | `@research-to-plan` feature=nav-item | `specs/features/nav-item/plan.md` |
| 1.9 | Plan avatar | `@research-to-plan` feature=avatar | `specs/features/avatar/plan.md` |
| 1.10 | Plan logo | `@research-to-plan` feature=logo | `specs/features/logo/plan.md` |

**Após todos os plans → Features + Specs:**

| # | Ação | Frase | Saída |
|---|------|-------|-------|
| 1.11 | Features + Specs | `@bdd-generator` + `@tdd-generator` para cada | `*.feature` + `*.spec.ts` |

### Análise: Pode Paralelizar via Worktrees?

```
✅ SIM! Átomos são independentes entre si (exceto dependência de icon)

Opção A: Worktrees paralelos
  - Worktree 1: icon
  - Worktree 2: button, nav-item, logo
  - Worktree 3: avatar

Opção B: Sequencial (mais simples)
  - icon → button → nav-item → logo → avatar

Recomendado: worktree-runner para 3 worktrees
```

### Comando para Worktrees

```
@worktree-runner rode icon, avatar, logo em paralelo
```

---

## 📊 FASE 2: Molecules (Composição)

### Componentes e Dependências

| Componente | Dependências | Status |
|------------|--------------|--------|
| `upgrade-box` | icon, button | Depende de átomos |
| `nav-list` | nav-item | Depende de átomo |
| `account-section` | avatar, icon | Depende de átomos |

### Ordem de Implementação

```
nav-item (Fase 1) → nav-list
icon + avatar (Fase 1) → upgrade-box, account-section
```

### Análise: Pode Paralelizar via Worktrees?

```
✅ SIM! Após átomos implementados:
  - Worktree 1: upgrade-box
  - Worktree 2: nav-list
  - Worktree 3: account-section
```

---

## 📊 FASE 3: Organisms (Sidebar)

### Componente e Dependências

| Componente | Dependências |
|------------|--------------|
| `sidebar` | logo, nav-list, upgrade-box, account-section |

### Ordem de Implementação

```
logo + nav-list + upgrade-box + account-section (Fase 2)
                                      ↓
                              sidebar (Fase 3)
```

### Análise: Pode Paralelizar?

```
❌ NÃO - Sidebar depende de TODAS as molecules
✅ Sequencial após Fase 2 completa
```

---

## 🗺️ Diagrama de Dependências

```
                    [globals.css]
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│  FASE 1: ATOMS (podem ser paralelos)               │
│  ┌───────┐ ┌───────┐ ┌────────┐ ┌───────┐          │
│  │ icon  │ │avatar │ │ button │ │logo   │          │
│  └───┬───┘ └───────┘ └───┬────┘ └───┬────┘          │
│      │                   │         │                │
│      │                   ▼         │                │
│      │            ┌────────────┐    │                │
│      └───────────►│  nav-item  │◄───┘                │
│                   └────────────┘                     │
└─────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│  FASE 2: MOLECULES (podem ser paralelos)           │
│  ┌───────────┐ ┌───────────┐ ┌────────────────┐    │
│  │upgrade-box│ │  nav-list │ │account-section │    │
│  └───────────┘ └───────────┘ └────────────────┘    │
└─────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│  FASE 3: ORGANISM (sequencial)                      │
│  ┌───────────┐                                      │
│  │  sidebar  │                                      │
│  └───────────┘                                      │
└─────────────────────────────────────────────────────┘
```

---

## ⏱️ Timeline Sugerida

```
Semana 1:
├── Dia 1-2: Design System (tokens)
├── Dia 3-4: Worktrees para Atoms (icon, button, avatar, logo, nav-item)
└── Dia 5:   Review + merge atoms

Semana 2:
├── Dia 1-2: Worktrees para Molecules (upgrade-box, nav-list, account-section)
└── Dia 3-5: Sidebar + Integration
```

---

## 🔄 Quando Usar Worktrees

| Situação | Ação |
|----------|------|
| Múltiplos átomos para criar | `@worktree-runner rode icon, button, avatar em paralelo` |
| Múltiplas molecules para criar | `@worktree-runner rode upgrade-box, nav-list em paralelo` |
| Múltiplas features independentes | `@worktree-runner rode [feature1], [feature2] em paralelo` |
| 1 componente por vez | Sequencial normal com `@implement-tasks` |

---

## 📝 Checklist Pré-Worktrees

- [ ] Design System (`globals.css`) existe ✅
- [ ] research.md criado para todos
- [ ] plan.md criado para todos
- [ ] Branch `us/[componente]` não existe
- [ ] git limpo na main

---

## ✅ Resumo: Frases para Executar

### Fase 0: Design System
```
1. @us-to-research "crie o research para design-system"
2. @research-to-plan "gere o plan para design-system"
3. @bdd-generator "feature=design-system"
4. @design-tokens-generator
```

### Fase 1: Atoms (Paralelo)
```
# Opção A: Worktrees
@worktree-runner rode icon, button, avatar, logo, nav-item em paralelo

# Após setup:
# cd ../spec-driven-ui-icon && @implement-tasks ...
# (repetir para cada worktree)
```

### Fase 2: Molecules (Paralelo)
```
@worktree-runner rode upgrade-box, nav-list, account-section em paralelo
```

### Fase 3: Sidebar (Sequencial)
```
1. @us-to-research "crie o research para sidebar"
2. @research-to-plan "gere o plan para sidebar"
3. @bdd-generator "feature=sidebar"
4. @tdd-generator "feature=sidebar"
5. @implement-tasks "implemente a sidebar"
```
