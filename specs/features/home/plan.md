# Plan: Home Page

> Gerado a partir de: `specs/features/home/research.md`
> Foco: Frontend (Next.js + Tailwind v4 + Atomic Design)

## 1. Visão Geral Técnica

Implementação da Home Page seguindo o Atomic Design. O conteúdo será centralizado em um arquivo `src/data/content.json` para facilitar futuras edições. Os componentes serão construídos do zero utilizando Tailwind CSS v4, garantindo um design minimalista e premium. A página será estática, consumindo os dados do JSON via importação direta ou via serviço/hook.

---

## 2. Estrutura de Arquivos

```
src/
├── app/
│   └── page.tsx                          # modificado - monta as seções da home
├── components/
│   ├── atoms/
│   │   ├── badge.tsx                     # criado - componente de tag para tecnologias
│   │   ├── button.tsx                    # criado - botões minimalistas
│   │   └── heading.tsx                   # criado - tipografia consistente
│   ├── molecules/
│   │   ├── project-card.tsx              # criado - card individual de projeto
│   │   └── skill-item.tsx                # criado - item individual de skill com ícone
│   └── organisms/
│       ├── header.tsx                    # criado - navegação principal
│       ├── hero.tsx                      # criado - seção de destaque (autoridade)
│       ├── projects-grid.tsx             # criado - grade de projetos
│       ├── skills-list.tsx               # criado - listagem de tecnologias
│       └── testimonials.tsx              # criado - seção de prova social
├── data/
│   └── content.json                      # criado - fonte de verdade para os textos
├── hooks/
│   └── use-content.ts                    # criado - hook para acessar dados do JSON
├── services/
│   └── content-service.ts                # criado - abstração para leitura do JSON
└── types/
    └── content.ts                        # criado - interfaces para o JSON de conteúdo
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interfaces e Types

### Content Schema

```typescript
// Local: src/types/content.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Tools' | 'Soft Skills';
  icon?: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    ctaLabel?: string;
  };
  projects: Project[];
  skills: Skill[];
  testimonials: Testimonial[];
}
```

---

## 4. Contratos de Dados (Internos)

Como usaremos dados estáticos, o "contrato" é o formato do `content.json`.

### content.json structure

```json
{
  "hero": {
    "title": "Desenvolvedor Frontend Sênior",
    "description": "Portfólio estratégico focado em autoridade e entrega de valor.",
    "ctaLabel": "Ver Projetos"
  },
  "projects": [
    {
      "id": "1",
      "title": "Exemplo",
      "description": "Descrição do projeto",
      "imageUrl": "/images/project1.png",
      "technologies": ["React", "Next.js", "Tailwind"]
    }
  ],
  "skills": [
    { "name": "TypeScript", "category": "Frontend" }
  ],
  "testimonials": [
    {
      "author": "Nome",
      "role": "CEO",
      "company": "Empresa",
      "content": "Excelente profissional."
    }
  ]
}
```

---

## 5. Componentes: Props e Responsabilidades

### Hero Organism

```typescript
// src/components/organisms/hero.tsx
interface HeroProps {
  data: HomeContent['hero'];
}
// Responsabilidade: Renderizar título H1 impactante e descrição curta.
```

### ProjectsGrid Organism

```typescript
// src/components/organisms/projects-grid.tsx
interface ProjectsGridProps {
  projects: Project[];
}
// Responsabilidade: Mapear a lista de projetos e renderizar ProjectCards em grid.
```

### ProjectCard Molecule

```typescript
// src/components/molecules/project-card.tsx
interface ProjectCardProps {
  project: Project;
}
// Responsabilidade: Exibir imagem, título, tecnologias (Badges) e descrição.
```

---

## 7. Diagrama de Dependências

```
[types/content.ts]
    │
    ├──► [data/content.json]
    │         │
    │         ▼
    │    [services/content-service.ts]
    │         │
    ▼         ▼
[Atoms (Badge, Button, Heading)]
    │
    ▼
[Molecules (ProjectCard, SkillItem)]
    │
    ▼
[Organisms (Hero, ProjectsGrid, SkillsList, etc.)]
    │
    ▼
[page.tsx (modificado)]
```

---

## 8. Questões em Aberto

- [ ] Definir a paleta de cores exata para o "Minimalista Tech" no Tailwind v4.
- [ ] Decidir se o Hero terá uma imagem/avatar ou será focado apenas em tipografia.
