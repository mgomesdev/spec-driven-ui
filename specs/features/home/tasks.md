# Projeto: Spec Driven UI

**Branch:** us/home
**Research:** specs/features/home/research.md
**Plan:** specs/features/home/plan.md

## Descrição

Implementação da Home Page estratégica focada em autoridade profissional. Contém seções de Hero, Grade de Projetos, Lista de Skills e Depoimentos, com conteúdo gerenciado via arquivo JSON estático.

## User Stories

### US-001: Criar types e esquema de dados da Home

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero definir as interfaces TypeScript e o arquivo de dados inicial para que a feature tenha uma estrutura de dados consistente.

**Artefatos:**
- Cria: `src/types/content.ts`
- Cria: `src/data/content.json`

**Contexto do plan:**
> Veja seções "3. Interfaces e Types" e "4. Contratos de Dados" do plan.md.

#### Critérios de Aceitação

* Arquivo `src/types/content.ts` exporta as interfaces `Project`, `Skill`, `Testimonial` e `HomeContent`.
* Arquivo `src/data/content.json` contém dados válidos conforme o esquema definido.
* Typecheck aprovado.

---

### US-002: Criar serviço e hook de conteúdo

**Prioridade:** 2
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero uma camada de abstração para acessar os dados do JSON para que os componentes não dependam de importações diretas e fiquem fáceis de testar/mockar.

**Artefatos:**
- Cria: `src/services/content-service.ts`
- Cria: `src/hooks/use-content.ts`
- Depende de: US-001

**Contexto do plan:**
> Veja seção "2. Estrutura de Arquivos" do plan.md. O serviço deve apenas ler o JSON e o hook deve expor os dados.

#### Critérios de Aceitação

* `content-service.ts` exporta função para obter o conteúdo da Home.
* `use-content.ts` retorna os dados tipados como `HomeContent`.
* Typecheck aprovado.

---

### US-003: Criar átomos de UI (Badge, Button, Heading)

**Prioridade:** 3
**Passes:** false

**Descrição:**
> Como usuário, quero elementos de interface consistentes (botões, títulos e badges) que sigam o design minimalista.

**Artefatos:**
- Cria: `src/components/atoms/badge.tsx`
- Cria: `src/components/atoms/button.tsx`
- Cria: `src/components/atoms/heading.tsx`

**Contexto do plan:**
> Veja seção "5. Componentes" do plan.md. Use Tailwind CSS v4 para estilização premium.

#### Critérios de Aceitação

* Componentes exportados corretamente em `src/components/atoms/`.
* `Badge` aceita texto e cores variantes.
* `Button` é acessível e suporta estados de hover.
* `Heading` suporta diferentes níveis (H1, H2, H3).
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

---

### US-004: Criar moléculas (ProjectCard, SkillItem)

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como usuário, quero ver cards de projetos e itens de skill detalhados para entender a experiência do profissional.

**Artefatos:**
- Cria: `src/components/molecules/project-card.tsx`
- Cria: `src/components/molecules/skill-item.tsx`
- Depende de: US-003

**Contexto do plan:**
> Veja seção "5. Componentes" do plan.md (Molecule definitions).

#### Critérios de Aceitação

* `ProjectCard` exibe imagem, título e badges de tecnologia.
* `SkillItem` exibe o nome da tecnologia e sua categoria.
* Layout responsivo e minimalista.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

---

### US-005: Criar organismos da Home (Hero, Grids, Lists)

**Prioridade:** 5
**Passes:** false

**Descrição:**
> Como usuário, quero as seções completas da home page montadas para visualizar o conteúdo de autoridade.

**Artefatos:**
- Cria: `src/components/organisms/header.tsx`
- Cria: `src/components/organisms/hero.tsx`
- Cria: `src/components/organisms/projects-grid.tsx`
- Cria: `src/components/organisms/skills-list.tsx`
- Cria: `src/components/organisms/testimonials.tsx`
- Depende de: US-004

**Contexto do plan:**
> Veja seção "5. Componentes" (Organisms). Cada organismo deve receber seus dados via props.

#### Critérios de Aceitação

* Todos os organismos implementados conforme o plan.md.
* `Hero` apresenta o H1 principal e descrição.
* `ProjectsGrid` mapeia a lista de projetos do JSON.
* `SkillsList` agrupa skills por categorias.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

---

### US-006: Integrar Home Page final

**Prioridade:** 6
**Passes:** false

**Descrição:**
> Como visitante, quero acessar a home page completa para ter a experiência de autoridade profissional planejada.

**Artefatos:**
- Modifica: `src/app/page.tsx`
- Depende de: US-002, US-005

**Contexto do plan:**
> Veja seção "2. Estrutura de Arquivos" do plan.md. A página deve consumir os dados via hook/serviço e renderizar os organismos.

#### Critérios de Aceitação

* `src/app/page.tsx` renderiza Header, Hero, ProjectsGrid, SkillsList e Testimonials.
* Página é totalmente responsiva.
* Animações sutis aplicadas (conforme research.md).
* Performance Lighthouse > 90.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser: navegar pela home e validar visualmente todas as seções.
