## Padrões do projeto
- **Arquitetura:** Seguir Atomic Design (atoms, molecules, organisms, templates).
- **Documentação:** PRDs em `/specs/features/[feature]/PRD.md`.
- **Progresso:** Atualizar sempre o `progress.md`.

## 2026-03-07 20:47:00 - PRD Home
- Criado o PRD da Home Page em `specs/features/home/PRD.md`.
- Criado o arquivo de tarefas em `specs/features/home/TASKS.md`, dividido em 5 histórias de usuário.
- Definido o escopo como Landing Page de scroll único, design minimalista e foco em conversão.
- Implementada a **US-001**: Header minimalista com navegação por âncoras e Root Layout em português.
- Implementada a **US-002**: Seção Hero refatorada para design minimalista premium, com novos CTAs e posicionamento profissional.
- Atualizado o átomo **Button** com variantes `primary`, `secondary` e `ghost` seguindo estética Shadcn/UI.
- Adicionado `scroll-behavior: smooth` ao `globals.css`.
- Arquivos alterados:
  - `specs/features/home/PRD.md`
  - `specs/features/home/TASKS.md`
  - `src/components/organisms/header/header.tsx`
  - `src/app/layout.tsx`
  - `src/app/globals.css`
  - `progress.md`
- **Aprendizados para iterações futuras:**
  - O usuário prefere uma experiência simplificada (Single Page) e estética Shadcn/UI.
  - A navegação será minimalista, focada em conteúdo.
  - Valores não reativos devem ser declarados fora da declaração do componente, logo abaixo de quem usa.
  - Remover todos os comentários do código, expressar-se através dos nomes.
---
