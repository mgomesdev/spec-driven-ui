# Research: Design System — Pencil ↔ Código Bidirectional Sync

> Gerado a partir de: `specs/features/design-system/us-to-research.md`

---

## 1. Visão Geral

Criar um design system completo que permite sincronização bidirecional entre o Pencil (`.pen`) e o código React. O sistema segue o padrão spec-driven, onde cada componente é documentado em um `.feature` com `pencil_id` para referência.

---

## 2. Objetivos

- Extrair componentes reutilizáveis do `pencil-demo.pen`
- Implementar design tokens como CSS vars
- Criar componentes atoms, molecules, organisms
- Estabelecer fluxo de sync: export → approve → import
- Garantir consistência visual via testes BDD

---

## 3. Design Tokens

### 3.1 Cores

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `--color-bg-primary` | `#0A0A0B` | rgb(10, 10, 11) | Background principal |
| `--color-bg-secondary` | `#141417` | rgb(20, 20, 23) | Background de cards |
| `--color-accent` | `#FF5C00` | rgb(255, 92, 0) | Accent, CTAs |
| `--color-elevated` | `#1A1A1D` | rgb(26, 26, 29) | Elementos elevados |
| `--color-text-primary` | `#FFFFFF` | rgb(255, 255, 255) | Texto primário |
| `--color-text-secondary` | `#A1A1AA` | rgb(161, 161, 170) | Texto secundário |
| `--color-success` | `#22C55E` | rgb(34, 197, 94) | Status success |
| `--color-error` | `#EF4444` | rgb(239, 68, 68) | Status error |

### 3.2 Tipografia

| Token | Valor |
|-------|-------|
| `--font-family` | Inter, sans-serif |
| `--font-size-display` | 48px |
| `--font-size-heading` | 20px |
| `--font-size-body` | 16px |
| `--font-size-caption` | 12px |
| `--font-size-button` | 14px |
| `--font-weight-bold` | 700 |
| `--font-weight-semibold` | 600 |
| `--font-weight-regular` | 400 |

### 3.3 Spacing

| Token | Valor |
|-------|-------|
| `--space-xs` | 12px |
| `--space-sm` | 14px |
| `--space-md` | 16px |
| `--space-lg` | 20px |
| `--space-xl` | 32px |
| `--space-2xl` | 40px |

### 3.4 Border Radius

| Token | Valor |
|-------|-------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 10px |
| `--radius-xl` | 12px |
| `--radius-full` | 9999px |

---

## 4. Componentes

### 4.1 Atoms

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Button | `btn001` | Botão com variants (primary, secondary, ghost) e sizes (sm, md, lg) |
| Badge | `badge001` | Labels com variants (default, success, warning, error) |
| Input | `input001` | Campo com states (default, focus, error, disabled) |
| Avatar | `avatar001` | Imagem com sizes (sm, md, lg) e fallback initials |
| Icon | `icon001` | Wrapper para lucide-react icons |

### 4.2 Molecules

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Card | `card001` | Container com padding e border-radius |
| SearchBar | `search001` | Input + ícone de busca |
| Breadcrumbs | `bread001` | Navegação hierárquica com links |
| Pagination | `page001` | Controles Previous/Next e números |
| Banner | `banner001` | Notificação dismissible |
| QuickActions | `quick001` | Grid de ações rápidas |

### 4.3 Organisms

| Componente | pencil_id | Descrição |
|------------|-----------|-----------|
| Sidebar | `ncY1p` | Navegação lateral fixa (260px) |
| SummaryCards | `L1zBB` | Grid de 4 cards de métricas |
| ChartSection | `chart001` | Área reservada para gráficos |
| TableSection | `table001` | Tabela com dados e scroll |
| GallerySection | `gallery001` | Grid de imagens |
| StackedList | `stack001` | Lista com paginação |

---

## 5. Fluxo de Sync

### 5.1 Export (Código → Pencil)

```
1. Dev modifica código
2. Executa: export-code-to-design --component=[nome]
3. NOVO componente criado no Pencil: "[Nome] [PROPOSTA]"
4. Designer revisa no Pencil
```

### 5.2 Import (Pencil → Código)

```
1. Designer aprova no Pencil
2. Executa: import-design-to-code --component=[nome]
3. Código atualizado com base no Pencil
4. Spec atualizada com status "imported"
```

### 5.3 Diff (Comparar)

```
1. Executa: diff-design-to-code --component=[nome] ou --all
2. Compara: BDD spec (pencil_id) ↔ Pencil
3. Reporta: sincronizado ou dessincronizado
4. Exit code: 0 = synced, 1 = diff
```

---

## 6. Dependências Externas

| Dependência | Versão | Uso |
|-------------|--------|-----|
| lucide-react | ^0.400+ | Ícones |
| tailwindcss | ^4.0 | Estilização |
| next | ^16.0 | Framework |

---

## 7. Métricas de Sucesso

- 17 componentes com pencil_id definidos
- 100% de design tokens implementados como CSS vars
- 100% de alinhamento visual após sync
- Testes BDD cobrindo todos os componentes

---

## 8. Fora do Escopo

- Integração com APIs backend
- Autenticação
- Dark/light mode toggle
- Animações complexas

---

## 9. Próximos Passos

1. Executar `@bdd-generator design-system`
2. Implementar design tokens em `globals.css`
3. Implementar componentes atoms primeiro
4. Implementar componentes molecules
5. Implementar componentes organisms
6. Configurar fluxo de sync

---

**Status:** ✅ Research completo  
**Data:** 2026-03-21
