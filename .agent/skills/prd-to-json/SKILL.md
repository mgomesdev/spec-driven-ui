---
name: PRD to TASKS
description: "Converte PRDs para o formato TASKS.md. Use quando você tiver um PRD existente e precisar convertê-lo para o formato JSON do Ralph. Acionado por: converter este PRD, transformar isto em formato Ralph, criar prd.json a partir disto, json do Ralph."
user-invocable: true
---

# Conversor Ralph PRD

Converte os arquivos PRD existentes para o formato prd.json que o Ralph usa para execução autônoma.

---

## The Job

Pegue um arquivo PRD (arquivo markdown ou texto) e converta-o para `prd.json` no seu diretório ralph.

---

## Formato de saída

```json
{
  "project": "[Nome do Projeto]",
  "branchName": "ralph/[feature-name-kebab-case]",
  "description": "[Descrição do recurso a partir do título/introdução do PRD]",
  "userStories": [
    {
      "id": "US-001",
      "title": "[Título da história]",
      "descriotion": "Como [usuário], eu quero [recurso] para que [benefício]",
      "acceptanceCriteria": [
        "Critério 1",
        "Critério 2",
        "Verificação de tipo aprovada"
      ],
      "proprity": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

---

## Tamanho da história: a regra número um

**Cada história deve ser concluída em UMA iteração do Ralph (uma janela de contexto).**

Ralph cria uma nova instância do Agente de IA a cada iteração, sem se lembrar do trabalho anterior. Se uma história for muito grande, o LLM fica sem contexto antes de terminar e produz código com erros.

### Histórias na medida certa:
- Adicionar uma coluna de banco de dados e uma migração
- Adicionar um componente de interface do usuário a uma página existente
- Atualizar uma ação do servidor com nova lógica
- Adicionar um menu suspenso de filtro a uma lista

### Muito grande (divida estes):
- "Construir todo o painel de controle" - Dividir em: esquema, consultas, componentes de interface do usuário, filtros
- "Adicionar autenticação" - Dividir em: esquema, middleware, interface de login, gerenciamento de sessão
- "Refatorar a API" - Dividir em uma história por endpoint ou padrão.

**Regra geral:** Se você não consegue descrever a mudança em 2 a 3 frases, ela é muito grande.

---

## Ordem das histórias: dependências primeiro

As histórias são executadas em ordem de prioridade. Histórias anteriores não devem depender de histórias posteriores.

**Ordem correta:**
1. Alterações de esquema/banco de dados (migrações)
2. Ações do servidor / lógica de backend
3. Componentes de interface do usuário que utilizam o backend
4. Painéis/visualizações de resumo que agregam dados

**Ordem incorreta:**
1. Componente de interface do usuário (depende de um esquema que ainda não existe)
2. Alteração de esquema

---

Critérios de aceitação: Devem ser verificáveis

Cada critério deve ser algo que Ralph possa VERIFICAR, não algo vago.

### Bons critérios (verificáveis):
- "Adicionar coluna `status` à tabela de tarefas com valor padrão 'pendente'"
- "O menu suspenso de filtro tem as opções: Todos, Ativos, Concluídos"
- "Clicar em excluir exibe uma caixa de diálogo de confirmação"
- "Verificação de tipo aprovada"
- "Testes aprovados"

### Critérios inadequados (vagos):
- "Funciona corretamente"
- "O usuário pode fazer X facilmente"
- "Boa experiência do usuário"
- "Lida com casos extremos"

### Sempre inclua como critério final:
```
"Verificação de tipo aprovada"
```

Para histórias com lógica testável, inclua também:
```
"Testes aprovados"
```

### Para histórias que alteram a interface do usuário, inclua também:
```
"Verificar no navegador usando a skill dev-browser"
```

As funcionalidades do frontend NÃO estão concluídas até que sejam verificadas visualmente. Ralph usará a skill dev-browser para navegar até a página, interagir com a interface do usuário e confirmar se as alterações funcionam.

---

## Regras de Conversão

1. **Cada história de usuário se torna uma entrada JSON**
2. **IDs**: Sequenciais (US-001, US-002, etc.)
3. **Prioridade**: Com base na ordem de dependência e, em seguida, na ordem dos documentos.
4. **Todas as histórias**: `passes: false` e ​​`notes` vazias
5. **branchName**: Derivado do nome da funcionalidade, em formato kebab-case, com o prefixo `ralph/`.
6. **Sempre adicione:** "Verificação de tipo aprovada" aos critérios de aceitação de cada história.

---

## Dividindo PRDs Grandes

Se um PRD tiver funcionalidades grandes, divida-as:

**Original:**
> "Adicionar sistema de notificação ao usuário"

**Dividir em:**
1. US-001: Adicionar tabela de notificações ao banco de dados
2. US-002: Criar serviço de notificação para envio de notificações
3. US-003: Adicionar ícone de sino de notificação ao cabeçalho
4. US-004: Criar painel suspenso de notificação
5. US-005: Adicionar funcionalidade de marcação como lida
6. US-006: Adicionar página de preferências de notificação

Cada uma delas é uma mudança específica que pode ser concluída e verificada de forma independente.

---

## Exemplo

**Entrada PRD:**
```markdown
# Recurso de Status da Tarefa

