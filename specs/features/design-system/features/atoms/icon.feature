# language: pt
@pending @atom @icon
Funcionalidade: Icon
  **pencil_id:** "icon001"

  @pending @smoke
  Cenario: Icone renderizado corretamente
    Dado que o componente Icon e renderizado
    Quando name e "menu"
    Entao deve exibir icone menu (lucide-react)

  @pending @smoke
  Cenario: Icone com tamanho padrao
    Dado que o componente Icon e renderizado
    Quando size nao especificado
    Entao deve ter width 24px
    E deve ter height 24px

  @pending @smoke
  Cenario: Icone com tamanho sm
    Dado que o componente Icon e renderizado
    Quando size e "sm"
    Entao deve ter width 16px
    E deve ter height 16px

  @pending @smoke
  Cenario: Icone com tamanho lg
    Dado que o componente Icon e renderizado
    Quando size e "lg"
    Entao deve ter width 32px
    E deve ter height 32px

  @pending @smoke
  Cenario: Icone com cor padrao
    Dado que o componente Icon e renderizado
    Quando color nao especificado
    Entao deve ter color #FFFFFF
