# Projeto: Site de Posicionamento Profissional

**Branch:** us/page-home
**Research:** specs/features/page-home/research.md
**Plan:** specs/features/page-home/plan.md

## Descrição

Desenvolvimento da página inicial `/` com Header, Hero e Footer. A página apresenta o profissional com design premium (UI escura, gradientes). Todos os dados são estáticos.

## User Stories

### US-001: Criar tipos da feature page-home

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero os tipos TypeScript da feature page-home definidos para que todos os componentes possam ser criados com tipagem correta.

**Artefatos:**
- Cria: `src/types/home.ts`
- Modifica: (nenhum)

**Contexto do plan:**
> Consultar seção "3. Tipos e Interfaces" do plan.md.
> O tipo `Profile` deve ser definido com os campos: name, role, bio, ctaEmail, ctaLinkedIn.

#### Critérios de Aceitação

* Arquivo exporta interface `Profile` com campos: name, role, bio, ctaEmail, ctaLinkedIn
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Atualizar dados do profile

**Prioridade:** 2
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero atualizar os dados do profile para incluir os novos campos necessários para a página home.

**Artefatos:**
- Modifica: `src/data/profile.ts`
- Depende de: `US-001` (types/home.ts)

**Contexto do plan:**
> Consultar seção "4. Dados Estáticos" do plan.md.
> O objeto `PROFILE` deve conter todos os campos necessários para o hero: name, role, bio.

#### Critérios de Aceitação

* Arquivo exporta `PROFILE` com os campos: name, role, bio, ctaEmail, ctaLinkedIn
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-003: Criar componente Header

**Prioridade:** 3
**Passes:** true

**Descrição:**
> Como visitante, eu quero ver um header com um botão de ação para que eu possa interagir ou navegar para outra seção.

**Artefatos:**
- Cria: `src/components/page-home/header.tsx`
- Depende de: `US-001` (types/home.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" do plan.md.
> Props: `{ children?: React.ReactNode }`

#### Critérios de Aceitação

* Renderiza um header com fundo escuro (#101828)
* Exibe um botão com ícone (sun icon)
* Layout responsivo: ocupa largura total, altura fixa
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-004: Criar componente HeroSection

**Prioridade:** 4
**Passes:** true

**Descrição:**
> Como visitante, eu quero ver a seção hero com avatar, nome, cargo, subtítulo, parágrafo e botões de CTA para entender quem é o profissional e como entrar em contato.

**Artefatos:**
- Cria: `src/components/page-home/hero-section.tsx`
- Depende de: `US-001` (types/home.ts), `US-002` (data/profile.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" do plan.md.
> Props: `{ profile: ProfileData }`

#### Critérios de Aceitação

* Exibe avatar circular com borda (ou placeholder com inicial se não houver imagem)
* Exibe identificador `<MatheusGomesDev />` acima do título
* Exibe título principal "Programador Frontend" com gradiente
* Exibe subtítulo "apaixonado por criação de interfaces inovadoras"
* Exibe parágrafo descritivo sobre o profissional
* Exibe botão "Vamos criar algo incrível juntos?" (link)
* Exibe dois CTAs: "Download CV" e "Entre em Contato" (botão com gradiente)
* Layout responsivo: centralizado em mobile, max-width 700px em desktop
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-005: Criar componente Footer

**Prioridade:** 5
**Passes:** true

**Descrição:**
> Como visitante, eu quero ver o rodapé da página com informações de copyright para completar a experiência visual.

**Artefatos:**
- Cria: `src/components/page-home/footer.tsx`
- Depende de: `US-001` (types/home.ts)

**Contexto do plan:**
> Consultar seção "5. Componentes: Props e Responsabilidades" do plan.md.
> Props: `{ copyrightText?: string }`

#### Critérios de Aceitação

* Exibe texto de copyright "© 2026 matheusgomesdev."
* Exibe um ícone (sun icon) ao lado do copyright
* Layout: itens nas extremidades (space-between)
* Fundo escuro igual ao header (#101828)
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-006: Integrar componentes na página home

**Prioridade:** 6
**Passes:** true

**Descrição:**
> Como visitante, eu quero acessar a página `/` e ver todos os componentes integrados para ter uma experiência coesa.

**Artefatos:**
- Modifica: `src/app/page.tsx`
- Depende de: `US-003` (header.tsx), `US-004` (hero-section.tsx), `US-005` (footer.tsx)

**Contexto do plan:**
> Consultar seção "6. Componente Principal (Page)" do plan.md.
> A página deve importar e renderizar Header, HeroSection e Footer.

#### Critérios de Aceitação

* Página acessível em `/`
* Renderiza Header na parte superior
* Renderiza Hero no centro
* Renderiza Footer na parte inferior
* Fundo escuro em toda a página (#101828)
* Meta tags title e description para SEO
* Layout responsivo
* Typecheck aprovado
* Verificar no navegador usando a skill dev-browser: navegar até `/` e confirmar que todos os componentes renderizam corretamente

#### Notas

(Sem notas)
