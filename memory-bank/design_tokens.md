---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "18-02-2026:12:30"
file_name: design_tokens.md
version: "1.0"
extends: ["GLOBAL_RULES_ID"]
id: "TOKENS_GLOBAL_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo 'extends' possui algo para ser herdado e caso possua, busque e importe todas as regras e definições especificadas em cada arquivo.

# 2. Color Tokens

Cores fundamentais para serem usadas sempre que encontrar referências em componentes.

```json
{
  "white": "#FFFFFF",
  "deep_blue": "#9DB4B9",
  "cyan": "#13C8EC",
  "black": "#101F22",
  "deep_black": "#0A1315",
  "gray": "#1E2F32"
}
```

# 3. Shape & Spacing Tokens

Regras de geometria e respiro do layout.

```json
{
 "$radius_quark": "4px",
 "$spacing_nano": "8px",
 "$spacing_xxs": "18px",
 "$size_full": "100%",
 "$size_md": "40px"
}
```

# 4. Opacity

```json
{
  "$opacity_50": "50%"
}
```

# 5. Fonts

```json
{
 "font_arial": "Space Grotesk",
 "font_sm": "12px",
 "font_md": "18px"
}
```
