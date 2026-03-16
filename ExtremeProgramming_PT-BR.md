# Extreme Programming
## A Escolha do Programador — Kent Beck

# Extreme Programming

# O Método Revolucionário para Desenvolvimento de Software em Pequenas Equipes

Uma publicação da Pearson Education Munique • Boston • São Francisco • Harlow, Inglaterra Don Mills, Ontário • Sydney • Cidade do México Madri • Amsterdã

As informações contidas neste produto são publicadas sem consideração a eventual proteção por patente. Nomes comerciais são utilizados sem garantia de livre utilização. Na compilação de textos e ilustrações, foi tomado o máximo cuidado. Apesar disso, erros não podem ser totalmente excluídos. A editora, os organizadores e os autores não podem assumir responsabilidade jurídica nem qualquer forma de responsabilidade por informações incorretas e suas consequências.

Todos os direitos reservados, inclusive os de reprodução fotomecânica e armazenamento em meios eletrônicos.

Quase todas as denominações de hardware e software mencionadas neste livro são simultaneamente marcas registradas ou devem ser consideradas como tal.

A edição original americana foi publicada pela Addison-Wesley USA sob o título *Extreme Programming Explained. Embrace Change*, ISBN 0-201-61641-6 © 2000 by Kent Beck

ISBN 3-8273-2139-5

© 2000 by Addison-Wesley Verlag, um imprint da Pearson Education Deutschland GmbH

Todos os direitos reservados

*Para meu pai*

Agradeço a Cindee Andres, minha esposa e parceira, que insistiu para que eu não me preocupasse com ela e, em vez disso, escrevesse. Agradeço a Bethany, Lincoln, Lindsey, Forrest e Joelle, que abriram mão de mim por algum tempo para que eu pudesse digitar.

---

## Sumário

Prefácio xiii  
Introdução xv  

### Parte 1: O Problema

1. Risco: O Problema Fundamental — 3  
   Nosso Objetivo — 5  
2. Um Episódio de Desenvolvimento — 7  
3. O Lado Econômico do Desenvolvimento de Software — 11  
   Opções — 12 / Exemplo — 13  
4. Quatro Variáveis — 15  
   Dependências entre as Variáveis — 15 / Concentrar-se no Escopo — 18  
5. Custo das Mudanças — 21  
6. Aprender a Dirigir — 27  
7. Quatro Valores — 29  
   Comunicação — 29 / Simplicidade — 30 / Feedback — 31 / Coragem — 33 / Os Valores na Prática — 34  
8. Princípios Fundamentais — 37  
9. De Volta ao Básico — 43  
   Programar — 44 / Testar — 45 / Ouvir — 48 / Projetar — 48 / Conclusão — 50  

### Parte 2: A Solução

10. Visão Geral — 53  
    O Jogo do Planejamento — 54 / Ciclos de Release Curtos — 56 / Metáfora — 56 / Design Simples — 57 / Testes — 57 / Refatoração — 58 / Programação em Pares — 58 / Responsabilidade Coletiva — 59 / Integração Contínua — 60 / Semana de 40 Horas — 60 / Cliente no Local — 61 / Padrões de Codificação — 62  
11. Como Isso Pode Funcionar? — 63  
12. Estratégia de Gerenciamento — 71  
    Métricas — 72 / Coaching — 73 / Gerenciamento de Prazo — 74 / Intervenção — 75  
13. Estratégia de Ambiente de Trabalho — 77  
14. Separar Responsabilidades Comerciais e Técnicas — 81  
15. Estratégia de Planejamento — 85  
16. Estratégia de Desenvolvimento — 97  
17. Estratégia de Design — 103  
18. Estratégia de Testes — 115  

### Parte 3: Implementando XP

19. Adotando XP — 123  
20. Adaptando XP — 125  
21. Ciclo de Vida de um Projeto XP Ideal — 131  
22. Distribuição de Papéis — 139  
23. A Regra 20:80 — 149  
24. O que Torna XP Difícil? — 151  
25. Quando Não Experimentar XP — 155  
26. XP na Prática — 159  
27. Conclusão — 165  

A. Bibliografia Comentada — 167  
B. Glossário — 177  
Índice — 179  

---

## Prefácio

O Extreme Programming (XP) coloca a programação como a atividade central durante toda a duração de um projeto de software. Isso não pode funcionar! É hora de refletir um momento sobre meu próprio trabalho de desenvolvimento. Trabalho em uma cultura de software just-in-time, com ciclos de release curtos e alto risco técnico. Adaptar-se às mudanças é aqui uma estratégia de sobrevivência. A comunicação dentro das equipes e entre elas, frequentemente localizadas em lugares diferentes, se dá por meio do código-fonte. Lemos o código para entender as APIs novas ou em desenvolvimento de subsistemas. O ciclo de vida e o comportamento de um objeto complexo são definidos por casos de teste, ou seja, novamente por código. Relatórios de problemas são gerados por casos de teste que demonstram o problema e que também se apresentam na forma de código. Por fim, melhoramos continuamente o código existente por meio de refatoração. Embora nosso desenvolvimento seja centrado no código, ainda assim conseguimos entregar software dentro do prazo — portanto, essa forma de desenvolvimento parece funcionar.

Não se deve concluir disso que basta programar sem planejamento para produzir software com sucesso. Produzir software é difícil, e produzir software no prazo é ainda mais difícil. Para que isso funcione, é preciso também aplicar boas práticas com disciplina. É aí que entra o estimulante livro de Kent Beck sobre XP.

Kent Beck é um dos líderes da Tektronics que reconheceu o potencial da programação em pares rotativas em Smalltalk para aplicações técnicas complexas. Juntamente com Ward Cunningham, contribuiu muito para o movimento de padrões, que teve grande influência em minha carreira. XP é uma abordagem ao desenvolvimento de software que combina práticas empregadas por muitos programadores de sucesso, mas que se perderam na enxurrada de literatura sobre processos e métodos de software. Assim como os padrões, XP se baseia em práticas comprovadas, como testes de unidade, programação em pares e refatoração. Em XP, essas práticas são combinadas de modo que se complementam e frequentemente se controlam mutuamente. A ênfase está na interação entre as diferentes práticas, o que torna este livro uma contribuição importante. Há apenas um objetivo: entregar software com a funcionalidade correta dentro do prazo. Embora o processo bem-sucedido de software just-in-time da OTI não seja XP puro, tem muitas semelhanças com XP.

Gostei de trabalhar com Kent Beck e de praticar episódios XP em algo pequeno chamado JUnit. Suas visões e abordagens são um desafio constante à maneira como encaro o desenvolvimento de software. Sem dúvida, XP questiona algumas das abordagens tradicionais de grandes metodologias. Com a ajuda deste livro, você poderá decidir se aprova o XP ou não.

*Erich Gamma*

---

## Introdução

Este é um livro sobre Extreme Programming (XP). XP é um método enxuto para desenvolvimento de software em equipes de pequeno a médio porte cujo trabalho está sujeito a requisitos vagos ou em rápida transformação. Este livro deve ajudá-lo a decidir se XP é adequado para você.

Algumas pessoas acham que XP corresponde simplesmente ao bom senso. Você pode se perguntar por que o nome contém a palavra "extremo". XP aplica princípios e práticas geralmente reconhecidos como sensatos de forma extrema.

- Se revisão de código é boa, revisamos o código o tempo todo (Programação em Pares, *pair programming*).
- Se testes são bons, todos testam o tempo todo (testes de unidade, *unit tests*), inclusive o cliente (testes funcionais, *functional tests*).
- Se design é bom, fazemos disso uma tarefa cotidiana (Refatoração).
- Se simplicidade é boa, escolhemos sempre o sistema que apresenta o design mais simples e suporta a funcionalidade exigida (a solução mais simples, *the simplest thing that could possibly work*).
- Se a arquitetura é importante, então todos se empenham continuamente em definir e melhorar a arquitetura (Metáfora, *metaphor*).
- Se testes de integração são importantes, integramos e testamos várias vezes ao dia (Integração Contínua, *continuous integration*).
- Se ciclos de iteração curtos são bons, nós os tornamos realmente curtos — segundos, minutos e horas em vez de semanas, meses e anos (o Jogo do Planejamento, *Planning Game*).

Quando formulei XP pela primeira vez, tinha a imagem de controles em um painel. Cada controle era uma prática que eu sabia por experiência que funcionava bem. Queria girar todos os controles até 10 e ver o que acontecia. Surpreendentemente, esse pacote de práticas mostrou-se estável, previsível e flexível.

XP promete duas coisas:
- Aos programadores, XP promete que trabalharão todos os dias em algo que realmente importa. Não terão que enfrentar situações difíceis sozinhos. Serão capazes de fazer tudo o que estiver ao seu alcance para levar o sistema ao sucesso. Tomarão apenas as decisões que puderem tomar, e não serão forçados a tomar decisões para as quais não estão qualificados.
- A clientes e gerentes, XP promete que o tempo de programação será utilizado de forma ideal. A cada poucas semanas, poderão ver progresso concreto em relação aos objetivos que consideram importantes. Poderão mudar a direção do projeto no meio do desenvolvimento sem causar custos exorbitantes.

