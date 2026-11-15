'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  bgImage: string;
  minHeight?: string;
  overlayOpacity?: string;
}

export default function Hero({
  title,
  subtitle,
  bgImage,
  minHeight = '100vh',
  overlayOpacity = 'bg-black/35',
}: HeroProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div
      ref={ref}
      style={{ minHeight }}
      className="relative w-full flex items-center justify-center text-center text-white overflow-hidden px-6"
    >
      {/* Background Image with Parallax & exact focus positioning */}
      <motion.div
        style={{
          backgroundImage: `url(${bgImage})`,
          y,
        }}
        className="absolute inset-0 bg-cover bg-center md:bg-[position:center_right_15%] -top-[10%] -bottom-[10%] w-full h-[120%] z-0"
      />

      {/* Dark overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} z-10`} />

      {/* Hero Animated Content */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-5xl mx-auto space-y-6 pt-16"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.08em] uppercase leading-[1.1] drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-white/95 font-light tracking-wide max-w-2xl mx-auto drop-shadow-sm pt-2">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
