import {
  ArrowUpRight,
  Globe,
  Wrench,
  Workflow,
  Smartphone,
  UtensilsCrossed,
  Boxes,
  Users,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { Reveal, Kicker, WordMask, Magnetic } from "@/components/Reveal";
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

const categories = [
  {
    slug: "customers",
    name: "For Your Customers",
    services: [
      {
        n: "01",
        title: "Websites",
        text: "Turn visitors into paying customers with a fast, sharp site that makes it obvious why they should pick you over anyone else.",
        who: "For businesses wanting more leads",
      },
      {
        n: "03",
        title: "Apps",
        text: "Give customers a reason to come back — booking, ordering or managing their account in a few taps, right from their phone.",
        who: "For businesses building customer loyalty",
      },
      {
        n: "04",
        title: "Web Apps",
        text: "Let customers book, pay and manage everything themselves, so your team spends less time on the phone and more time on real work.",
        who: "For businesses drowning in back-and-forth",
      },
    ],
  },
  {
    slug: "team",
    name: "For Your Team",
    services: [
      {
        n: "02",
        title: "Web Tools",
        text: "Give your team one clear place to see the numbers that matter, instead of digging through spreadsheets every morning.",
        who: "For teams tired of manual work",
      },
      {
        n: "06",
        title: "Custom Tools",
        text: "Hand your team a tool built around how they actually work, so the busywork disappears and the important stuff gets done.",
        who: "For teams buried in repetitive tasks",
      },
    ],
  },
  {
    slug: "operations",
    name: "For Your Operations",
    services: [
      {
        n: "05",
        title: "Programs",
        text: "Keep inventory, scheduling and reporting accurate and up to date automatically, so nothing slips through the cracks.",
        who: "For operations that can't afford mistakes",
      },
      {
        n: "07",
        title: "Automations",
        text: "Stop copying data between apps by hand — we connect your systems so information moves itself, correctly, every time.",
        who: "For businesses ready to stop the busywork",
      },
      {
        n: "08",
        title: "Custom Digital Solutions",
        text: "Got a problem that doesn't fit a neat category? Tell us what's slowing you down and we'll design something that fixes it.",
        who: "For anyone with a problem worth solving",
      },
    ],
  },
];

const ideas = [
  { icon: UtensilsCrossed, text: "A booking system for your restaurant" },
  { icon: Boxes, text: "An inventory tool for your warehouse" },
  { icon: Users, text: "A custom CRM for your sales team" },
  { icon: ShoppingBag, text: "An e-commerce store for your products" },
  { icon: Smartphone, text: "A mobile app for your customers" },
  { icon: Zap, text: "An automation that saves you hours every week" },
];

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Services</Kicker>
            <h2
              data-testid="services-headline"
              className="mt-3 font-display text-3xl md:text-5xl font-medium tracking-tight max-w-3xl"
            >
              <WordMask text="If it lives on a screen," className="block" />
              <WordMask text="we can build it." accent={["build", "it."]} delay={0.2} className="block" />
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={0.08 * i} className={o.span}>
                <div
                  data-testid={`offering-card-${i}`}
                  className="group h-full rounded-2xl border border-ink/8 bg-white p-5 md:p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                    <o.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-3 font-display text-lg md:text-xl font-medium tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 md:mt-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/50">
              A few examples
            </p>
          </Reveal>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-testid="ideas-grid">
            {ideas.map((idea, i) => (
              <Reveal key={idea.text} delay={0.05 * i}>
                <div
                  data-testid={`idea-card-${i}`}
                  className="group h-full rounded-xl border border-ink/8 bg-white p-3.5 flex items-center gap-3 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                    <idea.icon className="h-4 w-4" />
                  </span>
                  <p className="font-display text-sm md:text-base font-medium tracking-tight leading-snug">
                    {idea.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 md:mt-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-ink/50">
              The full list — grouped by what it means for you
            </p>
          </Reveal>
          <div className="mt-6 space-y-10" data-testid="services-categories">
            {categories.map((cat, ci) => (
              <div key={cat.slug} data-testid={`services-category-${cat.slug}`}>
                <Reveal delay={0.05 * ci}>
                  <p className="text-sm font-display font-semibold text-baby-dark tracking-tight">
                    {cat.name}
                  </p>
                </Reveal>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.services.map((s, i) => (
                    <Reveal key={s.n} delay={0.05 * i}>
                      <div
                        data-testid={`service-card-${s.n}`}
                        className="group h-full flex flex-col rounded-2xl border border-ink/8 bg-white p-5 md:p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                      >
                        <span className="font-display text-sm font-light text-baby-dark">{s.n}</span>
                        <h4 className="mt-2 font-display text-lg md:text-xl font-medium tracking-tight">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{s.text}</p>
                        <p className="mt-3 text-xs font-semibold text-baby-dark/80 uppercase tracking-wide">
                          {s.who}
                        </p>
                        <Magnetic strength={0.2} className="mt-4 self-start">
                          <button
                            type="button"
                            onClick={() => scrollToId("#contact")}
                            data-testid={`service-lets-talk-${s.n}`}
                            className="group/btn inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-4 py-2 text-xs font-bold text-ink transition-[background-color,border-color,transform] duration-300 hover:scale-105 hover:bg-baby hover:border-baby"
                          >
                            Let's talk
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
                          </button>
                        </Magnetic>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal className="mt-10 md:mt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-[2rem] bg-baby-light border border-baby/40 px-6 md:px-10 py-7 md:py-9 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-baby/40 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tighter">
                  Not sure which one you need?
                </h3>
                <p className="mt-2 text-sm text-ink/60 max-w-lg leading-relaxed">
                  That's normal. Tell us the problem — we'll tell you honestly what
                  it takes to solve it.
                </p>
              </div>
              <Magnetic strength={0.25} className="relative shrink-0">
                <button
                  onClick={() => scrollToId("#contact")}
                  data-testid="services-cta-button"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
                >
                  Get a Free Estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
    </section>
  );
}
