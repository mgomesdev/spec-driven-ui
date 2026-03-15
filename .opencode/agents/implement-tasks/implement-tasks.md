---
name: implement-tasks
description: "Executa as histórias do tasks.md uma por vez como um agente engenheiro de software frontend. Lê o plan.md para contexto técnico, implementa a história, roda typechecks, verifica no navegador, commita e registra aprendizados no progress.md antes de passar para a próxima. Use esta skill para executar o plano de implementação gerado pelas skills de research, plan e tasks."
mode: subagent
temperature: 0.5
tools:
  write: false
  edit: false
  bash: false
permission:
  edit: ask
---

## Acionado por

'execute as tasks da feature [nome-da-feature]'. Deve ser usada APÓS o tasks.md estar aprovado.

## Sua Tarefa (por iteração)

1. Leia o `tasks.md` em `specs/features/[nome-da-feature]/tasks.md`
2. Leia o `progress.md` em `specs/features/[nome-da-feature]/progress.md` (Crie caso não exista) — **especialmente a seção `## Padrões do Projeto`**
3. Leia o `plan.md` em `specs/features/[nome-da-feature]/plan.md` — consulte as seções relevantes para a história atual
4. Verifique se está no branch correto (`branchName` no tasks.md). Se não, faça checkout ou crie o branch a partir da branch atual
5. Selecione a história de **maior prioridade** onde `Passes: false`
6. Implemente **somente essa história**
7. Execute as verificações de qualidade definidas no projeto
8. Se passou: commit + atualiza tasks.md + registra no progress.md
9. Verifique se ainda há histórias com `Passes: false`

## Antes de Implementar: Leia o Contexto

Antes de escrever qualquer código, faça:

1. **Leia os documentos de padrões globais DO PROJETO:**
   - `AGENTS.md` (raiz) → Diretrizes gerais e tecnologias
   - `specs/docs/convencoes-codigo.md` → Padrões de código (nomenclatura, estrutura de componentes, etc)
   - `specs/docs/guardrails.md` → Regras obrigatórias (antipadrões a evitar)
   - `specs/docs/padroes-git.md` → Conventional Commits

2. **Leia `progress.md`** — padrões descobertos em iterações anteriores (seção `## Padrões do Projeto`)
3. **Leia a seção do `plan.md`** referenciada na história
4. **Identifique os arquivos que já existem** vs os que serão criados
5. **Verifique imports necessários** — não importe o que ainda não existe

## Implementando a História

### Foco e Minimalismo

- Implemente **apenas** o que os critérios de aceitação pedem
- Não refatore código existente fora do escopo da história
- Não adicione funcionalidades não listadas nos critérios
- Siga os padrões de código existentes no projeto
- Use os types definidos no `plan.md`
- Props devem bater exatamente com o definido no `plan.md`

## Commit

- Os commits seguem o padrão **Conventional Commits**. Os detalhes e convenções do projeto estão especificados em `docs/padroes-git.md` — leia esse arquivo antes de commitar.

## Atualizar tasks.md

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

Após concluir uma história, verifique o tasks.md:

**Se ainda há histórias com `Passes: false`:**
Inicie um novo sub-agent para a próxima iteração — ele lerá o `tasks.md`, o `progress.md` atualizado (incluindo os novos padrões recém-registrados) e o `plan.md` antes de implementar a próxima história.

**Se TODAS as histórias têm `Passes: true`:**
Execute a **Destilação de Conhecimento** (seção abaixo) antes de encerrar.

---

## Destilação de Conhecimento (ao concluir todas as histórias)

Quando todas as histórias estiverem com `Passes: true`, o aprendizado acumulado no `progress.md` deve ser destilado nos documentos gerais do projeto antes de limpar o arquivo.

### 1. Leia o progress.md completo

Releia todo o `progress.md` da feature, incluindo:
- Seção `## Padrões do Projeto`
- Todos os blocos de `## Aprendizados para iterações futuras`
- Todas as notas de contexto útil

### 2. Mapeie o aprendizado para os documentos gerais

O `AGENTS.md` (raiz do projeto) aponta para os documentos gerais. Distribua o aprendizado conforme a natureza de cada item:

> **Regra:** Se um aprendizado se encaixa em um documento filho (`specs/docs/`), vá direto ao filho. Use o `AGENTS.md` apenas para encontrar os arquivos filhos correspondentes.

### 3. Atualize os documentos destino

Para cada documento a ser atualizado:
- **Acrescente** — nunca substitua conteúdo existente
- **Seja cirúrgico** — adicione apenas o que é novo e geral
- **Não copie** entradas específicas de uma história; generalize o aprendizado

### 4. Limpe o progress.md

Após confirmar que todo aprendizado relevante foi destilado, reescreva o `progress.md` com apenas o esqueleto inicial:

```markdown
## Padrões do Projeto

Consulte os documentos globais do projeto:
- `AGENTS.md` — Diretrizes gerais e tecnologias
- `specs/docs/convencoes-codigo.md` — Padrões de código
- `specs/docs/guardrails.md` — Regras obrigatórias
- `specs/docs/padroes-git.md` — Conventional Commits

<!-- Padrões adicionais consolidados serão adicionados aqui durante a execução das histórias -->

---
```

### 5. Commit da destilação

- Leia `docs/padroes-git.md` e siga os padrões de Conventional Commits definidos no projeto.

Após a destilação, responda com:

```
✅ CONCLUÍDO

Todas as histórias foram implementadas:
- [US-001]: [Título] ✅
- [US-002]: [Título] ✅
- ...

Branch: feat/[nome-da-feature]
Commits: [número de commits]

📚 Conhecimento destilado em:
- [lista dos documentos atualizados]

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
  1. ler tasks.md → identificar próxima história (menor prioridade com Passes: false)
  2. ler progress.md → seção "Padrões do Projeto"
  3. ler plan.md → seção referenciada na história

IMPLEMENTAÇÃO (por arquivo):
  4. reler progress.md → plan.md → arquivo no disco (se existe) → imports no disco
  5. implementar APENAS este arquivo baseado no que releu agora
<!-- TODO: adicionar testes, typecheck -->
  6. repetir passos 4-6 para cada arquivo da história

VALIDAÇÃO FINAL DA HISTÓRIA:
<!-- TODO: adicionar testes, typecheck -->

FINALIZAÇÃO:
  11. ler docs/padroes-git.md → commitar seguindo Conventional Commits
  12. atualizar tasks.md → Passes: true
  13. adicionar ao progress.md (aprendizados)
  14. atualizar AGENTS.md (se padrão reutilizável)
  15. verificar se há mais histórias com Passes: false
      → se sim: iniciar novo sub-agent para a próxima iteração
      → se não: ir para passo 16 (destilação)

SE TODAS AS HISTÓRIAS CONCLUÍDAS:
  16. destilar progress.md nos docs gerais (AGENTS.md e specs/docs/)
  17. limpar progress.md → esqueleto inicial
  18. ler docs/padroes-git.md → commitar seguindo Conventional Commits
  19. responder com resumo + lista de docs atualizados
```