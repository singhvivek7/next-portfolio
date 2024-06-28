import type { Metadata } from 'next';

import { fontPrimary } from '@/utils/fonts';
import { Footer, Header, Layout, Toaster } from '@/components';

import './globals.css';
import './react-tooltip.css';
import { appConfig } from '@/config/app.config';

export const metadata: Metadata = {
  title: 'Vivek Kumar - Portfolio',
  description: 'Full Stack Developer - Vivek Kumar',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: 'Vivek Kumar - Portfolio',
    description: 'Full Stack Developer - Vivek Kumar',
    type: 'website',
    locale: 'en',
    countryName: 'India',
    images: [
      {
        url: `${appConfig.baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    title: 'Vivek Kumar - Portfolio',
    description: 'Full Stack Developer - Vivek Kumar',
    card: 'summary_large_image',
    creator: '@v1v3k__',
    creatorId: '@v1v3k__',
    images: [
      {
        url: `${appConfig.baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630
      }
    ]
  }
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} ${fontPrimary.variable} relative antialiased`}
      >
        <Layout>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" theme="light" />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
