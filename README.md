> Continuando [meus estudos](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D) e tentativas iniciais para automatizar a geração de interfaces de sites pixel-perfect com IA. Desta vez gerei uma interface um pouco mais complexa, melhorei a versão anterior, descobri muita coisa legal e possibilidades de automação e escala incríveis, da um olhada.

## Visão Geral

No [primeiro post](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D), fiz alguns testes iniciais com um exemplo simples para validar a ideia de forma escalável que tornou possível e viavel automatizar a geração de interfaces pixel-perfect com IA, sincronizando design e código de maneira automatizada.

Em meus testes, usei ferramentas gratuidas de geração de design/código, e validei as saídas para confirmar se estão exatamente iguais (design/código).

Os resultados foram bem promissores, e abriu uma infinidade de possibilidades de automação e fluxos de trabalho que tem o potencial de mudar a forma como UX e Frontend se integram, agilizando e melhorando o fluxo de trabalho. 

--- 
**TODO**

Nesses primeiros testes estou focando nos prompts de geração de design, e testando a parte de código com ferramentas de codificação gratuitas sem me preocupar com estrutura e organização do código. O objetivo dos meus estudos iniciais é focar na sincronização do design com o resultado final da UI no código, delegando para a IA toda a parte de codificação reutilizando o mesmo prompt (design/código). 

Descobri novas maneiras de gerar design precisos usando o [Google Stitch](https://stitch.withgoogle.com/), e testei a geração do código/UI usando o  com o [V0](https://v0.app/) e [Lovable](https://lovable.dev/) para confirmar a saída exata do design no código.

Descobri que o [Tailwind CSS](https://tailwindcss.com/) funciona muito bem com as LLMS, aparentemente é algo nativo nas IAs, e isso simplificou ainda mais a estrutura do [`atomic design`](https://atomicdesign.bradfrost.com/) que estou usando na arquitetura.

Descobri tambem que fornecendo os elementos atomicos para a IA, podemos utilizar os insights do contexto gigantesco da IA para criar novas telas baseados em insights estratégicos, e isso torna possivel criar muitas coisas apenas 'conversando com a IA', isso libera o Design de se preocupar em clicar, arrastar coisas no board para criar as telas, assim ele como um revisor/aprovador do resultado final. 

Descobri que o Google Stitch, v0, lovable gera as versoes mobile, table e desktop automaticamente, aparentemente é padrao quando se usa tailwind como referencia, assim pode-se exportar para o figma as tres versoes.

Describri que posso gerar o design system com 1 prompt. 

Descobri que utilizar um Agente Integrado a IDE ajuda de mais na atualização dos prompts, a produtividade comparado aos primeiros estudos aumentou bastante, atualizar metadados dos arquivos .md,, consultas rapidas de classes do tailwind que nao lembrava de cabeça. etc...

Tambem descobri uma maneira de diminuir drasticamente as alucinações de sessôes de longo prazo, e para isso, criei um Prompt Agentico para simplificar o uso e correção dessas alucinações.

E muitas outras descobertas, neste post você verá:


**Neste post você verá:**

- [Projeto um pouco maior](#projeto-de-exemplo)
- [Evitando alucinações na sessão de longo prazo](#tecnicas-usadas)
   - [Prompt anti-alucinação](#rag)
- [Melhorias na versão anterior](#passo-a-passo-usado)
   - [Tailwind CSS como referência funciona muito bem](#)
- [Resultados](#resultados)
   - [Google Stitch](#google-stitch)
   - [V0](#v0)
   - [Lovable](#lovable)
- [Principais Aprendizados](#principais-aprendizados)
   - [Pontos Positivos](#pontos-positivos)
   - [Pontos Negativos](#pontos-negativos)
- [Conclusão](#conclusao)

## Projeto de Exemplo

![Home](/readme/02-page.png)

> Utilizei um projeto aleatório que estava perdido no meu `figma` para criação do prompt que gera a interface.

## Gerando novas telas

![Gerando novas telas](/readme/02-gerando-novas-telas.png)

> Neste exemplo foi gerada duas novas seções (timeline, habilidades), a IA utilizou os elementos atomicos e usou a 'criatividade' para gerar.


## Arvore de Elementos Atomicos Atualizada

![Spec Driven - Atomic Design](/readme/02-spec-driven-atomic-design.jpg)

## Passo a Passo Usados

Em todas as tentativas utilizei o seguinte passo a passo:

- Acessei a ferramenta de IA ([Google Stitch](https://stitch.withgoogle.com/), [v0](https://v0.app/) etc...).
- Anexei na sessão do chat todos os arquivos [markdown](https://www.markdownguide.org/) para servir de contexto.
- Solicitei para que seja gerado a molecula referenciando o id unico, ex: `MOL_CARD_ID`-> `card`.

> A LLM analisou todo o contexto e especificaçôes do prompt e gerou exatamente o que eu precisava.

## Resultados

### Design System

![Design System](/readme/02-page-design-system.png)

> Design System foi gerado com apenas 1 comando.

### Board Google Stitch

![Board Google Stitch](/readme/02-board-google-stitch.png)

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
