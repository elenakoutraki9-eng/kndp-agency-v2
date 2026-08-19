import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { Kicker, WordMask, Counter, Magnetic } from "@/components/Reveal";
import HeroBackground, { useMouseParallax } from "@/components/HeroBackground";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG = "https://images.pexels.com/photos/31068011/pexels-photo-31068011.jpeg";

const rotatingWords = ["Websites", "Web Apps", "Custom Tools", "Automations"];

const stats = [
  { to: 6, suffix: "", label: "Projects on the bench" },
  { to: 2, suffix: "h", label: "Response time promise" },
  { to: 4, suffix: "w", label: "Typical website delivery" },
];

const promises = ["Free estimate", "Reply within 2 hours", "You own everything"];

export default function Hero() {
  const heroRef = useRef(null);
  const { mx, my, onMouseMove, onMouseLeave } = useMouseParallax();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgMX = useTransform(mx, [-1, 1], [-10, 10]);
  const imgMY = useTransform(my, [-1, 1], [-8, 8]);

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((v) => (v + 1) % rotatingWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      data-testid="hero-section"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <HeroBackground mx={mx} my={my} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Kicker>KNDP — Digital Studio</Kicker>
          </motion.div>
          <h1
            data-testid="hero-headline"
            className="mt-6 font-display font-bold tracking-tighter leading-[0.95] text-5xl sm:text-6xl lg:text-7xl"
          >
            <WordMask text="We Build" delay={0.2} className="block" />
            <WordMask text="Whatever" accent={["Whatever"]} delay={0.4} className="block" />
            <WordMask text="You Need." delay={0.6} className="block" />
          </h1>
          <motion.p
            data-testid="hero-subheading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink/60"
          >
            From websites and apps to custom tools and automations, we build the
            digital solutions your business needs to grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToId("#contact")}
                data-testid="hero-cta-primary"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-baby-dark hover:text-ink"
              >
                Get a Free Estimate
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToId("#services")}
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 backdrop-blur px-7 py-3.5 text-sm font-bold text-ink transition-[transform,background-color,border-color] duration-300 hover:scale-105 hover:border-baby-dark hover:bg-baby-light"
              >
                See What We Build
              </button>
            </Magnetic>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            data-testid="hero-promise-row"
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink/55"
          >
            {promises.map((p) => (
              <span key={p} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-baby-dark" />
                {p}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink/10 pt-8"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-ink"
                />
                <p className="mt-1 text-xs uppercase tracking-[0.2em] font-semibold text-ink/45">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div style={{ x: imgMX, y: imgMY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[70vh] w-full shadow-2xl shadow-baby/20"
            >
              <motion.img
                src={HERO_IMG}
                alt="Abstract white architecture under a blue sky"
                style={{ y: imgY }}
                className="absolute inset-0 h-[120%] w-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              data-testid="hero-rotating-chip"
              className="absolute -top-5 -right-2 md:-right-6 rounded-full bg-ink text-white pl-4 pr-5 py-2.5 flex items-center gap-2.5 shadow-xl text-sm font-semibold"
            >
              <span className="h-2 w-2 rounded-full bg-baby animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl px-6 py-5 animate-float-soft"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                End-to-end
              </p>
              <p className="mt-1 font-display font-semibold tracking-tight">
                Design → Build → Launch
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-ink/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
