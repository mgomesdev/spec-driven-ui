# Progress: Button (Atom)

---

## Padrões do Projeto

- Testes E2E não devem ter comentários `//` - violam o guardrail
- Descrições de testes (`test('descrição')`) são necessárias para Playwright e não são consideradas comentários
- Verify-patterns deve verificar comentários em arquivos `.spec.ts`
- Componentes simples devem ter tipos no mesmo arquivo

---

## [2026-03-16] - Feature Button

**O que foi implementado:**
- Componente Button com variantes (primary, secondary, outline, ghost, danger), tamanhos (sm, md, lg) e estados (disabled, loading)
- Tipos ButtonVariant, ButtonSize e ButtonProps definidos no mesmo arquivo
- Página de teste em /test-button
- Testes E2E com Playwright (10 testes)

**Arquivos:**
- `frontend/src/components/atoms/button/button.tsx`
- `frontend/src/app/test-button/page.tsx`
- `frontend/tests/features/button/us-001.spec.ts`

**Aprendizados:**
- Fluxo TDD: teste falha → código passa → verify-patterns → commit
- Guardrail "sem comentários" aplica-se também a arquivos de teste
- Verificar padrões após cada implementação

**Commits:**
- `d9c8fb8` - feat(button): implementa componente Button com TDD
- `193dd72` - fix(tests): remove comentários de arquivos de teste

---
