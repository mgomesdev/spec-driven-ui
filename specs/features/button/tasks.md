# Projeto: spec-driven-ui

**Branch:** us/button
**Research:** specs/features/button/research.md
**Plan:** specs/features/button/plan.md

## Descrição

Componente Button átomo do Design System com duas variantes: Link (navegação header) e CTA (call-to-action hero). Implementado como componente React standalone utilizando tokens CSS do design-system. Suporta estados default, hover e disabled com styling específico por variante.

## User Stories

### US-001: Criar componente Button com variantes link e cta

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero o componente Button com variantes link e cta para que possa ser reutilizado no header e hero do site.

**Artefatos:**
- Cria: `src/components/button/button.tsx`

**Contexto do plan:**
> Consultar seção "3. Interfaces TypeScript" do plan.md para a interface ButtonProps.
> Consultar seção "5.1 Tokens CSS Utilizados" para os valores de tokens.
> Consultar research.md seção "4. Variações Identificadas no Design" para os estilos de cada variant.

#### Critérios de Aceitação

* Componente renderiza com children recebidos via props
* Variant "link": borda outline, fundo transparente, height 48px, border-radius 8px
* Variant "cta": fundo --color-accent (#7f56d9), height 48px, width fill-container, border-radius 8px
* Estado hover: variant link com opacidade 80%, variant cta com opacidade 90%
* Estado disabled: opacidade 50%, cursor not-allowed
* Suporta onClick quando não está disabled
<!-- TODO: adicionar testes, typecheck -->

#### Notas

(Sem notas)
