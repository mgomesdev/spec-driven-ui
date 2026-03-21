@pending
Feature: Lista com Paginação

  Como usuário, eu quero visualizar uma lista com paginação para que eu possa 
  navegar por grandes volumes de dados de forma organizada.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: StackedList desktop exibe lista com dados mock
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a lista exibe itens de dados mockados
    And os controles de paginação são exibidos
    And o indicador de página atual mostra "Página 1 de X"

  @pending @mobile @happy
  Scenario: StackedList mobile exibe lista adaptada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then a lista é exibida em layout responsivo
    And a paginação é adaptada para mobile

  @pending @desktop @happy
  Scenario: Navegação entre páginas funciona corretamente
    Given que o usuário está na página 1
    When o usuário clica em "Next" ou número "2"
    Then a lista atualiza para exibir itens da página 2
    And o indicador de página atualiza para "Página 2 de X"

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: StackedList aplica dark theme corretamente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then cada item da lista tem background bg-secondary (#141417)
    And texto é branco (#FFFFFF)
    And bordas sutis separam os itens

  @pending @desktop @style
  Scenario: Hover state nos itens da lista
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre um item
    When o hover é ativado
    Then o item tem background levemente alterado

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Controles de paginação devem estar completos
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then botão "Previous" está presente
    And botão "Next" está presente
    And números de página estão visíveis

  @pending @desktop @rule
  Scenario: Indicador de página atual deve ser preciso
    Given que o usuário está na página X de Y
    When a página é renderizada
    Then o indicador mostra "Página X de Y"
    And reflete a página atual corretamente

  @pending @desktop @rule
  Scenario: Primeira página desabilita botão Previous
    Given que o usuário está na primeira página
    When a página carrega
    Then o botão "Previous" está desabilitado
    And o botão "Next" está habilitado

  @pending @desktop @rule
  Scenario: Última página desabilita botão Next
    Given que o usuário está na última página
    When a página carrega
    Then o botão "Next" está desabilitado
    And o botão "Previous" está habilitado

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido em paginação não causa navegação duplicada
    Given que o usuário está na página 1
    When o usuário clica 3x rapidamente em "Next"
    Then a navegação ocorre apenas para a página 2
    And não há navegação para página 3 ou 4

  @pending @desktop @defensive
  Scenario: Navegação rápida entre páginas mantém consistência
    Given que o usuário clica rapidamente entre páginas
    When a página atualiza
    Then o indicador de página é sempre consistente
    And os dados exibidos correspondem à página indicada

  @pending @desktop @defensive
  Scenario: Dados da lista não desaparecem durante paginação
    Given que o usuário está navegando entre páginas
    When a página muda
    Then novos itens aparecem
    And não há momento sem dados visíveis (exceto loading)

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: StackedList em estado de loading durante navegação
    Given que o usuário clica em número de página
    When a nova página está carregando
    Then skeleton loader aparece na lista
    And botões de paginação ficam desabilitados

  @pending @state @error
  Scenario: StackedList em estado de erro
    Given que houve falha ao carregar dados da página
    When a página tenta renderizar
    Then mensagem de erro é exibida
    And usuário pode tentar novamente

  @pending @state @success
  Scenario: StackedList exibe novos dados após paginação
    Given que o usuário navegou para nova página
    When os dados são carregados
    Then novos itens são exibidos
    And indicador de página é atualizado

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @ListItem
  Scenario: Item da lista renderiza dados corretamente
    Given que a página carrega
    Then cada item exibe seus dados (mock)
    And o layout é consistente entre itens

  @pending @component @PaginationControls
  Scenario: Controles de paginação renderizam corretamente
    Given que a página carrega
    Then botões Previous e Next são visíveis
    And números de página são clicáveis
    And indicador de página atual é exibido
