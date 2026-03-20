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

### Passo 4: Identificar Contextos e Tags

Mapear contextos dos critérios de aceitação:

```typescript
const STATUS_TAGS = {
  pending: '@pending',
  inProgress: '@in-progress',
  done: '@done',
  blocked: '@blocked',
  bug: '@bug',
};

const CONTEXT_TAGS = {
  desktop: [
    /(?:desktop|≥768px| desktop|1280|maior que 768)/i,
    /menu horizontal/i,
  ],
  mobile: [
    /(?:mobile|<768px| celular|375)/i,
    /hamburger/i,
    /overlay/i,
  ],
  tablet: [
    /tablet|768px|1024px/i,
  ],
  a11y: [
    /a11y|acessibilidade|tab|teclado|leitor de tela/i,
    /focus|foco|navegação por teclado/i,
  ],
};

const SCENARIO_TYPE_TAGS = {
  rule: [
    /regra|validação|obrigatório|estoque/i,
    /não.*pode|não.*permitido|bloqueia/i,
    /crítico|importante|i mpportant/i,
  ],
  defensive: [
    /double.*click|clique.*rápido|proteção/i,
    /prevenir|evitar.*duplic|segurança/i,
    /timeout|repetir|persiste/i,
  ],
  happy: [
    /sucesso|funciona|正常/i,
    /fluxo.*normal|happy.*path/i,
  ],
  state: [
    /loading|estado|erro|sucesso/i,
    /feedback|mensagem|spinner/i,
  ],
  component: [
    /componente|renderiza|exibe/i,
    /elemento|botão|campo/i,
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
  
  // 1. Cenários Happy Path (fluxo normal)
  const happyScenarios = generateHappyPath(us);
  scenarios.push(...happyScenarios);
  
  // 2. Cenários de Regras de Negócio (críticos)
  const ruleScenarios = generateRuleScenarios(us);
  scenarios.push(...ruleScenarios);
  
  // 3. Cenários de Proteção (Lei de Murphy)
  const defensiveScenarios = generateDefensiveScenarios(us);
  scenarios.push(...defensiveScenarios);
  
  // 4. Cenários de Estados (loading, erro, sucesso)
  const stateScenarios = generateStateScenarios(us);
  scenarios.push(...stateScenarios);
  
  // 5. Cenários de Componentes
  const componentScenarios = generateComponentScenarios(us);
  scenarios.push(...componentScenarios);
  
  return scenarios;
}
```

---

### Passo 7.1: Gerar Cenários Happy Path

Cenários de fluxo normal onde tudo dá certo:

```typescript
function generateHappyPath(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  // Identificar contextos
  const contexts = identifyContexts(us.criteria);
  
  for (const context of contexts) {
    scenarios.push({
      tags: ['@pending', '@happy', `@${context}`],
      name: us.title,
      given: mapToGiven(us.criteria, context),
      when: mapToWhen(us.criteria),
      then: mapToThen(us.criteria),
    });
  }
  
  return scenarios;
}
```

---

### Passo 7.2: Gerar Cenários de Regras de Negócio (@rule)

**CRÍTICO**: Gerar para toda ação que modifica dados ou executa transação:

