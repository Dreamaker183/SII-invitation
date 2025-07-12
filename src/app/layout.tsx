import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://grindsite-demo.web.app'),
  title: "Startup Grind Conference 2025 | Connect, Learn, Grow",
  description: "Join 5,000+ entrepreneurs, investors, and startup enthusiasts at the premier startup conference. Network with VCs, learn from successful founders, and accelerate your startup journey.",
  keywords: ["startup conference", "entrepreneur networking", "venture capital", "startup funding"],
  openGraph: {
    title: "Startup Grind Conference 2025 - The Ultimate Startup Event",
    description: "Where startups meet investors, ideas become reality, and careers are launched.",
    images: [
      {
        url: "/og-image-startup-grind.jpg",
        width: 1200,
        height: 630,
        alt: "Startup Grind Conference 2025",
      }
    ],
    type: "website",
    siteName: "Startup Grind Conference",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Grind Conference 2025 - The Ultimate Startup Event",
    description: "Where startups meet investors, ideas become reality, and careers are launched.",
    images: ["/og-image-startup-grind.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
