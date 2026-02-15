import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = "57729a27-3e0a-479c-b251-66c8f9295a59";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${formData.name} — pozi.media`,
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border mt-20 md:mt-32 pt-10 pb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Contact Form */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-6">
            Get in Touch
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300"
              />
            </div>
            <textarea
              placeholder="Your message..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-light rounded-full border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && (
                <>
                  Sent <CheckCircle className="w-3 h-3" />
                </>
              )}
              {status === "error" && "Failed — try again"}
              {status === "idle" && (
                <>
                  Send Message <Send className="w-3 h-3" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:info@pozi.media"
                  className="flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@pozi.media
                </a>
                <a
                  href="tel:+4407810020163"
                  className="flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +44 078 100 201 63
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                Based in
              </p>
              <p className="text-sm font-light text-foreground">
                London, UK
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground font-light">
          &copy; {new Date().getFullYear()} Pozi Poyraz Saroglu. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
