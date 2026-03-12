## Estrutura do projeto

```
/                               # Diretório Root
- .agent/                        # skills, rules do agente
    - skills/                     # Skills
    - rules/                     # Regras
- specs/                        # Especificações do Projeto
    - docs/                     # Documentação detalhada do Projeto
        - arquitetura.md        # Arquitetura do Projeto
- src/                          # Código Fonte
    - app/                      # Next.js App Router
        - layout.tsx            # Layout Root
        - page.tsx              # Página Home
        - global.css            # Estilos Globais
        - favicon.ico           # Favicon
    - components/               # Components
      - atoms/                  # Atoms
      - home/                   # Componentes da feature home
    - data/                     # Dados estáticos (profile.ts, projects.ts)
    - types/                    # Tipos TypeScript (home.ts)
    - public/                   # Arquivos Públicos
    - fonts/                    # Fontes
    - images/                   # Imagens
    - og/                       # OG Images
- .gitignore                    # Arquivos Ignorados pelo Git
- AGENTS.md                     # Arquivos de Configuração de Agentes
- eslint.config.mjs             # Arquivos de Configuração de ESLint
- next.config.ts                # Arquivos de Configuração de Next.js
- package.json                  # Arquivos de Configuração de Package.json
- postcss.config.mjs            # Arquivos de Configuração de PostCSS
- README.md                     # Informações sobre o projeto
- tsconfig.json                 # Arquivos de Configuração de TypeScript
```