> Neste feriadão de carnaval, continuei meus estudos e tentativas iniciais para automatizar a geração de interfaces de sites pixel-perfect com IA. Utilizei alguns design patterns e técnicas avançadas em minhas tentativas, e os resultados foram promissores. Neste post mostro os principais aprendizados, desafios e insights que obtive nesses meus primeiros estudos.

## Visão Geral

Trabalho como desenvolvedor frontend a mais de 8 anos, e nesta jornada já trabalhei em diversos projetos de interfaces, começei na época do `tableless, html/js vanilla, jquery, sass, wordpress`, e hoje em dia trabalho utilizando `React/Nextjs/Typescript`.

Tive a oportunidade de ver a evolução de muitas ferramentas e tecnologias frontend, e hoje em dia o cenário de desenvolvimento de interfaces se encontra em um momento mais estável e animador.

Vivemos um momento onde a inteligencia artificial está cada vez mais evoluindo e ganhando espaço na automação de `tarefas repetitivas`, e já está se tornando uma realidade em diversos cenários específicos.

Neste contexto, iniciei meus estudos no uso da inteligencia artificial para começar a automatizar meus trabalhos e tarefas repetitivas através de prompts de IA, testei as ferramentas ([Google Stitch](https://stitch.withgoogle.com/), [V0](https://v0.app/), [Lovable](https://lovable.dev/)), apliquei padrôes de projetos, a metodologia [`atomic design`](https://atomicdesign.bradfrost.com/) e outras técnicas estratégicas com o objetivo de guiar a inteligência artificial a gerar a interface `pixel-perfect`.

**Neste post você verá:**

- [Projeto de Exemplo](#projeto-de-exemplo)
- [Tecnicas Usadas](#tecnicas-usadas)
   - [RAG (Retrieval Augmented Generation)](#rag)
   - [Atomic Design](#atomic-design)
   - [Arquitetura de Software](#arquitetura-de-software)
   - [Prompts](#prompts)
- [Passo a passo usado](#passo-a-passo-usado)
- [Resultados](#resultados)
   - [Google Stitch](#google-stitch)
   - [V0](#v0)
   - [Lovable](#lovable)
- [Principais Aprendizados](#principais-aprendizados)
   - [Pontos Positivos](#pontos-positivos)
   - [Pontos Negativos](#pontos-negativos)
- [Conclusão](#conclusao)

## Projeto de Exemplo

![Card](/readme/card.png)

> Utilizei o design no figma desse `card` simples que usa toda a estrutura para testar o processo de forma simples e escalavel para testes maiores.

## Tecnicas Usadas

### RAG

> O [`RAG (Retrieval-Augmented Generation) ou Geração Aumentada por Recuperação`](https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=pt-BR), é uma técnica que melhora a precisão da saída das LLMS, permitindo limitemos o contexto da IA para que ela consulte apenas fontes e dados específicos que precisamos, ou seja, apenas os dados do projeto.

### Atomic Design

> Utilizei a metodologia [`atomic design`](https://atomicdesign.bradfrost.com/) para criar especificações de componentes abstratos e precisos para os testes.

### Arquitetura de Software

> Utilizei fundamentos de orientação a objetos e diagramas UML para o planejamento estratégico e exemplos.

### Prompts

Utilizei uma mistura de [`Frontmatter(YALM)`](https://docs.github.com/pt/contributing/writing-for-github-docs/using-yaml-frontmatter) com [`markdown`](https://www.markdownguide.org/) para melhorar a precisão da saída da LLM e separar as responsabilidades nos arquivos, e ficou da seguinte maneira:

![Spec Driven - Atomic Design](/readme/spec-driven-atomic-design.jpg)

- **created_at**/**updated_at**: Registram o ciclo de vida do arquivo, permitindo que a IA priorize as versões mais recentes em caso de duplicidade.
- **dependencies**: Lista os IDs dos Átomos necessários (AT_HEADING, AT_PARAGRAPH, AT_BUTTON), garantindo que a IA carregue os estilos deles antes de montar a Molécula.
- **file_name**/**version**: Identificam o nome físico do arquivo e o controle de versão para manutenção do Design System.
- **variants**: Espaço reservado para listar variações da molécula (ex: dark, light, outline).
- **extends**: Indica que este arquivo herda regras globais de outro documento (MOL_RULES), evitando repetição de código.
- **type**/**role**: Definem a categoria arquitetural (MOLECULE) e a função semântica no HTML (div).
- **id**: O identificador único e absoluto usado pelas LLMs para localizar este componente na base de dados.
- **global_rules.md**: Contém as regras, diretrizes e lógica imutável que todo o `projeto` deve seguir para garantir que a IA não viole padrôes.
- **design_tokens.md**: Armazeta todos os tokens (cores, espaçamentos) para garantir o pixel-perfect, fornecendo so valores exatos que os componentes devem consumir.
- **atomic_design_rules.md**: Armazena todas as regras, diretrizes e lógica imutável que todos os `componentes` devem seguir.
- **button.md**: Definição do atomo abstrato 'button', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **heading.md**: Definição do atomo abstrato 'heading', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **paragraph.md**: Definição do atomo abstrato 'paragraph', ele não sabe onde será usado, apenas como deve ser e se comportar individualmente.
- **card.md**: Definição do componente 'card'. ele instancia os átomos e define o layout injetando o conteudo.

> O sistema funciona em cascata: os `Global Rules` dão os valores imutáveis, as `Rules` dão o comportamento, os `Atoms` são nossas peças isoladas e as `Molecules` são o manual de montagem que une tudo isso com precisão milimétrica através de `JSON` e `metadados`.

## Passo a Passo Usados

Em todas as tentativas utilizei o seguinte passo a passo:

- Acessei a ferramenta de IA ([Google Stitch](https://stitch.withgoogle.com/), [v0](https://v0.app/) etc...).
- Anexei na sessão do chat todos os arquivos [markdown](https://www.markdownguide.org/) para servir de contexto.
- Solicitei para que seja gerado a molecula referenciando o id unico, ex: `MOL_CARD_ID`-> `card`.

> A LLM analisou todo o contexto e especificaçôes do prompt e gerou exatamente o que eu precisava.

## Resultados

### Google Stitch

![Google Stitch](/readme/google-stich.png)

> Gerado com Gemini 3.0

---

### V0

![V0](/readme/v0.png)

> Gerado com v0 Max, o v0 não conseguiu baixar a fonte correta, mas ficou pixel-perfect.

---

### Lovable

![V0](/readme/lovable.png)

## Principais Aprendizados

### Pontos Positivos

- **frontmatter**: Juntar cabeçalhos `YAML` no [`markdown`](https://www.markdownguide.org/) funcionou muito bem, a IA consegue referenciar com precisão os arquivos.
- **JSON**: o formato `JSON` apresentou resultados excelentes em especificação de `implementação` de componentes, a IA segue de forma literal a estrutura do `JSON` tornando pixel-perfect.
- **Metadata**: O formato `**metadata**: <value>`, funcionou melhor para especificação de comportamentos do componente. Quando usado em especificações de implementação a IA começou a alucinar e gerar errado.

### Pontos Negativos

- **Google Stitch**: O [`Google Stitch`](https://stitch.withgoogle.com/), gerou muito bem as primeiras interfaces, mas com o tempo e uso no longo prazo, ele começou a se perder e alucinar, me retornando interfaces (design) totalmente aleatórias.

## Conclusão

- As ferramentas de geração de código apresentaram resultados mais precisos ao longo do tempo e uso do que as ferramentas de geração de design.
- As ferramentas de geração de design inicialmente geram resultados muito bons, mas conforme avançamos e customizamos ao longo do tempo, a IA começa a alucinar e guiar designs que não foi solicitado.

Esse pequeno teste prova e torna possível automatizar a geração de interfaces tanto no Design, quanto no código, de forma precisa e coesa. Tornando possível a criação de um fluxo sincronizado, entre design (ux) e código (dev) reutilizando o mesmo prompt como base.

Nos próximos posts irei testar em cenários mais complexos e projetos maiores, adicionando cada vez mais ferramentas que eu for descobrindo no processo.

Espero que este post tenha te dado algum insight, Até mais!
