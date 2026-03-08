# Plan: Home

> Gerado a partir de: `specs/features/home/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

A página Home será construída com Next.js App Router (React 19) como uma Single Page Application. Os dados do perfil, portfólio e depoimentos serão fornecidos via uma fonte local estática (mock), já que não há integração de API e backend real. Utilizaremos Tailwind CSS v4 puro para a estilização unificada e criação de microinterações fluídas. Todos os artefatos basear-se-ão estritamente no framework Next.js sem SWR/React Query.

---

## 2. Estrutura de Arquivos

```
src/
├── app/
│   └── page.tsx                          # modificado - refatorada para importar seções
├── components/
│   ├── home/
│   │   ├── hero.tsx                      # criado - CTA e título
│   │   ├── expertise.tsx                 # criado - Lista de tecnologias (badges)
│   │   ├── projects.tsx                  # criado - Vitrine dos 3 top projetos
│   │   ├── project-card.tsx              # criado - Elemento base da lista de projetos
│   │   └── about.tsx                     # criado - Resumo profisional e prova social
│   └── ui/
│       ├── button.tsx                    # criado - Botão principal
│       └── section.tsx                   # criado - Container de seção resposiva
├── data/
│   └── home-data.ts                      # criado - Dados estáticos simulando banco (skills, textos)
└── generated/
    └── types.ts                          # criado - Interfaces TypeScript de conteúdo
```

---

## 3. Tipagens Base (Exemplificação)

Principais tipos a serem exportados em `types.ts` sem uso de `any` ou `object`:

- `Project`: `{ id: string; title: string; description: string; imageUrl?: string; url: string; tags: string[] }`
- `Skill`: `{ name: string; category: 'languages' | 'frameworks' | 'tools'; icon?: string }`
- `SocialProof`: `{ author: string; role: string; quote: string }`

---

## 4. Assinatura de Componentes

Props expostas esperadas (em resumo):

- `HeroProps`: `{ name: string; title: string; subtitle: string; ctaText: string }`
- `ProjectCardProps`: `{ project: Project }`
- `ExpertiseProps`: `{ skills: Skill[] }`
- `AboutProps`: `{ biography: string; proofs: SocialProof[] }`
- `ButtonProps`: `{ children: React.ReactNode; variant: 'primary' | 'outline'; href?: string }`

---

## 7. Diagrama de Dependências

```
[types.ts]
    │
    ├──► [home-data.ts]
    │         │
    ▼         ▼
[button.tsx, section.tsx, project-card.tsx]
    │
    ▼
[hero.tsx, expertise.tsx, projects.tsx, about.tsx]
    │
    ▼
[page.tsx (modificado)]
```

Desta forma preparamos as estruturas de dados e UI de base antes das seções em si.

---

## 8. Questões em Aberto

- [ ] Vamos incluir uma seção de currículo para baixar (PDF) direto na Home?
- [ ] Quais são os top 3 projetos que terão destaque inicial?
- [ ] Há ícones específicos/biblioteca extra (ex: Lucide React) pré-instalados para os cards ou usaremos SVG raw?
