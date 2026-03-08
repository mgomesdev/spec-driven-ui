# Home Page

## 1. Visão Geral

Desenvolvimento da página inicial do site estratégico de posicionamento de autoridade profissional. A página deve servir como o cartão de visitas principal, apresentando de forma clara a competência técnica (desenvolvedor frontend sênior), projetos de destaque e prova social para facilitar o processo de contratação.

## 2. Objetivos

- Estabelecer autoridade técnica imediata como dev frontend sênior.
- Apresentar um portfólio de projetos de forma visualmente atraente e organizada.
- Listar habilidades técnicas de forma clara e hierarquizada.
- Facilitar a percepção de valor por meio de uma interface premium e minimalista.

## 3. Contexto de Integração com Backend

- **Tipo:** Dados Estáticos / JSON Local
- **Status:** A ser definido no plan (será implementado diretamente no frontend ou via arquivo local).
- **Contratos disponíveis:** N/A (Consumo de dados locais).
- **Autenticação:** Sem autenticação necessária por enquanto.

## 4. Histórias de Usuário

### US-001: Header e Hero (Autoridade)

**Descrição:** Como visitante, quero ver um cabeçalho limpo e uma seção hero impactante para entender imediatamente quem é o profissional e qual sua especialidade.

**Tela/Componente afetado:** `src/components/organisms/hero.tsx`, `src/components/organisms/header.tsx`

**Critérios de aceitação:**
- [ ] Header contém navegação minimalista (Home, Projetos, Sobre, Skills).
- [ ] Seção Hero apresenta título principal (H1) com cargo e proposta de valor.
- [ ] Design minimalista seguindo a identidade visual premium.
- [ ] Typecheck aprovado.
- [ ] **Verificar no navegador** usando a skill dev-browser.

### US-002: Grade de Projetos

**Descrição:** Como recrutador, quero ver uma lista de projetos relevantes com imagens e descrições curtas para validar a competência técnica.

**Tela/Componente afetado:** `src/components/organisms/projects-grid.tsx`

**Critérios de aceitação:**
- [ ] Exibição de cards de projeto em grid.
- [ ] Cada card contém: imagem do projeto, título, breve descrição e tecnologias usadas.
- [ ] Hover effects sutis para interatividade.
- [ ] Typecheck aprovado.
- [ ] **Verificar no navegador** usando a skill dev-browser.

### US-003: Seção de Skills

**Descrição:** Como gestor técnico, quero visualizar rapidamente as tecnologias dominadas pelo desenvolvedor.

**Tela/Componente afetado:** `src/components/organisms/skills-list.tsx`

**Critérios de aceitação:**
- [ ] Listagem de habilidades técnicas organizada por categorias (ex: Frontend, Tools, Soft Skills).
- [ ] Uso de ícones ou badges minimalistas.
- [ ] Typecheck aprovado.
- [ ] **Verificar no navegador** usando a skill dev-browser.

### US-004: Prova Social / Depoimentos

**Descrição:** Como potencial cliente, quero ver depoimentos ou menções de prova social para aumentar a confiança no profissional.

**Tela/Componente afetado:** `src/components/organisms/testimonials.tsx`

**Critérios de aceitação:**
- [ ] Seção com depoimentos de clientes ou colegas.
- [ ] Layout limpo e leitura fácil.
- [ ] Typecheck aprovado.
- [ ] **Verificar no navegador** usando a skill dev-browser.

## 5. Requisitos Funcionais

- RF-01: A interface deve ser totalmente responsiva (mobile-first).
- RF-02: Implementar animações sutis de entrada (fade-in, slide-up) para reforçar o aspecto premium.
- RF-03: Renderização rápida e otimizada de imagens.

## 6. Requisitos Não-Funcionais (Frontend)

- RNF-01: Carregamento instantâneo (dados estáticos).
- RNF-02: Acessibilidade básica (contrastes de cor, tags alt em imagens).
- RNF-03: SEO básico (meta tags, títulos semânticos).

## 7. Fora do Escopo

- Seção de contato funcional (formulário/integração).
- Blog ou área de artigos.
- Dashboard administrativo para gestão de conteúdo.
- Integração com APIs externas em tempo real.

## 8. Referências Visuais

- Estilo: Minimalista Tech / Dark Mode (sugerido).
- Design System: Vanilla CSS / Tailwind CSS v4.2 conforme `AGENTS.md`.
- Componentes: Atomic Design (em `src/components/`).

## 9. Métricas de Sucesso

- Performance Score (Lighthouse) acima de 90.
- Todos os critérios de aceitação validados no navegador.

## 10. Questões em Aberto

- [ ] Definir se usaremos um arquivo `content.json` para facilitar a edição futura dos dados estáticos.
