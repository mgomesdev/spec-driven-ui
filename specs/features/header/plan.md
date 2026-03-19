# Plan: Header

> Gerado a partir de: `specs/features/header/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Header de navegação principal responsivo, fixo no topo da página. Implementado como organism independente usando elementos HTML estilizados com Tailwind CSS. Comportamento adaptativo: menu horizontal para desktop (≥768px) e menu hamburger com overlay para mobile (<768px). Sem integração com backend — dados estáticos para navegação.

**Stack confirmada:**
- Next.js 16 (App Router)
- React 19
- TypeScript 5.9
- Tailwind CSS v4
- useState para gerenciamento de estado local do menu mobile

---

## 2. Estrutura de Arquivos

Todos os arquivos que serão **criados ou modificados**:

```
frontend/src/
├── app/
│   ├── layout.tsx                              # modificado - adiciona Header
├── components/
│   └── header/
│       ├── header.tsx                         # criado - componente principal (organism)
│       └── header.test.spec.ts                # criado - testes E2E
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Tipos e Interfaces

### 3.1 Tipos (No mesmo arquivo do componente)

```typescript
export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoAlt?: string;
  navItems?: NavItem[];
}
```

**Decisões:**
- `NavItem` tipa os itens de navegação (label + href)
- `HeaderProps` define as props opcionais do Header
- Props são opcionais para permitir fallbacks com valores default

---

## 4. Contratos de API

**N/A** — Header não possui comunicação com backend. Dados são estáticos.

**Fallback de dados:**
```typescript
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Descrição', href: '/descricao' },
  { label: 'Contato', href: '/contato' },
];

const DEFAULT_LOGO_ALT = 'Logo - Página inicial';
```

---

## 5. Componentes

### 5.1 Header (`components/header/header.tsx`)

**Props:**
```typescript
interface HeaderProps {
  logoAlt?: string;
  navItems?: NavItem[];
}
```

**Responsabilidades:**
- Container fixo no topo (fixed + top-0 + w-full)
- Layout flexbox com logo à esquerda e menu à direita
- Gerencia estado `isMenuOpen` para toggle mobile
- Alterna entre DesktopMenu e MobileMenu via breakpoint (md:)

**Estados tratados:**
- Default desktop: menu horizontal visível, hamburger oculto
- Default mobile: hamburger visível, menu oculto
- Menu aberto: overlay fullscreen com animação slide-in
- Menu fechado: overlay ocultado com animação slide-out

**Acessibilidade:**
- `aria-label` no botão hamburger
- `aria-expanded` controla estado do menu
- `aria-hidden` no overlay quando fechado
- Focus trap no menu mobile (usando tabindex)

---

## 6. Diagrama de Dependências

Ordem de implementação:

```
[components/header/header.tsx]
        │
        ▼
[src/app/layout.tsx (modificado)]
```

Regra: `──►` significa "depende de / deve existir antes".

---

## 7. Artefatos Detalhados

### 7.1 Componentes a criar

| Arquivo | Descrição | Responsabilidade |
|---------|-----------|------------------|
| `header.tsx` | Organism principal | Header fixo com logo, menu desktop e mobile |

### 7.2 Arquivos de teste

| Arquivo | Descrição |
|---------|-----------|
| `header.test.spec.ts` | Testes Playwright | Valida US-001, US-002, US-003 |

### 7.3 Modificações

| Arquivo | Alteração |
|---------|-----------|
| `layout.tsx` | Importa e renderiza `<Header />` |

---

## 8. Questões em Aberto

---

## 9. Checklist de Implementação

- [ ] Tipos estão no mesmo arquivo do componente que usa
- [ ] `header.tsx` implementado com:
  - [ ] Container fixed, w-full, h-[80px]
  - [ ] Logo com link para "/"
  - [ ] Menu desktop (md:) com 3 itens
  - [ ] Hamburger button (< md)
  - [ ] MobileMenu com overlay e animação
  - [ ] useState para isMenuOpen
- [ ] `layout.tsx` modificado para incluir Header
- [ ] `header.test.spec.ts` criado com testes para:
  - [ ] US-001: Header Desktop renderiza corretamente
  - [ ] US-002: Menu mobile abre/fecha
  - [ ] US-003: Logo redireciona para "/"

---

## 10. RNFs Mapeados para Implementação

| RNF | Implementação |
|-----|---------------|
| RNF-01 | Tailwind: `md:` breakpoint |
| RNF-02 | Tailwind: `transition-all duration-300` |
| RNF-03 | `<Image />` com `alt` ou elemento com `aria-label` |
| RNF-04 | `tabindex="-1"` no overlay + foco programático |
| RNF-05 | Tokens CSS do globals.css (contraste adequado) |
| RNF-06 | Os testes E2E serão executados na roda onde o Header foi instanciado |

---

## 11. Fora do Escopo (Confirmado)

Os seguintes items foram identificados no research e **não devem ser implementados**:

- Dropdown/submenu
- Busca no header
- Botão de login/usuário
- Sticky com mudança de estilo ao scrollar
