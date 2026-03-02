# AGENTS.md

> **Como usar este arquivo:**
> Este AGENTS.md usa slots reservados (`<!-- SLOT: NOME -->`…`<!-- /SLOT: NOME -->`).
> Preencha cada slot conforme o projeto evolui — não invente valores, só registre o que foi
> efetivamente decidido ou implementado. Slots vazios são ignorados pelos agentes.
> Nunca remova um slot; deixe-o vazio se o item ainda não se aplica.

---

## 🏗️ Projeto & Contexto

<!-- SLOT: PROJECT_OVERVIEW -->
<!-- Preencher quando: propósito, público-alvo e objetivo do site forem definidos -->
<!-- Exemplo: Portfólio pessoal de desenvolvedor frontend sênior. Objetivo: atrair recrutadores e clientes freelance. Público: tech leads, CTOs, recrutadores de produto. -->
<!-- /SLOT: PROJECT_OVERVIEW -->

<!-- SLOT: LIVE_URL -->
<!-- Preencher quando: primeiro deploy for realizado -->
<!-- Exemplo: https://yourname.dev -->
<!-- /SLOT: LIVE_URL -->

<!-- SLOT: DESIGN_REFERENCE -->
<!-- Preencher quando: Figma, referência visual ou style guide for linkado -->
<!-- Exemplo: Figma: https://figma.com/file/... | Referência: https://... -->
<!-- /SLOT: DESIGN_REFERENCE -->

---

## ⚙️ Stack & Dependências

<!-- SLOT: FRAMEWORK -->
<!-- Preencher quando: framework principal for escolhido e instalado -->
<!-- Exemplo: Next.js 14 com App Router e React Server Components -->
<!-- /SLOT: FRAMEWORK -->

<!-- SLOT: STYLING_SOLUTION -->
<!-- Preencher quando: solução de CSS for decidida -->
<!-- Exemplo: Tailwind CSS 3.4 com design tokens em tailwind.config.ts -->
<!-- /SLOT: STYLING_SOLUTION -->

<!-- SLOT: ANIMATION_LIB -->
<!-- Preencher quando: lib de animação for adicionada ao projeto -->
<!-- Exemplo: Framer Motion 11 — usar variants e respeitar prefers-reduced-motion -->
<!-- /SLOT: ANIMATION_LIB -->

<!-- SLOT: FORM_AND_VALIDATION -->
<!-- Preencher quando: formulário for implementado no projeto -->
<!-- Exemplo: React Hook Form + Zod para validação de schema -->
<!-- /SLOT: FORM_AND_VALIDATION -->

<!-- SLOT: EMAIL_PROVIDER -->
<!-- Preencher quando: envio de e-mail (formulário de contato) for configurado -->
<!-- Exemplo: Resend via server action em /app/api/contact/route.ts -->
<!-- /SLOT: EMAIL_PROVIDER -->

<!-- SLOT: ANALYTICS -->
<!-- Preencher quando: rastreamento/analytics for configurado -->
<!-- Exemplo: Umami (self-hosted) via NEXT_PUBLIC_UMAMI_WEBSITE_ID -->
<!-- /SLOT: ANALYTICS -->

<!-- SLOT: PACKAGE_MANAGER -->
<!-- Preencher quando: package manager for confirmado pelo lockfile presente -->
<!-- Exemplo: pnpm 9+ (pnpm-lock.yaml presente) -->
<!-- /SLOT: PACKAGE_MANAGER -->

---

## 🖥️ Comandos

<!-- SLOT: COMMANDS_DEV -->
<!-- Preencher quando: script dev for confirmado e funcionando -->
<!-- Exemplo: `pnpm dev` → http://localhost:3000 -->
<!-- /SLOT: COMMANDS_DEV -->

<!-- SLOT: COMMANDS_BUILD -->
<!-- Preencher quando: build rodar com sucesso pela primeira vez -->
<!-- Exemplo: `pnpm build` seguido de `pnpm start` para preview local -->
<!-- /SLOT: COMMANDS_BUILD -->