Em resumo, XP promete reduzir os riscos do projeto, responder melhor às mudanças nos requisitos de negócios, aumentar a produtividade ao longo de toda a vida do projeto e tornar o desenvolvimento de software em equipe algo divertido — tudo ao mesmo tempo. De verdade. Pare de rir. Basta continuar lendo e você descobrirá se estou louco.

### Sobre este Livro

Este livro trata do pensamento que está por trás do XP — as origens, a filosofia, as histórias e os mitos. Ele quer colocá-lo em condições de tomar uma decisão bem ponderada sobre se XP é adequado para o seu projeto ou não. Se você ler este livro e corretamente decidir não usar XP no seu projeto, atingi meu objetivo tanto quanto se tivesse corretamente decidido usá-lo.

Outro objetivo deste livro é ajudar quem já usa XP a entendê-lo melhor.

Este livro não explica como executar o Extreme Programming em detalhes. Aqui você não encontrará muitas listas de condições que precisam ser cumpridas, nem muitos exemplos ou histórias de programação. Para isso, você precisará ir online, conversar com alguns dos coaches mencionados aqui, aguardar o lançamento de livros correspondentes com instruções práticas sobre o assunto, ou simplesmente inventar sua própria versão.

A maior aceitação do XP depende das pessoas (você pode ser uma delas) insatisfeitas com a maneira como o desenvolvimento de software é praticado atualmente. Essas pessoas buscam um método melhor de desenvolvimento de software, querem uma relação melhor com o cliente e programadores mais satisfeitos e produtivos. Em outras palavras, querem sucesso e não têm medo de experimentar novas ideias para alcançá-lo. Mas quando se assume um risco, também se quer ter certeza de que não é simplesmente estupidez.

### O que é XP?

XP é uma forma leve, eficiente, de baixo risco, flexível, calculável, precisa e divertida de desenvolver software. XP se diferencia de outros métodos por:

- feedbacks antecipados, concretos e contínuos por meio de ciclos curtos
- uma abordagem de planejamento incremental, na qual um plano geral é desenvolvido rapidamente e refinado ao longo da vida do projeto
- a capacidade de planejar de forma flexível a implementação de funcionalidades, considerando os requisitos de negócios em constante mudança
- a dependência de testes automatizados escritos por programadores e clientes para monitorar o progresso do desenvolvimento, aprimorar o sistema e identificar falhas precocemente
- a confiança de que comunicação verbal, testes e código-fonte expressam a estrutura e o propósito do sistema
- a dependência de um processo de design evolutivo que dura enquanto o sistema existir
- a confiança na colaboração de programadores com habilidades comuns
- a dependência de práticas que atendem tanto aos instintos de curto prazo dos programadores quanto aos interesses de longo prazo do projeto

XP é uma disciplina de desenvolvimento de software. É uma disciplina porque há certas coisas que precisam ser feitas se você quiser usar XP. Não há escolha sobre escrever testes automatizados ou não — se você não o faz, não é XP; fim da discussão.

XP é projetado para projetos que podem ser realizados com equipes de dois a dez programadores, que não estão limitados em alto grau pelo ambiente de TI existente e onde testes sensatos podem ser executados em poucas horas.

### O que é Suficiente?

XP é um experimento para responder à seguinte pergunta: "Como se programaria se houvesse tempo suficiente?" Não podemos tomar mais tempo, pois afinal ainda é um negócio e queremos vencer. Mas se houvesse tempo suficiente, escreveríamos testes, reestruturariamos o sistema quando parecesse adequado, conversaríamos muito com os outros programadores e com o cliente. Essa mentalidade de suficiência é humana, ao contrário do trabalho implacável de prazos impossíveis e impostos que expulsa tantos programadores talentosos do campo da programação.

### Estrutura

Este livro é escrito como se você e eu estivéssemos criando juntos uma nova disciplina de desenvolvimento de software. Primeiro analisamos nossas suposições básicas sobre desenvolvimento de software. Depois, elaboramos a disciplina propriamente dita. Examinamos as implicações da disciplina que criamos e tiramos conclusões — como adotá-la, quando não adotá-la e quais possibilidades ela oferece do ponto de vista comercial.

O livro está dividido em três partes:

- **O Problema:** Capítulos 1 ("Risco: O Problema Fundamental") a 9 ("De Volta ao Básico") descrevem o problema que o Extreme Programming tenta resolver e apresentam critérios para avaliar a solução.
- **A Solução:** Nos capítulos 10 ("Visão Geral") a 18 ("Estratégias de Testes"), as ideias abstratas da primeira parte são transformadas em práticas de uma metodologia concreta. Esta parte não explica como implementar essas práticas em detalhes, mas sim sua forma geral.
- **Implementando XP:** Capítulos 19 ("Adotando XP") a 26 ("XP na Prática") descrevem uma série de tópicos relacionados à implementação do XP — como adotá-lo, o que se espera das diferentes pessoas em um projeto XP, como o XP se apresenta do lado comercial.

### Agradecimentos

Escrevo aqui não na primeira pessoa porque são minhas ideias, mas porque esta é minha perspectiva sobre essas ideias. A maioria das práticas do XP é tão antiga quanto a própria programação. Ward Cunningham é minha fonte imediata de grande parte do que você lerá aqui. Em muitos aspectos, passei os últimos quinze anos explicando a outras pessoas o que ele faz intuitivamente. Agradeço a Ron Jeffries por ter tentado e depois feito muito melhor. Agradeço a Martin Fowler por tê-lo explicado de forma não assustadora. Agradeço a Erich Gamma pelas longas conversas enquanto observávamos os cisnes no Limmat, e por não me deixar sair impune com conclusões impensadas. E nada de tudo isso teria acontecido se eu não tivesse observado meu pai, Doug Beck, programar por anos.

---

## Parte 1: O Problema

*Esta parte mostra em qual contexto o Extreme Programming faz sentido, esclarecendo diferentes aspectos do problema que uma nova disciplina de desenvolvimento de software deve resolver.*

---

## 1. Risco: O Problema Fundamental

*O desenvolvimento de software não consegue cumprir as expectativas. Esse fracasso tem amplas repercussões no âmbito comercial e humano. Precisamos encontrar uma nova maneira de desenvolver software.*

O problema fundamental do desenvolvimento de software é o risco. Seguem alguns exemplos:

- **Atrasos de prazo** — O prazo de entrega se aproxima e você precisa dizer ao cliente que o software só ficará pronto em seis meses.
- **Cancelamento do projeto** — Após vários atrasos, o projeto é cancelado sem nunca ter atingido a maturidade do produto.
- **O sistema se torna não rentável** — O software é colocado em operação com sucesso, mas depois de alguns anos os custos para realizar mudanças ou a taxa de erros aumentam tanto que o sistema precisa ser substituído.
- **Taxa de erros** — O software é colocado em operação, mas tem uma taxa de erros tão alta que não é utilizado.
- **O objetivo de negócio foi mal compreendido** — O software é colocado em operação, mas não resolve o problema original.
- **O objetivo de negócio muda** — O software é colocado em operação, mas o problema que deveria resolver originalmente foi substituído por outro problema de negócio mais urgente.
- **Excesso de funcionalidades** — O software possui uma infinidade de funcionalidades potencialmente interessantes, cuja programação foi divertida, mas que não trazem benefício algum ao cliente.
- **Rotatividade de pessoal** — Após dois anos, todos os bons programadores do projeto ficam entediados e pedem demissão.

Como o XP lida com esses riscos:

- **Atrasos de prazo** — XP exige ciclos de release curtos com duração máxima de alguns meses, de modo que os atrasos sempre permaneçam dentro de limites. Em XP, dentro de um release, as funcionalidades exigidas pelo cliente são implementadas em iterações de uma a quatro semanas, para que ele receba um feedback detalhado sobre o progresso.
- **Cancelamento do projeto** — XP pede ao cliente que escolha a versão menor e mais sensata do ponto de vista comercial, para que menos coisas possam dar errado antes que o software atinja a maturidade para produção.
- **O sistema se torna não rentável** — XP cria e mantém um conjunto abrangente de testes executados após cada mudança (várias vezes ao dia) para garantir que os requisitos de qualidade sejam cumpridos.
- **Taxa de erros** — XP testa tanto da perspectiva dos programadores, escrevendo testes para verificar funções individuais, quanto da perspectiva do cliente, desenvolvendo testes para verificar as funcionalidades individuais do programa.
- **O objetivo de negócio foi mal compreendido** — XP torna o cliente membro da equipe. A especificação do projeto é continuamente elaborada durante o desenvolvimento, de modo que as experiências de aprendizado da equipe e do cliente possam se refletir no software.
- **O objetivo de negócio muda** — XP encurta os ciclos de release e, portanto, ocorrem menos mudanças durante o período de desenvolvimento de uma versão. Durante o desenvolvimento de uma versão, o cliente pode substituir novas funcionalidades por funcionalidades que ainda não foram implementadas.
- **Excesso de funcionalidades** — XP insiste que apenas as tarefas de maior prioridade sejam abordadas.
- **Rotatividade de pessoal** — XP exige que os programadores assumam responsabilidade pela estimativa e conclusão de suas próprias tarefas, fornece feedback sobre o tempo real de conclusão para que possam fazer estimativas mais realistas, e respeita essas estimativas.

