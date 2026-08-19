import { motion } from "framer-motion";
import { ArrowRight, CircleX, CheckCircle2 } from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const pairs = [
  {
    problem: "Οι πελάτες δεν μπορούν να κάνουν κράτηση online",
    solution: "Custom booking app, έτοιμη σε 5 μέρες",
  },
  {
    problem: "Πνίγεσαι σε χειρωνακτική δουλειά",
    solution: "Ένας custom αυτοματισμός που τα κάνει όλα για εσένα",
  },
  {
    problem: "Το website σου φαίνεται ξεπερασμένο",
    solution: "Ένα μοντέρνο website που μετατρέπει επισκέπτες σε πελάτες",
  },
  {
    problem: "Χρειάζεσαι ένα εργαλείο που η ομάδα σου θα χρησιμοποιεί πραγματικά",
    solution: "Το χτίζουμε γύρω από τον δικό σου τρόπο δουλειάς",
  },
];

export default function ProblemSolutionSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-mist border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="problems" data-testid="problem-solution-section" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker>Προβλήματα που λύνουμε</Kicker>
            <h2
              data-testid="problem-solution-headline"
              className="mt-3 font-display font-medium tracking-tight text-3xl md:text-5xl"
            >
              <WordMask text="Σου ακούγεται" className="inline-block" />{" "}
              <WordMask text="γνωστό;" accent={["γνωστό;"]} delay={0.2} className="inline-block" />
            </h2>
          </Reveal>
          <div className="mt-6 space-y-3">
            {pairs.map((p, i) => (
              <Reveal key={p.problem} delay={0.07 * i} x={-32} y={0}>
                <div
                  data-testid={`problem-solution-row-${i}`}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4"
                >
                  <div className="flex items-center gap-3 rounded-xl bg-white border border-ink/8 p-4 text-ink/60">
                    <CircleX className="h-4 w-4 shrink-0 text-ink/30" />
                    <p className="font-medium text-sm md:text-base">{p.problem}</p>
                  </div>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full bg-baby text-ink"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                  <div className="flex items-center gap-3 rounded-xl bg-ink text-white p-4 transition-transform duration-500 group-hover:-translate-y-0.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-baby" />
                    <p className="font-semibold text-sm md:text-base">{p.solution}</p>
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
