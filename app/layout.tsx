import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://johnnyhomez.github.io/asid";

export const metadata: Metadata = {
  title: {
    template: "%s | ASID Early Learning",
    default: "ASID - Aunty Saunta's Intellectual Development | Wollongong Early Learning Centre",
  },
  description:
    "ASID (Aunty Saunta's Intellectual Development) - Premium early learning facility near Wollongong for children aged 2.5 to 6. Advanced curriculum focusing on intellectual development, motor skills, and problem-solving. Serving Wollongong, Thirroul, Corrimal, Figtree, and surrounding suburbs.",
  keywords: [
    "early learning Wollongong",
    "preschool Wollongong",
    "childcare Wollongong",
    "intellectual development",
    "early childhood education",
    "Thirroul preschool",
    "Corrimal childcare",
    "Figtree early learning",
    "advanced curriculum",
    "child development centre",
    "ASID",
  ],
  authors: [{ name: "ASID Early Learning" }],
  creator: "ASID Early Learning",
  publisher: "ASID Early Learning",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ASID - Aunty Saunta's Intellectual Development",
    description:
      "Premium early learning facility near Wollongong for children aged 2.5 to 6. Advanced curriculum and exceptional care.",
    url: siteUrl,
    siteName: "ASID Early Learning",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASID Early Learning Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASID - Aunty Saunta's Intellectual Development",
    description:
      "Premium early learning facility near Wollongong for children aged 2.5 to 6.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "verification_token", // Replace with actual Google Search Console verification token
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
