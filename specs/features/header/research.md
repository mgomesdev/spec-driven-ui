# Header

## 1. Visão Geral

Header de navegação principal do site com logo, menu de navegação e menu hamburger para mobile. Responsivo, 100% de largura e 80px de altura fixa no desktop.

## 2. Objetivos

- Header fixo no topo da página com altura de 80px
- Logo clicável que redireciona para a página inicial
- Menu de navegação com 4 opções: Início, Sobre, Descrição, Contato
- Menu hamburger em mobile (< 768px) com overlay/slide menu
- Transição suave entre estados mobile/desktop

## 3. Contexto de Integração com Backend

- **Tipo:** Mock (dados estáticos)
- **Status:** N/A - sem integração
- **Contratos disponíveis:** N/A
- **Autenticação:** N/A

## 4. Histórias de Usuário

### US-001: Header Desktop

**Descrição:** Como visitante, eu quero ver um header com logo e menu de navegação para que eu possa navegar entre as páginas do site.

**Tela/Componente afetado:** Header (organism)

**Critérios de aceitação:**
- [ ] Header ocupa 100% da largura da tela
- [ ] Header tem altura fixa de 80px
- [ ] Logo aparece à esquerda do header
- [ ] Menu com 4 itens (Início, Sobre, Descrição, Contato) aparece à direita
- [ ] Itens do menu são clicáveis e exibem pointer cursor
- [ ] Estado hover nos itens do menu exibe feedback visual (underline ou cor)
- [ ] sub-agent: tdd-playwright para validar renderização desktop
- [ ] sub-agent: verify-patterns para validar convenções de código

### US-002: Header Mobile com Menu Hamburger

**Descrição:** Como visitante mobile, eu quero um menu hamburger para que eu possa acessar a navegação em telas menores.

**Tela/Componente afetado:** Header (organism)

**Critérios de aceitação:**
- [ ] Em telas < 768px, menu horizontal é substituído por botão hamburger
- [ ] Botão hamburger exibe ícone de 3 barras horizontais
- [ ] Ao clicar no hamburger, menu overlay aparece com animação
- [ ] Menu overlay lista as 4 opções (Início, Sobre, Descrição, Contato)
- [ ] Botão X fecha o menu overlay
- [ ] Clicar fora do menu fecha o overlay
- [ ] Menu overlay cobre toda a tela com fundo semi-transparente
- [ ] sub-agent: tdd-playwright para validar comportamento mobile
- [ ] sub-agent: verify-patterns para validar convenções de código

### US-003: Logo Clicável

**Descrição:** Como visitante, eu quero clicar no logo para voltar à página inicial.

**Tela/Componente afetado:** Header (organism)

**Critérios de aceitação:**
- [ ] Logo é clicável
- [ ] Ao clicar, redireciona para "/"
- [ ] Logo é visível tanto em desktop quanto mobile

## 5. Dependências (Atomic Design)

> Este é um organism. Verificando componentes necessários:

| Componente | Tipo | Status | Caminho |
|------------|------|--------|---------|
| Logo | atom | ❌ Não implementado | Será criado inline no Header |
| MenuItem | atom | ❌ Não implementado | Será criado inline no Header |
| HamburgerButton | atom | ❌ Não implementado | Será criado inline no Header |
| MobileMenu | molecule | ❌ Não implementado | Será criado inline no Header |

**Nota:** Como não há componentes atômicos implementados, o Header será construído com elementos HTML básicos estilizados com Tailwind. Após implementação, componentes podem ser extraídos para reutilização.

**Status: PROSSEGUIR** - Header será implementado com elementos inline, sem dependências bloqueantes.

## 6. Requisitos Funcionais

- RF-01: Header deve permanecer fixo no topo durante scroll
- RF-02: Menu desktop exibe 4 itens em linha horizontal
- RF-03: Menu mobile exibe overlay fullscreen com animação slide-in
- RF-04: Botão hamburger alterna estado do menu mobile
- RF-05: Links do menu devem ter href válido para navegação

## 7. Requisitos Não-Funcionais (Frontend)

- RNF-01: Responsivo com breakpoint em 768px
- RNF-02: Animações suaves para abertura/fechamento do menu mobile (300ms)
- RNF-03: Logo com alt text para acessibilidade
- RNF-04: Menu mobile com focus trap para acessibilidade
- RNF-05: Contraste de cores adequado para WCAG AA

## 8. Fora do Escopo

- Não inclui dropdown/submenu
- Não inclui busca no header
- Não inclui botão de login/usuário
- Não inclui sticky com mudança de estilo ao scrollar

## 9. Referências Visuais

- Link para Figma/protótipo: não disponível
- Componentes existentes que podem ser reutilizados: Nenhum

## 10. Métricas de Sucesso

- Usuário consegue acessar qualquer página em 1 clique a partir do menu
- Menu mobile abre/fecha em menos de 300ms
- Header é consistente em todas as páginas do site

## 11. Questões em Aberto

- [x] Logo: Texto placeholder "Logo"
- [x] Rotas dos links: href="#" (âncoras)
- [x] Indicador de página ativa: Não necessário
