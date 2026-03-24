import { Package } from "lucide-react";
import { motion } from "motion/react";

export function ShopPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-2">
            Roots Vol. 1
          </p>
          <h1 className="font-display font-black text-6xl md:text-7xl text-white uppercase tracking-tight">
            SHOP ALL
          </h1>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-32 text-center"
        >
          <Package size={48} className="text-brand-accent mb-6 opacity-60" />
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            NEW DROP COMING SOON
          </h2>
          <p className="text-brand-muted font-body text-base max-w-md">
            Our next collection is being prepared. Stay tuned — big things are
            on the way.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="text-brand-accent text-xs font-body font-bold tracking-brandxl uppercase">
              Delivery across all of Pakistan
            </span>
            <span className="text-brand-muted text-xs font-body">
              Order online anytime — we're open 24/7
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
