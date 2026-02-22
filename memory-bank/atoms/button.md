---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "button.md"
variants: ["default", "primary", "link"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "button"
id: "AT_BUTTON_ID"
---

# ATOM — Button

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Restrição de Layout:** Nunca utilize dois botões com variant `primary` lado a lado. Em ações duplas, combine `primary` com `link`.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap"
}
```

### Variant: `primary` — sobrescreve Default Specs

```json
{
  "className": "bg-gradient-primary text-white"
}
```

> Herda do Default: `w-full h-12 rounded-lg border-none whitespace-nowrap`

### Variant: `link` — sobrescreve Default Specs

```json
{
  "className": "bg-transparent"
}
```

> Herda do Default: `w-full h-12 rounded-lg border-none text-gray-500 whitespace-nowrap`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório | Restrição |
|---|---|---|---|
| `label` | `string` | ✅ Sim | Máximo 50 caracteres |
| `variant` | `"default" \| "primary" \| "link"` | ❌ Não | Default: `"default"` |

---

## 4. Accessibility

- **role**: `button`
- **keyboard**: deve ser ativável via as teclas `Enter` e `Space`
- **contrast**: o contraste entre o label/ícone e o background-color deve seguir a norma WCAG AA (mínimo 4.5:1)

---

## 5. Exemplo de Uso

```tsx
// variant: default
<button className="w-full h-12 rounded-lg border-none bg-white text-gray-500 whitespace-nowrap">
  Label
</button>

// variant: primary
<button className="w-full h-12 rounded-lg border-none bg-gradient-primary text-white whitespace-nowrap">
  Entre em Contato
</button>

// variant: link
<button className="w-full h-12 rounded-lg border-none bg-transparent text-gray-500 whitespace-nowrap">
  Download CV
</button>
```
