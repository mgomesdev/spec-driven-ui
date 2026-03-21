# language: pt
@pending @molecule @card
Funcionalidade: Card
  **pencil_id:** "card001"

  @pending @smoke
  Cenario: Card com estilo padrao
    Dado que o componente Card e renderizado
    Quando nao hoverable
    Entao deve ter background #141417
    E deve ter border-radius 12px
    E deve ter padding 24px

  @pending @smoke
  Cenario: Card hoverable
    Dado que o componente Card e renderizado
    Quando hoverable e true
    Entao deve ter hover state
    E deve ter border accent #FF5C00 no hover

  @pending @smoke
  Cenario: Card com padding sm
    Dado que o componente Card e renderizado
    Quando padding e "sm"
    Entao deve ter padding 16px

  @pending @smoke
  Cenario: Card com padding lg
    Dado que o componente Card e renderizado
    Quando padding e "lg"
    Entao deve ter padding 32px
