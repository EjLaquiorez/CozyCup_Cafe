# CozyCup Café — improvement guide (beginner-friendly)

This file lists **optional** upgrades for your site. You can do them in any order. **You do not need to finish everything**—pick one idea, follow the steps, then test in your browser.

---

## Before you start

1. **Use a code editor** (for example [VS Code](https://code.visualstudio.com/) or Cursor).
2. **Save your files** after each edit (`Ctrl+S` on Windows).
3. **Preview the site** by opening the project folder in a terminal and running:
   ```bash
   python -m http.server 5500
   ```
   Then visit `http://127.0.0.1:5500/` in Chrome, Edge, or Firefox.
4. **Use Git** (optional): after a change you like, you can commit and push so GitHub stays up to date.

---

## How each improvement is written

For many items you will see:

- **What it is** — plain-language explanation.
- **Why it helps** — what visitors or you get out of it.
- **Steps** — do these in order.

If a step uses a word you do not know, check the **Glossary** at the bottom.

---

## Quick wins (good first projects)

### 1. Replace placeholder links and map

**What it is:** Footer social buttons and the contact page map still use example URLs.  
**Why it helps:** Visitors reach your real profiles and location.

**Steps**

1. Open `contact.html`. Find the `<iframe` that loads Google Maps.
2. In Google Maps, search your real address → **Share** → **Embed a map** → copy the `src="..."` link.
3. Paste that URL into the `src` of your iframe (replace the old long URL).
4. Open every HTML file. In the `<footer>`, replace `yourprofile` / `yourchannel` in social links with your real usernames or full URLs.
5. Save each file and refresh the browser to test every link.

---

### 2. Add a short “Hours” line

**What it is:** One line of text like “Open Mon–Sat 7am–6pm.”  
**Why it helps:** People know when to visit.

**Steps**

1. Choose where it should live: footer (all pages) or only `index.html` under the hero.
2. Open the file(s). Add a `<p>` with your hours inside the footer or hero section.
3. If you put it in the footer, copy the same block into `index.html`, `menu.html`, `about.html`, and `contact.html` so it matches—or add it only on `index.html` if you prefer.
4. Style it in `style.css` if needed (for example `.footer-hours { font-size: 0.9rem; }`).

---

### 3. Write real `alt` text for photos

**What it is:** The `alt` attribute describes an image for screen readers and when images fail to load.  
**Why it helps:** Accessibility and slightly better SEO.

**Steps**

1. Open `menu.html` and `index.html`.
2. Find `<img ... alt="">`. For each photo, set `alt` to a short description, e.g. `alt="Cup of espresso with crema"`.
3. If an image is **purely decorative** and repeats text right next to it, you may keep `alt=""`—but then the nearby text must already describe the item.
4. Save and refresh; you do not “see” alt in the page, but it helps many users.

---

## Make the site easier to use (accessibility)

### 4. “Skip to content” link

**What it is:** A hidden link at the top that jumps keyboard users straight to the main content.  
**Why it helps:** People using Tab instead of a mouse skip past the navigation faster.

**Steps**

1. Open `index.html`. Right after `<body>`, add:
   ```html
   <a class="skip-link" href="#main-content">Skip to content</a>
   ```
2. Find the `<main` tag and add `id="main-content"` to it, for example:
   ```html
   <main id="main-content" class="page-main">
   ```
3. Repeat for `menu.html`, `about.html`, and `contact.html` (same skip link, same `id` on `<main>`).
4. In `style.css`, add rules so the link is off-screen until focused, for example:
   ```css
   .skip-link {
     position: absolute;
     left: -999px;
     top: 0;
     z-index: 200;
     padding: 0.5rem 1rem;
     background: var(--accent);
     color: #fff;
   }
   .skip-link:focus {
     left: 0.5rem;
     top: 0.5rem;
   }
   ```
5. Save, reload, press **Tab** once—you should see the link appear; press **Enter** to jump.

---

### 5. Respect “reduce motion”

**What it is:** Some users ask their system to reduce animations. CSS can honor that.  
**Why it helps:** Avoids discomfort (motion sensitivity).

**Steps**

1. Open `style.css`. Scroll to the **end** of the file.
2. Add:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *,
     *::before,
     *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
3. Save. (You do not need to test this unless you turn on “reduce motion” in Windows or macOS settings.)

---

### 6. Run a free accessibility check

**What it is:** Built-in browser tools that flag common issues (contrast, labels, etc.).  
**Why it helps:** Catches problems you might miss by eye.

**Steps**

1. Open your site locally (`http://127.0.0.1:5500/`).
2. **Chrome / Edge:** Press `F12` → **Lighthouse** tab → select **Accessibility** → **Analyze page**.
3. Read the report. Fix the **easy** items first (missing `alt`, low contrast).
4. Repeat on `menu.html`, `about.html`, and `contact.html`.

---

## Forms that actually send messages

### 7. Connect the contact form (example: Formspree)

**What it is:** Today the form uses `action="#"`, so nothing is sent anywhere. A service like Formspree receives the form and emails you.  
**Why it helps:** Real customers can reach you.

**Steps (high level—exact clicks change over time)**

1. Create a free account on a form host (search for “Formspree” or “Web3Forms”).
2. Create a **new form** and copy the form `action` URL they give you.
3. Open `contact.html`. On the `<form>` tag, set `action="PASTE_URL_HERE"` and usually `method="POST"`.
4. Make sure each input has a `name` attribute (your file may already have `name="name"`, etc.).
5. Submit a test message from your site. Check your email or the service’s dashboard.
6. **Newsletter:** repeat with a second form endpoint or the same service if they allow multiple forms.

*(If a step fails, read the host’s “HTML form” docs—they often show a copy-paste example.)*

---

## Speed and images

### 8. Lazy-load images below the fold

**What it is:** Tell the browser to load images only when the user scrolls near them.  
**Why it helps:** First load feels faster.

**Steps**

1. Open `index.html`. On **featured** `<img>` tags (not the hero), add `loading="lazy"`.
2. Open `menu.html`. Add `loading="lazy"` to menu card images that are not in the first row on a phone (or add to all card images for simplicity).
3. Save and reload with **Network** tab open in DevTools to see fewer requests at start.

---

## Help search engines and social previews

### 9. Unique title and description per page

**What it is:** The `<title>` in the tab and a `<meta name="description">` in `<head>`.  
**Why it helps:** Google and social apps show better snippets.

**Steps**

1. Open each HTML file.
2. Change `<title>...</title>` so each page is unique, e.g. `About — CozyCup Café`.
3. Inside `<head>`, add (customize the text):
   ```html
   <meta name="description" content="Short sentence about this page, under 160 characters.">
   ```
4. Save all pages.

---

## Design extras

### 10. Printable menu

**What it is:** When someone prints `menu.html`, hide navigation and use simple black-on-white.  
**Why it helps:** Clean paper menu.

**Steps**

1. Open `style.css`. At the end add:
   ```css
   @media print {
     .site-header,
     .menu-hero,
     .footer {
       display: none !important;
     }
     body {
       background: #fff;
       color: #000;
     }
     .menu-card {
       break-inside: avoid;
       box-shadow: none;
       border: 1px solid #ccc;
     }
   }
   ```
2. Open `menu.html` in the browser → **Print preview** and adjust as you like.

---

## Put the site online (GitHub Pages — overview)

**What it is:** Free hosting for static sites from a GitHub repo.  
**Why it helps:** You get a public `https://...` link.

**Steps**

1. Push your project to GitHub (you already use `git push origin main`).
2. On GitHub: open your repo → **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **`/` (root)** or **`/docs`** if you move files—**root** is simplest for your layout.
4. Save. Wait a few minutes. GitHub shows a URL like `https://YOURUSERNAME.github.io/CozyCup_Cafe/`.
5. Open that URL and click through every page. Fix any broken image paths (case-sensitive on hosting).

---

## Glossary

| Term | Simple meaning |
|------|----------------|
| **HTML** | The structure of the page (headings, paragraphs, images). |
| **CSS** | The styling (colors, layout, fonts). |
| **`alt` text** | Short description of an image for accessibility. |
| **Lighthouse** | A tool in Chrome/Edge that scores performance and accessibility. |
| **Static site** | Pages that are files (HTML/CSS)—no server code required to view them. |
| **Deploy / hosting** | Putting your files on the internet so others can open them. |
| **`localhost` / `127.0.0.1`** | Your own computer pretending to be a web server for testing. |

---

## Keeping this list up to date

When you finish an improvement, you can:

- Delete that section from this file, **or**
- Add a **Done** section at the top with the date and what you did.

That way this guide stays short and matches what is left to do.
