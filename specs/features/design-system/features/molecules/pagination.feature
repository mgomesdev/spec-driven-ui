# language: pt
@pending @molecule @pagination
Funcionalidade: Pagination
  **pencil_id:** "page001"

  @pending @smoke
  Cenario: Pagination renderizado corretamente
    Dado que o componente Pagination e renderizado
    Quando currentPage e 1
    Entao deve exibir controles Previous Next
    E deve exibir numeros de pagina

  @pending @smoke
  Cenario: Pagination com Previous disabled
    Dado que o componente Pagination e renderizado
    Quando currentPage e 1
    Entao botao Previous deve estar disabled
    E deve ter opacity 0.5

  @pending @smoke
  Cenario: Pagination com Next disabled
    Dado que o componente Pagination e renderizado
    Quando currentPage e totalPages
    Entao botao Next deve estar disabled

  @pending @smoke
  Cenario: Pagination navega para proxima pagina
    Dado que o componente Pagination e renderizado
    Quando click em Next
    Entao deve chamar onPageChange com page + 1

  @pending @smoke
  Cenario: Pagination navega para pagina especifica
    Dado que o componente Pagination e renderizado
    Quando click em numero de pagina
    Entao deve chamar onPageChange com numero da pagina
