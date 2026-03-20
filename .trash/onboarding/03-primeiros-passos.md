# Primeiros Passos: Configure Seu Ambiente

## Checklist de Configuração

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    ✅ CHECKLIST DE SETUP                        │
└─────────────────────────────────────────────────────────────────┘

Antes de começar, garanta que você tem:

□ Node.js 20+ instalado
□ pnpm instalado (ou npm)
□ Git configurado
□ Editor de código (VS Code recomendado)
□ Acesso ao repositório
```

---

## 1. Instalação do Node.js

### Mac/Linux
```bash
# Usando nvm (recomendado)
nvm install 20
nvm use 20

# Verifique
node --version  # deve mostrar v20.x.x
```

### Windows
1. Baixe em [nodejs.org](https://nodejs.org/)
2. Instale a versão LTS (20.x)
3. Reinicie o terminal

**Verifique:**
```bash
node --version
npm --version
```

---

## 2. Instalar pnpm (Opcional mas Recomendado)

```bash
# Via npm
npm install -g pnpm

# Via corepack (Node 16.10+)
corepack enable
corepack prepare pnpm@latest --activate

# Verifique
pnpm --version
```

---

## 3. Clone e Setup do Projeto

```bash
# Clone o repositório
git clone <url-do-repo>
cd spec-driven-ui

# Instale dependências
cd frontend
pnpm install  # ou npm install

# Setup de hooks (importante!)
pnpm prepare
```

---

## 4. Variáveis de Ambiente

Verifique se existe `.env.local` na raiz do frontend:

```bash
# Se não existir, crie
touch frontend/.env.local

# Conteúdo típico (pergunte ao time):
# NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 5. Rode o Projeto Localmente

```bash
cd frontend

# Modo desenvolvimento (com hot reload)
pnpm dev

# Build de produção (para testar)
pnpm build
pnpm start
```

**Saída esperada:**
```
  ▲ Next.js 16.1.6
  - Local:        http://localhost:3000
  ✓ Ready in 2.3s
```

**Acesse:** http://localhost:3000

---

## 6. Identificando Sua Primeira Tarefa

### Onde Encontrar Tarefas

```
📁 specs/features/[nome-da-feature]/
├── research.md      ← Contexto e requisitos
├── plan.md          ← Plano de implementação
├── tasks.md         ← Lista de tarefas
└── *.feature        ← Cenários BDD (busque @pending)
```

### Identificando Tarefas Pendentes

Busque por `@pending` nos arquivos `*.feature`:

```bash
# No terminal, na raiz do projeto
grep -r "@pending" specs/features/
```

**O que significa:**
| Tag | Significado |
|-----|-------------|
| `@pending` | Precisa ser implementado |
| `@done` | Já implementado e testado |
| `@wip` | Work in progress |

### Exemplo de Tarefa

```gherkin
@desktop @pending
Scenario: Logo click redirects to home
  Given I am on any page
  When I click the logo
  Then I should be on the home page
```

---

## 7. Como Ver o Que Já Foi Feito

### Branch Atual
```bash
# Veja em qual branch você está
git branch

# Liste todos os branches
git branch -a
```

### Histórico de Commits
```bash
# Últimos 10 commits
git log --oneline -10

# Commits de uma branch específica
git log main..HEAD --oneline
```

### Arquivos Modificados
```bash
# O que mudou desde o último commit
git status

# Diff das mudanças
git diff
```

---

## 8. Criando Sua Branch de Trabalho

```bash
# Formato: feat/[feature]/[us-id]
git checkout -b feat/header/US-001

# Exemplo prático
git checkout -b feat/header/US-001-logo-redirect
```

---

## Checklist Final

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                 ✅ PRONTO PARA COMEÇAR?                         │
└─────────────────────────────────────────────────────────────────┘

□ Node.js instalado
□ Dependências instaladas
□ Projeto rodando em localhost:3000
□ Consegui identificar uma tarefa com @pending
□ Criei minha branch de trabalho

Se todas as respostas forem SIM → Você está pronto! 🚀
```

---

## Troubleshooting Comum

### Erro: "command not found: pnpm"
```bash
npm install -g pnpm
```

### Erro: "Cannot find module 'next'"
```bash
cd frontend
pnpm install
```

### Erro: "Port 3000 is already in use"
```bash
# Encontre e mate o processo
# Mac/Linux:
lsof -i :3000
kill -9 <PID>

# Ou use outra porta:
pnpm dev -- -p 3001
```

### Erro: "Git: not a git repository"
```bash
# Clone o repo novamente
git clone <url>
cd spec-driven-ui
```

---

## Próximo Passo

Entenda BDD → `04-bdd-basico.md`
