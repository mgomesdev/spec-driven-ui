@pending
Feature: Tabela de Dados

  Como usuário, eu quero visualizar uma tabela com dados detalhados para que 
  eu possa analisar informações específicas com precisão.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: TableSection desktop exibe tabela com dados mock
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a tabela tem header com colunas: Nome, Status, Data, Valor, Ações
    And a tabela tem body com linhas de dados
    And dados são mockados conforme especificação

  @pending @mobile @happy
  Scenario: TableSection mobile exibe tabela adaptada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then a tabela é responsiva
    And scroll horizontal está disponível se necessário
    Or colunas menos importantes são ocultadas

  @pending @desktop @happy
  Scenario: Status dos itens é exibido com badges
    Given que o usuário está em desktop (≥768px)
    When a tabela carrega
    Then status "active" exibe badge verde
    And status "pending" exibe badge amarelo
    And status "inactive" exibe badge vermelho

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: TableSection aplica dark theme corretamente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header da tabela tem background bg-primary (#0A0A0B)
    And o body tem background bg-secondary (#141417)
    And texto é branco (#FFFFFF)

  @pending @desktop @style
  Scenario: Hover state nas linhas da tabela
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre uma linha
    When o hover é ativado
    Then a linha tem background levemente alterado
    And indica seleção visual

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Tabela deve ter exatamente as colunas especificadas
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then as colunas são: Nome, Status, Data, Valor, Ações
    And nesta ordem específica
    And não há colunas extras ou faltantes

  @pending @desktop @rule
  Scenario: Header da tabela deve ser fixed durante scroll
    Given que o usuário está em desktop (≥768px)
    And a tabela tem scroll vertical
    When o usuário faz scroll
    Then o header permanece visível no topo
    And body faz scroll normalmente

  @pending @desktop @rule
  Scenario: Scroll horizontal deve estar disponível se necessário
    Given que a tabela excede a largura do container
    When a página carrega
    Then scroll horizontal é habilitado
    And header e body fazem scroll juntos

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido em linha não causa ação duplicada
    Given que o usuário está em desktop (≥768px)
    When o usuário clica 3x rapidamente em uma linha
    Then o callback onRowClick é chamado apenas uma vez
    And ação ocorre apenas uma vez

  @pending @desktop @defensive
  Scenario: Hover rápido não causa flickering
    Given que o usuário está em desktop (≥768px)
    When o mouse passa rapidamente por múltiplas linhas
    Then cada linha recebe hover state corretamente
    And não há flickering

  @pending @desktop @defensive
  Scenario: Dados vazios mostram mensagem adequada
    Given que não há dados para exibir
    When a tabela é renderizada
    Then mensagem de "sem dados" é exibida
    And não há erro ou tabela vazia

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: TableSection em estado de loading
    Given que os dados estão carregando
    When a tabela é renderizada
    Then skeleton rows aparecem
    And header permanece visível

  @pending @state @error
  Scenario: TableSection em estado de erro
    Given que houve falha ao carregar dados
    When a tabela tenta renderizar
    Then mensagem de erro é exibida
    And usuário pode tentar novamente

  @pending @state @success
  Scenario: TableSection em estado de sucesso
    Given que os dados foram carregados
    When a tabela é renderizada
    Then dados são exibidos corretamente
    And contagem de linhas é exibida

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @TableHeader
  Scenario: Header da tabela renderiza colunas corretamente
    Given que a página carrega
    Then cada coluna tem label
    And header tem background bg-primary (#0A0A0B)
    And texto é branco e bold

  @pending @component @TableRow
  Scenario: Linhas da tabela renderizam dados corretamente
    Given que a página carrega
    Then cada linha exibe: Nome, Status badge, Data, Valor formatado, Ações
    And valores monetários são formatados em R$
    And datas são formatadas corretamente

  @pending @component @StatusBadge
  Scenario: Status badges são coloridos corretamente
    Given que a página carrega
    Then badge "active" tem cor success (#22C55E)
    And badge "pending" tem cor warning (#EAB308)
    And badge "inactive" tem cor error (#EF4444)
