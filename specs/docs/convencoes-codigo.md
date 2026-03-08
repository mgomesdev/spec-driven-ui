## Convenções de código

- Tipos/Interfaces PascalCase com sufixos descritivos (`FormDialogProps` para props) e (`FormDialogRef` para ref)
- Constantes SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- Variáveis booleanas prefixo is/has/can (`isActive`, `hasPermission`)
- TypeScript Sem `any`. Use `unknown` quando o tipo não for conhecido e documente o motivo
- Sempre `export default` + `export` nomeado no mesmo arquivo
- Props explicitamente tipadas — nunca `props: any` ou desestruturação sem tipo
- Componentes de UI pura não fazem `fetch` direto — usam hooks ou recebem dados por props
- Interfaces de props sempre nomeadas: `NomeComponenteProps`
- Mantenha responsabilidades separadas — um componente não faz fetch direto se há um hook para isso
- Use o serviço (`[nome]Service.ts`) para chamadas à API — nunca `fetch` direto em componente
- Trate os estados: loading, sucesso, erro
- Mensagens de erro devem ser legíveis pelo usuário
- Arquivos devem seguir o padrão de nomenclatura

## Componentes

- Componentes devem seguir o padrão de nomenclatura
- Constantes que não necessitem de re-renders devem ser declaradas abaixo do componente que as utiliza.

## Nomenclatura de Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente | kebab-case | `form-dialog.tsx` |
| Hook | camelCase | `useProjetos.ts` |
| Service | camelCase + Service | `projetosService.ts` |
| Types | camelCase | `types.ts` |
| Página | kebab-case (pasta) | `app/sobre/page.tsx` |