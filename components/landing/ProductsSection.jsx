import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const features = [
  'Track player playtime',
  'Manage substitutions in real-time',
  'Record goals, assists, points and statistics',
  'Fair playtime distribution',
  'Roster and attendance management',
  'Season performance tracking',
  'Game history and analytics',
  'Mobile-first design for coaches',
];

function ProjectCard({ number, title, subtitle, image, isActive, onHover }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={onHover}
      className="group border-b border-primary/10 py-8 md:py-10 cursor-pointer hover:bg-primary/5 transition-colors duration-300 px-4 -mx-4"
    >
      <div className="flex items-start md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-6 md:gap-10">
          <span className="text-sm font-body text-muted-foreground tabular-nums mt-1 md:mt-0">
            {number}
          </span>
          <div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm font-body text-muted-foreground mt-1">
              {subtitle}
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
      </div>
    </motion.div>
  );
}

export default function ProductsSection({ projectImages }) {
  const [activeProject, setActiveProject] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });

  const projects = [
    { number: '01', title: 'Team Assistant Coach', subtitle: 'Sports Management · Mobile App', image: projectImages[0] },
    { number: '02', title: 'Mobile Games', subtitle: 'Entertainment · Cross-Platform', image: projectImages[1] },
    { number: '03', title: 'Productivity Tools', subtitle: 'Utility · Innovation', image: projectImages[2] },
  ];

  return (
    <section id="products" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16">
      {/* Section label */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2">
        <span className="text-xs font-body text-muted-foreground tracking-widest uppercase -rotate-90 block origin-center whitespace-nowrap">
          03 — Products
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
            Our Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Project Archive
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Project list */}
          <div>
            <div className="border-t border-primary/10">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.number}
                  {...project}
                  isActive={activeProject === i}
                  onHover={() => setActiveProject(i)}
                />
              ))}
            </div>
          </div>

          {/* Floating preview */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-[3/2] overflow-hidden border border-border"
            >
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Featured product detail */}
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 border border-primary/20 bg-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="max-w-lg">
              <span className="text-xs font-body text-primary tracking-widest uppercase mb-3 block">
                Featured Product
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Team Assistant Coach
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                A mobile application designed for recreational coaches and team managers. Manage player playtime, substitutions, attendance, and performance statistics for Soccer, Basketball, Football, and Volleyball teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-body text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Architectural hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
