# Avatar (Átomo)

## 1. Visão Geral

Componente de avatar de usuário utilizado para exibir foto de perfil. Renderiza uma imagem circular com suporte a fallback quando a imagem não carrega.

## 2. Objetivos

- Criar componente Avatar reutilizável
- Renderizar imagem com aspect ratio 1:1
- Suportar border-radius circular
- Suportar fallback para imagem quebrada
- Integrar com tokens do design-system

## 3. Contexto de Integração

- **Tipo:** Componente React standalone
- **Dependências:** Tokens de border-radius (`--radius-full`)
- **Props Interface:**

```typescript
interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}
```

## 4. Requisitos Funcionais

- RF-01: Renderizar imagem recebida via prop src
- RF-02: Aplicar border-radius circular
- RF-03: Renderizar fallback quando src falhar
- RF-04: Manter aspect ratio 1:1 (quadrado)
- RF-05: Suportar prop size para dimensionamento

## 5. Requisitos Não-Funcionais

- RNF-01: Usar tokens CSS do design-system
- RNF-02: Ser acessível (alt text obrigatório)
- RNF-03: Otimizar carregamento de imagem (next/image)
- RNF-04: Prevenir layout shift

## 6. Fora do Escopo

- Não inclui badge de status (online/offline)
- Não inclui tooltip com nome
- Não inclui grupo de avatars

## 7. Dependências

- **Design System:** Tokens de border-radius
- **React:** Componente funcional
- **Next.js:** `next/image`

## 8. Decisões de Implementação

- Usar `<Image />` do Next.js com layout fill
- Fallback: ícone de usuário (Lucide)
- Tamanho padrão: 92px

## 9. Métricas de Sucesso

- Imagem renderiza corretamente
- Fallback funciona quando imagem falha
- Border-radius circular aplicado

## 10. Questões em Aberto

