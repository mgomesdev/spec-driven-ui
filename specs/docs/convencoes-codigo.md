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
