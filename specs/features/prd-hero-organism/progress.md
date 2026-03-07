## Padrões do projeto
- Use Atomic Design: `src/components/atoms`, `src/components/molecules`, `src/components/organisms`
- Use Tailwind CSS para estilização.
- Use TypeScript para todos os componentes.
- Valores que não dependem de re-renders (não reativos), devem ser colocados fora do componente, logo abaixo de onde é utilizado.
- Não adicionar comentários no código, expresse através de nomes claros.

## [2026-03-07T18:18:00] - US-001
- Implementada a estrutura base do Hero com sucesso.
- Criado componente `Button` em `src/components/atoms/Button/Button.tsx` seguindo padrões.
- Criado componente `Hero` em `src/components/organisms/Hero/Hero.tsx` seguindo padrões.
- Atualizada `src/app/page.tsx` para utilizar o novo componente.
- **Aprendizados para iterações futuras:**
  - Manter estilos fixos fora do corpo do componente para melhor performance e legibilidade, conforme os novos padrões.
---

## [2026-03-07T18:25:00] - US-002
- Verificada a responsividade do componente Hero.
- Validado em viewport mobile (375px) via browser subagent.
- Título ajusta o tamanho e elementos empilham mantendo o alinhamento centralizado.
- **Aprendizados para iterações futuras:**
  - Utilitários do Tailwind como `md:text-7xl` são suficientes para a maioria dos ajustes de escala de texto responsivo.
---

## [2026-03-07T18:40:00] - Finalização do Hero
- Arquivos e diretórios renomeados para kebab-case (`button.tsx`, `hero.tsx`) conforme padrões do projeto.
- Imports atualizados para refletir a nova estrutura de nomes.
- Aprendizados destilados em `AGENTS.md`.
- **Aprendizados para iterações futuras:**
  - Seguir rigorosamente o kebab-case para arquivos e pastas desde o início para evitar conflitos de cache de casing no sistema de arquivos e lint.
---
