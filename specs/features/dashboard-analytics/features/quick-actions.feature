@pending
Feature: Ações Rápidas

  Como usuário, eu quero acessar ações rápidas para que eu possa executar 
  tarefas frequentes sem navegar por múltiplos menus.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: QuickActions desktop exibe grid de 4 ações
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then o grid de ações rápidas contém EXACTLY 4 ações
    And as ações são: Exportar, Novo Relatório, Configurar Alertas, Compartilhar
    And cada ação contém ícone e label
    And o grid é posicionado abaixo dos cards de métricas

  @pending @mobile @happy
  Scenario: QuickActions mobile exibe ações em grid adaptado
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then as 4 ações são exibidas em grid de 2x2 ou 4x1
    And cada ação contém ícone e label
    And o texto permanece legível

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: QuickActions aplica dark theme consistente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then cada card de ação tem background bg-secondary (#141417)
    And texto é branco (#FFFFFF)
    And ícones usam cor text-secondary (#A1A1AA)

  @pending @desktop @style
  Scenario: Hover state com elevação e cor accent
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre uma ação
    When o hover é ativado
    Then aparece elevação sutil (shadow)
    And borda ou ícone usa cor accent (#FF5C00)

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Deve haver exatamente 4 ações rápidas
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then exatamente 4 ações são exibidas
    And menos ou mais indica erro

  @pending @desktop @rule
  Scenario: Cada ação deve ter ícone e label
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then cada ação tem ícone visível
    And cada ação tem label descritivo
    And ambos são obrigatórios

  @pending @desktop @rule
  Scenario: Labels das ações devem ser exatamente os especificados
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then os labels são: "Exportar", "Novo Relatório", "Configurar Alertas", "Compartilhar"
    And não há variações de texto

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido não causa ação duplicada
    Given que o usuário está em desktop (≥768px)
    When o usuário clica 3x rapidamente na mesma ação
    Then a ação é executada apenas uma vez
    And não há duplicação de processos

  @pending @desktop @defensive
  Scenario: Hover rápido entre ações não causa estados inconsistentes
    Given que o usuário está em desktop (≥768px)
    When o mouse passa rapidamente por todas as ações
    Then cada ação recebe hover state corretamente
    And não há comportamento inesperado

  @pending @desktop @defensive
  Scenario: Ação desabilitada ignora cliques
    Given que uma ação está no estado desabilitado
    When o usuário clica na ação
    Then nenhum callback é executado
    And feedback visual indica que está desabilitado

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: QuickActions em estado de loading
    Given que o componente está carregando
    When a página renderiza
    Then skeleton loader aparece em cada card de ação
    And o layout é preservado

  @pending @state @success
  Scenario: QuickActions exibe feedback de sucesso após ação
    Given que o usuário executa uma ação
    When a ação é concluída com sucesso
    Then feedback visual de sucesso aparece brevemente
    And a UI retorna ao estado normal

  @pending @state @error
  Scenario: QuickActions exibe feedback de erro
    Given que o usuário executa uma ação
    When a ação falha
    Then mensagem de erro é exibida
    And a ação pode ser repetida

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @ActionCard
  Scenario: Card de ação renderiza ícone e label
    Given que a página carrega
    Then o ícone está centralizado no card
    And o label está abaixo do ícone
    And ambos são clicáveis

  @pending @component @ActionIcon
  Scenario: Ícones correspondentes às ações são exibidos
    Given que a página carrega
    Then "Exportar" tem ícone de download
    And "Novo Relatório" tem ícone de arquivo
    And "Configurar Alertas" tem ícone de sino
    And "Compartilhar" tem ícone de compartilhamento
