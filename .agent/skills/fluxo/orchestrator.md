---
name: orchestrator
description: "Executa as histórias do TASKS.md uma por vez como um agente engenheiro de software frontend. Lê o plan.md para contexto técnico, implementa a história, roda typechecks, verifica no navegador, commita e registra aprendizados no progress.md antes de passar para a próxima. Use esta skill para executar o plano de implementação gerado pelas skills de research, plan e tasks. Acionada por: 'execute as tasks', 'iniciar o orchestrator', 'implementar as histórias', 'rodar o agente', 'executar o TASKS.md', 'iniciar implementação'. Deve ser usada APÓS o TASKS.md estar aprovado."
---

# Orchestrator — Agente de Implementação Frontend

Executa as histórias do `TASKS.md` uma por vez. A cada história, lê o contexto técnico do `plan.md`, implementa, valida, commita e registra aprendizados para a próxima iteração.

## Posição no fluxo

```
TASKS.md (aprovado)  →  [ESTA SKILL] implementação  →  código commitado
```

---

## Sua Tarefa (por iteração)

1. Leia o `TASKS.md` em `specs/features/[nome-da-feature]/TASKS.md`
2. Leia o `progress.md` em `specs/features/[nome-da-feature]/progress.md` — **especialmente a seção `## Padrões do Projeto`**
3. Leia o `plan.md` em `specs/features/[nome-da-feature]/plan.md` — consulte as seções relevantes para a história atual
4. Verifique se está no branch correto (`branchName` no TASKS.md). Se não, faça checkout ou crie o branch a partir do principal
5. Selecione a história de **maior prioridade** onde `Passes: false`
6. Implemente **somente essa história**
7. Execute as verificações de qualidade definidas no projeto
8. Se passou: commit + atualiza TASKS.md + registra no progress.md
9. Verifique se ainda há histórias com `Passes: false`

---

## Antes de Implementar: Leia o Contexto

Antes de escrever qualquer código, faça:

1. **Leia `## Padrões do Projeto`** no `progress.md` — padrões descobertos em iterações anteriores
2. **Leia a seção do `plan.md`** referenciada na história (campo `Contexto do plan`)
3. **Identifique os arquivos que já existem** vs os que serão criados
4. **Verifique imports necessários** — não importe o que ainda não existe

---

## Implementando a História

### Foco e Minimalismo

- Implemente **apenas** o que os critérios de aceitação pedem
- Não refatore código existente fora do escopo da história
- Não adicione funcionalidades não listadas nos critérios
- Siga os padrões de código existentes no projeto

### Tipagem

- Use os types definidos no `plan.md` e criados em `types.ts`
- Nunca use `any` — se necessário, use `unknown` e documente
- Importe tipos de `../types` (relativo à feature), não redefina

### Componentes

- Props devem bater exatamente com o definido no `plan.md` seção 5
- Exporte componentes como `export default` e `export` nomeado
- Mantenha responsabilidades separadas — um componente não faz fetch direto se há um hook para isso

### Integração com API

- Use o serviço (`[nome]Service.ts`) para chamadas à API — nunca `fetch` direto em componente
- Trate os estados: loading, sucesso, erro
- Mensagens de erro devem ser legíveis pelo usuário

---

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

**NÃO commite se houver erros de typecheck ou lint.** Corrija antes.

### Verificação no Navegador

Para histórias com critério `"Verificar no navegador usando a skill dev-browser"`:

1. Use a skill dev-browser para navegar até a página afetada
2. Verifique cada critério visual listado
3. Faça uma captura de tela e inclua no relatório de progresso
4. Se algo não funcionar visualmente, corrija antes de commitar

---

## Commit

Após todas as verificações passarem:

```bash
git add .
git commit -m "feat: [ID da História] - [Título da História]"
```

Exemplo: `feat: US-004 - Criar componente ItemCard`

---

## Atualizar TASKS.md

Após o commit, marque a história como concluída:

```markdown
### US-004: Criar componente ItemCard

**Prioridade:** 4
**Passes:** true   ← alterar de false para true
```

