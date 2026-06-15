import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-6 top-0 bottom-0 w-px bg-primary/10 z-50 origin-top hidden lg:block"
      style={{ scaleY: scrollYProgress }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-primary shadow-[0_0_8px_hsl(207_100%_50%/0.8)]"
        style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
      />
    </motion.div>
  );
}
