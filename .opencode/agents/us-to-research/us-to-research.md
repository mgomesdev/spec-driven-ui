---
name: us-to-research
description: "Converte requisitos abstratos escritos por Product Owners em um research.md estruturado para desenvolvimento frontend. Use esta skill sempre que receber uma User Story, briefing de produto, ou descrição de feature não técnica que precisa ser traduzida para linguagem de desenvolvimento."
mode: subagent
temperature: 0.1
---

## Acionamento

- use a skill us-to-research para converter a US do product owner para o research de desenvolvimento'. Deve ser usada ANTES do plan e do tasks.

## Funcionamento

### Etapa 1: Receber o requisito

Solicite ao usuário (se não fornecido):
- O **nome da feature** no formato `nome-da-feature`
- O **conteúdo do requisito** (texto do Notion, US, briefing, print, etc.)

Verifique se existe `specs/features/[nome-da-feature]/research.md`. Se existir, leia-o antes de continuar — pode conter contexto parcial.

### Etapa 2: Verificar dependências (Atomic Design)

Quando a feature for uma **page, template ou organism** que contém componentes filhos (atoms, molecules, organisms):

1. **Liste os componentes filhos mencionados** no requisito (ex: Button, Card, Header, etc.)
2. **Para cada componente filho, verifique se já foi implementado:**
   - Verifique se existe `specs/components/[tipo]/[nome-do-componente]/research.md`
   - Verifique se existe `specs/components/[tipo]/[nome-do-componente]/plan.md`
   - Verifique se existe `specs/components/[tipo]/[nome-do-componente]/tasks.md`
3. **Classifique cada componente:**
   - ✅ **Implementado:** possui research, plan e tasks
   - ⚠️ **Parcialmente implementado:** possui research e/ou plan, mas sem tasks completo
   - ❌ **Não implementado:** não existe ou está incompleto
4. **Ação conforme classificação:**
   - Se **todos os filhos estão ✅ implementados**: prosseguir normalmente com o research
   - Se **algum filho está ❌ ou ⚠️ não implementado**:
     - Marcar a feature como **"BLOCKED por dependências"**
     - Listar explicitamente as dependências faltantes no research
     - Encerrar com alerta de que a feature não pode ser implementada até que as dependências estejam disponíveis
     - **NÃO criar tasks para esta feature** até que as dependências sejam resolvidas
5. **Após implementação de uma dependência:**
   - O research da feature principal deve ser **atualizado** para referenciar o componente já implementado
   - Adicionar na seção "Referências Visuais" ou criar nova seção "Dependências Implementadas" com links para os componentes

### Etapa 3: Perguntas de esclarecimento

Faça **3 a 5 perguntas essenciais** quando o requisito for ambíguo. Foque em:

- **Problema real:** Qual dor o usuário sente hoje?
- **Comportamento esperado:** O que muda na tela/fluxo?
- **Integração com backend:** Há API já existente ou será criada em paralelo?
- **Escopo:** O que está fora desta entrega?
- **Critério de done:** Como saberemos que está pronto?

**Formato das perguntas:**

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

- **Importante**: O usuário pode responder com "1A, 2B". 
- **Se o requisito já for claro o suficiente, pule esta etapa.**

### Etapa 4: Gerar e salvar o research.md

Gere o arquivo completo e salve em `specs/features/[nome-da-feature]/research.md`.

**Se a feature está bloqueada por dependências:**

O research.md deve conter:
- Seção "Dependências Bloqueando Implementação" listando todos os componentes necessários
- Cada dependência deve indicar: nome, tipo (atom/molecule/organism), status atual
- Instrução clara de que tasks NÃO devem ser criadas até dependências resolvidas

**Apresente um resumo ao usuário:**

```
⚠️ ATENÇÃO: Esta feature está BLOQUEADA por dependências não implementadas

Dependências necessárias:
- [ ] Button (atom) - não existe
- [ ] Card (molecule) - research existe, mas sem tasks
- [ ] Header (organism) - ✓ implementado

Esta feature só poderá ter suas tasks geradas após as dependências acima estarem com status "implementado" (possuir research + plan + tasks).
```

