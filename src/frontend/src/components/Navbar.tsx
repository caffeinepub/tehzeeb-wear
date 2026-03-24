import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    !isHome || scrolled
      ? "bg-brand-bg/95 backdrop-blur-sm border-b border-white/5"
      : "bg-transparent";

  const links = [
    { to: "/shop", label: "SHOP" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" data-ocid="nav.link">
            <span className="font-display font-black text-2xl md:text-3xl text-white tracking-brandwide">
              TEHZEEB
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-body font-semibold text-white/70 hover:text-white tracking-brandwide transition-colors uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search size={16} />
              <span className="text-xs tracking-brandwide font-semibold uppercase">
                SEARCH
              </span>
            </button>
            <Link
              to="/shop"
              className="relative"
              aria-label="Cart"
              data-ocid="nav.link"
            >
              <ShoppingBag
                size={18}
                className="text-white/80 hover:text-white transition-colors"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-bg text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-brand-bg border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body font-semibold text-white/80 hover:text-white tracking-brandwide uppercase py-1"
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
