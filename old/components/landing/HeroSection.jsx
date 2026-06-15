import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-44 sm:pt-56 md:pt-64 lg:pt-72 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(207 100% 50% / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsl(207 100% 50% / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] z-0 pointer-events-none" />

      {/* Status indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-44 sm:top-56 md:top-64 lg:top-72 right-6 md:right-12 lg:right-16 z-10 flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="text-xs font-body text-primary tracking-widest uppercase">
          Available for Projects
        </span>
      </motion.div>


      {/* Main content */}
      <div className="relative z-10 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.9] tracking-tighter">
            <span className="text-foreground">CODE. </span>
            <span className="text-primary">LAUGH.</span>
            <br />
            <span className="text-accent">APPS. </span>
            <span className="text-foreground">PLAY.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 md:mt-8 max-w-xl"
        >
          <p className="text-base md:text-lg lg:text-xl font-body text-foreground/60 leading-relaxed">
            We build mobile apps and games that make life easier, more enjoyable, and more productive — for players and professionals alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide hover:bg-primary/80 transition-all duration-300 border border-primary/50"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground/70 font-body text-sm font-medium tracking-wide hover:border-primary/50 hover:text-foreground transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-12 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Architectural hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20" />
    </section>
  );
}
