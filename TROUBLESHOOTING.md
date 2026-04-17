# Troubleshooting

## `npm run dev` fails with Vite/rolldown native binding on Windows

If you see errors like:
- `Vite requires Node.js version 20.19+ or 22.12+`
- `Cannot find native binding`
- `Cannot find module '@rolldown/binding-win32-x64-msvc'`

Use this recovery sequence:

1. Ensure Node is 20.12+ for this project (pinned to Vite 5):

```powershell
node -v
npm -v
```

2. Remove old install artifacts and reinstall with optional deps enabled:

```powershell
npm run reinstall:clean
```

3. Start dev server again:

```powershell
npm run dev
```

### Why this happens

- npm may skip optional native packages in some environments.
- stale `node_modules` or lockfile can keep a broken tree.
- this project pins Vite 5 to avoid newer engine constraints.
