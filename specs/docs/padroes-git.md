## Padrão de Commits

- **NÃO commite se houver erros de typecheck, lint, testes.** Corrija e faça funcionar antes.
- **Commits devem ser atômicos — um por história implementada.**

> As palavras-chave **“DEVE”**, **“NÃO DEVE”**, **“OBRIGATÓRIO”**, **“DEVERÁ”**, **“NÃO DEVERÁ”**, **“RECOMENDADO”**, **“PODE”** e **“OPCIONAL”** neste documento devem ser interpretadas conforme descrito.

### Estrutura da Mensagem de Commit

- Os commits **DEVEM** ser precedidos por um **tipo**, que consiste em um substantivo (`feat`, `fix`, etc.), seguido pelo **escopo OPCIONAL**, **OPCIONAL `!`**, e pelos **dois pontos e espaço OBRIGATÓRIOS**.

### Tipos de Commit

- O tipo **`feat`** **DEVE** ser usado quando um commit adiciona um **novo recurso** ao aplicativo ou biblioteca.
- O tipo **`fix`** **DEVE** ser usado quando um commit representar uma **correção de bug** para a aplicação.
- Outros tipos além de `feat` e `fix` **PODEM** ser usados em mensagens de commit, por exemplo:

```text
docs: update ref docs
```

### Escopo

- Um **escopo** **PODE** ser fornecido após um tipo.
- Um escopo **DEVE** consistir em um **substantivo que descreve uma seção do código-fonte**, entre parênteses.

Exemplo:

```text
fix(parser):
```

### Descrição

- A **descrição** **DEVE** seguir imediatamente os **dois pontos e o espaço** após o prefixo de tipo/escopo.
- A descrição é um **breve resumo das alterações no código**.

Exemplo:

```text
fix: problema de análise de array quando vários espaços estavam contidos na string
```

### Corpo do Commit

* Um **corpo de commit mais extenso** **PODE** ser fornecido após a breve descrição.
* Ele oferece **informações contextuais adicionais** sobre as alterações no código.
* O corpo **DEVE começar após uma linha em branco** depois da descrição.
* O corpo é **de formato livre** e **PODE consistir em qualquer número de parágrafos separados por quebras de linha**.

### Rodapé (Footers)

- **Um ou mais rodapés** **PODEM** ser fornecidos **uma linha em branco após o corpo** do texto.
- Cada rodapé **DEVE consistir em**:
  - Uma **palavra (token)**
  - Um **separador** (`:<space>` ou `<space>#`)
  - Um **valor de string**

Isso é inspirado na **convenção de rodapé do Git**.

### Regras de Token

- O token de rodapé **DEVE usar hífens no lugar de espaços**, por exemplo:

```text
Acked-by
```

* Isso ajuda a **diferenciar a seção de rodapé de um corpo de texto com vários parágrafos**.

### Exceção

- A exceção é **`BREAKING CHANGE`**, que **TAMBÉM PODE ser usado como token**.

### Valor do Rodapé

- O valor de um rodapé **PODE conter espaços e quebras de linha**.
- A análise **DEVE ser encerrada quando o próximo par válido de token/separador de rodapé for encontrado**.

### Alterações Incompatíveis (Breaking Changes)

Alterações que quebram compatibilidade **DEVEM ser indicadas**:

1. **No prefixo de tipo/escopo do commit**, ou
2. **Como uma entrada no rodapé**

### Forma em Rodapé

Se incluída como rodapé, uma alteração incompatível **DEVE** consistir no texto:

```
ALTERAÇÃO INCOMPATÍVEL: <descrição>
```

Exemplo:

```text
ALTERAÇÃO INCOMPATÍVEL: as variáveis de ambiente agora têm precedência sobre os arquivos de configuração
```

### Forma no Prefixo

-  Se incluído no prefixo de tipo/escopo, alterações incompatíveis **DEVEM ser indicadas** por um `!` imediatamente antes do `:`.

Exemplo:

```text
feat!: remove suporte à configuração antiga
```

- Se `!` for usado:
  - `BREAKING CHANGE:` **PODE ser omitido** da seção de rodapé.
  - A **descrição do commit DEVE explicar a mudança incompatível**.

### Sensibilidade a Maiúsculas

- As unidades de informação que compõem os **Commits Convencionais NÃO DEVEM ser tratadas como sensíveis a maiúsculas e minúsculas** pelos implementadores.
- **Exceção:** `BREAKING CHANGE`, que **DEVE ser escrita em maiúsculas**.

### Sinônimos

- `BREAKING-CHANGE` **DEVE ser considerado sinônimo de** `BREAKING CHANGE` quando usado como token em um rodapé.