# Button

## 1. Visão Geral

Componente átomo de botão reutilizável para uso em diversas partes do projeto. Suporta múltiplos estados visuais (default, hover, active, disabled, loading) com variante primária para destaque principal.

## 2. Objetivos

- Criar componente de botão reutilizável com API flexível
- Implementar todos os estados visuais necessários para boa experiência do usuário
- Garantir acessibilidade e suporte a keyboard navigation

## 3. Contexto de Integração com Backend

- **Tipo:** Componente UI (sem integração direta com backend)
- **Uso:** Será consumido por componentes maiores e páginas que necessitem de ações do usuário

## 4. Histórias de Usuário

### US-001: Botão Primário Default

**Descrição:** Como desenvolvedor, eu quero um botão com aparência default que pode ser usado em formulários e ações principais para que os usuários possam interagir com a interface.

**Componente afetado:** Button (átomo)

**Critérios de aceitação:**
- [ ] Botão renderiza com texto centralizado
- [ ] Fundo com cor de destaque primária (azul ou similar)
- [ ] Texto em cor contrastante (branco)
- [ ] Border-radius arredondado (4-8px)
- [ ] Padding horizontal e vertical adequado
- [ ] Cursor pointer ao passar o mouse
- [ ] sub-agent de testes unitários
- [ ] sub-agent de análise estática (typecheck)

### US-002: Estado Hover do Botão

**Descrição:** Como usuário, eu quero feedback visual quando o mouse passa sobre o botão para saber que é clicável.

**Componente afetado:** Button (átomo)

**Critérios de aceitação:**
- [ ] Cor de fundo escurece ou clareia suavemente no hover
- [ ] Transição suave de 150-200ms
- [ ] Cursor muda para pointer
- [ ] sub-agent de testes unitários
- [ ] sub-agent de análise estática (typecheck)

### US-003: Estado Active/Pressed do Botão

**Descrição:** Como usuário, eu quero feedback visual quando clico no botão para confirmar minha ação.

**Componente afetado:** Button (átomo)

**Critérios de aceitação:**
- [ ] Botão afunda visualmente (scale menor ou sombra reduzida)
- [ ] Cor de fundo altera para estado de "pressionado"
- [ ] Transição instantânea (< 100ms)
- [ ] sub-agent de testes unitários
- [ ] sub-agent de análise estática (typecheck)

### US-004: Estado Disabled do Botão

**Descrição:** Como desenvolvedor, eu quero um botão que pode ser desabilitado para casos onde a ação não está disponível no momento.

**Componente afetado:** Button (átomo)

**Critérios de aceitação:**
- [ ] Opacidade reduzida (50-60%)
- [ ] Cursor change para "not-allowed"
- [ ] Não responde a cliques
- [ ] Não responde a keyboard (tab)
- [ ] Texto permanece legível
- [ ] sub-agent de testes unitários
- [ ] sub-agent de análise estática (typecheck)

### US-005: Estado Loading do Botão

**Descrição:** Como usuário, eu quero feedback visual quando uma ação está processando para saber que devo aguardar.

**Componente afetado:** Button (átomo)

**Critérios de aceitação:**
- [ ] Spinner/loading indicator aparece no lugar do texto ou ao lado
- [ ] Texto do botão é ocultado ou substituído por texto de loading
- [ ] Botão fica desabilitado durante o estado de loading
- [ ] Cursor mostra "wait" ou "not-allowed"
- [ ] Animação de spinner continua até loading finalizar
- [ ] sub-agent de testes unitários
- [ ] sub-agent de análise estática (typecheck)

## 5. Dependências (Atomic Design)

> Este é um componente **átomo**, portanto não possui dependências de outros componentes.

| Componente | Tipo | Status | Caminho |
|------------|------|--------|---------|
| N/A | atom | N/A | N/A |

## 6. Requisitos Funcionais

- RF-01: O componente deve aceitar children (texto ou elemento React)
- RF-02: O componente deve suportar prop `onClick` para handler de clique
- RF-03: O componente deve suportar prop `disabled` para estado desabilitado
- RF-04: O componente deve suportar prop `loading` para estado de carregamento
- RF-05: O componente deve suportar prop `type` (button, submit, reset)
- RF-06: O componente deve suportar prop `className` para customização adicional
- RF-07: Quando loading=true, o botão deve automaticamente estar disabled

## 7. Requisitos Não-Funcionais (Frontend)

- RNF-01: Componente deve ser responsivo (funcionar em diferentes tamanhos de container)
- RNF-02: Transições entre estados devem ser suaves (CSS transitions)
- RNF-03: Deve suportar focus visible para keyboard navigation
- RNF-04: Deve ter contraste adequado para acessibilidade (WCAG AA)
- RNF-05: Tamanho do hit area deve ser de no mínimo 44x44px para touch

## 8. Fora do Escopo

Liste explicitamente o que NÃO será feito nesta entrega:
- Não inclui botão com ícone (versão com ícone será outra feature)
- Não inclui variantes secundária, outline, ghost, etc.
- Não inclui tamanhos diferentes (small, large) - apenas tamanho padrão
- Não inclui tooltip

## 9. Referências Visuais

- Padrões de botões primários的主流 UI libraries (Material UI, Radix, Shadcn)
- Cor primária sugerida: azul (#3b82f6 ou similar)
- Border-radius: 6px
- Padding: 12px 24px (horizontal x vertical)
- Font-size: 14-16px
- Font-weight: 500-600

## 10. Métricas de Sucesso

- Botão funciona corretamente em todos os estados (default, hover, active, disabled, loading)
- Componente é reutilizável em diferentes contextos
- Acessibilidade: passa em axe-core tests
- TypeScript: sem erros de tipo

## 11. Questões em Aberto

- [ ] Qual cor exata usar para o primário? (sugestão: blue-500 do Tailwind)
- [ ] Qual biblioteca de ícones usar para o spinner? (sugestão: lucide-react)
- [ ] O botão deve suportar forwardRef para integração com libs externas?
