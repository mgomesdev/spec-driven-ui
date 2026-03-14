## Padrões do Projeto

- Componentes da page-home são criados em `src/components/page-home/`
- Tipos específicos da feature são definidos em `src/types/home.ts`
- Dados estáticos são exportados de `src/data/profile.ts`
- Botões com corner radius 8 (rounded-lg), não mais rounded-full

---

## [2026-03-13] - Atualização de design

**O que foi implementado:**
- Botão "Entre em Contato" atualizado para:
  - bg-gray-300 (fill: #d9d9d9ff do Pencil)
  - text-gray-900 (texto escuro para contraste)
  - rounded-lg (corner radius: 8)
  - w-full sm:w-auto (fill container)
- Botão "Download CV" atualizado para:
  - rounded-lg (corner radius: 8) para consistência

**Arquivos modificados:**
- `src/components/page-home/hero-section.tsx`

---

## [2026-03-13] - Feature page-home implementada

**O que foi implementado:**
- Interface `Profile` e `ProfileData` em `src/types/home.ts`
- Dados `PROFILE` e `profileData` em `src/data/profile.ts`
- Componente `Header` em `src/components/page-home/header.tsx`
- Componente `HeroSection` em `src/components/page-home/hero-section.tsx`
- Componente `Footer` em `src/components/page-home/footer.tsx`
- Página `src/app/page.tsx` integrada com todos os componentes

**Aprendizados para iterações futuras:**
- O profile.ts agora exporta dois objetos: PROFILE (mais simples) e profileData (mais completo)

---
