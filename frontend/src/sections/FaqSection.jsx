import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const faqs = [
  {
    q: "Can you build exactly what I need?",
    a: "Yes — everything we build is custom, shaped around how your business actually works. No templates forced onto your problem. And if something isn't worth building, we'll tell you that honestly too.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites ship in 2–4 weeks. Larger apps, tools and platforms typically take 4–8. You'll get a clear timeline with your free estimate — and we stick to it.",
  },
  {
    q: "Who owns the final product?",
    a: "You do — 100%. The code, the design, the accounts, all of it is in your name and handed over completely. No lock-in, no strings attached.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "Any size, any industry — from solo founders launching their first idea to established companies modernizing how they work. If you have a real problem to solve, we're interested.",
  },
  {
    q: "How much will it cost?",
    a: "Every project is scoped individually, so you only pay for what you actually need. Ask for a free estimate and you'll get an honest, fixed quote — no surprises later.",
  },
];

const FaqItem = ({ faq, index, open, onToggle }) => (
  <div
    data-testid={`faq-item-${index}`}
    className="border-b border-ink/10 last:border-b-0"
  >
    <button
      onClick={onToggle}
      data-testid={`faq-question-${index}`}
      aria-expanded={open}
      className="group flex w-full items-center justify-between gap-6 py-7 md:py-8 text-left"
    >
      <span className="flex items-baseline gap-5">
        <span className="font-display text-sm font-light text-baby-dark">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-display text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${
            open ? "text-baby-dark" : "text-ink group-hover:text-baby-dark"
          }`}
        >
          {faq.q}
        </span>
      </span>
      <motion.span
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
          open ? "bg-baby border-baby text-ink" : "border-ink/10"
        }`}
      >
        <Plus className="h-4 w-4" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p
            data-testid={`faq-answer-${index}`}
            className="pb-8 pl-10 md:pl-12 pr-4 max-w-2xl text-ink/60 leading-relaxed"
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FaqSection(props) {
  const [open, setOpen] = useState(0);

  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-mist border border-ink/5 shadow-2xl shadow-ink/10 overflow-hidden"
    >
      <section id="faq" data-testid="faq-section" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>FAQ</Kicker>
              <h2
                data-testid="faq-headline"
                className="mt-5 font-display font-medium tracking-tight text-4xl md:text-5xl"
              >
                <WordMask text="Questions," className="block" />
                <WordMask text="answered." accent={["answered."]} delay={0.2} className="block" />
              </h2>
              <p className="mt-6 text-ink/60 leading-relaxed max-w-sm">
                The things people usually ask before starting a project with us.
                Anything else — just ask, we reply within 2 hours.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <div className="border-t border-ink/10">
                {faqs.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    faq={f}
                    index={i}
                    open={open === i}
                    onToggle={() => setOpen(open === i ? -1 : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
