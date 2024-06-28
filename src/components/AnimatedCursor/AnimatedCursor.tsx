'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedCursor = () => {
  const [cursorX, setCursorX] = useState(-100);
  const [cursorY, setCursorY] = useState(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorX(e.clientX - 16);
      setCursorY(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="cursor hidden items-center justify-center lg:flex"
      style={{
        translateX: cursorX,
        translateY: cursorY
      }}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-primary opacity-50" />
    </motion.div>
  );
};
