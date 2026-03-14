# Design System

## 1. Visão Geral

Criação de um design system global para o frontend do portfólio, extraindo tokens de design do arquivo `portfolio.pen`. O objetivo é sincronizar design e código, definindo cores, tipografia, espaçamento, estados e componentes reutilizáveis que serão Consumidos pelo código React/Next.js.

## 2. Objetivos

- Extrair tokens de cores do design existente em `portfolio.pen`
- Definir tokens de tipografia (fontes, tamanhos, pesos)
- Documentar espaçamentos e dimensões padronizadas
- Identificar e documentar componentes existentes (Header, Hero, Footer)
- Criar variáveis no arquivo .pen para uso futuro
- Garantir sincronização entre design e código

## 3. Contexto de Integração com Backend

Não aplicável. Design system é uma biblioteca de componentes e tokens visuais frontend-only.

## 4. Histórias de Usuário

### US-001: Extrair Tokens de Cores do Design

**Descrição:** Como desenvolvedor frontend, eu quero ter tokens de cores extraídos do design para que o código use variáveis CSS/Tailwind em vez de valores hardcoded.

**Tela/Componente afetado:** Arquivo `portfolio.pen` (variáveis)

**Critérios de aceitação:**
- [ ] Criar variável `$color-bg-primary` com valor `#101828` (fundo escuro principal)
- [ ] Criar variável `$color-bg-secondary` com valor `#667085`
- [ ] Criar variável `$color-accent` com valor `#7f56d9` (roxo para CTAs)
- [ ] Criar variável `$color-text-primary` com valor `#ffffff`
- [ ] Criar variável `$color-text-secondary` com valor `#667085`
- [ ] Criar variável `$color-text-muted` com valor `#f9fafb`
- [ ] Documentar paleta completa de cores em `specs/features/design-system/design-system.md`
- [ ] Usar variável `$` prefix no código (ex: `fill: "$color-bg-primary"`)

### US-002: Definir Tokens de Tipografia

**Descrição:** Como desenvolvedor frontend, eu quero tokens de tipografia definidos para manter consistência nos tamanhos de fonte e pesos.

**Tela/Componente afetado:** Arquivo `portfolio.pen` (variáveis)

**Critérios de aceitação:**
- [ ] Definir `$font-family-primary` para fonte principal (Liberation Sans)
- [ ] Definir `$font-size-heading-xl` para títulos grandes (48px)
- [ ] Definir `$font-size-heading` para títulos (20px)
- [ ] Definir `$font-size-body` para textos corpo (16px)
- [ ] Definir `$font-size-small` para textos menores (12px)
- [ ] Definir `$font-weight-regular` (400) e `$font-weight-bold` (700)
- [ ] Documentar em `specs/features/design-system/design-system.md`

### US-003: Documentar Tokens de Espaçamento e Dimensões

**Descrição:** Como desenvolvedor frontend, eu quero tokens de espaçamento e dimensões para manter consistência nos paddings, margins e tamanhos.

**Tela/Componente afetado:** Arquivo `portfolio.pen` (variáveis)

**Critérios de aceitação:**
- [ ] Documentar `$spacing-xs` (12px)
- [ ] Documentar `$spacing-sm` (14px)
- [ ] Documentar `$spacing-md` (16px)
- [ ] Documentar `$spacing-lg` (20px)
- [ ] Documentar `$spacing-xl` (32px)
- [ ] Documentar `$spacing-xxl` (131px)
- [ ] Definir `$header-height` (80px conforme design)
- [ ] Definir `$button-height` (48px conforme design)
- [ ] Definir `$footer-height` (60px conforme design)
- [ ] Documentar em `specs/features/design-system/design-system.md`

### US-004: Documentar Border Radius

**Descrição:** Como desenvolvedor frontend, eu quero tokens de border radius para cantos arredondados consistentes.

**Tela/Componente afetado:** Arquivo `portfolio.pen` (variáveis)

**Critérios de aceitação:**
- [ ] Definir `$radius-sm` (4px)
- [ ] Definir `$radius-md` (8px conforme botão no design)
- [ ] Definir `$radius-lg` (16px)
- [ ] Definir `$radius-full` (9999px para círculos)
- [ ] Documentar em `specs/features/design-system/design-system.md`

### US-005: Criar Componentes Reutilizáveis no .pen

**Descrição:** Como designer/desenvolvedor, eu quero componentes reutilizáveis criados no arquivo .pen para que possam ser referenciados e manter consistência.

**Tela/Componente afetado:** Arquivo `portfolio.pen`

**Critérios de aceitação:**
- [ ] Criar componente `Button` com variante primary
- [ ] Criar componente `Button` com variante link (já existe no design: ID Xftel)
- [ ] Criar componente `Header` (já existe no design: ID UUPDV)
- [ ] Criar componente `Hero` (já existe no design: ID pVmuT)
- [ ] Criar componente `Footer` (já existe no design: ID 4IBSu)
- [ ] Marcar componentes como `reusable: true`
- [ ] Documentar componentes em `specs/features/design-system/design-system.md`

