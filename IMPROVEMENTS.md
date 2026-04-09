# Possible improvements — CozyCup Café

Ideas you can pick from over time. None of these are required for the site to work today.

## Accessibility & quality

- Add **skip link** (`<a href="#main">Skip to content</a>`) on every page, with `id="main"` on the primary `<main>` landmark.
- Ensure **focus order** is logical on the menu jump buttons and card links if you add any interactive wrappers.
- Provide **descriptive `alt` text** on menu and featured images (currently some are empty for decoration—decide per image or use `alt=""` only when truly decorative and documented).
- Run **Lighthouse** or **axe** in DevTools and fix any contrast or ARIA warnings.
- Add a **reduced-motion** media query in CSS for users who prefer less animation (`prefers-reduced-motion`).

## Content & UX

- Replace placeholder **footer social URLs** and **map embed** with real links and your actual address.
- Add **hours of operation** (header strip or footer) and optional **holiday note**.
- **Menu**: seasonal specials block, dietary tags (e.g. vegan, contains nuts), or size/price tiers if you expand copy.
- **About**: real names and bios if this becomes a real business site.
- **404 page** (`404.html`) for static hosts that support custom error pages.

## Forms & backend

- Wire **contact** and **newsletter** forms to a real endpoint (e.g. Formspree, Netlify Forms, or a small serverless function) instead of `action="#"`.
- Add **client-side validation messages** and clear **success/error** feedback after submit.
- Include **honeypot field** or rate limiting strategy if you expose a public form.

## Performance

- **Preload** the hero background or **use `loading="lazy"`** on below-the-fold images consistently.
- Serve **WebP/AVIF** variants with `<picture>` for large photos while keeping fallbacks.
- **Self-host** or **subset** fonts if you want fewer third-party requests.
- Minify CSS (and HTML) for production, or adopt a tiny build step if the project grows.

## SEO & sharing

- Unique **`<title>`** and **meta description** per page.
- **Open Graph / Twitter** meta tags for link previews.
- **`sitemap.xml`** and **`robots.txt`** if the site is public and indexed.

## Design & front-end

- **Dark mode** toggle using `prefers-color-scheme` or a stored user preference.
- **Print stylesheet** for menu (`@media print`) so guests can print a simple menu.
- **Sticky section tabs** on the menu that highlight the active category while scrolling.
- Small **animation** on hero or cards (respecting `prefers-reduced-motion`).

## Developer experience

- **EditorConfig** and a shared **Prettier** config for consistent HTML/CSS formatting.
- **HTML validation** (W3C validator) in CI or as a manual check before deploy.
- Optional **Eleventy** or **Vite** later if you want includes/partials for repeated header/footer without duplicating files.

## Hosting & operations

- Deploy to **GitHub Pages**, **Netlify**, or **Cloudflare Pages** with HTTPS and custom domain.
- Add **README** screenshots once you export real PNGs into `images/`.
- **Analytics** (privacy-friendly) only if you need traffic insight and can document it in a privacy note.

## Security & privacy

- If you add any script or embed, keep **third-party list** small and document what loads where.
- For contact forms collecting email, add a short **privacy note** on what data is stored and for how long.

---

When you implement an item, you can remove it from this list or move it to a “Done” section so the file stays a living backlog.
