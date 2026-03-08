## Padrões do Projeto

- Componentes base (`Button`, `Section`) e utilitários são essenciais para manter o Tailwind v4 e designs premium consistentes.
- Fontes de dados estáticos devem usar os tipos exportados de `src/generated/types.ts` explicitamente.

---

## 2026-03-08 20:02 - US-001 a US-010

**O que foi implementado:**
- Tipos de domínio `Project`, `Skill`, `SocialProof` em `/src/generated/types.ts`.
- Mocks estáticos das sessões na `/src/data/home-data.ts`.
- Componentes Base UI: `Button` e `Section` com visual premium (Glassmorphism, Tailwind v4).
- Componentes da Home: `Hero`, `Expertise`, `Projects`, `ProjectCard` e `About`.
- Integração e Layout principal na página da Home em `/src/app/page.tsx` usando Next.js.

**Aprendizados para iterações futuras:**
- Manter o uso de gradientes e efeitos backdrop-blur para UI Premium.
- Next Image `<Image />` lida com o responsivo dos cards, prever layout fill e fallbacks de imagem quando vazia.

---
