# Heading (Átomo)

## 1. Visão Geral

Componente de título utilizado para cabeçalhos de seções e textos principais. Suporta diferentes tamanhos e pesos para hierarquia visual.

## 2. Objetivos

- Criar componente Heading reutilizável
- Suportar diferentes sizes (xl, lg)
- Suportar diferentes weights (regular, bold)
- Integrar com tokens de tipografia do design-system

## 3. Contexto de Integração

- **Tipo:** Componente React standalone
- **Dependências:** Tokens de tipografia (`--font-size-heading-*`, `--font-weight-*`)
- **Props Interface:**

```typescript
interface HeadingProps {
  children: React.ReactNode;
  size?: 'xl' | 'lg';
  weight?: 'regular' | 'bold';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
```

## 4. Usos Identificados no Design

### 4.1 Hero Section
- **Conteúdo:** Nome "matheusgomesdev" + título profissional
- **Size:** xl (48px) para nome principal
- **Size:** lg (20px) para título secundário
- **Weight:** bold para ambos

## 5. Requisitos Funcionais

- RF-01: Renderizar children como conteúdo do heading
- RF-02: Aplicar tamanho conforme prop size
- RF-03: Aplicar peso conforme prop weight
- RF-04: Renderizar semanticamente como tag HTML especificada em `as`
- RF-05: Suportar texto longo com word-wrap

## 6. Requisitos Não-Funcionais

- RNF-01: Usar tokens CSS do design-system
- RNF-02: Ser semanticamente um heading tag (h1-h6)
- RNF-03: Ser responsivo (tamanhos em rem ou com media queries)

## 7. Fora do Escopo

- Não inclui link integrado
- Não inclui subtitle
- Não inclui animação

## 8. Dependências

- **Design System:** Tokens de tipografia
- **React:** Componente funcional

## 9. Decisões de Implementação

- Prop `as` permite mudar a tag semanticamente (h1 por padrão para xl, h2 para lg)
- Tamanhos responsivos: 48px → 32px mobile, 20px → 18px mobile

## 10. Métricas de Sucesso

- Componente renderiza com size e weight corretos
- Tag HTML é semanticamente correta

## 11. Questões em Aberto

- [ ] Precisamos de size "md" ou "sm"?
