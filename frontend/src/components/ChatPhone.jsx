import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  UtensilsCrossed,
  Scissors,
  Dumbbell,
  ShoppingBag,
  CalendarCheck,
  Gift,
  Users,
  MessageSquare,
  TrendingUp,
  Bell,
  Boxes,
  CreditCard,
} from "lucide-react";

const BUSINESSES = [
  {
    name: "Restaurant",
    icon: UtensilsCrossed,
    results: [
      { label: "Online Menu & Ordering App", icon: UtensilsCrossed },
      { label: "Booking & Reservations System", icon: CalendarCheck },
      { label: "Loyalty Rewards Program", icon: Gift },
      { label: "Staff Scheduling Tool", icon: Users },
    ],
  },
  {
    name: "Salon",
    icon: Scissors,
    results: [
      { label: "Online Appointment Booking", icon: CalendarCheck },
      { label: "Client Loyalty Rewards", icon: Gift },
      { label: "Staff Schedule Manager", icon: Users },
      { label: "SMS Appointment Reminders", icon: MessageSquare },
    ],
  },
  {
    name: "Gym",
    icon: Dumbbell,
    results: [
      { label: "Class Booking & Scheduling", icon: CalendarCheck },
      { label: "Membership Management Portal", icon: CreditCard },
      { label: "Progress Tracking App", icon: TrendingUp },
      { label: "Automated Renewal Reminders", icon: Bell },
    ],
  },
  {
    name: "Retail Store",
    icon: ShoppingBag,
    results: [
      { label: "E-Commerce Storefront", icon: ShoppingBag },
      { label: "Inventory Management Tool", icon: Boxes },
      { label: "Loyalty Rewards Program", icon: Gift },
      { label: "Point-of-Sale Integration", icon: CreditCard },
    ],
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="inline-block w-[2px] h-4 bg-baby-dark ml-0.5 align-middle"
  />
);

export default function ChatPhone() {
  const [bizIndex, setBizIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState("empty");
  const [resultsShown, setResultsShown] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      let biz = 0;
      while (!cancelled) {
        const business = BUSINESSES[biz % BUSINESSES.length];
        setBizIndex(biz % BUSINESSES.length);
        setPhase("empty");
        setTypedText("");
        setResultsShown(0);
        await sleep(500);
        if (cancelled) return;

        setPhase("typing");
        for (let i = 1; i <= business.name.length; i++) {
          if (cancelled) return;
          setTypedText(business.name.slice(0, i));
          await sleep(90);
        }
        if (cancelled) return;
        await sleep(500);

        setPhase("button");
        await sleep(900);
        if (cancelled) return;

        setPhase("tap");
        await sleep(350);
        if (cancelled) return;

        setPhase("results");
        for (let i = 1; i <= business.results.length; i++) {
          if (cancelled) return;
          setResultsShown(i);
          await sleep(450);
        }
        if (cancelled) return;

        await sleep(2800);
        biz += 1;
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const business = BUSINESSES[bizIndex];
  const isInputGroup = phase !== "results";

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
                <p className="text-xs font-bold text-ink leading-tight">KNDP Studio</p>
                <p className="text-[10px] text-ink/45">What can we build for you?</p>
              </div>
            </div>
          </div>

          <div
            data-testid="hero-business-demo"
            className="flex-1 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isInputGroup ? (
                <motion.div
                  key="input"
                  data-testid="hero-demo-input-screen"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6"
                >
                  <p className="text-xs font-bold text-ink/50 uppercase tracking-[0.15em]">
                    What&apos;s your business?
                  </p>
                  <div className="w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3.5 flex items-center">
                    {typedText ? (
                      <span className="text-sm font-semibold text-ink">{typedText}</span>
                    ) : (
                      <span className="text-sm font-medium text-ink/35">Enter your business...</span>
                    )}
                    <Cursor />
                  </div>
                  <AnimatePresence>
                    {(phase === "button" || phase === "tap") && (
                      <motion.button
                        key="cta"
                        data-testid="hero-demo-cta"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: phase === "tap" ? 0.93 : 1,
                        }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 rounded-full bg-baby px-5 py-2.5 text-xs font-extrabold text-ink"
                      >
                        See what we can build
                        <ArrowRight className="h-3.5 w-3.5" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  data-testid="hero-demo-results-screen"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 32 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col px-4 pt-4 pb-3"
                >
                  <p className="text-[11px] font-bold text-ink/50 flex items-center gap-1.5">
                    <business.icon className="h-3.5 w-3.5 text-baby-dark" />
                    Perfect for a {business.name}
                  </p>
                  <div className="mt-3 flex-1 flex flex-col gap-2 overflow-hidden">
                    {business.results.slice(0, resultsShown).map((r, i) => (
                      <motion.div
                        key={`${business.name}-${i}`}
                        data-testid={`hero-demo-result-${i}`}
                        initial={{ opacity: 0, scale: 0.85, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3 rounded-xl bg-mist border border-ink/5 p-2.5"
                      >
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-baby text-ink">
                          <r.icon className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-[11px] font-semibold text-ink leading-snug">{r.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-3 border-t border-ink/5 bg-white">
            <div className="flex items-center justify-center gap-2 rounded-full bg-mist px-3.5 py-2.5">
              <ArrowRight className="h-3 w-3 text-baby-dark" />
              <span className="text-[10px] font-semibold text-ink/50">
                Tell us your idea — see it come to life
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
