import { motion } from "framer-motion";
import { useState } from "react";

const INSTAGRAM_USERNAME = "pozi.tv";

const InstagramFeed = () => {
  const [interacting, setInteracting] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
            Latest on Instagram
          </p>
          <motion.span
            className="text-muted-foreground/40 text-xs tracking-wider"
            animate={{ x: [0, 6, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ← swipe →
          </motion.span>
        </div>
        <a
          href={`https://www.instagram.com/${INSTAGRAM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.15em] font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          @{INSTAGRAM_USERNAME} →
        </a>
      </div>

      <div className="relative rounded-sm overflow-hidden">
        <div
          className="overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="w-[900px] md:w-full">
            <iframe
              src={`https://www.instagram.com/${INSTAGRAM_USERNAME}/embed`}
              className="w-full border-0"
              style={{ height: "280px" }}
              title="Instagram Feed"
            />
          </div>
        </div>
        {!interacting && (
          <div
            className="absolute inset-0 z-10 md:hidden"
            onClick={() => setInteracting(true)}
          />
        )}
      </div>
      {!interacting && (
        <p className="text-[10px] text-muted-foreground/40 mt-2 text-center md:hidden">
          Tap to interact with Instagram
        </p>
      )}
    </motion.section>
  );
};

export default InstagramFeed;
