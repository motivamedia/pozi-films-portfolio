import { motion } from "framer-motion";

const clients = [
  "Salesforce",
  "Cloudsource",
  "Meta",
  "Turkcell",
  "Nutraxin",
  "Bioxin",
  "GNCTrkcll",
  "Funk Motorsport",
  "Karaca",
  "TMC3",
  "Global Medical Forum",
  "TED",
  "Cafer Erol",
  "Auntie Anne's",
  "Jeton Wallet",
  "Samsung",
  "FlatFlip",
  "London Fashion Week",
  "191 Automotive",
  "Bretz Furniture",
  "Cliniqua",
  "Akar Sprey",
  "Encanto",
  "Ruya London",
  "Fat Phill's Diner",
  "Yeni Rakı",
];

const ClientLogos = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-8">
        Trusted By
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-px bg-border">
        {clients.map((client, index) => (
          <motion.div
            key={client}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="bg-background flex items-center justify-center p-4 md:p-6 min-h-[72px] md:min-h-[88px]"
          >
            <span className="text-[10px] md:text-xs font-light text-muted-foreground text-center uppercase tracking-wider leading-tight">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ClientLogos;
