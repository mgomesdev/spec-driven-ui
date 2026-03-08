
- **Layouts Edge-to-Edge**: Utilize um componente wrapper raiz (100% width) contendo internamente as regras de limite (`max-w-7xl`) para permitir cenários onde o background sangra até a borda externa e o conteúdo obedece às guias centrais.
- **Separação de Componentes UI e Dados**: Componentes UI devem ser agnósticos a fetch, dependendo de props, enquanto os componentes de rota (como `page.tsx`) controlam a injeção dos dados (ou mocks estáticos).
