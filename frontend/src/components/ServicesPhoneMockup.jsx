import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, Bell, TrendingUp } from "lucide-react";

const SCREENS = [
  { id: "website", label: "Ιστότοπος" },
  { id: "app", label: "Εφαρμογή" },
  { id: "dashboard", label: "Εργαλείο Web" },
];

const HOLD_MS = 2600;

const WebsiteScreen = () => (
  <div className="absolute inset-0 flex flex-col">
    <div className="flex items-center justify-between px-4 pt-5">
      <span className="h-2 w-14 rounded-full bg-ink/20" />
      <span className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
      </span>
    </div>
    <div className="mt-6 px-4">
      <div className="h-3 w-3/4 rounded-full bg-ink/25" />
      <div className="mt-2 h-3 w-1/2 rounded-full bg-baby-dark/60" />
      <div className="mt-3 h-1.5 w-4/5 rounded-full bg-ink/10" />
      <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-ink/10" />
      <span className="mt-4 inline-flex rounded-full bg-baby px-4 py-1.5 text-[9px] font-extrabold text-ink">
        Ξεκίνα Τώρα
      </span>
    </div>
    <div className="mt-auto mb-5 mx-4 rounded-xl bg-mist h-16" />
  </div>
);

const AppScreen = () => (
  <div className="absolute inset-0 flex flex-col pt-5 px-4">
    <div className="flex items-center justify-between">
      <span className="h-2.5 w-10 rounded-full bg-ink/20" />
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-mist">
        <Bell className="h-3 w-3 text-ink/40" />
      </span>
    </div>
    <div className="mt-4 flex items-center gap-2 rounded-full bg-mist px-3 py-2">
      <Search className="h-3 w-3 text-ink/30" />
      <span className="h-1.5 w-16 rounded-full bg-ink/10" />
    </div>
    <div className="mt-4 space-y-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2 rounded-xl bg-mist px-2.5 py-2">
          <span className="h-8 w-8 rounded-lg bg-baby shrink-0" />
          <div className="flex-1 space-y-1">
            <span className="block h-1.5 w-3/4 rounded-full bg-ink/15" />
            <span className="block h-1.5 w-1/2 rounded-full bg-ink/8" />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-auto mb-4 flex items-center justify-around rounded-2xl bg-ink py-2.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-baby" : "bg-white/25"}`}
        />
      ))}
    </div>
  </div>
);

const DashboardScreen = () => (
  <div className="absolute inset-0 flex flex-col pt-5 px-4">
    <div className="flex items-center justify-between">
      <span className="h-2.5 w-16 rounded-full bg-ink/20" />
      <span className="inline-flex items-center gap-1 rounded-full bg-baby-light px-2 py-1 text-[8px] font-bold text-baby-dark">
        <TrendingUp className="h-2.5 w-2.5" />
        +18%
      </span>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-mist p-2.5">
        <span className="block h-1.5 w-8 rounded-full bg-ink/15" />
        <span className="mt-1.5 block h-2.5 w-10 rounded-full bg-ink/30" />
      </div>
      <div className="rounded-lg bg-baby-light p-2.5">
        <span className="block h-1.5 w-8 rounded-full bg-baby-dark/40" />
        <span className="mt-1.5 block h-2.5 w-10 rounded-full bg-baby-dark" />
      </div>
    </div>
    <div className="mt-3 flex-1 rounded-xl bg-mist p-3 flex items-end gap-1.5">
      {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className="flex-1 rounded-t-sm bg-baby-dark/70"
        />
      ))}
    </div>
    <div className="mb-4 mt-3 space-y-1.5">
      <div className="flex items-center justify-between rounded-md bg-mist px-2 py-1.5">
        <span className="h-1.5 w-10 rounded-full bg-ink/15" />
        <span className="h-1.5 w-6 rounded-full bg-baby-dark/50" />
      </div>
      <div className="flex items-center justify-between rounded-md bg-mist px-2 py-1.5">
        <span className="h-1.5 w-10 rounded-full bg-ink/15" />
        <span className="h-1.5 w-6 rounded-full bg-baby-dark/50" />
      </div>
    </div>
  </div>
);

const renderScreen = (id) => {
  if (id === "website") return <WebsiteScreen />;
  if (id === "app") return <AppScreen />;
  return <DashboardScreen />;
};

export default function ServicesPhoneMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setStep((s) => (s + 1) % SCREENS.length), HOLD_MS);
    return () => clearTimeout(id);
  }, [step]);

  const current = SCREENS[step];

  return (
    <div data-testid="services-phone-mockup" className="w-[220px] mx-auto">
      <div className="rounded-[2.4rem] bg-ink p-2 shadow-2xl shadow-ink/20">
        <div className="relative rounded-[1.9rem] bg-white overflow-hidden h-[420px]">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-ink z-20" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              data-testid={`services-phone-screen-${current.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {renderScreen(current.id)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {SCREENS.map((s) => (
          <span
            key={s.id}
            data-testid={`services-phone-dot-${s.id}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              s.id === current.id ? "w-6 bg-baby-dark" : "w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-xs font-semibold text-ink/50 flex items-center justify-center gap-1">
        {current.label}
        <ArrowUpRight className="h-3 w-3" />
      </p>
    </div>
  );
}
