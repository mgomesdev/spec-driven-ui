# language: pt
@pending @design-tokens
Funcionalidade: Design Tokens
  **referencia:** Design tokens do sistema

  @pending @smoke
  Cenario: Cores primarias definidas corretamente
    Dado que o CSS esta configurado
    Entao --color-bg-primary deve ser #0A0A0B
    E --color-bg-secondary deve ser #141417
    E --color-accent deve ser #FF5C00
    E --color-elevated deve ser #1A1A1D

  @pending @smoke
  Cenario: Cores de texto definidas corretamente
    Dado que o CSS esta configurado
    Entao --color-text-primary deve ser #FFFFFF
    E --color-text-secondary deve ser #A1A1AA

  @pending @smoke
  Cenario: Cores semanticas definidas corretamente
    Dado que o CSS esta configurado
    Entao --color-success deve ser #22C55E
    E --color-error deve ser #EF4444

  @pending @smoke
  Cenario: Tipografia configurada corretamente
    Dado que o CSS esta configurado
    Entao --font-family deve ser Inter
    E --font-size-heading deve ser 20px
    E --font-weight-heading deve ser 600

  @pending @smoke
  Cenario: Spacing scale definido corretamente
    Dado que o CSS esta configurado
    Entao --space-xs deve ser 12px
    E --space-sm deve ser 14px
    E --space-md deve ser 16px
    E --space-lg deve ser 20px
    E --space-xl deve ser 32px
    E --space-2xl deve ser 40px

  @pending @smoke
  Cenario: Border radius scale definido corretamente
    Dado que o CSS esta configurado
    Entao --radius-sm deve ser 4px
    E --radius-md deve ser 8px
    E --radius-lg deve ser 10px
    E --radius-xl deve ser 12px
    E --radius-full deve ser 9999px

  @pending @smoke
  Cenario: Motion configurado corretamente
    Dado que o CSS esta configurado
    Entao --duration-fast deve ser 150ms
    E --duration-normal deve ser 200ms
    E --easing deve ser ease-out
