# Paragraph (Átomo)

## 1. Visão Geral

Componente de texto parágrafo utilizado para conteúdos textuais secundários. Suporta diferentes tamanhos e cores conforme o contexto de uso.

## 2. Objetivos

- Criar componente Paragraph reutilizável
- Suportar diferentes sizes (small, body)
- Suportar diferentes cores (primary, secondary, muted)
- Integrar com tokens de tipografia do design-system

## 3. Contexto de Integração

- **Tipo:** Componente React standalone
- **Dependências:** Tokens de tipografia (`--font-size-small`, `--font-size-body`, `--color-text-*`)
- **Props Interface:**

```typescript
interface ParagraphProps {
  children: React.ReactNode;
  size?: 'small' | 'body';
  color?: 'primary' | 'secondary' | 'muted';
}
```

## 4. Usos Identificados no Design

### 4.1 Footer Copyright
- **Texto:** "© 2026 matheusgomesdev."
- **Size:** small (12px)
- **Color:** primary

## 5. Requisitos Funcionais

- RF-01: Renderizar children como conteúdo do parágrafo
- RF-02: Aplicar tamanho conforme prop size
- RF-03: Aplicar cor conforme prop color
- RF-04: Suportar texto longo com word-wrap

## 6. Requisitos Não-Funcionais

- RNF-01: Usar tokens CSS do design-system
- RNF-02: Ser semanticamente um `<p>` tag
- RNF-03: Suportar line-height configurável

## 7. Fora do Escopo

- Não inclui link integrado
- Não inclui alinhamento
- Não inclui truncate/ellipsis

## 8. Dependências

- **Design System:** Tokens de tipografia e cores
- **React:** Componente funcional

## 9. Métricas de Sucesso

- Componente renderiza texto com size e color corretos
- Semanticamente correto como elemento `<p>`

## 10. Questões em Aberto

- [ ] Precisamos de prop adicional para line-height?
- [ ] Precisamos de alinhamento (center, right)?
