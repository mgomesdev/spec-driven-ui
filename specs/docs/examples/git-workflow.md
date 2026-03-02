## Git Workflow

### Branch Naming

```
feat/<short-description>     # New feature
fix/<short-description>      # Bug fix
chore/<short-description>    # Maintenance, deps, config
content/<short-description>  # Blog post or project content update
perf/<short-description>     # Performance improvement
a11y/<short-description>     # Accessibility fix
```

### Commit Messages (Conventional Commits)

```
feat: add dark mode toggle with system preference detection
fix: correct contrast ratio on secondary button hover state
perf: lazy load project section images below the fold
a11y: add aria-label to social icon links in footer
content: add case study for e-commerce redesign project
chore: update Next.js to 14.2.x
```

### PR Checklist (complete before requesting review)

- [ ] `pnpm typecheck` passes with zero errors
- [ ] `pnpm lint` passes with zero warnings
- [ ] `pnpm test` passes (all green)
- [ ] `pnpm build` completes without errors
- [ ] New components have unit tests
- [ ] No `console.log` left in code
- [ ] No hardcoded colors — use design tokens / Tailwind theme
- [ ] Accessibility validated (keyboard nav, color contrast, alt texts)
- [ ] Responsive layout tested at 375px, 768px, 1280px, 1440px