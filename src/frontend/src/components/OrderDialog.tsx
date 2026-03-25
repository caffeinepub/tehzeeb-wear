import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { CartItem } from "../context/CartContext";

type PaymentMethod = "cod" | "online" | "";

interface OrderForm {
  name: string;
  address: string;
  phone: string;
  payment: PaymentMethod;
  notes: string;
}

const emptyForm: OrderForm = {
  name: "",
  address: "",
  phone: "",
  payment: "",
  notes: "",
};

interface OrderDialogProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onSuccess?: () => void;
}

export function OrderDialog({
  open,
  onClose,
  items,
  onSuccess,
}: OrderDialogProps) {
  const [form, setForm] = useState<OrderForm>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.payment) e.payment = "Please select a payment method";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const itemLines = items
      .map(
        (i) =>
          `- ${i.product.name} | Size: ${i.size} | Qty: ${i.quantity} | PKR ${(i.product.price * i.quantity).toLocaleString()}`,
      )
      .join("%0A");

    const paymentLabel =
      form.payment === "cod"
        ? "Cash on Delivery"
        : "Online Payment (Easypaisa)";

    const txLine =
      form.payment === "online" && form.notes.trim()
        ? `%0ATransaction ID: ${form.notes.trim()}`
        : "";

    const message = `🛍️ NEW ORDER — Tehzeeb Wear%0A%0AItems:%0A${itemLines}%0A%0ATotal: PKR ${totalPrice.toLocaleString()}%0A%0ACustomer: ${form.name.trim()}%0APhone: ${form.phone.trim()}%0AAddress: ${form.address.trim()}%0APayment: ${paymentLabel}${txLine}`;

    window.open(`https://wa.me/923282036608?text=${message}`, "_blank");

    toast.success(
      `Order placed! We'll contact you at ${form.phone} to confirm.`,
    );
    setForm(emptyForm);
    setErrors({});
    onSuccess?.();
    onClose();
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="bg-zinc-950 border border-white/10 text-white max-w-lg w-full max-h-[90vh] overflow-y-auto"
        data-ocid="order.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display font-black text-xl uppercase tracking-wider text-white">
            Place Your Order
          </DialogTitle>
          {items.length === 1 && (
            <p className="text-brand-muted font-body text-xs mt-1">
              {items[0].product.name} — Size: {items[0].size} — Qty:{" "}
              {items[0].quantity} — PKR{" "}
              {(items[0].product.price * items[0].quantity).toLocaleString()}
            </p>
          )}
          {items.length > 1 && (
            <p className="text-brand-muted font-body text-xs mt-1">
              {items.length} items — Total: PKR {totalPrice.toLocaleString()}
            </p>
          )}
        </DialogHeader>

        <div className="space-y-5 mt-2">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label
              htmlFor="order-name"
              className="text-xs font-display font-bold uppercase tracking-brandwide text-white/60"
            >
              Full Name
            </Label>
            <Input
              id="order-name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="bg-zinc-900 border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent font-body"
              data-ocid="order.input"
            />
            {errors.name && (
              <p
                className="text-red-400 text-xs font-body"
                data-ocid="order.error_state"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Delivery Address */}
          <div className="space-y-1.5">
            <Label
              htmlFor="order-address"
              className="text-xs font-display font-bold uppercase tracking-brandwide text-white/60"
            >
              Delivery Address
            </Label>
            <Textarea
              id="order-address"
              placeholder="House/Flat no., Street, City, Province"
              value={form.address}
              onChange={(e) =>
                setForm((f) => ({ ...f, address: e.target.value }))
              }
              rows={3}
              className="bg-zinc-900 border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent font-body resize-none"
              data-ocid="order.textarea"
            />
            {errors.address && (
              <p
                className="text-red-400 text-xs font-body"
                data-ocid="order.error_state"
              >
                {errors.address}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <Label
              htmlFor="order-phone"
              className="text-xs font-display font-bold uppercase tracking-brandwide text-white/60"
            >
              Phone Number
            </Label>
            <Input
              id="order-phone"
              placeholder="03XX-XXXXXXX"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              className="bg-zinc-900 border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent font-body"
              data-ocid="order.input"
            />
            {errors.phone && (
              <p
                className="text-red-400 text-xs font-body"
                data-ocid="order.error_state"
              >
                {errors.phone}
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label className="text-xs font-display font-bold uppercase tracking-brandwide text-white/60">
              Payment Method
            </Label>
            <RadioGroup
              value={form.payment}
              onValueChange={(val) =>
                setForm((f) => ({ ...f, payment: val as PaymentMethod }))
              }
              className="space-y-2"
              data-ocid="order.radio"
            >
              <div className="flex items-center gap-3 border border-white/10 px-4 py-3 hover:border-white/30 transition-colors cursor-pointer">
                <RadioGroupItem
                  value="cod"
                  id="payment-cod"
                  className="border-white/40 text-brand-accent"
                />
                <Label
                  htmlFor="payment-cod"
                  className="font-body text-sm text-white cursor-pointer flex-1"
                >
                  Cash on Delivery
                </Label>
              </div>
              <div className="flex items-center gap-3 border border-white/10 px-4 py-3 hover:border-white/30 transition-colors cursor-pointer">
                <RadioGroupItem
                  value="online"
                  id="payment-online"
                  className="border-white/40 text-brand-accent"
                />
                <Label
                  htmlFor="payment-online"
                  className="font-body text-sm text-white cursor-pointer flex-1"
                >
                  Online Payment
                  <span className="block text-xs text-brand-accent/80 mt-0.5">
                    Easypaisa: 03312286098
                  </span>
                </Label>
              </div>
            </RadioGroup>
            {errors.payment && (
              <p
                className="text-red-400 text-xs font-body"
                data-ocid="order.error_state"
              >
                {errors.payment}
              </p>
            )}
          </div>

          {/* Online Payment Note */}
          {form.payment === "online" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-900 border border-brand-accent/30 px-4 py-3 text-sm font-body text-brand-muted leading-relaxed"
            >
              Please send payment to Easypaisa:{" "}
              <strong className="text-white">03312286098</strong> and attach
              your transaction screenshot or ID in the notes below.
            </motion.div>
          )}

          {/* Notes / Transaction ID */}
          {form.payment === "online" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1.5"
            >
              <Label
                htmlFor="order-notes"
                className="text-xs font-display font-bold uppercase tracking-brandwide text-white/60"
              >
                Transaction ID / Notes
              </Label>
              <Textarea
                id="order-notes"
                placeholder="Paste your Easypaisa transaction ID here"
                value={form.notes}
                onChange={(e) =>
                  setForm((f) => ({ ...f, notes: e.target.value }))
                }
                rows={3}
                className="bg-zinc-900 border-white/10 text-white placeholder:text-white/30 focus:border-brand-accent font-body resize-none"
                data-ocid="order.textarea"
              />
            </motion.div>
          )}

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-white/20 text-white/60 hover:text-white hover:bg-white/5 font-display font-bold uppercase tracking-wide text-xs"
              data-ocid="order.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-white text-brand-bg hover:bg-zinc-200 font-display font-black uppercase tracking-wide text-xs"
              data-ocid="order.submit_button"
            >
              Confirm Order
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
