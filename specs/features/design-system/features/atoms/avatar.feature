# language: pt
@pending @atom @avatar
Funcionalidade: Avatar
  **pencil_id:** "avatar001"

  @pending @smoke
  Cenario: Avatar com imagem
    Dado que o componente Avatar e renderizado
    Quando src esta definido
    Entao deve exibir a imagem
    E deve ter border-radius 9999px

  @pending @smoke
  Cenario: Avatar com tamanho sm
    Dado que o componente Avatar e renderizado
    Quando size e "sm"
    Entao deve ter width 24px
    E deve ter height 24px

  @pending @smoke
  Cenario: Avatar com tamanho md
    Dado que o componente Avatar e renderizado
    Quando size e "md"
    Entao deve ter width 32px
    E deve ter height 32px

  @pending @smoke
  Cenario: Avatar com tamanho lg
    Dado que o componente Avatar e renderizado
    Quando size e "lg"
    Entao deve ter width 40px
    E deve ter height 40px

  @pending @smoke
  Cenario: Avatar com fallback initials
    Dado que o componente Avatar e renderizado
    Quando src nao esta definido
    Entao deve exibir fallback com initials
    E deve ter background #141417
    E deve ter text color #FFFFFF
