# Agent Learnings

Sistema de memória institucional do agente sobre erros e acertos durante o desenvolvimento.
**Lido automaticamente a cada nova sessão** — é a prioridade máxima para evitar erros recorrentes.

---

## Arquivos

| Arquivo | Função |
|---------|--------|
| `agent-learnings.json` | Padrões consolidados (comitado) |
| `.opencode/agent-session-log.json` | Buffer da sessão (ZERADO após destilação) |
| `.opencode/scripts/agent-learnings-destiller.ts` | Script do pre-commit |
| `.opencode/agents/agent-learnings-runner/` | Subagente que registra incidents |

---

## Fluxo

```
┌─────────────────────────────────────────────────────────────────┐
│                     Sessão Opencode                              │
├─────────────────────────────────────────────────────────────────┤
│  1. Início: Pai lê agent-learnings.json                         │
│  2. Início: Pai inicia @agent-learnings-runner em paralelo     │
│  3. Durante: Pai envia "@agent-learnings-runner registre..."    │
│  4. Registro: Subagente grava no session-log.json               │
│  5. Commit: Pre-commit hook → destiller → agent-learnings.json  │
│  6. Limpa: session-log.json é ZERADO                            │
└─────────────────────────────────────────────────────────────────┘
```

### Durante a Sessão

O agente pai utiliza `@agent-learnings-runner` para registrar incidents:

```
@agent-learnings-runner registre: "Executei npm run dev sem verificar servidor" categoria: comando_errado
```

O subagente registra no `.opencode/agent-session-log.json` e confirma o registro.

### Ao Fazer Commit

O pre-commit hook executa o destiller:
1. Lê o session-log e agent-learnings
2. Extrai padrões únicos (deduplicação com similaridade > 60%)
3. Atualiza agent-learnings.json
4. ZERA o session-log
5. Adiciona agent-learnings.json ao commit

---

## Formato de Registro

```json
{
  "incidents": [
    {
      "timestamp": "2026-03-17T14:01:00Z",
      "description": "Executei npm run dev sem verificar servidor",
      "category": "comando_errado"
    }
  ]
}
```

---

## Categorias

| Categoria | Valor JSON |
|-----------|------------|
| Comando errado | `comando_errado` |
| Mal-entendido | `mal_entendido` |
| Correção humana | `correcao_humana` |
| Acerto evitou problema | `acerto_evitou_problema` |

---

## O que Registrar

- **Comando errado**: Pasta errada, flags incorretas, comando inválido
- **Mal-entendido**: Interpretou X como Y, precisou clarification
- **Correção humana**: Humano corrigiu algo que fiz errado
- **Acerto evitou problema**: Ao perguntar X, evitei Y

---

## O que NÃO Registrar

- Erros técnicos de código → `progress.md` da feature
- Decisões de design/arquitetura → docs relevantes

---

## Padrões Consolidados

Lidos automaticamente no início de cada sessão — **siga sempre estes padrões**.
