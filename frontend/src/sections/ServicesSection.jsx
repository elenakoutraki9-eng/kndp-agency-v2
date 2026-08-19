import { ArrowUpRight, Globe, Wrench, Workflow, Smartphone } from "lucide-react";
import { Reveal, Kicker, WordMask, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";
import { scrollToId } from "@/lib/scroll";

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

export default function ServicesSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-white border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="services" data-testid="services-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Services</Kicker>
            <h2
              data-testid="services-headline"
              className="mt-5 font-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl"
            >
              <WordMask text="If it lives on a screen," className="block" />
              <WordMask text="we can build it." accent={["build", "it."]} delay={0.2} className="block" />
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={0.08 * i} className={o.span}>
                <div
                  data-testid={`offering-card-${i}`}
                  className="group h-full rounded-3xl border border-ink/8 bg-white p-8 md:p-10 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
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

          <Reveal className="mt-24 md:mt-32">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/50">
              The full list — eight ways we help
            </p>
          </Reveal>
          <div className="mt-8 border-t border-ink/10" data-testid="services-list-section">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={0.04 * i} x={-40} y={0}>
                <div
                  data-testid={`service-row-${s.n}`}
                  className="group grid grid-cols-12 gap-4 md:gap-8 items-center border-b border-ink/10 py-8 md:py-12 transition-colors duration-500 hover:bg-baby-light/60 cursor-default"
                >
                  <span className="col-span-3 md:col-span-1 font-display text-2xl md:text-4xl font-light text-baby-dark transition-transform duration-500 group-hover:scale-110 origin-left">
                    {s.n}
                  </span>
                  <h3 className="col-span-9 md:col-span-4 font-display text-2xl md:text-4xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                  </h3>
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

          <Reveal className="mt-16 md:mt-20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-[2.5rem] bg-baby-light border border-baby/40 px-8 md:px-14 py-12 md:py-14 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-baby/40 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tighter">
                  Not sure which one you need?
                </h3>
                <p className="mt-3 text-ink/60 max-w-lg leading-relaxed">
                  That's normal. Tell us the problem — we'll tell you honestly what
                  it takes to solve it.
                </p>
              </div>
              <Magnetic strength={0.25} className="relative shrink-0">
                <button
                  onClick={() => scrollToId("#contact")}
                  data-testid="services-cta-button"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
                >
                  Tell Us Your Idea
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </StackPanel>
  );
}
