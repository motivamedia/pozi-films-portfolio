import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { clientBrands } from "@/data/clients";
import profileCagla from "@/assets/profiles/caglasikel.jpg";
import profileHCK from "@/assets/profiles/hasancankayahck.jpg";
import profileEnis from "@/assets/profiles/enisarikan.jpg";
import profileEkaterina from "@/assets/profiles/ekaterinashelehova.jpg";
import profileIsil from "@/assets/profiles/isilrecber.jpg";
import profileTulin from "@/assets/profiles/tulinsahinofficial.jpg";
import profileSera from "@/assets/profiles/tokdemirsera.jpg";
import profileAyhan from "@/assets/profiles/ayhansicimoglu.jpg";
import profileGenco from "@/assets/profiles/gencoari.jpg";
import profileEsra from "@/assets/profiles/esraoflazguvenkaya.jpg";
import profileArda from "@/assets/profiles/ardasayiner.jpg";

const collaborators = [
  { name: "Çağla Şıkel", role: "Model & TV Presenter", instagram: "caglasikel", followers: "4.7M", photo: profileCagla },
  { name: "Hasan Can Kaya", role: "Comedian & Producer", instagram: "hasancankayahck", followers: "4M", photo: profileHCK },
  { name: "Enis Arıkan", role: "Actor & Comedian", instagram: "enisarikan", followers: "3M", photo: profileEnis },
  { name: "Ekaterina Shelehova", role: "Singer & Composer", instagram: "ekaterinashelehova", followers: "2M", photo: profileEkaterina },
  { name: "Işıl Reçber", role: "Public Figure", instagram: "isilrecber", followers: "1M", photo: profileIsil },
  { name: "Tülin Şahin", role: "Supermodel", instagram: "tulinsahinofficial", followers: "916K", photo: profileTulin },
  { name: "Sera Tokdemir", role: "Actress & Model", instagram: "tokdemirsera", followers: "860K", photo: profileSera },
  { name: "Ayhan Sicimoğlu", role: "TV Presenter & Musician", instagram: "ayhansicimoglu", followers: "778K", photo: profileAyhan },
  { name: "Genco Arı", role: "Musician & Composer", instagram: "gencoari", followers: "289K", photo: profileGenco },
  { name: "Esra Oflaz", role: "Author & Businesswoman", instagram: "esraoflazguvenkaya", followers: "255K", photo: profileEsra },
  { name: "Arda Sayıner", role: "PR & Communications", instagram: "ardasayiner", followers: "28K", photo: profileArda },
];

const IgProfileCard = ({
  person,
  index,
}: {
  person: (typeof collaborators)[0];
  index: number;
}) => {
  return (
    <motion.a
      href={`https://www.instagram.com/${person.instagram}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
      className="block rounded-lg border border-border/60 hover:border-border overflow-hidden transition-all duration-300 group"
    >
      {/* IG-style header bar */}
      <div className="h-1 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]" />

      <div className="px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {person.name}
            </p>
            <p className="text-xs text-muted-foreground/60 truncate">
              @{person.instagram}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-6 mt-3 pt-3 border-t border-border/40">
          <div>
            <span className="text-sm font-medium text-foreground">
              {person.followers}
            </span>
            <span className="text-[10px] text-muted-foreground/50 ml-1">
              followers
            </span>
          </div>
          <div className="flex-1" />
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
            {person.role}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

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
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`max-h-10 max-w-[110px] w-auto h-auto object-contain ${brand.invert ? "invert" : ""}`}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {collaborators.map((person, i) => (
                <IgProfileCard key={person.instagram} person={person} index={i} />
              ))}
            </div>
          </div>
        </motion.section>

        <section id="contact"><Footer /></section>
      </div>
    </div>
  );
};

export default Clients;
