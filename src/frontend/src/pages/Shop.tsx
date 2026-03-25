import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { products } from "../data/products";

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [hovered, setHovered] = useState(false);
  const showBack = hovered && !!product.backImage;

  return (
    <Link
      to="/product/$id"
      params={{ id: String(product.id) }}
      className="group block"
      data-ocid={`shop.item.${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showBack ? "opacity-0" : "opacity-100"
          }`}
        />
        {product.backImage && (
          <img
            src={product.backImage}
            alt={`${product.name} – Back`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              showBack ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="bg-brand-accent text-brand-bg font-display font-black text-xs tracking-brandxl uppercase px-5 py-2">
            VIEW PRODUCT
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-body text-sm text-white/60 mb-1">{product.name}</p>
        <div className="flex items-center gap-3">
          <p className="font-display font-bold text-brand-accent text-base">
            PKR {product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="font-body text-sm text-white/40 line-through">
              PKR {product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ShopPage() {
  const tees = products.filter((p) => p.category === "tee");
  const bottoms = products.filter((p) => p.category === "bottom");

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

        {/* Tees Section */}
        {tees.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest">
                TEES
              </h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tees.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Bottom Wear Section */}
        {bottoms.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest">
                BOTTOM WEAR
              </h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bottoms.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footer info */}
        <div className="flex flex-col items-center gap-3 pt-10 border-t border-white/10">
          <span className="text-brand-accent text-xs font-body font-bold tracking-brandxl uppercase">
            Delivery across all of Pakistan
          </span>
          <span className="text-brand-muted text-xs font-body">
            Order online anytime — we’re open 24/7
          </span>
        </div>
      </div>
    </main>
  );
}
