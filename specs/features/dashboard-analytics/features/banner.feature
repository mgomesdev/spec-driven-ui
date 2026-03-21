@pending
Feature: Banner de Notificações

  Como usuário, eu quero visualizar banners de notificação para que eu fique 
  informado sobre alertas importantes e atualizações do sistema.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: Banner desktop exibe notificação com cor accent
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then o banner usa background accent (#FF5C00)
    And o conteúdo de notificação é exibido
    And o botão de fechar (X) aparece no canto direito

  @pending @mobile @happy
  Scenario: Banner mobile exibe notificação adaptada
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then o banner ocupa largura total
    And o botão de fechar é acessível
    And o texto é legível

  @pending @desktop @happy
  Scenario: Banner fecha ao clicar no botão X
    Given que o banner está visível
    When o usuário clica no botão X
    Then o banner é fechado
    And desaparece da tela

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: Banner usa cor accent como background
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o background do banner é accent (#FF5C00)
    And texto usa cor que contrasta (branco ou escuro)

  @pending @desktop @style
  Scenario: Botão de fechar é visível e acessível
    Given que o banner está visível
    Then o ícone X está no canto direito
    And tem tamanho adequado para toque
    And tem cor que contrasta com o background

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Banner deve ter conteúdo de notificação
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o banner exibe mensagem: "Nova funcionalidade: Gráficos interativos disponíveis!"
    And o conteúdo é legível

  @pending @desktop @rule
  Scenario: Banner deve ter botão de fechar quando dismissible
    Given que o banner tem dismissible=true
    When a página carrega
    Then o botão X está presente
    And está posicionado no canto direito

  @pending @desktop @rule
  Scenario: Banner não-dismissible não tem botão X
    Given que o banner tem dismissible=false
    When a página carrega
    Then o botão X não aparece
    And o banner permanece fixo

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Clique rápido no X não causa comportamento inesperado
    Given que o banner está visível
    When o usuário clica 3x rapidamente no X
    Then o banner fecha apenas uma vez
    And não há erro ou comportamento estranho

  @pending @desktop @defensive
  Scenario: Banner fechado não reaparece automaticamente
    Given que o usuário fechou o banner
    When a página é recarregada
    Then o banner pode reaparecer (se configurado assim)
    Or permanece fechado (se PreferenceStore indica)

  @pending @desktop @defensive
  Scenario: Clique fora do banner não fecha
    Given que o banner está visível
    When o usuário clica fora do banner
    Then o banner permanece visível
    And apenas o X fecha o banner

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: Banner em estado de entrada (animação)
    Given que o banner deve aparecer
    When a animação inicia
    Then banner aparece com fade-in ou slide-down
    And leva ANIMATION_DURATION milissegundos

  @pending @state @success
  Scenario: Banner em estado de fechado (animação)
    Given que o usuário clicou no X
    When a animação de saída inicia
    Then banner desaparece com fade-out ou slide-up
    And é removido do DOM após animação

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @BannerContent
  Scenario: Conteúdo do banner é renderizado corretamente
    Given que a página carrega
    Then a mensagem é exibida centralmente
    And o texto tem cor que contrasta com background

  @pending @component @CloseButton
  Scenario: Botão de fechar renderiza corretamente
    Given que o banner está visível
    Then o ícone X é visível
    And está posicionado no canto direito
    And é clicável
