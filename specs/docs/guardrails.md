# Guardrails

## Carregamento de Arquivos Externos

> **CRÍTICO**: Quando encontrar uma referência de arquivo (ex: `@specs/docs/arquitecture.md`), use sua ferramenta de leitura para carregá-lo sob demanda. Eles são relevantes para a TAREFA ESPECÍFICA em questão.

### Instruções

- NÃO carregue todas as referências preventivamente — use lazy loading baseado na necessidade real
- Quando carregado, trate o conteúdo como instruções obrigatórias que sobrepõem os padrões
- Siga referências recursivamente quando necessário

---

## Antipadrões a Evitar

| # | Regra |
|---|-------|
| 1 | Não implemente nada sem passar pelo fluxo research → plan → tasks |
| 2 | Não invente contratos de API — consulte o `plan.md` |
| 3 | Não use `any` no TypeScript |
| 4 | Não faça `fetch` direto em componentes |
| 5 | Não refatore código fora do escopo da história atual |
| 6 | Não crie componentes sem tipar as props |
| 7 | Não crie arquivos sem seguir o padrão de nomenclatura |
| 8 | Não adicione comentários no código |
| 9 | Não crie arquivos desnecessários |
| 10 | Não ultrapasse 500 linhas por arquivo |
| 11 | Não adicione tipagem de retorno, prefira a inferência de tipos |
| 12 | Não crie constantes que armazena classes do tailwind, declare diretamente no elemento |
| 13 | Não use return quando o componente só possui elementos sem lógica |
| 14 | Não declare componentes com function |
| 15 | Não importe o react sem necessidade |
| 16 | Não selecione props individualmente sem necessidade no componente, prefira desestruturar |
| 17 | Não exporte componentes desnecessariamente, somente exporte se o componente for realmente ser utilizado por outro componente |
