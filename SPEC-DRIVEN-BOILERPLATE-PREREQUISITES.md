# Especificações do Projeto

> **Este documento serve como referência para criar novos projetos usando o padrão spec-driven-ui.**
> Copie este arquivo e a estrutura de pastas para iniciar um novo projeto.

---

## 1. O que é este projeto?

Este é um **projeto frontend profissional** baseado em React e Next.js, seguindo o padrão **spec-driven development**. Isso significa que:

- 📋 Cada funcionalidade começa com uma **especificação** (spec)
- ✅ O desenvolvimento é guiado por **testes E2E com Playwright**
- 📝 Commits seguem o padrão **Conventional Commits**
- 🔒 Regras de código (guardrails) são validadas automaticamente

### Ideal para

- Sites institucionais e landing pages
- Dashboards e sistemas admin
- Portfólios e blogs
- MVPs de produtos digitais

---

## 2. Tecnologias e Versões

### Runtime
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **Node.js** | 20.x LTS | Runtime JavaScript |
| **npm** | 10.x | Gerenciador de pacotes |

### Framework Web
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **Next.js** | 16.x | Framework React com SSR e App Router |
| **React** | 19.x | Biblioteca de UI |

### Estilização
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **Tailwind CSS** | 4.x | Framework CSS utilitário |
| **PostCSS** | 8.x | Processador de CSS |

### Linguagem
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **TypeScript** | 5.9.x | Linguagem com tipagem estática |

### Testes
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **Playwright** | 1.58.x | Testes E2E automatizados |

### Qualidade de Código
| Tecnologia | Versão | Para que serve |
|------------|--------|----------------|
| **ESLint** | 9.x | Análise estática de código |
| **Husky** | 9.x | Git hooks automatizados |

---

## 3. Pré-requisitos do Sistema

Antes de começar, você precisa ter instalado no seu computador:

### 3.1 Node.js 20.x

```bash
# Verificar versão atual
node --version

# Se não tiver ou tiver versão diferente, instale pelo site:
# https://nodejs.org/ (escolha "LTS" que é a versão 20.x)
```

### 3.2 Git

```bash
# Verificar se tem Git
git --version

# Se não tiver, instale:
# Windows: https://git-scm.com/download/win
# Mac: brew install git
# Linux: sudo apt install git
```

### 3.3 VS Code (Recomendado)

Baixe em: https://code.visualstudio.com/

**Extensões recomendadas (instale no VS Code):**

1. **ESLint** - Microsoft
   - ID: `dbaeumer.vscode-eslint`
   - Analisa código automaticamente

2. **Prettier** - Prettier
   - ID: `esbenp.prettier-vscode`
   - Formata código automaticamente

3. **Tailwind CSS IntelliSense** - Tailwind Labs
   - ID: `bradlc.vscode-tailwindcss`
   - Autocomplete para classes Tailwind

4. **Playwright Test for VSCode** - Microsoft
   - ID: `ms-playwright.playwright`
   - Executa testes pelo VS Code

5. **Conventional Commits** - Vitalii Domarov
   - ID: `vivify.vscode-conventional-commits`
   - Ajuda a criar commits no formato correto

---

## 4. Instalação Passo a Passo

### 4.1 Clone ou copie o projeto

```bash
# Se copiando de um repositório Git
git clone https://github.com/seu-usuario/spec-driven-boilerplate.git
cd spec-driven-boilerplate

# Se criando do zero (estrutura mínima)
mkdir meu-projeto
cd meu-projeto
npm init -y
```

### 4.2 Estrutura de pastas inicial

```
meu-projeto/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/
│   │       └── .gitkeep
│   ├── tests/
│   │   └── features/
│   │       └── .gitkeep
│   ├── scripts/
│   │   ├── pre-commit-validate.js
│   │   └── validate-commit-msg.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── playwright.config.ts
│   └── .eslintrc.json
├── specs/
│   └── docs/
│       ├── guardrails.md
│       ├── convencoes-codigo.md
│       └── architecture.md
├── .husky/
│   ├── pre-commit
│   └── commit-msg
├── .gitignore
├── package.json
└── PREREQUISITES.md
```

### 4.3 Instalar dependências

```bash
cd frontend
npm install
```

**O que vai acontecer:**
- Downloading... node_modules
- Installing... react, react-dom, next, tailwindcss...
- This might take a few minutes ⏳

**Se aparecer erro de permissão (Linux/Mac):**
```bash
sudo npm install
```

### 4.4 Configurar Husky (Git Hooks)

```bash
npm run prepare
```

**O que vai acontecer:**
- Husky will be configured
- pre-commit hook installed
- commit-msg hook installed

**Se der erro de permissions:**
```bash
npx husky install
```

