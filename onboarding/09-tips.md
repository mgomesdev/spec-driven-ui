# Dicas e Boas Práticas: Acelere Seu Aprendizado

## Erros Comuns e Como Evitá-los

### 1. Implementar Antes de Testar

```typescript
❌ ERRADO
─────────────────────────────────────────
1. Escreve código
2. "Acho que tá funcionando"
3. Não tem teste
4. Refatorou? Quebrou algo? Descobriu depois.

✅ CERTO
─────────────────────────────────────────
1. Escreve teste que falha (RED)
2. Escreve código mínimo (GREEN)
3. Teste passou
4. Commita com confiança
```

---

### 2. Esquecer de Atualizar Tags

```typescript
❌ ERRADO
─────────────────────────────────────────
// *.feature
@desktop @pending  // Esqueceu de mudar!
Scenario: Logo click navigates to home
  Given I am on the "/about" page
  ...
}

// Código está pronto mas tag diz @pending
// Confusão no time!

✅ CERTO
─────────────────────────────────────────
// Depois que passar:
// *.feature
@desktop @done  // Atualizado!
Scenario: Logo click navigates to home
  ...
}
```

---

### 3. Testar Implementação, Não Comportamento

```typescript
❌ ERRADO
─────────────────────────────────────────
test('Header has correct className', async ({ page }) => {
  const header = await page.locator('header');
  await expect(header).toHaveClass(/bg-white/);
  // Isso testa CSS, não comportamento!
});

✅ CERTO
─────────────────────────────────────────
test('Logo click navigates to home', async ({ page }) => {
  await page.goto('/about');
  await page.click('[data-testid="header-logo"]');
  await expect(page).toHaveURL('/');
  // Isso testa o que importa pro usuário!
});
```

---

### 4. Não Ler o *.spec.docs.md

```typescript
❌ ERRADO
─────────────────────────────────────────
// "Vou inventar os data-testids!"
await page.click('[data-testid="logo"]');
// Resultado: Teste não passa porque
// o componente usa "header-logo"

✅ CERTO
─────────────────────────────────────────
// Leia *.spec.docs.md primeiro!
const { dataTestids } = require('./spec.docs.md');
await page.click(`[data-testid="${dataTestids.logo}"]`);
// Resultado: Passa porque usou o que foi definido
```

---

## Atalhos Mentais

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    ATALHOS MENTAIS                              │
└─────────────────────────────────────────────────────────────────┘

  Quando pensar:
  ──────────────
  
  "Será que funciona?"
  → Já escreveu o teste?
  
  "Preciso refatorar isso"
  → Os testes ainda passam?
  
  "Não sei por onde começar"
  → Já leu o *.feature?
  
  "Como testo isso?"
  → Given-When-Then
  
  "Está pronto?"
  → Gate verde? progress.md atualizado?
```

---

## Quando Perguntar

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    QUANDO PEDIR AJUDA                          │
└─────────────────────────────────────────────────────────────────┘

  PERGUNTE AGORA:
  ───────────────
  □ Erro que nunca viu antes (google não ajudou)
  □ TDD falhando depois de 30min tentando
  □ Dúvida de arquitetura (onde coloca o código?)
  □ Conflito entre requirement e padrão do projeto
  □ Não entende o que o PO quer dizer

  TENTE PRIMEIRO:
  ───────────────
  □ Erro de digitação
  □ Import faltando
  □ Tag errada
  □ Documentação do módulo
```

---

## Checklist Pré-Commit

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                 ✅ PRONTO PARA COMMITS?                         │
└─────────────────────────────────────────────────────────────────┘

□ Teste criado seguindo *.feature
□ Teste passa com: npx playwright test
□ Padrões verificados: node scripts/pre-commit-validate.js
□ Tipos corretos: npx tsc --noEmit
□ Estilo OK: npx eslint src/
□ progress.md atualizado
□ Branch atual: git branch
□ *.feature atualizado (@pending → @done)

Se TUDO verde → git add . && git commit -m "feat: ..."

🎉 PARABÉNS! Seu código está pronto!
```

---

## Recursos para Aprender Mais

### Documentação
- [Playwright Docs](https://playwright.dev/docs/intro)
- [BDD/Gherkin Reference](https://cucumber.io/docs/gherkin/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Artigos
- [Test-Driven Development by Example](https://www.amazon.com/dp/0321146530)
- [The Phoenix Project](https://www.amazon.com/dp/1942788291) (contexto DevOps)

### No Projeto
- `specs/docs/convencoes-codigo.md`
- `specs/docs/guardrails.md`
- `specs/docs/architecture.md`

---

## Dicas de Produtividade

### 1. Use Autosave
```json
// .vscode/settings.json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

### 2. Configure ESLint no VS Code
```bash
# Extensions
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
```

### 3. Snippets Úteis
```json
// Crie em .vscode/tsx.json
{
  "Playwright Test": {
    "prefix": "test",
    "body": [
      "test('$1', async ({ page }) => {",
      "  $2",
      "});"
    ]
  }
}
```

---

## Celebre Suas Vitórias!

```ascii
┌─────────────────────────────────────────────────────────────────┐
│                    VOCÊ FEZ ISSO!                               │
└─────────────────────────────────────────────────────────────────┘

  ✅ Primeira branch criada?
  🎉承认 - Primeira US implementada?
  🎉承认 - Primeiro PR merged?
  🎉承认 - Ajudou alguém no time?
  
  Cada pequeno passo conta!
  
  Compartilhe suas conquistas no #dev-junior!
```

---

## Próximo Passo

Consulte o glossário → `10-glossario.md`
