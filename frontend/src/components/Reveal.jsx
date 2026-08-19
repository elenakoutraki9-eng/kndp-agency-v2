import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Kicker = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-ink/60 ${className}`}
  >
    <span className="h-2 w-2 rounded-full bg-baby" />
    {children}
  </span>
);
