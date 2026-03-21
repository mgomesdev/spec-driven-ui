# language: pt
@pending @organism @chart-section
Funcionalidade: ChartSection
  **pencil_id:** "chart001"

  @pending @smoke
  Cenario: ChartSection com titulo
    Dado que o componente ChartSection e renderizado
    Entao deve exibir titulo Grafico de Desempenho
    E titulo deve ter font-size 20px
    E titulo deve ter font-weight 600

  @pending @smoke
  Cenario: ChartSection com estilo padrao
    Dado que o componente ChartSection e renderizado
    Entao deve ter background #141417
    E deve ter border-radius 12px
    E deve ter padding 24px
    E deve ter border 1px solid

  @pending @smoke
  Cenario: ChartSection com area de grafico
    Dado que o componente ChartSection e renderizado
    Entao deve exibir area reservada para grafico
    E area deve ter altura de pelo menos 180px

  @pending @smoke
  Cenario: ChartSection com placeholder
    Dado que o componente ChartSection e renderizado
    Quando dados nao disponiveis
    Entao deve exibir placeholder ou loading state
