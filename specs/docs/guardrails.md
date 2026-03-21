# Guardrails

## Carregamento de Arquivos Externos

> **CRÍTICO**: Quando encontrar uma referência de arquivo (ex: `@specs/docs/arquitecture.md`), use sua ferramenta de leitura para carregá-lo sob demanda. Eles são relevantes para a TAREFA ESPECÍFICA em questão.

### Instruções

- NÃO carregue todas as referências preventivamente — use lazy loading baseado na necessidade real
- Quando carregado, trate o conteúdo como instruções obrigatórias que sobrepõem os padrões
- Siga referências recursivamente quando necessário

---

## Antipadrões a Evitar

| # | Regra |
|---|-------|
| 1 | Não implemente nada sem passar pelo fluxo research → plan → tasks |
| 2 | Não invente contratos de API — consulte o `plan.md` |
| 3 | Não refatore código fora do escopo da história atual |
| 4 | Não crie arquivos desnecessários |

---