import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://stallion-go.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StallionGo | Enterprise Software Solutions",
    template: "%s | StallionGo",
  },
  description:
    "StallionGo is a leading software company providing enterprise solutions, web & mobile development, cloud services, API integration, and digital transformation. Trusted by clients in Sri Lanka, USA, UK, Australia, South Africa & New Zealand.",
  keywords: [
    "software development",
    "enterprise solutions",
    "web development",
    "mobile app development",
    "cloud services",
    "DevOps",
    "API integration",
    "digital transformation",
    "custom software",
    "IT consulting",
    "software company",
    "StallionGo",
    "enterprise software",
    "full-stack development",
    "React development",
    "Node.js development",
    "cloud migration",
    "AWS",
    "Azure",
  ],
  authors: [{ name: "StallionGo", url: siteUrl }],
  creator: "StallionGo",
  publisher: "StallionGo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "StallionGo",
    title: "StallionGo | Enterprise Software Solutions",
    description:
      "Leading software company providing enterprise solutions, web & mobile development, cloud services, and digital transformation. Serving clients globally.",
    images: [
      {
        url: "/stalliongo.png",
        width: 1200,
        height: 630,
        alt: "StallionGo - Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StallionGo | Enterprise Software Solutions",
    description:
      "Leading software company providing enterprise solutions, web & mobile development, cloud services, and digital transformation.",
    images: ["/stalliongo.png"],
    creator: "@stallion_go",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StallionGo",
    url: siteUrl,
    logo: `${siteUrl}/stalliongo.png`,
    description:
      "Leading software company providing enterprise solutions, web & mobile development, cloud services, and digital transformation.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@stallion-go.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://twitter.com/stallion_go",
      "https://linkedin.com/company/stallion-go",
      "https://github.com/stallion-go",
    ],
    areaServed: [
      "Sri Lanka",
      "South Africa",
      "United Kingdom",
      "United States",
      "Australia",
      "New Zealand",
    ],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Cloud Services",
      "Enterprise Solutions",
      "API Integration",
      "IT Consulting",
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "StallionGo",
    image: `${siteUrl}/stalliongo.png`,
    url: siteUrl,
    telephone: "+1-234-567-890",
    email: "contact@stallion-go.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/stalliongo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/stalliongo.png" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
