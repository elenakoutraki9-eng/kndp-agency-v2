import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const [metrics, setMetrics] = useState({ width: 340, step: 230 });
  const total = projects.length;

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setMetrics({ width: 250, step: 150 });
      else if (w < 1024) setMetrics({ width: 320, step: 210 });
      else setMetrics({ width: 380, step: 250 });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  const handleDragEnd = (_e, info) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <div data-testid="portfolio-carousel" className="mt-14">
      <div className="relative h-[440px] sm:h-[480px] md:h-[520px] overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-20 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-20 bg-gradient-to-l from-mist to-transparent" />

        <motion.div
          data-testid="portfolio-carousel-track"
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
        >
          {projects.map((p, i) => {
            let offset = i - index;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
            const abs = Math.abs(offset);
            if (abs > 1) return null;
            const isActive = offset === 0;

            return (
              <motion.div
                key={p.title}
                data-testid={`portfolio-card-${i}`}
                onClick={() => !isActive && setIndex(i)}
                className={`absolute top-0 rounded-3xl border bg-white overflow-hidden shadow-xl ${
                  isActive
                    ? "border-baby/50 shadow-baby/25 cursor-default"
                    : "border-ink/8 shadow-ink/10 cursor-pointer"
                }`}
                style={{
                  left: "50%",
                  width: metrics.width,
                  marginLeft: -metrics.width / 2,
                }}
                initial={false}
                animate={{
                  x: offset * metrics.step,
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.55,
                  zIndex: 10 - abs,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3.5 py-1.5 text-xs font-bold text-ink/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-baby-dark animate-pulse" />
                    Σε εξέλιξη
                  </span>
                  <span className="absolute top-4 right-4 inline-flex rounded-full bg-ink/70 backdrop-blur px-3.5 py-1.5 text-xs font-bold text-white">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg md:text-2xl font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.desc}</p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <button
          type="button"
          onClick={() => go(-1)}
          data-testid="portfolio-carousel-prev"
          aria-label="Προηγούμενο έργο"
          className="group absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-ink/10 shadow-md transition-[background-color,transform] duration-300 hover:bg-baby hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          data-testid="portfolio-carousel-next"
          aria-label="Επόμενο έργο"
          className="group absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-ink/10 shadow-md transition-[background-color,transform] duration-300 hover:bg-baby hover:scale-105"
        >
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5" data-testid="portfolio-carousel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setIndex(i);
            }}
            data-testid={`portfolio-dot-${i}`}
            aria-label={`Μετάβαση στο έργο ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-baby-dark" : "w-2 bg-ink/15 hover:bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