### Nosso Objetivo

Onde buscamos a solução, se assumirmos que os riscos do projeto representam o problema? Precisamos criar um novo estilo no desenvolvimento de software que lide com esses riscos. Precisamos ensinar programadores, gerentes e clientes sobre essa disciplina da forma mais compreensível possível. Precisamos estabelecer diretrizes sobre como adaptar essa disciplina às condições locais.

---

## 2. Um Episódio de Desenvolvimento

*O trabalho diário de programação vai desde tarefas claramente vinculadas a uma funcionalidade exigida pelo cliente, passando por testes, implementação e design, até a integração. Pelo menos em pequena medida, todos esses trabalhos ocorrem em cada episódio de desenvolvimento de software.*

Primeiro, vamos dar uma rápida olhada no objetivo que almejamos. Este capítulo descreve o coração do XP — o episódio de desenvolvimento. Aqui, os programadores implementam uma tarefa de programação (a menor unidade de planejamento) e a integram ao restante do sistema.

Vejo minha pilha de task cards. Na de cima está: "Exportar números trimestrais atuais de deduções." Lembro que você disse na reunião espontânea de hoje de manhã que havia terminado o cálculo dos números trimestrais atuais. Pergunto se você (meu hipotético companheiro de equipe) tem tempo para me ajudar na exportação. "Claro", diz você. A regra diz que você deve dizer "sim" quando alguém pede ajuda. Acabamos de nos tornar parceiros na programação em pares.

Discutimos por alguns minutos o que você fez ontem. Conversamos sobre os bins que adicionou, como os testes estão e talvez também sobre o fato de que ontem você percebeu que a programação em pares funciona melhor quando o monitor é empurrado cerca de 30 cm para trás.

Examinamos a estrutura de alguns dos casos de teste de exportação existentes. Encontramos um que quase atende aos nossos requisitos. Pela abstração de uma superclasse, podemos implementar nosso caso de teste facilmente. Fazemos a modificação necessária. Executamos os testes existentes. Todos funcionam perfeitamente.

Você pergunta: "Como são os casos de teste para esta tarefa?" Respondo: "Quando executarmos o exportador, os valores no registro de exportação devem corresponder aos valores nos bins." "Quais campos precisam ser preenchidos com valores?", você pergunta. "Não sei. Vamos perguntar ao Hans."

Interrompemos Hans por cerca de 30 segundos. Ele nos explica os cinco campos que sabe terem algo a ver com os números trimestrais. Escrevemos o caso de teste. Como acabamos de criar a superclasse para o caso de teste, é fácil escrevê-lo. Terminamos isso em poucos minutos.

Aproximadamente na metade, digo: "Consigo imaginar bem como implementaremos isso. Podemos..." "Vamos terminar o caso de teste primeiro", você me interrompe.

Enquanto escrevemos o caso de teste, temos ideias para três variantes diferentes. Você as anota no task card.

Terminamos o caso de teste e o executamos. Ele não funciona. Claro. Ainda não implementamos nada.

Trabalhamos no caso de teste com o depurador. Examinamos os objetos com que precisamos trabalhar. Escrevo o código (ou você, dependendo de quem tem a ideia mais clara). Enquanto estamos ocupados com a implementação, percebemos mais alguns casos de teste que deveríamos escrever. Anotamos isso no task card.

O caso de teste é executado sem problemas. Passamos para o próximo caso de teste, e depois para o próximo. Eu os implemento. Você percebe que o código poderia ser simplificado. Tenta me explicar como simplificá-lo. Me incomoda ouvir você e implementar ao mesmo tempo, então empurro o teclado para você. Você refatora o código. Executa os casos de teste. Funcionam. Você implementa os próximos casos de teste.

Depois de algum tempo, olhamos para o task card e vemos que só falta reestruturar os casos de teste restantes. Como tudo funcionou tranquilamente até agora, partimos para a reestruturação desses casos de teste e verificamos se os casos de teste refatorados são executados sem erros. O task card agora está vazio.

Vemos que o computador de integração está livre. Carregamos a última versão. Em seguida, carregamos nossas alterações. Então carregamos todos os casos de teste — os novos e também os que outros já fizeram.

---

## 3. O Lado Econômico do Desenvolvimento de Software

A gestão de opções reais pode ser aplicada ao desenvolvimento de software para justificar decisões de design simples tomadas cedo.

O desenvolvimento de software acontece em um contexto econômico. Às vezes parecemos esquecer isso. Se pudéssemos simplesmente escrever software sem levar em conta o dinheiro, provavelmente não precisaríamos de muito do que está neste livro. Mas somos pagos para escrever software, e isso muda muita coisa.

### Opções

Enquanto o software está sendo desenvolvido, as situações mudam. O que era importante ontem pode não ser mais importante hoje, e o que importará amanhã pode nem ter sido imaginado ainda. Essa realidade tem algumas implicações econômicas interessantes.

Em finanças, o valor de manter opções abertas é bem reconhecido. Uma opção é o direito (mas não a obrigação) de comprar ou vender algo a um preço fixo durante um período determinado. Os gestores financeiros entendem que, mesmo que uma opção pareça improvável de ser exercida, ainda há valor em mantê-la aberta.

O mesmo princípio se aplica ao desenvolvimento de software. Manter o código simples e bem testado nos dá a opção de mudar de direção no futuro com baixo custo. Fazer investimentos massivos de design hoje para acomodar requisitos hipotéticos de amanhã fecha essas opções prematuramente.

---

## 4. Quatro Variáveis

*O desenvolvimento de software é controlado por quatro variáveis: custo, tempo, qualidade e escopo. Todas as quatro variáveis estão interligadas.*

Há quatro variáveis em projetos de desenvolvimento:

- **Custo** — Quanto dinheiro está disponível para o projeto?
- **Tempo** — Quando o projeto precisa ser concluído?
- **Qualidade** — Quão bom precisa ser o software?
- **Escopo** — O que precisa ser feito?

### Dependências entre as Variáveis

Essas quatro variáveis não são independentes entre si. Se você mudar uma, as outras são afetadas. Se você quiser mais funcionalidades (mais escopo), precisará de mais tempo ou mais custo. Se quiser terminar mais rápido, precisará reduzir o escopo ou aumentar o custo.

O erro comum é tratar todas as quatro variáveis como fixas. Clientes dizem: "Preciso de X funcionalidades até Y data, com Z qualidade, por W custo." Quando os programadores dizem que não é possível, há conflito.

XP torna explícita a variabilidade dessas variáveis. Especificamente, o escopo é a variável que os clientes controlam. O tempo e o custo são acordados entre cliente e equipe. A qualidade não é negociável — XP insiste em alta qualidade como pré-requisito.

### Concentrar-se no Escopo

A chave é concentrar-se no escopo como a variável flexível. O cliente decide quais funcionalidades são mais valiosas e a equipe as implementa primeiro. Se o prazo se aproximar antes que tudo esteja pronto, as funcionalidades menos importantes simplesmente não são incluídas.

---

## 5. Custo das Mudanças

*Práticas e tecnologias que mantêm o custo das mudanças baixo são o núcleo do XP.*

A premissa por trás de muitas práticas tradicionais de desenvolvimento de software é que o custo de mudar o software cresce exponencialmente ao longo do tempo. Se o custo de uma mudança feita no início do projeto é $1, a mesma mudança feita mais tarde pode custar $1.000 ou $10.000.

Se isso for verdade, então faz sentido tomar todas as decisões importantes o mais cedo possível — especificar os requisitos completamente antes de projetar, projetar completamente antes de codificar, e assim por diante. Essa é a lógica por trás do modelo em cascata.

Mas e se a curva de custo puder ser aplainada? E se as mudanças puderem ser mantidas baratas ao longo do ciclo de vida do projeto?

Certas tecnologias e práticas podem manter o software mutável:
- **Objetos** — O envio de mensagens é uma forma eficiente de fornecer muitas possibilidades de mudança a baixo custo.
- **Design simples** — Sem elementos de design adicionais; apenas o que é necessário agora.
- **Testes automatizados** — Que nos dão a confiança de que notaremos imediatamente se mudarmos inadvertidamente o comportamento do sistema existente.
- **Prática constante de refatoração** — Para que não tenhamos medo de tentar mudanças quando for hora de modificar o sistema.

---

## 6. Aprender a Dirigir

*Precisamos guiar o desenvolvimento de software fazendo muitas pequenas mudanças, e não algumas poucas grandes. Isso significa que precisamos de feedback para saber quando saímos do curso. Precisamos ter sempre a oportunidade de fazer correções, e isso a custos tão baixos quanto possível.*

Agora delineamos o problema geral — os enormes custos das mudanças e a possibilidade de gerenciar esse risco por meio de opções — e o recurso necessário para resolvê-lo: a liberdade de fazer mudanças em um estágio posterior do desenvolvimento sem causar custos imensos. Vamos então à solução. Antes de tudo, precisamos de uma metáfora, uma história comum que possamos evocar em situações de estresse ou antes de tomar decisões, que nos ajude a fazer a coisa certa.

