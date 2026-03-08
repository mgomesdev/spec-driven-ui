# Home — Site de Posicionamento Profissional

## 1. Visão Geral

Desenvolvimento da página inicial (`/`) de um site estratégico voltado para posicionamento de autoridade profissional de um desenvolvedor frontend sênior. A Home deve comunicar competência, gerar confiança e converter visitantes (recrutadores e clientes) em contatos ativos, apresentando o profissional e seus projetos de destaque de forma clara e impactante.

---

## 2. Objetivos

- Comunicar de forma imediata quem é o profissional, qual é seu diferencial e como ele pode ser contratado
- Apresentar projetos concretos que funcionem como prova social e validação técnica
- Reduzir o ciclo de avaliação do recrutador: da primeira impressão à decisão de contato
- Ser a base estrutural para futuras seções (skills, experiência, blog) sem exigir refatoração

---

## 3. Contexto de Integração com Backend

- **Tipo:** Nenhum — todos os dados são estáticos
- **Status:** Dados hardcoded diretamente nos componentes ou em arquivos de constantes
- **Contratos disponíveis:** N/A — sem API ou CMS nesta entrega
- **Autenticação:** Nenhuma

> Os dados do profissional (nome, bio, projetos) serão declarados como constantes TypeScript em arquivos de dados (`/src/data/`), desacoplados dos componentes de UI.

---

## 4. Histórias de Usuário

### US-001: Exibir seção Hero com apresentação pessoal

**Descrição:** Como recrutador que acessa o site pela primeira vez, quero ver de imediato quem é o profissional, seu cargo e uma breve bio, para que eu possa decidir em segundos se o perfil é relevante para a minha vaga.

**Tela/Componente afetado:** `src/app/page.tsx` → componente `HeroSection`

**Critérios de aceitação:**
- [ ] Exibe o nome completo do profissional em destaque (heading `h1`)
- [ ] Exibe o cargo/título profissional (ex: "Desenvolvedor Frontend Sênior")
- [ ] Exibe um subtítulo ou bio curta (1–2 linhas) descrevendo o diferencial
- [ ] Exibe um CTA principal (ex: botão "Ver projetos" com scroll suave até a seção de projetos)
- [ ] Exibe um CTA secundário (ex: link "Falar comigo" abrindo email ou LinkedIn)
- [ ] Layout responsivo: mobile-first, conteúdo centralizado ou em split em desktop
- [ ] Typecheck aprovado (`npx tsc --noEmit`)
- [ ] **Verificar no navegador** usando a skill dev-browser

---

### US-002: Exibir seção de Projetos em Destaque

**Descrição:** Como recrutador, quero ver os projetos mais relevantes do profissional com contexto suficiente para entender o problema resolvido e a tecnologia usada, para que eu possa avaliar a capacidade técnica sem precisar sair do site.

**Tela/Componente afetado:** `src/app/page.tsx` → componente `ProjectsSection` + `ProjectCard`

**Critérios de aceitação:**
- [ ] Exibe uma grade com no mínimo 2 projetos (máximo recomendado: 4–6)
- [ ] Cada card de projeto exibe: título, descrição curta (1–2 linhas), stack utilizada (lista de tags) e link para o projeto (GitHub ou URL ao vivo)
- [ ] Cards são clicáveis: o link principal direciona para a URL do projeto em nova aba
- [ ] A seção possui um heading `h2` identificável ("Projetos" ou "Projetos em Destaque")
- [ ] Estados de imagem: se o projeto não tiver imagem, exibe um placeholder com degradê ou ícone
- [ ] Layout responsivo: 1 coluna no mobile, 2–3 colunas no desktop
- [ ] Os dados dos projetos estão declarados em `/src/data/projects.ts` como constante exportada
- [ ] Typecheck aprovado (`npx tsc --noEmit`)
- [ ] **Verificar no navegador** usando a skill dev-browser

---

### US-003: Estrutura de dados estáticos para profissional e projetos

**Descrição:** Como desenvolvedor que mantém o site, quero que os dados pessoais e dos projetos estejam centralizados em arquivos de constantes TypeScript, para que futuras atualizações sejam feitas em um único lugar sem tocar no código dos componentes.

