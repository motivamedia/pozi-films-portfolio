import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { clientBrands } from "@/data/clients";

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
            Clients
          </p>
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
            Trusted By
          </h1>
          <p className="text-sm font-light text-muted-foreground max-w-lg mb-12">
            A selection of brands, artists, and organizations Pozi has collaborated with across commercial, music, fashion, and documentary work.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
            {clientBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-sm border border-transparent hover:border-border transition-all duration-300 group"
              >
                <div className="h-10 flex items-center justify-center grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`${brand.size || "h-8"} w-auto object-contain ${brand.invert ? "invert" : ""}`}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.1em] font-light text-muted-foreground/50 group-hover:text-muted-foreground transition-colors duration-300 text-center">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section id="contact"><Footer /></section>
      </div>
    </div>
  );
};

export default Clients;
