---
name: bdd-generator
description: "Gera arquivos *.feature (Gherkin) a partir de research.md e plan.md. Converte User Stories em cenários BDD executáveis com Given-When-Then."
mode: subagent
temperature: 0.1
tools:
  write: true
  edit: true
  read: true
permission:
  edit: allow
---

## Como Usar Este Agent

```
@bdd-generator feature=[nome-da-feature]
```

## Visão Geral

Gera cenários BDD em formato Gherkin a partir de:
- `specs/features/[feature]/research.md`
- `specs/features/[feature]/plan.md`

Output:
- `specs/features/[feature]/features/[feature].feature`

## Pré-requisitos

1. research.md deve existir e estar aprovado
2. plan.md deve existir (artefatos de alto nível)
3. Feature folder deve existir

## Passos de Execução

### Passo 1: Verificar Pré-requisitos

```typescript
// Verificar se research.md existe
const researchPath = `specs/features/${feature}/research.md`;
if (!await fileExists(researchPath)) {
  return { error: 'research.md não encontrado. Execute @research-to-plan primeiro.' };
}

// Verificar se plan.md existe
const planPath = `specs/features/${feature}/plan.md`;
if (!await fileExists(planPath)) {
  return { error: 'plan.md não encontrado. Execute @research-to-plan primeiro.' };
}
```

### Passo 2: Ler research.md

Extrair:
- User Stories
- Critérios de aceitação
- Contextos (desktop/mobile/a11y)

```typescript
const research = await readFile(researchPath);

// Extrair User Stories
const userStories = extractUserStories(research);

// Formato esperado:
// ### US-001: Título
// **Descrição:** Como... eu quero... para que...
// **Critérios de aceitação:**
// - AC1
// - AC2
```

### Passo 3: Ler plan.md

Extrair:
- Artefatos de alto nível
- Tipos/interfaces
- Estrutura de arquivos

```typescript
const plan = await readFile(planPath);

// Extrair artefatos
const artifacts = extractArtifacts(plan);

// Extrair tipos
const types = extractTypes(plan);
```

### Passo 4: Identificar Contextos

Mapear contextos dos critérios de aceitação:

```typescript
const CONTEXT_PATTERNS = {
  desktop: [
    /(?:desktop|≥768px| desktop|1280|maior que 768)/i,
    /menu horizontal/i,
  ],
  mobile: [
    /(?:mobile|<768px| celular|375)/i,
    /hamburger/i,
    /overlay/i,
  ],
  a11y: [
    /a11y|acessibilidade|tab|teclado|leitor de tela/i,
    /focus|foco|navegação por teclado/i,
  ],
};
```

### Passo 5: Mapear AC para Given-When-Then

Template de mapeamento:

```typescript
const AC_TO_GHERKIN = {
  // Given (pré-condição)
  'em desktop': 'que o usuário está em desktop (≥768px)',
  'em mobile': 'que o usuário está em mobile (<768px)',
  'página carrega': 'a página carrega',
  'usuário está logado': 'que o usuário está logado',
  'formulário vazio': 'que o formulário está vazio',
  'overlay aberto': 'que o overlay está aberto',

  // When (ação)
  'clica': 'o usuário clica no',
  'digita': 'o usuário digita no campo',
  'pressiona': 'o usuário pressiona',
  'seleciona': 'o usuário seleciona',
  'submete': 'o usuário submete o formulário',

  // Then (resultado)
  'está visível': 'está visível',
  'está oculto': 'está oculto',
  'redireciona para': 'a URL muda para',
  'contador é': 'o contador é',
  'exibe': 'exibe',
  'aparece': 'aparece',
  'fecha': 'fecha',
};
```

### Passo 6: Identificar Constants

Extrair valores que serão placeholders:

```typescript
const CONSTANT_PATTERNS = [
  { pattern: /80px|80 pixels/i, placeholder: 'HEADER_HEIGHT' },
  { pattern: /4 itens?|quatro/i, placeholder: 'NAV_COUNT' },
  { pattern: /768px/i, placeholder: 'BREAKPOINT' },
  { pattern: /300ms|300 milissegundos/i, placeholder: 'ANIMATION_DURATION' },
  { pattern: /100%|cem por cento/i, placeholder: 'FULL_WIDTH' },
  { pattern: /375x667|mobile pequeno/i, placeholder: 'MOBILE_WIDTH' },
];
```

### Passo 7: Gerar Cenários

Para cada User Story:

```typescript
function generateScenario(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  // Identificar contextos
  const contexts = identifyContexts(us.criteria);
  
  // Se múltiplos contextos, gerar cenário para cada
  if (contexts.length > 1) {
    for (const context of contexts) {
      scenarios.push(generateScenarioForContext(us, context));
    }
  } else {
    scenarios.push(generateScenarioForContext(us, contexts[0]));
  }
  
  return scenarios;
}

function generateScenarioForContext(us: UserStory, context: Context): Scenario {
  return {
    tags: ['@pending', `@${context}`],
    name: us.title,
    given: mapToGiven(us.criteria, context),
    when: mapToWhen(us.criteria),
    then: mapToThen(us.criteria),
  };
}
```

### Passo 8: Gerar *.feature

```typescript
function generateFeature(feature: string, scenarios: Scenario[]): string {
  let output = '@pending\n';
  output += `Feature: ${formatFeatureName(feature)}\n\n`;
  
  for (const scenario of scenarios) {
    output += `  ${scenario.tags.join(' ')}\n`;
    output += `  Scenario: ${scenario.name}\n`;
    
    for (const given of scenario.given) {
      output += `    Given ${given}\n`;
    }
    
    for (const when of scenario.when) {
      output += `    When ${when}\n`;
    }
    
    for (const then of scenario.then) {
      output += `    Then ${then}\n`;
    }
    
    output += '\n';
  }
  
  return output;
}
```

### Passo 9: Criar diretório e salvar

```typescript
// Criar diretório features/
const featuresDir = `specs/features/${feature}/features`;
await mkdir(featuresDir, { recursive: true });

// Salvar *.feature
const featurePath = `${featuresDir}/${feature}.feature`;
await writeFile(featurePath, featureContent);
```

## Output

```
✅ BDD gerado para feature [nome]

Arquivos criados:
- specs/features/[feature]/features/[feature].feature

Cenários gerados: N
- @desktop: X
- @mobile: Y
- @a11y: Z

Próx passos:
1. Revise os cenários gerados
2. Aprovar ou ajustar cenários
3. Execute @tdd-generator para gerar testes
```

## Validações

Antes de salvar, verificar:

- [ ] Todos os critérios de aceitação estão mapeados
- [ ] Cenários têm Given-When-Then completos
- [ ] Tags de contexto estão corretas (@desktop, @mobile, @a11y)
- [ ] Placeholders para constants estão corretos
- [ ] Sintaxe Gherkin está válida

## Regras

1. **Não inventar cenários** - only mapear AC existentes
2. **Usar placeholders** - constants devem ser placeholders (HEADER_HEIGHT, NAV_COUNT)
3. **Tags consistentes** - @desktop, @mobile, @a11y
4. **Iniciar @pending** - todos cenários começam pending
5. **Given-When-Then** - usar linguagem natural

## Exemplo de Output

```gherkin
@pending
Feature: Header de Navegação

  @pending @desktop
  Scenario: Header desktop exibe logo e menu
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header é fixed com altura de HEADER_HEIGHT
    And o logo aparece à esquerda
    And o menu exibe NAV_COUNT itens

  @pending @mobile
  Scenario: Mobile exibe hamburger
    Given que o usuário está em mobile (<768px)
    When a página carrega
    Then o botão hamburger está visível
    And o menu desktop está oculto
```

## Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| "research.md não encontrado" | Não executou @research-to-plan | Execute @research-to-plan primeiro |
| "Cenários vazios" | AC não mapeados | Verificar formato do research.md |
| "Tags duplicadas" | Contexto identificado errado | Ajustar padrões de contexto |