Lembro claramente do dia em que tive minha primeira aula de direção. Minha mãe e eu estávamos na Interestadual 5, perto de Chico, Califórnia, indo para o norte, em um trecho reto e plano onde a estrada parecia se estender até o horizonte. Minha mãe me deixou segurar o volante pelo lado do passageiro. Ela me deu uma sensação de como o movimento do volante afetava a direção do carro. Então disse para mim: "É assim que se dirige um carro. Alinhe o carro com a linha do meio e dirija no meio da faixa diretamente em direção ao horizonte."

Olhei concentrado para a estrada. Consegui colocar o carro no meio da faixa, de modo que estava no meio da estrada e indo em frente. Até aqui estava indo bem. Então meus pensamentos derivaram um pouco... Levei um susto e fiquei imediatamente bem alerta quando o carro tocou o cascalho na beira da estrada. Minha mãe (cuja coragem hoje me surpreende) guiou suavemente o carro de volta à faixa. Então me ensinou o seguinte sobre dirigir: "Ao dirigir, não basta colocar o carro na direção certa. O que importa é prestar atenção constantemente e fazer pequenas correções ora para este lado, ora para aquele."

Este é o paradigma do XP. Aqui, os termos "reto" e "plano" não têm significado. Mesmo que um projeto pareça estar correndo perfeitamente, você mantém os olhos na estrada. A única constante é a correção de curso. Você deve estar sempre preparado para se mover um pouco para esta ou aquela direção. Às vezes pode ser necessário tomar uma direção completamente diferente. É assim a vida de um programador.

Tudo no software muda. Os requisitos mudam. O design muda. O negócio muda. A tecnologia muda. A equipe muda. Os membros da equipe mudam. O problema não está na mudança em si, pois as mudanças são inevitáveis. O problema está na incapacidade de lidar adequadamente com as mudanças necessárias.

O cliente é como o motorista de um projeto de software. Se o software não faz o que o cliente espera, você falhou. Naturalmente, o cliente não sabe exatamente o que o software deve fazer. É por isso que o desenvolvimento de software se assemelha à direção, pois aqui também não basta colocar o carro em uma determinada direção. Nossa tarefa como programadores é dar ao cliente um volante e feedback constante sobre nossa posição exata.

---

## 7. Quatro Valores

*Temos sucesso quando nosso estilo evidencia certos valores constantes que servem tanto aos interesses humanos quanto aos comerciais: comunicação, simplicidade, feedback e coragem.*

Antes de podermos reduzir a história da aula de direção a uma série de práticas de desenvolvimento de software, precisamos de alguns critérios para determinar se estamos indo na direção certa.

Os quatro valores do XP são:
- Comunicação
- Simplicidade
- Feedback
- Coragem

### Comunicação

O primeiro valor do XP é a comunicação. Os problemas nos projetos sempre podem ser atribuídos ao fato de alguém não ter discutido algo importante com os outros. Às vezes, programadores não comunicam a outros uma mudança importante de design. Às vezes, programadores não fazem as perguntas certas ao cliente, fazendo com que uma decisão importante seja tomada incorretamente. Às vezes, gerentes não fazem as perguntas certas aos programadores e não obtêm as informações corretas sobre o status do projeto.

XP visa manter o fluxo de comunicação, aplicando muitas práticas que exigem comunicação. Isso inclui, por exemplo, testes de unidade, programação em pares e estimativa de tarefas, que fazem sentido no curto prazo. Testes, programação em pares e estimativa de tarefas têm o efeito de fazer com que programadores, clientes e gerentes precisem se comunicar entre si.

### Simplicidade

O segundo valor do XP é a simplicidade. O coach XP pergunta à equipe: "Qual é a solução mais simples?" (*"What is the simplest thing that could possibly work?"*) A simplicidade não é fácil de alcançar. É incrivelmente difícil não se preocupar com as coisas que precisarão ser implementadas amanhã, na próxima semana ou no próximo mês.

XP é como uma aposta. Você aposta que é melhor fazer algo simples hoje e pagar um pouco mais amanhã quando precisar mudá-lo, do que fazer algo mais complicado hoje que talvez nunca seja usado.

Entre simplicidade e comunicação há uma relação maravilhosa de reforço mútuo. Quanto mais você se comunica, mais claramente percebe o que realmente precisa ser feito. Quanto mais simples é um sistema, menos precisa ser comunicado sobre ele.

### Feedback

O terceiro valor do XP é o feedback. Típicos ditos de treinadores incluem: "Não me pergunte, pergunte ao sistema." "Você já escreveu o caso de teste para isso?"

Feedbacks são coletados em diferentes momentos. Primeiro, feedbacks são coletados ao longo de minutos ou dias. Os programadores escrevem testes de unidade para todos os componentes lógicos do sistema que possivelmente não funcionem. Dessa forma, os programadores recebem feedback concreto minuto a minuto sobre o estado do sistema.

Feedbacks também podem ser coletados ao longo de semanas ou meses. O cliente e o testador escrevem testes funcionais para todas as funcionalidades implementadas no sistema. Recebem feedback concreto sobre o estado atual de seu sistema.

### Coragem

O que se refere aos três primeiros valores (comunicação, simplicidade e feedback), é aconselhável trabalhar o mais rápido possível. Se você não acelerar, outro o fará e esse obterá seus lucros também.

Segue uma história sobre coragem na prática. No meio da iteração 8 de um plano de desenvolvimento de dez iterações (na semana 25 de 30) da primeira versão de um grande projeto XP, a equipe descobriu uma fraqueza fundamental na arquitetura. Os resultados dos testes funcionais eram inicialmente satisfatórios, mas depois caíram para um nível que ficava muito aquém das expectativas.

A equipe fez exatamente a coisa certa. Quando percebeu que não havia como avançar, corrigiu a falha. Isso resultou em cerca de metade dos testes usados se tornando inválidos de uma vez. Poucos dias de trabalho concentrado depois, no entanto, os resultados dos testes voltaram a parecer com uma conclusão iminente do projeto. Para isso foi necessária coragem.

Outra ação corajosa é jogar código fora. Você sabe como é quando você trabalha o dia todo em algo, não está indo muito bem e o computador continua travando? E no dia seguinte você vem ao escritório e faz todo o trabalho do dia anterior em meia hora, e desta vez tudo funciona perfeitamente.

A coragem promove a simplicidade, pois você tenta simplificar o sistema assim que vê uma oportunidade para isso. O feedback concreto promove a coragem, pois você se sente muito mais seguro quando, após uma mudança radical no código, você pode pressionar uma tecla e ver que os testes funcionam.

### Os Valores na Prática

Isso aponta para um valor mais profundo, um que se esconde sob a superfície dos outros quatro — o respeito. Se os membros da equipe não se interessam uns pelos outros e pelo que o outro faz, XP está destinado ao fracasso.

---

## 8. Princípios Fundamentais

*A partir dos quatro valores, derivamos alguns princípios fundamentais como diretrizes para nosso novo estilo. Verificamos as práticas de desenvolvimento propostas quanto ao cumprimento desses princípios fundamentais.*

Estes são os princípios fundamentais:

- **Feedback imediato** — A psicologia do aprendizado nos ensina que o período entre uma ação e seu feedback é de importância decisiva para o processo de aprendizagem. Um dos princípios é obter feedback o mais rápido possível, interpretá-lo e realimentar o que foi aprendido ao sistema.

- **Buscar a simplicidade** — Trate cada problema como se fosse ridiculamente simples de resolver. O tempo que você economiza em 98% dos problemas onde isso se aplica lhe deixa recursos incríveis para os 2% restantes.

- **Mudanças incrementais** — Grandes mudanças realizadas de uma vez simplesmente não funcionam. Cada problema é resolvido por uma série de mudanças menores, porém eficazes.

- **Querer mudanças** — A melhor estratégia é a que resolve o problema mais urgente e, ao mesmo tempo, mantém o maior número de opções abertas.

- **Trabalho de qualidade** — Ninguém gosta de trabalhar mal. Todos querem fazer um bom trabalho. A qualidade é a única das quatro variáveis que não é realmente livre. Os únicos valores possíveis são "excelente" e "extremamente excelente".

Alguns princípios menos centrais. Com esses princípios podemos decidir o que fazer em uma determinada situação:

- **Ensinar a aprender** — Em vez de fazer afirmações doutrinárias, concentramo-nos em ensinar estratégias para aprender a testar na medida certa, projetar, refatorar ou fazer qualquer outra coisa.
- **Pequeno investimento inicial** — Empregar muitos recursos muito cedo em um projeto leva a catástrofes.
- **Jogar para ganhar** — Fazer tudo que permite à equipe vencer e nada que não contribua para a vitória.
- **Experimentos concretos** — Sempre que uma decisão é tomada e não verificada, há certa probabilidade de que esteja errada. O resultado de uma sessão de design deve ser uma série de experimentos, não um design acabado.
- **Comunicação aberta e honesta** — Os programadores precisam ser capazes de explicar as consequências das decisões de outras pessoas, precisam poder dizer uns aos outros onde há problemas no código.
- **Usar os instintos dos colaboradores, não trabalhar contra eles** — As pessoas gostam de ganhar, de aprender, de interagir com outras, de fazer parte de uma equipe.
- **Assumir responsabilidade** — A responsabilidade é assumida, não delegada. Isso não significa que sempre se pode fazer exatamente o que se tem vontade. Faz-se parte de uma equipe.
- **Adaptar às condições locais** — Você precisa adaptar o que lê neste livro às condições concretas que encontra.
- **Viajar com bagagem leve** — Manter apenas o que é necessário: pouco, simples e valioso.
- **Medição honesta** — É melhor dizer "Isso levará aproximadamente duas semanas" do que "14.176 horas" quando não se pode estimar com certeza.

