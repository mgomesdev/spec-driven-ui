# Validation Layer — Ferramentas

> Camada responsável por garantir qualidade em todos os níveis: artefatos, tipos, código e comportamento.

---

## Visão geral

```
VALIDATION LAYER
├── cross-check       → consistência entre artefatos (Markdown)
├── gherkin/BDD       → especificação executável (*.feature + steps)
├── typecheck         → TypeScript strict
├── lint              → ESLint + regras customizadas
├── format            → Prettier (automático, não bloqueia)
├── commit-lint       → mensagens de commit padronizadas
├── pre-commit hook   → roda typecheck + lint antes de cada commit
└── vitest            → testes unitários e de integração
```

---

## 1. Typecheck

```bash
# Rodar
pnpm typecheck

# package.json
"typecheck": "tsc --noEmit"
```

`tsconfig.json` deve ter:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## 2. ESLint

```bash
# Rodar
pnpm lint

# package.json
"lint": "eslint . --max-warnings 0"
```

Regras recomendadas para adicionar ao `eslint.config.mjs`:

```javascript
// eslint.config.mjs
export default [
  // ... config existente ...
  {
    rules: {
      // Proibir any explícito
      '@typescript-eslint/no-explicit-any': 'error',
      // Proibir imports não usados
      '@typescript-eslint/no-unused-vars': 'error',
      // Exigir tipo de retorno em funções exportadas
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      // Proibir console em produção
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      // Consistência de imports
      'import/order': ['warn', { 'newlines-between': 'always' }],
    }
  }
]
```

---

## 3. Prettier (format)

```bash
# Rodar
pnpm format

# package.json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

`.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## 4. Vitest

```bash
# Instalar
pnpm add -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/user-event jsdom

# Rodar
pnpm test
pnpm test:coverage
```

`vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // Thresholds mínimos — ajuste conforme o projeto amadurece
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
      },
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.config.*',
        '**/*.d.ts',
      ]
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
```

`src/test/setup.ts`:
```typescript
import '@testing-library/jest-dom'
```

### Estrutura de testes por tipo de arquivo

```
src/app/
  components/
    XxxComponent.tsx
    XxxComponent.test.tsx     ← testa renderização e interação
  hooks/
    useXxx.ts
    useXxx.test.ts            ← testa lógica do hook
  services/
    xxxService.ts
    xxxService.test.ts        ← testa chamadas de API (mockadas)
  features/
    [nome]/
      [nome].steps.ts         ← step definitions dos cenários Gherkin
```

---

## 5. Gherkin / BDD com Vitest

```bash
# Instalar adaptador Gherkin para Vitest
pnpm add -D vitest-cucumber
```

`src/app/features/[nome]/[nome].steps.ts`:
```typescript
import { defineFeature, loadFeature } from 'vitest-cucumber'
import { render, screen, fireEvent } from '@testing-library/react'
import { XxxComponent } from '@/app/components/XxxComponent'

const feature = loadFeature('specs/features/[nome]/[nome].feature')

defineFeature(feature, (test) => {
  test('Criar item com dados válidos', ({ given, when, then }) => {
    given('que estou na página de criação', () => {
      render(<XxxComponent />)
    })

    when('preencho o formulário com dados válidos e clico em "Salvar"', async () => {
      fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Teste' } })
      fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))
    })

    then('o item é criado com sucesso', async () => {
      expect(await screen.findByText('Item criado!')).toBeInTheDocument()
    })
  })
})
```

---

## 6. Commitlint

```bash
# Instalar
pnpm add -D @commitlint/cli @commitlint/config-conventional

# package.json
"commitlint": "commitlint --edit"
```

`.commitlintrc.json`:
```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "scope-empty": [2, "never"],
    "subject-max-length": [2, "always", 72],
    "type-enum": [2, "always", [
      "feat", "fix", "refactor", "test", "chore", "docs", "style"
    ]]
  }
}
```

Exemplos válidos:
```
feat(checkout): US-001 - Formulário de criação
fix(checkout): US-002 - Corrigir validação de campo nome
test(checkout): US-001 - Adicionar testes do formulário
```

---

## 7. Husky — Pre-commit Hook

```bash
# Instalar
pnpm add -D husky
pnpm exec husky init
```

`.husky/pre-commit`:
```bash
#!/bin/sh
echo "🔍 Rodando quality gates pré-commit..."

# Typecheck (sempre)
pnpm typecheck
if [ $? -ne 0 ]; then
  echo "❌ Typecheck falhou. Commit bloqueado."
  exit 1
fi

# Lint (sempre)
pnpm lint
if [ $? -ne 0 ]; then
  echo "❌ Lint falhou. Commit bloqueado."
  exit 1
fi

# Testes relacionados aos arquivos staged
FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx)$')
if [ -n "$FILES" ]; then
  pnpm vitest run --reporter=verbose $FILES
  if [ $? -ne 0 ]; then
    echo "❌ Testes falharam. Commit bloqueado."
    exit 1
  fi
fi

echo "✅ Quality gates OK. Commitando..."
```

`.husky/commit-msg`:
```bash
#!/bin/sh
pnpm commitlint --edit "$1"
```

---

## 8. Scripts no package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --max-warnings 0",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:gherkin": "vitest run --reporter=verbose src/app/features",
    "validate": "pnpm typecheck && pnpm lint && pnpm test",
    "new-feature": "bash scripts/new-feature.sh"
  }
}
```

---

## Ordem de execução pelo orchestrator

```
1. tsc --noEmit                          (bloqueante)
2. eslint --max-warnings 0               (bloqueante)
3. vitest run [arquivos da task]         (bloqueante)
4. vitest run --grep @US-XXX             (bloqueante — cenários Gherkin)
5. browser check visual                  (bloqueante para tasks com UI)
```
