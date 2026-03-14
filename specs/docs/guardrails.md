## Carregamento de Arquivos Externos

**CRÍTICO**: Quando encontrar uma referência de arquivo (ex: `@specs/docs/arquitecture.md`), use sua ferramenta de leitura para carregá-lo sob demanda. Eles são relevantes para a TAREFA ESPECÍFICA em questão.

### Instruções

- NÃO carregue todas as referências preventivamente — use lazy loading baseado na necessidade real
- Quando carregado, trate o conteúdo como instruções obrigatórias que sobrepõem os padrões
- Siga referências recursivamente quando necessário

## Antipadrôes a evitar

- ❌ Não implemente nada sem passar pelo fluxo research → plan → tasks
- ❌ Não invente contratos de API — consulte o `plan.md`
- ❌ Não use `any` no TypeScript
- ❌ Não faça `fetch` direto em componentes
- ❌ Não refatore código fora do escopo da história atual
- ❌ Não crie componentes sem tipar as props
- ❌ Não crie arquivos sem seguir o padrão de nomenclatura
- ❌ Não adicione comentários no código.
- ❌ Não crie arquivos desnecessários.
- ❌ Não ultrapasse 500 linhas por arquivo.
- ❌ Não adicione tipagem de retorno, prefira a inferencia de tipos.
- ❌ Não crie constantes que armazena classes do tailwind, declare diretamente no elemento.
- ❌ Não use return quando o componente só possui elementos sem lógica.
- ❌ Não declare componentes com function.
- ❌ Não importe o react sem necessidade.
- ❌ Não selecione props individualmente sem necessidade no componente, prefira desestruturar.
- ❌ NUNCA exporte componentes desnecessariamente, somente exporte se o componente for realmente ser utilizado por outro componente, do contrário, mantenha-os no mesmo aquivo.