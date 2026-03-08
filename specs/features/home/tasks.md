# Projeto: Site de Autoridade Profissional

**Branch:** us/home
**Research:** specs/features/home/research.md
**Plan:** specs/features/home/plan.md

## Descrição

Criação da página inicial (Home) de um site estratégico voltado para o posicionamento de autoridade profissional como desenvolvedor frontend sênior com UI premium em Tailwind v4.

## User Stories

### US-001: Criar types da feature home

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript da feature home definidos para garantir a segurança de tipos e contratos na criação dos mocks e componentes.

**Artefatos:**
- Cria: `src/generated/types.ts`
- Modifica: (nenhum)

**Contexto do plan:**
> Consultar seção "3. Tipagens Base (Exemplificação)" do plan.md.
> Tipos necessários: `Project`, `Skill`, `SocialProof`.

#### Critérios de Aceitação

* Arquivo exporta interface `Project` com `id`, `title`, `description`, `url`, lista de `tags` e `imageUrl` (opcional).
* Arquivo exporta interface `Skill` contendo `name`, `category` e `icon` opcional.
* Arquivo exporta interface `SocialProof` contendo `author`, `role` e `quote`.
* Nenhum tipo utiliza `any` ou `object`.
* Typecheck aprovado.

#### Notas

(Sem notas)

### US-002: Criar mock estático home-data

**Prioridade:** 2
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero mapear os dados estáticos que alimentarão as seções da home para simular um consumo real de dados limpo na UI.

**Artefatos:**
- Cria: `src/data/home-data.ts`
- Depende de: `US-001` (types.ts)

**Contexto do plan:**
> Consultar diagrama na seção "7. Diagrama de Dependências" do plan.md. O conteúdo provém diretamente das tipagens estáticas como fonte da verdade.

#### Critérios de Aceitação

* Exporta constantes simulando API para uso nas seções, ex: `projectsData` (lista de `Project`), `skillsData` (lista de `Skill`), `socialProofData` (lista de `SocialProof`).
* Dados aderem estritamente aos tipos do arquivo `types.ts`.
* Typecheck aprovado.

#### Notas

(Sem notas)

### US-003: Criar componente de Botão UI base

**Prioridade:** 3
**Passes:** true

**Descrição:**
> Como usuário, eu quero um componente de botão padronizado com múltiplos estilos para ser usado nas ações e Call-To-Action.

**Artefatos:**
- Cria: `src/components/ui/button.tsx`
- Depende de: `US-001` (para consistência, embora seja UI genérica)

**Contexto do plan:**
> Consultar seção "4. Assinatura de Componentes" do plan.md.
> Props: `children`, `variant: 'primary' | 'outline'`, `href?`.

#### Critérios de Aceitação

* Componente aceita prop para renderizar botão nativo ou link interno se `href` for fornecido.
* Renderiza com estilos Tailwind v4 apropriados baseados na prop `variant`.
* Componente acessível e testado para contraste e states de hover/focus.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

(Sem notas)

### US-004: Criar componente Section base

**Prioridade:** 4
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero um wrapper de seção da página genérico para manter espaçamentos e constrains de largura padronizados e responsivos em toda a Home.

**Artefatos:**
- Cria: `src/components/ui/section.tsx`
- Modifica: (nenhum)

**Contexto do plan:**
> Citado em "2. Estrutura de Arquivos" e Diagrama do plan.md. Atuará como base de layout.

#### Critérios de Aceitação

* Exporta wrapper `<Section>` que deve definir max-width, paddings (y-axis) e responsividade mobile-first consistentes com design premium.
* Typecheck aprovado.

#### Notas

(Sem notas)

### US-005: Criar componente ProjectCard

**Prioridade:** 5
**Passes:** true

**Descrição:**
> Como usuário, eu quero visualizar detalhes breves de um projeto na vitrine através de um cartão visual contendo links de acesso rápidos.

**Artefatos:**
- Cria: `src/components/home/project-card.tsx`
- Depende de: `US-001` (types.ts)

**Contexto do plan:**
> Consultar seção "4. Assinatura de Componentes" do plan.md.
> Expor a Prop: `{ project: Project }`. Elemento base da lista de projetos.

#### Critérios de Aceitação

* Componente recebe única prop `project` repassando todos os dados.
* Renderiza Título, Descrição, Tags, Link (usando Next Link) e a imagem (usando next/image) de maneira visual ou apresenta um placeholder vazio de design harmonioso se não houver imagem.
* Aplica micro-interações no hover usando Tailwind v4.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

