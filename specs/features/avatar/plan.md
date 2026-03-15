# Plan: Avatar

> Gerado a partir de: `specs/features/avatar/research.md`
> Foco: Frontend

## 1. Visão Geral Técnica

Componente Avatar (átomo) para exibição de foto de perfil do usuário. Renderiza imagem circular com aspect ratio 1:1, utilizando `next/image` para otimização de carregamento e fallback com ícone de usuário quando a imagem falha. Integra com tokens CSS do design-system para border-radius circular.

---

## 2. Estrutura de Arquivos

```
src/
├── components/
│   └── avatar/
│       └── avatar.tsx              # criado - componente Avatar
```

Legenda:
- `# criado` — arquivo novo
- `# modificado` — arquivo existente com alterações

---

## 3. Interface TypeScript

### 3.1 AvatarProps

```typescript
interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}
```

| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|--------------|--------|-----------|
| src | string | Sim | - | URL da imagem de perfil |
| alt | string | Sim | - | Texto alternativo para acessibilidade |
| size | number | Não | 92 | Tamanho do avatar em pixels |

---

## 4. Detalhes de Implementação

### 4.1 Componente Avatar

- **Localização:** `src/components/avatar/avatar.tsx`
- **Framework:** React (Next.js)
- **Renderização:** `<Image />` do Next.js com `layout="fill"` e `objectFit="cover"`
- **srcSet:** NÃO necessário — usar prop `src` diretamente
- **Fallback:** Ícone de usuário (Lucide React) quando `src` falhar
- **Estilização:** border-radius circular via token CSS `--radius-full` (9999px)
- **Acessibilidade:** Requer prop `alt` obrigatória

### 4.2 Requisitos Funcionais Mapeados

| RF | Descrição | Artefato |
|----|-----------|----------|
| RF-01 | Renderizar imagem recebida via prop src | `avatar.tsx` - uso de `next/image` |
| RF-02 | Aplicar border-radius circular | `avatar.tsx` - token `--radius-full` |
| RF-03 | Renderizar fallback quando src falhar | `avatar.tsx` - tratamento onError |
| RF-04 | Manter aspect ratio 1:1 | `avatar.tsx` - container com aspect 1:1 |
| RF-05 | Suportar prop size para dimensionamento | `AvatarProps.size` |

### 4.3 Requisitos Não-Funcionais

| RNF | Descrição | Abordagem |
|-----|-----------|-----------|
| RNF-01 | Usar tokens CSS do design-system | Token `--radius-full` |
| RNF-02 | Ser acessível | Prop `alt` obrigatória + role="img" |
| RNF-03 | Otimizar carregamento de imagem | `next/image` com lazy loading |
| RNF-04 | Prevenir layout shift | Container com dimensões fixas |

---

## 5. Contratos e Integrações

### 5.1 Design System

- **Token:** `--radius-full` (border-radius: 9999px)
- **Localização:** Arquivo de tokens do projeto

### 5.2 Biblioteca de Ícones

- **Ícone de fallback:** Lucide React (`User` ou `UserCircle`)
- **Tamanho do ícone:** Proporcional ao size.

---

## 6. Diagrama de Dependências

```
[globals.css] ──► [Avatar.tsx]
                                 │
                                 ▼
                            [page.tsx (uso)]
```

Regra: `──►` significa "depende de / deve existir antes".

---

## 7. Questões em Aberto

