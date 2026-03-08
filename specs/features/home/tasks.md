# Projeto: spec-driven-ui

**Branch:** us/home
**Research:** specs/features/home/research.md
**Plan:** specs/features/home/plan.md

## Descrição

Página inicial (`/`) de posicionamento profissional. Exibe uma seção Hero com apresentação pessoal e uma seção de Projetos em Destaque. Todos os dados são estáticos, declarados em constantes TypeScript — sem API ou CMS. O objetivo é converter visitantes (recrutadores e clientes) em contatos ativos.

---

## User Stories

### US-001: Criar interfaces TypeScript da feature home

**Prioridade:** 1
**Passes:** false

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript da feature definidos em um único arquivo para que todos os outros artefatos possam ser criados com tipagem correta e sem duplicação.

**Artefatos:**
- Cria: `src/types/home.ts`

**Contexto do plan:**
> Consultar seção "3. Interfaces e Types" do plan.md.
> Tipos necessários: `Profile` (name, role, bio, ctaEmail?, ctaLinkedIn?) e `Project` (id, title, description, stack: string[], url, imageUrl?).

#### Critérios de Aceitação

* Arquivo exporta interface `Profile` com campos: `name: string`, `role: string`, `bio: string`, `ctaEmail?: string`, `ctaLinkedIn?: string`
* Arquivo exporta interface `Project` com campos: `id: string`, `title: string`, `description: string`, `stack: string[]`, `url: string`, `imageUrl?: string`
* Nenhum uso de `any`
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Criar arquivo de dados do profissional (profile.ts)

**Prioridade:** 2
**Passes:** false

**Descrição:**
> Como desenvolvedor que mantém o site, eu quero os dados pessoais do profissional centralizados em uma constante TypeScript para que atualizações futuras sejam feitas em um único lugar.

**Artefatos:**
- Cria: `src/data/profile.ts`
- Depende de: `US-001` (types/home.ts)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" e "3. Interfaces e Types" do plan.md.
> A constante `PROFILE` deve ser tipada com `Profile` de `@/types/home`.
> Usar placeholders para nome, cargo e bio (ver seção "8. Questões em Aberto").

#### Critérios de Aceitação

* Arquivo exporta constante `PROFILE` tipada como `Profile`
* `PROFILE` contém valores placeholder para: `name`, `role`, `bio`, `ctaEmail` e `ctaLinkedIn`
* Nenhum componente de UI define dados inline — dados centralizados aqui
* Typecheck aprovado

#### Notas

Usar placeholders realistas enquanto o profissional não preenche os dados definitivos. Ex: `name: "Matheus Gomes"`, `role: "Desenvolvedor Frontend Sênior"`.

---

### US-003: Criar arquivo de dados de projetos (projects.ts)

**Prioridade:** 3
**Passes:** false

**Descrição:**
> Como desenvolvedor que mantém o site, eu quero os dados dos projetos centralizados em uma constante TypeScript tipada para que atualizações sejam feitas em um único lugar sem tocar nos componentes.

**Artefatos:**
- Cria: `src/data/projects.ts`
- Depende de: `US-001` (types/home.ts)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" e "3. Interfaces e Types" do plan.md.
> A constante `PROJECTS` deve ser `Project[]` com no mínimo 2 e no máximo 6 projetos de exemplo.
> Cada projeto deve ter: id, title, description, stack, url — imageUrl é opcional.

#### Critérios de Aceitação

* Arquivo exporta constante `PROJECTS` tipada como `Project[]`
* Array contém entre 2 e 6 projetos com dados placeholder realistas
* Cada item possui: `id`, `title`, `description`, `stack` (array com pelo menos 2 tecnologias), `url`
* Nenhum componente define dados de projetos inline
* Typecheck aprovado

#### Notas

Usar projetos de exemplo realistas até confirmação pelo profissional. URLs podem apontar para `https://github.com` como placeholder.

---

### US-004: Criar componente ProjectCard

**Prioridade:** 4
**Passes:** false

**Descrição:**
> Como recrutador, eu quero ver cada projeto em um card visual com título, descrição, stack e link, para que eu possa avaliar a capacidade técnica de forma rápida e elegante.

**Artefatos:**
- Cria: `src/components/home/project-card.tsx`
- Depende de: `US-001` (types/home.ts), `US-003` (projects.ts indiretamente via tipo)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" → subsection `ProjectCard` do plan.md.
> Props: `{ project: Project }`.
> Estética: glassmorphism (backdrop-blur, bg translúcido), hover com micro-animação de elevação.
> Imagem: `<Image />` do Next.js com fallback por degradê quando `imageUrl` é undefined ou falha.
> Link externo: `target="_blank" rel="noopener noreferrer"`.
> Acessibilidade: link de cobertura com texto `sr-only` em vez de `<a>` envolvendo todo o card.

#### Critérios de Aceitação

* Componente aceita prop `project: Project` e renderiza sem erros
* Exibe: título do projeto, descrição curta (1–2 linhas), lista de tags da stack
* Link externo abre o projeto em nova aba com `target="_blank" rel="noopener noreferrer"`
* Quando `imageUrl` é indefinido ou falha, exibe placeholder com degradê (sem imagem quebrada)
* Aplica efeito glassmorphism e micro-animação de hover (elevação/scale)
* Nenhum uso de `any`
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