### 4.5 Instalar browsers do Playwright

```bash
npx playwright install chromium
```

**O que vai acontecer:**
- Downloading Chromium...
- Installing Chromium...
- Chromium installed successfully ✅

**Para instalar todos os browsers (Chrome, Firefox, WebKit):**
```bash
npx playwright install
```

---

## 5. Scripts Disponíveis

No diretório `frontend/`, você pode executar:

| Script | Comando | O que faz |
|--------|---------|-----------|
| **Desenvolvimento** | `npm run dev` | Inicia servidor na porta 3000 |
| **Build** | `npm run build` | Cria versão de produção |
| **Produção** | `npm start` | Inicia servidor de produção |
| **Testes** | `npm test` | Executa testes E2E |
| **Lint** | `npm run lint` | Verifica código com ESLint |

### 5.1 Iniciar desenvolvimento

```bash
cd frontend
npm run dev
```

**Resultado esperado:**
```
  ▲ Next.js 16.1.6
  - Local: http://localhost:3000
  ✓ Ready in 2.3s
```

Abra http://localhost:3000 no navegador.

### 5.2 Executar testes

```bash
cd frontend
npm test
```

**Resultado esperado:**
```
✓ 10 tests passed (8.4s)
```

---

## 6. Fluxo de Desenvolvimento

### 6.1 Antes de começar: criar branch

```bash
git checkout -b feat/nome-da-feature
```

**Exemplos de nomes de branch:**
- `feat/header`
- `feat/formulario-contato`
- `fix/botao-enviar`

### 6.2 Workflow TDD (Test-Driven Development)

```
┌────────────────────────────────────────────────────────────┐
│                    CICLO TDD                               │
│                                                            │
│   1. ESCREVER teste que FALHA (RED)                       │
│            ↓                                               │
│   2. IMPLEMENTAR código mínimo                             │
│            ↓                                               │
│   3. VERIFICAR se teste passa (GREEN)                      │
│            ↓                                               │
│   4. REFATORAR se necessário (BLUE)                        │
│            ↓                                               │
│   5. VOLTAR ao passo 1                                     │
└────────────────────────────────────────────────────────────┘
```

**Na prática:**

1. Escreva um teste que descreve o comportamento esperado
2. Execute `npm test` → teste deve FALHAR ❌
3. Implemente o código
4. Execute `npm test` → teste deve PASSAR ✅
5. Se passar, faça commit

### 6.3 Conventional Commits

Cada commit deve seguir este formato:

```
<tipo>(<escopo>): <descrição>
```

**Tipos permitidos:**

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| `feat` | Nova funcionalidade | `feat(header): adiciona menu mobile` |
| `fix` | Correção de bug | `fix(botao): corrige cor no hover` |
| `docs` | Documentação | `docs: adiciona README` |
| `style` | Formatação | `style: ajusta espaçamento` |
| `refactor` | Refatoração | `refactor: simplifica lógica` |
| `test` | Testes | `test: adiciona E2E do header` |
| `chore` | Tarefas gerais | `chore: atualiza dependências` |

**Exemplo de commit:**

```bash
git add .
git commit -m "feat(header): adiciona atributo title nos links"
```

**O que NÃO fazer:**
```bash
# ❌ Errado
git commit -m "alterações"
git commit -m "fix bug"
git commit -m "update"

# ✅ Certo
git commit -m "fix(form): corrige validação de email"
git commit -m "feat(menu): adiciona dropdown no desktop"
```

### 6.4 Pull Request

1. Faça push da branch:
```bash
git push origin feat/nome-da-feature
```

2. No GitHub/GitLab, crie Pull Request

3. Preencha o PR:
   - **Título**: Use conventional commit (ex: `feat(header): adiciona menu hamburger`)
   - **Descrição**: Liste o que foi feito

4. Aguarde review e aprovação

---

## 7. Estrutura de Pastas

### frontend/src/

```
frontend/src/
├── app/                    # Rotas do Next.js (App Router)
│   ├── layout.tsx          # Layout principal (Header + children)
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais + variáveis CSS
│   └── [rotas]/
│       ├── about/
│       │   └── page.tsx    # Página /about
│       └── contact/
│           └── page.tsx     # Página /contact
├── components/             # Componentes React
│   ├── header/
│   │   └── header.tsx      # Componente Header
│   ├── button/
│   │   └── button.tsx      # Componente Button
│   └── [outros]/
├── generated/              # Tipos TypeScript compartilhados
│   └── types.ts
└── lib/                    # Utilitários e helpers
    └── utils.ts
```

### frontend/tests/

```
frontend/tests/
└── features/              # Testes organizados por feature
    └── header/
        └── us-002.spec.ts  # Testes E2E do Header
```

