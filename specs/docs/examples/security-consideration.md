## Security Considerations

- Never commit API keys, tokens, or secrets. Use `.env.local` and Vercel env variables.
- The contact form uses server actions with Zod validation and Resend — rate limiting is enforced at the Vercel edge.
- `Content-Security-Policy` and other security headers are configured in `next.config.ts`.
- Keep dependencies up to date — run `pnpm audit` regularly and address high/critical vulnerabilities promptly.
- Do not add `dangerouslySetInnerHTML` without explicit sanitization (DOMPurify).