<!-- SLOT: COMMANDS_TEST -->
<!-- Preencher quando: suite de testes for configurada -->
<!-- Exemplo: `pnpm test` (unit) | `pnpm test:e2e` (Playwright, requer server rodando) -->
<!-- /SLOT: COMMANDS_TEST -->

<!-- SLOT: COMMANDS_LINT -->
<!-- Preencher quando: ESLint e/ou Prettier forem configurados -->
<!-- Exemplo: `pnpm lint` | `pnpm lint:fix` | `pnpm format` -->
<!-- /SLOT: COMMANDS_LINT -->

<!-- SLOT: COMMANDS_EXTRA -->
<!-- Preencher quando: scripts auxiliares forem descobertos ou adicionados -->
<!-- Exemplo: `pnpm typecheck` (tsc --noEmit) | `pnpm analyze` (bundle analyzer) -->
<!-- /SLOT: COMMANDS_EXTRA -->

---

## 📁 Estrutura

<!-- SLOT: DIR_STRUCTURE -->
<!-- Preencher quando: estrutura de pastas for criada e estabilizada -->
<!-- Exemplo:
src/
  app/          # Páginas e layouts (App Router)
  components/
    ui/         # Componentes primitivos reutilizáveis
    sections/   # Seções da página (Hero, About, Projects…)
  lib/          # Utilitários e helpers
  hooks/        # Custom hooks
  content/      # Dados de projetos e posts (MDX / TS)
  types/        # Tipos e interfaces globais
-->
<!-- /SLOT: DIR_STRUCTURE -->

<!-- SLOT: CONTENT_STRATEGY -->
<!-- Preencher quando: a origem e formato do conteúdo for definido -->
<!-- Exemplo: Projetos em src/content/projects.ts (array TypeScript). Blog em MDX com frontmatter. Sem CMS externo. -->
<!-- /SLOT: CONTENT_STRATEGY -->

---

## 🎨 Código & Convenções

<!-- SLOT: TYPESCRIPT_RULES -->
<!-- Preencher quando: TypeScript for adotado com flags relevantes confirmadas no tsconfig -->
<!-- Exemplo: strict: true | noUncheckedIndexedAccess: true | sem uso de `any` — usar `unknown` -->
<!-- /SLOT: TYPESCRIPT_RULES -->

<!-- SLOT: NAMING_CONVENTIONS -->
<!-- Preencher quando: padrões de nomenclatura forem estabelecidos e acordados -->
<!-- Exemplo: Componentes PascalCase | hooks camelCase prefixado com `use` | constantes SCREAMING_SNAKE_CASE -->
<!-- /SLOT: NAMING_CONVENTIONS -->

<!-- SLOT: COMPONENT_PATTERNS -->
<!-- Preencher quando: padrão de componentes for definido para o projeto -->
<!-- Exemplo: Default para RSC. `'use client'` só quando necessário. Named exports em ui/. Default exports só em pages/layouts. -->
<!-- /SLOT: COMPONENT_PATTERNS -->

<!-- SLOT: STYLING_CONVENTIONS -->
<!-- Preencher quando: regras de uso do CSS/Tailwind/etc. forem definidas -->
<!-- Exemplo: Só utilitários Tailwind. Sem CSS custom exceto tokens em globals.css. Usar cn() para classes condicionais. -->
<!-- /SLOT: STYLING_CONVENTIONS -->

<!-- SLOT: ANIMATION_RULES -->
<!-- Preencher quando: animações forem usadas no projeto -->
<!-- Exemplo: Sempre verificar useReducedMotion(). Duração máxima 500ms. Usar variants reutilizáveis em lib/animations.ts. -->
<!-- /SLOT: ANIMATION_RULES -->

---

## ♿ Qualidade

<!-- SLOT: PERFORMANCE_TARGETS -->
<!-- Preencher quando: metas de Lighthouse / Core Web Vitals forem definidas -->
<!-- Exemplo: Performance ≥ 95 | Accessibility 100 | LCP < 2.5s | CLS < 0.1 -->
<!-- /SLOT: PERFORMANCE_TARGETS -->

