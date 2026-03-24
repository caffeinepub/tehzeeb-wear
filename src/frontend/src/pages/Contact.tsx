import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent. We'll get back to you within 24 hours.");
  };

  return (
    <main className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-brand-accent text-xs font-body font-semibold tracking-brandxl uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display font-black text-6xl md:text-7xl text-white uppercase tracking-tight">
            CONTACT US
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-brand-surface border border-white/10 text-white placeholder-white/25 text-sm font-body px-5 py-4 outline-none focus:border-brand-accent transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-brand-surface border border-white/10 text-white placeholder-white/25 text-sm font-body px-5 py-4 outline-none focus:border-brand-accent transition-colors"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-body font-bold tracking-brandwide text-white/50 uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your message..."
                  className="w-full bg-brand-surface border border-white/10 text-white placeholder-white/25 text-sm font-body px-5 py-4 outline-none focus:border-brand-accent transition-colors resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-accent text-brand-bg font-display font-black text-sm tracking-brandwide uppercase py-4 hover:bg-white transition-colors disabled:opacity-60"
                data-ocid="contact.submit_button"
              >
                {submitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="mb-4">
              <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-3">
                Reach Us
              </h3>
              <p className="text-brand-muted text-sm font-body leading-relaxed">
                We're always available. Reach out any time — day or night.
              </p>
            </div>

            {/* Store Hours */}
            <div className="bg-brand-surface border border-brand-accent/30 p-5 flex items-start gap-4">
              <Clock size={20} className="text-brand-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-brand-accent text-xs font-body font-bold tracking-brandwide uppercase mb-1">
                  Store Hours
                </p>
                <p className="text-white font-display font-black text-lg uppercase">
                  24 / 7 — Always Open
                </p>
                <p className="text-brand-muted text-xs font-body mt-1">
                  Every day, any time
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-brand-surface border border-white/5 p-5 flex items-start gap-4">
              <Truck size={20} className="text-brand-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-brand-accent text-xs font-body font-bold tracking-brandwide uppercase mb-1">
                  Delivery
                </p>
                <p className="text-white font-display font-black text-lg uppercase">
                  All Over Pakistan
                </p>
                <p className="text-brand-muted text-xs font-body mt-1">
                  Nationwide shipping — every city
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-brand-surface border border-white/5 p-5 flex items-start gap-4">
              <MapPin size={20} className="text-brand-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-brand-accent text-xs font-body font-bold tracking-brandwide uppercase mb-1">
                  Based In
                </p>
                <p className="text-white font-display font-black text-lg uppercase">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <a
              href="https://instagram.com/tehzeebwears_pk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-brand-surface border border-white/5 px-5 py-4 hover:border-brand-accent transition-colors group"
              data-ocid="contact.link"
            >
              <Instagram size={20} className="text-brand-accent" />
              <div>
                <p className="text-white text-xs font-display font-bold uppercase tracking-wider">
                  Instagram
                </p>
                <p className="text-brand-muted text-sm font-body">
                  @tehzeebwears_pk
                </p>
              </div>
            </a>

            <a
              href="tel:03282036608"
              className="flex items-center gap-4 bg-brand-surface border border-white/5 px-5 py-4 hover:border-brand-accent transition-colors group"
              data-ocid="contact.link"
            >
              <Phone size={20} className="text-brand-accent" />
              <div>
                <p className="text-white text-xs font-display font-bold uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-brand-muted text-sm font-body">
                  0328-2036608
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/923282036608?text=Hi, I have a question about Tehzeeb Wear."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-brand-surface border border-white/5 px-5 py-4 hover:border-green-500 transition-colors group"
              data-ocid="contact.button"
            >
              <MessageCircle size={20} className="text-green-400" />
              <div>
                <p className="text-white text-xs font-display font-bold uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-brand-muted text-sm font-body">
                  0328-2036608
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
