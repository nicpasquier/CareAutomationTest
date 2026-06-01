# CareAutomation.net

Healthcare operations automation platform built with **Next.js 14 App Router**, **Tailwind CSS**, and the Sunrise Summit color palette.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: DM Sans (display) + Inter (body)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
careautomation/
├── app/                          → Next.js App Router pages
│   ├── layout.tsx                → Root layout (Header + Footer)
│   ├── page.tsx                  → Home page
│   ├── about/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── solutions/
│   │   ├── revenue-cycle-management/page.tsx
│   │   ├── prior-authorization-processing/page.tsx
│   │   └── referral-intake-management/page.tsx
│   └── products/
│       ├── rcm-automation/page.tsx
│       ├── prior-auth-claim-management-ai/page.tsx
│       └── referral-intake-ai/page.tsx
├── components/
│   ├── layout/                   → Header, Footer
│   ├── ui/                       → Button, Badge, Accordion
│   └── sections/                 → HeroSection, FeatureCard, CTABanner, etc.
├── lib/
│   └── constants.ts              → Nav links, pricing tiers, site config
├── styles/
│   └── globals.css               → Global CSS + font imports
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Deploying to GitHub Pages / Vercel

Push this repository to GitHub, then connect it to **Vercel** (recommended for Next.js) or configure GitHub Actions for your preferred host.

### Vercel (Easiest)
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project → Select repo
3. Deploy — Vercel auto-detects Next.js

### Environment Variables
No environment variables are required for the base site.
