import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import thumbEkaterina from "@/assets/thumbnails/Ekaterina_Shelehova_Dancing.jpg";
import thumbMamaIjo from "@/assets/thumbnails/Dewale_Mama_Ijo.jpg";
import thumbCharles from "@/assets/thumbnails/Charles_Pam_Rolling_Again.jpg";
import thumbElvanLess from "@/assets/thumbnails/Elvan_Kizilay_Less_Is_More.jpg";
import thumbDewale from "@/assets/thumbnails/Dewale_Music_Video.jpg";
import thumbElvanReq from "@/assets/thumbnails/Elvan_Kizilay_Requiem.jpg";
import thumbYak from "@/assets/thumbnails/Muharrem_Ozturk_Yak.jpg";
import thumbNefessiz from "@/assets/thumbnails/Umut_Baysal_Nefessiz.jpg";
import thumbAskBulur from "@/assets/thumbnails/Umut_Baysal_Ask_Bulur.jpg";
import thumbUnutuverdim from "@/assets/thumbnails/Muharrem_Ozturk_Unutuverdim.jpg";
import thumbDidor from "@/assets/thumbnails/Didor.jpg";
import thumbSelvi from "@/assets/thumbnails/Selvi_Yolculuk.jpg";
import thumbGuvDoor from "@/assets/thumbnails/The_Guv_Door.jpg";
import thumbBusra from "@/assets/thumbnails/Busra_Aydogdu_Kiyamadim.jpg";
import thumbEmre from "@/assets/thumbnails/Emre_Manzel_Bitmez_Keder.jpg";
import thumbBurcu from "@/assets/thumbnails/Burcu_Ari_Genco_Ari_Kucugum.jpg";
import thumbCigdem from "@/assets/thumbnails/Cigdem_Aslan_Music_Video.jpg";
import thumbMehmet from "@/assets/thumbnails/Mehmet_Uslu_Music_Video.jpg";
import thumbAnlasana from "@/assets/thumbnails/Anlasana.jpg";

// Commercial thumbnails
import thumbCaglaNutraxin from "@/assets/thumbnails/Cagla_Sikel_Nutraxin_Collagen.jpg";
import thumbLondonAktuel from "@/assets/thumbnails/London_Aktuel_TV_Teaser.jpg";
import thumbTGRSocks from "@/assets/thumbnails/TGR_Socks_London.jpg";
import thumbBonmonkee from "@/assets/thumbnails/Bonmonkee_Dog_Rain_Cover.jpg";
import thumbKaracaOscar from "@/assets/thumbnails/Karaca_Oscar_Wolfgang_Puck.jpg";
import thumbBarrus1 from "@/assets/thumbnails/Barrus_2025_1.jpg";
import thumbEnisOrzax from "@/assets/thumbnails/Enis_Arikan_Orzax_Collagen.jpg";
import thumbEnisAkar from "@/assets/thumbnails/Enis_Arikan_Akar_Sprey.jpg";
import thumbBarrus2 from "@/assets/thumbnails/Barrus_2025_2.jpg";
import thumbBioxcinBTS from "@/assets/thumbnails/Bioxcin_Micellar_BTS.jpg";
import thumbKaracaCannes from "@/assets/thumbnails/Karaca_Cannes_Film_Festival.jpg";
import thumbBioxcinSera from "@/assets/thumbnails/Bioxcin_Sera_Tokdemir.jpg";

interface VideoItem {
  id: string;
  title: string;
  thumbnail?: string;
}

interface PortfolioCategoryData {
  title: string;
  playlistUrl: string;
  videos: VideoItem[];
}

