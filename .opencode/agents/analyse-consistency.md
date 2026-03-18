---
name: analyze-consistency
description: "Realizar uma análise não destrutiva de consistência e qualidade entre artefatos nos arquivos research.md, plan.md e tasks.md após a geração das tarefas."
mode: subagent
temperature: 0.1
permissions:
    *: ask
---

## Entrada do usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Meta

Identifique inconsistências, duplicações, ambiguidades e itens subespecificados nos três artefatos principais (`research.md`, `plan.md`, `tasks.md`) antes da implementação. Este comando DEVE ser executado somente após o arquivo `tasks.md` ter cido gerado com sucesso.

## Restrições Operacionais

**SOMENTE LEITURA**: **Não** modifique nenhum arquivo. Gere um relatório de análise estruturado. Ofereça um plano de correção opcional (o usuário deve aprová-lo explicitamente antes que quaisquer comandos de edição subsequentes sejam executados manualmente).

## Fluxo do Projeto

O projeto segue o seguinte fluxo de artefatos:

```
research.md → plan.md → tasks.md → implement-tasks
```

Cada artefato é gerado pelo agente anterior:
- **us-to-research**: Gera `research.md` a partir de requisitos/US
- **research-to-plan**: Gera `plan.md` a partir de `research.md`
- **plan-to-tasks**: Gera `tasks.md` a partir de `plan.md`
- **implement-tasks**: Executa as histórias do `tasks.md`

## Etapas de Execução

### 1. Obter o nome da feature

O usuário deve fornecer o nome da feature no formato `nome-da-feature`.

Derive os caminhos absolutos:
- RESEARCH = `specs/features/[nome-da-feature]/research.md`
- PLANO = `specs/features/[nome-da-feature]/plan.md`
- TAREFAS = `specs/features/[nome-da-feature]/tasks.md`

Interrompa o processo com uma mensagem de erro se algum arquivo necessário estiver faltando (instrua o usuário a executar o comando necessário para o arquivo em falta).

### 2. Carregar artefatos (divulgação progressiva)

Carregar apenas o contexto mínimo necessário de cada artefato:

**Do arquivo research.md:**
- Visão Geral
- Objetivos
- Histórias de Usuário
- Requisitos Funcionais
- Requisitos Não-Funcionais
- Contexto de Integração com Backend

**Do arquivo plan.md:**
- Visão Geral Técnica
- Estrutura de Arquivos
- Interfaces e Types
- Contratos de API Consumidos
- Componentes: Props e Responsabilidades
- Hooks Customizados
- Diagrama de Dependências

**Do arquivo tasks.md:**
- IDs de User Stories
- Descrições
- Artefatos (cria/modifica)
- Contexto do plan
- Critérios de Aceitação

**Da constituição do projeto:**
- Carregar `specs/docs/guardrails.md` para validação de princípios

### 3. Construir Modelos Semânticos

Criar representações internas (não incluir artefatos brutos na saída):

- **Inventário de User Stories**: Cada US com critérios de aceitação
- **Inventário de requisitos funcionais**: RFs do research com chave estável
- **Inventário de requisitos não-funcionais**: RNFs com critérios mensuráveis
- **Mapeamento da cobertura de tarefas**: Mapeie cada tarefa para um ou mais requisitos ou histórias
- **Inventário de artefatos**: Arquivos a criar/modificar conforme plan.md

### 4. Passagens de Detecção (Análise com Uso Eficiente de Tokens)

Priorize as descobertas de alta relevância. Limite a um total de 50 descobertas; agregue as restantes no resumo de resultados excedentes.

#### A. Detecção de Duplicatas

- Identificar requisitos quase idênticos entre research e plan
- Marcar User Stories que tratam do mesmo objetivo

#### B. Detecção de Ambiguidade

- Sinalizar adjetivos vagos (rápido, escalável, seguro, intuitivo, robusto) que não possuam critérios mensuráveis
- Sinalizar marcadores de posição não resolvidos (TODO, TKTK, ???, `<marcador de posição>`, etc.)
- Sinalizar critérios de aceitação vagos ("funciona corretamente", "boa experiência do usuário")

#### C. Subespecificação

- User Stories sem critérios de aceitação verificáveis
- Requisitos com verbos, mas sem objeto ou resultado mensurável
- Tarefas que fazem referência a arquivos ou componentes não definidos no plan

#### D. Alinhamento com Guardrails

Qualquer requisito ou elemento do plano que entre em conflito com um princípio da constituição (`specs/docs/guardrails.md`)
- Ausência de seções obrigatórias previstas nos guardrails
- Violação de padrões estabelecidos

