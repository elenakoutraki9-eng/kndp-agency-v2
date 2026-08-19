import {
  UtensilsCrossed,
  Boxes,
  Users,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const ideas = [
  { icon: UtensilsCrossed, text: "A booking system for your restaurant" },
  { icon: Boxes, text: "An inventory tool for your warehouse" },
  { icon: Users, text: "A custom CRM for your sales team" },
  { icon: ShoppingBag, text: "An e-commerce store for your products" },
  { icon: Smartphone, text: "A mobile app for your customers" },
  { icon: Zap, text: "An automation that saves you hours every week" },
];

export default function WhatWeBuildSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-white border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="ideas" data-testid="what-we-build-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>What we can build</Kicker>
            <h2
              data-testid="what-we-build-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl max-w-3xl"
            >
              <WordMask text="If you can describe it," className="block" />
              <WordMask text="we can build it." accent={["build", "it."]} delay={0.2} className="block" />
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, i) => (
              <Reveal key={idea.text} delay={0.06 * i}>
                <div
                  data-testid={`idea-card-${i}`}
                  className="group h-full rounded-3xl border border-ink/8 bg-white p-7 md:p-8 flex items-center gap-5 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-baby-light text-baby-dark transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                    <idea.icon className="h-6 w-6" />
                  </span>
                  <p className="font-display text-lg md:text-xl font-medium tracking-tight leading-snug">
                    {idea.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
