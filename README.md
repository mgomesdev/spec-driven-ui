> Continuando [meus estudos](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D) em **geração automatizada de interfaces pixel-perfect com IA**. Desta vez fui além: sincronizei design e código com um único prompt, reduzi alucinações da IA em quase 100% e gerei o design system completo de forma automatizada, mantendo as regras regras de branding do produto. Isso me deu um insight que pode mudar completamente a forma como UX e Frontend trabalham juntos. Dá uma olhada.

## Visão Geral

Continuando os estudos sobre geração automatizada de interfaces pixel-perfect com IA, desta vez fui além do exemplo inicial e trouxe um cenário mais próximo do dia a dia real de UX/Frontend.

O objetivo foi o mesmo: sincronizar design e código via prompt, mas desta vez com muito mais precisão. Usando [Spec-driven Development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) como base estrutural e o [Repomix](https://repomix.com/?format=markdown) para centralizar todo o contexto do projeto em um único arquivo — o **memory-bank.md** — consegui reduzir as a**lucinações da IA em quase 100%** e gerar design, código e design system com um único prompt, sem perder as regras de branding da marca.

Os resultados validaram algo que vai além da automação técnica: essa abordagem pode mudar completamente a forma como UX e Frontend colaboram, eliminando retrabalho, aumentando a precisão das entregas e abrindo espaço para que o Design atue mais como revisor estratégico do que executor manual.


**Neste artigo**:

- [Projeto de Exemplo](#projeto-de-exemplo)
- [Uma fonte unica de verdade para o projeto](#uma-fonte-unica-de-verdade-para-o-projeto)
   - [Repomix o bundler de prompts](#repomix-o-bundler-de-prompts)
   - [Usando o Copilot para gerar insights incríveis](#usando-o-copilot-para-gerar-insights-incriveis)
   - [memory-bank.md - o cérebro do projeto](#memory-bank)
   - [Usando o Copilot para gerar insights incríveis](#usando-o-copilot-para-gerar-insights-incriveis)
- [Prompt Anti-Alucinação](#prompt-anti-alucinacao)
   - [Gerando o Design com 1 click](#gerando-o-design-com-1-click)
   - [Gerando o Código com 1 click](#gerando-o-codigo-com-1-click)
   - [Gerando o Design System com 1 click](#gerando-o-design-system-com-1-click)
- [Usando a criatividade para gerar novas ideias](#usando-a-criatividade-para-gerar-novas-telas)
- [Principais Aprendizados](#principais-aprendizados)
- [Conclusão](#conclusão)
- [Referências](#referencias)

## Projeto de Exemplo

![Home](/readme/02-page.png)

> Peguei uma interface aleatória no figma e depois converti para o promt que gerou as telas na ferramenta da IA exatamente iguais a original.

## Uma fonte unica de verdade para o projeto

Nos [meus estudos anteriores](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%25C3%25A7%25C3%25A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D), uma das maiores complicações era inserir varios arquivos no contexto da **IA** para gerar os artefatos, e a maioria das ferramentas **gratuitas** tem uma limitação na quantidade de arquivos que eu podia enviar, tornando a experiência de desenvolvimento muito massante e chata. Resolvi esse problema usando a ferramenta [Repomix](https://repomix.com/?format=markdown) que possibilitou a reestruturação da arquitetura do projeto, evoluindo para um próximo nível onde a IA pode ser usada como um copiloto que agrega valor real.

### Repomix o bundler de prompts

> [Repomix](https://repomix.com/?format=markdown) é uma ferramenta poderosa que empacota toda a sua base de código em um único arquivo compatível com IA. Seja para revisões de código, refatoração ou para obter assistência de IA em seu projeto, o Repomix facilita o compartilhamento de todo o contexto do seu repositório com ferramentas de IA.

Na maioria das aplicações, usamos blundlers como **gulp**, **webpack** entre outros, para reunir varios arquivos fragmentados em uma unica **fonte de verdade** que centraliza e facilita o carregamento e uso pelas aplicações. O **Repomix** tem um objetivo parecido, com a diferença que foi feito para o **contexto de projetos de IA** que geralmente usam extensôes **json, .md, .xml**.

### Memory Bank

Usei o Repomix para gerar um arquivo chamado **memory-bank.md** que centraliza todo o contexto do projeto, reunindo (**#include**) os arquivos especificos com os elementos, regras e outras coisas especificas do projeto, possibilitando o uso das **LLMS** na geração de insights e melhorias incríveis sobre o projeto.

![Fonte Unica de Verdade](/readme/02-fonte-unica.png)

### Usando o Copilot para gerar insights incriveis

Com todas as informações do projeto reunidas no **memory-bank.md**, utilizei o **Github Copilot** para analisar todo o contexto do projeto e me gerar insights e melhorias estratégicas, e realmente me surpreendi com as infinitas possibilidades que essa estrutura possibilitou. 

- Identifiquei erros de sintax nos arquivos markdown.
- Formatei e deixei os arquivos mais legíveis e bonitos.
- Gerei documentações especificas baseado no contexto do projeto.
- Criei tutoriais.
- entre outras coisas....

> Apenas guiando os passos da IA para fazer esses processos que eu teria que fazer manualmente e daria um baita trabalho, eu simplesmente fiz em 30 minutos algo que iria durar dias. e tenho quase certeza que muitos detalhes que a IA identificou iam passar batidos por mim :) 

![Copilot](/readme/02-copilot.png)

## Prompt Anti Alucinacao

Com acesso a todo o contexto do projeto em um só lugar e o uso da IA como auxiliar, consegui ter uma visão global do projeto, obter insights e gerar prompts cada vez mais precisos alinhados completamente com o cenário do projeto, isso possibilitou gerar **prompts** que geram saídas muito precisas, tornando possível sincronizar **Design/Código**.

Criei dois prompts específicos: 
- [**Prompt Atomic Design**](https://github.com/mgomesdev/spec-driven-ui/blob/02-page_home/memory-bank/prompts/atomic-design-prompt.md): Responsável por gerar elementos específicos (atomos, moleculas, organismos, templates, paginas).
- [**Prompt Design System**](https://github.com/mgomesdev/spec-driven-ui/blob/02-page_home/memory-bank/prompts/design-system-prompt.md): Responsável por gerar o design system do projeto.

> Os resultados gerados nas ferramentas **Google Stich** e **Lovable** podem ser vistos logo abaixo.

### Gerando o Design com 1 click

![Board Google Stitch](/readme/02-board-google-stitch.png)

> Gerado com Gemini 3.0

### Gerando o Codigo com 1 click

![Chat Lovable](/readme/02-chat-lovable.png)

> Nesta imagem insiro o memory-bank.md e o prompt no contexto do Lovable.

![Resultado Lovable](/readme/02-resultado-lovable-site.png)

> O Lovable gerou a interface pixel perfect.

![Resultado Lovable](/readme/02-resultado-lovable-ds.png)

> O Lovable gerou o design system pixel perfect.

### Gerando o Design System com 1 click

![Design System](/readme/02-page-design-system.png)

> Design System foi gerado com apenas 1 comando.

### Usando a criatividade para gerar novas telas

Com essa estrutura atomica fornecida no contexto da IA, podemos utilizar toda a capacidade da IA para criar novas telas que não existem usando apenas elementos especificos do projeto. Isso torna possivel criar muitas coisas apenas 'conversando com a IA', liberando o Design de se preocupar em arrastar elementos na ferramenta de design para criar as telas, o UX atuaria mais em um papel de revisor.

- Imagine por um momento pegar dados e insights de uso da aplicação como por exemplo **Google Analytics, Hotjar** e baseado nos dados de uso, criar, ajustar, corrigir detalhes na interface de maneira automatizada apenas com um prompt, isso é possivel!
- Imagine desenvolver uma tela desktop e gerar a versão mobile, tablet com 1 prompt, isso é possivel ! 

![Gerando novas telas](/readme/02-nova-secao.png)

> Neste exemplo foi gerada duas novas seções (timeline, habilidades), a IA utilizou os elementos atomicos e usou a **criatividade** para gerar. Como temos poucos elementos no projeto, ela gerou algo simples, mas você entendeu a ideia (espero).

## Principais Aprendizados

- **Tailwind CSS V4**: Aparentemente o [Tailwind CSS](https://tailwindcss.com/) tem uma compatibilidade 
  e precisão melhor quando utilizado nas LLMs, além de simplificar a composição dos elementos. 
  Refatorei a primeira versão do projeto e agora todos os elementos referenciam as classes do Tailwind 
  diretamente no contexto, ficou muito mais simples de manter e a precisão da saída aumentou 
  consideravelmente.
- **Repomix como Bundler de Prompts**: Usar o [Repomix](https://repomix.com/?format=markdown) para 
  reunir todos os arquivos de contexto em um único arquivo eliminou a 
  limitação de envio de múltiplos arquivos nas ferramentas gratuitas e tornou o contexto muito mais 
  rico e preciso para as LLMs.
- **Memory Bank como fonte única de verdade**: Centralizar todo o contexto do projeto no **memory-bank.md** foi o que possibilitou gerar prompts cada vez mais precisos e consistentes.
- **Reduzindo Alucinações**: Descobri que pedir para a IA limpar o contexto entre uma solicitação e outra melhora significativamente a precisão da saída. Parece simples, mas fez uma diferença enorme na prática.
- **IA no VSCode**: Usar a IA diretamente no VSCode foi muito útil para tarefas manuais e repetitivas, como atualizar metadados dos arquivos `.md`, identificar erros de sintaxe em blocos de código e descobrir classes do Tailwind CSS com mais rapidez.
- **Spec-driven Development como base**: Estruturar o projeto com [Spec-driven Development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) 
  foi o que deu consistência a todo o processo. Com as especificações bem definidas, a IA tem 
  muito menos espaço para interpretar errado.

## Conclusão

Com esse exemplo mais próximo do dia a dia, consegui avançar mais um passo na direção de sincronizar o trabalho de UX/Frontend. A combinação de **Spec-driven Development**, **Repomix como bundler de prompts** e um **memory-bank.md centralizado** se mostrou uma abordagem poderosa para reduzir alucinações, aumentar a precisão das saídas e automatizar tarefas que antes consumiam dias de trabalho manual.

O mais animador é perceber que ainda estamos no início: integrar dados reais de uso (Analytics, Hotjar) para gerar ajustes automáticos de interface, ou escalar versões responsivas com um único prompt, são possibilidades concretas e acessíveis agora. 

O papel do Design e do Frontend começa a se transformar, menos execução mecânica, mais revisão estratégica e criativa.

## Referencias

- [Post anterior (Parte 1)](https://www.linkedin.com/pulse/ui-pixel-perfect-com-ia-gera%C3%A7%C3%A3o-de-interfaces-utilizando-gomes-gvrxf/?trackingId=t3xOt8PrS2%2BRsl%2F7PGuZfQ%3D%3D) 
- [Repositório do projeto](https://github.com/mgomesdev/spec-driven-ui/tree/02-page_home) 
- [Prompts usados](https://github.com/mgomesdev/spec-driven-ui/tree/02-page_home/memory-bank/prompts)
- [Spec-driven Development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) 
- [Repomix](https://repomix.com/?format=markdown) 




