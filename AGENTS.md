# GEMINI.md — Agente Geral do Projeto

## Visão geral rápida

Site estratégico de posicionamento de autoridade profissional como desenvolvedor frontend. O objetivo é facilitar o processo de contratação apresentando projetos, habilidades e experiência de forma clara e convincente para recrutadores e potenciais clientes.

## Tecnologias

- Next.js 16.1.6 (app router) 
- React 19.2
- TypeScript 5.9
- Tailwind CSS v4.2

## Fontes confiáveis

### Documentação oficial

- https://tailwindcss.com/
- https://nextjs.org/
- https://www.typescriptlang.org/
- https://react.dev/

### Blogs e artigos

- https://atomicdesign.bradfrost.com/

### Referências internas

- **arquitetura**: `./specs/docs/arquitetura.md`
- **fluxo de desenvolvimento**: `./specs/docs/fluxo-dev.md`
- **estrutura do projeto**: `./specs/docs/estrutura-projeto.md`
- **exemplos de código**: `./specs/docs/exemplos-codigo.md`

## Padrôes do projeto

- **convenções de código**: `./specs/docs/convencoes-codigo.md`
- **nomenclatura de arquivos**: `./specs/docs/nomenclatura-arquivos.md`
- **guardrails**: `./specs/docs/guardrails.md`

### Padrão de Commits

```
feat: US-XXX - Título da história
fix: descrição do que foi corrigido
chore: descrição de tarefa de manutenção
```

Commits devem ser atômicos — um por história implementada.

### Antipadrôes a evitar

- ❌ Não implemente nada sem passar pelo fluxo research → plan → tasks
- ❌ Não use `any` no TypeScript
- ❌ Não faça `fetch` direto em componentes
- ❌ Não refatore código fora do escopo da história atual
- ❌ Não commite com erros de typecheck ou lint
- ❌ Não crie componentes sem tipar as props
- ❌ Não invente contratos de API — consulte o `plan.md`