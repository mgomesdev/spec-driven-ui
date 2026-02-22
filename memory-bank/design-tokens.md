---
dependencies: []
created_at: "21-02-2026:15:45"
updated_at: "22-02-2026:13:00"
file_name: design-tokens.md
version: "1.3"
extends: ["GLOBAL_RULES_ID"]
type: "RULES"
id: "DESIGN_TOKENS_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Priorizar os tokens**: Este arquivo é a "Single Source of Truth" para valores visuais. Nenhum valor de cor, tipografia, borda, sombra ou estado interativo pode ser usado se não estiver definido aqui.
- **Política de Token Ausente**: Se um valor não existir neste arquivo, **NÃO invente um substituto**. Emita `[TOKEN_NOT_FOUND: <nome_do_token>]` no output e sinalize para o usuário.
- **Tailwind como fallback**: O uso de utilitários Tailwind CSS v4 é permitido **exclusivamente** para propriedades estruturais neutras que não envolvam valores visuais (ex: `flex`, `grid`, `w-full`, `overflow-hidden`, `items-center`, `justify-between`). **Proibido** usar utilitários Tailwind para cores, tipografia, bordas, sombras, espaçamentos decorativos ou quaisquer estados interativos que não estejam definidos nos tokens abaixo.

---

# 2. Configuração Obrigatória do Tailwind CSS v4

> ⚠️ **ATENÇÃO**: Os tokens abaixo **só funcionam em produção** se o bloco `@theme` estiver configurado no CSS global do projeto (ex: `globals.css` ou `app.css`). Sem essa configuração, classes como `bg-gradient-primary` não serão reconhecidas pelo Tailwind e não renderizarão.

O agente **deve incluir este bloco** ao gerar o setup inicial do projeto ou ao gerar a página `HOME_ID`.

```css
@import "tailwindcss";

@theme {
  --color-primary-500: #9e77ed;
  --color-primary-600: #7f56d9;
  --color-gray-50: #f9fafb;
  --color-gray-500: #667085;
  --color-gray-900: #101828;
  --color-white: #ffffff;
  --color-gradient-primary: linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);
}
```

**Mapeamento className → token** (referência para validação do agente):

| Classe usada nos componentes | Token CSS correspondente |
|---|---|
| `text-primary-500` | `--color-primary-500` |
| `text-primary-600` | `--color-primary-600` |
| `bg-primary-600` | `--color-primary-600` |
| `bg-gradient-primary` | `--color-gradient-primary` |
| `text-gray-50` | `--color-gray-50` |
| `text-gray-500` | `--color-gray-500` |
| `bg-gray-500` | `--color-gray-500` |
| `bg-gray-900` | `--color-gray-900` |
| `text-white` | `--color-white` |
| `border-white` | `--color-white` |

---

# 3. Fonts

- **Global Font**: `Inter` — configurada por padrão em todo o sistema.

---

# 4. Color Tokens

```json
{
  "--color-primary-500": "#9e77ed",
  "--color-primary-600": "#7f56d9",
  "--color-gray-50":  "#f9fafb",
  "--color-gray-500": "#667085",
  "--color-gray-900": "#101828",
  "--color-white":    "#ffffff",
  "--color-gradient-primary": "linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)"
}
```

---

# 5. Typography Tokens

```json
{
  "--text-xs":   "0.75rem",
  "--text-sm":   "0.875rem",
  "--text-base": "1rem",
  "--text-xl":   "1.25rem",
  "--text-5xl":  "3rem",
  "--font-semibold": "600"
}
```

---

# 6. Spacing Tokens

```json
{
  "--spacing-2": "0.5rem",
  "--spacing-3": "0.75rem",
  "--spacing-4": "1rem",
  "--spacing-5": "1.25rem",
  "--spacing-8": "2rem",
  "--spacing-16": "4rem"
}
```

---

# 7. Border Tokens

```json
{
  "--border-radius-md":  "0.375rem",
  "--border-radius-lg":  "0.5rem",
  "--border-radius-full":"9999px",
  "--border-width-2":    "2px",
  "--border-width-4":    "4px",
  "--border-color-default": "var(--color-gray-500)",
  "--border-color-white":   "var(--color-white)"
}
```

---

# 8. Shadow Tokens

```json
{
  "--shadow-none": "none"
}
```

> ⚠️ Sombras não definidas aqui devem emitir `[TOKEN_NOT_FOUND: shadow-<nome>]`.

---

# 9. Interactive State Tokens

```json
{
  "--state-disabled-opacity": "0.5",
  "--state-focus-ring": "0 0 0 3px rgba(127, 86, 217, 0.4)"
}
```

> ⚠️ Estados como `hover` e `active` não possuem tokens definidos nesta versão. Qualquer cor de hover/active deve emitir `[TOKEN_NOT_FOUND: state-hover-<contexto>]`.

---

# 10. Sizing Tokens

```json
{
  "--size-avatar":    "92px",
  "--size-icon":      "1.25rem",
  "--height-header":  "80px",
  "--height-footer":  "60px",
  "--height-button":  "3rem",
  "--max-width-card": "352px",
  "--max-width-hero": "700px"
}
```