```typescript
const RULE_PATTERNS = {
  // Validação de campos obrigatórios
  obrigatorio: [
    /obrigatório|campo.*vazio|sem.*preencher/i,
    /não.*pode.*vazio|deve.*preencher/i,
  ],
  
  // Valor mínimo/máximo
  valorMinimo: [
    /mínimo|mínimo.*r\$|não.*pode.*zero|greater.*than.*zero/i,
    /quantidade.*positiva|valor.*maior/i,
  ],
  
  // Estoque
  estoque: [
    /estoque|disponível|quantidade.*excede/i,
    /sem.*estoque|estoque.*insuficiente/i,
  ],
  
  // Validação de negócio
  validacao: [
    /cpf.*válido|cnpj.*válido|email.*válido/i,
    /idade.*mínima|data.*válida/i,
  ],
  
  // Restrição de ação
  restricao: [
    /não.*permitido|impede|bloqueia/i,
    /acesso.*negado|operação.*inválida/i,
  ],
};

function generateRuleScenarios(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  // Para cada critério de aceitação, verificar se há regra de negócio
  for (const ac of us.criteria) {
    if (matchesPattern(ac, RULE_PATTERNS.obrigatorio)) {
      scenarios.push({
        tags: ['@pending', '@rule', '@validation'],
        name: `${us.title} - Rejeita quando campo obrigatório vazio`,
        given: ['dado que o usuário está na página'],
        when: ['quando tenta submeter sem preencher campos obrigatórios'],
        then: ['então o sistema exibe erro de validação', 'então a ação é bloqueada'],
      });
    }
    
    if (matchesPattern(ac, RULE_PATTERNS.estoque)) {
      scenarios.push({
        tags: ['@pending', '@rule', '@stock'],
        name: `${us.title} - Rejeita quando estoque insuficiente`,
        given: ['dado que o usuário está na página', 'dado que o estoque é insuficiente'],
        when: ['quando tenta finalizar a operação'],
        then: ['então o sistema impede a transação', 'então exibe mensagem de estoque'],
      });
    }
    
    if (matchesPattern(ac, RULE_PATTERNS.valorMinimo)) {
      scenarios.push({
        tags: ['@pending', '@rule', '@validation'],
        name: `${us.title} - Rejeita quando valor é zero ou negativo`,
        given: ['dado que o valor é R$ 0,00 ou negativo'],
        when: ['quando tenta submeter'],
        then: ['então o sistema rejeita a transação', 'então nenhum dado é processado'],
      });
    }
  }
  
  return scenarios;
}
```

---

### Passo 7.3: Gerar Cenários de Proteção (@defensive) - Lei de Murphy

**CRÍTICO**: Gerar para toda ação que causa modificação de estado ou transação:

```typescript
const DEFENSIVE_PATTERNS = {
  // Ações que causam transação
  transacao: [
    /submete|finalizar|confirmar|comprar|pagar/i,
    /enviar|processar|executar/i,
  ],
  
  // Ações que alteram estado
  estado: [
    /toggle|abrir|fechar|ativar|desativar/i,
    /adicionar|remover|deletar/i,
  ],
  
  // Ações críticas
  critica: [
    /pagamento|transação|transferência/i,
    /envio.*email|notificação/i,
  ],
};

function generateDefensiveScenarios(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  for (const ac of us.criteria) {
    // Double-click prevention para transações
    if (matchesPattern(ac, DEFENSIVE_PATTERNS.transacao)) {
      scenarios.push({
        tags: ['@pending', '@defensive'],
        name: `${us.title} - Double-click não causa ação duplicada`,
        given: ['dado que o formulário está válido'],
        when: ['quando o usuário clica 3x rapidamente no botão'],
        then: ['então a ação ocorre apenas uma vez', 'então não há duplicação de dados'],
      });
      
      scenarios.push({
        tags: ['@pending', '@defensive'],
        name: `${us.title} - Botão desabilita imediatamente ao clicar`,
        given: ['dado que o formulário está válido'],
        when: ['quando o usuário clica no botão'],
        then: ['então o botão é desabilitado IMEDIATAMENTE', 'então spinner aparece', 'então cliques adicionais são ignorados'],
      });
    }
    
    // Estado consistente para toggle
    if (matchesPattern(ac, DEFENSIVE_PATTERNS.estado)) {
      scenarios.push({
        tags: ['@pending', '@defensive'],
        name: `${us.title} - Toggle rápido não causa estado inconsistente`,
        given: ['dado que o elemento está em estado inicial'],
        when: ['quando o usuário alterna rapidamente 5 vezes'],
        then: ['então o estado final é consistente', 'então não há flickering'],
      });
    }
    
    // Timeout preserva dados
    scenarios.push({
      tags: ['@pending', '@defensive'],
      name: `${us.title} - Timeout não perde dados`,
      given: ['dado que o formulário está preenchido'],
      when: ['quando há falha de conexão durante processamento'],
      then: ['então os dados são preservados', 'então o usuário pode tentar novamente'],
    });
  }
  
  return scenarios;
}
```

---

### Passo 7.4: Gerar Cenários de Estados (@state)

