> Continuando [meus estudos](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D) em **geração automatizada de sites pixel-perfect com IA**. Desta vez gerei um exemplo um pouco mais próximo do dia-dia, melhorei a versão anterior, descobri muita coisa legal e possibilidades de automação e escala incríveis, da um olhada.

## Visão Geral

No [primeiro post](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D), fiz alguns testes iniciais para validar a ideia de **geração de interfaces pixel-perfect com IA**, sincronizando design e código de maneira automatizada. Usei **ferramentas gratuidas de geração de design/código**, e validei as saídas para confirmar se estão exatamente iguais (design e código).

Os resultados foram bem promissores, e abriu uma infinidade de possibilidades de **automação do fluxo de trabalho entre UX/Frontend**. 

**Neste artigo**:

- Gerando interfaces com IA de forma precisa e sem alucinações.
   - Tailwind CSS V4 torna as saídas da IA mais precisas, além de facilitar manutenção.
   - O Prompt Agêntico Atomico pronto para uso.
      - Criando novos elementos.
      - Gerando Design System do projeto com 1 click.
      - Usando a criatividade da IA para gerar novas telas, mantendo o contexto da marca.
- Comparativo das saídas de Design e Protótipo(código).
- Principais Aprendizados
- Conclusão

**Repositório**: https://github.com/mgomesdev/spec-driven-ui/tree/02-page_home

```
**TODO (Rascunho)**

Nesses primeiros testes estou focando nos prompts de geração de design, e testando a parte de código com ferramentas de codificação gratuitas sem me preocupar com estrutura e organização do código. O objetivo dos meus estudos iniciais é focar na sincronização do design com o resultado final da UI no código, delegando para a IA toda a parte de codificação reutilizando o mesmo prompt (design/código). 

Descobri novas maneiras de gerar design precisos usando o [Google Stitch](https://stitch.withgoogle.com/), e testei a geração do código/UI usando o  com o [V0](https://v0.app/) e [Lovable](https://lovable.dev/) para confirmar a saída exata do design no código.

Descobri que o [Tailwind CSS](https://tailwindcss.com/) funciona muito bem com as LLMS, aparentemente é algo nativo nas IAs, e isso simplificou ainda mais a estrutura do [`atomic design`](https://atomicdesign.bradfrost.com/) que estou usando na arquitetura.

Descobri tambem que fornecendo os elementos atomicos para a IA, podemos utilizar os insights do contexto gigantesco da IA para criar novas telas baseados em insights estratégicos, e isso torna possivel criar muitas coisas apenas 'conversando com a IA', isso libera o Design de se preocupar em clicar, arrastar coisas no board para criar as telas, assim ele como um revisor/aprovador do resultado final. 

Descobri que o Google Stitch, v0, lovable gera as versoes mobile, table e desktop automaticamente, aparentemente é padrao quando se usa tailwind como referencia, assim pode-se exportar para o figma as tres versoes.

Describri que posso gerar o design system com 1 prompt. 

Descobri que utilizar um Agente Integrado a IDE ajuda de mais na atualização dos prompts, a produtividade comparado aos primeiros estudos aumentou bastante, atualizar metadados dos arquivos .md,, consultas rapidas de classes do tailwind que nao lembrava de cabeça. etc...
```

## Projeto de Exemplo

![Home](/readme/02-page.png)

> Construí a home utilizando a IA.

## Gerando novas telas

![Gerando novas telas](/readme/02-gerando-novas-telas.png)

> Neste exemplo foi gerada duas novas seções (timeline, habilidades), a IA utilizou os elementos atomicos e usou a **criatividade** para gerar.

## Arvore de Elementos Atomicos Atualizada

![Spec Driven - Atomic Design](/readme/02-spec-driven-atomic-design.jpg)
> Atualizei a arquitetura com as novas mudanças.

## Passo a Passo Usados

Em todas as tentativas utilizei o seguinte passo a passo:

- Acessei a ferramenta de IA ([Google Stitch](https://stitch.withgoogle.com/), [v0](https://v0.app/) etc...).
- Anexei na sessão do chat o **Prompt do Agente Atômico**, que passou a guiar a sessão.
- Anexei na sessão do chat todos os arquivos [markdown](https://www.markdownguide.org/) para servir de contexto.
- Solicitei para que seja gerado a pagina referenciando o id unico, ex: `HOME_ID`.

> A LLM analisou todo o contexto e especificaçôes do prompt e gerou exatamente o que eu precisava.

## Resultados

### Design System

![Design System](/readme/02-page-design-system.png)

> Design System foi gerado com apenas 1 comando.

### Board Google Stitch

![Board Google Stitch](/readme/02-board-google-stitch.png)

> Gerado com Gemini 3.0

### V0

### Lovable


## Principais Aprendizados

- **Tailwind CSS V4**: Aparentemente o [Tailwind CSS](https://tailwindcss.com/) tem uma compatibilidade e precisão melhor quando utilizado nas LLMs, além de simplificar e facilitar a composição dos elementos. Realizei a refatoração da primeira versão, e agora todos os elementos referenciam as classes do tailwind diretamente no contexto, ficou bem mais simples de dar manutenção, além de ter aumentado a precisão da saída. 
- **IA no VSCode**: Usar a IA no vscode é muito útil para algumas tarefas manuais, no meu caso utilizei bastante para atualizar os **metadados** dos arquivos .md, descobrir de forma mais rápida algumas classes do tailwind css e buscar erros de sintax nos blocos de código do markdown.
- **Diminuir Alucinações**: Descobri que pedir para a IA limpar o contexto entre uma solicitação e outra, melhora a precisão da saída e diminui alucinações.
- **Responsividade**: A ferramenta [`Google Stitch`](https://stitch.withgoogle.com/) gera 3 versôes (mobile, tablet, desktop) automaticamente, portanto só precisei me preocupar com a geração da versão desktop. 


## Conclusão

```
- **TODO (Rascunho)**

Espero que este post tenha te dado algum insight, Até mais!
```