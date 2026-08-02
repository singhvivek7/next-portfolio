import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vivekkk.in"),
  title: "Vivek Kumar | Full-Stack Engineer",
  description: "Backend-leaning full-stack engineer building distributed systems and responsive web applications.",
  openGraph: {
    title: "Vivek Kumar | Full-Stack Engineer",
    description: "SDE II @ Traya Health - Building distributed systems that scale & stay up. NestJS microservices, React/Next.js platforms, and AWS cloud infra.",
    url: "https://vivekkk.in",
    siteName: "Vivek Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar | Full-Stack Engineer",
    description: "SDE II @ Traya Health - Building distributed systems that scale & stay up.",
    creator: "@singhvivek7",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
