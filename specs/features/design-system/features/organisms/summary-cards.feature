# language: pt
@pending @organism @summary-cards
Funcionalidade: SummaryCards
  **pencil_id:** "L1zBB"

  @pending @smoke
  Cenario: SummaryCards renderizado em grid
    Dado que o componente SummaryCards e renderizado
    Entao deve exibir 4 cards em grid
    E deve ter gap 16px entre cards

  @pending @smoke
  Cenario: Card de receita
    Dado que o componente SummaryCards e renderizado
    Quando card de receita
    Entao deve exibir label Receita
    E deve exibir valor 125000
    E deve exibir variacao percentual 12.5

  @pending @smoke
  Cenario: Card de usuarios ativos
    Dado que o componente SummaryCards e renderizado
    Quando card de usuarios
    Entao deve exibir label Usuarios Ativos
    E deve exibir valor 8420

  @pending @smoke
  Cenario: Variacao positiva
    Dado que o componente SummaryCards e renderizado
    Quando variacao maior que 0
    Entao variacao deve ter color #22C55E
    E deve exibir icone de subida

  @pending @smoke
  Cenario: Variacao negativa
    Dado que o componente SummaryCards e renderizado
    Quando variacao menor que 0
    Entao variacao deve ter color #EF4444
    E deve exibir icone de descida

  @pending @smoke
  Cenario: Card com estilo padrao
    Dado que o componente SummaryCards e renderizado
    Entao card deve ter background #141417
    E deve ter border-radius 12px
    E deve ter padding 24px
