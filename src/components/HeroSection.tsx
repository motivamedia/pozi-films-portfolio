import { motion } from "framer-motion";
import { clientBrands } from "@/data/clients";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-16 md:mb-24"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Showreel Video + Trusted By */}
        <div className="w-full md:w-1/2">
          <div className="aspect-video rounded-sm overflow-hidden bg-secondary">
            <iframe
              src="https://www.youtube.com/embed/IMg8yDnJgBs?autoplay=1&mute=1&loop=1&playlist=IMg8yDnJgBs&controls=0&showinfo=0&rel=0"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              title="Pozi 2024 Showreel"
            />
          </div>

          {/* Trusted By */}
          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-light mb-4">
              Trusted By
            </p>
            <div className="grid grid-cols-7 gap-x-4 gap-y-4">
              {clientBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center h-7 w-full grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  title={brand.name}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`${brand.size || "h-5"} w-auto object-contain ${brand.invert ? "invert" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-light leading-relaxed text-foreground tracking-tight">
            Who is Pozi?
          </h1>
          <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-muted-foreground">
            Pozi is a London-based filmmaker with over 15 years of experience in directing, producing, and music production. His work spans commercial music videos, branded content, documentary storytelling, and large-scale multicamera event videography, with an emphasis on cinematic visuals and narrative clarity shaped by a strong background in music.
          </p>
          <p className="mt-3 text-sm md:text-base font-light leading-relaxed text-muted-foreground">
            Based in London, he has worked with brands, artists, and organizations in the UK and internationally, overseeing projects from concept development through filming and post-production. The practice focuses on delivering visually distinctive, story-led films through clearly defined and efficiently managed productions, suited to clients seeking professional execution and clear creative direction across commercial, documentary, and event-based work.
          </p>
          <a
            href="/cv"
            className="mt-6 inline-flex items-center gap-2 text-xs font-light text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
          >
            Learn More About Pozi
            <span>→</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
