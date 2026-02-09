import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
}

interface PortfolioCategoryData {
  title: string;
  videos: VideoItem[];
}

// Placeholder video IDs — replace with real ones from your YouTube playlists
const portfolioData: PortfolioCategoryData[] = [
  {
    title: "Commercial",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Turkcell Campaign" },
      { id: "dQw4w9WgXcQ", title: "Samsung Promo" },
      { id: "dQw4w9WgXcQ", title: "Salesforce Brand Film" },
      { id: "dQw4w9WgXcQ", title: "Meta Campaign" },
      { id: "dQw4w9WgXcQ", title: "Karaca Commercial" },
      { id: "dQw4w9WgXcQ", title: "Nutraxin Ad" },
      { id: "dQw4w9WgXcQ", title: "Bioxin Spot" },
      { id: "dQw4w9WgXcQ", title: "Jeton Wallet" },
      { id: "dQw4w9WgXcQ", title: "Cliniqua" },
      { id: "dQw4w9WgXcQ", title: "GNC Campaign" },
    ],
  },
  {
    title: "Music Videos",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Music Video 1" },
      { id: "dQw4w9WgXcQ", title: "Music Video 2" },
      { id: "dQw4w9WgXcQ", title: "Music Video 3" },
      { id: "dQw4w9WgXcQ", title: "Music Video 4" },
      { id: "dQw4w9WgXcQ", title: "Music Video 5" },
      { id: "dQw4w9WgXcQ", title: "Music Video 6" },
      { id: "dQw4w9WgXcQ", title: "Music Video 7" },
      { id: "dQw4w9WgXcQ", title: "Music Video 8" },
      { id: "dQw4w9WgXcQ", title: "Music Video 9" },
      { id: "dQw4w9WgXcQ", title: "Music Video 10" },
    ],
  },
  {
    title: "Fashion",
    videos: [
      { id: "dQw4w9WgXcQ", title: "London Fashion Week" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 2" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 3" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 4" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 5" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 6" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 7" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 8" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 9" },
      { id: "dQw4w9WgXcQ", title: "Fashion Film 10" },
    ],
  },
  {
    title: "Documentary",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Amazon Documentary" },
      { id: "dQw4w9WgXcQ", title: "Sustainable Living" },
      { id: "dQw4w9WgXcQ", title: "Documentary 3" },
      { id: "dQw4w9WgXcQ", title: "Documentary 4" },
      { id: "dQw4w9WgXcQ", title: "Documentary 5" },
      { id: "dQw4w9WgXcQ", title: "Documentary 6" },
      { id: "dQw4w9WgXcQ", title: "Documentary 7" },
      { id: "dQw4w9WgXcQ", title: "Documentary 8" },
      { id: "dQw4w9WgXcQ", title: "Documentary 9" },
      { id: "dQw4w9WgXcQ", title: "Documentary 10" },
    ],
  },
  {
    title: "Multicam Events",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Concert 1" },
      { id: "dQw4w9WgXcQ", title: "Live Event 2" },
      { id: "dQw4w9WgXcQ", title: "Conference 3" },
      { id: "dQw4w9WgXcQ", title: "Gala Event 4" },
      { id: "dQw4w9WgXcQ", title: "Event 5" },
      { id: "dQw4w9WgXcQ", title: "Event 6" },
      { id: "dQw4w9WgXcQ", title: "Event 7" },
      { id: "dQw4w9WgXcQ", title: "Event 8" },
      { id: "dQw4w9WgXcQ", title: "Event 9" },
      { id: "dQw4w9WgXcQ", title: "Event 10" },
    ],
  },
  {
    title: "Food & Travel",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Gourmet London" },
      { id: "dQw4w9WgXcQ", title: "Travel Series 1" },
      { id: "dQw4w9WgXcQ", title: "Food Program 2" },
      { id: "dQw4w9WgXcQ", title: "Travel Film 3" },
      { id: "dQw4w9WgXcQ", title: "Food Film 4" },
      { id: "dQw4w9WgXcQ", title: "Travel Film 5" },
      { id: "dQw4w9WgXcQ", title: "Food Film 6" },
      { id: "dQw4w9WgXcQ", title: "Travel Film 7" },
      { id: "dQw4w9WgXcQ", title: "Food Film 8" },
      { id: "dQw4w9WgXcQ", title: "Travel Film 9" },
    ],
  },
];

const VideoCarousel = ({ category }: { category: PortfolioCategoryData }) => {
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
    <div className="mb-12 md:mb-16">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-light tracking-wide uppercase text-foreground">
          {category.title}
        </h3>
        <div className="flex items-center gap-2">
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
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.videos.map((video, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] md:w-[320px] snap-start"
          >
            <div className="aspect-video bg-secondary rounded-sm overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs font-light text-muted-foreground truncate">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-8">
        Portfolio
      </p>

      {portfolioData.map((category) => (
        <VideoCarousel key={category.title} category={category} />
      ))}
    </motion.section>
  );
};

export default PortfolioSection;
