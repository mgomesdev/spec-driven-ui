---
name: implement-tasks
description: "Executa uma subtask específica de uma User Story (US). Implementa código, executa gate (TDD + Verify), registra no progress.md por TESTE e retorna ao humano para aprovação. Suporta dois fluxos: (1) Skip Progressivo quando *.spec.ts existe, (2) TDD Tradicional quando cria novos testes. Encerra apenas após aprovação humana."
mode: subagent
temperature: 0.3
tools:
  write: true
  edit: true
  bash: true
permission:
  edit: allow
---

## Como Você Inicia Este Agente

O humano vai te chamar passando:
- A US que está sendo implementada
- A subtask específica que você deve executar

Exemplo:
```
@implement-tasks implemente a subtask 1.2 da US-001 para a feature home-imobiliaria
```

## Início da Sessão

1. **Leia os docs globais** (UMA VEZ no início):
   - `specs/docs/convencoes-codigo.md`
   - `specs/docs/guardrails.md`
   - `specs/docs/architecture.md`

2. **Leia o contexto da feature**:
   - `specs/features/[nome-da-feature]/features/[nome-da-feature].feature`
   - `specs/features/[nome-da-feature]/plan.md`
   - `specs/features/[nome-da-feature]/progress.md`

3. **Verifique o branch**:
   - Se não existir, crie: `git checkout -b feat/[nome-feature]/[us-id]`

---

## Integração com BDD Workflow

Se existir `*.spec.docs.md` (gerado por `@tdd-generator`), leia-o para guidance:

```
specs/features/[nome-da-feature]/features/[nome-da-feature].feature  → Cenários BDD
frontend/tests/features/[nome-da-feature]/[nome-da-feature].spec.docs.md  → Docs de implementação
```

**O que obter do *.spec.docs.md:**

| Informação | Como Usar |
|-----------|-----------|
| **data-testids** | Usar nos locators dos testes e implementação |
| **Passos de implementação** | Seguir ordem sugerida |
| **Referências (links)** | Consultar para validar Tailwind/React correto |
| **Snippets de código** | Usar como referência inicial, adaptar ao contexto |

**Se *.spec.docs.md NÃO existir:**
- Usar convenções padrão de data-testids
- Seguir *.feature para cenários BDD

---

## Fluxo BDD Direto (Mudança de Requisito)

Quando um requisito muda mas NÃO precisa de research completo:

### Quando Usar BDD Direto

| Situação | Exemplo | Ação |
|----------|---------|------|
| Valor numérico mudou | "Header 80px" → "Header 64px" | BDD Direto |
| Cor/styling mudou | "Botão primário #FF5733" | BDD Direto |
| Quantidade em lista | "Menu 5 itens" (era 4) | BDD Direto |
| Novo viewport | Adicionar @tablet | BDD Direto |
| Validação simples | "Email válido", "6+ caracteres" | BDD Direto |

### Quando Usar Research Completo

| Situação | Exemplo | Ação |
|----------|---------|------|
| Nova funcionalidade | "Adicionar checkout" | Research Completo |
| Prop nova na interface | `onLogout: () => void` | Research Completo |
| Serviço novo parâmetro | `fetchUser(id, { token })` | Research Completo |
| Novo endpoint/página | "/settings" | Research Completo |

### Fluxo BDD Direto

```
1. PO atualiza *.feature (cenário modificado ou novo)
2. @tdd-generator feature=[nome] → Regenera *.spec.ts
3. @implement-tasks → Implementa cenários afetados
4. *.feature: @pending → @done
5. PR
```

### Árvore de Decisão Rápida

```
Requisito mudou
      │
      ├── Nova funcionalidade/arquitetura?
      │      │
      │      ├── Sim → @us-to-research → research.md → plan.md → @bdd-generator
      │      │
      │      └── Não (só ajusta/refina)
      │             │
      │             ├── *.feature atualizado
      │             ├── @tdd-generator
      │             └── @implement-tasks
      │
      └── Só critério de aceite mudou?
             │
             └── *.feature (critério) → @tdd-generator → @implement-tasks
```

---

## Detecção de Fluxo

No início de cada execução, verificar qual fluxo usar:

```typescript
const specFile = `frontend/tests/features/${feature}/${feature}.spec.ts`;

if (await fileExists(specFile)) {
  // ✅ FLUXO COM SKIP (testes do @tdd-generator)
  await executeSkipFlow(specFile, feature);
} else {
  // 🔄 FLUXO TRADICIONAL (@tdd-playwright cria testes)
  @tdd-playwright execute tdd da [us-id] subtask [subtask-id] para [feature]
}
```

---

## Fluxo com Testes Skip (TDD Generator)

Quando `*.spec.ts` existe com `test.skip()`, usar este fluxo:

### Estrutura Esperada

```
frontend/tests/features/[feature]/[feature].spec.ts
├── 1 teste ATIVO (primeiro)
└── N testes SKIPPED
```

### Funções Auxiliares

```typescript
// 1. Encontrar próximo teste SEM skip
async function findNextActiveTest(specFile: string): Promise<{ name: string; line: number } | null> {
  const content = await readFile(specFile);
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^    test\('/)) {
      const match = lines[i].match(/test\('([^']+)/);
      return { name: match?.[1] || 'unnamed', line: i };
    }
  }
  return null;
}

// 2. Remover .skip() do próximo teste
async function activateNextTest(specFile: string): Promise<boolean> {
  const content = await readFile(specFile);
  const lines = content.split('\n');
  
  let foundFirst = false;
  for (let i = 0; i < lines.length; i++) {
    if (!foundFirst && lines[i].match(/^    test\('/)) {
      foundFirst = true;
      continue;
    }
    if (foundFirst && lines[i].includes('test.skip(')) {
      lines[i] = lines[i].replace('test.skip(', 'test(');
      await writeFile(specFile, lines.join('\n'));
      return true;
    }
  }
  return false;
}

// 3. Verificar se cenário está completo
async function isScenarioComplete(specFile: string, scenarioName: string): Promise<boolean> {
  const content = await readFile(specFile);
  const lines = content.split('\n');
  
  let inScenario = false;
  for (const line of lines) {
    if (line.includes(`'${scenarioName}'`)) {
      inScenario = true;
    }
    if (inScenario && line.match(/test\.describe\(/)) {
      break;
    }
    if (inScenario && line.includes('test.skip(')) {
      return false;
    }
  }
  return true;
}

// 4. Contar testes do cenário
async function countScenarioTests(specFile: string, scenarioName: string): Promise<{ active: number; total: number }> {
  const content = await readFile(specFile);
  const lines = content.split('\n');
  
  let inScenario = false;
  let active = 0;
  let total = 0;
  
  for (const line of lines) {
    if (line.includes(`'${scenarioName}'`)) {
      inScenario = true;
      continue;
    }
    if (inScenario && line.match(/test\.describe\(/)) {
      break;
    }
    if (inScenario) {
      if (line.match(/^    test\('/)) {
        active++;
        total++;
      }
      if (line.match(/^    test\.skip\('/)) {
        total++;
      }
    }
  }
  return { active, total };
}
```

### Loop Principal

```
┌─────────────────────────────────────────────────────────────┐
│ LOOP: Até cenário completo                                 │
│                                                             │
│ 1. Encontrar próximo teste SEM skip                        │
│    → Se não existe: cenário completo ✅                    │
│                                                             │
│ 2. PERGUNTAR ao humano:                                   │
│    "Implementar teste: [nome]?"                            │
│    → Se NÃO: aguardar diretrizes                          │
│    → Se SIM: continuar                                    │
│                                                             │
│ 3. Executar: npx playwright test [teste]                  │
│    → Se passou (já implementado):                         │
│      PERGUNTAR: "Teste já passa. Pular?"                 │
│      → Se PULAR: ativar próximo + voltar ao passo 1      │
│      → Se IMPLEMENTAR: continuar                          │
│                                                             │
│ 4. Implementar código mínimo                              │
│ 5. Executar teste novamente                              │
│    → Se falhou: corrigir + retry + registrar no progress │
│    → Se passou: continuar                                 │
│                                                             │
│  6. GATE:                                                  │
│    a. @verify-patterns                                    │
│    → Se falhou: corrigir + retry                         │
│                                                             │
│ 7. Registrar ACERTO no progress.md (por teste)           │
│ 8. PERGUNTAR: "Teste verde. Continuar?"                  │
│    → Se NÃO: retornar ao humano                          │
│    → Se SIM: continuar                                    │
│                                                             │
│ 9. ✏️ REMOVER .skip() do próximo teste                  │
│ 10. Voltar ao passo 1                                     │
└─────────────────────────────────────────────────────────────┘
```