---

## 9. De Volta ao Básico

*Queremos fazer tudo o necessário para obter um desenvolvimento de software estável e previsível. Contudo, não temos tempo para trabalhos adicionais. Os quatro passos fundamentais do desenvolvimento de software são programar, testar, ouvir e projetar.*

### Programar

No fim do dia de trabalho, deve existir um programa. Por isso, nomino a programação como o passo do qual não podemos prescindir. O que esperamos do código? A coisa mais importante é aprender. Aprendo tendo um pensamento e depois testando para ver se vale alguma coisa. Programar é a melhor maneira de fazer isso.

O código também fornece a oportunidade de comunicar de forma clara e precisa. Quando você tem uma ideia e tenta me explicar, pode acontecer que eu a entenda mal. Mas quando formulamos a ideia juntos em código, posso perceber com precisão a forma de sua ideia por meio da lógica do código.

### Testar

Os filósofos ingleses e positivistas Locke, Berkeley e Hume afirmavam que só existe o que pode ser medido. No que diz respeito ao código de programa, concordo totalmente com essa afirmação. Funcionalidades de software que não podem ser demonstradas por testes automatizados simplesmente não existem.

Erich Gamma cunhou a expressão "infectado por testes" para descrever pessoas que só começam a programar quando já têm um teste. Pelos testes você reconhece quando terminou — quando os testes são executados sem erros, você terminou provisoriamente de programar.

Os testes são uma aposta. A aposta vale a pena quando suas expectativas não são atendidas. Os testes também valem quando um teste não funciona, quando você esperava que fosse executado sem erros. Em ambos os casos você aprende algo. E o desenvolvimento de software é aprendizagem.

### Ouvir

Os programadores não entendem nada. Ou melhor, os programadores não entendem nada do que os empresários acham interessante. Se você decide testar, precisa obter as respostas de algum lugar. Como você (como programador) não entende nada, precisa perguntar a outros. Os outros lhe dirão quais respostas são esperadas e como alguns dos casos incomuns se parecem do ponto de vista comercial.

Se você planeja fazer perguntas, então precisa estar disposto a ouvir as respostas. Por isso, ouvir é a terceira atividade no desenvolvimento de software.

### Projetar

Por que não se pode simplesmente ouvir, escrever um caso de teste, executá-lo, ouvir, escrever um caso de teste, executá-lo e continuar assim indefinidamente? Porque sabemos que dessa forma não funciona. Um bom design estrutura a lógica de forma que uma mudança em uma parte do sistema não necessite de uma mudança em outra parte. Um bom design garante que cada elemento da lógica do sistema existe apenas em um lugar.

### Conclusão

Você programa porque não realiza nada se não programa. Você testa porque, do contrário, não sabe quando terminou de programar. Você ouve porque, do contrário, não sabe o que programar e testar. E você projeta para poder programar, testar e ouvir indefinidamente.

---

## Parte 2: A Solução

---

## 10. Visão Geral

Agora estabelecemos a base. Sabemos qual problema precisamos resolver, a saber, decidir como as quatro etapas fundamentais do desenvolvimento de software — programar, testar, ouvir e projetar — devem ser executadas. Temos à mão uma série de valores e princípios pelos quais nos orientar na escolha de estratégias para essas atividades.

Seguem todas as práticas:

- **O Jogo do Planejamento** — Determine rapidamente o escopo da próxima versão, combinando prioridades de negócios com estimativas de esforço técnico.
- **Ciclos de Release Curtos** — Coloque em produção um sistema simples rapidamente e, em seguida, lance a próxima versão em intervalo muito curto.
- **Metáfora** — Todo o desenvolvimento é orientado por uma metáfora simples e comum que ilustra como o sistema inteiro funciona.
- **Design Simples** — O sistema deve estar estruturado o mais simplesmente possível a qualquer momento. Dissolva estruturas desnecessariamente complexas assim que as descobrir.
- **Testes** — Os programadores escrevem continuamente testes de unidade que precisam ser executados sem erros para que o desenvolvimento possa prosseguir. Os clientes escrevem testes para mostrar que as funcionalidades foram concluídas.
- **Refatoração** — Os programadores reestruturaram o sistema sem alterar seu comportamento, para remover redundâncias, melhorar a comunicação, simplificar o sistema ou torná-lo mais flexível.
- **Programação em Pares** — Todo o código de produção é escrito por dois programadores sentados juntos em um computador.
- **Responsabilidade Coletiva** — Qualquer pessoa pode modificar qualquer código no sistema a qualquer momento.
- **Integração Contínua** — O sistema é integrado e construído várias vezes ao dia, sempre que uma tarefa é concluída.
- **Semana de 40 Horas** — Não se trabalha mais de 40 horas por semana. Horas extras nunca são feitas por mais de uma semana.
- **Cliente no Local** — A equipe deve ter um usuário real como membro, disponível em tempo integral para responder perguntas.
- **Padrões de Codificação** — Os programadores escrevem todo o código de acordo com regras que facilitam a comunicação por meio do código.

---

## 11. Como Isso Pode Funcionar?

Se uma prática é fraca, os pontos fortes das outras práticas compensam essa fraqueza. As práticas funcionam juntas de forma sinérgica.

Por exemplo, o design simples elimina a necessidade de muitos outros documentos. Os testes fornecem a rede de segurança necessária para que o design simples funcione. A programação em pares garante que os testes sejam escritos e que o design seja realmente simples. A responsabilidade coletiva significa que qualquer um pode consertar um problema que encontrar, não apenas a pessoa que escreveu o código.

---

## 12. Estratégia de Gerenciamento

*Métricas, coaching, gerenciamento de prazo e intervenção: o que um gerente faz em um projeto XP.*

### Métricas

Um gerente em um projeto XP gere com base em dados. Os dados vêm das iterações — quanta funcionalidade foi prometida, quanta foi entregue, quanto tempo levou. Ao longo do tempo, esses dados fornecem uma imagem clara da velocidade real da equipe.

### Coaching

O coach XP é responsável pelo processo geral. O coach percebe quando pessoas individuais estão tomando uma direção errada e chama a atenção da equipe para isso. Permanece calmo quando todos os outros entram em pânico.

### Gerenciamento de Prazo

O gerente de prazo é o historiador da equipe. Registra os resultados dos testes funcionais. Mantém registro dos erros ou falhas relatados, quem assumiu a responsabilidade por eles e quais casos de teste foram adicionados por causa dessas falhas.

### Intervenção

Às vezes, o gerente precisa intervir quando o processo está fora de controle. Mas a intervenção deve ser usada com parcimônia — cada vez que você direciona a equipe, tira dela um pouco de autoconfiança.

---

## 13. Estratégia de Ambiente de Trabalho

O ambiente físico tem um enorme impacto na produtividade e na qualidade de um projeto XP. Uma sala grande com pequenas estações de trabalho nas paredes externas e computadores potentes em mesas no centro é o melhor ambiente que conheço.

---

## 14. Separar Responsabilidades Comerciais e Técnicas

### Lado Comercial

Os que pagam pelo sistema decidem:
- O escopo
- As prioridades
- A composição das versões
- As datas das versões

### Lado do Desenvolvimento

Os que desenvolvem o sistema decidem:
- As estimativas de tempo
- As consequências técnicas
- O processo
- O planejamento detalhado

### O que Fazer?

O Jogo do Planejamento separa claramente quem decide o quê. A tensão entre o desejo do cliente por funcionalidades e a capacidade da equipe de entregá-las é gerenciada por meio de ciclos de planejamento regulares.

---

## 15. Estratégia de Planejamento

### O Jogo do Planejamento

Nem considerações comerciais nem técnicas devem ter prioridade. O desenvolvimento de software é um diálogo contínuo entre o possível e o desejável. É da natureza desse diálogo que tanto o que é considerado possível quanto o que é considerado desejável mude.

O Jogo do Planejamento é dividido em dois tipos: planejamento de release e planejamento de iteração.

**Planejamento de Release:**
- Fase de exploração: O cliente escreve story cards; os programadores fazem estimativas.
- Fase de comprometimento: O cliente escolha as funcionalidades para o próximo release; a equipe se compromete com uma data.
- Fase de direção: O cliente pode substituir funcionalidades não iniciadas, dividir story cards, ou encerrar antecipadamente.

**Planejamento de Iteração:**
- Fase de exploração: Os story cards escolhidos para esta iteração são convertidos em task cards; os programadores fazem estimativas de tempo.
- Fase de comprometimento: Os programadores assumem responsabilidade pelas tarefas.
- Fase de direção: No final da iteração, o cliente avalia o progresso.

---

## 16. Estratégia de Desenvolvimento

### Integração Contínua

