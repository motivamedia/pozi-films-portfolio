import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import PortfolioCategory from "@/components/PortfolioCategory";
import Footer from "@/components/Footer";

const portfolioCategories = [
  {
    title: "Commercial",
    description: "Brand films & corporate content for leading enterprises",
    href: "https://www.youtube.com/@pozivisualart",
  },
  {
    title: "Music Videos",
    description: "Directing clips for mainstream artists & independent musicians",
    href: "https://www.youtube.com/@pozivisualart",
  },
  {
    title: "Fashion",
    description: "Stylish visual narratives for fashion brands & events",
    href: "https://www.youtube.com/@pozivisualart",
  },
  {
    title: "Documentary",
    description: "Long-form storytelling — from the Amazon to Amsterdam",
    href: "https://www.youtube.com/@pozivisualart",
  },
  {
    title: "Multicam Events",
    description: "Large-scale live events & concerts with cinematic production",
    href: "https://www.youtube.com/@pozivisualart",
  },
  {
    title: "Food & Travel",
    description: "Gourmet programs & travel series shot across the globe",
    href: "https://www.youtube.com/@pozivisualart",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 md:px-8 py-10 md:py-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <img
            src={logo}
            alt="Pozi"
            className="h-10 md:h-14 w-auto invert"
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 md:mb-28"
        >
          <h1 className="text-2xl md:text-3xl font-light leading-relaxed text-foreground tracking-tight">
            Hi, I'm Pozi
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-base font-light leading-relaxed text-muted-foreground max-w-lg">
            London-based filmmaker with 15+ years of experience in directing, producing, and music production. I specialise in commercial music videos, documentary storytelling, and large-scale multicam event videography — crafting cinematic visuals that elevate brands and narratives.
          </p>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-6">
            Portfolio
          </p>

          <div className="border-t border-border">
            {portfolioCategories.map((category, index) => (
              <PortfolioCategory
                key={category.title}
                title={category.title}
                description={category.description}
                index={index}
                href={category.href}
              />
            ))}
          </div>
        </motion.div>

        {/* Showreel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 md:mt-24"
        >
          <a
            href="https://vimeo.com/787410318/49bb66cb68"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-light text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-300"
          >
            Watch Showreel
            <span className="text-xs">→</span>
          </a>
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
