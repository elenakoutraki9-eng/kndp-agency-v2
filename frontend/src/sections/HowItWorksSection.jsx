import { ArrowUpRight, MessageSquareText, FileText, Rocket } from "lucide-react";
import { WordMask, Reveal, Kicker, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";
import { scrollToId } from "@/lib/scroll";

const steps = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Πες μας το πρόβλημά σου",
    text: "Περιγράψτε τι χρειάζεστε ή τι σας καθυστερεί — ένα σύντομο μήνυμα αρκεί.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Πάρε δωρεάν σχέδιο & προσφορά",
    text: "Σου στέλνουμε μια ξεκάθαρη πρόταση εντός 48 ωρών. Καμία δέσμευση, χωρίς μικρά γράμματα.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Το χτίζουμε",
    text: "Η λύση σου βγαίνει live γρήγορα — φτιαγμένη αποκλειστικά για εσένα, δική σου εξ ολοκλήρου.",
  },
];

export default function HowItWorksSection(props) {
  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-ink text-white shadow-2xl shadow-ink/20 overflow-hidden grain relative"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-baby/15 blur-3xl pointer-events-none" />
      <section id="how-it-works" data-testid="how-it-works-section" className="py-12 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Kicker light>Πώς δουλεύουμε</Kicker>
            <h2
              data-testid="how-it-works-headline"
              className="mt-3 font-display font-medium tracking-tight text-3xl md:text-5xl"
            >
              <WordMask text="Τρία βήματα." className="inline-block" />{" "}
              <WordMask text="Καμία ταλαιπωρία." accent={["Καμία", "ταλαιπωρία."]} delay={0.2} className="inline-block" />
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.1 * i}>
                <div
                  data-testid={`how-step-${i + 1}`}
                  className="group relative h-full rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 transition-[background-color,border-color,transform] duration-500 hover:bg-white/10 hover:border-baby/40 hover:-translate-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl md:text-3xl font-light text-baby">
                      {s.n}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-baby/15 text-baby transition-[background-color,color,transform] duration-500 group-hover:bg-baby group-hover:text-ink group-hover:-rotate-12">
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToId("#contact")}
                data-testid="how-it-works-cta-button"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-baby px-6 py-3 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
              >
                Ζήτησε Δωρεάν Προσφορά
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </Magnetic>
            <p className="text-sm font-semibold text-white/50">
              Δωρεάν σχέδιο εντός 48 ωρών — χωρίς δέσμευση.
            </p>
          </Reveal>
        </div>
      </section>
    </StackPanel>
  );
}
