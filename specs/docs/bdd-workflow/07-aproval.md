# Fluxo de Aprovação Humana

## Visão Geral

Aprovação humana é requerida em momentos críticos do ciclo de desenvolvimento:
- Antes de iniciar nova feature
- Ao final de cada cenário
- Antes de fazer merge
- Antes de criar PR

---

## Pontos de Aprovação

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FLUXO COMPLETO                              │
└─────────────────────────────────────────────────────────────────────┘

research.md ──────► plan.md ──────► *.feature ──────► Execução
                      │                 │                 │
                      ▼                 ▼                 ▼
                  APROVAÇÃO       APROVAÇÃO           APROVAÇÃO
                  (PO)            (PO)              (Humano)
                                                              │
                                                              ▼
                                                          Cenário
                                                              │
                                                              ▼
                                                      APROVAÇÃO
                                                      (Humano)
                                                              │
                                                              ▼
                                                        *.feature
                                                        @done
                                                              │
                                                              ▼
                                                         Merge ──► PR
                                                              │
                                                              ▼
                                                         APROVAÇÃO
                                                         (PO)
```

---

## Aprovação: Plan.md

**Quando:** Após @research-to-plan gerar plan.md

**Quem:** Product Owner

**Pergunta:**
```
plan.md gerado para feature "Header"

Resumo:
- 1 componente (Header organism)
- 2 tipos (NavItem, HeaderProps)
- 4 cenários identificados
- Estrutura de arquivos definida

[Aprovar plan.md?] [Revisar] [Modificar]
```

**Se Aprovado:**
- Prossegue para @bdd-generator

**Se Revisar:**
- PO faz revisão
- Dev atualiza plan.md
- Volta para aprovação

---

## Aprovação: *.feature

**Quando:** Após @bdd-generator criar cenários

**Quem:** Product Owner

**Pergunta:**
```
*.feature gerado com 7 cenários

Cenários @desktop (3):
- Header desktop exibe logo e menu
- Hover no menu
- Logo redireciona

Cenários @mobile (3):
- Mobile exibe hamburger
- Mobile abre overlay
- Mobile fecha overlay

Cenários @a11y (1):
- Navegação por Tab

[Aprovar cenários?] [Revisar] [Modificar]
```

**Se Aprovado:**
- Prossegue para worktrees
- Cenários marcados como @pending

**Se Modificar:**
- PO ajusta cenários
- Atualiza *.feature
- Volta para aprovação

---

## Aprovação: Cenário Completo

**Quando:** Subagent retorna após ciclo TDD completo

**Quem:** Revisor (pode ser PO ou dev)

**Formato do Retorno:**
```
═══════════════════════════════════════════════════════════════════════

📋 Cenário: "Mobile exibe hamburger"
🏷️ Tags: @mobile, @in-progress
📁 Worktree: feat/header-mobile

---

✅ Testes: 3/3 passando
   - deve ocultar menu desktop ✓
   - deve exibir hamburger ✓
   - deve ter 3 barras no ícone ✓

✅ Validações:
   - Verify Patterns ✓
   - Typecheck ✓
   - Lint ✓

📝 Notas:
   - Viewport 375x667 usado para mobile
   - Breakpoint 768px confirmado

---

❓ Aprova o cenário "Mobile exibe hamburger"?

[ Aprovar ✅ ] [ Solicitar revisão 🔍 ] [ Modificar ✏️ ]

═══════════════════════════════════════════════════════════════════════
```

### Se Aprovar

```bash
# Orchestrator marca como @done
@orchestrator approve scenario="Mobile exibe hamburger"

# Output:
✅ Cenário marcado como @done
Progresso: 3/7 cenários completos
Próximo cenário pendente: "Hover no menu"
```

### Se Solicitar Revisão

```bash
# Retorna com observações
⚠️ Revisão solicitada:

Observações:
- Cor do hamburger pode melhorar contraste
- Animação parece lenta (300ms)

Ajustes necessários? [ Sim ] [ Não ]
```

### Se Modificar

```bash
⚠️ Modificação solicitada:

- Mudar cor do hamburger de cinza para branco
- Ajustar velocidade da animação

[Confirmar modificação?] → @subagent corrige → volta para aprovação
```

---

## Aprovação: 100% Cenários @done

**Quando:** Todos cenários marcados @done

**Quem:** Revisor

**Pergunta:**
```
═══════════════════════════════════════════════════════════════════════

🎉 Feature "Header" completa!

Progresso: 7/7 cenários ✅

@desktop:
  ✅ Header desktop exibe logo e menu
  ✅ Hover no menu
  ✅ Logo redireciona

@mobile:
  ✅ Mobile exibe hamburger
  ✅ Mobile abre overlay
  ✅ Mobile fecha overlay

@a11y:
  ✅ Navegação por Tab

Testes: 21/21 passando

Próximos passos:
1. Merge das worktrees
2. Testes integrados
3. Criar PR

[Aprovar e fazer merge?] [ Revisar código ] [ Cancelar ]

═══════════════════════════════════════════════════════════════════════
```

---

## Aprovação: PR

**Quando:** Antes de criar Pull Request

**Quem:** PO ou Tech Lead

**Formato:**
```
═══════════════════════════════════════════════════════════════════════

PR: feat/header - Header de Navegação

## Resumo
Adiciona header responsivo com menu desktop e mobile hamburger.

## User Stories
- [x] US-001: Header Desktop
- [x] US-002: Header Mobile
- [x] US-003: Logo Clicável

## Cenários BDD
- [x] 7/7 cenários @done

## Testes
- 21 testes, 21 passando

## Arquivos
- src/components/header/header.tsx
- src/app/test-header/page.tsx
- tests/features/header/header.spec.ts
- specs/features/header/features/header.feature

## Screenshots
[screenshots dos componentes]

[Aprovar PR?] [ Solicitar Changes ] [ Rejeitar ]

═══════════════════════════════════════════════════════════════════════
```

---

## Resumo: Aprovações Necessárias

| # | Momento | Quem | O que |
|---|---------|------|-------|
| 1 | Após research | PO | plan.md |
| 2 | Após BDD | PO | *.feature |
| 3 | Cenário verde | Revisor | Cenário específico |
| 4 | 100% @done | Revisor | Feature completa |
| 5 | PR | PO/Tech Lead | Pull Request |
