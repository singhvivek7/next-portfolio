'use client';

import { Tooltip } from 'react-tooltip';
import { AnimatedCursor } from '@/components';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Tooltip id="tooltip" className="z-tooltip" />
      <AnimatedCursor />
      {children}
    </>
  );
};