```typescript
function generateStateScenarios(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  // Loading state
  scenarios.push({
    tags: ['@pending', '@state', '@loading'],
    name: `${us.title} - Estado de loading durante processamento`,
    given: ['dado que o usuário está na página'],
    when: ['quando a ação é iniciada'],
    then: ['então indicador de loading aparece', 'então campos ficam desabilitados'],
  });
  
  // Success state
  scenarios.push({
    tags: ['@pending', '@state', '@success'],
    name: `${us.title} - Estado de sucesso exibe feedback`,
    given: ['dado que a ação foi processada com sucesso'],
    when: ['quando o servidor retorna sucesso'],
    then: ['então feedback de sucesso é exibido', 'então usuário é redirecionado ou atualizado'],
  });
  
  // Error state
  scenarios.push({
    tags: ['@pending', '@state', '@error'],
    name: `${us.title} - Estado de erro exibe mensagem clara`,
    given: ['dado que houve falha no processamento'],
    when: ['quando o servidor retorna erro'],
    then: ['então mensagem de erro clara é exibida', 'então dados do formulário são mantidos'],
  });
  
  return scenarios;
}
```

---

### Passo 7.5: Gerar Cenários de Componentes (@component)

```typescript
function generateComponentScenarios(us: UserStory): Scenario[] {
  const scenarios: Scenario[] = [];
  
  // Identificar componentes mencionados nos artefatos
  const components = extractComponents(us.relatedComponents || []);
  
  for (const component of components) {
    scenarios.push({
      tags: ['@pending', '@component', `@${component.name}`],
      name: `${component.name} renderiza corretamente`,
      given: ['dado que o componente está na página'],
      when: ['quando a página carrega'],
      then: [`então ${component.name} está visível`, `então ${component.name} tem dados corretos`],
    });
  }
  
  return scenarios;
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

---

## Atualização de Cenários (Requisito Mudou)

Quando um requisito muda ou precisa de novos cenários:

### Passo 10: Verificar *.feature Existente

```typescript
const featurePath = `specs/features/${feature}/features/${feature}.feature`;

if (await fileExists(featurePath)) {
  // *.feature existe → ADICIONAR cenários
} else {
  // *.feature não existe → CRIAR novo
}
```

### Passo 11: Adicionar Cenários (se *.feature existe)

```typescript
async function addScenariosToExistingFeature(feature: string, newScenarios: Scenario[]): Promise<void> {
  // 1. Ler *.feature existente
  const existingContent = await readFile(featurePath);
  
  // 2. Preservar cenários @done e @in-progress
  const existingScenarios = parseFeatureFile(existingContent);
  const scenariosToPreserve = existingScenarios.filter(s => 
    s.tags.includes('@done') || s.tags.includes('@in-progress')
  );
  
  // 3. Identificar cenários já implementados (não duplicar)
  const existingScenarioNames = scenariosToPreserve.map(s => s.name);
  
  // 4. Filtrar novos cenários (remover duplicatas)
  const newUniqueScenarios = newScenarios.filter(
    s => !existingScenarioNames.includes(s.name)
  );
  
  // 5. Adicionar novos cenários com @pending
  const scenariosToAdd = newUniqueScenarios.map(s => ({
    ...s,
    tags: s.tags.filter(t => !['@done', '@in-progress'].includes(t)).concat(['@pending'])
  }));
  
  // 6. Montar conteúdo atualizado
  let updatedContent = existingContent;
  
  // 7. Adicionar comentários separadores
  const separator = '\n\n  # ═══════════════════════════════════════════════════════════\n  # NOVOS CENÁRIOS\n  # ═══════════════════════════════════════════════════════════\n\n';
  
  // 8. Adicionar ao final do Feature (antes de fechar)
  for (const scenario of scenariosToAdd) {
    updatedContent += generateScenarioBlock(scenario);
  }
  
  // 9. Salvar
  await writeFile(featurePath, updatedContent);
}

function parseFeatureFile(content: string): ParsedScenario[] {
  // Parse *.feature existente mantendo estrutura
}

