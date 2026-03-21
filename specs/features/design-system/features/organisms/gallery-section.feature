# language: pt
@pending @organism @gallery-section
Funcionalidade: GallerySection
  **pencil_id:** "gallery001"

  @pending @smoke
  Cenario: GallerySection em grid
    Dado que o componente GallerySection e renderizado
    Entao deve exibir imagens em grid responsivo
    E deve ter gap 16px entre imagens

  @pending @smoke
  Cenario: GallerySection com imagens
    Dado que o componente GallerySection e renderizado
    Quando imagens disponiveis
    Entao deve exibir imagens com aspect ratio

  @pending @smoke
  Cenario: GallerySection com hover
    Dado que o componente GallerySection e renderizado
    Quando hover em imagem
    Entao deve ter overlay sutil
    E deve indicar interatividade

  @pending @smoke
  Cenario: GallerySection com titulo
    Dado que o componente GallerySection e renderizado
    Entao deve exibir titulo da secao
    E titulo deve ter estilo consistente

  @pending @smoke
  Cenario: GallerySection responsiva
    Dado que o componente GallerySection e renderizado
    Quando viewport muda
    Entao grid deve ajustar numero de colunas
