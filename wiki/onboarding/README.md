# Onboarding

Bem-vindo(a) ao spec-driven-ui! Este guia te leva do zero à implementação de features.

## ⚠️ Comece Por Aqui

Leia nesta ordem antes de qualquer implementação:

```
1. @specs/docs/guardrails.md      ← REGRAS CRÍTICAS
2. @specs/docs/architecture.md    ← Estrutura do projeto
3. @specs/docs/convencoes-codigo.md ← Como escrever código
4. @specs/docs/padroes-git.md     ← Commits e branches
```

## 🗺️ Mapa de Aprendizado

```
📚 LEITURA OBRIGATÓRIA (em ordem)
│
├── 01-intro.md              🚀 15 min     « Por que spec-driven?
├── 02-fluxo-rpi.md          🔄 20 min     « Fluxo Research→Plan→Implement
├── 03-estrutura-projeto.md  📁 15 min     « Pastas e arquivos
├── 04-bdd-basico.md         🎯 25 min     « Cenários Given-When-Then
├── 05-implementando.md       💻 30 min     « TDD com Playwright
├── 06-gate.md               ✅ 15 min     « Validação automática
├── 07-worktrees.md          🌳 15 min     « Trabalho paralelo
├── 08-comandos.md           ⌨️  15 min     « Referência rápida
├── 09-glossario.md          📖 10 min     « Termos e siglas
└── 10-agents.md             🤖 20 min     « Agentes disponíveis
```

## 🎯 Fluxo Resumido

```
PO/Requisito → RESEARCH → PLAN → *.feature → TDD → CÓDIGO → GATE → PR
```

## Próximos Passos

1. **Leia os guardrails** → `specs/docs/guardrails.md`
2. **Configure o ambiente** → `03-estrutura-projeto.md`
3. **Escolha uma task** → Procure `@pending` em `specs/features/*/features/*.feature`
4. **Implemente** → `05-implementando.md`

## 📁 Onde Encontrar Tudo

| O que precisa | Onde está |
|--------------|-----------|
| Requisitos | `specs/features/[nome]/research.md` |
| Plano técnico | `specs/features/[nome]/plan.md` |
| Cenários BDD | `specs/features/[nome]/features/*.feature` |
| Progresso | `specs/features/[nome]/progress.md` |
| Código | `frontend/src/components/[nome]/` |
| Testes | `frontend/tests/features/[nome]/` |

---

**Vamos começar?** Vá para `01-intro.md`
