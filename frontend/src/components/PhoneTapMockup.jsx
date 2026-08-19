import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";

const SEQUENCE = [
  { screen: "list", tap: false, t: 1400 },
  { screen: "list", tap: true, t: 500 },
  { screen: "detail", tap: false, t: 2300 },
];

export default function PhoneTapMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIdx((i) => (i + 1) % SEQUENCE.length), SEQUENCE[idx].t);
    return () => clearTimeout(id);
  }, [idx]);

  const { screen, tap } = SEQUENCE[idx];

  return (
    <div data-testid="service-mockup-apps" className="w-[130px]">
      <div className="rounded-[1.8rem] bg-ink p-1.5 shadow-lg shadow-ink/20">
        <div className="relative rounded-[1.4rem] bg-white overflow-hidden h-[248px]">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2.5 w-10 rounded-full bg-ink z-10" />
          <AnimatePresence mode="wait">
            {screen === "list" ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 pt-6 px-2.5 space-y-1.5"
              >
                <span className="block h-2 w-12 rounded-full bg-ink/20 mb-2" />
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="relative flex items-center gap-1.5 rounded-lg bg-mist px-1.5 py-1.5"
                  >
                    <span className="h-4 w-4 rounded-md bg-baby" />
                    <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
                    {tap && i === 1 && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute right-2 h-3 w-3 rounded-full bg-baby-dark"
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 pt-6 px-2.5"
              >
                <ArrowLeft className="h-3 w-3 text-ink/40" />
                <div className="mt-2 h-14 w-full rounded-lg bg-baby-light flex items-center justify-center">
                  <Star className="h-5 w-5 text-baby-dark" />
                </div>
                <span className="block mt-2 h-2 w-16 rounded-full bg-ink/20" />
                <span className="block mt-1.5 h-1.5 w-20 rounded-full bg-ink/10" />
                <span className="mt-3 inline-flex rounded-full bg-baby px-3 py-1 text-[8px] font-extrabold text-ink">
                  Open
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
