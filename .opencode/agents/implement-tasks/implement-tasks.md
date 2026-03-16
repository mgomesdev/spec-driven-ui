---
name: implement-tasks
description: "Executa as histórias do tasks.md uma por vez como um agente engenheiro de software frontend. Lê o plan.md para contexto técnico, implementa a história, commita e registra aprendizados no progress.md antes de passar para a próxima. Use esta skill para executar o plano de implementação gerado pelas skills de research, plan e tasks."
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

0. **Leia o `AGENTS.md` na raiz do projeto** → identifique todos os docs globais referenciados → leia cada um deles (`convencoes-codigo.md`, `guardrails.md`, `padroes-git.md`, etc.) **antes de qualquer implementação** — faça isso UMA VEZ no início da sessão
1. Leia o `tasks.md` em `specs/features/[nome-da-feature]/tasks.md`
2. Leia o `progress.md` em `specs/features/[nome-da-feature]/progress.md` (Crie caso não exista) — **especialmente a seção `## Padrões do Projeto`**
3. Leia o `plan.md` em `specs/features/[nome-da-feature]/plan.md` — consulte as seções relevantes para a história atual
4. Verifique se está no branch correto (`branchName` no tasks.md). Se não, faça checkout ou crie o branch a partir da branch atual
5. Selecione a história de **maior prioridade** onde `Passes: false`
6. **Execute o ciclo TDD** (chame sub-agent tdd-playwright):
   - O sub-agent cria testes que falham → implementa código → testes passam
   - **O sub-agent DEVE criar branch, commitar e atualizar tasks.md**
   - Verifique se o commit foi feito após o sub-agent retornar
7. **Execute verificação de padrões** (chame sub-agent verify-patterns):
   - Verifica convenções, guardrails, arquitetura e contrato plan.md
8. Se drift detectado: retorne para etapa 6 (TDD)
9. Se aprovado: verifique se o commit foi feito → atualiza tasks.md + registra no progress.md
10. Verifique se ainda há histórias com `Passes: false`

---

## Integração TDD e Verificação de Padrões

### Fluxo Completo por User Story

```
[Selecionar US] → [TDD (tdd-playwright)] → [Verificação (verify-patterns)] → [Commit]
                         ↓                          ↓
                   Teste falha                 Drift detectado
                   Código passa                   ↓
                   Teste passa              Retorna para TDD
```

### Chamando o Sub-agent TDD

Para executar o ciclo TDD para uma US:

```
execute tdd da US-[ID] para [nome-da-feature]
```

O sub-agent tdd-playwright:
1. Verifica/configura Playwright se necessário
2. Cria testes que falham para cada critério de aceitação
3. Implementa código para fazer os testes passarem
4. Registra aprendizados no progress.md

### Chamando o Sub-agent de Verificação

Após o TDD passar, execute a verificação de padrões:

```
execute verify-patterns para [nome-da-feature] US-[ID]
```

O sub-agent verify-patterns:
1. Carrega convenções (convencoes-codigo.md, guardrails.md, architecture.md)
2. Carrega contrato do plan.md
3. Verifica todos os arquivos modificados
4. Se drift detectado: retorna para TDD corrigir
5. Se aprovado: permite commit

### Loop de Correção

Se verify-patterns detectar drift:
1. Liste os drifts encontrados
2. Acione o tdd-playwright novamente com a correção
3. Execute verify-patterns novamente
4. Repita até aprovação

---

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
Inicie um novo sub-agent para a próxima iteração — ele lerá o `AGENTS.md` + docs globais, o `tasks.md`, o `progress.md` atualizado (incluindo os novos padrões recém-registrados) e o `plan.md` antes de implementar a próxima história.

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

- **Leia os docs globais primeiro** — `AGENTS.md` e os docs referenciados nele definem naming, imports e estrutura. Nunca assuma convenções.
- **Uma história por iteração** — nunca pule etapas ou implemente duas de uma vez
- **Não invente** — implemente apenas o que está nos critérios de aceitação
- **Siga o plan.md** — os tipos, props e contratos estão definidos lá, não recrie
- **Mantenha o CI verde** — não commite com erros
- **Documente aprendizados** — o progress.md é memória coletiva entre iterações
- **Leia antes de escrever** — sempre consulte padrões do projeto antes de implementar
- **SEMPRE use TDD** — nunca implemente sem testes; o fluxo é: teste falha → código passa → verifica padrões → commit
- **Playwright deve estar rodando** — o servidor dev deve estar ativo na porta 3000 para testes E2E
- **SEMPRE crie branch específica da US** — antes de implementar, faça `git checkout -b feat/[nome-feature]/[us-id]`
- **SEMPRE commite ao final** — nunca finalize uma task sem commit. O progresso será perdido.
- **SEMPRE peça aprovação antes de operações irreversíveis** — commits, pushes, merges devem ser validados pelo usuário

---

## Formato Rápido de Referência

```
INÍCIO DA SESSÃO (uma vez, antes da primeira história):
  0. ler AGENTS.md → ler TODOS os docs globais referenciados
     (convencoes-codigo.md, guardrails.md, padroes-git.md, etc.)

INÍCIO DE CADA ITERAÇÃO:
  1. ler tasks.md → identificar próxima história (menor prioridade com Passes: false)
  2. ler progress.md → seção "Padrões do Projeto"
  3. ler plan.md → seção referenciada na história

IMPLEMENTAÇÃO (TDD por arquivo):
  4. Chamar sub-agent tdd-playwright para a US atual
     → Sub-agent cria testes que falham → implementa código → testes passam
  5. Chamar sub-agent verify-patterns após TDD
     → Se drift: retorna para passo 4
     → Se aprovado: prossegue para commit

VALIDAÇÃO FINAL DA HISTÓRIA:
  6. Verify-patterns passou: commit + atualizar tasks.md + progress.md

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