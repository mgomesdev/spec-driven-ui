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

<!-- Padrões adicionais consolidados serão adicionados aqui durante a execução das histórias -->

---
