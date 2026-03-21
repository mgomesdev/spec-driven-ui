# language: pt
@pending @organism @table-section
Funcionalidade: TableSection
  **pencil_id:** "table001"

  @pending @smoke
  Cenario: TableSection com header
    Dado que o componente TableSection e renderizado
    Entao deve ter header com background #0A0A0B
    E deve exibir colunas Nome Status Data Valor Acoes

  @pending @smoke
  Cenario: TableSection com linhas
    Dado que o componente TableSection e renderizado
    Entao deve exibir linhas com dados
    E deve ter background #141417

  @pending @smoke
  Cenario: TableSection com hover
    Dado que o componente TableSection e renderizado
    Quando hover em linha
    Entao linha deve ter background diferenciado
    E deve ter cursor pointer

  @pending @smoke
  Cenario: TableSection com scroll
    Dado que o componente TableSection e renderizado
    Quando muitas colunas
    Entao deve ter scroll horizontal
    E deve ter border entre linhas

  @pending @smoke
  Cenario: TableSection com estilo padrao
    Dado que o componente TableSection e renderizado
    Entao container deve ter border-radius 8px
    E deve ter overflow hidden
