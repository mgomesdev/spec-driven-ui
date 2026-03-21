@pending
Feature: Seção de Gráficos

  Como usuário, eu quero visualizar gráficos interativos para que eu possa 
  analisar tendências e padrões nos dados.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: ChartSection desktop exibe área reservada com título
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a seção de gráfico exibe título "Gráfico de Desempenho"
    And a área do gráfico tem background bg-secondary (#141417)
    And há borda sutil para delimitação visual
    And a seção segue estilo dark theme consistente

  @pending @mobile @happy
  Scenario: ChartSection mobile exibe área adaptada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then a seção de gráfico ocupa largura total
    And o título é exibido
    And a área do gráfico é proporcional

  @pending @desktop @happy
  Scenario: ChartSection exibe placeholder ou mock de gráfico
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then área de placeholder é visível
    And dados mockados são exibidos (quando implementado)

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: ChartSection aplica dark theme corretamente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o background é bg-secondary (#141417)
    And título usa cor branca (#FFFFFF)
    And bordas são sutis (rgba)

  @pending @desktop @style
  Scenario: ChartSection tem dimensões adequadas
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then a altura da seção é HEIGHT_CHART pixels
    And o padding interno é PADDING_LARGE pixels

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Título do gráfico deve ser exibido
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o título "Gráfico de Desempenho" ou similar é exibido
    And o título está posicionado no topo da seção

  @pending @desktop @rule
  Scenario: Área do gráfico deve ter delimitação visual
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then a área do gráfico tem borda sutil
    Or tem background diferenciado para delimitar

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Resize da janela não quebra área do gráfico
    Given que o usuário está em desktop (≥768px)
    And o gráfico está renderizado
    When o usuário redimensiona a janela
    Then a área do gráfico se adapta
    And não há overflow ou clipping indesejado

  @pending @desktop @defensive
  Scenario: Dados vazios não causam erro
    Given que não há dados para exibir
    When a seção é renderizada
    Then mensagem de "sem dados" é exibida
    And não há erro ou crash

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: ChartSection em estado de loading
    Given que os dados estão carregando
    When a seção é renderizada
    Then skeleton ou spinner aparece na área do gráfico
    And o título permanece visível

  @pending @state @error
  Scenario: ChartSection em estado de erro
    Given que houve falha ao carregar dados
    When a seção é renderizada
    Then mensagem de erro é exibida
    And usuário pode tentar novamente

  @pending @state @success
  Scenario: ChartSection em estado de sucesso
    Given que os dados foram carregados
    When a seção é renderizada
    Then o gráfico é exibido com dados mockados
    And animação de entrada aparece

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @ChartTitle
  Scenario: Título do gráfico é renderizado corretamente
    Given que a página carrega
    Then o título está presente no topo da seção
    And usa fonte e tamanho adequados
    And cor branca (#FFFFFF)

  @pending @component @ChartArea
  Scenario: Área do gráfico tem styling adequado
    Given que a página carrega
    Then a área tem background bg-secondary
    And tem borda sutil
    And tem dimensões adequadas
