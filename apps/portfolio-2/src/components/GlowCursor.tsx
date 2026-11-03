'use client';

import { useEffect, useRef } from 'react';

export function GlowCursor() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    if (!window.matchMedia('(pointer: fine)').matches) {
      glow.style.display = 'none';
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div className="glow" id="glow" ref={glowRef} aria-hidden="true" />;
}

export default GlowCursor;

