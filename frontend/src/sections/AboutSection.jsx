import { ArrowUpRight, Handshake, MessageSquare, ShieldCheck } from "lucide-react";
import { WordMask, Reveal, Kicker, ParallaxY, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";
import { scrollToId } from "@/lib/scroll";

const FOUNDER_IMG = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
const WORKSPACE_IMG = "https://images.pexels.com/photos/8004070/pexels-photo-8004070.jpeg";

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

const values = [
  {
    icon: Handshake,
    title: "Honest scope",
    text: "We tell you what things actually take — no padded estimates, no upsells you don't need.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    text: "You talk to the people building your product. Plain language, quick answers, no runaround.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "We ship clean, maintainable work that your business can rely on for years — not months.",
  },
];

export default function AboutSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-white border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="about" data-testid="about-section" className="py-20 md:py-28 relative">
        <span
          aria-hidden
          className="pointer-events-none select-none absolute top-10 right-4 md:right-10 font-display font-bold text-[10rem] md:text-[14rem] leading-none text-stroke-ink opacity-30 hidden md:block"
        >
          WHY
        </span>
        <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
          <Reveal>
            <Kicker>About KNDP</Kicker>
            <h2
              data-testid="about-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl"
            >
              <WordMask text="Built on a" className="block" />
              <WordMask
                text="simple idea."
                accent={["simple", "idea."]}
                delay={0.2}
                className="block"
              />
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6" data-testid="about-story-section">
            <Reveal className="md:col-span-5">
              <ParallaxY distance={24}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-baby/15">
                  <img
                    src={FOUNDER_IMG}
                    alt="Founder of KNDP"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 px-5 py-4">
                    <p className="font-display font-semibold tracking-tight">Founder, KNDP</p>
                    <p className="text-sm text-ink/60">Builder first, business second.</p>
                  </div>
                </div>
              </ParallaxY>
            </Reveal>

            <div className="md:col-span-7 flex flex-col gap-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-mist border border-ink/5 p-8 md:p-12 h-full">
                  <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/50">
                    The story
                  </p>
                  <p className="mt-5 font-display text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                    KNDP started with a simple observation: businesses of every size
                    need digital solutions — but most get quoted enterprise prices,
                    stuck with templates, or lost between five different vendors.
                  </p>
                  <p className="mt-6 text-ink/60 leading-relaxed">
                    So we became the one partner that builds whatever you need.
                    Websites, apps, custom tools, automations — scoped honestly,
                    built carefully, and delivered without the agency theater. Whether
                    you're a two-person shop or a growing company, you get the same
                    thing: a team that treats your problem like its own.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ParallaxY distance={18}>
                    <div className="rounded-3xl overflow-hidden aspect-video relative">
                      <img
                        src={WORKSPACE_IMG}
                        alt="KNDP workspace"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </ParallaxY>
                  <div className="rounded-3xl bg-baby p-8 flex flex-col justify-between grain relative overflow-hidden">
                    <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/60">
                      The mission
                    </p>
                    <p className="mt-6 font-display text-xl md:text-2xl font-semibold tracking-tight text-ink leading-snug">
                      Partner with businesses of any size to build the digital
                      solutions they actually need.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-24 md:mt-32" data-testid="why-kndp-section">
            <Reveal>
              <Kicker>Why KNDP</Kicker>
              <h3 className="mt-5 font-display text-3xl md:text-5xl font-medium tracking-tight">
                A different kind of build partner.
              </h3>
            </Reveal>
            <div className="mt-12">
              {chapters.map((c, i) => (
                <Reveal key={c.n} delay={0.06 * i} x={-32} y={0}>
                  <div
                    data-testid={`why-chapter-${c.n}`}
                    className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline border-t border-ink/10 py-8 md:py-10 transition-colors duration-500 hover:bg-mist"
                  >
                    <span className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl font-light text-baby-dark transition-transform duration-500 group-hover:scale-110 origin-left">
                      {c.n}
                    </span>
                    <h4 className="col-span-9 md:col-span-4 font-display text-2xl md:text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                      {c.title}
                    </h4>
                    <p className="col-span-9 col-start-4 md:col-span-5 md:col-start-8 text-ink/60 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ink/10" />
            </div>
          </div>

          <div className="mt-24 md:mt-32" data-testid="about-values-section">
            <Reveal>
              <Kicker>How we work</Kicker>
              <h3 className="mt-5 font-display text-3xl md:text-5xl font-medium tracking-tight">
                Three things we don't compromise on.
              </h3>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={0.08 * i}>
                  <div
                    data-testid={`value-card-${i}`}
                    className="group h-full rounded-3xl bg-white border border-ink/8 p-8 md:p-10 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                      <v.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-6 font-display text-2xl font-medium tracking-tight">{v.title}</h4>
                    <p className="mt-3 text-ink/60 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => scrollToId("#contact")}
                  data-testid="about-cta-button"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
                >
                  Work With Us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