(Sem notas)

### US-006: Criar seção Hero da Home

**Prioridade:** 6
**Passes:** true

**Descrição:**
> Como visitante, quero uma seção de destaque contendo o nome, especialidade e CTA na primeira tela que abra do site para me apresentar contextualmente o profissional.

**Artefatos:**
- Cria: `src/components/home/hero.tsx`
- Depende de: `US-003` (button.tsx), `US-004` (section.tsx)

**Contexto do plan:**
> Consultar seção "4. Assinatura de Componentes" do plan.md;
> Deve importar as props ou consumir dados passados estáticos de herói.

#### Critérios de Aceitação

* Exibe título H1 enfatizando o Nome e o Cargo de Senior Frontend Developer.
* Usa UI Typography premium (estilos legíveis).
* Renderiza `<Button variant="primary">` com CTA ("Ver Projetos" ou "Entrar em Contato").
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

(Sem notas)

### US-007: Criar seção Expertise/Stack

**Prioridade:** 7
**Passes:** false

**Descrição:**
> Como recrutador, quero ver as tecnologias divididas por categoria para facilmente diagnosticar os conhecimentos técnicos da stack atual.

**Artefatos:**
- Cria: `src/components/home/expertise.tsx`
- Depende de: `US-001` (types.ts), `US-004` (section.tsx)

**Contexto do plan:**
> Consultar seção "4. Assinatura de Componentes" do plan.md;
> Props: `ExpertiseProps: { skills: Skill[] }`.

#### Critérios de Aceitação

* Renderiza uma listagem visual limpa das ferramentas dominadas por Categoria (ex: Linguagens, Ferramentas).
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

Aproveitará `skillsData` importando estaticamente vindo do data.

### US-008: Criar seção Vitrine de Projetos

**Prioridade:** 8
**Passes:** false

**Descrição:**
> Como visitante, quero navegar rapidamente por uma lista em grid dos melhores projetos entregues contendo imagem e os contatos.

**Artefatos:**
- Cria: `src/components/home/projects.tsx`
- Depende de: `US-001` (types.ts), `US-004` (section.tsx), `US-005` (project-card.tsx)

**Contexto do plan:**
> Consultar seção "2. Estrutura de Arquivos" e "4. Assinatura de Componentes".

#### Critérios de Aceitação

* Renderiza um CSS Grid ou Flex responsivo populado por 3 `ProjectCard` importados via lista local do component/data.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

Faremos uma versão estática inicial dos top 3 projetos.

### US-009: Criar seção About e Prova Social

**Prioridade:** 9
**Passes:** false

**Descrição:**
> Como potencial cliente, quero ler de forma concisa sobre a biografia do profissional e conferir as avaliações e validações do trabalho pregresso.

**Artefatos:**
- Cria: `src/components/home/about.tsx`
- Depende de: `US-001` (types.ts), `US-004` (section.tsx)

**Contexto do plan:**
> Consultar seção "4. Assinatura de Componentes" do plan.md.
> Props de conteúdo baseado em bio e testimonials `SocialProof`.

#### Critérios de Aceitação

* Apresenta bloco contendo a história e bio do perfil (2 paragrafos curtos).
* Apresenta design limpo com citações e o cargo dos autores dos depoimentos.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser.

#### Notas

(Sem notas)

### US-010: Integrar todas as seções na page.tsx

**Prioridade:** 10
**Passes:** false

**Descrição:**
> Como usuário visitante, acessando a raiz (/), quero que a SPA se inicie e traga todas as seções de layout em uma ordem lógica.

**Artefatos:**
- Modifica: `src/app/page.tsx`
- Depende de: `US-006` a `US-009` e `US-002` (home-data)

**Contexto do plan:**
> Consultar diagrama da seção "7. Diagrama de Dependências" e "2. Estrutura de Arquivos" do plan.md.

#### Critérios de Aceitação

* Edita `src/app/page.tsx` (removendo boilerplates defaults se aplicavel).
* Importa os dados de `src/data/home-data.ts`.
* Renderiza, organizadamente, em ordem as seções Hero, Expertise, Projetos, About alimentadas pelas props estáticas.
* Estrutura SPA mantida (sem roteamentos quebrados).
* Garantir meta SEO base se possível e performance de index base.
* Typecheck aprovado.
* Verificar no navegador usando a skill dev-browser acessando `/` e validando o Layout por completo.

#### Notas

Última task centralizadora da feature de Home.
