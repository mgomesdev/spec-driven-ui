# Plan: Home

> Gerado a partir de: `specs/features/home/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

A página inicial (`/`) será construída inteiramente no frontend com Next.js App Router (SSR estático sem API). Serão criados dois componentes de seção — `HeroSection` e `ProjectsSection` — e um componente atômico `ProjectCard`, todos alimentados por dados declarados em arquivos de constantes em `src/data/`. O arquivo `src/app/page.tsx` é modificado para compor as seções. Nenhuma chamada de API ou hook de dados externo é necessária: todos os dados fluem de constantes importadas pelas props dos componentes via `page.tsx`.

---

## 2. Estrutura de Arquivos

Todos os arquivos que serão **criados ou modificados**:

```
src/
├── app/
│   └── page.tsx                                      # modificado — compõe HeroSection + ProjectsSection
├── components/
│   ├── home/
│   │   ├── hero-section.tsx                          # criado — seção hero com nome, cargo, bio e CTAs
│   │   ├── projects-section.tsx                      # criado — grid de projetos com heading h2
│   │   └── project-card.tsx                         # criado — card individual de projeto
├── data/
│   ├── profile.ts                                    # criado — constante PROFILE com dados do profissional
│   └── projects.ts                                   # criado — constante PROJECTS com array tipado de projetos
└── types/
    └── home.ts                                       # criado — interfaces Profile e Project
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces e Types

Arquivo: `src/types/home.ts`

```typescript
// Dados do profissional exibidos no Hero
export interface Profile {
  name: string;
  role: string;
  bio: string;
  ctaEmail?: string;
  ctaLinkedIn?: string;
}

// Projeto individual exibido no grid
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  imageUrl?: string;
}
```

---

## 4. Contratos de API Consumidos

**Não aplicável.** Todos os dados são estáticos — declarados como constantes TypeScript em `src/data/`. Nenhum endpoint é consumido nesta entrega.

---

## 5. Componentes: Props e Responsabilidades

### HeroSection

```typescript
// Arquivo: src/components/home/hero-section.tsx
import type { Profile } from '@/types/home';

interface HeroSectionProps {
  profile: Profile;
}

// Responsabilidade: renderiza o bloco hero com h1 (nome), cargo, bio e dois CTAs
// Estado local: nenhum
// Não faz: não importa dados diretamente — recebe profile via props de page.tsx
// Estética: gradiente no heading, backdrop-blur no container, layout responsivo (mobile-first)
// Acessibilidade: h1 único na página, CTAs com aria-label descritivo
```

### ProjectsSection

```typescript
// Arquivo: src/components/home/projects-section.tsx
import type { Project } from '@/types/home';

interface ProjectsSectionProps {
  projects: Project[];
}

// Responsabilidade: renderiza o heading h2 + grid de ProjectCards
// Estado local: nenhum
// Não faz: não importa dados diretamente — recebe projects via props de page.tsx
// Estética: grid responsivo (1 col mobile / 2-3 col desktop), seção com id="projects" para scroll
```

### ProjectCard

```typescript
// Arquivo: src/components/home/project-card.tsx
import type { Project } from '@/types/home';

interface ProjectCardProps {
  project: Project;
}

// Responsabilidade: renderiza card de um projeto — imagem (com fallback), título, descrição,
//                   tags de stack e link externo abrindo em nova aba
// Estado local: isImageError: boolean — controla fallback da imagem
// Não faz: não decide quais projetos exibir — recebe project via props
// Estética: glassmorphism (backdrop-blur, bg translúcido), hover com micro-animação de elevação
// Acessibilidade: link de cobertura com texto sr-only em vez de <a> envolvendo todo o card
// Imagem: usa <Image /> do Next.js com layout fill + objectFit cover e fallback por degradê
```

---

## 6. Hooks Customizados

**Não aplicável.** Como os dados são 100% estáticos, não há hooks de dados. A lógica de scroll suave para `#projects` é tratada via CSS (`scroll-behavior: smooth` em `globals.css`) e âncora HTML nativa.

---

## 7. Diagrama de Dependências

Ordem de implementação. Artefatos anteriores devem existir antes dos posteriores.

```
[src/types/home.ts]
        │
        ├──► [src/data/profile.ts]
        │
        └──► [src/data/projects.ts]
                    │
                    ▼
      [src/components/home/project-card.tsx]
                    │
                    ▼
      [src/components/home/projects-section.tsx]

[src/types/home.ts]
        │
        └──► [src/components/home/hero-section.tsx]

[hero-section.tsx] ──► [src/app/page.tsx (modificado)]
[projects-section.tsx] ──► [src/app/page.tsx (modificado)]
```

Regra: `──►` significa "depende de / deve existir antes".

**Ordem linear de implementação:**
1. `src/types/home.ts`
2. `src/data/profile.ts`
3. `src/data/projects.ts`
4. `src/components/home/project-card.tsx`
5. `src/components/home/projects-section.tsx`
6. `src/components/home/hero-section.tsx`
7. `src/app/page.tsx` (modificação final)

---

## 8. Questões em Aberto

As questões abaixo vêm do `research.md` e não impactam a arquitetura técnica — podem ser preenchidas com placeholders e substituídas pelo profissional posteriormente:

- [ ] Qual o nome completo do profissional a ser exibido no `h1`?
- [ ] Qual o cargo/título preferido? (ex: "Frontend Engineer", "Desenvolvedor Frontend Sênior")
- [ ] Qual a bio curta (1–2 linhas)?
- [ ] Quais projetos serão listados? (nome, descrição, stack, URL) — a constante `PROJECTS` usará dados de exemplo até confirmação
- [ ] Há foto/avatar para uso no Hero (arquivo em `public/images/`) ou a seção será apenas textual?
- [ ] O CTA secundário deve linkar para email direto (`mailto:`) ou para o perfil do LinkedIn?
