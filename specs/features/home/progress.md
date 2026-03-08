## Padrões do Projeto

- Componentes são exportados via `src/components/[tier]/index.ts` (ou barrel correspondente) para facilitar imports.
- Não adicione comentários no código, expresse-se através de nomes claros.
- Se uma função, constante, etc, não depende do re-render do componente, devem ser instanciados fora do componente, logo abaixo do componente que o utiliza.
- Não precisa criar varios arquivos para cada componente, se o componente é usado somente no mesmo arquivo, mantenha-os no mesmo arquivo (só separe se o arquivo tive proximo de 500 linhas).

---

## 2026-03-08 17:15 - US-001

**O que foi implementado:**
- Validação das interfaces TypeScript para o conteúdo da home.
- Arquivos: `src/types/content.ts`

**Aprendizados para iterações futuras:**
- As interfaces já estavam implementadas e em conformidade com o `plan.md`.
- O projeto usa uma estrutura centralizada de tipos em `src/types`.

---

## 2026-03-08 17:31 - US-002

**O que foi implementado:**
- Criação do `content-service.ts` para abstrair a leitura do `content.json`.
- Arquivos: `src/services/content-service.ts`

**Aprendizados para iterações futuras:**
- O projeto possui `resolveJsonModule: true` no `tsconfig.json`, permitindo importação direta de arquivos `.json`.
- O alias `@/` está configurado corretamente para `src/`.

---

## 2026-03-08 17:34 - US-003

**O que foi implementado:**
- Criação do hook `useContent` para consumir dados do serviço.
- Arquivos: `src/hooks/use-content.ts`

**Aprendizados para iterações futuras:**
- Hooks que consomem dados estáticos devem usar `useMemo` se o custo de processamento/leitura for relevante.
- Adicionado `'use client'` pois hooks que usam `useMemo` ou hooks do React são hooks de client components.

---

## 2026-03-08 17:40 - US-004

**O que foi implementado:**
- Criação dos átomos `Badge`, `Button` e `Heading`.
- Arquivos: `src/components/atoms/badge.tsx`, `src/components/atoms/button.tsx`, `src/components/atoms/heading.tsx`

**Aprendizados para iterações futuras:**
- Para componentes de cabeçalho dinâmicos (`h1` a `h6`), use o tipo `ElementType` de `react` para o `Tag` para evitar erros de tipagem do JSX.
- O Tailwind v4 simplifica a gestão de cores e temas, mas é importante manter a consistência com as variáveis CSS definidas em `globals.css`.

---

## 2026-03-08 17:45 - US-005

**O que foi implementado:**
- Criação da molécula `ProjectCard`.
- Arquivos: `src/components/molecules/project-card.tsx`

**Aprendizados para iterações futuras:**
- Use `next/image` para otimização de imagens, configurando o domínio da Unsplash ou outros se for usar placeholders externos.
- `line-clamp-2` do Tailwind é excelente para manter a consistência de altura em grids de cards.

---
