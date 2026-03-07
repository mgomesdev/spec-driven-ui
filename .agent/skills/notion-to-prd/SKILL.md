---
name: prd
description: "Gera um Documento de Requisitos do Produto (PRD) para um novo recurso. Use ao planejar um recurso, iniciar um novo projeto ou quando solicitado a criar um PRD. Acionado por: criar um PRD, escrever PRD para, planejar este recurso, requisitos para, especificar."
---

# PRD Generator

Crie documentos de requisitos de produto detalhados, claros, acionáveis ​​e adequados para implementação.

---

## The Job

1. Receba uma descrição da feature do usuário.
2. Faça de 3 a 5 perguntas essenciais para esclarecer dúvidas (com opções identificadas por letras).
3. Gere um PRD estruturado com base nas respostas.
4. Salve em `specs/features/[nome-da-feature]/PRD.md`

**Importante:** NÃO inicie a implementação. Apenas crie o PRD (Product Requirements Document).

---

Etapa 1: Esclarecendo dúvidas

Faça apenas perguntas críticas quando a pergunta inicial for ambígua ou genérica. Concentre-se em:

- **Problema/Objetivo:** Que problema isso resolve?
- **Funcionalidade principal:** Quais são as ações principais?
- **Âmbito de aplicação/Limites:** O que NÃO deve fazer?
**Critérios de sucesso:** Como saberemos que foi concluído?

### Formate as perguntas assim:

```
1. Qual é o objetivo principal desta funcionalidade?
   A. Melhorar a experiência de integração do usuário
   B. Aumentar a retenção de usuários
   C. Reduzir o ônus do suporte
   D. Outro: [especifique]

2. Quem é o usuário-alvo?
   A. Somente para novos usuários
   B. Somente para usuários existentes
   C. Todos os usuários
   D. Somente para usuários administradores

3. Qual é o escopo?
   A. Versão mínima viável
   B. Implementação completa
   C. Apenas o backend/API
   D. Apenas a interface do usuário
```

Isso permite que os usuários respondam com "1A, 2C, 3B" para uma iteração rápida. Lembre-se de recuar as opções.

---

Etapa 2: Estrutura PRD

Gere o PRD com estas seções:

### 1. Introdução/Visão Geral
Breve descrição da funcionalidade e do problema que ela resolve.

### 2. Objetivos
Objetivos específicos e mensuráveis ​​(lista com marcadores).

### 3. Histórias de Usuário
Cada história precisa de:
- **Título:** Nome descritivo curto
- **Descrição:** "Como [usuário], eu quero [recurso] para que [benefício]"
**Critérios de Aceitação:** Lista de verificação do que significa "concluído".

Cada história deve ser pequena o suficiente para ser implementada em uma única sessão focada.

**Formato:**
```markdown
### US-001: [Título]
**Descrição:** Como [usuário], eu quero [recurso] para que [benefício].

**Critérios de aceitação:**
- [ ] Critério específico verificável
- [ ] Outro critério
- [ ] Aprovações de verificação de tipo/lint
- [ ] **[Somente histórias de UI]** Verifique no navegador usando a dev-browser skill
```

**Importante:**
Os critérios de aceitação devem ser verificáveis, não vagos. "Funciona corretamente" é ruim. "O botão exibe uma caixa de diálogo de confirmação antes de excluir" é bom.
- **Para qualquer história com alterações na interface do usuário:** Sempre inclua "Verificar no navegador usando a skill dev-browser" como critério de aceitação. Isso garante a verificação visual do trabalho de front-end.

### 4. Requisitos Funcionais
Lista numerada de funcionalidades específicas:
- "RF-1: O sistema deve permitir que os usuários..."
- "RF-2: Quando um usuário clica em X, o sistema deve..."

Seja explícito e inequívoco.

### 5. Objetivos não relacionados (fora do escopo)
O que este recurso NÃO incluirá. Essencial para o gerenciamento do escopo.

### 6. Considerações de projeto (opcional)
- Requisitos de UI/UX
- Link para os modelos, se disponíveis
- Componentes existentes relevantes para reutilização

### 7. Considerações Técnicas (Opcional)
- Restrições ou dependências conhecidas
- Pontos de integração com sistemas existentes
- Requisitos de desempenho

### 8. Métricas de Sucesso
Como será medido o sucesso?
- "Reduzir o tempo para concluir X em 50%"
- "Aumentar a taxa de conversão em 10%"

### 9. Questões em aberto
Ainda há dúvidas ou áreas que precisam de esclarecimento?

---

## Escrita para Desenvolvedores Juniores

O leitor do PRD pode ser um desenvolvedor júnior ou um agente de IA. Portanto:

- Seja explícito e inequívoco
- Evite jargões ou explique-os.
- Forneça detalhes suficientes para que se possa compreender o propósito e a lógica central.
- Números necessários para facilitar a referência
- Utilize exemplos concretos quando forem úteis.

