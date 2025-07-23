import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://grindsite-demo.web.app'),
  title: "SII | Startups x Investors x InvestHK",
  description: "SII - Startups x Investors x InvestHK. Propose Date: 18/25 Sep. Location: Central/M+ (venue to be confirmed by InvestHK). Attendance: 100-150. Time: 6-8pm Pitching (each team 5-10mins, Q&A). Startups: 4-6 by InvestHK, 2-4 by IVS Japan (TBD), 2-4 Local university (HKU, HKUST). 8-9pm Matching cocktails.",
  keywords: ["SII", "Startups", "Investors", "InvestHK", "IVS Japan", "HKU", "HKUST", "pitching", "startup event", "networking"],
  openGraph: {
    title: "SII - Startups x Investors x InvestHK",
    description: "SII - Startups x Investors x InvestHK. Propose Date: 18/25 Sep. Location: Central/M+ (venue to be confirmed by InvestHK). Attendance: 100-150. Time: 6-8pm Pitching (each team 5-10mins, Q&A). Startups: 4-6 by InvestHK, 2-4 by IVS Japan (TBD), 2-4 Local university (HKU, HKUST). 8-9pm Matching cocktails.",
    images: [
      {
        url: "/og-image-startup-grind.jpg",
        width: 1200,
        height: 630,
        alt: "SII - Startups x Investors x InvestHK",
      }
    ],
    type: "website",
    siteName: "SII - Startups x Investors x InvestHK",
  },
  twitter: {
    card: "summary_large_image",
    title: "SII - Startups x Investors x InvestHK",
    description: "SII - Startups x Investors x InvestHK. Propose Date: 18/25 Sep. Location: Central/M+ (venue to be confirmed by InvestHK). Attendance: 100-150. Time: 6-8pm Pitching (each team 5-10mins, Q&A). Startups: 4-6 by InvestHK, 2-4 by IVS Japan (TBD), 2-4 Local university (HKU, HKUST). 8-9pm Matching cocktails.",
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