Em XP, o sistema é integrado e testado várias vezes ao dia. Isso elimina o problema de integração tardodia de um longo período de desenvolvimento onde conflitos de código se acumulam.

Somente um par integra de cada vez. Uma máquina de integração dedicada é configurada. Quando um par termina uma tarefa, eles pegam os últimos fontes, integram suas mudanças, compilam tudo e rodam todos os testes.

### Responsabilidade Coletiva

Qualquer pessoa pode modificar qualquer código a qualquer momento. Isso pode parecer assustador, mas os testes automatizados fornecem a rede de segurança. Se você mudar algo e um teste falhar, você sabe imediatamente.

### Programação em Pares

Todo o código de produção é escrito por dois programadores, sentados lado a lado, em um computador. Dois programadores trabalhando juntos não são menos produtivos do que dois trabalhando separadamente — são mais produtivos, e o código que produzem tem melhor qualidade.

---

## 17. Estratégia de Design

### A Solução Mais Simples

O melhor design em XP é definido como o design mais simples que passa em todos os casos de teste.

O "mais simples" é definido como se segue — quatro condições listadas em ordem decrescente de importância:

1. O sistema (código e testes juntos) deve transmitir tudo o que se deseja comunicar.
2. O sistema não deve conter código redundante (os pontos 1 e 2 juntos resultam na regra "Uma vez e apenas uma vez").
3. O sistema deve ter o número mínimo de classes.
4. O sistema deve ter o número mínimo de métodos.

### Como o Design por Refatoração Funciona?

Esta estratégia de design parece estranha durante a execução. Tomamos o primeiro caso de teste. Dizemos: "Se tivéssemos que implementar apenas esse único caso de teste, precisaríamos apenas de um objeto com dois métodos." Implementamos o objeto e os dois métodos. E com isso terminamos. Todo o nosso design consiste em um objeto — durante cerca de um minuto.

Então pegamos o próximo caso de teste. Podemos simplesmente codificar uma solução ou podemos reestruturar o objeto existente em dois objetos. Para implementar o caso de teste, um desses objetos seria substituído. Portanto, primeiro reestruturamos, depois executamos o primeiro caso de teste para garantir que funciona, e então implementamos o próximo caso de teste.

### Quando Não Fazer Design Antecipado

A estratégia tradicional para reduzir os custos de software ao longo do tempo consiste em reduzir a probabilidade e os custos de revisões. XP segue exatamente o caminho oposto. Em vez de reduzir a frequência de revisões, XP se dedica às revisões. Um dia sem refatoração é como um dia sem sol.

A chave está em reconhecer que não apenas o tempo é dinheiro, mas que o risco também é dinheiro. Se há incerteza suficiente, o valor da opção de esperar é tão alto que vale a pena esperar.

### Papel das Imagens no Design

Ao usar imagens no design, há forças a favor e contra. A estratégia XP consiste em que qualquer pessoa pode projetar com imagens à vontade, mas assim que surgir uma questão que só pode ser respondida por código, os designers precisam se voltar para a programação para responder a essa questão.

### Arquitetura do Sistema

Na primeira iteração, escolhe-se uma série de funcionalidades simples e fundamentais (story cards), de cujas implementações se espera que forcem a criação de "todo o sistema", ainda que apenas como um esqueleto. Então se estreita o foco e implementa-se essas funcionalidades da maneira mais simples que funcione.

---

## 18. Estratégia de Testes

Testaremos minuto a minuto antes de programar. Manteremos esses testes para sempre e os executaremos todos juntos repetidamente. Também escreveremos testes da perspectiva do cliente.

### Quem Escreve os Testes?

Os programadores escrevem testes para métodos individuais. Escrevem um teste nas seguintes condições:
- Quando a interface para um método é completamente obscura
- Quando a interface é clara mas a implementação pode se tornar um pouco complicada
- Quando é possível imaginar circunstâncias incomuns sob as quais o código deve funcionar
- Quando mais tarde é descoberto um problema
- Quando se planeja refatorar código e não tem certeza de como o código deve se comportar

Os testes de unidade escritos pelos programadores precisam sempre rodar 100% sem erros. Se um teste de unidade falha, não há tarefa mais importante na equipe do que fazer esses testes funcionar.

Os clientes escrevem testes para funcionalidades individuais (story cards). Precisam se fazer a seguinte pergunta: "O que precisa ser verificado antes de eu estar seguro de que essa funcionalidade foi implementada?"

### Mais Testes

Além dos testes de unidade e funcionais, que formam o núcleo da estratégia de testes XP, há outros testes que são ocasionalmente úteis:
- **Teste paralelo** — Um teste para provar que o novo sistema funciona exatamente como o antigo.
- **Teste de carga** — Um teste para simular a carga máxima.
- **Teste de idiotice** — Um teste para garantir que o sistema responde razoavelmente a entradas irracionais.

---

## Parte 3: Implementando XP

---

## 19. Adotando XP

*Introduza as práticas individuais uma a uma ao adotar XP, abordando o problema mais urgente da equipe com cada uma. Resolva assim um problema após o outro.*

1. Escolha o pior problema.
2. Resolva-o usando os conceitos do XP.
3. Quando não for mais o pior problema, comece de novo.

Os testes e o jogo de planejamento se apresentam como os pontos de partida mais recomendáveis. Muitos projetos lutam com problemas de qualidade ou com uma distribuição desequilibrada de poder entre o lado comercial e o desenvolvimento.

---

## 20. Adaptando XP

*Projetos que desejam mudar sua cultura existente são muito mais comuns do que projetos que podem criar uma nova cultura do zero. Adote XP em projetos em andamento incrementalmente, começando com testes ou planejamento.*

### Testes

Testar é possivelmente a área mais frustrante ao transferir código existente para XP. O código escrito antes de ter testes pode ser assustador. Mas assim que você começa a escrever testes, a imagem muda.

Escreva testes conforme necessário:
- Quando a funcionalidade de código não testado precisar ser estendida, escreva primeiro os testes para a funcionalidade existente.
- Quando você precisar corrigir um bug, escreva um teste primeiro.
- Quando a refatoração estiver programada, escreva os testes primeiro.

### Design

A transição para o design XP é muito semelhante à transição para o teste XP. Você logo perceberá que o novo código transmite uma sensação completamente diferente do código antigo. No início do processo, a equipe deve estabelecer alguns objetivos amplos de refatoração.

### Planejamento

Você precisa transferir seus documentos de requisitos existentes para story cards. Você precisa esclarecer seu cliente sobre as novas regras do jogo.

### Gerenciamento

Uma das transições mais difíceis é acostumar-se ao gerenciamento XP. O gerenciamento XP é uma questão de redirecionamento e influência.

### Desenvolvimento

Em primeiro lugar, você precisa organizar as mesas corretamente. Isso é sério. Posicione-as de modo que duas pessoas possam sentar lado a lado e passar o teclado entre si sem mover as cadeiras.

### Em Dificuldades?

Se o seu projeto está com problemas graves, XP pode parecer uma tábua de salvação. Não confie nisso. Se já é difícil mudar de cavalos a galope, isso é dez vezes mais difícil quando você está montado em um cavalo ferido.

---

## 21. Ciclo de Vida de um Projeto XP Ideal

*O projeto XP ideal passa por uma breve fase inicial de desenvolvimento, seguida de anos durante os quais se apoia a produção e se introduzem melhorias ao mesmo tempo, e finalmente o projeto é aposentado dignamente quando não faz mais sentido.*

### Exploração

A fase de pré-produção é um estado não natural para um sistema e deve ser superada o mais rapidamente possível. Antes de poder entrar em produção, no entanto, é preciso acreditar que se pode entrar em produção. Você precisa ter confiança suficiente em suas ferramentas. Os membros da equipe precisam aprender a confiar uns nos outros.

### Planejamento

O objetivo da fase de planejamento é que clientes e programadores concordem com um prazo realista no qual o menor e mais valioso conjunto de funcionalidades estará pronto.

### Iterações até a Primeira Versão

O plano comprometido é dividido em iterações de uma a quatro semanas. Cada iteração resulta em um conjunto de casos de teste funcionais para cada funcionalidade planejada para essa iteração.

### Entrando em Produção

Na fase final de uma versão, os ciclos de feedback são encurtados. Em vez de iterações de três semanas, pode-se passar para iterações de uma semana. Pode-se realizar uma reunião diária breve para que todos saibam no que os outros estão trabalhando.

### Manutenção

A manutenção é na verdade o estado normal de um projeto XP. Você precisa produzir novas funcionalidades, manter o sistema existente em funcionamento, integrar novos membros à equipe e despedir-se de membros que saem da empresa.

### Morte

Uma morte agradável é tão importante quanto uma vida agradável. Se ao cliente não lhe vêm mais story cards, é hora de desativar o projeto. Agora só falta escrever uma introdução de cinco a dez páginas ao sistema.

---

## 22. Distribuição de Papéis

*Certos papéis precisam ser preenchidos para que uma equipe XP funcione — programador, cliente, coach, gerente de prazo.*

### Programadores

O programador está no centro do XP. As habilidades requeridas incluem:
- Programar em pares (aprendível, mas pode ir contra os hábitos das pessoas que tipicamente se tornam programadores)
- Capacidade de simplificar
- Habilidades técnicas (programação, refatoração, testes de unidade)
- Disposição para assumir responsabilidade coletiva
- Coragem para admitir quatro medos: parecer burro, parecer inútil, tornar-se supérfluo, não ser bom o suficiente

