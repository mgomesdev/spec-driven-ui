# Home - Site de Autoridade Profissional

## 1. Visão Geral

Criação da página inicial (Home) de um site estratégico voltado para o posicionamento de autoridade profissional como desenvolvedor frontend sênior. O objetivo central é converter visitantes (recrutadores e clientes) em contatos através de uma apresentação clara, moderna e com forte prova social.

## 2. Objetivos

- Estabelecer autoridade técnica imediata através de uma UI premium e mensagens claras.
- Facilitar o processo de contratação centralizando links e informações vitais.
- Demonstrar competência técnica via portfólio e stack tecnológica.

## 3. Contexto de Integração com Backend

- **Tipo:** Dados Estáticos / JSON Local
- **Status:** Disponível (será definido no Plan)
- **Contratos disponíveis:** Não se aplica (consumo via props ou importação direta de arquivos TS/JSON)
- **Autenticação:** Nenhuma

## 4. Histórias de Usuário

### US-001: Landing Hero (Primeira Impressão)

**Descrição:** Como desenvolvedor, quero uma seção de destaque com meu nome, título profissional e Call to Action principal para que o visitante saiba imediatamente quem eu sou e o que faço.

**Tela/Componente afetado:** `src/app/page.tsx` (Hero Component)

**Critérios de aceitação:**
- [ ] Título de impacto (H1) com nome e especialidade (Frontend Sênior).
- [ ] Subtítulo focado em solução/problema (ex: "Construindo interfaces de alta performance...").
- [ ] Botão de Call to Action (CTA) visível e atrativo (ex: "Entrar em Contato" ou "Ver Projetos").
- [ ] Design responsivo (mobile-first).
- [ ] Verificar no navegador usando a skill dev-browser.

### US-002: Expertise e Stack (Prova Técnica)

**Descrição:** Como visitante, quero ver as tecnologias que o desenvolvedor domina para validar se ele atende aos requisitos das minhas vagas.

**Tela/Componente afetado:** Seção Expertise

**Critérios de aceitação:**
- [ ] Exibição de ícones ou badges das tecnologias (Next.js, React, TypeScript, etc.).
- [ ] Organização clara por categorias (Linguagens, Frameworks, Ferramentas).
- [ ] Uso de Tailwind v4 para estilização moderna e limpa.
- [ ] Verificar no navegador usando a skill dev-browser.

### US-003: Vitrine de Projetos (Prova de Entrega)

**Descrição:** Como recrutador, quero ver exemplos reais de projetos entregues para avaliar a qualidade técnica e estética.

**Tela/Componente afetado:** Seção Projetos Selecionados

**Critérios de aceitação:**
- [ ] Grid de cards com imagem, título, breve descrição e link para o projeto/repo.
- [ ] Hover effects nos cards para indicar interatividade.
- [ ] Estados de fallback para quando não houver imagens.
- [ ] Verificar no navegador usando a skill dev-browser.

### US-004: Sobre Mim e Prova Social

**Descrição:** Como potencial cliente, quero conhecer a trajetória do profissional e ver quem já validou seu trabalho.

**Tela/Componente afetado:** Seção Sobre e Depoimentos

**Critérios de aceitação:**
- [ ] Texto conciso contando a história profissional focada em resultados.
- [ ] Seção para frases de impacto ou depoimentos curtos (se disponíveis).
- [ ] Verificar no navegador usando a skill dev-browser.

## 5. Requisitos Funcionais

- RF-01: O site deve ser Single Page Application (SPA) inicialmente concentrado na Home.
- RF-02: O botão de CTA deve levar para o LinkedIn ou uma seção de contato externa via link.
- RF-03: Implementar Dark Mode nativo ou suporte automático baseado no sistema do usuário.

## 6. Requisitos Não-Funcionais (Frontend)

- RNF-01: Carregamento ultra rápido (SEO e UX).
- RNF-02: Acessibilidade (WCAG) em botões e links.
- RNF-03: Uso rigoroso de Tailwind CSS v4 para o design system.
- RNF-04: Animações sutis (Micro-interactions) para sensação de produto premium.

## 7. Fora do Escopo

- Blog integrado (será uma feature futura).
- Painel administrativo para edição (CMS).
- Sistema de login/autenticação.
- Backend real / Banco de dados.

## 8. Referências Visuais

- Design System: Tailwind v4 (padrão do projeto).
- Estética: Minimalista, Clean, Foco em Typography e Espaçamento (Google Fonts: Inter/Outfit).

## 9. Métricas de Sucesso

- O site deve atingir pontuação > 90 no Lighthouse (Performance e Best Practices).
- O visitante deve conseguir encontrar o botão de contato em menos de 5 segundos.

## 10. Questões em Aberto

- [ ] Vamos incluir uma seção de currículo para baixar (PDF) direto na Home?
- [ ] Quais são os top 3 projetos que terão destaque inicial?
