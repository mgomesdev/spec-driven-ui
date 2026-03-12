# AGENTS.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

## Carregamento de Arquivos Externos

CRÍTICO: Quando encontrar uma referência de arquivo (ex: @specs/docs/arquitetura.md), use sua ferramenta de leitura para carregá-lo sob demanda. Eles são relevantes para a TAREFA ESPECÍFICA em questão.

Instruções:

- NÃO carregue todas as referências preventivamente — use lazy loading baseado na necessidade real
- Quando carregado, trate o conteúdo como instruções obrigatórias que sobrepõem os padrões
- Siga referências recursivamente quando necessário

## Tecnologias

- Next.js 16.1.6 (app router)
- React 19.2
- TypeScript 5.9
- Tailwind CSS v4.2

## Diretrizes de Desenvolvimento

Para arquitetura geral do projeto: @specs/docs/arquitetura.md
Para estrutura de pastas e organização: @specs/docs/estrutura-projeto.md
Para convenções e estilo de código: @specs/docs/convencoes-codigo.md
Para regras e restrições do projeto: @specs/docs/guardrails.md
Para padrões de commits e branches: @specs/docs/padroes-git.md
Para antipadrões a evitar: @specs/docs/antipadroes.md
Para exemplos práticos de código: @specs/docs/exemplos-codigo.md

## Diretrizes Gerais

Leia o seguinte arquivo imediatamente pois é relevante para todos os workflows: @specs/docs/guardrails.md

## Fontes Confiáveis

### Documentação Oficial

- https://tailwindcss.com/
- https://nextjs.org/
- https://www.typescriptlang.org/
- https://react.dev/

### Blogs e Artigos

- https://atomicdesign.bradfrost.com/