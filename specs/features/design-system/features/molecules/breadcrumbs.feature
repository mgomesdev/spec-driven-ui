# language: pt
@pending @molecule @breadcrumbs
Funcionalidade: Breadcrumbs
  **pencil_id:** "bread001"

  @pending @smoke
  Cenario: Breadcrumbs com itens
    Dado que o componente Breadcrumbs e renderizado
    Quando tem itens de navegacao
    Entao deve exibir caminho hierarquico
    E deve ter separador entre itens

  @pending @smoke
  Cenario: Breadcrumbs com item ativo
    Dado que o componente Breadcrumbs e renderizado
    Quando ultimo item tem isActive true
    Entao ultimo item deve ter color accent #FF5C00
    E ultimo item nao deve ser clicavel

  @pending @smoke
  Cenario: Breadcrumbs com links
    Dado que o componente Breadcrumbs e renderizado
    Quando itens nao sao ativos
    Entao devem ser clicaveis
    E devem chamar onNavigate com href

  @pending @smoke
  Cenario: Breadcrumbs com caminho padrao
    Dado que o componente Breadcrumbs e renderizado
    Entao caminho padrao deve ser Dashboard > Analytics > Overview