<!-- SLOT: A11Y_REQUIREMENTS -->
<!-- Preencher quando: nível de acessibilidade alvo for definido -->
<!-- Exemplo: WCAG 2.1 AA. Contraste ≥ 4.5:1. Navegação por teclado obrigatória. Plugin eslint-plugin-jsx-a11y ativo. -->
<!-- /SLOT: A11Y_REQUIREMENTS -->

<!-- SLOT: SEO_REQUIREMENTS -->
<!-- Preencher quando: metadados, OG e/ou sitemap forem implementados -->
<!-- Exemplo: generateMetadata() em todas as pages. OG image via /api/og. Sitemap via next-sitemap. JSON-LD na home (Person). -->
<!-- /SLOT: SEO_REQUIREMENTS -->

---

## 🧪 Testes

<!-- SLOT: TEST_STACK -->
<!-- Preencher quando: framework de testes for escolhido e instalado -->
<!-- Exemplo: Vitest + React Testing Library (unit/integration) | Playwright (E2E) -->
<!-- /SLOT: TEST_STACK -->

<!-- SLOT: TEST_CONVENTIONS -->
<!-- Preencher quando: regras de cobertura e padrões de teste forem definidos -->
<!-- Exemplo: Preferir getByRole sobre getByTestId. Cobertura ≥ 80% em components/ui e lib/. Sem test.only em commits. -->
<!-- /SLOT: TEST_CONVENTIONS -->

<!-- SLOT: E2E_FLOWS -->
<!-- Preencher quando: fluxos críticos para testes E2E forem identificados -->
<!-- Exemplo: Load da homepage | Envio do formulário de contato | Navegação para página de projeto -->
<!-- /SLOT: E2E_FLOWS -->

---

## 🔀 Git & Deploy

<!-- SLOT: BRANCH_STRATEGY -->
<!-- Preencher quando: convenção de branches for decidida -->
<!-- Exemplo: feat/* | fix/* | chore/* | content/* | perf/* | a11y/* -->
<!-- /SLOT: BRANCH_STRATEGY -->

<!-- SLOT: COMMIT_CONVENTION -->
<!-- Preencher quando: padrão de commits for adotado -->
<!-- Exemplo: Conventional Commits — feat: | fix: | chore: | content: | perf: | a11y: -->
<!-- /SLOT: COMMIT_CONVENTION -->

<!-- SLOT: PR_CHECKLIST -->
<!-- Preencher quando: gates de qualidade obrigatórios forem definidos -->
<!-- Exemplo: typecheck ✓ | lint ✓ | test ✓ | build ✓ | sem console.log | responsividade testada -->
<!-- /SLOT: PR_CHECKLIST -->

<!-- SLOT: DEPLOY_PLATFORM -->
<!-- Preencher quando: plataforma e pipeline de deploy forem configurados -->
<!-- Exemplo: Vercel. Auto-deploy em merge para main. Preview URL por PR via GitHub Actions. -->
<!-- /SLOT: DEPLOY_PLATFORM -->

<!-- SLOT: ENV_VARS -->
<!-- Preencher quando: variáveis de ambiente forem adicionadas ao .env.example -->
<!-- Exemplo:
NEXT_PUBLIC_SITE_URL   # URL canônica do site
RESEND_API_KEY         # Chave da API de e-mail
-->
<!-- /SLOT: ENV_VARS -->

---

## 🔒 Segurança

<!-- SLOT: SECURITY_NOTES -->
<!-- Preencher quando: headers, rate limit, sanitização ou outras medidas forem implementadas -->
<!-- Exemplo: CSP configurado em next.config.ts. Rate limit no endpoint de contato via Vercel Edge. Sem dangerouslySetInnerHTML sem DOMPurify. -->
<!-- /SLOT: SECURITY_NOTES -->

---

## ⚠️ Pitfalls

<!-- SLOT: PITFALLS -->
<!-- Preencher progressivamente quando padrões problemáticos específicos deste projeto forem identificados -->
<!-- Exemplo:
- Não usar `export default` em components/ui — somente named exports
- Não fazer fetch dentro de Client Components — buscar no Server Component pai
- Não adicionar `!important` nas classes Tailwind — usar cn() com tailwind-merge
-->
<!-- /SLOT: PITFALLS -->