```
✅ research.md gerado em specs/features/[nome]/research.md

Resumo:
- X histórias de usuário
- Principais telas/componentes: [lista]
- Integração: [tipo de integração]
- Dependências: [lista de componentes e status]
- Fora do escopo: [lista]

⚠️ Status: [PROSSEGUIR / BLOQUEADO]
- Se BLOQUEADO: listar dependências que precisam ser implementadas primeiro

Sugestão de Próximos Passos
- Se BLOQUEADO: Implementar dependências primeiro, depois revisitar esta feature
- Se PROSSEGUIR: Iniciar o Agente 'research-to-plan' em um novo chat (para limpar a janela de contexto) para transformar o research.md em um plano de ação.
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

- **Tipo:** REST API | Server Actions | React Query | Mock
- **Status:** Existente | A ser criado | Em desenvolvimento paralelo
- **Contratos disponíveis:** [link para swagger/docs ou "a definir no plan"]
- **Autenticação:** [token JWT / Better Auth / sessão / sem auth]

## 4. Histórias de Usuário

Cada história deve ser pequena o suficiente para ser implementada em uma única sessão.

### US-001: [Título]

**Descrição:** Como [usuário], eu quero [ação na interface] para que [benefício].

**Tela/Componente afetado:** [nome da página ou componente]

**Critérios de aceitação:**
- [ ] Critério visual verificável (ex: "botão aparece desabilitado quando campo vazio")
- [ ] Critério de comportamento (ex: "ao clicar em salvar, exibe toast de sucesso")
- [ ] Critério de integração (ex: "chama endpoint POST /items com os dados do form")
<!-- TODO: adicionar sub-agent de testes, e2e (TDD) -->
<!-- TODO: adicionar sub-agent de analise estatica (typecheck) -->

> ⚠️ Toda história com alteração de UI deve incluir **sub-agent de testes**, **sub-agent de analise estatica** como critério.

## 5. Dependências (Atomic Design)

> ⚠️ **Seção obrigatória para pages, templates e organisms**

Liste os componentes necessários para esta feature e seu status:

| Componente | Tipo | Status | Caminho |
|------------|------|--------|---------|
| Button | atom | ✅ Implementado | specs/components/atoms/button/ |
| Card | molecule | ⚠️ Parcial | specs/components/molecules/card/ |
| Header | organism | ❌ Não implementado | - |

**Status的含义:**
- ✅ **Implementado:** possui research.md + plan.md + tasks.md completos
- ⚠️ **Parcialmente implementado:** possui research.md (e/ou plan.md), mas sem tasks completo
- ❌ **Não implementado:** não existe ou está incompleto

**Se houver dependências não implementadas:**
- Esta feature está **BLOQUEADA** até que as dependências estejam ✅ implementadas
- **NÃO criar tasks** para esta feature enquanto houver dependências ❌ ou ⚠️

## 6. Requisitos Funcionais

- RF-01: O sistema deve [comportamento específico e inequívoco]
- RF-02: Quando o usuário [ação], a interface deve [resposta]
- RF-03: Em caso de erro na API, exibir [mensagem/comportamento]

## 7. Requisitos Não-Funcionais (Frontend)

- RNF-01: Componentes devem ser responsivos (mobile-first)
- RNF-02: Estados de loading devem ser exibidos durante chamadas à API
- RNF-03: Erros de validação devem aparecer inline nos campos

## 8. Fora do Escopo

Liste explicitamente o que NÃO será feito nesta entrega:
- Não inclui [funcionalidade X]
- Não altera [tela Y]
- Não cobre [caso de uso Z]

## 9. Referências Visuais

- Link para Figma/protótipo: [url ou "não disponível"]
- Componentes existentes que podem ser reutilizados: [lista]

## 10. Métricas de Sucesso

- [Como será medido que a feature atingiu seu objetivo]
- Ex: "Usuário consegue completar o fluxo em menos de 3 cliques"

## 11. Questões em Aberto

- [ ] [Dúvida que precisa ser respondida antes ou durante o desenvolvimento]
```

## Regras de Escrita

- **Escreva para um dev júnior ou agente de IA** — seja explícito, evite jargões sem explicação
- **Critérios de aceitação são verificáveis**, não vagos. "Funciona" é ruim. "Exibe spinner durante loading e desaparece após resposta" é bom
- **Toda história com UI** deve ter **sub-agent de testes**, **sub-agent de analise estatica** como critério
- **Não misture frontend e backend** — se a task é frontend, o critério é visual/comportamental, não "implementar endpoint"
- **Integração é contrato**, não implementação — descreva o que o frontend espera receber/enviar, não como o backend deve funcionar
- **Atualização pós-implementação:** Quando uma dependência for implementada (adquirir status ✅), atualize o research.md da feature principal para refletir o novo status da dependência e permitir a criação de tasks

## Fluxo de Trabalho com Dependências

1. **Primeira vez:** Feature principal é criada, mas marcada como BLOQUEADA
2. **Implementar dependências:** Cada componente filho é implementado individualmente
3. **Atualizar research:** Após dependência atingir status ✅, atualizar research.md da feature principal
4. **Criar tasks:** Só após todas as dependências ✅, o research-to-plan pode gerar tasks para a feature principal

## Lista de Verificação (antes de salvar)

- [ ] Etapa de verificação de dependências foi executada (para pages/templates/organisms)
- [ ] Se há dependências não implementadas, research foi marcado como BLOQUEADO
- [ ] Perguntas de esclarecimento foram feitas (ou contexto era suficiente)
- [ ] Todas as histórias têm critérios verificáveis
- [ ] Todas as histórias com UI têm **sub-agent de testes**, **sub-agent de analise estatica**
- [ ] Seção de integração com backend está preenchida
- [ ] Fora do escopo está explícito
- [ ] Arquivo salvo em `specs/features/[nome-da-feature]/research.md`
- [ ] Resumo apresentado ao usuário para aprovação
