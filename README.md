# Folio

A quiet journal of essays on writing, design, and the slow craft of paying attention. Built with Next.js and Tailwind CSS.

---
## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-ShopNest-blue?style=for-the-badge)](https://folio-pi-jet.vercel.app/)
---
## Tech stack

- **Next.js 15** — App Router, server components, dynamic routes
- **TypeScript** — fully typed throughout
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — subtle button animations

---

## Project structure

```
folio/
├── app/
│   ├── page.tsx               # Home — hero, editor's pick, recent posts
│   ├── blog/
│   │   ├── page.tsx           # Blog listing page
│   │   └── [slug]/page.tsx    # Dynamic post detail
│   ├── about/page.tsx         # About page
│   ├── contact/page.tsx       # Contact page
│   └── layout.tsx             # Root layout with navbar + footer
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BlogList.tsx
│   ├── MainButton.tsx
│   └── SecondaryButton.tsx
└── data/
    └── posts.ts               # All post data (slug, title, author, body…)
```

---

## Getting started

```bash
# 1. Clone
git clone https://github.com/paldentitung/folio.git
cd folio

# 2. Install
npm install

# 3. Develop
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Configuration

External images are loaded from Unsplash. Add this to `next.config.ts`:

```ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
```

---

## Pages

| Route          | Description                              |
| -------------- | ---------------------------------------- |
| `/`            | Home — hero, editor's pick, recent posts |
| `/blog`        | All essays                               |
| `/blog/[slug]` | Individual post detail                   |
| `/about`       | About Folio — mission, values, team      |
| `/contact`     | Contact form + email + socials           |

---

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com). No additional configuration required.

---

## License

MIT — open source and free to use.

---

_Built slowly, on purpose._
