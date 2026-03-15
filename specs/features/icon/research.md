# Icon (Átomo)

## 1. Visão Geral

Componente de ícone utilizado para representações visuais simples. Wrapper em torno da biblioteca `lucide-react` para manter consistência com o design system.

## 2. Objetivos

- Criar componente Icon reutilizável
- Suportar todos os ícones do Lucide
- Integrar com tokens de cores do design-system

## 3. Contexto de Integração

- **Tipo:** Componente React standalone
- **Dependências:** `lucide-react`
- **Props Interface:**

```typescript
import { LucideIcon } from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}
```

## 4. Ícones Identificados no Design

### 4.1 Sun Icon
- **Uso:** Header (toggle modo claro/escuro)
- **Size:** 20px
- **Cor:** white

### 4.2 Social Icons (Footer)
- **Uso:** Links para redes sociais
- **Size:** 20px
- **Cor:** white

## 5. Requisitos Funcionais

- RF-01: Renderizar ícone correspondente ao nome passado
- RF-02: Suportar prop size para dimensionamento
- RF-03: Suportar prop color para coloração customizada

## 6. Requisitos Não-Funcionais

- RNF-01: Tipos TypeScript completos
- RNF-02: Ser acessível (preservar accessibility do Lucide)
- RNF-03: Renderizar apenas ícone

## 7. Fora do Escopo

- Não inclui animações de transição
- Não inclui tooltip
- Não inclui comportamento de clique

## 8. Dependências

- **Biblioteca:** `lucide-react`
- **Tokens:** Cores do design-system

## 9. Decisões de Implementação

- Usar `lucide-react` por ser a biblioteca padrão do projeto Next.js
- Exportar componente como `Icon` com props `name`, `size`, `color`
- Mapear nomes de ícones dinamicamente

## 10. Métricas de Sucesso

- Componente renderiza qualquer ícone do Lucide
- Props size e color funcionam corretamente

## 11. Questões em Aberto

- [ ] Precisamos de fallback para ícone não encontrado?
