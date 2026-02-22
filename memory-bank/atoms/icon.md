---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "21-02-2026:15:45"
file_name: "icon.md"
variants: []
version: "1.0"
extends: ["ATOMIC_DESIGN_RULES_ID"]
type: "ATOM"
role: "icon"
id: "AT_ICON_ID"
---

# ATOM — Icon

## 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Ícones**: para os ícones, busque da lib `@radix-ui/react-icons`. Proibido usar outra biblioteca.
- O nome do ícone é passado via prop `icon` pelo componente pai.

---

## 2. Especificações Técnicas

### Default Specs

```json
{
  "className": "size-5 rounded-full text-white"
}
```

> Tokens: `--size-icon: 1.25rem` | `--border-radius-full: 9999px` | `--color-white: #ffffff`

---

## 3. Definição de Conteúdo

| Prop | Tipo | Obrigatório |
|---|---|---|
| `icon` | `string` (nome do ícone Radix UI) | ✅ Sim |
| `className` | `string` | ❌ Sobrescrita permitida pelo pai |

---

## 4. Exemplo de Uso

```tsx
import { SunIcon } from "@radix-ui/react-icons";

// default
<SunIcon className="size-5 rounded-full text-white" />

// override pelo header
<SunIcon className="size-5 rounded-full text-white" />

// override pelo footer
<SunIcon className="size-5 rounded-full text-white w-max" />
```
