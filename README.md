# ASID Website

Marketing website for **Aunty Saunta's Intellectual Development (ASID)**, an early learning startup near Wollongong serving children aged **2.5 to 6**.

## 🚀 Quick Deploy Options

**GitHub Pages (FREE)** - Recommended for sharing with friends  
See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for step-by-step instructions.

**Vercel** - Alternative professional hosting  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johnnyhomez/asid)

## Live Website

Once deployed to GitHub Pages, your website will be available at:
```
https://johnnyhomez.github.io/asid
```

## Tech Stack

- Next.js (App Router + Static Export)
- TypeScript
- Tailwind CSS

## Detailed Deployment Guides

- **[GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)** - Free hosting on GitHub (5 min setup)
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Vercel and other hosting options

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

### For GitHub Pages (Static Export)
```bash
npm run build
# Output will be in the 'out' directory
```

### For Vercel/Netlify (Server-Side Rendering)
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
