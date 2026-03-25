import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { OrderDialog } from "./OrderDialog";

export function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    cartOpen,
    setCartOpen,
    clearCart,
  } = useCart();
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent
          side="right"
          className="bg-zinc-950 border-l border-white/10 text-white w-full sm:max-w-md flex flex-col p-0"
          data-ocid="cart.sheet"
        >
          <SheetHeader className="px-6 py-5 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center justify-between">
              <SheetTitle className="font-display font-black text-lg uppercase tracking-wider text-white">
                Your Cart
              </SheetTitle>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close cart"
                data-ocid="cart.close_button"
              >
                <X size={18} />
              </button>
            </div>
          </SheetHeader>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center"
                data-ocid="cart.empty_state"
              >
                <ShoppingBag size={40} className="text-white/20" />
                <p className="font-display font-bold text-white/40 uppercase tracking-wider text-sm">
                  Your cart is empty
                </p>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="text-xs font-body text-brand-accent hover:underline"
                  data-ocid="cart.link"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5" data-ocid="cart.list">
                {items.map((item, index) => (
                  <li
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 border-b border-white/5 pb-5"
                    data-ocid={`cart.item.${index + 1}`}
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-zinc-900 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display font-bold text-xs uppercase tracking-wider text-white leading-tight">
                            {item.product.name}
                          </p>
                          <p className="text-white/40 font-body text-[11px] mt-0.5 uppercase tracking-wide">
                            Size {item.size}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.product.id, item.size)
                          }
                          className="text-white/30 hover:text-red-400 transition-colors flex-shrink-0 mt-0.5"
                          aria-label="Remove item"
                          data-ocid={`cart.delete_button.${index + 1}`}
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-white/15">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1,
                              )
                            }
                            className="px-2.5 py-1.5 text-white/50 hover:text-white transition-colors"
                            data-ocid={`cart.button.${index + 1}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 py-1.5 text-white font-display font-bold text-xs min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1,
                              )
                            }
                            className="px-2.5 py-1.5 text-white/50 hover:text-white transition-colors"
                            data-ocid={`cart.button.${index + 1}`}
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Line total */}
                        <p className="font-display font-bold text-sm text-brand-accent">
                          PKR{" "}
                          {(
                            item.product.price * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-white/10 flex-shrink-0 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-white/60 uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-display font-black text-lg text-white">
                  PKR {totalPrice.toLocaleString()}
                </span>
              </div>
              <Button
                type="button"
                onClick={() => setOrderOpen(true)}
                className="w-full bg-brand-accent text-brand-bg hover:bg-white font-display font-black uppercase tracking-wide text-xs py-5 h-auto"
                data-ocid="cart.primary_button"
              >
                Place Order
              </Button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full text-xs font-body text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider"
                data-ocid="cart.delete_button"
              >
                Clear Cart
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <OrderDialog
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        items={items}
        onSuccess={() => {
          clearCart();
          setCartOpen(false);
        }}
      />
    </>
  );
}
