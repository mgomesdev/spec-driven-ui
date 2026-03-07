# Projeto: Site Estratégico

**Branch:** us/home-page

## Descrição

Página Inicial (Home) - Landing page de scroll único e design minimalista focada em autoridade e conversão.

---

## User Stories

### US-001: Implementar o Layout Root e Header Minimalista

**Prioridade:** 1
**Passes:** true
**Descrição:**

> Como usuário, quero um header minimalista com navegação por âncoras para que eu possa me localizar na página única.

#### Critérios de Aceitação

* Criar Header minimalista com Logo (ou Nome) e links: Projetos, Skills, Experiência.
* Implementar o Header no `layout.tsx` ou como componente no `page.tsx`.
* Garantir que os links de âncora (#projetos, #skills, etc.) funcionem com scroll suave.
* Verificação de tipo aprovada
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-002: Implementar Seção Hero com CTA de Conversão

**Prioridade:** 2
**Passes:** true
**Descrição:**

> Como visitante, quero ver uma introdução clara e um botão de ação (CTA) focado em ver o portfólio.

#### Critérios de Aceitação

* Seção Hero ocupando o "above the fold".
* Título principal com Nome e Função profissional.
* Botão CTA "Ver Portfolio" apontando para a seção de projetos.
* Estética clean estilo Shadcn/UI.
* Verificação de tipo aprovada
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-003: Criar Galeria de Projetos Curada

**Prioridade:** 3
**Passes:** false
**Descrição:**

> Como recrutador, quero ver uma lista selecionada de projetos com visibilidade imediata.

#### Critérios de Aceitação

* Criar seção com ID `projetos`.
* Grid responsivo exibindo pelo menos 3 cartões de projetos.
* Cada cartão inclui: Título, Descrição, Tags e Link.
* Efeito de hover sutil nos cartões.
* Verificação de tipo aprovada
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-004: Adicionar Seções de Skills e Experiência

**Prioridade:** 4
**Passes:** false
**Descrição:**

> Como recrutador, quero visualizar as competências técnicas e o histórico profissional de forma limpa.

#### Critérios de Aceitação

* Criar seção de Skills com ID `skills` usando badges ou ícones minimalistas.
* Criar seção de Experiência com ID `experiencia` em formato de lista cronológica.
* Garantir espaçamento consistente entre as seções.
* Verificação de tipo aprovada
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)

---

### US-005: Implementar Footer e Ajustes de Responsividade

**Prioridade:** 5
**Passes:** false
**Descrição:**

> Como usuário, quero um footer simples e uma experiência fluida em dispositivos móveis.

#### Critérios de Aceitação

* Rodapé com links sociais ou contato direto.
* Ajustes finais de margens e fontes para mobile.
* Verificação final de acessibilidade e design system.
* Verificação de tipo aprovada
* Verificar no navegador usando a skill dev-browser

#### Notas

(Sem notas)
