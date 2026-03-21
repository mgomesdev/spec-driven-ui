# language: pt
@pending @atom @badge
Funcionalidade: Badge
  **pencil_id:** "badge001"

  @pending @smoke
  Cenario: Badge com variant default
    Dado que o componente Badge e renderizado
    Quando tem variant="default"
    Entao deve ter background com cor accent
    E deve ter text color #FF5C00

  @pending @smoke
  Cenario: Badge com variant success
    Dado que o componente Badge e renderizado
    Quando tem variant="success"
    Entao deve ter background com cor success
    E deve ter text color #22C55E

  @pending @smoke
  Cenario: Badge com variant warning
    Dado que o componente Badge e renderizado
    Quando tem variant="warning"
    Entao deve ter background com cor warning

  @pending @smoke
  Cenario: Badge com variant error
    Dado que o componente Badge e renderizado
    Quando tem variant="error"
    Entao deve ter background com cor error
    E deve ter text color #EF4444

  @pending @smoke
  Cenario: Badge com tamanho padrao
    Dado que o componente Badge e renderizado
    Entao deve ter border-radius 4px
    E deve ter padding 4px 8px
    E deve ter font-size 12px
