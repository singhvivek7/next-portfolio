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
      className="cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
};