O estado `isImageError: boolean` controla o fallback da imagem conforme especificado no plan.md.

---

### US-005: Criar componente ProjectsSection

**Prioridade:** 5
**Passes:** false

**Descrição:**
> Como recrutador, eu quero ver os projetos em uma grade organizada com heading identificável para que eu possa avaliar os trabalhos do profissional sem precisar navegar para outra página.

**Artefatos:**
- Cria: `src/components/home/projects-section.tsx`
- Depende de: `US-001` (types/home.ts), `US-004` (ProjectCard)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" → subsection `ProjectsSection` do plan.md.
> Props: `{ projects: Project[] }`.
> Estrutura: heading `h2` + grid responsivo (1 col mobile / 2–3 col desktop).
> A seção deve ter `id="projects"` para que o scroll suave do CTA do Hero funcione.

#### Critérios de Aceitação

* Componente aceita prop `projects: Project[]`
* Renderiza um heading `h2` com texto "Projetos em Destaque" (ou equivalente)
* Renderiza um `ProjectCard` para cada item do array `projects`
* A seção possui `id="projects"` para suporte ao scroll âncora
* Grid é responsivo: 1 coluna em mobile, 2–3 colunas em desktop (via Tailwind CSS v4)
* Nenhum uso de `any`
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-006: Criar componente HeroSection

**Prioridade:** 6
**Passes:** false

**Descrição:**
> Como recrutador que acessa o site pela primeira vez, eu quero ver de imediato o nome, cargo, bio e links de contato do profissional, para que eu possa decidir em segundos se o perfil é relevante.

**Artefatos:**
- Cria: `src/components/home/hero-section.tsx`
- Depende de: `US-001` (types/home.ts), `US-002` (profile.ts indiretamente via tipo)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" → subsection `HeroSection` do plan.md.
> Props: `{ profile: Profile }`.
> Estrutura: `h1` com nome (único na página), cargo/título, bio curta, CTA primário ("Ver projetos" → `href="#projects"`) e CTA secundário ("Falar comigo" → `mailto:` ou LinkedIn).
> Estética: gradiente no heading `h1`, backdrop-blur no container, layout responsivo (centralizado mobile / split desktop).
> Acessibilidade: `h1` único, CTAs com `aria-label` descritivo.

#### Critérios de Aceitação

* Componente aceita prop `profile: Profile`
* Renderiza `h1` com o nome do profissional (único na página)
* Renderiza cargo/título profissional abaixo do `h1`
* Renderiza bio curta (1–2 linhas)
* CTA primário "Ver projetos" com `href="#projects"` para scroll suave até a seção de projetos
* CTA secundário "Falar comigo" com link para `mailto:` ou LinkedIn conforme valor em `profile`
* Layout responsivo: mobile-first, conteúdo centralizado; em desktop layout split ou centralizado com max-width
* Gradiente aplicado ao `h1`, efeito de backdrop-blur visível no container
* CTAs possuem `aria-label` descritivo
* Nenhum uso de `any`
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

O scroll suave é tratado via CSS (`scroll-behavior: smooth`) e âncora HTML nativa — não requer lógica JavaScript.

---

### US-007: Integrar HeroSection e ProjectsSection em page.tsx

**Prioridade:** 7
**Passes:** false

**Descrição:**
> Como recrutador que acessa `/`, eu quero ver a página completa com Hero e Projetos compostos corretamente, para que eu tenha uma experiência coesa e funcional desde o primeiro acesso.

**Artefatos:**
- Modifica: `src/app/page.tsx`
- Depende de: `US-002` (profile.ts), `US-003` (projects.ts), `US-005` (ProjectsSection), `US-006` (HeroSection)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" e "7. Diagrama de Dependências" do plan.md.
> `page.tsx` importa `PROFILE` de `@/data/profile`, `PROJECTS` de `@/data/projects`,
> `HeroSection` de `@/components/home/hero-section` e `ProjectsSection` de `@/components/home/projects-section`.
> `page.tsx` passa os dados via props. Não define dados inline.

#### Critérios de Aceitação

* `page.tsx` importa e renderiza `HeroSection` passando `profile={PROFILE}`
* `page.tsx` importa e renderiza `ProjectsSection` passando `projects={PROJECTS}`
* A página tem apenas um `h1` (vindo do HeroSection) e `h2` para seções subsequentes
* O CTA "Ver projetos" rola suavemente até `#projects` (âncora nativa + CSS smooth)
* Links externos abrem em nova aba com `rel="noopener noreferrer"`
* Página carrega sem erros de console no browser
* Nenhum dado de profissional ou projeto definido inline no JSX de `page.tsx`
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser: acessar `/`, confirmar Hero e Projetos visíveis, testar CTA de scroll

#### Notas

Esta é a história de integração final. Todas as histórias anteriores (US-001 a US-006) devem estar concluídas antes de iniciar esta.
