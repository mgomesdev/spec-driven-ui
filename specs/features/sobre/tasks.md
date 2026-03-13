# Projeto: Spec-Driven UI

**Branch:** us/sobre
**Research:** specs/features/sobre/research.md
**Plan:** specs/features/sobre/plan.md

## Descrição

Página institucional "/about" com conteúdo estático apresentando biografia profissional, experiência em formato timeline, habilidades organizadas por categoria e links de contato (LinkedIn, GitHub, email).

## User Stories

### US-001: Criar types da feature sobre

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript da feature sobre definidos para que todos os outros artefatos possam ser criados com tipagem correta.

**Artefatos:**
- Cria: `src/types/sobre.ts`

**Contexto do plan:**
> Consultar seção "3. Interfaces e Types" do plan.md.
> Tipos necessários: `Experience`, `SkillCategory`, `ContactLink`, `AboutData`.

#### Critérios de Aceitação

* Arquivo exporta interface `Experience` com campos: id, role, company, period, description
* Arquivo exporta interface `SkillCategory` com campos: id, name, skills[]
* Arquivo exporta interface `ContactLink` com campos: id, label, url, icon
* Arquivo exporta interface `AboutData` com campos: profile, bio[], experience[], skills[], contact[]
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Criar dados estáticos da feature sobre

**Prioridade:** 2
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero os dados estáticos da página sobre em um arquivo separado para que os componentes consumam esses dados via props.

**Artefatos:**
- Cria: `src/data/sobre.ts`
- Depende de: `US-001` (types/sobre.ts)

**Contexto do plan:**
> Consultar seção "7. Dados Estáticos" do plan.md.
> Dados mockados com placeholder para biografia, experiência, skills e contato.

#### Critérios de Aceitação

* Arquivo exporta constante `ABOUT` do tipo `AboutData`
* Inclui profile com name e role
* Inclui array bio com pelo menos 2 parágrafos placeholder
* Inclui array experience com pelo menos 2 itens placeholder
* Inclui array skills com pelo menos 2 categorias placeholder
* Inclui array contact com LinkedIn, GitHub e Email
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-003: Criar componente BioSection

**Prioridade:** 3
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver a biografia profissional do desenvolvedor com nome, cargo e foto para entender quem é e qual sua trajetória.

**Artefatos:**
- Cria: `src/components/sobre/bio-section.tsx`
- Depende de: `US-001` (types/sobre.ts), `US-002` (data/sobre.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" - BioSection.
> Props: profile (name, role, avatar), bio[]

#### Critérios de Aceitação

* Componente recebe props: profile e bio
* Exibe nome e cargo profissional
* Exibe biografia em 2-3 parágrafos
* Exibe avatar (se fornecido) ou placeholder
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-004: Criar componente ExperienceSection

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver a experiência profissional em formato timeline para avaliar o background e habilidades do desenvolvedor.

**Artefatos:**
- Cria: `src/components/sobre/experience-section.tsx`
- Depende de: `US-001` (types/sobre.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" - ExperienceSection.
> Props: experience[]

#### Critérios de Aceitação

* Componente recebe prop: experience (array de Experience)
* Exibe cargo, empresa e período para cada experiência
* Exibe descrição breve da função
* Layout em formato vertical (timeline ou lista)
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-005: Criar componente SkillsSection

**Prioridade:** 5
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver as tecnologias que o desenvolvedor domina organizadas por categoria para entender suas habilidades técnicas.

**Artefatos:**
- Cria: `src/components/sobre/skills-section.tsx`
- Depende de: `US-001` (types/sobre.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" - SkillsSection.
> Props: skills[]

#### Critérios de Aceitação

* Componente recebe prop: skills (array de SkillCategory)
* Exibe nome da categoria
* Exibe habilidades como badges ou tags visuais
* Layout em grid ou cards por categoria
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-006: Criar componente ContactSection

**Prioridade:** 6
**Passes:** false

**Descrição:**
> Como visitante, eu quero ver os links de contato (LinkedIn, GitHub, email) para entrar em contato ou ver os projetos do desenvolvedor.

**Artefatos:**
- Cria: `src/components/sobre/contact-section.tsx`
- Depende de: `US-001` (types/sobre.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" - ContactSection.
> Props: contact[]

#### Critérios de Aceitação

* Componente recebe prop: contact (array de ContactLink)
* Exibe link para LinkedIn com ícone
* Exibe link para GitHub com ícone
* Exibe link para Email com ícone
* Links abrem em nova aba (target="_blank")
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-007: Criar página /about integrando todos os componentes

**Prioridade:** 7
**Passes:** false

**Descrição:**
> Como visitante, eu quero acessar a página /about para ler a biografia, ver experiência, habilidades e entrar em contato.

**Artefatos:**
- Cria: `src/app/sobre/page.tsx`
- Depende de: `US-002` (data/sobre.ts), `US-003`, `US-004`, `US-005`, `US-006`

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" do plan.md.
> A página importa todos os componentes e os dados de sobre.ts.

#### Critérios de Aceitação

* Página acessível em /about
* Renderiza BioSection com dados do profile e bio
* Renderiza ExperienceSection com dados de experience
* Renderiza SkillsSection com dados de skills
* Renderiza ContactSection com dados de contact
* Meta tags title e description para SEO
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser: navegar até /about e confirmar que todos os componentes renderizam corretamente

#### Notas

(Sem notas)
