# language: pt
@pending @organism @stacked-list
Funcionalidade: StackedList
  **pencil_id:** "stack001"

  @pending @smoke
  Cenario: StackedList com itens
    Dado que o componente StackedList e renderizado
    Entao deve exibir lista de itens
    E deve ter espacamento entre itens

  @pending @smoke
  Cenario: StackedList com paginacao
    Dado que o componente StackedList e renderizado
    Entao deve exibir controles de Previous Next
    E deve exibir numeros de pagina
    E deve indicar pagina atual

  @pending @smoke
  Cenario: StackedList com Previous disabled
    Dado que o componente StackedList e renderizado
    Quando pagina atual e 1
    Entao Previous deve estar disabled
    E deve ter opacity 0.5

  @pending @smoke
  Cenario: StackedList com Next disabled
    Dado que o componente StackedList e renderizado
    Quando pagina atual e ultima pagina
    Entao Next deve estar disabled

  @pending @smoke
  Cenario: StackedList navegacao
    Dado que o componente StackedList e renderizado
    Quando click em numero de pagina
    Entao deve chamar onPageChange com numero da pagina

  @pending @smoke
  Cenario: StackedList com estilo padrao
    Dado que o componente StackedList e renderizado
    Entao container deve ter background #141417
    E deve ter border-radius 12px
    E deve ter padding 24px
