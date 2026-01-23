# StallionGo Website

Enterprise software solutions company website - transforming ideas into digital reality.

## Tech Stack

- **Framework:** Next.js 14
- **UI:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/
│   ├── Navbar.tsx    # Navigation bar
│   ├── Hero.tsx      # Hero section
│   ├── Services.tsx  # Services section
│   ├── About.tsx     # About section
│   ├── WhyChooseUs.tsx
│   ├── Contact.tsx   # Contact form
│   ├── Footer.tsx    # Footer
│   └── Logo.tsx      # Logo component
└── public/           # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
