import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16 md:mb-24"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Showreel Video */}
        <div className="w-full md:w-1/2 aspect-video rounded-sm overflow-hidden bg-secondary">
          <iframe
            src="https://player.vimeo.com/video/787410318?h=49bb66cb68&title=0&byline=0&portrait=0"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Pozi 2024 Showreel"
          />
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-light leading-relaxed text-foreground tracking-tight">
            Hi, I'm Pozi
          </h1>
          <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-muted-foreground">
            London-based filmmaker with 15+ years of experience in directing,
            producing, and music production. I specialise in commercial music
            videos, documentary storytelling, and large-scale multicam event
            videography — crafting cinematic visuals that elevate brands and
            narratives.
          </p>
          <a
            href="https://vimeo.com/787410318/49bb66cb68"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
          >
            Watch Full Showreel
            <span>→</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
