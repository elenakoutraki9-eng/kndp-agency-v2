import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home", testid: "nav-link-home" },
  { to: "/services", label: "Services", testid: "nav-link-services" },
  { to: "/portfolio", label: "Portfolio", testid: "nav-link-portfolio" },
  { to: "/about", label: "About", testid: "nav-link-about" },
  { to: "/contact", label: "Contact", testid: "nav-link-contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="font-display font-bold text-2xl tracking-tighter flex items-center gap-1"
        >
          KNDP
          <span className="h-2.5 w-2.5 rounded-full bg-baby translate-y-1" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={l.testid}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors duration-300 hover:text-ink ${
                  isActive ? "text-ink" : "text-ink/50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-baby"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-cta-button"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-baby px-5 py-2.5 text-sm font-bold text-ink transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-baby-dark"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-ink/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`mobile-${l.testid}`}
                    className={({ isActive }) =>
                      `block py-3 font-display text-2xl font-medium tracking-tight ${
                        isActive ? "text-baby-dark" : "text-ink"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-nav-cta-button"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-baby px-6 py-3.5 font-bold text-ink"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
