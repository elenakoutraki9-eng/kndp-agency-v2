import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { MaskLine, Reveal, Kicker } from "@/components/Reveal";
import EditorialMarquee from "@/components/Marquee";

const services = [
  {
    n: "01",
    title: "Websites",
    text: "Marketing sites, landing pages and full company websites — fast, sharp and built to convert.",
  },
  {
    n: "02",
    title: "Web Tools",
    text: "Calculators, portals, dashboards and browser-based tools your customers or team use every day.",
  },
  {
    n: "03",
    title: "Apps",
    text: "Mobile apps for iOS and Android that put your business in your customers' pockets.",
  },
  {
    n: "04",
    title: "Web Apps",
    text: "Full-featured platforms — booking systems, client portals, marketplaces, internal systems.",
  },
  {
    n: "05",
    title: "Programs",
    text: "Custom software programs built for specific jobs: inventory, scheduling, reporting, operations.",
  },
  {
    n: "06",
    title: "Custom Tools",
    text: "Smart, tailored tools that handle the heavy lifting — data processing, document generation, intelligent workflows.",
  },
  {
    n: "07",
    title: "Automations",
    text: "We connect your apps and systems so data flows by itself — no more copy-paste, no more manual busywork.",
  },
  {
    n: "08",
    title: "Custom Digital Solutions",
    text: "Something else entirely? If it's digital, we can build it. Tell us the problem — we'll design the solution.",
  },
];

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Kicker>Services</Kicker>
          <h1
            data-testid="services-headline"
            className="mt-6 font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl"
          >
            <MaskLine delay={0.1}>What we</MaskLine>
            <MaskLine delay={0.25}>
              <span className="text-baby-dark italic">build.</span>
            </MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink/60">
              Eight ways we help businesses move faster. Every project is scoped
              honestly, built carefully, and shipped ready to grow.
            </p>
          </Reveal>
        </div>
      </section>

      <EditorialMarquee />

      <section data-testid="services-list-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-t border-ink/10">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={0.04 * i}>
                <div
                  data-testid={`service-row-${s.n}`}
                  className="group grid grid-cols-12 gap-4 md:gap-8 items-center border-b border-ink/10 py-8 md:py-12 transition-colors duration-500 hover:bg-baby-light/60 cursor-default"
                >
                  <span className="col-span-3 md:col-span-1 font-display text-2xl md:text-4xl font-light text-baby-dark">
                    {s.n}
                  </span>
                  <h2 className="col-span-9 md:col-span-4 font-display text-2xl md:text-4xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </h2>
                  <p className="col-span-9 col-start-4 md:col-span-5 md:col-start-6 text-ink/60 leading-relaxed">
                    {s.text}
                  </p>
                  <span className="hidden md:flex md:col-span-2 justify-end">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 transition-[background-color,transform] duration-500 group-hover:bg-baby group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-[2.5rem] bg-ink text-white px-8 md:px-14 py-12 md:py-16 grain relative overflow-hidden">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tighter">
                Not sure which one you need?
              </h2>
              <p className="mt-4 text-white/60 max-w-lg leading-relaxed">
                That's normal. Tell us the problem — we'll tell you honestly what
                it takes to solve it.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="services-cta-button"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-baby px-8 py-4 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
            >
              Tell Us Your Idea
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
