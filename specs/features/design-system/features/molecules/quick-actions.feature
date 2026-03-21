# language: pt
@pending @molecule @quick-actions
Funcionalidade: QuickActions
  **pencil_id:** "quick001"

  @pending @smoke
  Cenario: QuickActions renderizado em grid
    Dado que o componente QuickActions e renderizado
    Entao deve exibir 4 acoes em grid
    E deve ter gap 16px entre acoes

  @pending @smoke
  Cenario: QuickActions com acao
    Dado que o componente QuickActions e renderizado
    Quando click em acao
    Entao deve chamar onActionClick com id da acao

  @pending @smoke
  Cenario: QuickActions com hover
    Dado que o componente QuickActions e renderizado
    Quando hover em acao
    Entao deve ter hover state
    E deve ter cor accent #FF5C00

  @pending @smoke
  Cenario: QuickActions com acoes padrao
    Dado que o componente QuickActions e renderizado
    Entao acoes padrao devem ser Exportar Novo Relatorio Configurar Alertas Compartilhar
