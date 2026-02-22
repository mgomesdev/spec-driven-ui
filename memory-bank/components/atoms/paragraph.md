---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "paragraph.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "paragraph"
id: "AT_PARAGRAPH_ID"
---

# ATOM — Paragraph

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- O componente pai pode sobrescrever `className` via prop para ajustar cor e tamanho conforme contexto — nunca adicionando propriedades fora dos tokens definidos em `DESIGN_TOKENS_ID`.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "text-primary-600 text-sm"
}
```

> Token: `--color-primary-600: #7f56d9` | `--text-sm: 0.875rem`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `label` | `string` | ✅ Sim |
| `className` | `string` | ❌ Sobrescrita permitida pelo pai |

---

## 4. Exemplo de Uso

```tsx
// default
<p className="text-primary-600 text-sm">
  Texto padrão
</p>

// override pelo hero
<p className="text-gray-50 text-xl">
  Visite meu perfil no Linkedin...
</p>

// override pelo footer
<p className="text-xs text-white">
  © 2026 matheusgomesdev.
</p>

// override pelo hero (tag de identificação)
<p className="text-xs text-white">
  &lt;MatheusGomesDev /&gt;
</p>
```
