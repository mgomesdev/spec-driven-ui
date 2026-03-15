# Projeto: spec-driven-ui

**Branch:** us/avatar
**Research:** specs/features/avatar/research.md
**Plan:** specs/features/avatar/plan.md

## Descrição

Componente Avatar (átomo) para exibição de foto de perfil do usuário. Renderiza imagem circular com aspect ratio 1:1, utilizando `next/image` para otimização de carregamento e fallback com ícone de usuário quando a imagem falha.

## User Stories

### US-001: Criar componente Avatar

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero um componente Avatar reutilizável que exiba foto de perfil circular com fallback para ícone quando a imagem falhar para que possa ser usado em toda a aplicação.

**Artefatos:**
- Cria: `src/components/avatar/avatar.tsx`

**Contexto do plan:**
> Consultar seção "4. Detalhes de Implementação" do plan.md.
> Props: `src: string`, `alt: string`, `size?: number` (padrão 92)
> Usar `<Image />` do Next.js com `layout="fill"` e `objectFit="cover"`
> Fallback: ícone User do Lucide React quando src falhar
> Estilização: border-radius circular via token `--radius-full`

#### Critérios de Aceitação

* Componente renderiza imagem com prop `src`
* Aplica border-radius circular usando token CSS `--radius-full`
* Mantém aspect ratio 1:1 (container quadrado)
* Renderiza ícone de fallback quando imagem falha (onError)
* Suporta prop `size` para dimensionamento (padrão 92px)
* Acessibilidade: requer prop `alt` obrigatória e usa role="img"
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)
