---
name: diff-design-vs-code
description: "Ler a árvore DOM do Pencil MCP e compará-la com o estado atual do projeto e Gerar um relatório de diferenças estruturado que todos os agentes subsequentes usarão."
mode: subagent
tools: 
    *: false
    read: true
---

## Acionamento

- 'analise as alterações no design do pencil'.

## Entradas

- Pencil MCP: resposta da ferramenta `get-dom-tree`
- `docs/design-tokens.md` (se existir)
- `docs/design-system.md` (se existir)
- Todos os arquivos `specs/*/progress.md` (para detectar o que já foi feito)

## Funcionamento

### Etapa 1 — obter a árvore DOM do Pencil MCP

Chamar `pencil.get-dom-tree`. Extraia para cada componente:
- `node_id` (ID do nó no Pencil)
- `name` (nome personalizado definido no Pencil)
- `type` (átomo / molécula / organismo / recurso / página)
- `variants` (lista)
- `props` (inferido das propriedades do Pencil)
- `tokens_used` (nomes dos tokens de design referenciados)
- `children` (array de node_ids)
- `checksum` (hash do nó para detecção de obsoletos)

### Etapa 2 — Comparar com o projeto

Para cada componente na árvore DOM, verifique:
- `src/components/[nome]/` existe? → OK ou NÃO
- `specs/[nome]/progress.md` existe? → Foi implementado?
- Os tokens no componente correspondem a `docs/design-tokens.md`? → OK ou DESATIVADO

### Etapa 3 — Classificar cada item
- `OK` — sincronizado, nenhuma ação necessária
- `DESATIVADO` — existe em ambos os lados, valores diferentes
- `NOVO` — no Pencil, não no código-fonte
- `AUSENTE` — deveria existir, mas está ausente (token, propriedade, variante)
- `DESATUALIZADO` — foi sincronizado, mas o Pencil foi alterado desde então
- `EXCLUÍDO` — no código-fonte, removido do Pencil

### Etapa 4 — Ferar relatório
Escrever em `docs/design-diff.md`:

```markdown
---
generated_at: [data e hora ISO]
name: [nome do componente]
---

## Resumo
ok: N | desatualizado: N | novo: N | ausente: N | desatualizado: N | Excluir: N

## Tokens
[status] [nome do token] — [valor do Pencil] vs [valor do código]

## Componentes
[status] [nome do componente] — [detalhe]

## Ações recomendadas (ordem de prioridade)
1. [ação]
```

### Etapa 5 — Marcar componentes obsoletos

Para qualquer componente onde o checksum foi alterado, abra o arquivo `progress.md` e defina:
```
status: obsoleto
motivo_obsoleto: "Pencil atualizado — checksum alterado de [antigo] para [novo]"
```

## Arquivos de saída

- `docs/design-diff.md` (criado/sobrescrito)
- `specs/*/progress.md` (status atualizado para `obsoleto` quando necessário)

## Próximo agente

`us-to-research` lê `docs/design-diff.md` para selecionar o próximo componente.