Adicionar a capacidade de marcar tarefas com diferentes status.

## Requisitos
- Alternar entre pendente/em andamento/concluído na lista de tarefas
- Filtrar lista por status
- Exibir indicador de status em cada tarefa
- Manter o estado no banco de dados
```

**Saída prd.json:**
```json
{
  "project": "TaskApp",
  "branchName": "ralph/task-status",
  "description": "Recurso de Status da Tarefa - Acompanhe o progresso da tarefa com indicadores de status",
  "userStories": [
    {
      "id": "US-001",
      "title": "Adicionar campo de status à tabela de tarefas"
      "description": "Como desenvolvedor, preciso armazenar o status das tarefas no banco de dados."
      "acceptanceCriteria": [
        "Adicionar coluna de status: 'pendente' | 'em andamento' | 'concluído' (padrão 'pendente')"
        "Gerar e executar a migração com sucesso"
        "Verificação de tipo aprovada"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Exibir indicador de status nos cartões de tarefas"
      "description": "Como usuário, quero visualizar o status da tarefa rapidamente."
      "acceptanceCriteria": [
        "Cada cartão de tarefa exibe um indicador de status colorido."
        "Cores do crachá: cinza = pendente, azul = em andamento, verde = concluído"
        "Verificação de tipo aprovada",
        "Verificar no navegador usando a habilidade dev-browser"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-003",
      "title": "Adicionar botão de alternância de status às linhas da lista de tarefas"
      "description": "Como usuário, quero alterar o status da tarefa diretamente da lista."
      "acceptanceCriteria": [
        "Cada linha possui um menu suspenso ou opção de alternância de status."
        "A alteração de status é salva imediatamente."
        "Atualizações da interface do usuário sem recarregar a página"
        "Verificação de tipo aprovada",
        "Verificar no navegador usando a habilidade dev-browser"
      ],
      "priority": 3,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-004",
      "title": "Filtrar tarefas por status",
      "description": "Como usuário, quero filtrar a lista para ver apenas determinados status."
      "acceptanceCriteria": [
        "Filtro suspenso: Todos | Pendentes | Em andamento | Concluído"
        "O filtro persiste nos parâmetros da URL"
        "Verificação de tipo aprovada",
        "Verificar no navegador usando a habilidade dev-browser"
      ],
      "priority": 4,
      "passes": false,
      "notes": ""
    }
  ]
}
```

---

## Arquivando execuções anteriores

**Antes de escrever um novo arquivo prd.json, verifique se já existe um de outra funcionalidade:**

1. Leia o arquivo `prd.json` atual, se existir.
2. Verifique se `branchName` difere do nome da branch da nova funcionalidade.
3. Se diferente E `progress.txt` tiver conteúdo além do cabeçalho:
   - Criar pasta de arquivo: `archive/AAAA-MM-DD-nome-do-recurso/`
   - Copie os arquivos `prd.json` e `progress.txt` atuais para o arquivo compactado.
   - Reinicie o arquivo `progress.txt` com um novo cabeçalho.

**O script ralph.sh lida com isso automaticamente** quando você o executa, mas se você estiver atualizando manualmente o prd.json entre as execuções, faça o arquivamento primeiro.

---

## Lista de verificação antes de salvar

Antes de escrever o arquivo prd.json, verifique:

- [ ] **Execução anterior arquivada** (se o arquivo prd.json existir com um branchName diferente, arquive-o primeiro)
- [ ] Cada história pode ser concluída em uma única iteração (suficientemente pequena)
- [ ] As histórias são ordenadas por dependência (esquema para backend para UI)
- [ ] Todas as histórias têm "Aprovado no Typecheck" como critério
- [ ] As histórias de usuário têm "Verificar no navegador usando a habilidade de navegador de desenvolvedor" como critério
- [ ] Os critérios de aceitação são verificáveis ​​(não vagos)
- [ ] Nenhuma história depende de uma história posterior