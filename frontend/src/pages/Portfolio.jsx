import { Link } from "react-router-dom";
import { ArrowUpRight, Loader } from "lucide-react";
import { MaskLine, Reveal, Kicker } from "@/components/Reveal";

const slots = ["001", "002", "003"];

export default function Portfolio() {
  return (
    <div data-testid="portfolio-page">
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Kicker>Portfolio</Kicker>
          <h1
            data-testid="portfolio-headline"
            className="mt-6 font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl"
          >
            <MaskLine delay={0.1}>Our work is</MaskLine>
            <MaskLine delay={0.25}>
              <span className="text-baby-dark italic">coming soon.</span>
            </MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink/60">
              Our first projects are in progress right now. We'd rather show you
              real, finished work than fill this page with mockups — check back
              soon, or be one of the first names on it.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="portfolio-placeholders" className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slots.map((s, i) => (
              <Reveal key={s} delay={0.1 * i}>
                <div
                  data-testid={`portfolio-slot-${s}`}
                  className={`relative overflow-hidden rounded-3xl border border-ink/8 bg-mist grain aspect-[4/5] flex flex-col justify-between p-8 ${
                    i === 1 ? "md:translate-y-10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-light text-ink/15">{s}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-baby-light border border-baby/40 px-4 py-1.5 text-xs font-bold text-baby-dark">
                      <Loader className="h-3 w-3 animate-spin" />
                      In progress
                    </span>
                  </div>
                  <div>
                    <div className="h-1.5 w-2/3 rounded-full bg-ink/10 mb-3" />
                    <div className="h-1.5 w-1/2 rounded-full bg-ink/10 mb-3" />
                    <div className="h-1.5 w-1/3 rounded-full bg-ink/10" />
                    <p className="mt-6 text-xs uppercase tracking-[0.25em] font-semibold text-ink/40">
                      First projects in progress
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 md:mt-28 text-center">
            <p className="font-display text-2xl md:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
              Your project could be the first one we show off.
            </p>
            <Link
              to="/contact"
              data-testid="portfolio-cta-button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-baby-dark hover:text-ink"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