**Tela/Componente afetado:** `/src/data/profile.ts`, `/src/data/projects.ts`

**Critérios de aceitação:**
- [ ] Arquivo `/src/data/profile.ts` exporta uma constante `PROFILE` com: `name`, `role`, `bio`, `ctaEmail` e/ou `ctaLinkedIn`
- [ ] Arquivo `/src/data/projects.ts` exporta uma constante `PROJECTS` como array de objetos tipados pela interface `Project`
- [ ] A interface `Project` inclui: `id`, `title`, `description`, `stack: string[]`, `url`, `imageUrl?: string`
- [ ] Nenhum componente de UI faz fetch ou define dados inline — todos importam de `/src/data/`
- [ ] Typecheck aprovado (`npx tsc --noEmit`)

---

## 5. Requisitos Funcionais

- RF-01: A página `/` deve carregar sem JavaScript desabilitado (SSR — Next.js App Router por padrão)
- RF-02: O CTA "Ver projetos" deve rolar suavemente (`scroll-behavior: smooth`) até a seção `#projects`
- RF-03: Links externos (GitHub, URL do projeto) devem abrir em nova aba com `target="_blank" rel="noopener noreferrer"`
- RF-04: Os dados de projetos e perfil devem ser importados de arquivos de constantes — nenhum dado hardcoded inline nos componentes JSX
- RF-05: A página deve ter apenas um `<h1>` (nome do profissional na Hero) e `<h2>` para as demais seções

---

## 6. Requisitos Não-Funcionais (Frontend)

- RNF-01: Todos os componentes devem ser responsivos (mobile-first com Tailwind CSS v4)
- RNF-02: Sem dependência de APIs externas — a página funciona completamente offline com dados estáticos
- RNF-03: Nenhum componente usa `any` — todos os tipos devem ser explícitos
- RNF-04: Imagens de projetos devem usar o componente `<Image />` do Next.js com tratamento de fallback
- RNF-05: A estética deve ser premium: uso de gradientes, glassmorphism, backdrop-blur e micro-animações conforme as convenções do projeto

---

## 7. Fora do Escopo

- Não inclui páginas internas (ex: `/sobre`, `/projetos`, `/contato`)
- Não inclui seção de Skills/Tecnologias
- Não inclui seção de Experiência Profissional / Timeline
- Não inclui Depoimentos ou Recomendações
- Não inclui formulário de contato
- Não inclui integração com CMS, API externa ou banco de dados
- Não inclui autenticação ou área administrativa
- Não inclui dark mode como feature configurável pelo usuário
- Não inclui página de blog ou listagem de artigos

---

## 8. Referências Visuais

- Link para Figma/protótipo: não disponível
- Componentes existentes que podem ser reutilizados: verificar `src/components/atoms/` antes de criar novos
- Design system: Tailwind CSS v4 — padrão do projeto com preferência por gradientes, backdrop-blur, UI dark premium
- Inspiração: sites de portfólio com hero impactante + grid de projetos (ex: [brittanychiang.com](https://brittanychiang.com/), [leerob.io](https://leerob.io/))

---

## 9. Métricas de Sucesso

- Recrutador consegue identificar o nome, cargo e diferencial do profissional em menos de 5 segundos
- Recrutador consegue acessar pelo menos 1 projeto com contexto suficiente para avaliação sem sair do site
- Página carrega sem erros de console no browser
- Typecheck (`npx tsc --noEmit`) aprovado sem erros

---

## 10. Questões em Aberto

- [ ] Qual o nome completo do profissional a ser exibido no Hero?
- [ ] Qual o cargo/título profissional preferido? (ex: "Frontend Engineer", "Desenvolvedor Frontend Sênior")
- [ ] Qual a bio curta (1–2 linhas) de apresentação?
- [ ] Quais projetos serão listados? (nome, descrição, stack, URL)
- [ ] Há foto/avatar para uso no Hero ou a seção será apenas textual?
- [ ] O CTA secundário deve linkar para email direto ou para o perfil do LinkedIn?
