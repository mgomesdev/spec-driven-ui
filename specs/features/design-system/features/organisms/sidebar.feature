# language: pt
@pending @organism @sidebar
Funcionalidade: Sidebar
  **pencil_id:** "ncY1p"

  @pending @smoke
  Cenario: Sidebar com largura correta
    Dado que o componente Sidebar e renderizado
    Entao deve ter width 260px
    E deve ter background #141417
    E deve ter height 100vh
    E deve ter position fixed

  @pending @smoke
  Cenario: Sidebar com borda accent
    Dado que o componente Sidebar e renderizado
    Entao deve ter borda left 2px solid #FF5C00

  @pending @smoke
  Cenario: Sidebar com logo
    Dado que o componente Sidebar e renderizado
    Entao deve exibir logo no topo
    E deve ter padding 24px vertical

  @pending @smoke
  Cenario: Sidebar com itens de navegacao
    Dado que o componente Sidebar e renderizado
    Entao deve exibir itens Dashboard Analytics Reports Settings
    E deve ter hover state com color #FF5C00

  @pending @smoke
  Cenario: Sidebar com area de perfil
    Dado que o componente Sidebar e renderizado
    Entao deve exibir avatar do usuario
    E deve exibir nome do usuario
    E deve estar posicionado no bottom

  @pending @smoke
  Cenario: Sidebar colapsavel em mobile
    Dado que o componente Sidebar e renderizado
    Quando viewport e menor que 768px
    Entao sidebar deve colapsar
    E deve exibir menu hamburguer