### US-006: Estruturar Arquivo de Design System

**Descrição:** Como desenvolvedor frontend, eu quero uma estrutura de arquivos organizada para o design system.

**Tela/Componente afetado:** Estrutura de diretórios

**Critérios de aceitação:**
- [ ] Criar diretório `specs/features/design-system/`
- [ ] Criar arquivo único `specs/features/design-system/design-system.md` com todas as seções consolidadas

## 5. Requisitos Funcionais

- RF-01: Todas as cores usadas no design devem ter tokens correspondentes
- RF-02: Todos os tamanhos de fonte devem ter tokens correspondentes
- RF-03: Todos os espaçamentos devem ter tokens correspondentes
- RF-04: Componentes devem ser marcados como `reusable: true` no .pen
- RF-05: Variáveis devem seguir o padrão `$nome-token` no .pen
- RF-06: Tokens devem ser documentados em um único arquivo consolidado

## 6. Requisitos Não-Funcionais

- RNF-01: Tokens devem seguir nomenclatura consistente (kebab-case)
- RNF-02: Valores devem ser extraídos diretamente do design (não inventados)
- RNF-03: Documentação deve ser clara para consumo por desenvolvedores
- RNF-04: Estrutura de arquivos deve ser escalável para novos tokens
- RNF-05: Manter todo o documentation em um único arquivo para facilitar manutenção

## 7. Fora do Escopo

- Não inclui implementação de código React/Tailwind (apenas pesquisa e documentação)
- Não inclui criação de novos componentes de UI (apenas documentar existentes)
- Não inclui integração com ferramentas de design (Figma, etc)
- Não inclui internacionalização ou theming dinâmico
- Não inclui tema claro (dark mode only por enquanto)

## 8. Referências Visuais

- Arquivo de design: `/home/matheus/desktop/spec-driven-ui/portfolio.pen`
- Componentes identificados:
  - Header Organism (ID: UUPDV) - altura 80px, padding vertical 20px
  - Button - Link Variant (ID: Xftel) - altura 48px, cornerRadius 8
  - Section Hero (ID: pVmuT) - container 700px de largura
  - Footer (ID: 4IBSu) - altura 60px

## 9. Tokens de Design System

### Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `$color-bg-primary` | `#101828` | Fundo escuro principal |
| `$color-bg-secondary` | `#667085` | Fundo secundário / elementos |
| `$color-accent` | `#7f56d9` | Roxo (destaques, links, CTAs) |
| `$color-text-primary` | `#ffffff` | Texto branco (sobre fundo escuro) |
| `$color-text-secondary` | `#667085` | Texto cinza |
| `$color-text-muted` | `#f9fafb` | Texto muito claro |

### Tipografia

| Token | Valor | Descrição |
|-------|-------|-----------|
| `$font-family-primary` | Liberation Sans | Fonte principal do projeto |
| `$font-size-heading-xl` | 48px | Títulos grandes (Hero) |
| `$font-size-heading` | 20px | Títulos de seções |
| `$font-size-body` | 16px | Texto corpo |
| `$font-size-small` | 12px | Texto pequeno / labels |
| `$font-weight-regular` | 400 | Peso normal |
| `$font-weight-bold` | 700 | Peso negrito |

### Espaçamento

| Token | Valor | Origem no Design |
|-------|-------|------------------|
| `$spacing-xs` | 12px | gap mínimo encontrado |
| `$spacing-sm` | 14px | padding vertical |
| `$spacing-md` | 16px | padding mais comum |
| `$spacing-lg` | 20px | padding de seções |
| `$spacing-xl` | 32px | gaps maiores |
| `$spacing-xxl` | 131px | padding lateral Hero |

### Dimensões

| Token | Valor | Descrição |
|-------|-------|-----------|
| `$header-height` | 80px | Altura do header |
| `$button-height` | 48px | Altura de botões |
| `$footer-height` | 60px | Altura do footer |
| `$hero-max-width` | 700px | Largura máx do container Hero |

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `$radius-sm` | 4px | Bordas pequenas |
| `$radius-md` | 8px | Botões, inputs |
| `$radius-lg` | 16px | Cards, containers |
| `$radius-full` | 9999px | Círculos |

### Componentes Identificados

| Componente | ID no .pen | Descrição |
|------------|------------|-----------|
| Header | UUPDV | Organismo header com logo e navegação |
| Button (link) | Xftel | Botão variant link |
| Hero | pVmuT | Seção hero com container 700px |
| Footer | 4IBSu | Rodapé com altura 60px |

## 10. Métricas de Sucesso

- Todos os tokens visuais do design atual estão documentados
- Componentes existentes estão marcados como reutilizáveis
- Nova funcionalidade no design deve usar tokens existentes

## 11. Questões em Aberto