---

## Saída

- **Formato:** Markdown (`.md`)
- **Localização:** `specs/features/[nome-do-recurso]/PRD.md`
- **Nome do arquivo:** `PRD.md` (minúsculas)

---

## Exemplo PRD

```markdown
# PRD: Sistema de Priorização de Tarefas

## Introdução

Adicione níveis de prioridade às tarefas para que os usuários possam se concentrar no que é mais importante. As tarefas podem ser marcadas como de alta, média ou baixa prioridade, com indicadores visuais e filtros para ajudar os usuários a gerenciar sua carga de trabalho com eficiência.

## Metas

- Permitir atribuir prioridade (alta/média/baixa) a qualquer tarefa
- Proporcione uma diferenciação visual clara entre os níveis de prioridade.
- Ativar filtragem e classificação por prioridade
- Definir novas tarefas como prioridade média por padrão.

## Histórias de Usuário

### US-001: Adicionar campo de prioridade ao banco de dados
**Descrição:** Como desenvolvedor, preciso armazenar a prioridade das tarefas para que ela persista entre as sessões.

**Critérios de aceitação:**
- [ ] Adicionar coluna de prioridade à tabela de tarefas: 'alta' | 'média' | 'baixa' (padrão 'média')
- [ ] Gerar e executar a migração com sucesso
- [ ] Verificação de tipo aprovada

### US-002: Exibir indicador de prioridade nos cartões de tarefa
**Descrição:** Como usuário, quero visualizar a prioridade das tarefas rapidamente para saber o que precisa de atenção primeiro.

**Critérios de aceitação:**
- [ ] Cada cartão de tarefa mostra um indicador de prioridade colorido (vermelho = alta, amarelo = média, cinza = baixa)
- [ ] Prioridade visível sem passar o cursor ou clicar
- [ ] Verificação de tipo aprovada
- [ ] Verifique no navegador usando a habilidade de navegador de desenvolvedor

### US-003: Adicionar seletor de prioridade à edição de tarefas
**Descrição:** Como usuário, desejo alterar a prioridade de uma tarefa ao editá-la.

**Critérios de aceitação:**
- [ ] Menu suspenso de prioridade no modal de edição de tarefas
- [ ] Mostra a prioridade atual como selecionada
- [ ] Salva imediatamente ao alterar a seleção
- [ ] Verificação de tipo aprovada
- [ ] Verifique no navegador usando a habilidade de navegador de desenvolvedor

### US-004: Filtrar tarefas por prioridade
**Descrição:** Como usuário, desejo filtrar a lista de tarefas para visualizar apenas os itens de alta prioridade quando estiver em foco.

**Critérios de aceitação:**
- [ ] Menu suspenso de filtro com as opções: Todas | Alta | Média | Baixa
- [ ] O filtro persiste nos parâmetros da URL
- [ ] Mensagem de estado vazia quando nenhuma tarefa corresponde ao filtro
- [ ] Verificação de tipo aprovada
- [ ] Verifique no navegador usando a habilidade de navegador de desenvolvedor

## Requisitos Funcionais

- RF-1: Adicionar o campo `prioridade` à tabela de tarefas ('alta' | 'média' | 'baixa', padrão 'média')
- RF-2: Exibir um crachá de prioridade colorido em cada cartão de tarefa.
- RF-3: Incluir seletor de prioridade no modal de edição de tarefas
- RF-4: Adicionar menu suspenso de filtro de prioridade ao cabeçalho da lista de tarefas
- RF-5: Classificar por prioridade dentro de cada coluna de status (alta a média a baixa)

## Não-Objetivos

- Sem notificações ou lembretes baseados em prioridade
- Não há atribuição automática de prioridade com base na data de vencimento.
- Sem herança de prioridade para subtarefas

## Considerações Técnicas

- Reutilize o componente de crachá existente com variantes de cor.
- Estado do filtro gerenciado por meio de parâmetros de pesquisa de URL
- Prioridade armazenada no banco de dados, não calculada.

## Métricas de Sucesso

- Os usuários podem alterar a prioridade em menos de 2 cliques.
- Tarefas de alta prioridade imediatamente visíveis no topo das listas
- Sem regressão no desempenho da lista de tarefas

## Questões em aberto

- A prioridade deve influenciar a ordem das tarefas dentro de uma coluna?
- Devemos adicionar atalhos de teclado para alterações de prioridade?
```

---

## Lista de verificação

Antes de salvar o PRD:

- [ ] Fez perguntas de esclarecimento com opções identificadas por letras.
- [ ] Respostas do usuário incorporadas
- [ ] As histórias de usuário são pequenas e específicas
- [ ] Os requisitos funcionais são numerados e inequívocos
- [ ] A seção de objetivos não definidos estabelece limites claros
- [ ] Salvo em `specs/features/[nome-da-funcionalidade]/PRD.md`