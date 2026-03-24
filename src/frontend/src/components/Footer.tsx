import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display font-black text-3xl text-white tracking-brandwide block mb-3">
              TEHZEEB
            </span>
            <p className="text-brand-muted text-sm font-body leading-relaxed max-w-xs">
              Streetwear rooted in culture.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/tehzeebwears_pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-brand-muted hover:text-white text-sm font-body transition-colors"
                    data-ocid="footer.link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-4">
              Follow
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/tehzeebwears_pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-white text-sm font-body transition-colors flex items-center gap-2"
                  data-ocid="footer.link"
                >
                  <Instagram size={14} /> @tehzeebwears_pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs font-body tracking-wide">
            © {year} TEHZEEB WEAR. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/25 text-xs font-body">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
