'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring
} from 'framer-motion';
import Link from 'next/link';

interface Props {
  items: {
    id: string;
    name: string;
    icon: any;
    url: string;
  }[];
}

export const Tooltip = ({ items }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="mt-5 flex items-center justify-center gap-5">
      {items.map((item) => (
        <button
          className="group relative -mr-4"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className="absolute -left-1/2 -top-14 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link href={item.url} target="_blank">
            <Image
              onMouseMove={handleMouseMove}
              height={80}
              width={80}
              src={item.icon}
              alt={item.name}
              className="relative !m-0 h-10 w-10 rounded-full border-2 border-white/50 object-cover object-top p-2 transition duration-500 hover:border-white group-hover:z-30 group-hover:scale-105"
            />
          </Link>
        </button>
      ))}
    </div>
  );
};
