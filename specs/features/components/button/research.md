# Button (Atom)

## 1. Visão Geral

Componente de botão reutilizável para uso em toda a aplicação. Botão atômico que serve como base para interações do usuário com a interface.

## 2. Objetivos

- Criar componente Button flexível e reutilizável
- Suportar diferentes variantes visuais (primary, secondary, outline, ghost, danger)
- Suportar diferentes tamanhos (sm, md, lg)
- Suportar estados (default, hover, active, disabled, loading)
- Seguir padrões de acessibilidade (WCAG 2.1)

## 3. Contexto de Integração com Backend

- **Tipo:** Componente UI (sem integração backend)
- **Status:** N/A - componente puro
- **Autenticação:** N/A

## 4. Histórias de Usuário

### US-001: Criar componente Button básico

**Descrição:** Como desenvolvedor, eu quero um componente Button básico com props para variant, size e estados para que eu possa reutilizá-lo em toda a aplicação.

**Componente afetado:** Button (atom)

**Critérios de aceitação:**
- [ ] Componente exporta props: variant, size, disabled, loading, children
- [ ] Suporta variantes: primary, secondary, outline, ghost, danger
- [ ] Suporta tamanhos: sm (32px), md (40px), lg (48px)
- [ ] Estado disabled aplica opacity-50 e cursor-not-allowed
- [ ] Estado loading exibe spinner e desabilita clique
- [ ] Typecheck aprovado

> Toda história com alteração de UI deve incluir **sub-agent de testes**, **sub-agent de analise estatica** como critério.

## 5. Dependências (Atomic Design)

> Seção obrigatória para pages, templates e organisms

N/A - Este é um componente átomo (folha), não depende de outros componentes.

## 6. Requisitos Funcionais

- RF-01: O componente deve renderizar children como conteúdo do botão
- RF-02: variant="primary" deve usar cor de fundo accent (#7f56d9)
- RF-03: variant="danger" deve usar cor de fundo vermelho para ações destrutivas
- RF-04: variant="outline" deve ter borda e fundo transparente
- RF-05: variant="ghost" deve ter fundo transparente
- RF-06: disabled=true deve aplicar estilos de estado desabilitado
- RF-07: loading=true deve exibir spinner e prevenir clique

## 7. Requisitos Não-Funcionais (Frontend)

- RNF-01: Usar apenas Tailwind CSS para estilização
- RNF-02: Seguirem convenções de nomenclatura do projeto
- RNF-03: Props tipadas com TypeScript
- RNF-04: Componente acessível (role="button", aria-disabled)

## 8. Fora do Escopo

- Dropdown button (molecule)
- Button group (molecule)
- Icon button (criar após este componente)

## 9. Referências Visuais

- Sistema de design atual: Tailwind CSS v4.2
- Cores: bg-primary (#101828), accent (#7f56d9)
- Fonte: Inter

## 10. Métricas de Sucesso

- Componente reutilizável em pelo menos 3 locais diferentes
- Zero warnings de TypeScript
- Testes E2E passando

## 11. Questões em Aberto

- [ ] Precisamos de ícone dentro do botão? (fora do escopo inicial)
