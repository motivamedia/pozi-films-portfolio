import { motion } from "framer-motion";
import { Mail, Phone, Globe, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border mt-20 md:mt-32 pt-8 pb-12"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
            Links
          </p>
          <div className="space-y-2">
            <a
              href="https://pozi.media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              pozi.media
            </a>
            <a
              href="https://vimeo.com/pozivisualart"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Vimeo Portfolio
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
            Based in
          </p>
          <p className="text-sm font-light text-foreground">
            London, UK
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} Pozi Poyraz Saroglu. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
