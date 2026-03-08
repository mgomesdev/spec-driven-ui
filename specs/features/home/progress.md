## Padrões do Projeto

<!-- Padrões consolidados serão adicionados aqui durante a execução das histórias -->

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
- Hooks que consomem dados estáticos devem usar `useMemo` se o custo de processamento/leitura for relevante, embora aqui seja por convenção e futura escalabilidade.
- Adicionado `'use client'` pois hooks que usam `useMemo` ou hooks do React são hooks de client components.

---
