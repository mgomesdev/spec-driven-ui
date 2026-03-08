## Padrões do Projeto

- Siga as regras de codificação do projeto.
- Não use forwardRef na criação dos componentes.
- Constantes internas do componente que não utilizam as props, via prop-drilling, ou não dependem de re-renderização, devem ser declaradas logo após o componente que as usa.
- evite selecionar props que não são utilizadas no componente, prefira a desestruturação de props que são utilizadas.
- Não use comentários.
---

## [2026-03-08 19:00] - US-001

**O que foi implementado:**
- Criados os types Project, Skill, e SocialProof para a feature home.
- Arquivos: `src/generated/types.ts`

**Aprendizados para iterações futuras:**
- Tipos unificados no arquivo de generated types para reaproveitamento nos componentes visuais.

---

## [2026-03-08 19:02] - US-002

**O que foi implementado:**
- Criados os mocks estáticos com listas de `Project`, `Skill`, e `SocialProof`.
- Arquivos: `src/data/home-data.ts`

**Aprendizados para iterações futuras:**
- Reuso dos tipos exportados de `types.ts` funciona bem para validação em dev dos mocks visuais.

---

## [2026-03-08 19:15] - US-003

**O que foi implementado:**
- Criado componente de Botão UI base (`Button`) com variantes `primary` e `outline`.
- Suporte a links do Next.js via prop `href`.
- Arquivos: `src/components/ui/button.tsx`

**Aprendizados para iterações futuras:**
- Extrair objetos de estilo (`baseStyles`, `variantStyles`) para o escopo global do módulo reduz o ruído de tipagem e re-renderização, de acordo com a regra de manter constantes com dados estáticos fora do componente.

---

## [2026-03-08 19:22] - US-004

**O que foi implementado:**
- Criado componente de layout `Section` com constrains de visibilidade (`max-w-7xl` e padding y responsivo).
- Arquivos: `src/components/ui/section.tsx`

**Aprendizados para iterações futuras:**
- O encapsulamento de `max-w-7xl` dentro de uma section 100% de largura permite ter backgrounds `bleeding` edge-to-edge enquanto o conteúdo central obedece às guias, prática recomendada em componentes de layout de Next.

---

## [2026-03-08 19:28] - US-005

**O que foi implementado:**
- Criado componente `ProjectCard` (`src/components/home/project-card.tsx`).
- Uso do `next/image` com suporte a placeholder (fallback com ícone).
- Tratamento de tags iterativas.
- Micro-interações de hover premium (`-translate-y-1`, sombra, transição de imagem colorida).
- Camada de link absoluto (`inset-0`) cobrindo todo o card de forma acessível para maximizar área de clique.
- Arquivos: `src/components/home/project-card.tsx`

**Aprendizados para iterações futuras:**
- O padrão de criar um link de cobertura (`absolute inset-0 z-10`) com texto `sr-only` é mais acessível e elimina a necessidade de envolver todo o card em uma tag de link, permitindo elementos semânticos mais corretos (`<article>`).

---
