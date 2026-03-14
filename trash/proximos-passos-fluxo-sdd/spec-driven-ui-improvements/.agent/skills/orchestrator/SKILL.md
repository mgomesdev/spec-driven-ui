# Skill: orchestrator

> Camada: GENERATION LAYER (execução) + VALIDATION LAYER (quality gates)
> Input: `tasks.md` + `plan.md` + `cross-check.md` (zero bloqueantes)
> Output: código commitado + `progress.md` atualizado

---

## Quando usar

- "execute as tasks da [feature]"

---

## Loop de execução

### PRÉ-LOOP — executar uma vez

```
1. Verificar cross-check.md: status deve ser "OK". Se BLOQUEADO → PARE.
2. Ler quality-gates.json para saber quais gates estão ativos.
3. Se progress.md > 100 linhas → executar SUB-ROTINA DE DESTILAÇÃO antes de prosseguir.
```

### POR ITERAÇÃO (uma task por vez)

```
1. SELECIONAR
   - Próxima task com Passes: false, maior Priority
   - Verificar: ctx_estimate da task ≤ tokens disponíveis (seguro: ≤ 60% da janela)
   - Se não cabe: compactar histórico da sessão ou iniciar nova sessão

2. CARREGAR CONTEXTO (cirúrgico — não carregue mais do que isso)
   - Seção do plan.md referenciada em plan_ref
   - Seção #section-types do plan.md (sempre)
   - progress.md (últimas 50 linhas apenas)
   - O arquivo de task atual

3. VERIFICAR GUARDS (antes de escrever qualquer código)
   - O componente/hook a implementar está listado no plan.md? Se não → PARE
   - Todas as dependências (imports) estão em files_affected ou já existem? Se não → PARE
   - Checar package.json para cada biblioteca usada

4. IMPLEMENTAR
   - Seguir exatamente os tipos de #section-types
   - Criar apenas os arquivos em files_affected
   - Sem lógica além do escopo da task

5. QUALITY GATES (na ordem — parar no primeiro falho)
   a. tsc --noEmit                    (sempre)
   b. eslint --max-warnings 0         (se lint: true no quality-gates.json)
   c. vitest run --reporter=verbose   (se tests: true)
   d. vitest run --grep @US-XXX       (cenários Gherkin da task)
   e. verificação visual no browser   (se browser_check: true e task tem UI)

6. SE QUALITY GATES PASSAM
   - git add [files_affected apenas]
   - git commit -m "feat([nome-feature]): US-XXX - Título"
   - Marcar Passes: true no tasks.md
   - Registrar em progress.md (máx 3 linhas por task)

7. SE QUALITY GATES FALHAM
   - Tentar corrigir (máx 2 tentativas)
   - Se ainda falha:
     - git stash
     - Marcar Passes: partial no tasks.md
     - Registrar erro exato em progress.md
     - Reportar ao humano com: lista de erros + arquivos afetados
     - PARAR

8. VERIFICAR PRÓXIMA TASK
   - Se há mais tasks com Passes: false → voltar ao passo 1
   - Se todas as tasks com Passes: true → executar PÓS-LOOP
```

### PÓS-LOOP — executar ao concluir todas as tasks

```
1. Destilar progress.md (ver sub-rotina)
2. Atualizar specs/INDEX.md com status da feature
3. Reportar ao humano: X tasks concluídas, Y commits, lista de arquivos criados
4. Humano faz PR
```

---

## Sub-rotina: destilação do progress.md

Executar quando `progress.md` > 100 linhas:

```
1. Identificar padrões repetidos (ex: "sempre usar X quando Y")
2. Consolidar em seção "## Padrões confirmados" (máx 20 linhas)
3. Mover histórico detalhado para progress-archive.md
4. Manter progress.md ≤ 80 linhas operacionais
```

---

## Anti-Hallucination Guards (relembrar a cada iteração)

```
NUNCA:
- Criar arquivo não listado em files_affected
- Usar biblioteca não presente no package.json
- Implementar tipo não definido em #section-types do plan.md
- Marcar Passes: true sem todos os quality gates passando
- Inventar um endpoint não listado no plan.md

SEMPRE:
- Se algo não está no plan.md → PARE e reporte
- Se imports divergem dos paths em tsconfig.json → corrija antes de continuar
```
