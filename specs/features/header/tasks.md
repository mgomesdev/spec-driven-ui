# Projeto: spec-driven-ui

**Branch:** us/header
**Research:** specs/features/header/research.md
**Plan:** specs/features/header/plan.md

## Descrição

Header de navegação principal responsivo, fixo no topo da página (80px altura). Implementa menu horizontal para desktop (≥768px) e menu hamburger com overlay para mobile (<768px). Sem integração com backend — dados estáticos.

## User Stories

### US-001: Definir tipos do Header

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero definir os tipos TypeScript do Header para que o componente e testes possam usá-los com tipagem correta.

**Artefatos:**
- Cria: os tipos no mesmo arquivo.
- Depende de: (nenhum)

**Contexto do plan:**
> Consultar seção "3. Tipos e Interfaces" do plan.md.
> Criar interfaces `NavItem` e `HeaderProps` conforme definidas.

#### Critérios de Aceitação

* Arquivo exporta interface `NavItem` com campos: `label: string` e `href: string`
* Arquivo exporta interface `HeaderProps` com campos opcionais: `logoAlt?: string` e `navItems?: NavItem[]`
* Arquivo exporta constantes `DEFAULT_NAV_ITEMS` e `DEFAULT_LOGO_ALT`
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Criar componente Header

**Prioridade:** 2
**Passes:** true

**Descrição:**
> Como visitante, eu quero ver um header de navegação fixo no topo para que eu possa navegar entre as páginas do site em desktop e mobile.

**Artefatos:**
- Cria: `src/components/header/header.tsx`
- Depende de: `US-001` 

**Contexto do plan:**
> Consultar seção "5. Componentes" e "7. Artefatos Detalhados" do plan.md.
> Implementar: container fixed com h-[80px], logo à esquerda, menu desktop (md:), hamburger button (<md), MobileMenu overlay com animação.

#### Critérios de Aceitação

* Header é `fixed`, `top-0`, `w-full` com altura `h-[80px]`
* Logo à esquerda com link para "/" e alt text configurável
* Menu desktop (≥768px): 3 itens em linha horizontal com hover state
* Menu mobile (<768px): botão hamburger com 3 barras
* Ao clicar hamburger: overlay fullscreen com animação slide-in (300ms)
* Menu overlay lista 3 opções (Início, Sobre, Descrição)
* Botão X fecha o overlay; clicar fora fecha overlay
* `aria-label` no botão hamburger, `aria-expanded` controla estado
* `aria-hidden` no overlay quando fechado
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-003: Integrar Header no layout

**Prioridade:** 3
**Passes:** true

**Descrição:**
> Como visitante, eu quero ver o header em todas as páginas para que eu possa navegar a qualquer momento.

**Artefatos:**
- Modifica: `src/app/layout.tsx`
- Depende de: `US-002` (header.tsx)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" e "7. Artefatos Detalhados" do plan.md.
> Importar Header do componente e renderizar no layout principal.

#### Critérios de Aceitação

* Importação do componente Header presente no layout.tsx
* Componente `<Header />` renderizado dentro do `<body>`
* Header posicionado antes do children (aparece no topo)
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-004: Criar testes E2E do Header

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero testes E2E que validem o comportamento do Header para garantir que funciona corretamente em desktop e mobile.

**Artefatos:**
- Cria: `src/components/header/header.test.spec.ts`
- Depende de: `US-002` (header.tsx), `US-003` (layout integration)

**Contexto do plan:**
> Consultar seção "7. Artefatos Detalhados" do plan.md.
> Criar testes Playwright para validar US-001, US-002, US-003 do research.

#### Critérios de Aceitação

* Teste valida que Header Desktop renderiza com logo e 3 itens de menu
* Teste valida que itens do menu são clicáveis
* Teste valida que em mobile (<768px) hamburger é exibido
* Teste valida que ao clicar hamburger, overlay abre com animação
* Teste valida que botão X fecha o overlay
* Teste valida que clicar fora do overlay fecha o menu
* Teste valida que logo redireciona para "/"
* Todos os testes passam

#### Notas

(Sem notas)
