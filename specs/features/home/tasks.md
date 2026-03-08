# Projeto: Spec Driven UI

**Branch:** us/home
**Research:** specs/features/home/research.md
**Plan:** specs/features/home/plan.md

## Descrição

Desenvolvimento da página inicial do site estratégico de posicionamento de autoridade profissional. 
A página serve como o cartão de visitas principal, apresentando competência técnica (frontend sênior), 
projetos de destaque, habilidades e depoimentos para facilitar o processo de contratação.

## User Stories

### US-001: Validar e ajustar types da feature home

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero garantir que as interfaces TypeScript estejam alinhadas com o planejado para que todos os componentes usem tipagem correta.

**Artefatos:**
- Modifica: `src/types/content.ts`

**Contexto do plan:**
> Ver seção "3. Interfaces e Types" do plan.md. As interfaces `Project`, `Skill`, `Testimonial` e `HomeContent` devem estar presentes e corretas.

#### Critérios de Aceitação

* Arquivo `src/types/content.ts` exporta as interfaces `Project`, `Skill`, `Testimonial` e `HomeContent`
* As interfaces seguem exatamente a estrutura definida no plan.md
* Typecheck aprovado

#### Notas

(Sem notas)

### US-002: Criar content-service para leitura de dados

**Prioridade:** 2
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero uma abstração para leitura dos dados do content.json para que a lógica de carregamento de dados fique centralizada.

**Artefatos:**
- Cria: `src/services/content-service.ts`
- Depende de: `US-001`

**Contexto do plan:**
> Ver seção "2. Estrutura de Arquivos" e "7. Diagrama de Dependências". O serviço deve importar o `content.json` ou fazer o fetch se necessário (por enquanto importação direta resolve).

#### Critérios de Aceitação

* Exporta função ou classe para acessar os dados de `src/data/content.json`
* O retorno deve ser tipado como `HomeContent`
* Typecheck aprovado

#### Notas

(Sem notas)

### US-003: Criar hook use-content

**Prioridade:** 3
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero um hook customizado para acessar os dados da home para que os componentes não precisem conhecer a implementação do serviço.

**Artefatos:**
- Cria: `src/hooks/use-content.ts`
- Depende de: `US-002`

**Contexto do plan:**
> Ver seção "2. Estrutura de Arquivos". O hook deve expor os dados carregados pelo `content-service`.

#### Critérios de Aceitação

* Hook `useContent` exportado e funcional
* Retorna os dados da home tipados corretamente
* Typecheck aprovado

#### Notas

(Sem notas)

### US-004: Criar átomos base (Badge, Button, Heading)

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver elementos de interface consistentes e com design premium.

**Artefatos:**
- Cria: `src/components/atoms/badge.tsx`
- Cria: `src/components/atoms/button.tsx`
- Cria: `src/components/atoms/heading.tsx`

**Contexto do plan:**
> Ver seção "2. Estrutura de Arquivos". Usar Tailwind CSS v4 para estilização minimalista.

#### Critérios de Aceitação

* `Badge`: Componente para exibir tags de tecnologias
* `Button`: Componente de botão com variações (ex: primary, outline)
* `Heading`: Componente para tipografia H1, H2, etc. com estilos consistentes
* Estilização minimalista conforme research.md
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-005: Criar molécula ProjectCard

**Prioridade:** 5
**Passes:** false

**Descrição:**
> Como recrutador, eu quero ver os detalhes de um projeto de forma clara e atraente.

**Artefatos:**
- Cria: `src/components/molecules/project-card.tsx`
- Depende de: `US-001`, `US-004`

**Contexto do plan:**
> Ver seção "5. Componentes: Props e Responsabilidades". Recebe `Project` como prop.

#### Critérios de Aceitação

* Exibe imagem do projeto, título, descrição e lista de tecnologias (usando `Badge`)
* Hover effects sutis para interatividade
* Design responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-006: Criar molécula SkillItem

**Prioridade:** 6
**Passes:** false

**Descrição:**
> Como gestor técnico, eu quero identificar rapidamente as tecnologias dominadas.

**Artefatos:**
- Cria: `src/components/molecules/skill-item.tsx`
- Depende de: `US-001`

**Contexto do plan:**
> Ver seção "2. Estrutura de Arquivos". Exibe nome e opcionalmente um ícone.

#### Critérios de Aceitação

* Exibe nome da skill
* Layout minimalista e limpo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-007: Criar organismos Header e Hero

**Prioridade:** 7
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver uma introdução impactante e ter navegação fácil.

**Artefatos:**
- Cria: `src/components/organisms/header.tsx`
- Cria: `src/components/organisms/hero.tsx`
- Depende de: `US-003`, `US-004`

**Contexto do plan:**
> Ver research.md US-001 e plan.md seção 5.

#### Critérios de Aceitação

* `Header`: Navegação minimalista (Home, Projetos, Sobre, Skills)
* `Hero`: Título principal (H1) e proposta de valor consumindo dados do JSON
* Design responsivo e premium
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-008: Criar organismos ProjectsGrid e SkillsList

**Prioridade:** 8
**Passes:** false

**Descrição:**
> Como recrutador, eu quero ver a listagem de projetos e habilidades de forma organizada.

**Artefatos:**
- Cria: `src/components/organisms/projects-grid.tsx`
- Cria: `src/components/organisms/skills-list.tsx`
- Depende de: `US-003`, `US-005`, `US-006`

**Contexto do plan:**
> Ver research.md US-002, US-003 e plan.md seção 5.

#### Critérios de Aceitação

* `ProjectsGrid`: Mapeia projetos em grid consumindo dados via hook
* `SkillsList`: Organiza skills por categoria (Frontend, Tools, Soft Skills)
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-009: Criar organismo Testimonials

**Prioridade:** 9
**Passes:** false

**Descrição:**
> Como potencial cliente, eu quero ver prova social para aumentar minha confiança.

**Artefatos:**
- Cria: `src/components/organisms/testimonials.tsx`
- Depende de: `US-003`

**Contexto do plan:**
> Ver research.md US-004 e plan.md seção 5.

#### Critérios de Aceitação

* Exibição de depoimentos com autor, cargo e conteúdo
* Layout limpo e leitura fácil
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

### US-010: Integrar Home Page completa

**Prioridade:** 10
**Passes:** false

**Descrição:**
> Como usuário, eu quero acessar a página inicial e ver todas as seções integradas e funcionais.

**Artefatos:**
- Modifica: `src/app/page.tsx`
- Depende de: `US-007`, `US-008`, `US-009`

**Contexto do plan:**
> Ver seção "7. Diagrama de Dependências". A página deve orquestrar todos os organismos.

#### Critérios de Aceitação

* Todas as seções (Hero, Projetos, Skills, Testimonials) renderizadas na Home
* Dados carregados corretamente do `content.json` via hook
* SEO básico implementado (título, meta description)
* Performance otimizada e design responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser: home page completa e funcional em /

#### Notas

(Sem notas)
