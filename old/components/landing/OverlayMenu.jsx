import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function OverlayMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl border-l-2 border-primary/30 flex items-center"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="px-8 md:px-20 lg:px-32 w-full">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="block py-4 md:py-6 border-b border-primary/10 group"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-sm font-body text-primary/40 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
