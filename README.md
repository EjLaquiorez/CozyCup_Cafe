# CozyCup Café

A small static website for a fictional neighborhood café: menu, story, contact, and a rich home page with featured items. The design uses a warm palette, Fraunces + DM Sans, and responsive layouts (bento product grid, menu boards, sticky header on inner pages).

## Features

- **Home** — Full-height hero with background art, layered gradients, glass-style navigation, decorative orbs, a “today’s pick” showcase card, SVG wave into the main content, bento-style featured products, a mid-page visit CTA, and a footer with contact info, social links, and newsletter signup.
- **Menu** — Category hero, jump links to coffee vs. pastries, board-style sections with photo cards and clear pricing.
- **About** — Story, team grid, and mission.
- **Contact** — Location details, message form, embedded map, and footer with social links.

## Tech stack

- HTML5 (semantic landmarks: `header`, `main`, `footer`, `section`, `article` where applicable)
- One global stylesheet: [`style.css`](style.css) (CSS custom properties, Grid/Flex, sticky header)
- [Google Fonts](https://fonts.google.com/): Fraunces + DM Sans
- [Font Awesome 6](https://fontawesome.com/) via CDN (icons in footer, menu, etc.)
- No build step or framework—open or serve the files as static assets.

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Home |
| `menu.html` | Menu |
| `about.html` | About |
| `contact.html` | Contact + form + map |
| `style.css` | All page styles |
| `images/` | Logo, hero background, product/menu photos, team photos, social icons, page screenshots |

## Run locally

Serving over HTTP avoids quirks with fonts and asset paths:

```bash
# Python 3 (macOS / Linux)
python -m http.server 5500

# Python 3 (Windows — if `python` isn’t on PATH, try:)
py -3 -m http.server 5500
```

Then open [http://127.0.0.1:5500/](http://127.0.0.1:5500/) and browse `index.html`, `menu.html`, etc.

You can also open any `.html` file directly in the browser (`file://`) for a quick look.

## Screenshots

Preview captures are committed under `images/`:

### Home page

![Home page](images/home-page.png)

### Menu page

![Menu page](images/menu-page.png)

### About page

![About page](images/about-page.png)

### Contact page

![Contact page](images/contact-page.png)

## Author

**Earl Laquiorez**  
Email: [ejlqrz@gmail.com](mailto:ejlqrz@gmail.com)

![GitHub avatar](https://github.com/ejlaquiorez.png?size=150)

**Connect**

- [Facebook](https://www.facebook.com/lqrz008)
- [GitHub](https://github.com/EjLaquiorez)
