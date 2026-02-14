import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const Photography = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-[60vh] flex flex-col items-center justify-center text-center"
        >
          <Camera className="w-8 h-8 text-muted-foreground/30 mb-6" strokeWidth={1} />
          <h1 className="text-xl md:text-2xl font-light tracking-wide text-foreground">
            Photography
          </h1>
          <p className="mt-3 text-sm font-light text-muted-foreground max-w-md leading-relaxed">
            A curated selection of photography work is coming soon. Stay tuned for editorial, event, and portrait photography.
          </p>
          <div className="mt-8 h-px w-16 bg-border" />
        </motion.section>

        <section id="contact"><Footer /></section>
      </div>
    </div>
  );
};

export default Photography;
