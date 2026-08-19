import { ArrowUpRight, MessageSquareText, FileText, Rocket } from "lucide-react";
import { WordMask, Reveal, Kicker, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";
import { scrollToId } from "@/lib/scroll";

const steps = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Tell us your problem",
    text: "Describe what you need or what's slowing you down — a short message is enough.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Get a free plan + quote",
    text: "We send you a clear proposal within 48 hours. No commitment, no fine print.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "We build it",
    text: "Your solution goes live fast — built exactly for you, owned entirely by you.",
  },
];

export default function HowItWorksSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-ink text-white shadow-2xl shadow-ink/20 overflow-hidden grain relative"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-baby/15 blur-3xl pointer-events-none" />
      <section id="how-it-works" data-testid="how-it-works-section" className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker light>How it works</Kicker>
            <h2
              data-testid="how-it-works-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl"
            >
              <WordMask text="Three steps." className="inline-block" />{" "}
              <WordMask text="No hassle." accent={["No", "hassle."]} delay={0.2} className="inline-block" />
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.1 * i}>
                <div
                  data-testid={`how-step-${i + 1}`}
                  className="group relative h-full rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 transition-[background-color,border-color,transform] duration-500 hover:bg-white/10 hover:border-baby/40 hover:-translate-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl md:text-5xl font-light text-baby">
                      {s.n}
                    </span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby/15 text-baby transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                      <s.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-white/60 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToId("#contact")}
                data-testid="how-it-works-cta-button"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-baby px-8 py-4 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
              >
                Get a Free Estimate
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </Magnetic>
            <p className="text-sm font-semibold text-white/50">
              Free plan within 48 hours — no commitment.
            </p>
          </Reveal>
        </div>
      </section>
    </StackPanel>
  );
}
