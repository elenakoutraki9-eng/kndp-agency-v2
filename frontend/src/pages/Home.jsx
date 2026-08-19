import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Globe,
  Wrench,
  Workflow,
  Smartphone,
} from "lucide-react";
import { MaskLine, Reveal, Kicker } from "@/components/Reveal";
import EditorialMarquee from "@/components/Marquee";

const HERO_IMG = "https://images.pexels.com/photos/31068011/pexels-photo-31068011.jpeg";

const offerings = [
  {
    icon: Globe,
    title: "Websites & Web Apps",
    text: "Fast, polished websites and full-featured web applications — from marketing sites to complex platforms.",
    span: "md:col-span-7",
  },
  {
    icon: Wrench,
    title: "Custom Tools & Programs",
    text: "Internal tools, dashboards and programs built around exactly how your business works.",
    span: "md:col-span-5",
  },
  {
    icon: Workflow,
    title: "Automations",
    text: "Repetitive work, removed. We connect your systems and automate the busywork out of your day.",
    span: "md:col-span-5",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Clean, reliable apps your customers and team will actually enjoy using.",
    span: "md:col-span-7",
  },
];

const chapters = [
  {
    n: "01",
    title: "One partner for everything",
    text: "Websites, apps, tools, automations — instead of juggling five vendors, you get one team that builds whatever you need.",
  },
  {
    n: "02",
    title: "Built around your business",
    text: "No templates forced onto your problems. We start with how you actually work, then build the solution that fits.",
  },
  {
    n: "03",
    title: "Clean, honest process",
    text: "Clear scope, straight answers, no surprises. You always know what's being built, why, and when it lands.",
  },
  {
    n: "04",
    title: "Made to grow with you",
    text: "Everything we ship is built to last and easy to extend — so today's solution doesn't become tomorrow's rebuild.",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section
        ref={heroRef}
        data-testid="hero-section"
        className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
      >
        <div className="absolute -top-32 -right-40 h-[34rem] w-[34rem] rounded-full bg-baby/20 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
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
              <MaskLine delay={0.15}>We Build</MaskLine>
              <MaskLine delay={0.3}>
                <span className="text-baby-dark italic">Whatever</span>
              </MaskLine>
              <MaskLine delay={0.45}>You Need.</MaskLine>
            </h1>
            <motion.p
              data-testid="hero-subheading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink/60"
            >
              From websites and apps to custom tools and automations, we build the
              digital solutions your business needs to grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-baby-dark hover:text-ink"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-bold text-ink transition-[transform,background-color,border-color] duration-300 hover:scale-105 hover:border-baby-dark hover:bg-baby-light"
              >
                See What We Build
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl px-6 py-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                End-to-end
              </p>
              <p className="mt-1 font-display font-semibold tracking-tight">
                Design → Build → Launch
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-ink/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </section>

      <EditorialMarquee />

      {/* WHAT WE DO */}
      <section data-testid="what-we-do-section" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>What we do</Kicker>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
              If it lives on a screen, we can build it.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={0.08 * i} className={o.span}>
                <div
                  data-testid={`offering-card-${i}`}
                  className="group h-full rounded-3xl border border-ink/8 bg-white p-8 md:p-10 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby-light text-baby-dark transition-colors duration-500 group-hover:bg-baby group-hover:text-ink">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl font-medium tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-ink/60 leading-relaxed">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KNDP */}
      <section data-testid="why-kndp-section" className="py-24 md:py-32 bg-mist">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Kicker>Why KNDP</Kicker>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium tracking-tight">
                A different kind of build partner.
              </h2>
            </div>
            <Link
              to="/about"
              data-testid="why-kndp-about-link"
              className="group inline-flex items-center gap-2 text-sm font-bold text-ink/70 hover:text-baby-dark transition-colors duration-300"
            >
              Our story
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Reveal>
          <div className="mt-14">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={0.06 * i}>
                <div
                  data-testid={`why-chapter-${c.n}`}
                  className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline border-t border-ink/10 py-8 md:py-10 transition-colors duration-500 hover:bg-white/60"
                >
                  <span className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl font-light text-baby-dark">
                    {c.n}
                  </span>
                  <h3 className="col-span-9 md:col-span-4 font-display text-2xl md:text-3xl font-medium tracking-tight">
                    {c.title}
                  </h3>
                  <p className="col-span-9 col-start-4 md:col-span-5 md:col-start-8 text-ink/60 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-ink/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-testid="home-cta-section" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-baby px-8 md:px-16 py-16 md:py-24 grain">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/60">
                Ready when you are
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tighter text-ink max-w-3xl">
                Have something in mind? Let's build it.
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-testid="home-cta-contact-button"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
                <Link
                  to="/services"
                  data-testid="home-cta-services-button"
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-8 py-4 text-sm font-bold text-ink transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
