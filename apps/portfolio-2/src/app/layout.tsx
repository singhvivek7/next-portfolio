import type { Metadata, Viewport } from "next";
import { DATA } from "@/data/resume";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090b09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: "Vivek Kumar — Software Engineer",
  description:
    "Vivek Kumar is a full-stack software engineer building reliable backend systems, microservices, and thoughtful products that scale.",
  openGraph: {
    title: "Vivek Kumar — Software Engineer",
    description:
      "Full-Stack Engineer building reliable backend systems, microservices, and developer tools that scale.",
    url: DATA.url,
    siteName: "Vivek Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar — Software Engineer",
    description:
      "Full-Stack Engineer building reliable backend systems, microservices, and developer tools that scale.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('vivek-theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.removeAttribute('data-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
