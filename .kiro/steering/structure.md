# Project Structure

## Root
```
/
├── src/                  # All application source code
├── public/               # Static assets (images, SVGs)
├── types/index.ts        # Shared TypeScript types (e.g. Blog)
├── next.config.ts        # Next.js config (static export, image settings)
├── components.json       # shadcn/ui config
└── out/                  # Static build output (generated, not committed)
```

## Source Layout
```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout — Header, Footer, fonts, dark mode
│   ├── page.tsx          # Home page
│   ├── globals.css       # Tailwind imports + CSS variable theme tokens
│   ├── about/
│   ├── contact/
│   ├── industries/
│   ├── rag/
│   ├── document-suite/
│   ├── marketing-assist/
│   └── computer-vision/
├── components/
│   ├── ui/               # shadcn/ui primitives (button, card, input, etc.)
│   ├── single-blog/      # Blog post sub-components (article, insight, story)
│   └── *.tsx             # Shared page-level components
└── data/
    ├── api/index.ts      # All fetch functions (WordPress API + Firebase)
    └── services/         # Static service content as typed TS objects
```

## Key Conventions

**Pages** live in `src/app/{route}/page.tsx`. Each page is a server component by default. Use `"use client"` only when interactivity or hooks are required.

**Components** are in `src/components/`. UI primitives from shadcn go in `src/components/ui/`. Shared layout or section components sit directly in `src/components/`.

**Data fetching** is done in server components using native `fetch`. All API functions are exported from `src/data/api/index.ts`. Static/hardcoded content (service descriptions, feature lists) lives in `src/data/services/`.

**Types** shared across the app are defined in `types/index.ts` at the project root and imported as `from "../../../types"` or relative paths — there is no `@/types` alias.

**Styling** uses Tailwind utility classes directly. No CSS modules. Component variants use CVA. Conditional classes use `clsx` + `tailwind-merge` (via a `cn()` utility in `src/lib/utils.ts`).

**Page-level data** (feature lists, pointers, CTAs) is often defined inline in the page file rather than in a separate data file, unless it's reused across pages.

**Route-specific sub-components** that are only used within a single page are co-located in a `(components)/` folder inside that route directory (e.g. `src/app/about/(components)/`).