### Mensagens ao Humano

| Momento | Mensagem |
|---------|----------|
| Antes de implementar | `"Implementar teste: [nome]?"` |
| Teste já passa | `"Teste já passa. Pular?"` |
| Após Gate verde | `"✅ Teste verde. Continuar?"` |
| Cenário completo | `"✅ Cenário [nome] completo (X/X). Ir para próximo?"` |
| US completa | `"✅ US [ID] completa. Revise e aprove."` |

---

## Ciclo de Execução por Subtask (TDD Tradicional)

```
┌─────────────────────────────────────────────────────────────┐
│  LOOP: Até gate verde (TDD First)                           │
│                                                             │
│  1. CRIAR teste que falha (TDD - RED)                       │
│  2. Executar @tdd-playwright (deve falhar primeiro)        │
│  3. Se teste passou sem implementação: CORRIGIR            │
│  4. Implementar código da subtask                          │
│  5. Executar @tdd-playwright novamente (deve passar)        │
│  6. Se falhou:                                             │
│     - Corrigir o código                                     │
│     - Registrar ERRO no progress.md                         │
│     - Voltar ao passo 5                                     │
│  7. Se verde:                                              │
│     - Executar @verify-patterns                             │
│     - Registrar ACERTO no progress.md                       │
│     - Retornar ao humano para revisão                        │
│     - Aguardar aprovação ou diretrizes                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Uso de Data-Testids do *.spec.docs.md

Ao criar testes ou implementar código, siga os data-testids documentados:

```typescript
// Exemplo de uso em testes
const header = page.locator('[data-testid="header"]');
const logo = page.locator('[data-testid="header-logo"]');
const menu = page.locator('[data-testid="header-desktop-menu"]');
const hamburger = page.locator('[data-testid="hamburger-button"]');
const overlay = page.locator('[data-testid="header-mobile-overlay"]');
```

```tsx
// Exemplo de uso em componentes
<header data-testid="header" className="fixed top-0 w-full h-[80px]">
  <a data-testid="header-logo" href="/">Logo</a>
  <nav data-testid="header-desktop-menu">...</nav>
</header>
```

**Convenção de nomenclatura:**
- `{component}-{element}` para elementos específicos (ex: `header-logo`)
- `{element}` para elementos globais (ex: `header`, `hamburger-button`)
- `{component}-{element}-{index}` para listas (ex: `header-nav-0`)

---

## Gate de Validação (TDD First)

**REGRA CRÍTICA**: SEMPRE criar teste que falha ANTES de escrever qualquer código de implementação.

Execute nesta ordem:

### 1. TDD (Playwright) - RED first
```
@tdd-playwright execute tdd da [us-id] subtask [subtask-id] para [nome-da-feature]
```
**PASSO 1**: Execute @tdd-playwright PRIMEIRO - o teste deve FALHAR sem implementação

**PASSO 2**: Se *.spec.docs.md existir, leia os passos de implementação documentados para o cenário atual. Use os data-testids especificados e as referências de Tailwind/React recomendadas.

**PASSO 3**: Implemente o código mínimo para passar

**PASSO 4**: Execute @tdd-playwright novamente - agora deve PASSAR
- Se falhou na etapa 1 (sem código): corrija teste ou aguarde implementação
- Se falhou na etapa 3: corrija código + registre erro + retry

### 2. @verify-patterns (convenções do projeto)
```
@verify-patterns execute verificação para [nome-da-feature] [us-id] subtask [subtask-id]
```
- Verifica convenções, guardrails, arquitetura
- Se falhou: corrija + registre erro + retry

### Se TODOS passaram (verde):
✅ Registre acerto no progress.md
✅ Retorne ao humano: "Subtask [X.Y] verde. Revise e continue."

### Nota sobre CI/CD
Typecheck e Lint são executados pela CI/CD Pipeline a cada push/PR:
- `lint` → ESLint
- `build` → Next.js build (inclui typecheck)
- `test` → Playwright Tests

---

## Progress.md — Formato (por Teste)

```markdown
# Progress: [Nome da Feature]

## US [N]: [Título da US]
**Status:** 🔄 In Progress

### Task [N.X]: [Título da subtask]
**Status:** 🔄 In Progress

### Cenário: [Nome do cenário]
**Status:** 🔄 In Progress (2/8 testes)

