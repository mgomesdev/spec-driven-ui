## Estrutura de Pastas

```
/
├── .opencode/              # Configuração dos agentes IA
│   └── agents/             # Agentes especializados
│       ├── us-to-research/     # Converte user story em pesquisa
│       ├── research-to-plan/  # Converte pesquisa em plano
│       ├── plan-to-tasks/     # Converte plano em tarefas
│       └── implement-tasks/   # Implementa as tarefas
│
├── frontend/               # Projeto Next.js
│   ├── src/
│   │   └── app/            # Next.js App Router
│   │       ├── layout.tsx  # Layout raiz
│   │       ├── page.tsx   # Página home
│   │       └── globals.css# Estilos globais
│   │
│   ├── public/            # Arquivos estáticos
│   ├── package.json       # Dependências do projeto
│   ├── next.config.ts     # Configuração Next.js
│   ├── tsconfig.json      # Configuração TypeScript
│   ├── eslint.config.mjs  # Configuração ESLint
│   └── postcss.config.mjs# Configuração PostCSS
│
├── specs/                 # Especificações do projeto
│   └── docs/
│       ├── architecture.md      # Este arquivo
│       ├── guardrails.md        # Regras obrigatórias
│       ├── convencoes-codigo.md # Convenções de código
│       └── padroes-git.md      # Padrões Git
│
├── AGENTS.md              # Configuração do agente geral
├── opencode.json          # Configuração do opencode
└── README.md              # Documentação do projeto
```