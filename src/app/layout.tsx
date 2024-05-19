import type { Metadata } from 'next';
import { fontPrimary } from '@/utils/fonts';
import { Footer, Header, Layout } from '@/components';
import { Toaster } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vivek Kumar - Portfolio',
  description: 'Full Stack Developer - Vivek Kumar',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${fontPrimary.className} antialiased relative`}>
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
