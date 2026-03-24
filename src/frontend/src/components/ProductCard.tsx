import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, "M");
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-brand-surface flex flex-col overflow-hidden"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.limitedDrop && (
          <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5">
            🔥 LIMITED DROP
          </span>
        )}
      </div>

      {/* Image */}
      <Link
        to="/product/$id"
        params={{ id: String(product.id) }}
        className="block overflow-hidden"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-green">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="border border-white text-white text-xs font-display font-bold tracking-brandwide uppercase px-5 py-2.5">
              QUICK VIEW
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-display font-bold text-sm tracking-wider text-white uppercase leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-brand-muted text-sm font-body">
            PKR {product.price.toLocaleString()}
          </span>
          {product.stock <= 5 && (
            <span className="text-red-400 text-xs font-body">
              Only {product.stock} left
            </span>
          )}
        </div>
      </div>

      {/* Add to Cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="w-full bg-brand-accent text-brand-bg text-xs font-display font-black tracking-brandwide uppercase py-3 hover:bg-white transition-colors duration-200 mt-auto"
        data-ocid={`products.item.${index + 1}`}
      >
        {added ? "✓ ADDED" : "ADD TO CART"}
      </button>
    </motion.div>
  );
}
