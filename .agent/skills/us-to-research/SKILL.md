---
name: us-to-research
description: "Converte requisitos abstratos escritos por Product Owners em um research.md estruturado para desenvolvimento frontend. Use esta skill sempre que receber uma User Story, briefing de produto, ou descrição de feature não técnica que precisa ser traduzida para linguagem de desenvolvimento. Acionada por: 'gere o research.md da US'. Deve ser usada ANTES do plan e do tasks."
---

# Research Generator

Converte requisitos abstratos de produto (User Stories, briefings, notas do PO) em um `research.md` estruturado, claro e acionável para desenvolvimento **frontend**.

## Posição no fluxo

```
[US do PO / Notion]  →  [ESTA SKILL] research.md  →  plan.md  →  tasks.md
```

## Funcionamento

### Etapa 1: Receber o requisito

Solicite ao usuário (se não fornecido):
- O **nome da feature** no formato `nome-da-feature`
- O **conteúdo do requisito** (texto do Notion, US, briefing, print, etc.)

Verifique se existe `specs/features/[nome-da-feature]/research.md`. Se existir, leia-o antes de continuar — pode conter contexto parcial.

### Etapa 2: Perguntas de esclarecimento

Faça **3 a 5 perguntas essenciais** quando o requisito for ambíguo. Foque em:

- **Problema real:** Qual dor o usuário sente hoje?
- **Comportamento esperado:** O que muda na tela/fluxo?
- **Integração com backend:** Há API já existente ou será criada em paralelo?
- **Escopo:** O que está fora desta entrega?
- **Critério de done:** Como saberemos que está pronto?

**Formato das perguntas:**

```
1. Esta feature altera uma tela existente ou cria uma nova?
   A. Altera tela existente (ex: adiciona campo/botão)
   B. Cria nova tela/página
   C. Ambos
   D. Outro: [especifique]

2. A integração com o backend será:
   A. API REST já existente (apenas consumir)
   B. API REST a ser criada em paralelo pelo time de backend
   C. Server Actions (Next.js / full-stack)
   D. Mock/dados estáticos por enquanto
```

O usuário pode responder com "1A, 2B". **Se o requisito já for claro o suficiente, pule esta etapa.**

### Etapa 3: Gerar e salvar o research.md

Gere o arquivo completo e salve em `specs/features/[nome-da-feature]/research.md`.

**Após salvar, apresente um resumo ao usuário e aguarde aprovação:**

```
✅ research.md gerado em specs/features/[nome]/research.md

Resumo:
- X histórias de usuário
- Principais telas/componentes: [lista]
- Integração: [tipo de integração]
- Fora do escopo: [lista]

👉 Revise o arquivo e responda "aprovado" para prosseguir para o plan,
   ou indique o que deve ser ajustado.
```

## Estrutura do research.md

```markdown
# [Nome da Feature]

## 1. Visão Geral

Descrição em 2–4 linhas do que será construído e qual problema resolve para o usuário.

## 2. Objetivos

- Objetivo específico e mensurável 1
- Objetivo específico e mensurável 2

## 3. Contexto de Integração com Backend

Descreva como o frontend se conectará ao backend:

- **Tipo:** REST API | Server Actions | GraphQL | Mock
- **Status:** Existente | A ser criado | Em desenvolvimento paralelo
- **Contratos disponíveis:** [link para swagger/docs ou "a definir no plan"]
- **Autenticação:** [token JWT / sessão / sem auth]

## 4. Histórias de Usuário

Cada história deve ser pequena o suficiente para ser implementada em uma única sessão.

### US-001: [Título]

**Descrição:** Como [usuário], eu quero [ação na interface] para que [benefício].

**Tela/Componente afetado:** [nome da página ou componente]

**Critérios de aceitação:**
- [ ] Critério visual verificável (ex: "botão aparece desabilitado quando campo vazio")
- [ ] Critério de comportamento (ex: "ao clicar em salvar, exibe toast de sucesso")
- [ ] Critério de integração (ex: "chama endpoint POST /items com os dados do form")
- [ ] Typecheck aprovado
- [ ] **Verificar no navegador** usando a skill dev-browser

> ⚠️ Toda história com alteração de UI deve incluir "Verificar no navegador" como critério.

## 5. Requisitos Funcionais

- RF-01: O sistema deve [comportamento específico e inequívoco]
- RF-02: Quando o usuário [ação], a interface deve [resposta]
- RF-03: Em caso de erro na API, exibir [mensagem/comportamento]

## 6. Requisitos Não-Funcionais (Frontend)

- RNF-01: Componentes devem ser responsivos (mobile-first)
- RNF-02: Estados de loading devem ser exibidos durante chamadas à API
- RNF-03: Erros de validação devem aparecer inline nos campos

## 7. Fora do Escopo

Liste explicitamente o que NÃO será feito nesta entrega:
- Não inclui [funcionalidade X]
- Não altera [tela Y]
- Não cobre [caso de uso Z]

## 8. Referências Visuais

- Link para Figma/protótipo: [url ou "não disponível"]
- Componentes existentes que podem ser reutilizados: [lista]
- Design system utilizado: [nome ou "não definido"]

## 9. Métricas de Sucesso

- [Como será medido que a feature atingiu seu objetivo]
- Ex: "Usuário consegue completar o fluxo em menos de 3 cliques"

## 10. Questões em Aberto

- [ ] [Dúvida que precisa ser respondida antes ou durante o desenvolvimento]
```

---

## Regras de Escrita

- **Escreva para um dev júnior ou agente de IA** — seja explícito, evite jargões sem explicação
- **Critérios de aceitação são verificáveis**, não vagos. "Funciona" é ruim. "Exibe spinner durante loading e desaparece após resposta" é bom
- **Toda história com UI** deve ter "Verificar no navegador usando dev-browser" como critério
- **Não misture frontend e backend** — se a task é frontend, o critério é visual/comportamental, não "implementar endpoint"
- **Integração é contrato**, não implementação — descreva o que o frontend espera receber/enviar, não como o backend deve funcionar

---

## Lista de Verificação (antes de salvar)

- [ ] Perguntas de esclarecimento foram feitas (ou contexto era suficiente)
- [ ] Todas as histórias têm critérios verificáveis
- [ ] Todas as histórias com UI têm "Verificar no navegador"
- [ ] Seção de integração com backend está preenchida
- [ ] Fora do escopo está explícito
- [ ] Arquivo salvo em `specs/features/[nome-da-feature]/research.md`
- [ ] Resumo apresentado ao usuário para aprovação
