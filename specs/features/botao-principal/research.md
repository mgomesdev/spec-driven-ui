# Research: Botão Principal

## Visão Geral

Criar um componente Button reutilizável para o sistema de design, seguindo as convenções do projeto e padrões Tailwind CSS.

## Objetivos

- Criar componente Button com variantes visuais
- Suporte a estados: default, hover, disabled
- Tipagem correta com TypeScript
- Testes E2E com Playwright

## Histórias de Usuário

### US-001: Criar componente Button básico

**Como** desenvolvedor,
**Quero** um componente Button reutilizável,
**Para** que possa usar em formulários e ações principais.

**Critérios de Aceitação:**
- Componente renderiza um botão HTML
- Suporta texto como children
- Aceita props de styling via className
- Funciona com eventos onClick

### US-002: Variantes do Button

**Como** desenvolvedor,
**Quero** variantes visuais do Button,
**Para** que o design seja consistente.

**Critérios de Aceitação:**
- Variante "primary" com cor de fundo accent
- Variante "secondary" com borda e texto accent
- Variante "ghost" transparente
- Hover state visível em todas variantes

### US-003: Estados do Button

**Como** usuário,
**Quero** ver estados visuais do Button,
**Para** saber quando está interagindo.

**Critérios de Aceitação:**
- Estado disabled com opacity 50%
- Cursor not-allowed quando disabled
- Transição suave entre estados

## Requisitos Funcionais

| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF-01 | Renderização | Componente renderiza elemento button |
| RF-02 | Variantes | Suporta primary, secondary, ghost |
| RF-03 | Estados | Suporta default, hover, disabled |
| RF-04 | Tipagem | Props tipadas com TypeScript |

## Requisitos Não-Funcionais

- Usar apenas Tailwind CSS (sem inline styles)
- Arrow function (não React.FC)
- Nomenclatura: kebab-case para arquivo
- Mínimo de código possível

## Contexto de Integração

- Componente será usado em páginas Next.js
- Integração com Next.js 16 e React 19
- Sem dependências externas além de React
