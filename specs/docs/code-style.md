## Code Style & Conventions

### TypeScript

- **Strict mode is always on.** Never use `any`; prefer `unknown` when type is truly unknown.
- Prefer `interface` for object shapes; use `type` for unions, intersections, and aliases.
- All exported functions and components must have explicit return types.
- Use `satisfies` operator to validate literals against types without widening.

```ts
// ✅ Good
interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
}

// ❌ Bad
const data: any = fetchData()
```

### React & Next.js

- **Default to React Server Components (RSC).** Only add `'use client'` when strictly necessary (interactivity, browser APIs, hooks).
- Co-locate component logic: the component file, its test, and its types should live together when the component is complex.
- No default exports for utilities or hooks — named exports only. Default exports are allowed for page/layout files (Next.js requirement).
- Data fetching belongs in Server Components or `server actions`, never in `useEffect`.
- Use `next/image` for all images. Always provide `alt`, `width`, `height` (or `fill`).
- Use `next/font` for all custom fonts to avoid layout shifts.

### Styling

- Use Tailwind utility classes exclusively. **Do not write custom CSS** unless it's a CSS custom property (design token) in `globals.css`.
- Class names follow the order: layout → box model → typography → visual → interactive → responsive → dark mode.
- Use the `cn()` utility (clsx + tailwind-merge) for conditional classes.
- Dark mode is implemented via the `dark:` variant and a `data-theme` attribute on `<html>`.

```tsx
// ✅ Good
<button className={cn(
  'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg',
  'bg-primary text-primary-foreground hover:bg-primary/90',
  'transition-colors duration-200',
  isLoading && 'opacity-50 cursor-not-allowed',
  className
)}>
```

### Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProjectCard.tsx` |
| Hooks | camelCase prefixed with `use` | `useScrollPosition.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE_CASE | `SITE_CONFIG` |
| CSS variables | kebab-case | `--color-primary` |
| Test files | `*.test.tsx` or `*.spec.tsx` | `ProjectCard.test.tsx` |

### Formatting

- **Single quotes** for strings in TypeScript/TSX.
- **No semicolons** (Prettier handles this).
- **2-space indentation.**
- Maximum line length: 100 characters.
- Trailing commas: `all` (ES5+).

## Component Guidelines

### Creating a New UI Component

1. Place it in `src/components/ui/` (primitive) or `src/components/sections/` (page section).
2. Accept a `className` prop and merge it with `cn()`.
3. Forward `ref` when wrapping native HTML elements.
4. Export a TypeScript interface for props named `<ComponentName>Props`.
5. Write at least one unit test covering render and key interactions.

```tsx
// src/components/ui/Badge.tsx
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline'
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-primary/10 text-primary',
        variant === 'secondary' && 'bg-muted text-muted-foreground',
        variant === 'outline' && 'border border-border text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
```

### Animations

- Use Framer Motion `variants` for reusable animation configs.
- Keep animations subtle and purposeful — no gratuitous motion.
- Always respect `prefers-reduced-motion` via the `useReducedMotion()` hook or `motion` safe media query.
- Entry animations should use `viewport` prop (trigger on scroll) instead of mounting.

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
```

---

## Performance Rules

- **No layout shifts.** Reserve space for images with `width`/`height` or `aspect-ratio`.
- **No unused JavaScript.** Every `'use client'` component increases the client bundle — question every addition.
- **Lazy load** non-critical sections using `next/dynamic` with `ssr: false` only when truly client-only.
- **Self-host fonts** — never load from Google Fonts CDN directly; use `next/font/google` which self-hosts at build time.
- **Use `loading="lazy"`** on below-the-fold images (Next.js does this automatically for non-priority images).
- Set `priority` on the hero/LCP image only.
- Avoid large third-party scripts. If needed, load with `next/script` using `strategy="lazyOnload"`.

---

## Accessibility Rules

- All interactive elements must be keyboard-navigable and have visible focus styles.
- Every `<img>` must have a meaningful `alt` (or `alt=""` for decorative images).
- Color contrast ratio must be ≥ 4.5:1 for normal text, ≥ 3:1 for large text.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`–`<h6>` in proper hierarchy.
- Forms must have associated `<label>` elements or `aria-label`.
- Animations must respect `prefers-reduced-motion`.
- Run `pnpm lint` — the ESLint JSX a11y plugin enforces many of these automatically.

---

## SEO Guidelines

- Every page must export a `generateMetadata()` function using the factory in `src/lib/metadata.ts`.
- Include OpenGraph and Twitter card metadata on all pages.
- Use structured data (JSON-LD) for the homepage (Person schema) and blog posts (Article schema).
- Canonical URLs must be set on all pages.
- `robots.txt` and `sitemap.xml` are auto-generated via `next-sitemap` — update config if adding new routes.

---

## Testing Instructions

```bash
# Run all unit tests
pnpm test

# Run a specific test file
pnpm vitest run src/components/ui/Badge.test.tsx

# Run tests matching a pattern
pnpm vitest run -t "renders correctly"

# E2E: start dev server first, then
pnpm test:e2e

# E2E: run a specific spec
pnpm playwright test tests/e2e/contact.spec.ts
```

### Testing Standards

- **Unit tests:** Cover all UI components (render, props, interactions) and utility functions.
- **Integration tests:** Cover form submissions, navigation, and data display.
- **E2E tests:** Cover critical user journeys: homepage load, contact form submission, blog navigation.
- Aim for ≥ 80% coverage on `src/components/ui` and `src/lib`.
- **Never** skip tests or use `test.only` in committed code.
- Prefer `getByRole` and `getByLabelText` over `getByTestId` — test behavior, not implementation.

## Common Pitfalls to Avoid

- **Do not** use `export default` for components in `src/components/ui/` — use named exports.
- **Do not** put data fetching inside Client Components; fetch in the nearest Server Component and pass data as props.
- **Do not** import from `react` for types; use `import type { FC } from 'react'`.
- **Do not** use `px` units in Tailwind custom values — use the default spacing scale (multiples of 4).
- **Do not** add `!important` to Tailwind classes; use `cn()` with tailwind-merge instead.
- **Do not** create new CSS files; extend the design system via `tailwind.config.ts`.
- **Do not** use `useEffect` for data fetching — this is a Next.js App Router project.