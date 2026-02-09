import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  "Salesforce",
  "Cloudsource",
  "Meta",
  "Turkcell",
  "Nutraxin",
  "Bioxin",
  "GNC Trkcll",
  "Funk Motorsport",
  "Karaca",
  "TMC3",
  "Global Medical Forum",
  "TED",
  "Cafer Erol",
  "Auntie Anne's",
  "Jeton Wallet",
  "Samsung",
  "FlatFlip",
  "London Fashion Week",
  "191 Automotive",
  "Bretz Furniture",
  "Cliniqua",
  "Akar Sprey",
  "Encanto",
  "Ruya London",
  "Fat Phill's Diner",
  "Yeni Rakı",
];

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id="companys"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
          Trusted By
        </p>
        <div className="flex items-center gap-3">
          <Link
            to="/cv"
            className="text-xs uppercase tracking-[0.15em] font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            View Full CV →
          </Link>
          <span className="w-px h-4 bg-border" />
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-20 transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-20 transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-px overflow-x-auto snap-x snap-mandatory pb-2 bg-border"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="flex-shrink-0 w-[140px] md:w-[160px] snap-start bg-background flex items-center justify-center p-4 md:p-6 min-h-[72px] md:min-h-[88px]"
          >
            <span className="text-[10px] md:text-xs font-light text-muted-foreground text-center uppercase tracking-wider leading-tight">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ClientLogos;
