import "./globals-old.css";
import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Dial Rudra Business Directory",
    template: "%s | Dial Rudra",
  },

  description:
    "Find verified businesses, shops, services, hospitals, restaurants and local companies across India.",

  keywords: [
    "business directory",
    "local businesses",
    "India business listing",
    "shops near me",
    "restaurants",
    "services",
    "Dial Rudra",
  ],

  applicationName: "Dial Rudra",

  metadataBase: new URL("https://dialrudra.in"),

  openGraph: {
    title: "Dial Rudra Business Directory",
    description:
      "Find verified businesses and services across India.",
    type: "website",
    siteName: "Dial Rudra",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dial Rudra Business Directory",
    description:
      "Find verified businesses and services across India.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b0764",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
