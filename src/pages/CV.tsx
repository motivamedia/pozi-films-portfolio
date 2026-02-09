import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const clients = [
  "Salesforce", "Cloudsource", "Meta", "Turkcell", "Nutraxin", "Bioxin",
  "GNC Trkcll", "Funk Motorsport", "Karaca", "TMC3", "Global Medical Forum",
  "TED", "Cafer Erol", "Auntie Anne's", "Jeton Wallet", "Samsung", "FlatFlip",
  "London Fashion Week", "191 Automotive", "Bretz Furniture", "Cliniqua",
  "Akar Sprey", "Encanto", "Ruya London", "Fat Phill's Diner", "Yeni Rakı",
];

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-4">
            Pozi Poyraz Saroglu
          </h1>
          <p className="text-sm font-light text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            London-based filmmaker, director, and music producer with 15+ years of experience
            across commercial productions, music videos, documentaries, and large-scale multicam events.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-6">
                Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Commercial Direction", "Music Video Production", "Documentary Filmmaking", "Multicam Events", "Music Production", "Post-Production"].map((skill) => (
                  <p key={skill} className="text-sm font-light text-foreground">{skill}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-6">
                Companies Worked With
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-px bg-border">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="bg-background flex items-center justify-center p-4 md:p-6 min-h-[72px] md:min-h-[88px]"
                  >
                    <span className="text-[10px] md:text-xs font-light text-muted-foreground text-center uppercase tracking-wider leading-tight">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-6">
                Contact
              </h2>
              <div className="space-y-2">
                <a href="mailto:pozi@pozivisualart.com" className="block text-sm font-light text-foreground hover:text-muted-foreground transition-colors">
                  pozi@pozivisualart.com
                </a>
                <a href="tel:+4407810020163" className="block text-sm font-light text-foreground hover:text-muted-foreground transition-colors">
                  +44 078 100 201 63
                </a>
                <p className="text-sm font-light text-foreground">London, UK</p>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default CV;
