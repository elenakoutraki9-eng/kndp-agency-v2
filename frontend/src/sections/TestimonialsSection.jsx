import { Quote, Star } from "lucide-react";
import { WordMask, Reveal, Kicker } from "@/components/Reveal";

const placeholders = [
  { name: "Client story 01", role: "Restaurant owner" },
  { name: "Client story 02", role: "Retail founder" },
  { name: "Client story 03", role: "Operations manager" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-20 md:py-28 bg-mist">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Kicker>Testimonials</Kicker>
              <h2
                data-testid="testimonials-headline"
                className="mt-5 font-display font-medium tracking-tight text-4xl md:text-6xl"
              >
                <WordMask text="Client stories," className="block" />
                <WordMask
                  text="coming soon."
                  accent={["coming", "soon."]}
                  delay={0.2}
                  className="block"
                />
              </h2>
            </div>
            <p
              data-testid="testimonials-note"
              className="inline-flex items-center gap-2.5 rounded-full bg-baby-light border border-baby/40 px-5 py-2.5 text-sm font-semibold text-ink/70 max-w-md"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-baby-dark animate-pulse" />
              Our first clients are building with us now — their stories are coming soon.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholders.map((p, i) => (
              <Reveal key={p.name} delay={0.08 * i}>
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="group h-full rounded-3xl border border-ink/8 bg-white p-8 flex flex-col transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-baby/15 hover:border-baby/50"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-baby-dark" />
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-baby text-baby" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex-1 space-y-3">
                    <div className="h-2.5 w-full rounded-full bg-ink/10 animate-pulse" />
                    <div
                      className="h-2.5 w-5/6 rounded-full bg-ink/10 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-2.5 w-2/3 rounded-full bg-ink/10 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                  <div className="mt-8 pt-6 border-t border-ink/8 flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-baby-light border border-baby/40 font-display font-bold text-baby-dark">
                      ?
                    </span>
                    <div>
                      <p className="font-display font-semibold tracking-tight">{p.name}</p>
                      <p className="text-sm text-ink/50">{p.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
    </section>
  );
}
