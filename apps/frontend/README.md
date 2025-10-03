# Configuracion inicial

```bash
pnpm --filter frontend add tailwindcss
pnpm --filter frontend add -D @types/node
pnpm --filter frontend add @tailwindcss/vite
# https://ui.shadcn.com/docs/installation/vite
# config paths
pnpm --filter frontend add -D @shadcn/ui
pnpm --filter frontend exec pnpm dlx shadcn@latest init
pnpm --filter frontend exec pnpm dlx shadcn@latest add dashboard-01

pnpm --filter frontend add react-router
pnpm --filter add frontend next-themes
pnpm --filter frontend add axios
pnpm --filter frontend add @tanstack/react-query

pnpm --filter frontend exec pnpm dlx shadcn@latest add textarea
```

# Dependencias

```bash
pnpm --filter frontend add three
pnpm --filter frontend add -D @types/three
pnpm --filter frontend add camera-controls
pnpm --filter frontend add @dimforge/rapier3d
pnpm --filter frontend add -D vite-plugin-wasm
pnpm --filter frontend add stats.js
pnpm --filter frontend add -D @types/stats.js
pnpm --filter frontend add lil-gui

```

# Componentes

```bash
pnpm --filter frontend exec pnpm dlx shadcn@latest add resizable
pnpm --filter frontend exec pnpm dlx shadcn@latest add scroll-area
```
