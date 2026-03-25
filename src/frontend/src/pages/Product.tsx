import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { OrderDialog } from "../components/OrderDialog";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const DEFAULT_SIZES = ["M", "L", "XL"];

export function ProductPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const product = getProductById(Number(id));
  const { addToCart, setCartOpen } = useCart();
  const sizes = product?.sizes ?? DEFAULT_SIZES;
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

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
    setCartOpen(true);
  };

  const displayImage =
    showBack && product.backImage ? product.backImage : product.image;

  const singleItem = [{ product, size: selectedSize, quantity: qty }];

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
          >
            <div className="bg-zinc-900 aspect-[4/5] overflow-hidden">
              <img
                key={displayImage}
                src={displayImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>

            {/* Front/Back Toggle */}
            {product.backImage && (
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowBack(false)}
                  className={`text-xs font-display font-bold tracking-widest uppercase px-4 py-2 border transition-colors ${
                    !showBack
                      ? "border-brand-accent bg-brand-accent text-brand-bg"
                      : "border-white/20 text-white/50 hover:border-white hover:text-white"
                  }`}
                  data-ocid="product.toggle"
                >
                  FRONT
                </button>
                <button
                  type="button"
                  onClick={() => setShowBack(true)}
                  className={`text-xs font-display font-bold tracking-widest uppercase px-4 py-2 border transition-colors ${
                    showBack
                      ? "border-brand-accent bg-brand-accent text-brand-bg"
                      : "border-white/20 text-white/50 hover:border-white hover:text-white"
                  }`}
                  data-ocid="product.toggle"
                >
                  BACK
                </button>
              </div>
            )}
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

            {product.article && (
              <p className="text-brand-muted font-body text-xs uppercase tracking-brandxl mb-1">
                {product.article}
              </p>
            )}

            <h1 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <p className="text-2xl font-display font-bold text-brand-accent">
                PKR {product.price.toLocaleString()}
              </p>
              {product.originalPrice && (
                <p className="text-lg font-display font-bold text-white/40 line-through">
                  PKR {product.originalPrice.toLocaleString()}
                </p>
              )}
              {product.saleLabel && (
                <span className="bg-green-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1">
                  {product.saleLabel}
                </span>
              )}
            </div>

            <p className="text-brand-muted font-body text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-2">
                  Available Colors
                </p>
                <p className="text-brand-muted font-body text-sm">
                  {product.colors.join(" / ")}
                </p>
              </div>
            )}

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-3">
                Size
              </p>
              <div className="flex gap-2">
                {sizes.map((size) => (
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

            {/* Place Order */}
            <button
              type="button"
              onClick={() => setOrderOpen(true)}
              className="w-full bg-white text-brand-bg font-display font-black text-sm tracking-brandwide uppercase py-5 hover:bg-zinc-200 transition-colors mb-4"
              data-ocid="product.open_modal_button"
            >
              PLACE ORDER
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
              {product.deliveryTime && (
                <div>
                  <p className="text-xs font-body font-bold tracking-brandwide text-white/40 uppercase mb-1">
                    Delivery Time
                  </p>
                  <p className="text-brand-muted text-sm font-body">
                    {product.deliveryTime}
                  </p>
                </div>
              )}
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

      <OrderDialog
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        items={singleItem}
      />
    </main>
  );
}