function generateScenarioBlock(scenario: Scenario): string {
  // Gerar bloco Given-When-Then formatado
}
```

### Regras de Adição

| Situação | Ação |
|----------|------|
| *.feature não existe | Criar novo (comportamento atual) |
| *.feature existe | Adicionar cenários ao final |
| Cenário @done | PRESERVAR - não modificar |
| Cenário @in-progress | PRESERVAR - não modificar |
| Cenário @pending existente | PRESERVAR - não duplicar |
| Novo cenário | Adicionar com @pending |

### Output ao Adicionar

```
✅ Cenários adicionados ao *.feature existente

Cenários preservados (@done/@in-progress): X
Cenários adicionados (@pending): Y
Cenários duplicados (ignorados): Z

*.feature atualizado: specs/features/[feature]/features/[feature].feature
```

---

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
- [ ] Cenários @rule estão presentes para operações críticas
- [ ] Cenários @defensive estão presentes para Lei de Murphy
- [ ] Cenários @state estão presentes para loading/erro/sucesso

## Regras

1. **Não inventar cenários** - only mapear AC existentes
2. **Usar placeholders** - constants devem ser placeholders (HEADER_HEIGHT, NAV_COUNT)
3. **Tags consistentes** - @desktop, @mobile, @a11y
4. **Iniciar @pending** - todos cenários começam pending
5. **Given-When-Then** - usar linguagem natural
6. **Regras de Negócio (@rule)** - MANDATÓRIO para operações críticas (submit, transação,validação)
7. **Proteção (@defensive)** - MANDATÓRIO para Lei de Murphy (double-click, timeout)
8. **Estados (@state)** - MANDATÓRIO para ações assíncronas (loading, erro, sucesso)

## Exemplo de Output

```gherkin
@pending
Feature: Header de Navegação

  # ═══════════════════════════════════════════════════════════
  # ✅ FLUXO FELIZ - Happy Path
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @happy
  Scenario: Header desktop exibe logo e menu
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header é fixed com altura de HEADER_HEIGHT
    And o logo aparece à esquerda
    And o menu exibe NAV_COUNT itens

  # ═══════════════════════════════════════════════════════════
  # 🎯 REGRAS DE NEGÓCIO - @rule
  # ═══════════════════════════════════════════════════════════

  @pending @desktop @rule
  Scenario: Menu deve exibir NAV_COUNT itens exatamente
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o menu exibe exatamente NAV_COUNT itens
    And menos ou mais itens indica erro

  # ═══════════════════════════════════════════════════════════
  # 🛡️ PROTEÇÃO CRÍTICA - @defensive (Lei de Murphy)
  # ═══════════════════════════════════════════════════════════

  @pending @mobile @defensive
  Scenario: Clique rápido no hamburger não abre múltiplos overlays
    Given que o usuário está em mobile (<768px)
    And o menu está fechado
    When o usuário clica 3x rapidamente no botão hamburger
    Then o overlay abre apenas uma vez
    And o estado é consistente

  @pending @mobile @defensive
  Scenario: Toggle rápido não causa estado inconsistente
    Given que o usuário está em mobile (<768px)
    When o usuário abre e fecha o menu rapidamente 5 vezes
    Then o estado final está correto
    And não há flickering

  # ═══════════════════════════════════════════════════════════
  # ⚠️ ESTADOS - @state (loading, erro, sucesso)
  # ═══════════════════════════════════════════════════════════

  @pending @state @loading
  Scenario: Menu abrindo mostra estado de loading
    Given que o usuário está em mobile (<768px)
    When o usuário clica no hamburger
    Then animação de abertura inicia
    And menu fica interativo após animação

  # ═══════════════════════════════════════════════════════════
  # 🎛️ COMPONENTES - @component
  # ═══════════════════════════════════════════════════════════

  @pending @component @Header
  Scenario: Header renderiza com todos os subcomponentes
    Given que a página carrega
    Then o logo está presente
    And o menu desktop está presente
    And o botão hamburger está presente
```

## Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| "research.md não encontrado" | Não executou @research-to-plan | Execute @research-to-plan primeiro |
| "Cenários vazios" | AC não mapeados | Verificar formato do research.md |
| "Tags duplicadas" | Contexto identificado errado | Ajustar padrões de contexto |
