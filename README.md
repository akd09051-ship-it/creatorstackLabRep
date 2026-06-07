CreatorStackLabRep - Flip-ready Next.js Skeleton

Overview
- Next.js app scaffold designed for flip: hub/cluster content, pillar pages, programmatic pages, and a courses module with affiliate links.
- Affiliate redirect route under /go/[slug] for easy buyer verification.
- MDX/Markdown content-ready structure (seed placeholders) and data-driven seeds planned.

Local run
- Install: npm install
- Run dev: npm run dev
- Open: http://localhost:3000

Deployment
- Connect this repo to Vercel and deploy from main.

Folder/file layout
- pages/
  - index.js
  - go/[slug].js
  - courses/
    - index.js
    - [slug].js
  - hub/
    - best-ai-tools-for-creators.js
    - creator-stack-for-youtube.js
    - creator-stack-for-tiktok.js
    - tools-for-content-creators.js
- content/ (seed content and templates)
- dataFeeds/ (seed data for programmatic pages)
- templates/ (SEO/meta templates)
- docs/flip-pack/ (handover documentation)
- public/ (static assets)
- scripts/ (seed and build helpers)
