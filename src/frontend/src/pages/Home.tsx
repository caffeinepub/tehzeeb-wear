import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Truck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubscribing(false);
    setEmail("");
    toast.success("You're in. Welcome to the Tehzeeb community.");
  };

  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/hero-lifestyle.dim_1400x900.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-6"
          >
            Roots Vol. 1 — Coming Soon
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display font-black text-6xl sm:text-7xl md:text-9xl text-white uppercase leading-none tracking-tight mb-6"
          >
            WEAR YOUR
            <br />
            <span className="text-brand-accent">TEHZEEB</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-brand-faint text-base md:text-lg font-body font-light tracking-wider mb-10"
          >
            Streetwear rooted in culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-brand-accent text-brand-bg font-display font-black text-sm tracking-brandwide uppercase px-10 py-4 hover:bg-white transition-colors duration-200"
              data-ocid="hero.primary_button"
            >
              EXPLORE <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-2">
              How We Serve You
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase tracking-tight">
              ALWAYS HERE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "24 / 7 SERVICE",
                desc: "We never close. Place your order any time of day or night — we're always open and ready to serve.",
              },
              {
                icon: Truck,
                title: "DELIVER ALL OVER PAKISTAN",
                desc: "From Karachi to Gilgit, we deliver nationwide. Every city, every corner of Pakistan.",
              },
              {
                icon: MapPin,
                title: "BASED IN PAKISTAN",
                desc: "A proudly local brand built for Pakistani streets. Rooted here, designed for you.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-surface border border-white/5 p-8 flex flex-col gap-4"
              >
                <Icon size={28} className="text-brand-accent" />
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                  {title}
                </h3>
                <p className="text-brand-muted font-body text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-brand-accent mx-auto mb-10" />
            <blockquote className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-snug tracking-tight">
              Tehzeeb Wear blends tradition with modern street culture.
              <span className="text-brand-accent">
                {" "}
                Designed for those who carry their roots with pride.
              </span>
            </blockquote>
            <div className="w-12 h-px bg-brand-accent mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section
        className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/lifestyle-streets.dim_1200x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white uppercase leading-none tracking-tight"
          >
            ROOTED IN CULTURE.
            <br />
            <span className="text-brand-accent">BUILT FOR THE STREETS.</span>
          </motion.h2>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-3">
              Stay Connected
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
              JOIN THE TEHZEEB COMMUNITY
            </h2>
            <p className="text-brand-muted font-body text-sm mb-10">
              Be first for drops, exclusive pieces, and culture stories.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-brand-surface2 border border-white/10 text-white placeholder-white/30 text-sm font-body px-5 py-4 outline-none focus:border-brand-accent transition-colors"
                data-ocid="newsletter.input"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="bg-brand-accent text-brand-bg font-display font-black text-xs tracking-brandwide uppercase px-8 py-4 hover:bg-white transition-colors disabled:opacity-60"
                data-ocid="newsletter.submit_button"
              >
                {subscribing ? "..." : "SUBSCRIBE"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
