import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lightbulb, Hammer, Rocket } from "lucide-react";

const STEPS = [
  { n: 1, title: "Share Your Idea", icon: Lightbulb },
  { n: 2, title: "We Build It", icon: Hammer },
  { n: 3, title: "You Launch", icon: Rocket },
];

const HOLD_MS = 2200;

export default function ChatPhone() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), HOLD_MS);
    return () => clearTimeout(id);
  }, [step]);

  const current = STEPS[step];

  return (
    <div data-testid="hero-phone" className="relative w-[280px] sm:w-[310px]">
      <div className="rounded-[3rem] bg-ink p-2.5 shadow-2xl shadow-ink/30">
        <div className="rounded-[2.4rem] bg-white overflow-hidden flex flex-col h-[560px] sm:h-[600px]">
          <div className="relative pt-3 pb-3 px-5 border-b border-ink/5 bg-white">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-ink" />
            <div className="mt-5 flex items-center gap-2.5">
              <span className="h-8 w-8 rounded-full bg-baby flex items-center justify-center font-display font-bold text-xs text-ink">
                K
              </span>
              <div>
                <p className="text-xs font-bold text-ink leading-tight">How We Work</p>
                <p className="text-[10px] text-ink/45">From idea to launch, together</p>
              </div>
            </div>
          </div>

          <div
            data-testid="hero-onboarding"
            className="flex-1 flex flex-col items-center justify-center gap-6 px-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.n}
                data-testid={`onboarding-step-${current.n}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-baby-light">
                  <current.icon className="h-9 w-9 text-baby-dark" />
                  <span className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full bg-ink text-baby flex items-center justify-center font-display text-xs font-bold">
                    {current.n}
                  </span>
                </span>
                <p className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                  {current.title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="p-5 border-t border-ink/5 bg-white flex items-center justify-center gap-2">
            {STEPS.map((s) => (
              <span
                key={s.n}
                data-testid={`onboarding-dot-${s.n}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  s.n === current.n ? "w-6 bg-baby-dark" : "w-1.5 bg-ink/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
