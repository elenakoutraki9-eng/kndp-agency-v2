import { Children, cloneElement, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const StackedPanels = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const total = Children.count(children);
  return (
    <div ref={ref} data-testid="stacked-panels" className={`relative ${className}`}>
      {Children.map(children, (child, i) =>
        cloneElement(child, { progress: scrollYProgress, index: i, total })
      )}
    </div>
  );
};

export const StackPanel = ({
  children,
  progress,
  index,
  total,
  className = "",
  innerClassName = "",
}) => {
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const dim = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.18]);
  const filter = useTransform(dim, (b) => `brightness(${b})`);
  return (
    <div
      className={`sticky ${className}`}
      style={{ top: `calc(6rem + ${index * 14}px)`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, filter }}
        className={`origin-top will-change-transform ${innerClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
