# Ciclo de Execução do Subagent

## Visão Geral

O subagent executa cenários BDD em worktree isolada. Opera com ciclo TDD + approval humano.

---

## Pré-requisitos

1. Worktree criada (`feat/[feature]-[tag]`)
2. Cenário identificado no *.feature
3. Cenário com tag `@pending` ou `@in-progress`
4. Instruções do orchestrator

---

## Ciclo Principal

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CICLO TDD + APPROVAL                             │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────────────────┐
    │                                              │
    ▼                                              │
1. PREPARAR                                        │
    │                                              │
    ├─ Ler *.feature na worktree                  │
    ├─ Filtrar cenários pela tag.assignada         │
    ├─ Se cenário @done → RETORNAR (idempotente)  │
    └─ Marcar @in-progress                        │
    │                                              │
    ▼                                              │
2. RED (Teste falha)                               │
    │                                              │
    ├─ Gerar *.spec.ts para o cenário            │
    ├─ Criar página de teste se necessário       │
    ├─ Rodar testes                              │
    └─ Verificar: testes falham (código não existe)│
    │                                              │
    ▼                                              │
3. GREEN (Código funciona)                          │
    │                                              │
    ├─ Implementar código mínimo                  │
    ├─ Rodar testes                              │
    └─ Verificar: testes passam                  │
    │                                              │
    ▼                                              │
4. VALIDAÇÕES                                      │
    │                                              │
    ├─ @verify-patterns                          │
    ├─ Typecheck (npx tsc --noEmit)              │
    └─ Lint (npx eslint)                         │
    │                                              │
    ▼                                              │
5. ATUALIZAR PROGRESS                              │
    │                                              │
    ├─ *.feature: marcar tags corretamente       │
    └─ progress.md: registrar                     │
    │                                              │
    ▼                                              │
6. RETORNO                                         │
    │                                              │
    └─ Retornar ao orchestrator/humano           │
         para aprovação                           │
    │                                              │
    ▼                                              │
┌──────────────────────────────────────────────┐   │
│                   FIM DO CICLO                 │   │
│                                              │   │
│  Aguarda:                                     │   │
│  - Aprovação → @done                         │   │
│  - Rejeição → Corrige + retry (passo 3)       │   │
│  - Interrupção → Salva estado em progress.md  │   │
└──────────────────────────────────────────────┘
```

---

## Detalhamento por Passo

### 1. Preparar

```typescript
async function preparar(cenario: Scenario, worktree: string): Promise<void> {
  // 1.1. Verificar idempotência
  if (cenario.tags.includes('@done')) {
    return { status: 'already_done', message: 'Cenário já completo' };
  }
  
  // 1.2. Atualizar tag para in-progress
  await atualizarTag(cenario.id, '@pending', '@in-progress');
  
  // 1.3. Criar página de teste se necessário
  if (!await paginaTesteExiste(worktree)) {
    await criarPaginaTeste(worktree);
  }
  
  return { status: 'prepared' };
}
```

### 2. RED (Teste Falha)

```bash
# Gerar testes para o cenário
@bdd-generator generate-tests --scenario="Mobile exibe hamburger"

# Resultado: *.spec.ts criado com testes que falham
# Output esperado: "RED - Testes falhando (código não existe)"
```

**Verificação:**
```typescript
const result = await runTests();
if (result.allPassed) {
  // ERRO: Testes não deveriam passar sem implementação
  throw new Error('Testes passaram sem código - corrija o teste');
}
```

### 3. GREEN (Código Funciona)

```bash
# Implementar código mínimo para fazer testes passarem
# (pode ser feito automaticamente ou manualmente)

# Rodar novamente
await runTests();

# Resultado: testes devem passar
```

### 4. Validações

```bash
# 4.1. Verify Patterns
@verify-patterns feature=header scenario="Mobile exibe hamburger"

# 4.2. Typecheck
cd frontend && npx tsc --noEmit

# 4.3. Lint
cd frontend && npx eslint src/
```

**Se alguma falhar:**
```
⚠️ Validação falhou: Typecheck
   Error: Property 'isMenuOpen' does not exist on type...
   
   Corrigindo...
   └─ Adicionado tipo ao componente
```

### 5. Atualizar Progress

```markdown
## progress.md

### @mobile
| Scenario | Status | Testes |
|----------|--------|--------|
| Mobile exibe hamburger | 🔄 In Progress | 3/3 |
```

```markdown
## Cenário: Mobile exibe hamburger
**Status:** ✅ Verde
**Testes:** 3/3 passando
**Validações:** ✅ Verify, ✅ Typecheck, ✅ Lint
```

### 6. Retorno

```
═══════════════════════════════════════════════════════════════════════

📋 Cenário: "Mobile exibe hamburger"
🏷️ Tags: @mobile, @in-progress
📁 Worktree: feat/header-mobile

---

✅ 3/3 testes passando
✅ Verify Patterns: OK
✅ Typecheck: OK
✅ Lint: OK

---

❓ Aprova o cenário "Mobile exibe hamburger"?

[ Aprovar ✅ ] [ Solicitar revisão 🔍 ] [ Modificar ✏️ ]

═══════════════════════════════════════════════════════════════════════
```

---

## Fluxos de Exceção

### Cenário já @done (Idempotência)

```typescript
if (cenario.tags.includes('@done')) {
  return {
    status: 'skipped',
    message: 'Cenário já completo. Nada a fazer.',
    action: 'return_to_orchestrator'
  };
}
```

### Interrupção no Meio

```typescript
// Em caso de interrupção, salvar estado
await atualizarProgress({
  cenario: 'Mobile exibe hamburger',
  status: '@in-progress',
  testes: '2/3',
  ultimoTeste: 'deve fechar ao clicar fora',
  worktree: 'feat/header-mobile'
});
```

### Retomada

```typescript
async function retomar(worktree: string): Promise<void> {
  const progress = await lerProgress(worktree);
  
  if (progress.status === '@in-progress') {
    // Continuar de onde parou
    await continuarTeste(progress.ultimoTeste);
  }
}
```

---

## Output Final

```
═══════════════════════════════════════════════════════════════════════

✅ Cenário "Mobile exibe hamburger" verde

Testes: 3/3 passando
Validações:
  - Verify Patterns ✅
  - Typecheck ✅
  - Lint ✅

Arquivos modificados:
  - src/components/header/header.tsx
  - tests/features/header/header.spec.ts

Próx etapa: Aguardar aprovação humana

═══════════════════════════════════════════════════════════════════════
```
