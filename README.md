# Vaydeesh Desai — Personal Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment (Vercel)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and connect your GitHub repo
3. Vercel will auto-detect Next.js and deploy automatically
4. Every push to `main` triggers a new deployment

## Before Deploying

- **Resume**: Replace `/public/resume.pdf` with your actual resume PDF
- **Project URLs**: Update the GitHub repo URLs in `/lib/data.ts` for QuantView and the Inventory Management System (currently set to profile fallback `https://github.com/vaydeeshdesai`)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS (glassmorphism)
- **Animations**: Framer Motion
- **Particles**: react-tsparticles
- **Typewriter**: typewriter-effect
- **Icons**: lucide-react
- **Fonts**: Space Mono (headings) + DM Sans (body)
