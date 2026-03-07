# Site estratégico

## Visão geral rápida

Este é um site estratégico para posicionamento de autoridade profissional como desenvolvedor frontend, para facilitar o processo de contratação.

## Tecnologias

- Next.js 16.1.6 (app router) 
- React 19.2
- TypeScript 5.9
- Tailwind CSS v4.2

## Fontes confiáveis

### Documentação oficial
- https://tailwindcss.com/
- https://nextjs.org/
- https://www.typescriptlang.org/
- https://react.dev/

### Blogs e artigos

- https://atomicdesign.bradfrost.com/

### Referências internas

- **arquitetura**: `./specs/docs/arquitetura.md`

## Estrutura do projeto

```
/                               # Diretório Root
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
- public/                       # Arquivos Públicos
    - fonts/                    # Fontes
    - images/                   # Imagens
    - og/                       # OG Images
- .gitignore                    # Arquivos Ignorados pelo Git
- AGENTS.md                     # Arquivos de Configuração de Agentes
- eslint.config.mjs             # Arquivos de Configuração de ESLint
- next.config.ts                # Arquivos de Configuração de Next.js
- package.json                  # Arquivos de Configuração de Package.json
- postcss.config.mjs            # Arquivos de Configuração de PostCSS
- README.md                     # Arquivos de Configuração de README.md
- tsconfig.json                 # Arquivos de Configuração de TypeScript
```

## Padrôes do projeto

### Convenções de nomenclatura

- **Arquivos**: kebab-case (`form-dialog.tsx`, não `FormDialog.tsx`)
- **Componentes**: PascalCase, (`FormDialog`)
- **Tipos/Interfaces:**: PascalCase com sufixos descritivos (`FormDialogProps` para props) e (`FormDialogRef` para ref)
- **Constantes**: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- **Variáveis booleanas**: prefixo is/has/can (`isActive`, `hasPermission`)

### Antipadrôes a evitar
- Usar tipos `any` (sempre defina tipos apropriados)
- Colocar valores não reativos dentro de componentes (sempre coloque valores não reativos fora do componente logo abaixo do primeiro componente que utiliza)

### Exemplos de código


