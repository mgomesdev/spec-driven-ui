# Projeto: spec-driven-ui

**Branch:** us/button-atom
**Research:** specs/components/atoms/button/research.md
**Plan:** specs/components/atoms/button/plan.md

## Descrição

Componente Button atômico reutilizável com suporte a variantes (primary, secondary, outline, ghost, danger), tamanhos (sm, md, lg) e estados (disabled, loading).

## User Stories

### US-001: Criar componente Button com tipos

**Prioridade:** 1
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero um componente Button com todas as variantes, tamanhos e estados com tipos definidos no mesmo arquivo para que eu possa reutilizá-lo em toda a aplicação.

**Artefatos:**
- Cria: `src/components/atoms/button/button.tsx`

**Contexto do plan:**
> Consultar seções "3. Interfaces e Types", "5. Componente: Props e Responsabilidades", "5. Estilos por Variante" e "6. Estilos por Tamanho" do plan.md.
> Tipos e componente no mesmo arquivo.

#### Critérios de Aceitação

* Arquivo define tipos ButtonVariant, ButtonSize e ButtonProps no mesmo arquivo
* Componente renderiza elemento `<button>` com props corretas
* variant="primary" usa bg-accent com texto branco
* variant="danger" usa bg-red-600
* variant="outline" tem borda e fundo transparente
* variant="ghost" tem fundo transparente
* variant="secondary" usa bg-primary
* size="sm" tem height 32px
* size="md" tem height 40px
* size="lg" tem height 48px
* disabled=true aplica opacity-50 e cursor-not-allowed
* loading=true exibe spinner e desabilita clique
* Typecheck aprovado

#### Notas

(Sem notas)

---

### US-002: Criar página de teste do Button

**Prioridade:** 2
**Passes:** true

**Descrição:**
> Como desenvolvedor, eu quero uma página de teste para verificar visualmente o componente Button em diferentes estados.

**Artefatos:**
- Cria: `src/app/test-button/page.tsx`
- Depende de: `US-001` (button.tsx)

**Contexto do plan:**
> Criar página de teste conforme guardrails.md seção "Página de Teste".

#### Critérios de Aceitação

* Página renderiza o componente Button
* data-testid aplicado para identificação nos testes
* Demonstra todas as variantes: primary, secondary, outline, ghost, danger
* Demonstra todos os tamanhos: sm, md, lg
* Demonstra estado disabled
* Demonstra estado loading
* Typecheck aprovado

#### Notas

(Sem notas)
