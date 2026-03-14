# Plan: Página Sobre

> Gerado a partir de: `specs/features/sobre/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Página institucional `/about` com conteúdo estático apresentando biografia profissional, experiência em formato timeline, habilidades por categoria e links de contato. Utiliza o padrão de dados em `data/` e componentes em `components/sobre/` seguindo a mesma estrutura já utilizada na home.

---

## 2. Estrutura de Arquivos

```
src/
├── app/
│   └── about/
│       └── page.tsx                  # criado - página /about
├── components/
│   └── sobre/
│       ├── bio-section.tsx           # criado - seção de biografia
│       ├── experience-section.tsx    # criado - timeline de experiências
│       ├── skills-section.tsx        # criado - habilidades por categoria
│       └── contact-section.tsx       # criado - links de contato
├── data/
│   └── sobre.ts                      # criado - dados estáticos da página
└── types/
    └── sobre.ts                     # criado - tipos TypeScript
```

Legenda:
- `# criado` — arquivo novo

---

## 3. Interfaces e Types

```typescript
// src/types/sobre.ts

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  url: string;
  icon: 'linkedin' | 'github' | 'email';
}

export interface AboutData {
  profile: {
    name: string;
    role: string;
    avatar?: string;
  };
  bio: string[];
  experience: Experience[];
  skills: SkillCategory[];
  contact: ContactLink[];
}
```

---

## 4. Contratos de API Consumidos

Não aplicável — página com dados estáticos (hardcoded/JSON local).

---

## 5. Componentes: Props e Responsabilidades

### BioSection

```typescript
interface BioSectionProps {
  profile: {
    name: string;
    role: string;
    avatar?: string;
  };
  bio: string[];
}

// Responsabilidade: Renderiza foto/avatar, nome, cargo e biografia em 2-3 parágrafos
// Estado local: nenhum
// Não faz: requisições à API
```

### ExperienceSection

```typescript
interface ExperienceSectionProps {
  experience: Experience[];
}

// Responsabilidade: Renderiza timeline de experiências com cargo, empresa, período e descrição
// Estado local: nenhum
// Não faz: requisições à API
```

### SkillsSection

```typescript
interface SkillsSectionProps {
  skills: SkillCategory[];
}

// Responsabilidade: Renderiza habilidades organizadas por categoria com badges
// Estado local: nenhum
// Não faz: requisições à API
```

### ContactSection

```typescript
interface ContactSectionProps {
  contact: ContactLink[];
}

// Responsabilidade: Renderiza links de contato com ícones (LinkedIn, GitHub, email)
// Estado local: nenhum
// Não faz: requisições à API
```

---

## 6. Hooks Customizados

Não aplicável — página estática sem lógica de dados.

---

## 7. Dados Estáticos

```typescript
// src/data/sobre.ts

import type { AboutData } from '@/types/sobre';

export const ABOUT: AboutData = {
  profile: {
    name: 'Matheus Gomes',
    role: 'Desenvolvedor Frontend Sênior',
    // avatar opcional
  },
  bio: [
    'Primeiro parágrafo da biografia...',
    'Segundo parágrafo...',
    'Terceiro parágrafo...',
  ],
  experience: [
    {
      id: '1',
      role: 'Desenvolvedor Frontend Sênior',
      company: 'Empresa X',
      period: '2022 - Presente',
      description: 'Descrição da função...',
    },
    // mais experiências...
  ],
  skills: [
    {
      id: 'frontend',
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    // mais categorias...
  ],
  contact: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/matheusgomes',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/matheusgomes',
      icon: 'github',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:matheus@example.com',
      icon: 'email',
    },
  ],
};
```

---

## 8. Diagrama de Dependências

Ordem de implementação:

```
[types/sobre.ts]
       │
       ▼
[data/sobre.ts]
       │
       ▼
[sobre/bio-section.tsx] ──► [sobre/experience-section.tsx]
                                    │
                                    ▼
                            [sobre/skills-section.tsx]
                                    │
                                    ▼
                            [sobre/contact-section.tsx]
                                    │
                                    ▼
                            [app/sobre/page.tsx]
```

---

## 9. Questões em Aberto

- [ ] Qual conteúdo específico para a biografia? (Texto a fornecer)
- [ ] Quais experiências profissionais incluir? (Lista a fornecer)
- [ ] Quais tecnologias/habilidades destacar? (Lista a fornecer)
- [ ] Há foto/avatar disponível? (Sim/Não)
- [ ] Os dados do profile.ts podem ser reaproveitados ou precisam ser duplicados?
