import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
}

interface PortfolioCategoryData {
  title: string;
  playlistUrl: string;
  videos: VideoItem[];
}

// Placeholder video IDs — replace with real ones from your YouTube playlists
const portfolioData: PortfolioCategoryData[] = [
  {
    title: "Commercial",
    playlistUrl: "https://www.youtube.com/@pozimedia",
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
    playlistUrl: "https://www.youtube.com/playlist?list=PLlWLRj4G9HmjjY1LbT3_ykSDSu1nFh5LR",
    videos: [
      { id: "BMYk9Q0Wrqs", title: "Büsra Aydogdu | Kıyamadım | 4K" },
      { id: "hmS4RZ9hnwA", title: "Emre Manzel | Bitmez Keder | 4K" },
      { id: "RH7hK_e0RCo", title: "Burcu Arı & Genco Arı | Küçüğüm | 4K" },
      { id: "9zE50ZFEDIc", title: "Charles Pam | Rolling Again | 4K" },
      { id: "utBCXAEIqUo", title: "Cigdem Aslan | Music Video 4K | 2022" },
      { id: "zN3mrdfg3OM", title: "Dewale | Music Video | 4K" },
      { id: "diJZgOuRybY", title: "MEHMET USLU | Music Video | 2023" },
      { id: "ZjbapVRWjbU", title: "Music Video | ANLASANA" },
      { id: "YGGTYsTMVq0", title: "De'wale | MAMA IJO FOR AFRICA | 4K" },
    ],
  },
  {
    title: "Fashion",
    playlistUrl: "https://www.youtube.com/@pozimedia",
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
    playlistUrl: "https://www.youtube.com/@pozimedia",
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
    playlistUrl: "https://www.youtube.com/@pozimedia",
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
    playlistUrl: "https://www.youtube.com/@pozimedia",
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

const VideoThumbnail = ({ video }: { video: VideoItem }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="flex-shrink-0 w-[260px] md:w-[320px] snap-start">
        <div className="aspect-video bg-secondary rounded-sm overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        </div>
        <p className="mt-2 text-xs font-light text-muted-foreground truncate">
          {video.title}
        </p>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-[260px] md:w-[320px] snap-start">
      <div
        className="aspect-video bg-secondary rounded-sm overflow-hidden relative cursor-pointer group"
        onClick={() => setPlaying(true)}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-4 h-4 text-black fill-black ml-0.5" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs font-light text-muted-foreground truncate">
        {video.title}
      </p>
    </div>
  );
};

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
        <div className="flex items-center gap-3">
          <h3 className="text-lg md:text-xl font-light tracking-wide uppercase text-foreground">
            {category.title}
          </h3>
          <a
            href={category.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.15em] font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            View All →
          </a>
        </div>
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
          <VideoThumbnail key={i} video={video} />
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