const portfolioData: PortfolioCategoryData[] = [
  {
    title: "Commercial",
    playlistUrl: "https://www.youtube.com/playlist?list=PLlWLRj4G9HmgwCQ89rdjd8XV2HjB5NZ5p",
    videos: [
      { id: "-Edd04FD75Q", title: "Cagla Sikel — Nutraxin Collagen", thumbnail: thumbCaglaNutraxin },
      { id: "S0YpE6h4d8A", title: "London Aktuel TV Program Teaser", thumbnail: thumbLondonAktuel },
      { id: "GDSrTlsrepg", title: "TGR Socks — London", thumbnail: thumbTGRSocks },
      { id: "IUXXsV4E9Vk", title: "Bonmonkee — Dog Rain Cover", thumbnail: thumbBonmonkee },
      { id: "mv-mNEnh4rU", title: "Karaca Oscar — Wolfgang Puck", thumbnail: thumbKaracaOscar },
      { id: "1HdWWpdzifA", title: "Barrus 2025 | 1", thumbnail: thumbBarrus1 },
      { id: "z9GKvS7mCHc", title: "Enis Arıkan — Orzax Collagen", thumbnail: thumbEnisOrzax },
      { id: "zQ8zgI4e8bQ", title: "Enis Arıkan — Akar Sprey", thumbnail: thumbEnisAkar },
      { id: "XsB4gbj7j58", title: "Barrus 2025 | 2", thumbnail: thumbBarrus2 },
      { id: "atT4WrkGvcQ", title: "Bioxcin Micellar — BTS", thumbnail: thumbBioxcinBTS },
      { id: "isoXjVrqZ9k", title: "Karaca — Cannes Film Festival", thumbnail: thumbKaracaCannes },
      { id: "m8Ww36XSSkc", title: "Bioxcin — Sera Tokdemir", thumbnail: thumbBioxcinSera },
    ],
  },
  {
    title: "Music Videos",
    playlistUrl: "https://www.youtube.com/playlist?list=PLlWLRj4G9HmjjY1LbT3_ykSDSu1nFh5LR",
    videos: [
      { id: "O92pqaPfxWs", title: "Ekaterina Shelehova & The Guv — Dancing with Your Ghost", thumbnail: thumbEkaterina },
      { id: "b-isOA0DCdw", title: "De'wale — Mama Ijo For Africa", thumbnail: thumbMamaIjo },
      { id: "9zE50ZFEDIc", title: "Charles Pam — Rolling Again | 4K", thumbnail: thumbCharles },
      { id: "3qamHKovAPg", title: "Elvan Kızılay — Less Is More", thumbnail: thumbElvanLess },
      { id: "zN3mrdfg3OM", title: "Dewale — Music Video | 4K", thumbnail: thumbDewale },
      { id: "jAU_v-Mp4qQ", title: "Elvan Kızılay — Requiem for Istanbul", thumbnail: thumbElvanReq },
      { id: "FOgFs1zuV54", title: "Muharrem Öztürk — YAK", thumbnail: thumbYak },
      { id: "7nGlF7Lyt7g", title: "Umut Baysal — Nefessiz", thumbnail: thumbNefessiz },
      { id: "_6Tg2krUa7Q", title: "Umut Baysal — Aşk Bulur Bizi", thumbnail: thumbAskBulur },
      { id: "5dhY_84SxFY", title: "Muharrem Öztürk — Unutuverdim | 4K", thumbnail: thumbUnutuverdim },
      { id: "MUhMZxG_GPo", title: "DİDOR | 4K", thumbnail: thumbDidor },
      { id: "xnRAzZQNQPk", title: "Selvi — Yolculuk Çok Güzeldi", thumbnail: thumbSelvi },
      { id: "FJKpf7w8wZ0", title: "The Guv — Door ft. Leyna Robinson-Stone", thumbnail: thumbGuvDoor },
      { id: "7XalBuANHAM", title: "Büşra Aydoğdu — Kıyamadım | 4K", thumbnail: thumbBusra },
      { id: "hmS4RZ9hnwA", title: "Emre Manzel — Bitmez Keder | 4K", thumbnail: thumbEmre },
      { id: "RH7hK_e0RCo", title: "Burcu Arı & Genco Arı — Küçüğüm | 4K", thumbnail: thumbBurcu },
      { id: "utBCXAEIqUo", title: "Çiğdem Aslan — Music Video | 4K", thumbnail: thumbCigdem },
      { id: "diJZgOuRybY", title: "Mehmet Uslu — Music Video", thumbnail: thumbMehmet },
      { id: "ZjbapVRWjbU", title: "ANLASANA — Music Video", thumbnail: thumbAnlasana },
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
          src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
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
