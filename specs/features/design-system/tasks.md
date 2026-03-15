# Projeto: Portfolio

**Branch:** us/design-system
**Research:** specs/features/design-system/research.md
**Plan:** specs/features/design-system/plan.md

## Descrição

Criação de um design system global através de tokens extraídos do arquivo `@/portfolio.pen`. O resultado será a adição de variáveis CSS customizadas no arquivo `frontend/src/app/globals.css` existente, mantendo compatibilidade com Tailwind CSS v4. Os tokens cobrem: cores, tipografia, espaçamento, dimensões e border radius.

## User Stories

### US-001: Adicionar tokens de design system ao globals.css

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor frontend, eu quero que os tokens de design (cores, tipografia, espaçamento, dimensões e border radius) sejam convertidos em variáveis CSS no arquivo globals.css para que o código use variáveis CSS em vez de valores hardcoded.

**Artefatos:**
- Modifica: `frontend/src/app/globals.css`

**Contexto do plan:**
> Consultar seção "5. Detalhamento da Modificação" do plan.md para ver o exemplo de como o arquivo deve ficar após a modificação.
> Todos os tokens estão documentados nas seções "4.1" a "4.5" do plan.md.

#### Critérios de Aceitação

* Adicionar bloco `:root` com todas as variáveis CSS customizadas
* Incluir 6 tokens de cores: --color-bg-primary, --color-bg-secondary, --color-accent, --color-text-primary, --color-text-secondary, --color-text-muted
* Incluir 7 tokens de tipografia: --font-family-primary, --font-size-heading-xl, --font-size-heading, --font-size-body, --font-size-small, --font-weight-regular, --font-weight-bold
* Incluir 6 tokens de espaçamento: --spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl, --spacing-xxl
* Incluir 4 tokens de dimensões: --height-xl, --height-md, --height-sm, --max-width-container
* Incluir 4 tokens de border radius: --radius-sm, --radius-md, --radius-lg, --radius-full
* Manter o import do Tailwind CSS v4 existente (@import "tailwindcss")
* Manter o import da fonte via `nextjs/fonts/google` no arquivo `src/app/layout.tsx`
* Manter o estilo global html { scroll-behavior: smooth; }

#### Notas

(Sem notas)
