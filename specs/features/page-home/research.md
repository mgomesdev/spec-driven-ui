# Page Home — Site de Posicionamento Profissional

## 1. Visão Geral

Desenvolvimento da página inicial (`/`) baseado no design criado no Pencil. A página inclui um Header com botão, uma seção Hero completa com avatar, identificador, títulos, parágrafo e CTAs, além de um Footer com copyright. O objetivo é apresentar o profissional de forma impactante para recrutadores e clientes.

---

## 2. Objetivos

- Exibir o nome e cargo do profissional de forma destaque
- Comunicar o diferencial do profissional (bio/subtítulo)
- Oferecer CTAs claros para Download CV e Entre em Contato
- Criar uma experiência visual premium com gradientes e UI escura

---

## 3. Contexto de Integração com Backend

- **Tipo:** Nenhum — todos os dados são estáticos
- **Status:** Dados hardcoded diretamente nos componentes
- **Contratos disponíveis:** N/A — sem API ou CMS
- **Autenticação:** Nenhuma

---

## 4. Histórias de Usuário

### US-001: Exibir Header com botão de ação

**Descrição:** Como visitante, eu quero ver um header com um botão de ação para que eu possa interagir ou navegar para outra seção.

**Tela/Componente afetado:** `src/components/page-home/header.tsx`

**Critérios de aceitação:**
- [ ] Renderiza um header com fundo escuro
- [ ] Exibe um botão com ícone (sun icon)
- [ ] Layout responsivo: ocupa largura total, altura fixa
- [ ] Typecheck aprovado
- [ ] **Verificar no navegador** usando a skill dev-browser

---

### US-002: Exibir seção Hero com apresentação completa

**Descrição:** Como visitante, eu quero ver a seção hero com avatar, nome, cargo, subtítulo, parágrafo e botões de CTA para entender quem é o profissional e como entrar em contato.

**Tela/Componente afetado:** `src/components/page-home/hero-section.tsx`

**Critérios de aceitação:**
- [ ] Exibe avatar circular com borda (ou placeholder com inicial se não houver imagem)
- [ ] Exibe identificador `<MatheusGomesDev />` acima do título
- [ ] Exibe título principal "Programador Frontend" com gradiente
- [ ] Exibe subtítulo "apaixonado por criação de interfaces inovadoras"
- [ ] Exibe parágrafo descritivo sobre o profissional
- [ ] Exibe botão "Vamos criar algo incrível juntos?" (link)
- [ ] Exibe dois CTAs: "Download CV" e "Entre em Contato" (botão com gradiente)
- [ ] Layout responsivo: centralizado em mobile, max-width 700px em desktop
- [ ] Typecheck aprovado
- [ ] **Verificar no navegador** usando a skill dev-browser

---

### US-003: Exibir Footer com copyright e ícone

**Descrição:** Como visitante, eu quero ver o rodapé da página com informações de copyright para completar a experiência visual.

**Tela/Componente afetado:** `src/components/page-home/footer.tsx`

**Critérios de aceitação:**
- [ ] Exibe texto de copyright "© 2026 matheusgomesdev."
- [ ] Exibe um ícone (sun icon) ao lado do copyright
- [ ] Layout: itens nas extremidades (space-between)
- [ ] Fundo escuro igual ao header
- [ ] Typecheck aprovado
- [ ] **Verificar no navegador** usando a skill dev-browser

---

### US-004: Criar página home integrando Header, Hero e Footer

**Descrição:** Como visitante, eu quero acessar a página `/` e ver todos os componentes integrados para ter uma experiência coesa.

**Tela/Componente afetado:** `src/app/page.tsx`

**Critérios de aceitação:**
- [ ] Página acessível em `/`
- [ ] Renderiza Header na parte superior
- [ ] Renderiza Hero no centro
- [ ] Renderiza Footer na parte inferior
- [ ] Fundo escuro em toda a página
- [ ] Meta tags title e description para SEO
- [ ] Layout responsivo
- [ ] Typecheck aprovado
- [ ] **Verificar no navegador** usando a skill dev-browser: navegar até `/` e confirmar que todos os componentes renderizam corretamente

---

## 5. Requisitos Funcionais

- RF-01: A página `/` deve carregar sem JavaScript desabilitado (SSR — Next.js App Router por padrão)
- RF-02: Os CTAs "Download CV" e "Entre em Contato" devem navegar para as URLs apropriadas
- RF-03: Links externos devem abrir em nova aba com `target="_blank" rel="noopener noreferrer"`
- RF-04: A página deve ter apenas um `<h1>` e `<h2>` para as demais seções

---

## 6. Requisitos Não-Funcionais (Frontend)

- RNF-01: Todos os componentes devem ser responsivos (mobile-first com Tailwind CSS v4)
- RNF-02: Sem dependência de APIs externas — a página funciona completamente offline
- RNF-03: Nenhum componente usa `any` — todos os tipos devem ser explícitos
- RNF-04: A estética deve ser premium: uso de gradientes, UI escura, cores do design Pencil

---

## 7. Fora do Escopo

- Não inclui ProjectsSection
- Não inclui integração com CMS ou API externa
- Não inclui autenticação
- Não inclui dark mode alternável

---

## 8. Referências Visuais

- **Design Source:** Pencil MCP - `page_home` em `pencil-new.pen`
- **Cores principais:**
  - Fundo: `#101828ff` (dark blue)
  - Primary: `#7f56d9ff` (purple)
  - Secondary: `#9e77edff` (light purple)
  - Texto: `#ffffffff` (white)
- **Componentes do design:**
  - Header Organism: botão com sun icon
  - Hero Organism: avatar, heading, subtítulo, parágrafo, botões
  - Footer Organism: copyright e ícone

---

## 9. Métricas de Sucesso

- Visitante identifica nome, cargo e diferencial em menos de 5 segundos
- Página carrega sem erros de console
- Typecheck aprovado

---

## 10. Estrutura de Arquivos Planejada

```
src/
├── app/
│   └── page.tsx                    # modificado - integra componentes
├── components/
│   └── page-home/
│       ├── header.tsx              # criado - header com botão
│       ├── hero-section.tsx        # criado - seção hero completa
│       └── footer.tsx              # criado - footer com copyright
```

---

## 11. Questões em Aberto

- [ ] Qual URL para o botão "Download CV"? (placeholder por enquanto)
- [ ] Qual URL para o botão "Entre em Contato"? (mailto ou LinkedIn)
- [ ] Há imagem de avatar disponível? (se não, usar placeholder com inicial)
