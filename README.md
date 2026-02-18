> Neste feriadão de carnaval, continuei meus estudos e tentativas iniciais para automatizar a geração de interfaces de sites pixel-perfect com IA. Utilizei alguns design patterns e técnicas avançadas em minhas tentativas, e neste post irei mostrar os principais aprendizados, desafios e insights que obtive nesses meus primeiros estudos.

## Visão Geral

Trabalho como desenvolvedor frontend a mais de 8 anos, e nesta jornada já trabalhei em diversos projetos de interfaces, começei na época do `tableless, html/js vanilla, jquery, sass, wordpress`, e hoje em dia trabalho utilizando `React/Nextjs/Typescript`.

Tive a oportunidade de ver a evolução de muitas ferramentas e tecnologias frontend, e hoje em dia o cenário de desenvolvimento de interfaces se encontra em um momento mais estável e animador.

Vivemos um momento onde a inteligencia artificial está cada vez mais evoluindo e ganhando espaço na automação de `tarefas repetitivas`, e já está se tornando uma realidade em diversos cenários específicos.

Neste contexto, iniciei meus estudos no uso da inteligencia artificial para começar a automatizar meus trabalhos e tarefas repetitivas através de prompts de IA, testei as ferramentas (Google Stitches, Figma Make, V0, Lovable), apliquei padrôes de projetos frontend como `atomic design` e outras técnicas estratégicas com o objetivo de guiar a inteligência artificial a gerar a interface `pixel-perfect`.

**Neste post você verá:**

- [Projeto de Exemplo](#projeto-de-exemplo)
- [RAG (Retrieval Augmented Generation)](#rag)
- [Arquitetura](#arquitetura)
- [Geração de Design](#geracao-de-design)
   - [Google Stitches](#google-stitches)
- [Geração de Código](#geracao-de-codigo)
   - [Figma Make](#figma-make)
   - [V0](#v0)
   - [Lovable](#lovable)
- [Principais Aprendizados](#principais-aprendizados)
- [Conclusão](#conclusao)

## Projeto de Exemplo

![Card](/readme/card.png)

## RAG

> O `RAG (Retrieval-Augmented Generation) ou Geração Aumentada por Recuperação`, é uma técnica que melhora a precisão da saída das LLMS, permitindo limitemos o contexto da IA para que ela consulte apenas fontes e dados específicos que precisamos, ou seja, apenas os dados do projeto.

### Estrutura do Prompt

Utilizei uma mistura de `Fontmatter (YALM)` com `markdown` para melhorar a precisão da saída da LLM e separar as responsabilidades nos arquivos, e ficou da seguinte maneira:

- **created_at**/**updated_at**: Registram o ciclo de vida do arquivo, permitindo que a IA priorize as versões mais recentes em caso de duplicidade.
- **dependencies**: Lista os IDs dos Átomos necessários (AT_HEADING, AT_PARAGRAPH, AT_BUTTON), garantindo que a IA carregue os estilos deles antes de montar a Molécula.
- **file_name**/**version**: Identificam o nome físico do arquivo e o controle de versão para manutenção do Design System.
- **variants**: Espaço reservado para listar variações da molécula (ex: dark, light, outline).
- **extends**: Indica que este arquivo herda regras globais de outro documento (MOL_RULES), evitando repetição de código.
- **type**/**role**: Definem a categoria arquitetural (MOLECULE) e a função semântica no HTML (div).
- **id**: O identificador único e absoluto usado pelas LLMs para localizar este componente na base de dados.

### Prompts

![Spec Driven - Atomic Design](/readme/spec-driven-atomic-design.png)

- **global_rules.md**: Contém as regras, diretrizes e lógica imutável que todo o `projeto` deve seguir para garantir que a IA não viole padrôes.
- **design_tokens.md**: Armazeta todos os tokens (cores, espaçamentos) para garantir o pixel-perfect, fornecendo so valores exatos que os componentes devem consumir.
- **atomic_design_rules.md**: Armazena todas as regras, diretrizes e lógica imutável que todos os `componentes` devem seguir.
- **button.md**: Definição do atomo abstrato 'button', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **heading.md**: Definição do atomo abstrato 'heading', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **paragraph.md**: Definição do atomo abstrato 'paragraph', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **card.md**: Definição do componente 'card'. ele instancia os átomos e define o layout injetando o conteudo.

> O sistema funciona em cascata: os `Global Rules` dão os valores imutáveis, as `Rules` dão o comportamento, os `Atoms` são nossas peças isoladas e as `Molecules` são o manual de montagem que une tudo isso com precisão milimétrica através de `JSON` e `metadados`."

## Principais Aprendizados

### Pontos Positivos

- **frontmatter**: Juntar cabeçalhos `YAML` no `markdown` funcionou muito bem, a IA consegue referenciar com precisão os arquivos.
- **formato de dados**: em meus testes, a IA gerou saídas mais precisas quando segui a seguinte estrutura de declaração de diretrizes nos prompts:
   - **JSON**: o formato `JSON` apresentou resultados excelentes em especificação de `implementação` de componentes, a IA segue de forma literal a estrutura do `JSON` tornando pixel-perfect.
   - **Metadata**: O formato `**metadata**: <value>`, funcionou melhor para especificação de comportamentos do componente. Quando usado em especificações de implementação a IA começou a alucinar e gerar errado.

## Pontos Negativos

- **Google Stitches**: O `Google Stitches`, gerou muito bem as interfaces no primeiro prompt, mas com o tempo e iteração, ele começou a se perder e alucinar, me retornando interfaces (design) totalmente aleatórias.

## Conclusão
