# Guia de Uso: Gerando Componentes com memory-bank.md

## 🎬 Cenário — Fluxo Manual com Instruções Diretas

---

## 📥 PASSO 1: Obter memory-bank.md Consolidado

**Você executa repomix para gerar `memory-bank.md`:**

```bash
npm run compile
```

Saída: `memory-bank/memory-bank.md` — arquivo consolidado com todos os componentes e regras.

---

## 📋 PASSO 2: Colar memory-bank.md na Conversa

**Cole o conteúdo completo de `memory-bank.md` ANTES de usar a frase de geração.**

A IA vai extrair o bloco específico do ID solicitado do arquivo consolidado.

> **Obs**: algumas IAs não permitem enviar somente o arquivo sem um texto digitado no prompt, em meus testes usei o seguinte texto: `Use memory-bank.md como contexto e aguarde minha solicitação`. A IA irá aguardar o comando do passo 3.

---

## 🎯 PASSO 3: Gerar um Componente Individual

**Para gerar qualquer componente (ATOM, MOLECULE, ORGANISM ou PAGE), copie e cole a seguinte frase na IA:**

```
Limpe o contexto e gere [ID] isoladamente, utilizando estritamente os dados do bloco correspondente no memory-bank.md. 

- Mantenha a especificação técnica original e aplique as diretrizes de [Tokens/Rules] declaradas para garantir fidelidade 1:1.
- É proibido inferir estilos, arredondamentos, inventar propriedades, componentes irmãos, elementos não declarados ou cores fora da especificação técnica original.
- Responda apenas com o código bruto, mantendo fidelidade 1:1 com a spec.
```

**Substitua `[ID]` pelo ID desejado. Exemplos:**

- `Limpe o contexto e gere AT_BUTTON_ID isoladamente...`
- `Limpe o contexto e gere MOL_CARD_ID isoladamente...`
- `Limpe o contexto e gere ORG_HERO_ID isoladamente...`
- `Limpe o contexto e gere HOME_ID isoladamente...`

---


## ✅ Exemplo Prático

### Solicitação:
```
[Cole aqui o memory-bank.md completo]

Limpe o contexto e gere AT_HERO_ID isoladamente, utilizando estritamente os dados do bloco correspondente no memory-bank.md. 

- Mantenha a especificação técnica original e aplique as diretrizes de [Tokens/Rules] declaradas para garantir fidelidade 1:1.
- É proibido inferir estilos, arredondamentos, inventar propriedades, componentes irmãos, elementos não declarados ou cores fora da especificação técnica original.
- Responda apenas com o código bruto, mantendo fidelidade 1:1 com a spec.
```

### Esperado — Resposta (CORRETA):
```tsx
<button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
  Label
</button>
```

✅ **Apenas o componente, sem narrativa ou explicações**

---

## 🎨 PASSO 4: Gerar Design System Completo

**Para gerar TODOS os componentes de uma vez, copie e cole:**

```
Limpe o contexto  e aja como um especialista em Design Systems. Extraia todo o conteúdo integral do memory-bank.md e reconstrua o Design System seguindo rigorosamente a arquitetura de Atomic Design declarada.

# Diretrizes de Extração

## Fidelidade 1:1
Processe cada ID (Atoms, Molecules, Organisms, Templates, Pages, Rules) em ordem sequencial. É terminantemente proibido o uso de valores genéricos ou 'placeholders'. Se o documento define um Border-Radius: 4px, não utilize rounded-md, mantendo a especificação técnica 1:1 de cada um.

## Exaustividade de Propriedades

Transcreva todos os tokens de design (Typography, Color Palette, Spacing Scale, Shadows) e estados de componentes (Hover, Focus, Disabled, Active) exatamente como mapeados. É proibido resumir, omitir propriedades. 

## Sem Intervenção Criativa

Não adicione componentes extras, não sugira melhorias e não agrupe definições distintas. O output deve ser o código bruto das especificações técnicas exatamente como definido, sem intervenções criativas ou componentes extras não declarados.

## Foco em Artefatos de Conversão

Priorize a precisão técnica dos elementos críticos do site: Headers responsivos, Grids de formulários, Hierarquia de botões (Primary/Secondary/Ghost) e Cards de conteúdo, mantendo a consistência com as Rules (Regras) extraídas.
```

---

## 📊 Resultado Esperado

| ID | Tipo | Resultado |
|---|---|---|
| AT_BUTTON_ID | ATOM | `<button>...</button>` |
| AT_HEADING_ID | ATOM | `<h2>...</h2>` |
| AT_PARAGRAPH_ID | ATOM | `<p>...</p>` |
| AT_AVATAR_ID | ATOM | `<div>...</div>` com imagem |
| AT_ICON_ID | ATOM | `<SunIcon>...</SunIcon>` |
| MOL_CARD_ID | MOLECULE | `<div>` com children |
| ORG_HEADER_ID | ORGANISM | `<header>...</header>` |
| ORG_HERO_ID | ORGANISM | `<section>...</section>` |
| ORG_FOOTER_ID | ORGANISM | `<footer>...</footer>` |
| HOME_ID | PAGE | `<div>` com 3 organismos |

---

## 🎯 Fluxo Recomendado

```
1. npm run compile (gera memory-bank.md)
2. Copia memory-bank.md completo
3. Cola na conversa com IA
4. Cola frase de geração para cada ID (ou frase de Design System completo)
5. Recebe código bruto
6. Cola no v0/Next.js e renderiza
```

**Tempo total:** ~5 min para 10 componentes prontos

---

## ⚠️ Checklist Pós-Geração

Antes de colar no seu projeto, valide:

- [ ] Nenhuma narrativa ou explicação no código gerado?
- [ ] Cada resposta tinha APENAS 1 elemento raiz?
- [ ] Todos os `className` seguem a especificação?
- [ ] Não há valores hex diretos sem token?
- [ ] Se foi solicitado um ID, apenas aquele foi gerado?
- [ ] Não há componentes irmãos não solicitados?

✅ **Se tudo passou, copia e cola direto no seu projeto — funcionará 100%**

---

## 💡 Dicas

- **Cole sempre o memory-bank.md completo** antes de gerar componentes
- **Use a frase exata** para máxima precisão
- **Para um único componente**, use a frase de geração individual
- **Para todos de uma vez**, use a frase de Design System completo
- **O código é bruto**, sem marcadores ou explicações adicionais
