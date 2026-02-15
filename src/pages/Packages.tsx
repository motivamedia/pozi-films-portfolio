import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface PackageItem {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  popular?: boolean;
  features: string[];
  note?: string;
}

const packages: PackageItem[] = [
  {
    title: "Social Media Content",
    subtitle: "Short-form for digital platforms",
    price: "£1,200",
    unit: "per project",
    features: [
      "1–3 short-form videos (Reels / TikTok / Shorts)",
      "Half-day shoot (up to 5 hours)",
      "Basic colour grading & sound mix",
      "Vertical + horizontal delivery",
      "1 round of revisions",
      "Delivered within 5 business days",
    ],
  },
  {
    title: "Corporate & Brand",
    subtitle: "Professional brand storytelling",
    price: "£2,500",
    unit: "per project",
    features: [
      "Interview-based or narrative-driven film",
      "Full-day shoot with professional lighting",
      "Scripting & creative direction",
      "Lower thirds, graphics & branding",
      "Licensed background music",
      "2 rounds of revisions",
      "Multi-format delivery (web, social, presentation)",
    ],
  },
  {
    title: "Music Video",
    subtitle: "Cinematic visual storytelling for artists",
    price: "£3,500",
    unit: "starting from",
    popular: true,
    features: [
      "Full concept development & mood board",
      "Location scouting & production planning",
      "1 full-day shoot with professional crew",
      "Cinematic colour grading (DaVinci Resolve)",
      "4K master delivery",
      "Behind-the-scenes content included",
      "2 rounds of revisions",
    ],
  },
  {
    title: "Commercial & Advertising",
    subtitle: "High-end branded content for campaigns",
    price: "£5,000",
    unit: "starting from",
    features: [
      "Creative brief analysis & concept pitch",
      "1–2 day production with full crew",
      "Art direction & set design coordination",
      "Professional talent direction",
      "Advanced colour grading & VFX",
      "Licensed music & sound design",
      "Multi-platform deliverables (TV, digital, social)",
      "3 rounds of revisions",
    ],
  },
  {
    title: "Event Coverage",
    subtitle: "Multicamera live event production",
    price: "£2,000",
    unit: "per day",
    features: [
      "Up to 3 camera setup",
      "Full-day coverage (up to 10 hours)",
      "Multicamera live-switching capability",
      "Same-day teaser edit available",
      "Highlight reel (3–5 min) + full ceremony edit",
      "Drone footage available (add-on)",
      "Delivered within 10 business days",
    ],
  },
  {
    title: "Documentary & Short Film",
    subtitle: "Long-form narrative & documentary work",
    price: "£8,000",
    unit: "starting from",
    features: [
      "Research, development & pre-production",
      "Multi-day shoot schedule",
      "Interview setup with professional audio",
      "B-roll & cinematic sequences",
      "Full post-production & colour grade",
      "Original score / licensed music",
      "Festival-ready DCP & digital delivery",
      "Subtitling available",
    ],
  },
];

const addOns = [
  { name: "Drone / Aerial Footage", price: "+£350" },
  { name: "Same-Day Edit (events)", price: "+£500" },
  { name: "Additional Camera Operator", price: "+£400/day" },
  { name: "Subtitling & Localisation", price: "+£150/lang" },
  { name: "Raw Footage Delivery", price: "+£200" },
  { name: "Expedited Delivery (48h)", price: "+£500" },
];

const PackageCard = ({
  pkg,
  index,
}: {
  pkg: PackageItem;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
    className={`relative flex flex-col rounded-sm border transition-all duration-300 ${
      pkg.popular
        ? "border-foreground/40 bg-foreground/[0.03]"
        : "border-border/60 hover:border-border"
    }`}
  >
    {pkg.popular && (
      <div className="absolute -top-3 left-6">
        <span className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-light bg-foreground text-background rounded-full">
          Most Popular
        </span>
      </div>
    )}

    <div className="p-6 pb-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-light">
        {pkg.subtitle}
      </p>
      <h3 className="text-lg font-light text-foreground mt-1 tracking-tight">
        {pkg.title}
      </h3>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-2xl font-light text-foreground tracking-tight">
          {pkg.price}
        </span>
        <span className="text-xs text-muted-foreground/50 font-light">
          {pkg.unit}
        </span>
      </div>
    </div>

    <div className="border-t border-border/40 mx-6" />

    <div className="p-6 pt-4 flex-1">
      <ul className="space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="w-3.5 h-3.5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
            <span className="text-sm font-light text-muted-foreground leading-snug">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="p-6 pt-2">
      <a
        href="#contact"
        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
          pkg.popular
            ? "bg-foreground text-background border-foreground hover:bg-transparent hover:text-foreground"
            : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
        }`}
      >
        Enquire
        <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  </motion.div>
);

const Packages = () => {
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
            Packages
          </p>
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
            Production Packages
          </h1>
          <p className="text-sm font-light text-muted-foreground max-w-lg mb-12">
            Transparent pricing for every stage of production. Each package
            includes pre-production planning, on-set direction, and full
            post-production. All prices exclude VAT.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.title} pkg={pkg} index={i} />
            ))}
          </div>

          {/* Add-ons */}
          <div className="border-t border-border pt-12 mb-20">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
              Extras
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-8">
              Add-Ons
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {addOns.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="flex flex-col gap-1 py-4 px-4 rounded-sm border border-border/40 hover:border-border transition-colors duration-300"
                >
                  <span className="text-sm font-light text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground/50 font-light">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom / Bespoke */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-sm border border-border/60 p-8 md:p-10 text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 font-light mb-3">
              Bespoke
            </p>
            <h3 className="text-xl font-light text-foreground tracking-tight mb-3">
              Need something different?
            </h3>
            <p className="text-sm font-light text-muted-foreground max-w-md mx-auto mb-6">
              Every project is unique. For multi-day productions, international
              shoots, or ongoing retainer agreements, get in touch for a tailored
              quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-light rounded-full border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300"
            >
              Get a Custom Quote
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>
        </motion.section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Packages;
