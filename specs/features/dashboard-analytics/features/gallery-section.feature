@pending
Feature: Galeria de Imagens

  Como usuário, eu quero visualizar uma galeria de imagens para que eu possa 
  explorar conteúdo visual relacionado às métricas.

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: GallerySection desktop exibe grid responsivo de imagens
    Given que o usuário está em desktop (≥768px)
    When a página do dashboard carrega
    Then o grid de imagens é exibido
    And contém imagens placeholder ou mock
    And o grid é responsivo (adapta número de colunas)

  @pending @mobile @happy
  Scenario: GallerySection mobile exibe grid adaptado
    Given que o usuário está em mobile (<768px)
    When a página do dashboard carrega
    Then o grid exibe 1 ou 2 colunas
    And imagens ocupam largura proporcional
    And texto alternativo é mantido

  @pending @desktop @happy
  Scenario: Hover state com overlay nas imagens
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre uma imagem
    When o hover é ativado
    Then overlay sutil aparece sobre a imagem

  # ═══════════════════════════════════════════════════════════
  # 🎨 ESTILIZAÇÃO - Dark Theme
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @style
  Scenario: GallerySection aplica dark theme consistente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then bordas das imagens são sutis (rgba)
    And background é transparente ou bg-primary

  @pending @desktop @style
  Scenario: Grid tem espaçamento adequado entre imagens
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then gap entre imagens é GAP_MEDIUM pixels
    And não há overlap entre imagens

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Grid deve ser responsivo
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o número de colunas se adapta à largura da tela
    And imagens mantêm aspect ratio

  @pending @desktop @rule
  Scenario: Cada imagem deve ter texto alternativo
    Given que a página carrega
    Then cada imagem tem atributo alt definido
    And textos são descritivos

  @pending @desktop @rule
  Scenario: Imagens devem manter aspect ratio
    Given que a página carrega
    When imagens são redimensionadas
    Then aspect ratio é preservado
    And não há distorção

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @defensive
  Scenario: Imagem quebrada não causa erro na galeria
    Given que uma imagem falha ao carregar
    When a galeria é renderizada
    Then placeholder de imagem quebrada aparece
    And outras imagens continuam funcionando

  @pending @desktop @defensive
  Scenario: Hover rápido não causa flickering no overlay
    Given que o usuário está em desktop (≥768px)
    When o mouse passa rapidamente por múltiplas imagens
    Then overlay aparece/some suavemente
    And não há flickering

  @pending @mobile @defensive
  Scenario: Touch em imagem mostra overlay em mobile
    Given que o usuário está em mobile (<768px)
    When o usuário toca em uma imagem
    Then overlay aparece sobre a imagem
    And第二次 toque fecha overlay ou abre imagem

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: GallerySection em estado de loading
    Given que as imagens estão carregando
    When a galeria é renderizada
    Then skeleton placeholders aparecem
    And layout é preservado

  @pending @state @error
  Scenario: GallerySection em estado de erro
    Given que houve falha ao carregar imagens
    When a galeria tenta renderizar
    Then placeholders de erro aparecem
    And usuário pode tentar novamente

  @pending @state @success
  Scenario: GallerySection exibe imagens após carregamento
    Given que as imagens foram carregadas
    When a galeria é renderizada
    Then todas as imagens são exibidas
    And animação de entrada aparece

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @GalleryImage
  Scenario: Imagem da galeria renderiza corretamente
    Given que a página carrega
    Then a imagem é exibida
    And tem border-radius sutil
    And mantém aspect ratio

  @pending @component @ImageOverlay
  Scenario: Overlay aparece no hover
    Given que o usuário está em desktop (≥768px)
    And o mouse está sobre uma imagem
    When o hover é ativado
    Then overlay semi-transparente aparece
    And pode conter informações adicionais
