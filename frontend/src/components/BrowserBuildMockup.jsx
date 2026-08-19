import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BrowserBuildMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delay = step === 3 ? 1900 : 650;
    const id = setTimeout(() => setStep((s) => (s + 1) % 4), delay);
    return () => clearTimeout(id);
  }, [step]);

  return (
    <div data-testid="service-mockup-websites" className="w-full max-w-[220px]">
      <div className="rounded-xl border border-ink/10 bg-white shadow-lg shadow-ink/5 overflow-hidden">
        <div className="flex items-center gap-1.5 bg-mist px-3 py-2 border-b border-ink/5">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-white" />
        </div>
        <div className="p-3.5 h-[150px] flex flex-col justify-start gap-2.5">
          <motion.div
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-between"
          >
            <span className="h-2.5 w-10 rounded-full bg-baby-dark/70" />
            <span className="flex gap-1">
              <span className="h-1.5 w-4 rounded-full bg-ink/10" />
              <span className="h-1.5 w-4 rounded-full bg-ink/10" />
              <span className="h-1.5 w-4 rounded-full bg-ink/10" />
            </span>
          </motion.div>
          <motion.div
            animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-1.5 pt-1"
          >
            <span className="block h-2.5 w-4/5 rounded-full bg-ink/15" />
            <span className="block h-2.5 w-3/5 rounded-full bg-ink/10" />
            <span className="block h-1.5 w-full rounded-full bg-ink/5" />
          </motion.div>
          <motion.div
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.85 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-auto"
          >
            <span className="inline-flex rounded-full bg-baby px-4 py-1.5 text-[9px] font-extrabold text-ink">
              Get Started
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
