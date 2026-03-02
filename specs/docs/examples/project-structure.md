## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx            # Home page (single-page sections)
│   │   ├── blog/               # Blog section (MDX)
│   │   ├── projects/           # Projects detail pages
│   │   └── api/                # API routes (contact form, OG images)
│   ├── components/
│   │   ├── ui/                 # Primitive/dumb components (Button, Card, Badge…)
│   │   ├── sections/           # Page sections (Hero, About, Projects, Contact…)
│   │   └── layout/             # Header, Footer, Navigation
│   ├── lib/
│   │   ├── utils.ts            # cn() helper and shared utilities
│   │   ├── metadata.ts         # SEO metadata factory
│   │   └── validations.ts      # Zod schemas
│   ├── hooks/                  # Custom React hooks
│   ├── content/                # MDX blog posts and project data (TypeScript/JSON)
│   ├── styles/
│   │   └── globals.css         # Tailwind directives + CSS custom properties
│   └── types/                  # Shared TypeScript types/interfaces
├── public/
│   ├── fonts/                  # Self-hosted fonts (woff2)
│   ├── images/                 # Optimized static images
│   └── og/                     # OG image templates
├── tests/
│   ├── unit/                   # Vitest unit tests
│   └── e2e/                    # Playwright E2E tests
├── .github/workflows/          # CI pipelines
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.ts
```