---

## Registrar no progress.md

**SEMPRE adicione ao progress.md** — nunca substitua, sempre acrescente ao final:

```markdown
## [YYYY-MM-DD HH:MM] - [ID da História]

**O que foi implementado:**
- [Descrição do que foi criado/modificado]
- Arquivos: `caminho/arquivo1.tsx`, `caminho/arquivo2.ts`

**Aprendizados para iterações futuras:**
- [Padrão descoberto: ex "este projeto usa X para Y"]
- [Problema encontrado: ex "não esquecer de registrar o componente em index.ts"]
- [Contexto útil: ex "a página de listagem está em app/(dashboard)/items/page.tsx"]

---
```

### Consolidar Padrões

Se descobriu algo **geral e reutilizável** que outras histórias devem saber, adicione à seção `## Padrões do Projeto` no **topo** do `progress.md`:

```markdown
## Padrões do Projeto

- Componentes são exportados via `src/features/[nome]/index.ts` — sempre atualize o barrel
- Imports de tipos devem vir de `@/features/[nome]/types`, não relativos
- Sempre use `useToast()` do shadcn para feedback de sucesso/erro, nunca `alert()`
```

**Adicione apenas padrões gerais**, não detalhes específicos de uma história.

---

## Atualizar AGENTS.md

Antes de commitar, verifique se há aprendizados que valem para futuras sessões nesse módulo:

1. Identifique os diretórios modificados
2. Verifique se existe `AGENTS.md` nesses diretórios
3. Se descobriu algo que futuros agentes devem saber sobre esse módulo, adicione

**Boas adições:**
- "Ao modificar X, atualize também Y"
- "Este módulo usa o padrão Z para todas as chamadas de API"
- "Os testes requerem o servidor rodando na porta 3000"

**Não adicione:**
- Detalhes específicos da história
- Notas de debug temporárias
- Informações já no progress.md

---

## Condição de Parada

Após concluir uma história, verifique o TASKS.md:

**Se ainda há histórias com `Passes: false`:**
Encerre normalmente. A próxima iteração processará a próxima história.

**Se TODAS as histórias têm `Passes: true`:**
Responda com:

```
✅ CONCLUÍDO

Todas as histórias foram implementadas:
- [US-001]: [Título] ✅
- [US-002]: [Título] ✅
- ...

Branch: us/[nome-da-feature]
Commits: [número de commits]

👉 Próximos passos sugeridos:
   1. Revisar o código no PR
   2. Rodar testes de integração
   3. Deploy para ambiente de staging
```

---

## Regras Gerais

- **Uma história por iteração** — nunca pule etapas ou implemente duas de uma vez
- **Não invente** — implemente apenas o que está nos critérios de aceitação
- **Siga o plan.md** — os tipos, props e contratos estão definidos lá, não recrie
- **Mantenha o CI verde** — não commite com erros
- **Documente aprendizados** — o progress.md é memória coletiva entre iterações
- **Leia antes de escrever** — sempre consulte padrões do projeto antes de implementar

---

## Formato Rápido de Referência

```
INÍCIO DA ITERAÇÃO:
  1. ler TASKS.md → identificar próxima história (menor prioridade com Passes: false)
  2. ler progress.md → seção "Padrões do Projeto"
  3. ler plan.md → seção referenciada na história

IMPLEMENTAÇÃO:
  4. criar/modificar arquivos conforme critérios
  5. seguir types do plan.md, não reinventar
  6. tratar loading, sucesso e erro na UI

VALIDAÇÃO:
  7. rodar typecheck (obrigatório)
  8. rodar lint (se configurado)
  9. verificar no navegador (se história tem UI)

FINALIZAÇÃO:
  10. git commit -m "feat: US-XXX - Título"
  11. atualizar TASKS.md → Passes: true
  12. adicionar ao progress.md (aprendizados)
  13. atualizar AGENTS.md (se padrão reutilizável)
  14. verificar se há mais histórias → continuar ou encerrar
```
