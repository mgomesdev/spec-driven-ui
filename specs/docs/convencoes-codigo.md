## Convenções de código

- Tipos/Interfaces PascalCase com sufixos descritivos (`FormDialogProps` para props) e (`FormDialogRef` para ref)
- Componentes declarados como arrow functions: `export const ComponentName = ({ ... }: Props) => ...`
- Arrow functions com retorno direto (sem `return` e `{ ... }`) quando o componente só retorna JSX
- Constantes SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- Variáveis booleanas prefixo is/has/can (`isActive`, `hasPermission`)
- TypeScript Sem `any`. Use `unknown` quando o tipo não for conhecido e documente o motivo
- Em cada arquivo, o componente principal deve ser exportado com `export default` e outros componentes do mesmo aquivo devem ser exportados com arrow funcion.
- Props explicitamente tipadas — nunca `props: any` ou desestruturação sem tipo
- Componentes de UI pura não fazem `fetch` direto — usam hooks ou recebem dados por props
- Interfaces de props sempre nomeadas: `NomeComponenteProps`
- Mantenha responsabilidades separadas — um componente não faz fetch direto se há um hook para isso
- Trate os estados: loading, sucesso, erro
- Mensagens de erro devem ser legíveis pelo usuário
- Arquivos devem seguir o padrão de nomenclatura
- As classes do tailwind devem ser declaradas diretamente no componente no atributo className e não em constantes.

## Componentes

- Constantes que não necessitem de re-renders devem ser declaradas abaixo do componente que as utiliza.
- Uso do `<Image />` do Next.js deve prever preenchimento dinâmico (layout fill) e conter tratamento de fallback quando a imagem não for fornecida.

## Nomenclatura de Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente | kebab-case | `form-dialog.tsx` |
| Hook | camelCase | `useProjetos.ts` |
| Service | camelCase + Service | `projetosService.ts` |
| Types | camelCase | `types.ts` |
| Página | kebab-case (pasta) | `app/sobre/page.tsx` |

### Padrões de Componentes de Página

- **Seções relacionados no mesmo arquivos**: Cada seção de uma página se forem do mesmo contexto, deve estar no mesmo arquivo, sempre abaixo para manter a coesao.


