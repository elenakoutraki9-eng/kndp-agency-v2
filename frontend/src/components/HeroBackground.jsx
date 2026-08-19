import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const useMouseParallax = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return { mx: smx, my: smy, onMouseMove, onMouseLeave };
};

const FloatingShape = ({ children, className = "", depth = 30, duration = 7, mx, my }) => {
  const x = useTransform(mx, [-1, 1], [-depth, depth]);
  const y = useTransform(my, [-1, 1], [-depth, depth]);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function HeroBackground({ mx, my }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="bg-grid absolute inset-0" />

      <motion.div
        className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-baby/25 blur-3xl"
        animate={{ x: [0, 50, -20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-baby/15 blur-3xl"
        animate={{ x: [0, -30, 40, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingShape mx={mx} my={my} depth={36} duration={7} className="top-[14%] right-[34%]">
        <div className="h-24 w-24 md:h-28 md:w-28 rounded-full border-[3px] border-baby-dark/30" />
      </FloatingShape>
      <FloatingShape mx={mx} my={my} depth={55} duration={6} className="top-[30%] right-[6%]">
        <div className="relative h-10 w-10">
          <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-baby-dark/50" />
          <span className="absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 rounded-full bg-baby-dark/50" />
        </div>
      </FloatingShape>
      <FloatingShape mx={mx} my={my} depth={26} duration={8} className="bottom-[22%] left-[42%]">
        <div className="h-5 w-5 rounded-full bg-baby" />
      </FloatingShape>
      <FloatingShape mx={mx} my={my} depth={42} duration={9} className="bottom-[12%] right-[30%]">
        <div className="h-12 w-12 rotate-12 rounded-xl border-2 border-ink/10" />
      </FloatingShape>
      <FloatingShape mx={mx} my={my} depth={60} duration={5.5} className="top-[18%] left-[6%]">
        <div className="h-3 w-3 rounded-full bg-baby-dark/60" />
      </FloatingShape>
      <FloatingShape mx={mx} my={my} depth={48} duration={6.5} className="top-[58%] left-[3%] hidden lg:block">
        <div className="h-16 w-16 rounded-full border-2 border-dashed border-baby-dark/30 animate-spin-slow" />
      </FloatingShape>
    </div>
  );
}
