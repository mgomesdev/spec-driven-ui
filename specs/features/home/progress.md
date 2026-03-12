## Padrões do Projeto

- Componentes são exportados diretamente pelo arquivo (sem barrel index.ts para components)
- Tipos são importados de `@/types/home`
- Dados são centralizados em `@/data/`
- Usar `'use client'` em componentes que usam hooks ou estados (ProjectCard)

---

## 2026-03-12 17:30 - US-001 a US-007

**O que foi implementado:**
- Interfaces TypeScript `Profile` e `Project` em `src/types/home.ts`
- Dados do profissional em `src/data/profile.ts`
- Dados dos projetos em `src/data/projects.ts`
- Componente `ProjectCard` com glassmorphism e fallback de imagem
- Componente `ProjectsSection` com grid responsivo
- Componente `HeroSection` com gradiente e CTAs
- Integração em `src/app/page.tsx`

**Aprendizados para iterações futuras:**
- Usar `<Image />` do Next.js com `fill` e `objectFit: cover` para imagens responsivas
- Link de cobertura com `sr-only` para acessibilidade em cards
- Estado local `isImageError` controla fallback de imagem
- Scroll smooth configurado em `globals.css` (não requer JS)

---
