# language: pt
@pending @atom @button
Funcionalidade: Button
  **pencil_id:** "btn001"

  @pending @smoke
  Cenario: Button primario com estilo correto
    Dado que o componente Button e renderizado
    Quando tem variant="primary"
    Entao deve ter background #FF5C00
    E deve ter border-radius 8px
    E deve ter padding 12px vertical, 16px horizontal
    E deve ter text color #FFFFFF

  @pending @smoke
  Cenario: Button secundario com estilo correto
    Dado que o componente Button e renderizado
    Quando tem variant="secondary"
    Entao deve ter background transparent
    E deve ter border 1px solid #A1A1AA
    E deve ter text color #A1A1AA

  @pending @smoke
  Cenario: Button ghost com estilo correto
    Dado que o componente Button e renderizado
    Quando tem variant="ghost"
    Entao deve ter background transparent
    E deve ter text color #A1A1AA

  @pending @smoke
  Cenario: Button com tamanho sm
    Dado que o componente Button e renderizado
    Quando tem size="sm"
    Entao deve ter padding 8px vertical, 12px horizontal
    E deve ter font-size 12px

  @pending @smoke
  Cenario: Button com tamanho lg
    Dado que o componente Button e renderizado
    Quando tem size="lg"
    Entao deve ter padding 16px vertical, 24px horizontal
    E deve ter font-size 16px

  @pending @smoke
  Cenario: Button desabilitado
    Dado que o componente Button e renderizado
    Quando disabled e true
    Entao deve ter opacity 0.5
    E deve ter cursor not-allowed
