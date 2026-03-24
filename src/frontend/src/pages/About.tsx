import { motion } from "motion/react";

export function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-4">
            Est. 2024 — Karachi, Pakistan
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight">
            OUR
            <br />
            <span className="text-brand-accent">STORY</span>
          </h1>
        </motion.div>

        {/* Main story */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-white text-lg md:text-xl font-body font-light leading-relaxed">
              Tehzeeb Wear was created to bring Pakistani culture into modern
              streetwear. Every piece tells a story of roots, identity, and
              expression.
            </p>
            <p className="text-brand-muted text-base font-body leading-relaxed">
              We grew up at a crossroads — the call to prayer echoing in
              bazaars, skateboards grinding on broken pavements, Urdu poetry
              scratched into notebook margins beside English lyrics. Our
              generation doesn't choose between tradition and modernity. We
              carry both.
            </p>
            <p className="text-brand-muted text-base font-body leading-relaxed">
              Tehzeeb — the Urdu word for culture, refinement, and manners —
              isn't just a name. It's a declaration. A reminder that your roots
              are not a burden but a foundation.
            </p>
            <p className="text-brand-muted text-base font-body leading-relaxed">
              Every stitch, every fabric choice, every silhouette is deliberate.
              We're not borrowing aesthetics from the West. We're building
              something entirely ours — made in our streets, worn in our lanes,
              representing our people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              {
                label: "Culture",
                text: "We draw from centuries of South Asian artistic tradition — calligraphy, textile craft, architectural geometry.",
              },
              {
                label: "Identity",
                text: "Clothing is language. What you wear speaks before you do. We want it to speak with pride.",
              },
              {
                label: "Youth",
                text: "This is for the generation building something new while honoring what came before.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="border-l-2 border-brand-accent pl-5"
              >
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-1">
                  {item.label}
                </h3>
                <p className="text-brand-muted text-sm font-body leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-surface border border-white/5 p-10 md:p-16 text-center"
        >
          <div className="w-8 h-px bg-brand-accent mx-auto mb-8" />
          <blockquote className="font-display font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-tight">
            "Inspired by traditional Tehzeeb,
            <span className="text-brand-accent">
              {" "}
              redefined for modern streetwear."
            </span>
          </blockquote>
          <div className="w-8 h-px bg-brand-accent mx-auto mt-8" />
        </motion.div>
      </div>
    </main>
  );
}
