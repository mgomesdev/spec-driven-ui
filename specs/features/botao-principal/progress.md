# Progress: Botão Principal

## Padrões do Projeto

Consulte os documentos globais do projeto:
- `AGENTS.md` — Diretrizes gerais e tecnologias
- `specs/docs/convencoes-codigo.md` — Padrões de código
- `specs/docs/guardrails.md` — Regras obrigatórias
- `specs/docs/padroes-git.md` — Conventional Commits

---

## US-001: Componente Button básico

### Aprendizados

- **Setup de testes:** O projeto usa Playwright para testes E2E. Os testes são escritos em `frontend/tests/features/botao-principal/us-001.spec.ts`
- **Página de teste:** Para testar componentes React, foi necessário criar uma página de teste em `/test-button` que renderiza o componente
- **Critérios de aceitação implementados:**
  - Componente renderiza um botão HTML ✓
  - Suporta texto como children ✓
  - Aceita props de styling via className ✓
  - Funciona com eventos onClick ✓
- **Estrutura do componente:** Segue as convenções do projeto (arrow function, TypeScript, Tailwind CSS)
- **Interface atualizada:** `ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>` com variant e size opcionais

### Arquivos criados/modificados

- `frontend/tests/features/botao-principal/us-001.spec.ts` - Testes
- `frontend/src/app/test-button/page.tsx` - Página de teste
- `frontend/src/components/button/button.tsx` - Componente implementado

---

## US-002: Variantes do Button

### Aprendizados

- **Testes de variantes:** O código já estava implementado com as variantes primary/secondary/ghost no button.tsx
- **Critérios de aceitação verificados:**
  - Variante "primary" com cor de fundo accent (`bg-[--color-accent]`) ✓
  - Variante "secondary" com borda e texto accent (`border`, `border-[--color-accent]`, `text-[--color-accent]`) ✓
  - Variante "ghost" transparente (`bg-transparent`) ✓
  - Hover state visível em todas variantes (`hover:opacity-90`, `hover:opacity-80`, `hover:bg-black/5`) ✓
- **Testes criados:** 6 testes cobrindo todas as variantes e seus estados hover
- **Estilização:** Usando tokens CSS do projeto (`--color-accent`, `--radius-md`)

### Arquivos criados/modificados

- `frontend/tests/features/botao-principal/us-002.spec.ts` - Testes das variantes
- `frontend/src/app/test-button/page.tsx` - Adicionados botões de teste para variantes

---

## US-003: Estados do Button

### Aprendizados

- **Estados implementados:** O código já estava implementado no button.tsx com as classes Tailwind `disabled:opacity-50` e `disabled:cursor-not-allowed`
- **Critérios de aceitação verificados:**
  - Estado disabled com opacity 50% (`disabled:opacity-50`) ✓
  - Cursor not-allowed quando disabled (`disabled:cursor-not-allowed`) ✓
  - Transição suave entre estados (`transition-opacity` na classe base) ✓
- **Testes criados:** 3 testes cobrindo opacity, cursor e transição
- **Tailwind:** Utiliza prefixo `disabled:` para estilizar estados de elementos desabilitados

### Arquivos criados/modificados

- `frontend/tests/features/botao-principal/us-003.spec.ts` - Testes dos estados
- `frontend/src/app/test-button/page.tsx` - Adicionados botões de teste para estados

---

<!-- Padrões adicionais consolidados serão adicionados aqui durante a execução das histórias -->

---
