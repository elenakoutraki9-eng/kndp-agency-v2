import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, CalendarClock, Send, Check } from "lucide-react";
import { WordMask, Reveal, Kicker, Magnetic } from "@/components/Reveal";
import { StackPanel } from "@/components/StackSection";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const serviceOptions = [
  "Website",
  "Web Tool",
  "App",
  "Web App",
  "Program",
  "Custom Tool",
  "Automation",
  "Something Else",
];

const inputCls =
  "w-full rounded-2xl border border-ink/10 bg-white px-5 py-4 text-ink placeholder:text-ink/35 outline-none transition-[border-color,box-shadow] duration-300 focus:border-baby-dark focus:ring-4 focus:ring-baby/25";

export default function ContactSection(props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [service, setService] = useState(null);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await axios.post(`${API}/contact`, { ...form, service });
      toast.success("Message sent — we'll get back to you soon.");
      setForm({ name: "", email: "", company: "", message: "" });
      setService(null);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <StackPanel
      {...props}
      innerClassName="rounded-[2.5rem] bg-baby shadow-2xl shadow-ink/10 overflow-hidden grain relative"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/30 blur-3xl pointer-events-none" />
      <section id="contact" data-testid="contact-section" className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-5">
            <Kicker className="text-ink/70">Contact</Kicker>
            <h2
              data-testid="contact-headline"
              className="mt-5 font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl"
            >
              <WordMask text="Let's" className="block" />
              <WordMask text="talk." accent={["talk."]} delay={0.2} className="block" />
            </h2>
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-base md:text-lg leading-relaxed text-ink/70">
                Tell us what you're trying to build or fix. Free estimate, no
                obligation — we reply within 2 hours on business days.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="mt-12 space-y-4">
              <a
                href="mailto:hello@kndp.studio"
                data-testid="contact-email-link"
                className="group flex items-center justify-between rounded-3xl border border-white/60 bg-white/80 backdrop-blur p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-baby-light text-baby-dark">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">Email us</p>
                    <p className="font-semibold">hello@kndp.studio</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink/30 transition-transform duration-300 group-hover:rotate-45 group-hover:text-baby-dark" />
              </a>

              <div
                data-testid="contact-booking-card"
                className="flex items-center justify-between rounded-3xl border border-dashed border-ink/25 bg-white/50 backdrop-blur p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-baby-dark">
                    <CalendarClock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">Book a call</p>
                    <p className="font-semibold">30-min intro call</p>
                  </div>
                </div>
                <span className="rounded-full bg-white border border-ink/10 px-4 py-1.5 text-xs font-bold text-baby-dark">
                  Calendar link coming soon
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.25}>
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="rounded-[2rem] bg-white border border-white/60 shadow-xl shadow-ink/5 p-8 md:p-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      data-testid="contact-name-input"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      data-testid="contact-email-input"
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="contact-company" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    data-testid="contact-company-input"
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Optional"
                    className={inputCls}
                  />
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                    What do you need?
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        data-testid={`service-chip-${s.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setService(service === s ? null : s)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 hover:scale-105 active:scale-95 ${
                          service === s
                            ? "bg-ink text-white border-ink"
                            : "bg-white text-ink/70 border-ink/10 hover:border-baby-dark"
                        }`}
                      >
                        {service === s && <Check className="h-3.5 w-3.5" />}
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <label htmlFor="contact-message" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-ink/50">
                    Tell us about it *
                  </label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-message-input"
                    required
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="What are you trying to build or fix? Rough ideas are totally fine."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    data-testid="contact-submit-button"
                    disabled={sending}
                    className="btn-shine group mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-9 py-4 text-sm font-bold text-white transition-[transform,opacity] duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {sending ? "Sending…" : "Send Message"}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Magnetic>
                <p
                  data-testid="contact-promise-line"
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink/55"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-baby-dark" />
                  Free, no-obligation estimate — we reply within 2 hours on business days.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </StackPanel>
  );
}