### Clientes

O cliente é a outra metade da dualidade fundamental do XP. O programador sabe como programar. O cliente sabe o que precisa ser programado.

Não é fácil ser cliente XP. Você precisa aprender a tomar decisões comerciais. Você precisa escrever story cards. Você precisa aprender a escrever testes funcionais.

### Testadores

O testador é responsável por ajudar o cliente a selecionar e elaborar testes funcionais. Se os testes funcionais não forem parte da suíte de integração, o testador é responsável por executar regularmente os testes funcionais e divulgar os resultados em local bem visível.

### Gerente de Prazo

O gerente de prazo representa a consciência da equipe. Para chegar a boas estimativas de esforço é uma questão de prática e feedback. O gerente de prazo também é responsável por acompanhar o projeto inteiro.

### Coach

Como coach, você é responsável pelo processo geral. Você percebe quando pessoas individuais estão tomando uma direção errada e chama a atenção da equipe para isso. Permanece calmo quando todos os outros entram em pânico.

O mais difícil no trabalho de coach é que os melhores resultados são obtidos quando se age indiretamente. Quando você encontra um erro no design, precisa primeiro decidir se o erro é grave o suficiente para justificar uma intervenção.

### Consultores

Projetos XP não produzem muitos especialistas. Se a equipe precisa de um consultor, certifique-se de que a equipe esteja completamente ciente do problema que precisa resolver, que possa fornecer testes que mostrem exatamente quando o problema está resolvido, e que não deixará o consultor se retirar e resolver o problema sozinho.

### Big Boss

Se você é o Big Boss, está principalmente lá para dar à equipe coragem e confiança e, ocasionalmente, insistir para que a equipe faça o que afirma fazer. A equipe depende da sua coragem, pois o que ela faz pode às vezes parecer louco para você.

---

## 23. A Regra 20:80

*O significado do XP só se torna plenamente aparente quando todas as práticas estão em uso. Muitas dessas práticas podem ser adotadas incrementalmente, mas seus efeitos se multiplicam quando são usadas todas juntas.*

Os programadores de software estão acostumados a lidar com a regra 20:80, que diz que 80% do ganho vem de 20% do trabalho. XP usa essa regra para seu benefício — vai para produção com os 20% mais valiosos de funcionalidade, termina os 20% mais valiosos do design.

Isso nos coloca diante de um dilema. XP significa que precisamos escolher tudo ou nada? Não necessariamente. Elementos individuais do XP podem trazer vantagens significativas. Simplesmente acredito que muito mais pode ser ganho quando todas as peças são reunidas.

---

## 24. O que Torna XP Difícil?

*Embora as práticas individuais possam ser realizadas por programadores simples, é difícil juntar todas as peças e mantê-las unidas. São principalmente as emoções — especialmente o medo — que tornam o XP difícil.*

XP é simples, mas não é fácil. As práticas que compõem o XP podem ser aprendidas por qualquer pessoa que tenha convencido outra a pagá-la para programar. Essa não é a parte difícil. A parte difícil é juntar todas as peças e depois mantê-las em equilíbrio.

Aspectos difíceis:
- **É difícil fazer coisas simples.** Às vezes é mais fácil fazer algo complicado do que algo simples, especialmente quando se tem feito coisas complicadas com sucesso no passado.
- **É difícil admitir que não se sabe algo.** XP é uma disciplina baseada na premissa de que só se pode desenvolver tão rapidamente quanto se aprende.
- **É difícil trabalhar com alguém.** Todo o nosso sistema educacional visa o desempenho individual.
- **É difícil superar limiares emocionais.** O bom funcionamento de um projeto XP depende do trato constante com emoções.
- **As práticas XP são o oposto do que ouvimos, dissemos e talvez praticado com sucesso no passado.**

---

## 25. Quando Não Experimentar XP

*Os limites exatos do XP ainda não estão claros. Existem porém algumas condições que com certeza absoluta impedem o funcionamento do XP — grandes equipes, clientes desconfiados, uma tecnologia que não suporta mudanças.*

Existem práticas em XP que são recomendáveis independentemente do que você pensa sobre o assunto como um todo.

Condições onde XP não funciona:
- **Cultura empresarial que dirige a equipe.** Qualquer empresa que conduza projetos ditando a direção da equipe terá dificuldades com uma equipe que insiste em se autodirigir.
- **Cultura que força horas extras.** Não se pode praticar XP quando se está cansado.
- **Programadores muito inteligentes.** Para os mais inteligentes, pode ser mais difícil trocar o jogo de "acertar na primeira" por comunicação constante e evolução contínua.
- **Equipes muito grandes.** Provavelmente não se pode conduzir um projeto XP com cem programadores.
- **Tecnologia que implica uma curva de custo exponencial.**
- **Feedback muito lento.**
- **Ambiente físico inadequado.**

---

## 26. XP na Prática

*A maioria dos contratos comuns pode ser usada para projetos XP, embora com pequenas alterações.*

### Preço Fixo

A aparente dificuldade é como fazer contratos com preço fixo, prazo fixo ou escopo fixo se estamos jogando o jogo de planejamento? No final, teremos um contrato com preço fixo, prazo fixo e escopo variável.

Em XP, a relação de contrato muda de forma sutil mas significativa. O escopo inicial é ilustrativo: "Por exemplo, por X reais podemos concluir as seguintes doze funcionalidades em 12 meses." O cliente precisa decidir se essas funcionalidades valem X reais.

### Outsourcing

Em vez de um cliente receber no final um monte de código que não consegue manter, o XP possibilita que o cliente pelo menos tenha os testes de unidade e funcionais para garantir que as mudanças feitas por ele não afetem a funcionalidade existente.

### Insourcing

Uma variante do outsourcing que o XP pode fornecer: substituir gradualmente os membros da equipe por técnicos do cliente. No final do período do contrato, metade da equipe é composta por funcionários do cliente, que podem manter e continuar o desenvolvimento do programa.

### Abono por Conclusão

Uma excelente forma de aproximar os interesses do fornecedor e do cliente é pagar um bônus pela conclusão pontual do projeto. De certa forma, isso é uma aposta que uma equipe XP não pode perder.

### Frameworks

XP não é particularmente adequado para "reutilização por planejamento antecipado". Em XP, nunca gastaríamos seis meses criando frameworks e só então começaríamos a usá-los. Em XP, criamos aplicações.

### Produtos Comerciais

XP também pode ser usado para desenvolver software comercial. O papel do lado comercial é assumido pelo departamento de marketing.

---

## 27. Conclusão

Todos os métodos são baseados no medo. Tenta-se estabelecer hábitos que impeçam que os próprios medos se tornem realidade. XP não difere nesse aspecto.

Os medos de Kent Beck:
- Trabalhar em algo que não importa
- Que projetos sejam cancelados porque não fiz progresso técnico suficiente
- Tomar decisões comerciais ruins
- Que empresários tomem más decisões técnicas por mim
- Chegar ao fim de minha carreira como programador de sistemas e perceber que não passei tempo suficiente com meus filhos
- Fazer trabalho do qual não me orgulho

### Expectativa

Um jovem foi até um mestre em esgrima. Os dois estavam sentados ao sol diante da cabana do mestre quando o mestre ensinou ao rapaz a primeira lição: "Aqui está a sua espada de madeira de treinamento. Posso atingi-lo a qualquer momento com minha espada de madeira, e você precisa impedir isso."

*Plaft!*

"Ai!" "Eu disse 'a qualquer momento'." *Plaft!*

O aprendiz levantou sua espada e olhou furioso para o mestre.

"Não, agora não vou bater, pois é isso que você está esperando."

Dentro dos próximos dias, o aprendiz acumulou uma bela coleção de hematomas. Ele tentava prestar atenção em tudo ao seu redor. Mas sempre que sua atenção diminuía, *Plaft!*

Não demorou muito para que ele se sentasse e chorasse de frustração. "Não consigo mais suportar isso. Não nasci para ser espadachim. Vou para casa." Sem saber exatamente por quê, naquele momento ele puxou sua espada e girou para bloquear o golpe do mestre. O mestre disse: "Agora você está pronto para aprender."

Podemos nos enlouquecer com expectativas. Preparando-nos para cada eventualidade imaginável, tornamo-nos vulneráveis para as eventualidades que não conseguimos imaginar. A equipe pode estar preparada a qualquer momento para ir em qualquer direção que o negócio ou o sistema exigir. Ao renunciar explicitamente a se preparar para mudanças, a equipe paradoxalmente se prepara para qualquer tipo de mudança. A equipe não espera nada. Portanto, também não pode ser surpreendida.

---

## A. Bibliografia Comentada

*Esta bibliografia oferece a possibilidade de conhecer mais profundamente os aspectos do XP que lhe interessam.*

### Filosofia

- Sue Bender, *Plain and Simple: A Woman's Journey to the Amish* — Mais não é necessariamente melhor. Mas menos também não é necessariamente melhor.
- Cynthia Heimel, *Sex Tips for Girls* — A técnica definitiva é o entusiasmo genuíno.
- Thomas Kuhn, *The Structure of Scientific Revolutions* — XP é uma mudança de paradigma para algumas pessoas.

