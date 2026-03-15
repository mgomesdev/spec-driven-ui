# Projeto: spec-driven-ui

**Branch:** us/icon
**Research:** specs/features/icon/research.md
**Plan:** specs/features/icon/plan.md

## Descrição

Componente atômico de ícone que funciona como wrapper para a biblioteca `lucide-react`. Renderiza ícones baseados no nome passado via props, com suporte a size e color.

## User Stories

### US-001: Criar tipos do componente Icon

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript do componente Icon definidos para que o componente seja criado com tipagem correta.

**Artefatos:**
- Cria: `src/components/Icon/Icon.types.ts`
- Depende de: (nenhum)

**Contexto do plan:**
> Consultar seção "3. Interfaces e Tipos" do plan.md para a interface IconProps.

#### Critérios de Aceitação

* Arquivo exporta interface `IconProps` com campos: name, size?, color?
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Criar componente Icon

**Prioridade:** 2
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero o componente Icon que renderiza ícones do Lucide para que possa ser reutilizado na aplicação.

**Artefatos:**
- Cria: `src/components/Icon/Icon.tsx`
- Depende de: `US-001` (precisa dos tipos IconProps)

**Contexto do plan:**
> Consultar seção "4.2 Icon.tsx" do plan.md para a implementação.
> Consultar seção "5. Contratos" para as props.

#### Critérios de Aceitação

* Componente renderiza ícone do Lucide baseado na prop `name`
* Suporta prop `size` (padrão: 24)
* Suporta prop `color` (padrão: currentColor)
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)
