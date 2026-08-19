import { motion } from "framer-motion";
import { ArrowRight, CircleX, CheckCircle2 } from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const pairs = [
  {
    problem: "Customers can't book online",
    solution: "Custom booking app, live in 5 days",
  },
  {
    problem: "You're drowning in manual work",
    solution: "A custom automation that handles it for you",
  },
  {
    problem: "Your website looks outdated",
    solution: "A modern site that converts visitors into clients",
  },
  {
    problem: "You need a tool your team actually uses",
    solution: "We build it around your exact workflow",
  },
];

export default function ProblemSolutionSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-mist border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="problems" data-testid="problem-solution-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Problems we solve</Kicker>
            <h2
              data-testid="problem-solution-headline"
              className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl"
            >
              <WordMask text="Sound" className="inline-block" />{" "}
              <WordMask text="familiar?" accent={["familiar?"]} delay={0.2} className="inline-block" />
            </h2>
          </Reveal>
          <div className="mt-14 space-y-5">
            {pairs.map((p, i) => (
              <Reveal key={p.problem} delay={0.07 * i} x={-32} y={0}>
                <div
                  data-testid={`problem-solution-row-${i}`}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6"
                >
                  <div className="flex items-center gap-4 rounded-2xl bg-white border border-ink/8 p-6 text-ink/60">
                    <CircleX className="h-5 w-5 shrink-0 text-ink/30" />
                    <p className="font-medium text-base md:text-lg">{p.problem}</p>
                  </div>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-baby text-ink"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                  <div className="flex items-center gap-4 rounded-2xl bg-ink text-white p-6 transition-transform duration-500 group-hover:-translate-y-0.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-baby" />
                    <p className="font-semibold text-base md:text-lg">{p.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
