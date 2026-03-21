@pending
Feature: Cards de Métricas Resumidas

  Como usuário, eu quero visualizar 4 cards com métricas-chave para que eu 
  possa ter uma visão rápida do desempenho em tempo real.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: SummaryCards desktop exibe 4 cards em grid
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then os 4 cards de métricas são exibidos em grid
    And o grid é 4 colunas em desktop
    And cada card contém: ícone, label, valor principal, variação percentual

  @pending @mobile @happy
  Scenario: SummaryCards mobile exibe cards empilhados
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then os 4 cards são exibidos em layout de 1 ou 2 colunas
    And cada card contém: ícone, label, valor principal, variação percentual

  @pending @desktop @happy
  Scenario: Cards exibem métricas corretas com dados mockados
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then card "Receita" exibe valor formatado em Real (R$)
    And card "Usuários Ativos" exibe número formatado com separador de milhar
    And card "Taxa de Conversão" exibe valor com símbolo de porcentagem
    And card "Ticket Médio" exibe valor formatado em Real (R$)

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: Cards aplicam dark theme corretamente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o background de cada card é bg-secondary (#141417)
    And texto principal é branco (#FFFFFF)
    And texto secundário (label) é text-secondary (#A1A1AA)

  @pending @desktop @style
  Scenario: Hover state com borda accent
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre um card
    When o hover é ativado
    Then aparece borda em cor accent (#FF5C00)

  @pending @desktop @style
  Scenario: Variação positiva em verde e negativa em vermelho
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then variação positiva exibe cor success (#22C55E)
    And variação negativa exibe cor error (#EF4444)
    And o símbolo de seta indica direção (↑/↓)

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Deve haver exatamente 4 cards de métricas
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then exatamente 4 cards são renderizados
    And menos ou mais indica erro

  @pending @desktop @rule
  Scenario: Cada card deve ter todos os elementos obrigatórios
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then cada card tem ícone visível
    And cada card tem label descritivo
    And cada card tem valor principal formatado
    And cada card tem variação percentual com cor

  @pending @desktop @rule
  Scenario: Valor da receita deve ser exibido em formato monetário
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o valor da receita é formatado como R$ X.XXX,XX
    And usa separador de milhar e decimal brasileiro

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido em card não causa ações duplicadas
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre um card
    When o usuário clica 3x rapidamente
    Then a ação ocorre apenas uma vez
    And o callback onMetricClick é chamado apenas uma vez

  @pending @desktop @defensive
  Scenario: Hover rápido entre cards não causa flickering
    Given que o usuário está em desktop (≥768px)
    When o mouse passa rapidamente por todos os cards
    Then o hover state é consistente em cada card
    And não há flickering visual

  @pending @desktop @defensive
  Scenario: Valor zero ou negativo é exibido corretamente
    Given que o valor da métrica é zero
    When a página carrega
    Then o valor "0" é exibido corretamente
    And a variação é calculada e exibida

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: Cards em estado de loading
    Given que os dados estão carregando
    When a página tenta renderizar os cards
    Then skeleton loader aparece em cada card
    And o layout é preservado

  @pending @state @error
  Scenario: Cards em estado de erro
    Given que houve falha ao carregar dados
    When a página tenta renderizar
    Then mensagem de erro aparece no card afetado
    And outros cards permanecem funcionais

  @pending @state @success
  Scenario: Cards em estado de sucesso ao carregar dados
    Given que os dados foram carregados com sucesso
    When a página renderiza
    Then todos os 4 cards exibem valores
    And animação de entrada aparece

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @MetricCard
  Scenario: Card de métrica renderiza todos os elementos
    Given que a página carrega
    Then o ícone está presente no topo do card
    And o label está presente abaixo do ícone
    And o valor principal está em destaque
    And a variação percentual está no canto inferior

  @pending @component @MetricIcon
  Scenario: Ícones das métricas são exibidos corretamente
    Given que a página carrega
    Then ícone de "dollar" aparece no card Receita
    And ícone de "users" aparece no card Usuários Ativos
    And ícone de "percent" aparece no card Taxa de Conversão
    And ícone de "ticket" aparece no card Ticket Médio

  @pending @component @VariationBadge
  Scenario: Badge de variação exibe cor e seta corretas
    Given que a página carrega
    Then variação positiva tem cor success (#22C55E) e seta ↑
    And variação negativa tem cor error (#EF4444) e seta ↓
