# ASID Website

Marketing website for **Aunty Saunta's Intellectual Development (ASID)**, an early learning startup near Wollongong serving children aged **2.5 to 6**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johnnyhomez/asid)

## Tech Stack

- Next.js (App Router + SSR)
- TypeScript
- Tailwind CSS

## 🚀 Quick Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying this website publicly.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm run start
```

## SEO-First Features Included

- Rich metadata in `app/layout.tsx` (title template, description, keywords, Open Graph, Twitter, robots)
- JSON-LD structured data for local preschool in `app/page.tsx`
- Search index files:
	- `app/sitemap.ts`
	- `app/robots.ts`
- Location-targeted copy for Wollongong and surrounding suburbs

## Placeholder Business Details

The following are placeholders and should be replaced when final details are available:

- Phone number
- Email address
- Street address
- Operating hours
- Domain `https://www.asid-earlylearning.com.au` (update if different)

## 📁 Required Files Status

✅ **All Required Files Present:**
- `app/layout.tsx` - Root layout with SEO metadata
- `app/page.tsx` - Homepage with content and structured data
- `app/globals.css` - Global styles with Tailwind
- `app/sitemap.ts` - XML sitemap for search engines
- `app/robots.ts` - Robots.txt configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Deployment configuration

The website is **ready to be deployed publicly** for review!
