import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { clientBrands } from "@/data/clients";

const collaborators = [
  { name: "Çağla Şıkel", role: "Model & TV Presenter", instagram: "caglasikel", followers: "4.7M" },
  { name: "Hasan Can Kaya", role: "Comedian & Producer", instagram: "hasancankayahck", followers: "4M" },
  { name: "Enis Arıkan", role: "Actor & Comedian", instagram: "enisarikan", followers: "3M" },
  { name: "Işıl Reçber", role: "Public Figure", instagram: "isilrecber", followers: "1M" },
  { name: "Genco Arı", role: "Musician & Composer", instagram: "gencoari", followers: "289K" },
  { name: "Esra Oflaz", role: "Author & Businesswoman", instagram: "esraoflazguvenkaya", followers: "255K" },
  { name: "Arda Sayıner", role: "PR & Communications", instagram: "ardasayiner", followers: "28K" },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Brands */}
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
            Clients
          </p>
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-3">
            Brands & Partners
          </h1>
          <p className="text-sm font-light text-muted-foreground max-w-lg mb-12">
            A selection of brands, artists, and organizations Pozi has collaborated with across commercial, music, fashion, and documentary work.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 mb-20">
            {clientBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-sm border border-transparent hover:border-border transition-all duration-300"
              >
                <div className="h-10 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`${brand.size || "h-8"} w-auto object-contain ${brand.invert ? "invert" : ""}`}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.1em] font-light text-muted-foreground/60 text-center">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Collaborators */}
          <div className="border-t border-border pt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-2">
              Collaborations
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-8">
              Notable Collaborators
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light pb-3 pr-4">
                      Name
                    </th>
                    <th className="text-left text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light pb-3 pr-4 hidden sm:table-cell">
                      Role
                    </th>
                    <th className="text-left text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light pb-3 pr-4">
                      Instagram
                    </th>
                    <th className="text-right text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light pb-3">
                      Followers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {collaborators.map((person, i) => (
                    <motion.tr
                      key={person.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors duration-200"
                    >
                      <td className="py-4 pr-4">
                        <span className="text-sm font-light text-foreground">
                          {person.name}
                        </span>
                      </td>
                      <td className="py-4 pr-4 hidden sm:table-cell">
                        <span className="text-sm font-light text-muted-foreground">
                          {person.role}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <a
                          href={`https://www.instagram.com/${person.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          @{person.instagram}
                        </a>
                      </td>
                      <td className="py-4 text-right">
                        <span className="text-sm font-light text-foreground">
                          {person.followers}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        <section id="contact"><Footer /></section>
      </div>
    </div>
  );
};

export default Clients;
