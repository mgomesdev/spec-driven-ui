# Plan: Design System

> Gerado a partir de: `specs/features/design-system/research.md`
> Foco: Frontend - Tokens de Design System

## 1. Visão Geral Técnica

Criação de um design system global através de tokens extraídos do arquivo `@/portfolio.pen`. O resultado será a adição de variáveis CSS customizadas no arquivo `frontend/src/app/globals.css` existente, mantendo compatibilidade com Tailwind CSS v4. Os tokens cobrem: cores, tipografia, espaçamento, dimensões e border radius.

---

## 2. Estrutura de Arquivos

Arquivos que serão **modificados**:

```
frontend/
├── src/
│   └── app/
│       └── globals.css          # modificado - adiciona variáveis CSS customizadas
```

---

## 3. Artefatos Criados/Modificados

### 3.1 globals.css (modificado)

**Arquivo:** `frontend/src/app/globals.css`

**Propósito:** Adicionar tokens de design system como variáveis CSS customizadas

**Alteração:** Adicionar bloco `:root` com todas as variáveis CSS extraídas do design

---

## 4. Contrato de Tokens CSS

Todos os tokens documentados no research serão convertidos em variáveis CSS:

### 4.1 Cores

| Token CSS | Valor | Tipo |
|-----------|-------|------|
| `--color-bg-primary` | `#101828` | string (hex) |
| `--color-bg-secondary` | `#667085` | string (hex) |
| `--color-accent` | `#7f56d9` | string (hex) |
| `--color-text-primary` | `#ffffff` | string (hex) |
| `--color-text-secondary` | `#667085` | string (hex) |
| `--color-text-muted` | `#f9fafb` | string (hex) |

### 4.2 Tipografia

| Token CSS | Valor | Tipo |
|-----------|-------|------|
| `--font-family-primary` | "Inter", sans-serif | string |
| `--font-size-heading-xl` | 48px | string |
| `--font-size-heading` | 20px | string |
| `--font-size-body` | 16px | string |
| `--font-size-small` | 12px | string |
| `--font-weight-regular` | 400 | number |
| `--font-weight-bold` | 700 | number |

### 4.3 Espaçamento

| Token CSS | Valor | Tipo |
|-----------|-------|------|
| `--spacing-xs` | 12px | string |
| `--spacing-sm` | 14px | string |
| `--spacing-md` | 16px | string |
| `--spacing-lg` | 20px | string |
| `--spacing-xl` | 32px | string |
| `--spacing-xxl` | 131px | string |

### 4.4 Dimensões

| Token CSS | Valor | Tipo |
|-----------|-------|------|
| `--height-xl` | 80px | string |
| `--height-md` | 48px | string |
| `--height-sm` | 60px | string |
| `--max-width-container` | 700px | string |

### 4.5 Border Radius

| Token CSS | Valor | Tipo |
|-----------|-------|------|
| `--radius-sm` | 4px | string |
| `--radius-md` | 8px | string |
| `--radius-lg` | 16px | string |
| `--radius-full` | 9999px | string |

---

## 5. Detalhamento da Modificação

### globals.css

**Antes:**
```css
@import "tailwindcss";

html {
   scroll-behavior: smooth;
}
```

**Depois:**
```css
@import "tailwindcss";

:root {
  --color-bg-primary: #101828;
  --color-bg-secondary: #667085;
  --color-accent: #7f56d9;
  --color-text-primary: #ffffff;
  --color-text-secondary: #667085;
  --color-text-muted: #f9fafb;
  --font-family-primary: 'Inter', sans-serif;
  --font-size-heading-xl: 48px;
  --font-size-heading: 20px;
  --font-size-body: 16px;
  --font-size-small: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --spacing-xs: 12px;
  --spacing-sm: 14px;
  --spacing-md: 16px;
  --spacing-lg: 20px;
  --spacing-xl: 32px;
  --spacing-xxl: 131px;
  --height-xl: 80px;
  --height-md: 48px;
  --height-sm: 60px;
  --max-width-container: 700px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}

html {
   scroll-behavior: smooth;
}
```

---

## 6. Dependências e Ordem de Implementação

```
[globals.css existente]
        │
        ▼
[globals.css modificado com tokens]
```

Ordem de implementação:
1. Ler o arquivo `frontend/src/app/globals.css` existente
2. Adicionar bloco `:root` com todas as variáveis CSS
3. Manter o conteúdo existente (Tailwind e estilos globais)

---

## 7. Requisitos Funcionais Mapeados

| RF | Descrição | Artefato |
|----|-----------|----------|
| RF-01 | Todas as cores devem ter tokens em CSS | globals.css (variables) |
| RF-02 | Todos os tamanhos de fonte devem ter tokens | globals.css (variables) |
| RF-03 | Todos os espaçamentos devem ter tokens | globals.css (variables) |
| RF-04 | global.css deve conter todas as variáveis | globals.css (modificado) |
| RF-05 | Variáveis seguem padrão --nome-token | globals.css |
| RF-06 | Documentação consolidada no research | research.md |

---

## 8. Questões em Aberto


## 9. Decisões Técnicas

- **Fonte:** Inter carregada via Google Fonts `next/font/google` no arquivo `src/app/layout.tsx`
- **Tema:** Apenas dark mode (sem tema claro)
- **Sombras:** Não incluídas agora - adicionar quando necessário
