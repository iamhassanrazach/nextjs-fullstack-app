1. In which file are the `<html>` and `<body>` tags?
In app/layout.tsx
2. Which file renders the page at `/`?
app/page.tsx
3. Which folder is for images and other static files, and how do you reference them?
The `public/` folder and you access them right from the root URL.
4. What is `tsconfig.json` doing in your project?
It handles the TypeScript compiler settings and path aliases.
5. What does `@/*` mean in `tsconfig.json`? Write an import that uses it.
It is a path alias pointing straight to the root folder. Example: `import { getMovies } from "@/lib/movies";`.
6. What does `app/layout.tsx` import from `next/font/google`, and what does Next.js do with it at build time?
It imports Google fonts, and Next.js self-hosts them automatically at build time.
7. What’s the difference between `layout.tsx` and `page.tsx`?
`layout.tsx` wraps around everything and stays persistent, while `page.tsx` is just the specific page content.
8. Where would you put a navbar that appears on every page?
In `app/layout.tsx`.
9. What is `globals.css` for, and where is it imported?
It handles global styles (plus Tailwind) and gets imported in `app/layout.tsx`.
10. What is `AGENTS.md`, and does your app need it to run?
It's just a guide file for AI coding agents; the app doesn't need it to actually run.