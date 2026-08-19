import { Link } from "react-router-dom";
import { ArrowUpRight, Handshake, MessageSquare, ShieldCheck } from "lucide-react";
import { MaskLine, Reveal, Kicker } from "@/components/Reveal";

const FOUNDER_IMG = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
const WORKSPACE_IMG = "https://images.pexels.com/photos/8004070/pexels-photo-8004070.jpeg";

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

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Kicker>About KNDP</Kicker>
          <h1
            data-testid="about-headline"
            className="mt-6 font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl"
          >
            <MaskLine delay={0.1}>Built on a</MaskLine>
            <MaskLine delay={0.25}>
              <span className="text-baby-dark italic">simple idea.</span>
            </MaskLine>
          </h1>
        </div>
      </section>

      <section data-testid="about-story-section" className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-baby/15">
              <img
                src={FOUNDER_IMG}
                alt="Founder of KNDP"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 px-5 py-4">
                <p className="font-display font-semibold tracking-tight">Founder, KNDP</p>
                <p className="text-sm text-ink/60">Builder first, business second.</p>
              </div>
            </div>
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
                <div className="rounded-3xl overflow-hidden aspect-video relative">
                  <img
                    src={WORKSPACE_IMG}
                    alt="KNDP workspace"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl bg-baby p-8 flex flex-col justify-between grain relative overflow-hidden">
                  <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/60">
                    The mission
                  </p>
                  <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink leading-snug">
                    Partner with businesses of any size to build the digital
                    solutions they actually need.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-testid="about-values-section" className="py-24 md:py-32 bg-mist">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>How we work</Kicker>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium tracking-tight">
              Three things we don't compromise on.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div
                  data-testid={`value-card-${i}`}
                  className="group h-full rounded-3xl bg-white border border-ink/8 p-8 md:p-10 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby-light text-baby-dark transition-colors duration-500 group-hover:bg-baby group-hover:text-ink">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-ink/60 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <Link
              to="/contact"
              data-testid="about-cta-button"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-baby-dark hover:text-ink"
            >
              Work With Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
