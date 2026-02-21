---
dependencies: []
created_at: "18-02-2026:10:00"
updated_at: "21-02-2026:08:00"
file_name: design-tokens.md
version: "1.1"
extends: ["GLOBAL_RULES_ID"]
id: "DESIGN_TOKENS_ID"
---

# 1. Diretrizes de Uso

- **Geral**: verifique se o atributo `extends` possui valores, e caso possua, busque todos os arquivos pelos `_ID` registrados e importe todas as regras e definições especificadas neste arquivo.
- **Nomenclatura**: as chaves seguem o padrão `--tipo-valor` do Tailwind CSS, onde os números de espaçamento representam o valor em pixels multiplicado por 4, e o comentário ao lado de cada um deles é o equivalente em rem.

# 2. Color Tokens

Cores fundamentais.

```json
{
  "--color-transparent": "transparent",
  "--color-white": "#ffffff",
  "--color-black": "#000000",
  "--color-gray-50": "#f9fafb",
  "--color-gray-500": "#667085",
  "--color-gray-900": "#101828",
  "--color-primary-500": "#9e77ed",
  "--color-primary-600": "#7f56d9",
  "--color-gradient-primary": "linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%)"
}

```

# 3. Shape & Spacing Tokens

Regras de geometria e respiro.

```json
{
  "--radius-md": "6px", // 0.375rem
  "--radius-lg": "8px", // 0.5rem
  "--radius-full": "100%",

  "--spacing-1": "4px",   // 0.25rem 
  "--spacing-2": "8px",   // 0.5rem  
  "--spacing-3": "12px",  // 0.75rem 
  "--spacing-4": "16px",  // 1rem   
  "--spacing-5": "20px",  // 1.25rem 
  "--spacing-6": "24px",  // 1.5rem  
  "--spacing-8": "32px",  // 2rem   
  "--spacing-10": "40px", // 2.5rem 
  "--spacing-12": "48px", // 3rem   
  "--spacing-16": "64px", // 4rem    
  "--spacing-20": "80px", // 5rem   
  "--spacing-24": "96px", // 6rem   
  "--spacing-32": "128px", // 8rem   
  "--spacing-40": "160px", // 10rem  
  "--spacing-48": "192px", // 12rem  
  "--spacing-56": "224px", // 14rem 
  "--spacing-64": "256px"  // 16rem 
}

```

# 4. Opacity

```json
{
  "--opacity-50": "0.5"
}

```

# 5. Fonts

Tipografia e pesos de fonte.

```json
{
  "--font-inter": "Inter",
   
  "--font-weight-semibold": "600",
  "--font-weight-medium": "500",
  "--font-weight-regular": "400",

  "--text-sm": "14px", // 0.875rem
  "--text-base": "16px", // 1rem
  "--text-xl": "20px", // 1.25rem
  "--text-5xl": "48px", // 3rem
  
  "--leading-sm": "20px", // 1.25rem
  "--leading-base": "24px", // 1.5rem
  "--leading-xl": "28px", // 1.75rem
  "--leading-5xl": "48px" // 3rem
}

```

# 6. Breakpoints

Pontos de interrupção para design responsivo.

```json
{
  "--breakpoint-sm": "640px", // 40rem
  "--breakpoint-md": "768px", // 48rem
  "--breakpoint-lg": "1024px", // 64rem
  "--breakpoint-xl": "1280px" // 80rem
}
```

# 7. Sizes

```json
{
  "--s-full": "100%",
  "--s-8": "32px",  // 2rem   
  "--s-12": "48px", // 3rem  
  "--s-17": "72px", // 4.5rem
  "--s-24": "96px", // 6rem 
}
```