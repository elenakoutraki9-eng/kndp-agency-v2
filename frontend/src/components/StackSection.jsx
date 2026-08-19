import { Children, cloneElement, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_OFFSET = 96;
const STACK_GAP = 14;

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
  index = 0,
  total = 1,
  className = "",
  innerClassName = "",
}) => {
  const contentRef = useRef(null);
  const [top, setTop] = useState(NAV_OFFSET);

  useEffect(() => {
    const measure = () => {
      const h = contentRef.current?.offsetHeight || 0;
      const base = Math.min(NAV_OFFSET, window.innerHeight - h);
      setTop(base + index * STACK_GAP);
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [index]);

  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const dim = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.18]);
  const filter = useTransform(dim, (b) => `brightness(${b})`);

  return (
    <div className={`sticky ${className}`} style={{ top, zIndex: index + 1 }}>
      <motion.div
        ref={contentRef}
        style={{ scale, filter }}
        className={`origin-top will-change-transform ${innerClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
