'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUp({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  className = '',
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxBanner({
  bgImage,
  children,
  minHeight = '65vh',
  className = '',
}: {
  bgImage: string;
  children: React.ReactNode;
  minHeight?: string;
  className?: string;
}) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div
      ref={ref}
      style={{ minHeight }}
      className={`relative overflow-hidden flex items-center justify-center text-center text-white px-6 py-20 ${className}`}
    >
      <motion.div
        style={{
          backgroundImage: `url(${bgImage})`,
          y,
        }}
        className="absolute inset-0 bg-cover bg-center -top-[20%] -bottom-[20%] w-full h-[140%] z-0"
      />
      <div className="absolute inset-0 bg-black/45 z-10" />
      <div className="relative z-20 max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
