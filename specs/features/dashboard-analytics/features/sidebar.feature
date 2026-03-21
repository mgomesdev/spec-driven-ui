@pending
Feature: Sidebar de Navegação

  Como usuário logado, eu quero visualizar uma sidebar com navegação consistente 
  para que eu possa acessar diferentes seções do dashboard de forma rápida e intuitiva.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: Sidebar desktop exibe estrutura completa
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a sidebar tem largura de SIDEBAR_WIDTH pixels
    And está posicionada no lado esquerdo da tela
    And o logo da empresa aparece no topo da sidebar
    And o menu de navegação exibe NAV_COUNT itens: Dashboard, Analytics, Reports, Settings
    And o botão de upgrade premium está visível
    And a área de perfil do usuário aparece no final da sidebar com avatar e nome

  @pending @mobile @happy
  Scenario: Sidebar mobile inicia colapsada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then a sidebar está oculta por padrão
    And o botão hamburger aparece no canto superior esquerdo

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: Sidebar aplica dark theme corretamente
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then o background da sidebar é bg-primary (#0A0A0B)
    And elementos interativos usam cor accent (#FF5C00) no hover

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Menu deve exibir exatamente NAV_COUNT itens de navegação
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then o menu de navegação exibe exatamente NAV_COUNT itens
    And os itens são: Dashboard, Analytics, Reports, Settings
    And qualquer quantidade diferente indica erro

  @pending @desktop @rule
  Scenario: Sidebar width deve ser exatamente SIDEBAR_WIDTH pixels
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a sidebar tem largura de SIDEBAR_WIDTH pixels
    And o conteúdo principal se ajusta ao restante da tela

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @mobile @defensive
  Scenario: Toggle rápido do hamburger não causa estados inconsistentes
    Given que o usuário está em mobile (<768px)
    And o menu está fechado
    When o usuário clica 3x rapidamente no botão hamburger
    Then o overlay abre apenas uma vez
    And o estado final do menu é consistente
    And não há flickering ou animação duplicada

  @pending @mobile @defensive
  Scenario: Navegação rápida entre itens não causa ghost clicks
    Given que o usuário está em mobile (<768px)
    And o menu está aberto
    When o usuário clica rapidamente em múltiplos itens do menu
    Then apenas o último item clicado é navegado
    And não há navegação duplicada

  @pending @desktop @defensive
  Scenario: Resize da janela não quebra layout da sidebar
    Given que o usuário está em desktop (≥768px)
    And a sidebar está visível
    When o usuário redimensiona a janela para BREAKPOINT pixels (768px)
    Then a sidebar colapsa para mobile
    And o conteúdo se ajusta corretamente

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: Sidebar em estado de loading durante navegação
    Given que o usuário está na página do dashboard
    When o usuário clica em um item do menu
    Then indicador de loading aparece brevemente
    And a página destino é carregada

  @pending @state @error
  Scenario: Sidebar preserva estado quando há erro de navegação
    Given que o usuário está na página do dashboard
    When há falha ao carregar a página destino
    Then a sidebar permanece visível e interativa
    And o usuário pode tentar navegar novamente

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @Logo
  Scenario: Logo da empresa renderiza corretamente no topo da sidebar
    Given que a página do dashboard carrega
    Then o logo aparece no topo da sidebar
    And está alinhado centralmente
    And mantém proporções corretas em diferentes resoluções

  @pending @component @ProfileArea
  Scenario: Área de perfil do usuário exibe avatar e nome
    Given que a página do dashboard carrega
    Then o avatar do usuário está visível
    And o nome do usuário é exibido abaixo do avatar
    And a área está posicionada no final da sidebar

  @pending @component @PremiumButton
  Scenario: Botão de upgrade premium está visível e estilizado
    Given que a página do dashboard carrega
    Then o botão "Upgrade to Premium" está visível
    And usa a cor accent (#FF5C00) como background
    And está posicionado acima da área de perfil