### Geisteshaltung (Mentalidade)

- Christopher Alexander, *Notes on the Synthesis of Form* — Alexander vê o design como decisões que resolvem restrições conflitantes.
- Christopher Alexander, *The Timeless Way of Building* — A relação descrita entre designers/construtores e os moradores dos edifícios se assemelha muito à relação entre programadores e clientes.

### Processos

- Christopher Alexander, Sara Ishikawa e Murray Silverstein, *A Pattern Language* — Exemplo de um sistema de regras que deve produzir propriedades emergentes.
- James Gleick, *Caos* — Uma introdução suave à teoria do caos.

### Sistemas

- Gerald Weinberg, *Quality Software Management: Volume 1, Systems Thinking* — Um sistema e uma notação para a consideração de sistemas de ações interativas.
- Warren Witherell e Doug Evrard, *The Athletic Skier* — Um sistema de regras interdependentes para o esqui. Fonte da regra 20:80.

### Pessoas

- Tom DeMarco e Timothy Lister, *Peopleware* — Estendendo o diálogo prático sobre programas escritos por pessoas e especialmente por equipes.
- Gary Klein, *Sources of Power* — Um texto simples e legível sobre como pessoas experientes realmente tomam decisões em situações difíceis.

### Gerenciamento de Projetos

- Fred Brooks, *The Mythical Man-Month* — Histórias que fazem você pensar sobre as quatro variáveis.
- Tom DeMarco, *Controlling Software Projects* — Excelentes exemplos de como criar e usar feedbacks para obter métricas sobre projetos de software.
- Tom Gilb, *Principles of Software Engineering Management* — Um forte defensor de estratégias de entrega evolucionária.

### Programação

- Kent Beck, *Smalltalk Best Practice Patterns* — A modéstia proíbe qualquer comentário.
- Kent Beck e Erich Gamma, *Test Infected: Programmers Love Writing Tests* — Como escrever testes automatizados com JUnit.
- Martin Fowler, *Refactoring* — O guia essencial para refatoração sistemática de código.

---

## B. Glossário

**Teste automatizado** — Um caso de teste executado sem intervenção humana. O teste verifica se o sistema calcula os valores esperados.

**Fator de carga** — A relação medida entre o tempo de desenvolvimento ideal e o tempo de calendário. Tipicamente tem um valor entre 2 e 4.

**Coach** — Um papel na equipe desempenhado por alguém que observa o processo como um todo e alerta a equipe para problemas ou oportunidades de melhoria potenciais.

**Entropia** — A tendência de um sistema a se tornar mais propenso a erros com o tempo, e a tendência das mudanças de se tornarem mais caras.

**Tarefa de desenvolvimento** — Algo que o programador sabe que o sistema precisa fazer. As tarefas devem ser estimáveis em um a três dias de tempo de desenvolvimento ideal.

**Exploração** — Uma fase de desenvolvimento na qual o cliente torna claro o que o sistema poderia fazer como uma unidade.

**Teste funcional** — Um teste escrito da perspectiva do cliente. (Nota: o termo "teste funcional" foi substituído pelo de "teste de aceitação".)

**Tempo de desenvolvimento ideal** — A unidade de medida de uma estimativa de esforço, na qual se pergunta: "Quanto tempo levará se não houver interrupções e catástrofes?"

**Iteração** — Um período de uma a quatro semanas. No início, o cliente escolhe as funcionalidades a serem implementadas na primeira iteração. No final, o cliente pode executar seus testes funcionais para determinar se a iteração foi bem-sucedida.

**Plano de iteração** — Uma pilha de story cards (funcionalidades) e uma pilha de task cards (tarefas). Os programadores se comprometem a assumir tarefas e estimam o esforço necessário.

**Teste de unidade** — Um teste escrito da perspectiva dos programadores.

**Cliente** — Um papel na equipe. Alguém decide quais funcionalidades o sistema precisa ter, quais são necessárias primeiro e quais podem ser adiadas, e define os testes com os quais se verifica o correto funcionamento das story cards.

**Gerente** — Um papel na equipe desempenhado por alguém que aloca recursos.

**Nova estimativa** — Uma medida de planejamento na qual a equipe re-estima todas as funcionalidades ainda a serem realizadas para uma versão.

**Parceiro** — A outra pessoa que programa com você.

**Replanejamento** — Uma medida de planejamento pela qual o cliente pode insistir na data de conclusão de uma versão reduzindo o escopo da versão devido a estimativas de esforço mais altas ou a uma velocidade de trabalho menor da equipe.

**Jogo do planejamento** — O procedimento de planejamento do XP. O lado comercial pode determinar o que o sistema deve fazer. O desenvolvimento determina quanto custa cada funcionalidade e qual é o orçamento por dia/semana/mês disponível.

**Produção** — A fase de desenvolvimento durante a qual o cliente efetivamente ganha dinheiro com o sistema.

**Programação em pares** — Uma forma de programar na qual duas pessoas programam com um teclado, um mouse e uma tela. Em XP, os pares tipicamente mudam várias vezes ao dia.

**Programador** — Um papel na equipe para alguém que analisa, projeta, testa, programa e integra.

**Refatoração** — Uma mudança no sistema que deixa seu comportamento inalterado, mas melhora uma qualidade não funcional — simplicidade, flexibilidade, compreensibilidade, desempenho.

**Story card** — Descreve uma funcionalidade desejada pelo cliente no sistema. As story cards devem ser estimáveis em uma a cinco semanas de tempo de programação ideal e testáveis.

**Metáfora do sistema** — Uma história com a qual todos — cliente, programador, gerente — podem ilustrar o funcionamento do sistema.

**Task card** — Descreve uma tarefa de desenvolvimento.

**Velocidade da equipe** — O número de semanas de tempo de desenvolvimento ideal que a equipe pode produzir em um determinado período de tempo.

**Gerente de prazo (tracker)** — Um papel na equipe que mede o progresso do trabalho por meio de dados.

**Caso de teste** — Um conjunto automatizado de estímulos e respostas para o sistema. Cada caso de teste deve deixar o sistema como o encontrou, para que os testes possam ser executados independentemente uns dos outros.

**Plano comprometido** — Uma versão e uma data. O plano comprometido é continuamente refinado a cada iteração e modificado por novas estimativas de esforço e correções.

**Versão** — Uma pilha de story cards (funcionalidades) que juntos satisfazem a um requisito comercial.

---

## Índice

*(Seção de índice do livro original — mantida para referência)*

**Regra 20:80** — 149

**A**
- Bônus por conclusão — 162
- Mudanças: Estratégia de design — 104, 105, 111, 112; influência no desenvolvimento de software — 3, 4; representar com imagens — 111, 112; custos — 21, 22, 23, 24, 25; estratégia de gerenciamento — 71; outsourcing — 160
- Ambiente de trabalho: requisitos do XP — 78, 79, 128, 157; influência na produtividade — 77; reorganizar — 78, 79, 123, 128
- Jornada de trabalho: semana de 40 horas — 60, 61
- Arquitetura: estratégia de design — 113; fase de exploração — 131, 132; iterações — 134; sistema — 113
- Tarefas: estimativa de esforço — 92; definição — 177; assumir responsabilidade por — 92
- Estimativa de esforço — 55; fase de exploração — 90, 131, 132; tempo de desenvolvimento ideal — 93; planejamento de iteração — 92, 93; correção do plano na fase de direção — 91, 94; estratégia de planejamento — 90, 91; papel do gerente de prazo — 74, 75; comparar com esforço real — 74, 75; fase de comprometimento — 93

**P**
- Programação em pares — 54, 58, 59, 100, 101, 102
- Jogo do planejamento — 53, 54, 55
- Padrões de codificação — 54, 62
- Refatoração — 54, 58
- Testes — 54, 57, 58
- Visão geral das práticas XP — 53, 54; implementar — 63

**Valores XP**
- Simplicidade — 30, 31, 103
- Comunicação — 29, 30, 103
- Coragem — 33, 34, 103
- Feedback — 31, 32, 103
- Visão geral — 29; implementar na prática — 34, 35

---

## Direitos Autorais

Os dados, textos, design e gráficos deste eBook, bem como quaisquer dados adicionais do eBook eventualmente oferecidos, são protegidos por direito autoral. Disponibilizamos este eBook apenas como **licença individual para uso pessoal**!

Qualquer outro uso deste eBook ou de materiais e informações relacionados, incluindo:
- Reprodução
- Transmissão
- Distribuição
- Publicação na Internet, intranets, extranets
- Modificação
- Revenda
- E publicação

requer a autorização por escrito da editora.

Em particular, é expressamente proibida a remoção ou alteração da proteção por senha atribuída pela editora!

Em caso de dúvidas sobre este assunto, entre em contato: info@pearson.de

---

*Traduzido do alemão para o português brasileiro.*
*Original: "Extreme Programming — Die revolutionäre Methode für Softwareentwicklung in kleinen Teams", de Kent Beck.*
*Edição alemã © 2000 by Addison-Wesley Verlag, Pearson Education Deutschland GmbH*
