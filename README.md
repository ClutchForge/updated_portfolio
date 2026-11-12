# Zayd Mohammed Anees — Portfolio

React + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide. No backend, no API keys, no database.
Fonts (Geist) are self-hosted through npm, so there are no third-party font requests.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Check and build

```bash
npm run lint
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy

`dist/` is a static site (relative base path), so it works on any static host.

- **Vercel / Netlify / Cloudflare Pages:** import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch, or use a Pages workflow that runs `npm ci && npm run build` and publishes `dist/`.

After deploying, edit `index.html` and set `og:url` and make `og:image` an absolute URL
(for example `https://your-domain/images/og-image.jpg`) so link previews work.

## Folder structure

```
public/
  favicon.svg              ZMA monogram favicon
  images/
    profile.jpg            <- ADD your photograph here
    og-image.jpg           <- optional social preview (1200x630)
    sentinelai/            <- put SentinelAI screenshots here
src/
  config/site.ts           All content, links, statuses, skills (edit this file)
  components/              Nav, Hero, About, Sentinel, Projects, Skills,
                           Leadership, Education, Working, Contact, Footer
  index.css                Theme tokens (colors, fonts) and global styles
  App.tsx                  Page composition
index.html                 Title, description, Open Graph metadata
```

## Still to configure

Your photo, GitHub and LinkedIn links, batch years, certifications, RAVEN, and project statuses are already set.
What is left (all in `src/config/site.ts` unless noted):

1. **Email:** set `links.email`. Until then the Email button shows as "not set yet".
2. **SentinelAI screenshots:** the gallery is hidden while `sentinel.screenshots` is empty. To add one, copy the image into `public/images/sentinelai/` and add `{ title, caption, src, alt }`.
3. **Repository links** for RAVEN, CyberVault and CrowdSense: fill in each project's `repo`.
4. **Certification links:** add `url` (and `date`) to any entry in `education.certifications` that has a credential page.
5. **Cobot and Soil Monitoring statuses:** both say "Exploratory project". Change them if they are further along.
6. **Skill labels:** review each `level` in `skillGroups`.
7. **Social preview:** after deploying, make `og:image` and `og:url` in `index.html` absolute URLs.
