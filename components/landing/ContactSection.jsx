import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-card text-foreground">
      {/* Section label */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2">
        <span className="text-xs font-body text-primary/40 tracking-widest uppercase -rotate-90 block origin-center whitespace-nowrap">
          04 — Contact
        </span>
      </div>

      <div className="max-w-6xl mx-auto lg:ml-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs font-body text-primary tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Let's Build Something
          </h2>
          <div className="w-16 h-px bg-primary mt-6" />
        </motion.div>

        {/* Email display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="mailto:clapps@clappsdesign.com"
            className="group inline-flex items-center gap-4 font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2.5vw] text-foreground hover:text-primary transition-colors duration-300 break-all"
          >
            clapps@clappsdesign.com
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-primary/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          action="mailto:clapps@clappsdesign.com"
          method="post"
          encType="text/plain"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl"
        >
          <div className="space-y-1">
            <label className="text-xs font-body text-primary/60 tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-primary py-3 text-foreground font-body outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-body text-primary/60 tracking-widest uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-primary py-3 text-foreground font-body outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
              placeholder="your@email.com"
            />
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-body text-primary/60 tracking-widest uppercase">
              Project Vision
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full bg-transparent border-b border-border focus:border-primary py-3 text-foreground font-body outline-none transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
              placeholder="Tell us about your project, app idea, or request..."
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
