## Environment Variables

All secrets live in `.env.local` (never committed). See `.env.example` for the full list.

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://yourname.dev
RESEND_API_KEY=re_...

# Optional / Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
NEXT_PUBLIC_UMAMI_WEBSITE_ID=...
```

When adding a new env variable:
1. Add it to `.env.example` with a placeholder value and a comment explaining its purpose.
2. Add it to the Vercel project settings.
3. If it's exposed to the client, prefix with `NEXT_PUBLIC_`.