#### E. Lacunas de Cobertura

- User Stories sem tarefas associadas
- Requisitos funcionais do research sem cobertura no plan/tasks
- Requisitos não funcionais (性能, segurança, acessibilidade) não refletidos nas tarefas

#### F. Inconsistência

- Deriva terminológica (o mesmo conceito com nome diferente em vários arquivos)
- Contradições entre research e plan (ex: tipos diferentes, bibliotecas diferentes)
- Contradições na ordem das tarefas (ex: tarefas de integração antes das tarefas de configuração fundamental)
- Requisitos do research não contemplados no plan

### 5. Atribuição de Severidade

Utilize esta heurística para priorizar as descobertas:

- **CRÍTICO**: Viola os guardrails, artefato essencial ausente, requisito com cobertura zero que bloqueia a funcionalidade básica
- **ALTA**: Requisito duplicado ou conflitante, atributo de segurança/desempenho ambíguo, critério de aceitação não testável
- **MÉDIO**: Desvio de terminologia, falta de cobertura de requisitos não funcionais, caso extremo subespecificado
- **BAIXO**: Melhorias de estilo/redação, redundância menor que não afeta a ordem de execução

### 6. Elaborar Relatório de Análise Compacta

Gere um relatório em Markdown (sem gravar arquivos) com a seguinte estrutura:

## Relatório de Análise de Consistência

### Fluxo Analisado

- Research: `specs/features/[nome-da-feature]/research.md`
- Plan: `specs/features/[nome-da-feature]/plan.md`
- Tasks: `specs/features/[nome-da-feature]/tasks.md`

### Tabela de Descobertas

| ID | Categoria | Gravidade | Local(is) | Resumo | Recomendação |
|----|----------|----------|-------------|---------|----------------|
| A1 | Duplicação | ALTA | research.md:US-001, US-003 | Duas histórias tratam do mesmo objetivo... | Unir ou clarificar escopo |

(Adicione uma linha por descoberta; gere IDs estáveis prefixados pela inicial da categoria.)

### Cobertura de Requisitos

| ID do Requisito | Tipo | Covered por Tasks | Observações |
|----------------|------|-------------------|-------------|
| RF-01 | Funcional | US-001, US-002 | OK |

### Cobertura de User Stories

| US | Tiene Task? | Task IDs | Observações |
|----|-------------|----------|--------------|
| US-001 | sim | T001 | OK |

### Questões de Alinhamento com Guardrails

(se houver)

### Métricas

- Total de User Stories no research: X
- Total de User Stories no tasks: Y
- Total de requisitos funcionais: Z
- Cobertura % (RF com >=1 task): W%
- Contagem de ambiguidades: N
- Contagem de duplicatas: M

### 7. Forneça as próximas ações

Ao final do relatório, apresente um bloco conciso de Próximas Ações:

- Se existirem problemas CRÍTICOS: Recomenda-se resolvê-los antes da implementação
- Se apenas BAIXO/MÉDIO: O usuário pode prosseguir para implementação
- Forneça sugestões explícitas de comandos: por exemplo, "Execute /speckit.research-to-plan com refinamento", "Edite manualmente tasks.md para adicionar cobertura para 'performance-metrics'"

### 8. Oferecer Remediação

Pergunte ao usuário: "Você gostaria que eu sugerisse correções concretas para os N principais problemas?" (NÃO as aplique automaticamente.)

## Princípios de Funcionamento

### Eficiência de Contexto

- **Tokens mínimos de alta relevância**: Concentre-se em descobertas práticas, não em documentação exaustiva
- **Divulgação progressiva**: Carregue os artefatos incrementalmente; não despeje todo o conteúdo na análise
- **Saída com uso eficiente de tokens**: Limitar a tabela de resultados a 50 linhas; resumir o excesso
- **Resultados determinísticos**: Executar novamente sem alterações deve produzir IDs e contagens consistentes

### Diretrizes de Análise

- **NUNCA modifique os arquivos** (esta é uma análise somente leitura)
- **NUNCA alucine seções faltantes** (se estiverem ausentes, relate-as com precisão)
- **Priorizar violações de guardrails** (estas são sempre CRÍTICAS)
- **Use exemplos em vez de regras exaustivas** (cite casos específicos, não padrões genéricos)
- **Relatar zero problemas de forma adequada** (emitir relatório de sucesso com estatísticas de cobertura)

## Context

{ARGS}
