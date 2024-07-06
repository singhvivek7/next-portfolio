'use client';

import { AnimatedCursor } from '@/components';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <AnimatedCursor />
      {children}
    </>
  );
};