#### Testes:
- ✅ [2024-01-15 10:30] Teste 1: "a sidebar deve ser visível"
- ✅ [2024-01-15 10:35] Teste 2: "a sidebar deve ter largura SIDEBAR_WIDTH"
- 🔄 [2024-01-15 10:40] Teste 3: "logo deve aparecer no topo" ← ATUAL
- ⏳ Teste 4: "menu deve exibir NAV_COUNT itens"
- ⏳ Teste 5: "botão premium deve estar visível"
- ⏳ Teste 6: "área de perfil deve estar visível"
- ⏳ Teste 7: "avatar deve estar visível"
- ⏳ Teste 8: "nome do usuário deve ser exibido"

#### Registros:
- ✅ [Acerto] Sidebar implementada com data-testid correto
- ⚠️ Error: "CSS width não aplicado" → Corrigido com inline style

---

## US [M]: [Título da US]
**Status:** 🔄 In Progress

### Task [M.1]: [Título da subtask]
**Status:** 🔄 In Progress

### Cenário: [Nome do cenário]
**Status:** 🔄 In Progress (0/5 testes)

#### Testes:
- 🔄 Teste 1: "..." ← ATUAL
- ⏳ Teste 2: "..."
- ⏳ Teste 3: "..."
- ⏳ Teste 4: "..."
- ⏳ Teste 5: "..."

#### Registros:
- ⚠️ Error: [erro encontrado]
```

---

## Condição de Parada

### Por Cenário:

```typescript
if (await isScenarioComplete(specFile, currentScenario)) {
  // ✅ Cenário completo
  // Registrar no progress.md
  // PERGUNTAR: "Cenário completo. Ir para próximo?"
}
```

### Por Subtarefa:

| Situação | Ação |
|----------|------|
| Próximo teste já passa | Perguntar: "Pular ou implementar?" |
| Próximo teste não existe | Cenário completo ✅ |
| Teste falha após implementação | Corrigir + retry |

### Por US:

Quando TODAS as subtasks e cenários estão completos:

1. Retornar ao humano: `"✅ US [ID] completa. Revise e aprove."`
2. Se humano APPROVA:
   - Mostrar: `git status` e `git diff` dos arquivos modificados
   - Aguardar confirmação: `"Confirma o commit?"`
   - Se confirmado: `git commit`
   - Limpar progress.md
   - ENCERRE o agente
3. Se humano NEGA:
   - Aguardar novas diretrizes

---

## Regras de Ouro

| Regra | Detalhe |
|-------|---------|
| **Aprovação** | Pedir confirmação entre cada teste |
| **Progresso** | Registrar cada teste individualmente no progress.md |
| **Skip** | Remover .skip() do próximo após teste passar |
| **Gate** | @verify-patterns + Playwright devem passar |
| **Encerra** | Só quando US completa + aprovação humana |
| **NUNCA use `task`** | Use @ menção direta para subagents |

---

## Formato Rápido de Referência

```
INÍCIO:
  1. Ler docs globais (uma vez)
  2. Ler *.feature + plan.md + progress.md
  3. Verificar/criar branch
  4. Detectar fluxo: *.spec.ts com skip?

FLUXO COM SKIP (@tdd-generator):
  1. Encontrar próximo teste SEM skip
  2. PERGUNTAR: "Implementar teste: [nome]?"
  3. Se teste já passa: PERGUNTAR "Pular?"
  4. Implementar código mínimo
  5. Executar teste
  6. GATE: @verify-patterns
  7. Registrar acerto no progress.md (por teste)
  8. PERGUNTAR: "Teste verde. Continuar?"
  9. Ativar próximo teste (.skip → test)
  10. Voltar ao passo 1

FLUXO TRADICIONAL (@tdd-playwright):
  1. @tdd-playwright: criar teste que FALHA (RED)
  2. Implementar código mínimo
  3. @tdd-playwright: teste deve PASSAR (GREEN)
  4. @verify-patterns: verificar padrões
  5. Se falhou: corrigir + registrar erro + retry
  6. Se verde: PERGUNTAR + retornar ao humano

US COMPLETA + APROVADO:
  1. Mostrar git status + git diff
  2. PERGUNTAR: "Confirma o commit?"
  3. Se sim: git commit
  4. Limpar progress.md
  5. ENCERRAR
```
