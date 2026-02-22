---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "heading.md"
variants: ["gradient"]
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "heading"
id: "AT_HEADING_ID"
---

# ATOM — Heading

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- O nível semântico (`h1`, `h2`, etc.) é determinado pelo contexto do componente pai.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "text-white text-xl"
}
```

### Variant: `gradient` — sobrescreve Default Specs

```json
{
  "className": "text-primary-600 text-5xl font-semibold"
}
```

> Token: `--color-primary-600: #7f56d9` | `--text-5xl: 3rem` | `--font-semibold: 600`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `label` | `string` | ✅ Sim |
| `variant` | `"default" \| "gradient"` | ❌ Não (default: `"default"`) |

---

## 4. Exemplo de Uso

```tsx
// variant: default
<h2 className="text-white text-xl">
  apaixonado por criação de interfaces inovadoras
</h2>

// variant: gradient
<h1 className="text-primary-600 text-5xl font-semibold">
  Programador Frontend
</h1>
```
