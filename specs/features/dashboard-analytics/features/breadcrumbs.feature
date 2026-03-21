@pending
Feature: Breadcrumbs de Navegação

  Como usuário, eu quero visualizar breadcrumbs para que eu saiba minha 
  localização atual dentro da estrutura do dashboard.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: Breadcrumbs exibe caminho correto em desktop
    Given que o usuário está em desktop (≥768px)
    When a página Analytics carrega
    Then os breadcrumbs exibem: Dashboard > Analytics > Overview
    And todos os itens são clicáveis
    And o último item "Overview" está destacado com cor accent (#FF5C00)

  @pending @mobile @happy
  Scenario: Breadcrumbs exibe caminho correto em mobile
    Given que o usuário está em mobile (<768px)
    When a página Analytics carrega
    Then os breadcrumbs exibem: Dashboard > Analytics > Overview
    And o texto é truncado com ellipsis se necessário
    And cada item permanece clicável

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: Breadcrumbs aplica dark theme consistente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o background dos breadcrumbs é bg-secondary (#141417)
    And texto dos itens é branco (#FFFFFF)
    And separadores ">" são em cor text-secondary

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Último item do breadcrumb deve estar destacado
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o item "Overview" é o último e único item ativo
    And o item ativo usa cor accent (#FF5C00)
    And os itens anteriores usam cor text-secondary

  @pending @desktop @rule
  Scenario: Breadcrumbs deve refletir hierarquia de navegação correta
    Given que o usuário está na página Analytics
    When os breadcrumbs são renderizados
    Then o caminho é exatamente: Dashboard > Analytics > Overview
    And a ordem dos itens corresponde à hierarquia

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido em item do breadcrumb não causa navegação duplicada
    Given que o usuário está em desktop (≥768px)
    When o usuário clica 2x rapidamente em um item do breadcrumb
    Then a navegação ocorre apenas uma vez
    And o usuário é redirecionado para a página correta

  @pending @mobile @defensive
  Scenario: Breadcrumbs longo não causa overflow horizontal
    Given que o usuário está em mobile (<768px)
    And o breadcrumb contém CAMINHO_LONGO itens
    When a página carrega
    Then o texto é truncado com ellipsis
    And não há scroll horizontal

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: Breadcrumbs em estado de loading durante navegação
    Given que o usuário clica em um item do breadcrumb
    When a nova página está carregando
    Then o breadcrumb exibe estado de loading no item clicado

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @BreadcrumbItem
  Scenario: Cada item do breadcrumb é um link clicável
    Given que a página carrega
    Then cada item exceto o último é renderizado como link
    And o link tem href válido para navegação
    And o cursor é pointer no hover

  @pending @component @Separator
  Scenario: Separadores entre itens são renderizados corretamente
    Given que a página carrega
    Then o caractere ">" aparece entre os itens
    And o separador não é clicável
    And tem cor text-secondary (#A1A1AA)
