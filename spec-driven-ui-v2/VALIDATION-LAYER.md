# VALIDATION-LAYER.md
# Guia de ferramentas da camada de validação
# Flags de ativação: PROJECT.config.md → [features].gate_* / hook_* / use_*

---

## Visão geral

```
VALIDATION LAYER
├── cross-check       → skill_cross_check   — consistência entre artefatos
├── gherkin/BDD       → skill_gherkin       — especificação executável
├── typecheck         → gate_typecheck      — tsc --noEmit
├── lint              → gate_lint           — ESLint
├── tests             → gate_tests          — Vitest unitário/integração
├── gherkin gates     → gate_gherkin        — cenários .feature via Vitest
├── browser check     → gate_browser_check  — verificação visual
├── a11y              → gate_a11y           — axe-core (desabilitado por padrão)
├── coverage          → gate_coverage       — thresholds (desabilitado por padrão)
├── pre-commit hook   → hook_pre_commit     — roda gates antes do commit
└── commit-msg hook   → hook_commit_msg     — valida padrão de commit
```

---

## 1. Typecheck
Ativo se `[features].gate_typecheck = true`

```bash
pnpm typecheck   # tsc --noEmit
```

`tsconfig.json` obrigatório:
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
Ativo se `[features].gate_lint = true`

```bash
pnpm lint   # eslint . --max-warnings 0
```

Regras adicionais para `eslint.config.mjs`:
```javascript
rules: {
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
  'no-console': ['warn', { allow: ['error', 'warn'] }],
}
```

---

## 3. Prettier
Ativo se `[features].use_prettier = true`

```bash
pnpm format        # prettier --write .
pnpm format:check  # prettier --check .
```

`.prettierrc`:
```json
{ "semi": false, "singleQuote": true, "tabWidth": 2,
  "trailingComma": "es5", "printWidth": 100 }
```

---

## 4. Vitest
Ativo se `[features].use_vitest = true`

```bash
pnpm add -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/user-event jsdom
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
    // gate_coverage — habilitar quando [features].gate_coverage = true
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: { lines: 70, functions: 70, branches: 60 },
      exclude: ['node_modules/', 'src/test/', '**/*.config.*', '**/*.d.ts']
    }
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})
```

`src/test/setup.ts`:
```typescript
import '@testing-library/jest-dom'
```

---

## 5. Gherkin / BDD
Ativo se `[features].gate_gherkin = true` + `[features].skill_gherkin = true`

```bash
pnpm add -D vitest-cucumber
```

Step definitions em `{[gherkin].steps_dir}[nome]/[nome].steps.ts`:
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
    when('preencho o formulário e clico em "Salvar"', () => {
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
Ativo se `[features].use_commitlint = true`

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

`.commitlintrc.json` — usa padrão de `[conventions]`:
```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "scope-empty": [2, "never"],
    "subject-max-length": [2, "always", 72],
    "type-enum": [2, "always", ["feat","fix","refactor","test","chore","docs","style"]]
  }
}
```

---

## 7. Husky
Ativo se `[features].use_husky = true`

```bash
pnpm add -D husky && pnpm exec husky init
```

`.husky/pre-commit` (ativo se `[features].hook_pre_commit = true`):
```bash
#!/bin/sh
# Gates ativos controlados por PROJECT.config.md [features].gate_*

pnpm typecheck || { echo "❌ typecheck falhou"; exit 1; }
pnpm lint      || { echo "❌ lint falhou"; exit 1; }

FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx)$')
[ -n "$FILES" ] && pnpm vitest run --reporter=verbose $FILES || true

echo "✅ gates OK"
```

`.husky/commit-msg` (ativo se `[features].hook_commit_msg = true`):
```bash
#!/bin/sh
pnpm commitlint --edit "$1"
```

---

## 8. Scripts package.json

```json
{
  "scripts": {
    "typecheck":      "tsc --noEmit",
    "lint":           "eslint . --max-warnings 0",
    "format":         "prettier --write .",
    "format:check":   "prettier --check .",
    "test":           "vitest run",
    "test:watch":     "vitest",
    "test:coverage":  "vitest run --coverage",
    "test:gherkin":   "vitest run src/app/features",
    "validate":       "pnpm typecheck && pnpm lint && pnpm test",
    "new-feature":    "bash scripts/new-feature.sh"
  }
}
```

---

## Ordem de execução pelo orchestrator

```
1. gate_typecheck    → tsc --noEmit                    (bloqueante)
2. gate_lint         → eslint --max-warnings 0          (bloqueante)
3. gate_tests        → vitest run [files_affected]      (bloqueante)
4. gate_gherkin      → vitest run --grep @US-XXX        (bloqueante)
5. gate_browser_check → verificação visual              (bloqueante para UI)
6. gate_a11y         → axe-core                        (quando habilitado)
7. gate_coverage     → vitest --coverage               (quando habilitado)
```
