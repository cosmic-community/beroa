# Beroa - Professional Services Company Website

![App Preview](https://imgix.cosmicjs.com/b70c9fa0-1be3-11f1-955f-57a9b44bd844-autopilot-photo-1487412720507-e7ab37603c6f-1773080026769.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning, modern professional services company website built with **Next.js 16** and powered by **[Cosmic](https://www.cosmicjs.com)** CMS. Beroa features a bold design with smooth interactions, showcasing services, team members, case studies, and client testimonials.

## Features

- 🏠 **Dynamic Homepage** — Hero, services, team, case studies & testimonials sections
- 🛠️ **Services Pages** — Detailed service cards with icons and images
- 👥 **Team Directory** — Professional profiles with photos, bios, and LinkedIn links
- 📊 **Case Studies** — In-depth project showcases with challenge/solution/results
- ⭐ **Testimonials** — Client reviews with star ratings
- 📱 **Fully Responsive** — Beautiful on all devices
- 🚀 **Server-Side Rendered** — Optimal performance and SEO
- 🎨 **Modern Design** — Dark navy with warm amber accents

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69af0d6ddb2ad58a8e7c45da&clone_repository=69af0ecfdb2ad58a8e7c461a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'Beroa'. The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([Docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with your bucket configured

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd beroa

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start development server
bun dev
```

### Environment Variables

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Case Study

```typescript
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'my-case-study' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following Cosmic object types:

| Object Type | Slug | Key Metafields |
|------------|------|----------------|
| Services | `services` | description, content, icon, featured_image |
| Team Members | `team-members` | name, role, bio, photo, email, linkedin_url |
| Case Studies | `case-studies` | headline, client_name, service, challenge, solution, results, featured_image |
| Testimonials | `testimonials` | client_name, client_title, quote, rating, client_photo, case_study |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Add environment variables
5. Deploy!

<!-- README_END -->