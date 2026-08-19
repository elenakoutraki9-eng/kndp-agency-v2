import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";

const nav = [
  { id: "#hero", label: "Home" },
  { id: "#services", label: "Services" },
  { id: "#portfolio", label: "Portfolio" },
  { id: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-ink text-white overflow-hidden grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">
              Got something to build?
            </p>
            <Magnetic strength={0.15}>
              <button
                onClick={() => scrollToId("#contact")}
                data-testid="footer-cta-link"
                className="group inline-flex items-center gap-3 font-display text-4xl md:text-5xl font-medium tracking-tighter"
              >
                Let's talk
                <span className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-baby text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </button>
            </Magnetic>
            <a
              href="mailto:hello@kndp.studio"
              data-testid="footer-email-link"
              className="mt-8 block text-white/60 hover:text-baby transition-colors duration-300 text-lg"
            >
              hello@kndp.studio
            </a>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">Menu</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    data-testid={`footer-link-${n.label.toLowerCase()}`}
                    className="text-white/70 hover:text-baby transition-colors duration-300"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 md:col-start-11">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50 mb-6">Studio</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Websites, apps, custom tools and automations — built for businesses of any size.
            </p>
          </div>
        </div>

        <div
          data-testid="footer-giant-wordmark"
          className="select-none font-display font-bold tracking-tighter leading-[0.8] text-[24vw] md:text-[18vw] text-white/[0.07] text-center -mb-6 md:-mb-10"
        >
          KNDP
        </div>

        <div className="relative border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} KNDP. All rights reserved.</span>
          <span>Built with care, shipped with confidence.</span>
        </div>
      </div>
    </footer>
  );
}
