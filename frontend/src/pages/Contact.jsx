import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, CalendarClock, Send, Check } from "lucide-react";
import { MaskLine, Reveal, Kicker } from "@/components/Reveal";

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

export default function Contact() {
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
    <div data-testid="contact-page">
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-5">
            <Kicker>Contact</Kicker>
            <h1
              data-testid="contact-headline"
              className="mt-6 font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl"
            >
              <MaskLine delay={0.1}>Let's</MaskLine>
              <MaskLine delay={0.25}>
                <span className="text-baby-dark italic">talk.</span>
              </MaskLine>
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink/60">
                Tell us what you're trying to build or fix. We reply to every
                message — usually within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.45} className="mt-12 space-y-4">
              <a
                href="mailto:hello@kndp.studio"
                data-testid="contact-email-link"
                className="group flex items-center justify-between rounded-3xl border border-ink/8 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-baby/15 hover:border-baby/50"
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
                className="flex items-center justify-between rounded-3xl border border-dashed border-baby-dark/40 bg-baby-light/60 p-6"
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
                <span className="rounded-full bg-white border border-baby/50 px-4 py-1.5 text-xs font-bold text-baby-dark">
                  Calendar link coming soon
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="rounded-[2rem] bg-mist border border-ink/5 p-8 md:p-12"
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
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 hover:scale-105 ${
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

                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={sending}
                  className="group mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-baby px-9 py-4 text-sm font-bold text-ink transition-[transform,background-color,opacity] duration-300 hover:scale-105 hover:bg-baby-dark disabled:opacity-60 disabled:hover:scale-100"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
