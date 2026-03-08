**NÃO commite se houver erros de typecheck ou lint.** Corrija antes.

## Verificação no Navegador

Para histórias com critério `"Verificar no navegador usando a skill dev-browser"`:

1. Use a skill dev-browser para navegar até a página afetada
2. Verifique cada critério visual listado
3. Faça uma captura de tela e inclua no relatório de progresso
4. Se algo não funcionar visualmente, corrija antes de commitar

## Verificações de Qualidade

Execute as verificações especificadas no projeto. Em projetos TypeScript/Next.js, tipicamente:

```bash
# Typecheck
npx tsc --noEmit

# Lint (se configurado)
npx eslint src/features/[nome-da-feature]/

# Build (se necessário para validar)
npx next build
```