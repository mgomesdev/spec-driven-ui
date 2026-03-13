## Padrões do Projeto

<!-- Padrões consolidados serão adicionados aqui durante a execução das histórias -->

---

## [2026-03-12] - US-004

**O que foi implementado:**
- Componente ExperienceSection extraído para arquivo separado
- Arquivo: `src/components/sobre/experience-section.tsx`
- Props: `experience: Experience[]` (tipado via `@/types/sobre`)
- Layout: Timeline vertical com border-left e dots indicadores

**Aprendizados para iterações futuras:**
- Componentes de seção devem ser arquivos separados para melhor organização
- Timeline usa `border-l-2` com `absolute -left-[9px]` para os dots

---

## [2026-03-12] - US-005, US-006, US-007

**O que foi implementado:**
- SkillsSection: `src/components/sobre/skills-section.tsx` - grid de cards com badges
- ContactSection: `src/components/sobre/contact-section.tsx` - links com ícones SVG
- BioSection: `src/components/sobre/bio-section.tsx` - avatar, nome, cargo e biografia
- Refatorado `sobre-page.tsx` para importar componentes separados e passar dados via props

**Aprendizados para iterações futuras:**
- Skills usam badges com `bg-indigo-500/20 text-indigo-300 rounded-full`
- Contact usa ícones SVG inline (Material Design paths)
- Bio avatar usa placeholder com gradiente se não houver imagem
- sobre-page.tsx funciona como orchestrator, passando dados de ABOUT para os componentes

---
