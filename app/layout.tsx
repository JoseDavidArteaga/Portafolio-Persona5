import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "David Fernandez | Portfolio",
  description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "David Fernandez",
    "portfolio",
    "fullstack developer",
  ],
  authors: [{ name: "David Fernandez" }],
  openGraph: {
    title: "David Fernandez | Portfolio",
    description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
    url: "https://yourusername.github.io/my-portfolio/",
    siteName: "David Fernandez Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Fernandez | Portfolio",
    description: "Fullstack developer, React, Angular, TypeScript, TailwindCSS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