### specs/

```
specs/
├── features/               # Especificações das features
│   └── header/
│       ├── research.md     # Pesquisa e análise
│       ├── plan.md         # Plano técnico
│       ├── tasks.md        # Lista de tarefas (User Stories)
│       └── progress.md     # Andamento atual
└── docs/                  # Documentação geral
    ├── guardrails.md       # Regras obrigatórias
    ├── convencoes-codigo.md # Padrões de código
    └── architecture.md     # Decisões arquiteturais
```

---

## 8. Guardrails (Regras Obratórias)

Estas regras são verificadas automaticamente no pre-commit. **Não as viole!**

| # | Regra | O que significa |
|---|-------|-----------------|
| 1 | **Não use `any`** | Sempre tipar variáveis e retornos |
| 2 | **Não fetch direto** | Use hooks ou libs para requisições HTTP |
| 3 | **Props sempre tipadas** | Todo componente React precisa de tipagem |
| 4 | **Sem comentários** | Código deve ser auto-explicativo |
| 5 | **Conventional commits** | Formato obrigatório nas mensagens |
| 6 | **Testes passando** | Verificado antes de cada commit |
| 7 | **ESLint limpo** | Sem warnings ou errors |

### 8.1 Exemplos de violações

```typescript
// ❌ ERRADO: usando any
function getData(id: any): any {
  return fetch(`/api/${id}`);
}

// ❌ ERRADO: sem tipar props
export const Button = (props) => {
  return <button>{props.label}</button>;
}

// ❌ ERRADO: com comentários desnecessários
// Esta função calcula o total
const calculateTotal = (items) => {
  // loop para somar
  return items.reduce((acc, item) => acc + item.price, 0);
}
```

```typescript
// ✅ CERTO: tipagem completa
function getData(id: string): Promise<Response> {
  return fetch(`/api/${id}`);
}

// ✅ CERTO: props tipadas
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
}

// ✅ CERTO: código auto-explicativo
const calculateTotal = (items: Item[]) => {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

---

## 9. Troubleshooting (Problemas Comuns)

### Problema: "Port 3000 is already in use"

**Solução 1: Usar outra porta**
```bash
npm run dev -- --port 3001
```

**Solução 2: Matar o processo**
```bash
# Windows
taskkill /F /IM node.exe

# Linux/Mac
pkill node
```

---

### Problema: "Cannot find module 'tailwindcss'"

**Solução:**
```bash
npm install
```

Se ainda der erro:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Problema: "Playwright browsers not found"

**Solução:**
```bash
npx playwright install chromium
```

---

### Problema: "ESLint not configured"

**Solução:**
```bash
cd frontend
npm install eslint @eslint/react
npx eslint --init
```

---

### Problema: "Husky not installed"

**Solução:**
```bash
npm run prepare
```

Se não funcionar:
```bash
npx husky install
```

---

### Problema: "TypeScript errors everywhere"

**Solução 1: Verifique a versão do TypeScript**
```bash
cd frontend
npx tsc --version
```

**Solução 2: Limpe o cache**
```bash
rm -rf frontend/.next
npm run dev
```

---

## 10. Recursos para Aprender

### Documentação oficial (em inglês)

| Tecnologia | Link |
|------------|------|
| Next.js | https://nextjs.org/docs |
| React | https://react.dev/learn |
| TypeScript | https://www.typescriptlang.org/docs/ |
| Tailwind CSS | https://tailwindcss.com/docs |
| Playwright | https://playwright.dev/docs/intro |
| ESLint | https://eslint.org/docs/latest/ |

### Tutoriais recomendados (YouTube)

- **Next.js do Zero**: Playlist "Next.js 2024 Tutorial"
- **TypeScript para React**: Playlist "React TypeScript Tutorial"
- **Testes E2E com Playwright**: Playlist "Playwright Tutorial"

### Livros (opcional)

- "Learning TypeScript" - Josh Goldberg
- "React Design Patterns" - Lucas da Costa

---

## Checklist Final

Antes de começar a desenvolver, marque cada item:

- [ ] Node.js 20.x instalado
- [ ] Git instalado
- [ ] VS Code com extensões instaladas
- [ ] Dependências instaladas (`npm install`)
- [ ] Husky configurado (`npm run prepare`)
- [ ] Playwright com browsers (`npx playwright install chromium`)
- [ ] `npm run dev` funciona
- [ ] `npm test` funciona

---

## Próximos Passos

1. ✅ Setup completo feito
2. ➡️ Criar sua primeira feature
3. ➡️ Estudar a estrutura de specs
4. ➡️ Começar com uma User Story simples

---

**Precisa de ajuda?** Abra uma issue no repositório ou chame o suporte.
