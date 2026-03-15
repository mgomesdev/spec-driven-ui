# Convenções de Código

## Tipos e Interfaces

| Convenção | Exemplo |
|-----------|---------|
| PascalCase com sufixo descritivo para props | `FormDialogProps` |
| PascalCase com sufixo descritivo para ref | `FormDialogRef` |

## Componentes

| Convenção | Exemplo |
|-----------|---------|
| Arrow functions | `export const ComponentName = ({ ... }: Props) => ...` |
| Retorno direto (sem `return` e `{ ... }`) quando só retorna JSX | `export const Button = ({ label }) => <button>{label}</button>` |

## Variáveis e Constantes

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Constantes | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Booleanas | Prefixo is/has/can | `isActive`, `hasPermission` |

## TypeScript

- **NÃO use `any`**. Use `unknown` quando o tipo não for conhecido e documente o motivo
- **Props explicitamente tipadas** — nunca `props: any` ou desestruturação sem tipo
- **Interfaces de props** sempre nomeadas: `NomeComponenteProps`
- **Prefira inferência de tipos** — não adicione tipagem de retorno

## Exportação

- Componente principal: `export default`
- Demais componentes do mesmo arquivo: arrow function exportada

## Componentes de UI

- Componentes puros **não fazem fetch direto** — usam hooks ou recebem dados por props
- Mantenha responsabilidades separadas
- Trate os estados: loading, sucesso, erro
- Mensagens de erro devem ser legíveis pelo usuário

## Componentes

- Constantes que não necessitem de re-renders devem ser declaradas abaixo do componente que as utiliza
- Uso do `<Image />` do Next.js deve prever preenchimento dinâmico (layout fill) e conter tratamento de fallback quando a imagem não for fornecida

---

## Nomenclatura de Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente | kebab-case | `form-dialog.tsx` |
| Hook | camelCase | `useProjetos.ts` |
| Service | camelCase + Service | `projetosService.ts` |
| Types | camelCase | `types.ts` |
| Página | kebab-case (pasta) | `app/sobre/page.tsx` |

---

## Padrões de Componentes de Página

- **Seções relacionadas no mesmo arquivo**: Cada seção de uma página, se forem do mesmo contexto, deve estar no mesmo arquivo, sempre abaixo para manter a coesão

---

## Tailwind CSS v4

- Import: `@import "tailwindcss";` (não usa mais `@tailwind base/components/utilities`)
- Variáveis CSS customizadas coexistem com Tailwind diretamente no `:root`
- Fontes externas via `@import url()` no CSS

### Tokens CSS (Design System)

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Cores | `--color-{prop}-{estado}` | `--color-bg-primary`, `--color-accent` |
| Tipografia | `--font-{prop}`, `--font-size-{tipo}` | `--font-family-primary`, `--font-size-heading` |
| Espaçamento | `--spacing-{tamanho}` | `--spacing-xs` a `--spacing-xxl` |
| Dimensões | `--{prop}-{tamanho}` | `--height-xl`, `--max-width-container` |
| Border Radius | `--radius-{tamanho}` | `--radius-sm`, `--radius-md`, `--radius-full` |

**Valores referência (dark theme):**
- Cores: bg-primary (#101828), accent (#7f56d9)
- Fonte: Inter (400, 700)
- Espaçamento: 4px a 131px
