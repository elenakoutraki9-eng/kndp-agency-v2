import { ArrowUpRight } from "lucide-react";
import { WordMask, Reveal, Kicker, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";
import { scrollToId } from "@/lib/scroll";
import ProjectCarousel from "@/components/ProjectCarousel";

const projects = [
  {
    title: "Restaurant Booking System",
    desc: "Online reservations, table management and automated reminders for a busy bistro.",
    tag: "Web App",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-commerce Web App",
    desc: "A fast storefront with cart, checkout and inventory sync for a growing retailer.",
    tag: "E-commerce",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Custom Business Dashboard",
    desc: "Real-time sales, operations and reporting brought together in one clean internal tool.",
    tag: "Internal Tool",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mobile App for Local Gym",
    desc: "Class bookings, memberships and workout tracking in members' pockets.",
    tag: "Mobile App",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Workflow Automation Suite",
    desc: "Invoicing, follow-ups and data entry automated across the whole back office.",
    tag: "Automation",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate Listing Platform",
    desc: "Searchable listings, virtual tour embeds and agent tools for a regional agency.",
    tag: "Web Platform",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PortfolioSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-mist border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="portfolio" data-testid="portfolio-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Portfolio</Kicker>
            <h2
              data-testid="portfolio-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl"
            >
              <WordMask text="Our work is" className="block" />
              <WordMask
                text="coming soon."
                accent={["coming", "soon."]}
                delay={0.2}
                className="block"
              />
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink/60">
              Here's a look at the kinds of projects currently on our bench. Full
              case studies land soon — or your project could be the first one we
              show off.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ProjectCarousel projects={projects} />
          </Reveal>

          <Reveal className="mt-16 md:mt-20">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white px-8 md:px-14 py-14 md:py-16 grain text-center">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-baby/20 blur-3xl" />
              <p className="relative font-display text-2xl md:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
                More projects are on the way — yours could be next.
              </p>
              <Magnetic strength={0.25} className="relative">
                <button
                  onClick={() => scrollToId("#contact")}
                  data-testid="portfolio-cta-button"
                  className="btn-shine group mt-9 inline-flex items-center gap-2 rounded-full bg-baby px-8 py-4 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
                >
                  Get a Free Estimate
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
