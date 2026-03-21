# language: pt
@pending @molecule @search-bar
Funcionalidade: SearchBar
  **pencil_id:** "search001"

  @pending @smoke
  Cenario: SearchBar renderizado corretamente
    Dado que o componente SearchBar e renderizado
    Entao deve ter input com estilo padrao
    E deve ter icone de busca a esquerda
    E deve ter background #141417
    E deve ter border-radius 8px

  @pending @smoke
  Cenario: SearchBar com placeholder
    Dado que o componente SearchBar e renderizado
    Quando placeholder definido
    Entao deve exibir placeholder "Search..."

  @pending @smoke
  Cenario: SearchBar com focus
    Dado que o componente SearchBar e renderizado
    Quando input recebe focus
    Entao deve ter border accent #FF5C00

  @pending @smoke
  Cenario: SearchBar com valor
    Dado que o componente SearchBar e renderizado
    Quando usuario digita
    Entao deve atualizar valor
    E deve chamar onChange com novo valor
