# Button (Átomo)

## 1. Visão Geral

Componente de botão utilizado para ações principais (CTAs) e navegação. Faz parte do Design System do portfolio e utiliza tokens de cores e espaçamento.

## 2. Objetivos

- Criar componente Button reutilizável com variantes Link e CTA
- Suportar estados: default, hover, disabled
- Integrar com tokens do design-system

## 3. Contexto de Integração

- **Tipo:** Componente React standalone
- **Dependências:** Tokens do design-system (`--color-accent`, `--height-md`, `--radius-md`)
- **Props Interface:**

```typescript
interface ButtonProps {
  variant: 'link' | 'cta';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}
```

## 4. Variações Identificadas no Design

### 4.1 Variant: Link
- **Uso:** Header (navegação)
- **Visual:** Borda outline, fundo transparente, texto branco
- **Dimensões:** height: 48px, padding horizontal: 14px
- **Border:** 1px sólido
- **Border Radius:** 8px
- **Estados:**
  - Default: borda visível
  - Hover: opacidade 80%

### 4.2 Variant: CTA
- **Uso:** Hero section (call-to-action)
- **Visual:** Fundo sólido roxo, texto branco
- **Dimensões:** height: 48px, width: fill-container
- **Background:** `--color-accent`: #7f56d9
- **Border Radius:** 8px
- **Estados:**
  - Default: fundo roxo
  - Hover: opacidade 90%
  - Disabled: opacidade 50%, cursor not-allowed

## 5. Requisitos Funcionais

- RF-01: Renderizar botão com children recebidos via props
- RF-02: Aplicar estilos corretos conforme variant (link/cta)
- RF-03: Suportar estado disabled com styling específico
- RF-04: Executar onClick quando não estiver disabled
- RF-05: Renderizar children como conteúdo do botão

## 6. Requisitos Não-Funcionais

- RNF-01: Usar tokens CSS do design-system
- RNF-02: Ser acessível (support keyboard navigation)
- RNF-03: Ser responsivo
- RNF-04: Typing TypeScript completo

## 7. Fora do Escopo

- Não inclui variant "icon-only"
- Não inclui loading spinner interno
- Não inclui tooltip

## 8. Dependências

- **Design System:** Tokens de cores, espaçamento e border-radius
- **React:** Componente funcional com children

## 9. Métricas de Sucesso

- Componente renderiza corretamente ambas as variantes
- Estados hover/disabled funcionam como especificado
- Componente é reutilizável em diferentes contextos

## 10. Questões em Aberto

- [ ] Precisamos de icon dentro do botão?
- [ ] Precisamos de loading state com spinner?
