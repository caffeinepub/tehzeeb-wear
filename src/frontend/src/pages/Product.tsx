import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const SIZES = ["S", "M", "L", "XL"];

export function ProductPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-bg pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-black text-4xl text-white uppercase mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="text-brand-accent underline font-body">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = async () => {
    setAdding(true);
    await new Promise((r) => setTimeout(r, 400));
    addToCart(product, selectedSize, qty);
    setAdding(false);
    toast.success(`${product.name} added to cart.`);
  };

  return (
    <main className="min-h-screen bg-brand-bg pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-brand-muted hover:text-white text-xs font-body tracking-wider uppercase mb-10 transition-colors"
          data-ocid="product.link"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-brand-green aspect-[4/5] overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-start"
          >
            <div className="flex gap-2 mb-4">
              {product.limitedDrop && (
                <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5">
                  🔥 LIMITED DROP
                </span>
              )}
              {product.stock <= 5 && (
                <span className="text-red-400 text-xs font-body">
                  Only {product.stock} left
                </span>
              )}
            </div>

            <h1 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-display font-bold text-brand-accent mb-8">
              PKR {product.price.toLocaleString()}
            </p>

            <p className="text-brand-muted font-body text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-3">
                Size
              </p>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-sm font-display font-bold uppercase tracking-wide border transition-colors ${
                      selectedSize === size
                        ? "border-brand-accent bg-brand-accent text-brand-bg"
                        : "border-white/20 text-white/60 hover:border-white hover:text-white"
                    }`}
                    data-ocid="product.select"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-white/20 w-fit">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-white/60 hover:text-white transition-colors"
                  data-ocid="product.button"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 py-3 text-white font-display font-bold text-sm min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-white/60 hover:text-white transition-colors"
                  data-ocid="product.button"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={adding}
              className="w-full bg-brand-accent text-brand-bg font-display font-black text-sm tracking-brandwide uppercase py-5 hover:bg-white transition-colors disabled:opacity-60 mb-4"
              data-ocid="product.primary_button"
            >
              {adding ? "ADDING..." : "ADD TO CART"}
            </button>

            {/* Product Details */}
            <div className="border-t border-white/10 pt-8 mt-4 space-y-4">
              <div>
                <p className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-1">
                  Fabric
                </p>
                <p className="text-brand-muted text-sm font-body">
                  {product.fabric}
                </p>
              </div>
              <div>
                <p className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-1">
                  Fit
                </p>
                <p className="text-brand-muted text-sm font-body">
                  {product.fit}
                </p>
              </div>
              <div>
                <p className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-1">
                  Design Meaning
                </p>
                <p className="text-brand-muted text-sm font-body leading-relaxed">
                  {product.designMeaning}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
