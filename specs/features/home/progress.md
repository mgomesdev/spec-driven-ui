## Padrões do Projeto

- Componentes são exportados via `src/components/atoms/index.ts` (ou barrel correspondente) para facilitar imports.

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
