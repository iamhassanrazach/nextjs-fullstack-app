LAB 1:

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

LAB 2:

Q1: In the page source, are the movie titles present for /movies? For /movies-client? Why?

A: Yes for /movies because it is server-rendered and baked into the HTML. No for /movies-client because it starts as "Loading movies..." and fetches the data via JavaScript in the browser.

Q2: Without the force-dynamic line of Part E, you run npm run build again tomorrow, then npm start, without changing anything else. What does the "Rendered at" timestamp of /movies show, and why?

A: It shows the exact time when the build happened today, because the page is static (○) and prerendered once at build time.

Q3: Part E made every request to /movies about one second slower. Give one situation where force-dynamic is still the right choice, and explain why?

A: When data changes constantly (like real-time stock prices) where showing outdated cached data is unacceptable.

Q4: A classmate sees [movies] rendered 6 movies in the browser console and says: "So this code runs in the browser." What do you answer, and how can you prove it?

A: You answer that it runs on the server, and you can prove it by checking view-source: or disabling JavaScript in DevTools, the movie titles are still fully present in the HTML sent by the server.

Q5: Which version would you choose for a public movie catalogue that changes once a week, and why?

A: The static version, because it loads instantly for users and doesn't waste server resources rendering the exact same page on every single request.