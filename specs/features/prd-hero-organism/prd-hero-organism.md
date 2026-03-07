# PRD: Organismo Hero (Landing Page)

## Introdução
Este PRD descreve a implementação do organismo `Hero`, o componente central da landing page. Ele é projetado para capturar a atenção do usuário imediatamente, apresentando a proposta de valor principal através de uma combinação de texto impactante, suporte visual (imagem/ilustração) e identidade de marca (logo).

## Objetivos
- Criar um componente de alto impacto visual para a seção superior da landing page.
- Integrar elementos atômicos e moleculares (título, imagem, logo) em um único organismo.
- Manter um layout centralizado e equilibrado para uma leitura focada.
- Garantir uma base sólida e estática que possa ser expandida no futuro.

## Histórias de Usuário

### US-001: Implementar Estrutura de Conteúdo do Hero
**Descrição:** Como visitante, eu quero ver um título centralizado com uma imagem de suporte e o logo da empresa para entender a identidade e o propósito do site.

**Critérios de aceitação:**
- [ ] Título principal (H1) centralizado e com tipografia de destaque.
- [ ] Área para imagem ou ilustração lateral integrada ao layout central.
- [ ] Logo da empresa visível e posicionado conforme o design system.
- [ ] O layout deve ser totalmente centralizado (vertical e horizontalmente no container).
- [ ] Verificação de tipo e lint aprovados.
- [ ] **[Somente histórias de UI]** Verifique no navegador usando a dev-browser skill.

### US-002: Garantir Responsividade Estática
**Descrição:** Como usuário de dispositivos móveis, quero que o componente Hero se ajuste ao tamanho da minha tela para que o conteúdo permaneça legível.

**Critérios de aceitação:**
- [ ] O título deve reduzir o tamanho da fonte em telas menores.
- [ ] A imagem/ilustração deve empilhar ou se ajustar proporcionalmente em dispositivos móveis.
- [ ] O alinhamento centralizado deve ser mantido em todas as resoluções.
- [ ] Sem quebras de layout ou transbordamento de texto.
- [ ] **[Somente histórias de UI]** Verifique no navegador usando a dev-browser skill.

## Requisitos Funcionais
- RF-1: O organismo deve aceitar props para o texto do título, caminho da imagem e logo.
- RF-2: O layout deve utilizar Flexbox ou Grid para garantir a centralização perfeita.
- RF-3: Os elementos devem seguir o espaçamento (padding/margin) definido no sistema de design do projeto.

## Não-Objetivos
- Não haverá animações complexas ou transições de entrada nesta fase.
- Não haverá integração com sistema de gerenciamento de conteúdo (CMS).
- Não haverá suporte para múltiplos slides ou carrossel dentro do Hero.

## Considerações de projeto
- Utilizar componentes de imagem otimizados (ex: `next/image` se disponível).
- Seguir as cores primárias e secundárias do projeto para o texto e fundos.

## Métricas de Sucesso
- Renderização perfeita em telas Desktop e Mobile.
- Código 100% componentizado e reutilizável.
- Ausência de regressões visuais em relação ao PRD da Home.

## Questões em aberto
- A imagem deve ser de fundo (background-image) ou um elemento `<img>` separado?
- O logo deve ser linkado para a home ou ser apenas visual?
