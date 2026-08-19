import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const SCRIPT = [
  { type: "msg", from: "customer", text: "Hi, I run a restaurant and I need an online reservation system", t: 800 },
  { type: "typing", t: 1100 },
  { type: "msg", from: "kndp", text: "Perfect! We can build you a custom booking app with table management, confirmations & reminders 🚀", t: 1400 },
  { type: "msg", from: "customer", text: "How long would it take?", t: 900 },
  { type: "typing", t: 900 },
  { type: "msg", from: "kndp", text: "About 5–7 days. Want a free estimate?", t: 1100 },
  { type: "msg", from: "customer", text: "Yes please!", t: 800 },
  { type: "typing", t: 900 },
  { type: "msg", from: "kndp", text: "Done! Your reservation system is live ✅", preview: true, t: 3000 },
];

const TypingBubble = () => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className="self-end bg-baby-light rounded-2xl rounded-br-md px-3.5 py-2.5 flex items-center gap-1"
  >
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-baby-dark/70"
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
      />
    ))}
  </motion.div>
);

const AppPreview = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.4 }}
    className="relative mt-2 w-44 rounded-xl bg-white border border-ink/10 p-2.5 shadow-sm"
  >
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
      className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-ink text-baby flex items-center justify-center"
    >
      <Check className="h-3.5 w-3.5" />
    </motion.span>
    <div className="h-1.5 w-16 rounded-full bg-baby mb-2" />
    <div className="space-y-1.5">
      <div className="flex items-center justify-between rounded-md bg-mist px-2 py-1.5">
        <span className="text-[8px] font-bold text-ink/70">Tonight · Table for 2</span>
        <span className="text-[8px] font-bold text-baby-dark">19:00</span>
      </div>
      <div className="flex items-center justify-between rounded-md bg-mist px-2 py-1.5">
        <span className="text-[8px] font-bold text-ink/70">Tomorrow · Table for 4</span>
        <span className="text-[8px] font-bold text-baby-dark">20:30</span>
      </div>
    </div>
    <div className="mt-2 rounded-md bg-baby py-1.5 text-center text-[8px] font-extrabold text-ink">
      Confirmed
    </div>
  </motion.div>
);

export default function ChatPhone() {
  const [visible, setVisible] = useState(0);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    if (visible >= SCRIPT.length) {
      const id = setTimeout(() => {
        setVisible(0);
        setLoop((l) => l + 1);
      }, 2600);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setVisible((v) => v + 1), SCRIPT[visible].t);
    return () => clearTimeout(id);
  }, [visible]);

  const items = SCRIPT.slice(0, visible);

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
                <p className="text-[10px] text-ink/45 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online — replies in ~2h
                </p>
              </div>
            </div>
          </div>

          <div
            key={loop}
            data-testid="hero-chat"
            className="flex-1 flex flex-col justify-end gap-2 p-3 overflow-hidden"
          >
            {items.map((item, i) =>
              item.type === "typing" ? (
                i === items.length - 1 ? <TypingBubble key={`${loop}-${i}`} /> : null
              ) : (
                <motion.div
                  key={`${loop}-${i}`}
                  data-testid={`chat-message-${i}`}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`max-w-[82%] ${
                    item.from === "kndp" ? "self-end" : "self-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 text-[11px] leading-snug font-semibold ${
                      item.from === "kndp"
                        ? "bg-baby text-ink rounded-2xl rounded-br-md"
                        : "bg-mist text-ink/80 rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {item.text}
                  </div>
                  {item.preview && (
                    <div className="flex justify-end">
                      <AppPreview />
                    </div>
                  )}
                </motion.div>
              )
            )}
          </div>

          <div className="p-3 border-t border-ink/5 bg-white">
            <div className="flex items-center gap-2 rounded-full bg-mist px-3.5 py-2">
              <span className="flex-1 text-[10px] text-ink/35 font-medium">Message…</span>
              <span className="h-6 w-6 rounded-full bg-baby flex items-center justify-center">
                <Send className="h-3 w-3 text-ink" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
