# language: pt
@pending @atom @input
Funcionalidade: Input
  **pencil_id:** "input001"

  @pending @smoke
  Cenario: Input com estado padrao
    Dado que o componente Input e renderizado
    Quando state e "default"
    Entao deve ter background #141417
    E deve ter border transparent
    E deve ter border-radius 8px
    E deve ter padding 12px horizontal, 10px vertical

  @pending @smoke
  Cenario: Input com estado focus
    Dado que o componente Input e renderizado
    Quando state e "focus"
    Entao deve ter border 1px solid #FF5C00
    E deve ter outline none

  @pending @smoke
  Cenario: Input com estado error
    Dado que o componente Input e renderizado
    Quando state e "error"
    Entao deve ter border 1px solid #EF4444

  @pending @smoke
  Cenario: Input com estado disabled
    Dado que o componente Input e renderizado
    Quando state e "disabled"
    Entao deve ter opacity 0.5
    E deve ter cursor not-allowed

  @pending @smoke
  Cenario: Input com placeholder
    Dado que o componente Input e renderizado
    Quando placeholder esta definido
    Entao placeholder deve ter color #A1A1AA
