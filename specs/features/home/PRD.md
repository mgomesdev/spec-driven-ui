# PRD: Home Page (Página Inicial)

## 1. Introdução/Visão Geral

A Home Page é o ponto central do site estratégico, focada em posicionar o usuário como um engenheiro de software frontend de autoridade. O design será minimalista, limpo e direto, utilizando uma estrutura de "página única" (landing page) com scroll infinito que apresenta todas as informações relevantes sem interrupções de navegação complexas.

## 2. Objetivos

- **Conversão:** Direcionar o visitante para o portfólio ou contato imediato por meio de um Hero impactante.
- **Autoridade:** Demonstrar competência técnica através de uma curadoria de projetos e tecnologias.
- **Experiência do Usuário:** Proporcionar uma navegação fluida e rápida em uma única página.
- **Minimalismo:** Manter um visual limpo (estilo Shadcn/UI) para focar no conteúdo.

## 3. Histórias de Usuário

### US-001: Hero Section com Foco em Conversão
**Descrição:** Como visitante, quero ver uma introdução clara e um botão de ação (CTA) para que eu saiba imediatamente quem é o profissional e como ver seu trabalho.

**Critérios de aceitação:**
- [ ] Exibir título principal impactante (Nome/Função).
- [ ] Botão de CTA primário ("Ver Portfolio") com scroll para a seção de projetos.
- [ ] Design minimalista com tipografia clara.
- [ ] **[Somente histórias de UI]** Verifique no navegador usando a dev-browser skill.

### US-002: Landing Page de Scroll Único
**Descrição:** Como usuário, quero navegar por todas as seções (Projetos, Skills, Experiência) apenas rolando a página para que a experiência seja contínua.

**Critérios de aceitação:**
- [ ] Todas as seções (Hero, Projetos, Skills, Experiência, Footer) carregadas na `page.tsx` principal.
- [ ] Espaçamento (padding/margin) consistente entre as seções.
- [ ] Navegação via header minimalista por âncoras (IDs).

### US-003: Galeria de Projetos Curada
**Descrição:** Como recrutador, quero ver uma lista selecionada de projetos com visibilidade imediata para avaliar a qualidade técnica.

**Critérios de aceitação:**
- [ ] Lista de pelo menos 3 projetos destacados.
- [ ] Cada projeto deve ter: Título, Descrição curta, Tags de tecnologias e Link (Github/Live).
- [ ] Layout de grid responsivo.

### US-004: Seção de Skills e Experiência
**Descrição:** Como recrutador, quero visualizar as competências técnicas e o histórico profissional para validar o fit com vagas.

**Critérios de aceitação:**
- [ ] Seção de "Skills" com ícones ou tags minimalistas.
- [ ] Seção de "Experiência" em formato de timeline ou lista limpa.
- [ ] Ordem cronológica inversa para as experiências.

## 4. Requisitos Funcionais

- **RF-1:** Implementar Header minimalista com Logo (ou Nome) e links de âncoras.
- **RF-2:** Seção Hero deve ocupar o "above the fold" (dobra superior).
- **RF-3:** Os cards de projetos devem ter hover states sutis conforme o padrão de design minimalista.
- **RF-4:** Implementar formulário de contato simples ou link direto para e-mail/LinkedIn no Footer.
- **RF-5:** Garantir responsividade total (Mobile First).

## 5. Objetivos não relacionados (fora do escopo)

- Backend para gestão de conteúdo (CMS) - os dados serão estáticos inicialmente.
- Temas escuros/claros dinâmicos (será fixado em um deles conforme design clean).
- Blog funcional (apenas placeholder se necessário).

## 6. Considerações de projeto

- **Estética:** Shadcn/UI, Tailwind CSS v4, visual clean, alto contraste.
- **Componentes:** Usar padrão Atomic Design conforme definido na arquitetura.
- **Navegação:** Smooth scroll para os links de âncora.

## 7. Considerações Técnicas

- **Framework:** Next.js 15+ App Router.
- **Performance:** Imagens otimizadas com `next/image`.
- **SEO:** Meta tags adequadas para título e descrição da home.

## 8. Métricas de Sucesso

- Tempo de carregamento da página < 1.5s.
- Todos os links de âncora funcionando corretamente.
- Nota >= 90 no Lighthouse/PageSpeed para Performance e Best Practices.

## 9. Questões em aberto

- Devemos incluir depoimentos logo na primeira versão?
- Qual será a cor de destaque (accent color) para o design clean (ex: Black/White com um azul ou violeta sutil)?
