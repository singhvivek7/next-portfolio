import type { Metadata } from 'next';
import { fontPrimary } from '@/utils/fonts';
import { Header, Layout } from '@/components';

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
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
