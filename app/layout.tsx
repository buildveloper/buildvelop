import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { contact, site } from "@/data/content";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/layout/custom-cursor";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.handle,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07070B" },
    { media: "(prefers-color-scheme: light)", color: "#F6F2EA" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.handle,
  jobTitle: site.role,
  url: site.url,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  sameAs: [contact.linkedin, contact.company, contact.calendarUrl],
  knowsAbout: [
    "AI software engineering",
    "Business automation",
    "n8n workflows",
    "SaaS product development",
    "CRM automation",
    "AI agents",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <span id="top" aria-hidden="true" />
        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgress />
            <GrainOverlay />
            <CustomCursor />
            <Nav />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
