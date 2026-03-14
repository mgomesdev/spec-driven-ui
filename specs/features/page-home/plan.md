# Plan: Page Home

> Gerado a partir de: `specs/features/page-home/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Desenvolvimento da página inicial `/` com Header, Hero e Footer. A página apresenta o profissional com design premium (UI escura, gradientes). Todos os dados são estáticos/hardcoded. Componentes puro recebem dados via props e são compostos na página principal.

---

## 2. Estrutura de Arquivos

```
src/
├── app/
│   └── page.tsx                          # modificado - integra componentes
├── components/
│   └── page-home/
│       ├── header.tsx                    # criado - header com botão
│       ├── hero-section.tsx              # criado - seção hero completa
│       └── footer.tsx                    # criado - footer com copyright
├── data/
│   └── profile.ts                        # modificado - dados do profile
└── types/
    └── home.ts                           # criado - tipos da feature
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Tipos e Interfaces

```typescript
// src/types/home.ts
export interface ProfileData {
  name: string;
  identifier: string;
  role: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaSecondaryUrl: string;
  cvUrl: string;
}
```

---

## 4. Dados Estáticos

```typescript
// src/data/profile.ts (modificado)
import { ProfileData } from '@/types/home';

export const profileData: ProfileData = {
  name: 'MatheusGomesDev',
  identifier: '<MatheusGomesDev />',
  role: 'Programador Frontend',
  subtitle: 'apaixonado por criação de interfaces inovadoras',
  description: 'Desenvolvedor frontend com experiência em React, Next.js e TypeScript. Criando experiências digitais que combinam performance, acessibilidade e design.',
  ctaPrimary: 'Vamos criar algo incrível juntos?',
  ctaSecondary: 'Entre em Contato',
  ctaSecondaryUrl: 'mailto:matheus@example.com',
  cvUrl: '/cv-matheus-gomes.pdf',
};
```

---

## 5. Componentes: Props e Responsabilidades

### Header

```typescript
interface HeaderProps {
  // Recebe children para o botão (permite composição)
  children?: React.ReactNode;
}

// Responsabilidade: Renderizar header com botão de ação
// Estado local: Nenhum
// Não faz: Fetch de dados
```

### HeroSection

```typescript
interface HeroSectionProps {
  profile: ProfileData;
}

// Responsabilidade: Renderizar apresentação completa (avatar, nome, cargo, CTAs)
// Estado local: Nenhum
// Não faz: Fetch de dados, não gerencia rotas
```

### Footer

```typescript
interface FooterProps {
  copyrightText?: string;
}

// Responsabilidade: Renderizar rodapé com copyright
// Estado local: Nenhum
// Não faz: Fetch de dados
```

---

## 6. Componente Principal (Page)

```typescript
// src/app/page.tsx
// - Importa profileData de @/data/profile
// - Renderiza Header, HeroSection e Footer
// - Aplica classe bg-dark (bg-[#101828]) ao wrapper
// - Define metadata para SEO
```

---

## 7. Contratos de API

N/A — sem backend. Dados são estáticos/hardcoded.

---

## 8. Diagrama de Dependências

```
[home.ts (types)]
       │
       ▼
[profile.ts (data)]
       │
       ▼
[Header.tsx] [HeroSection.tsx] [Footer.tsx]
       │              │              │
       └──────────────┼──────────────┘
                      ▼
              [page.tsx (modificado)]
```

Ordem de implementação:
1. `types/home.ts` — definir tipos
2. `data/profile.ts` — criar dados (se não existir)
3. `components/page-home/header.tsx` — criar
4. `components/page-home/hero-section.tsx` — criar
5. `components/page-home/footer.tsx` — criar
6. `app/page.tsx` — integrar componentes

---

## 9. Questões em Aberto

- [ ] URL do CV: usar placeholder `/cv-matheus-gomes.pdf` (ajustar quando tiver arquivo real)
- [ ] URL de contato: usar `mailto:matheus@example.com` (ajustar quando tiver email real)
- [ ] Avatar: usar placeholder com inicial "M" em gradiente (ajustar quando tiver imagem real)
