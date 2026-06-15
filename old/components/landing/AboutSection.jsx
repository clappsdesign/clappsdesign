import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2, Smartphone, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'We create engaging mobile games focused on fun, entertainment, and memorable experiences that keep players coming back.',
    tags: ['Unity', 'Mobile', '2D/3D'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'We build practical apps that help people save time, stay organized, and reduce everyday effort with elegant interfaces.',
    tags: ['iOS', 'Android', 'Cross-Platform'],
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Our mission is to combine technology, creativity, and usability to build products people genuinely enjoy using.',
    tags: ['UX Research', 'Prototyping', 'Analytics'],
  },
];

function CapabilityCard({ cap, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative p-8 md:p-10 border border-border hover:border-primary/40 bg-card hover:bg-primary/5 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="p-3 border border-primary/20 bg-primary/5 group-hover:border-primary/60 group-hover:bg-primary/15 transition-all duration-500">
          <cap.icon className="w-5 h-5 text-primary transition-colors duration-500" />
        </div>
        <span className="text-xs font-body text-muted-foreground tabular-nums">
          0{index + 1}
        </span>
      </div>

      <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
        {cap.title}
      </h3>

      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
        {cap.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {cap.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body text-muted-foreground px-3 py-1 border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16">
      {/* Section label */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2">
        <span className="text-xs font-body text-muted-foreground tracking-widest uppercase -rotate-90 block origin-center whitespace-nowrap">
          02 — Capabilities
        </span>
      </div>

      <div className="max-w-6xl mx-auto lg:ml-20">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs font-body text-primary tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            About CLApps
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>

      {/* Architectural hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
