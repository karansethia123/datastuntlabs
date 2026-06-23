# Tech Stack

## Framework & Runtime
- **Next.js 15** (App Router, static export via `output: "export"`)
- **React 19**
- **TypeScript 5**

## Styling
- **Tailwind CSS v4** with `@import "tailwindcss"` syntax (no `tailwind.config.js`)
- **tw-animate-css** for animation utilities
- CSS variables for theming via `globals.css` — both light and dark tokens defined using `oklch()`
- App is always in **dark mode** (`className="dark"` on `<body>`)
- Two fonts: `Montserrat` (`--font-montserrat`, used for headers) and `Poppins` (`--font-poppins`, used for content)

## UI Components
- **shadcn/ui** (style: `new-york`, base color: `neutral`) — components live in `src/components/ui/`
- **Radix UI** primitives (accordion, dialog, dropdown-menu, label, separator, slot)
- **Lucide React** for icons (default icon library per shadcn config)
- **@tabler/icons-react** also available

## Animation
- **Motion** (`motion/react`) for scroll-triggered and staggered animations

## Forms & Validation
- **react-hook-form** with **zod** schemas and **@hookform/resolvers**

## HTTP
- **axios** available, but native `fetch` is used for all current API calls

## Notifications
- **sonner** for toast notifications

## Utilities
- `clsx` + `tailwind-merge` for conditional class merging
- `class-variance-authority` (CVA) for variant-based component styling

## Images
- `next/image` with `unoptimized: true` (required for static export)
- Remote images allowed from any HTTPS hostname

## Common Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Static export build (outputs to /out)
npm run start    # Serve production build
npm run lint     # ESLint
```

## Deployment
- Configured for **static export** (`output: "export"`). The `/out` directory is the deployable artifact. No server-side rendering or API routes.
