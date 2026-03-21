# language: pt
@pending @molecule @banner
Funcionalidade: Banner
  **pencil_id:** "banner001"

  @pending @smoke
  Cenario: Banner com estilo padrao
    Dado que o componente Banner e renderizado
    Entao deve ter background #1A1A1D
    E deve ter border-radius 10px
    E deve ter padding 14px vertical, 16px horizontal
    E deve ter border 1px solid

  @pending @smoke
  Cenario: Banner com tipo info
    Dado que o componente Banner e renderizado
    Quando type e "info"
    Entao deve exibir icone de info
    E deve ter cor accent

  @pending @smoke
  Cenario: Banner dismissible
    Dado que o componente Banner e renderizado
    Quando dismissible e true
    Entao deve exibir botao de fechar
    E click no fechar deve chamar onDismiss

  @pending @smoke
  Cenario: Banner fechar com animacao
    Dado que o componente Banner e renderizado
    Quando onDismiss chamado
    Entao deve ter animacao de saida
    E deve desaparecer
