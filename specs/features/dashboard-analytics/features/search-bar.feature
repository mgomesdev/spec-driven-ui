@pending
Feature: Barra de Busca Centralizada

  Como usuário, eu quero acessar uma barra de busca centralizada para que eu 
  possa encontrar rapidamente informações específicas no dashboard.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: SearchBar desktop exibe estrutura completa
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then a barra de busca está centralizada no header
    And o placeholder "Search..." é visível
    And o ícone de lupa aparece à esquerda do campo
    And o campo tem background bg-secondary (#141417)

  @pending @mobile @happy
  Scenario: SearchBar mobile exibe estrutura adaptada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then a barra de busca está visível no header
    And ocupa a largura disponível com padding adequado
    And o placeholder "Search..." permanece visível

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: SearchBar aplica borda sutil com focus glow
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o campo tem borda sutil (1px, rgba)
    When o campo recebe focus
    Then aparece glow em cor accent (#FF5C00)

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: SearchBar deve estar centralizada no header
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then a barra de busca está posicionada no centro do header
    And mantém centralização em diferentes larguras de tela

  @pending @desktop @rule
  Scenario: Placeholder deve exibir texto padrão "Search..."
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o placeholder do campo é exatamente "Search..."
    And o placeholder desaparece ao digitar

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Input rápido não causa comportamento inesperado
    Given que o usuário está em desktop (≥768px)
    And o campo de busca está vazio
    When o usuário digita rapidamente texto longo
    Then o texto é inserido corretamente
    And não há perda de caracteres

  @pending @desktop @defensive
  Scenario: Caracteres especiais não causam erro
    Given que o usuário está em desktop (≥768px)
    When o usuário digita caracteres especiais: !@#$%^&*()
    Then os caracteres são aceitos normalmente
    And não há erro ou crash

  @pending @mobile @defensive
  Scenario: Teclado virtual não oculta a barra de busca
    Given que o usuário está em mobile (<768px)
    When o usuário toca no campo de busca
    Then o teclado virtual aparece
    And a barra de busca permanece visível
    And a página faz scroll se necessário

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: SearchBar em estado de loading durante busca
    Given que o usuário digitou um termo de busca
    When o usuário pressiona Enter
    Then indicador de loading aparece no campo
    And o campo fica desabilitado brevemente

  @pending @state @error
  Scenario: SearchBar exibe estado de erro em busca inválida
    Given que o usuário digitou um termo inválido
    When o usuário pressiona Enter
    Then mensagem de erro é exibida abaixo do campo
    And o campo permanece funcional para nova tentativa

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @SearchInput
  Scenario: Campo de input da busca renderiza corretamente
    Given que a página carrega
    Then o input tem altura de INPUT_HEIGHT pixels
    And border-radius de BORDER_RADIUS pixels
    And background bg-secondary (#141417)

  @pending @component @SearchIcon
  Scenario: Ícone de lupa aparece à esquerda do campo
    Given que a página carrega
    Then o ícone de lupa é visível à esquerda
    And tem cor text-secondary (#A1A1AA)
    And está centralizado verticalmente no campo
