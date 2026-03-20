# Sistema de Tags para Cenários BDD

## Tags de Status

Definidas no início de cada Scenario:

| Tag | Significado | Quando Usar |
|-----|-------------|-------------|
| `@pending` | Não iniciado | Default para novos cenários |
| `@in-progress` | Em execução | Subagent começou trabalho |
| `@done` | Completo | Testes passando + aprovado |
| `@blocked` | Bloqueado | Dependência não resolvida |
| `@bug` | Bug reportado | Bug encontrado em cenário @done |

### Transições de Status

```
@pending
    │
    │ (subagent inicia)
    ▼
@in-progress
    │
    │ (testes passando + aprovado)
    ▼
@done
    │
    │ (bug reportado)
    ▼
@bug
    │
    │ (correção aprovada)
    ▼
@done (novamente)

@pending ──► @blocked (se dependência falhar)
@blocked ──► @pending (se dependência resolvida)
```

---

## Tags de Contexto

Definidas no início de cada Scenario:

| Tag | Significado | Uso |
|-----|-------------|-----|
| `@desktop` | Desktop only | Viewport ≥768px |
| `@mobile` | Mobile only | Viewport <768px |
| `@tablet` | Tablet | Viewport 768-1024px |
| `@a11y` | Acessibilidade | Keyboard navigation, screen reader |
| `@api` | Integração API | Requer mock server |
| `@auth` | Autenticação | Requer login |
| `@slow` | Teste lento | >2s execução |

---

## Tags de Prioridade (opcional)

| Tag | Significado |
|-----|-------------|
| `@p0` | Crítico - bloqueia PR |
| `@p1` | Alto - deve estar no MVP |
| `@p2` | Médio - pode ir depois |
| `@p3` | Baixo - nice to have |

---

## Exemplos de Tags nos Cenários

```gherkin
Feature: Header de Navegação

  @pending @desktop
  Scenario: Header desktop exibe logo e menu
    Given que o usuário está em desktop (≥768px)
    When a página carrega
    Then o header é fixed com altura de 80px

  @pending @mobile @p0
  Scenario: Mobile exibe hamburger
    Given que o usuário está em mobile (<768px)
    When a página carrega
    Then o hamburger está visível

  @pending @a11y @p1
  Scenario: Navegação por Tab funciona
    Given que o usuário está na página
    When pressiona Tab
    Then o foco move para primeiro item do menu
```

---

## Filtragem por Tags

```bash
# Listar todos cenários desktop pending
@orchestrator list --tag=@desktop --status=@pending

# Listar todos cenários com bug
@orchestrator list --status=@bug

# Listar cenários críticos
@orchestrator list --tag=@p0

# Filtrar worktree por tag
@worktree-runner feature=header --tags=desktop,mobile
```

---

## Validação de Tags

**Regras:**
1. Todo Scenario deve ter EXATAMENTE 1 tag de status
2. Scenario pode ter múltiplas tags de contexto
3. Tags de prioridade são opcionais
4. Tags de contexto devem ser consistentes (não usar @desktop E @mobile no mesmo scenario)

**Validação automática:**
```typescript
// Em bdd-generator
function validateTags(scenario: Scenario): ValidationResult {
  const statusTags = scenario.tags.filter(t => STATUS_TAGS.includes(t));
  const contextTags = scenario.tags.filter(t => CONTEXT_TAGS.includes(t));
  
  if (statusTags.length !== 1) {
    return { valid: false, error: 'Must have exactly 1 status tag' };
  }
  
  if (contextTags.length === 0) {
    return { valid: false, error: 'Must have at least 1 context tag' };
  }
  
  return { valid: true };
}
```

---

## Sintaxe no Gherkin

```gherkin
@tag1 @tag2
Feature: Nome da Feature

  @status @context1 @context2
  Scenario: Nome do cenário
    Given ...
    When ...
    Then ...
```

**Ordem das tags:**
1. Status tag primeiro
2. Contexto tags depois
3. Prioridade tag por último (se existir)
