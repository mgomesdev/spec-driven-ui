## Deployment

- **Production:** Vercel (auto-deploy on merge to `main`)
- **Preview:** Every PR gets an automatic Vercel preview URL
- **Build command:** `pnpm build`
- **Output directory:** `.next` (handled by Vercel automatically)

Do **not** merge to `main` if the Vercel preview build fails or Lighthouse CI checks fail.