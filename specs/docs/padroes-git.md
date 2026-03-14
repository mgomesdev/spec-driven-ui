# Padrões de Git

## Regras Gerais

- **NÃO commite se houver erros de typecheck, lint, testes.** Corrija e faça funcionar antes.
- **Commits devem ser atômicos** — um por história implementada.

> As palavras-chave **"DEVE"**, **"NÃO DEVE"**, **"OBRIGATÓRIO"**, **"DEVERÁ"**, **"NÃO DEVERÁ"**, **"RECOMENDADO"**, **"PODE"** e **"OPCIONAL"** neste documento devem ser interpretadas conforme descrito.

---

## Estrutura da Mensagem de Commit

```
<tipo>(<escopo>)[!]: <descrição>

[corpo opcional]

[rodapés opcionais]
```

### Tipos de Commit

| Tipo | Uso |
|------|-----|
| `feat` | Adiciona um novo recurso ao aplicativo ou biblioteca |
| `fix` | Representa uma correção de bug para a aplicação |
| `docs` | Alterações em documentação |
| `style` | Alterações que não afetam o significado do código |
| `refactor` | Refatoração de código |
| `test` | Adição ou correção de testes |
| `chore` | Tarefas de manutenção |

### Escopo

Um **escopo** pode ser fornecido após um tipo. Deve consistir em um substantivo que descreve uma seção do código-fonte, entre parênteses.

```text
fix(parser)
feat(auth)
```

### Descrição

A descrição deve seguir imediatamente os dois pontos e o espaço após o prefixo de tipo/escopo. É um breve resumo das alterações no código.

```text
fix: problema de análise de array quando vários espaços estavam contidos na string
```

---

## Corpo do Commit

Um corpo de commit mais extenso pode ser fornecido após a breve descrição. Ele oferece informações contextuais adicionais sobre as alterações no código.

- O corpo **DEVE** começar após uma linha em branco depois da descrição
- O corpo é de formato livre e pode consistir em qualquer número de parágrafos separados por quebras de linha

---

## Rodapé (Footer)

Um ou mais rodapés podem ser fornecidos uma linha em branco após o corpo do texto. Cada rodapé deve consistir em:

- Uma palavra (token)
- Um separador (`: ` ou ` #`)
- Um valor de string

### Regras de Token

O token de rodapé deve usar hífens no lugar de espaços:

```text
Acked-by: Nome Sobrenome
Co-authored-by: nome@email.com
```

### Exceção

A exceção é `BREAKING CHANGE`, que também pode ser usado como token.

---

## Alterações Incompatíveis (Breaking Changes)

Alterações que quebram compatibilidade **DEVEM** ser indicadas de uma das seguintes formas:

### Forma no Prefixo

Adicione `!` imediatamente antes do `:`:

```text
feat!: remove suporte à configuração antiga
feat(auth)!: altera API de autenticação
```

### Forma no Rodapé

```text
ALTERAÇÃO INCOMPATÍVEL: as variáveis de ambiente agora têm precedência sobre os arquivos de configuração
```

> Quando `!` for usado no prefixo, `BREAKING CHANGE:` pode ser omitido do rodapé.

---

## Sensibilidade a Maiúsculas

- As unidades de informação que compõem os Commits Convencionais **NÃO DEVEM** ser tratadas como sensíveis a maiúsculas e minúsculas
- **Exceção:** `BREAKING CHANGE`, que **DEVE** ser escrita em maiúsculas
- `BREAKING-CHANGE` é considerado sinônimo de `BREAKING CHANGE`
