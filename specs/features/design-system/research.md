# Design System

## 1. Visão Geral

Criação de um design system global para o portfólio, extraindo tokens de design (cores, tipografia, espaçamento, estados e dimensões) que serão consumidos pelo código React/Next.js do arquivo `@/portfolio.pen`. 

O artefato final será o arquivo `frontend/src/app/globals.css` do Next.js com todas as variáveis CSS derivadas dos tokens de design.

## 2. Objetivos

- Extrair tokens de cores do design existente em `portfolio.pen`
- Definir tokens de tipografia (fontes, tamanhos, pesos)
- Documentar espaçamentos e dimensões padronizadas
- Documentar tokens de border radius
- Gerar o arquivo `frontend/src/app/globals.css` com variáveis CSS customizadas

## 3. Contexto de Integração com Backend

Não aplicável. Design system é uma biblioteca de componentes e tokens visuais frontend-only.

## 4. Histórias de Usuário

### US-001: Extrair Tokens de Cores do Design

**Descrição:** Como desenvolvedor frontend, eu quero ter tokens de cores extraídos do design para que o código use variáveis CSS em vez de valores hardcoded.

**Tela/Componente afetado:** `frontend/src/app/globals.css`

**Critérios de aceitação:**
- [ ] Modificar arquivo `frontend/src/app/globals.css` existente (já contém Tailwind e estilos globais)
- [ ] Usar o seletor `:root` para definir as variáveis customizadas
- [ ] Incluir todas as 27 variáveis de tokens (font-family carregada via next/font no layout.tsx, não conta como token)
- [ ] Manter compatibilidade com Tailwind CSS v4 existente

## 5. Requisitos Funcionais

- RF-01: Todas as cores usadas no design devem ter tokens correspondentes em CSS
- RF-02: Todos os tamanhos de fonte devem ter tokens correspondentes em CSS
- RF-03: Todos os espaçamentos devem ter tokens correspondentes em CSS
- RF-04: Arquivo `frontend/src/app/globals.css` deve conter todas as variáveis CSS customizadas
- RF-05: Variáveis devem seguir o padrão `--nome-token` no CSS
- RF-06: Documentação deve estar em arquivo único consolidado

## 6. Requisitos Não-Funcionais

- RNF-01: Tokens devem seguir nomenclatura consistente (kebab-case)
- RNF-02: Valores devem ser extraídos diretamente do design (não inventados)
- RNF-03: Documentação deve ser clara para consumo por desenvolvedores
- RNF-04: Arquivo global.css já existe e deve ser modificado (manter @import "tailwindcss")
- RNF-05: Variáveis CSS devem ser definidas no `:root`

## 7. Fora do Escopo

- Não inclui implementação de componentes React individuais
- Não inclui criação de novos componentes de UI (apenas documentar existentes)
- Não inclui integração com ferramentas de design (Figma, etc)
- Não inclui internacionalização ou theming dinâmico
- Não inclui tema claro (dark mode only por enquanto)

## 8. Referências

- Arquivo de design: `@/portfolio.pen`
- Arquivo de saída: `@/frontend/src/app/globals.css`

## 9. Tokens de Design System

### Cores

| Token CSS | Valor | Uso |
|-----------|-------|-----|
| `--color-bg-primary` | `#101828` | Fundo escuro principal |
| `--color-bg-secondary` | `#667085` | Fundo secundário / elementos |
| `--color-accent` | `#7f56d9` | Roxo (destaques, links, CTAs) |
| `--color-text-primary` | `#ffffff` | Texto branco (sobre fundo escuro) |
| `--color-text-secondary` | `#667085` | Texto cinza |
| `--color-text-muted` | `#f9fafb` | Texto muito claro |

### Tipografia

| Token CSS | Valor | Descrição |
|-----------|-------|-----------|
| `--font-family-primary` | Inter, sans-serif | Fonte principal do projeto (carregada via Google Fonts) |
| `--font-size-heading-xl` | 48px | Títulos grandes (Hero) |
| `--font-size-heading` | 20px | Títulos de seções |
| `--font-size-body` | 16px | Texto corpo |
| `--font-size-small` | 12px | Texto pequeno / labels |
| `--font-weight-regular` | 400 | Peso normal |
| `--font-weight-bold` | 700 | Peso negrito |

### Espaçamento

| Token CSS | Valor | Origem no Design |
|-----------|-------|------------------|
| `--spacing-xs` | 12px | gap mínimo encontrado |
| `--spacing-sm` | 14px | padding vertical |
| `--spacing-md` | 16px | padding mais comum |
| `--spacing-lg` | 20px | padding de seções |
| `--spacing-xl` | 32px | gaps maiores |
| `--spacing-xxl` | 131px | padding lateral Hero |

### Dimensões

| Token CSS | Valor | Descrição |
|-----------|-------|-----------|
| `--height-xl` | 80px | Altura grande |
| `--height-md` | 48px | Altura média |
| `--height-sm` | 60px | Altura pequena |
| `--max-width-container` | 700px | Largura máxima de containers |

### Border Radius

| Token CSS | Valor | Uso |
|-----------|-------|-----|
| `--radius-sm` | 4px | Bordas pequenas |
| `--radius-md` | 8px | Botões, inputs |
| `--radius-lg` | 16px | Cards, containers |
| `--radius-full` | 9999px | Círculos |

## 10. Arquivo global.css (Preview)

```css
@import "tailwindcss";

:root {
  --color-bg-primary: #101828;
  --color-bg-secondary: #667085;
  --color-accent: #7f56d9;
  --color-text-primary: #ffffff;
  --color-text-secondary: #667085;
  --color-text-muted: #f9fafb;
  --font-family-primary: "Inter", sans-serif;
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

> **Nota:** O token `--font-family-primary` referencia a fonte Inter que é importada via `next/font/google` no arquivo `src/app/layout.tsx`. A variável CSS apenas aponta para o nome da fonte.

## 11. Métricas de Sucesso

- Todos os tokens visuais do design atual estão documentados
- Arquivo `frontend/src/app/globals.css` contém todas as 27 variáveis CSS
- Nova funcionalidade no design deve usar tokens existentes

## 12. Questões em Aberto

- A fonte Inter deve ser importada via `next/font/google` no arquivo `src/app/layout.tsx` e estar disponível para uso no globals.css

