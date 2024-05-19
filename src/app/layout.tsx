import type { Metadata } from 'next';
import { fontPrimary } from '@/utils/fonts';
import { Footer, Header, Layout } from '@/components';
import { Toaster } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vivek Kumar - Portfolio',
  description: 'Full Stack Developer - Vivek Kumar',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
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
