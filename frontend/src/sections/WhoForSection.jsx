import {
  UtensilsCrossed,
  Store,
  Rocket,
  HeartPulse,
  Truck,
  Briefcase,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const types = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Store, label: "Retail stores" },
  { icon: Rocket, label: "Startups" },
  { icon: HeartPulse, label: "Clinics & healthcare" },
  { icon: Truck, label: "Logistics & warehouses" },
  { icon: Briefcase, label: "Service businesses" },
  { icon: ShoppingCart, label: "E-commerce brands" },
];

export default function WhoForSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-baby-light border border-baby/40 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="who-for" data-testid="who-for-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Who is KNDP for?</Kicker>
            <h2
              data-testid="who-for-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl max-w-3xl"
            >
              <WordMask text="If you have a problem," className="block" />
              <WordMask
                text="we have a solution."
                accent={["solution."]}
                delay={0.2}
                className="block"
              />
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {types.map((t, i) => (
              <Reveal key={t.label} delay={0.05 * i}>
                <div
                  data-testid={`who-for-card-${i}`}
                  className="group h-full rounded-2xl bg-white border border-ink/8 p-6 flex items-center gap-4 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/20 hover:border-baby-dark/50"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <p className="font-display font-medium tracking-tight text-lg">{t.label}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35} className="sm:col-span-2 lg:col-span-4">
              <div
                data-testid="who-for-highlight-card"
                className="group h-full rounded-2xl bg-ink text-white p-6 md:p-8 flex items-center gap-5 transition-transform duration-500 hover:-translate-y-1.5"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-baby text-ink transition-transform duration-500 group-hover:-rotate-12">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="font-display font-medium tracking-tight text-lg md:text-xl">
                  Any business with a problem to solve —{" "}
                  <span className="text-baby">if you have a problem, we have a solution.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
