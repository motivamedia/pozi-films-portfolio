import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCategoryProps {
  title: string;
  description: string;
  index: number;
  href?: string;
}

const PortfolioCategory = ({ title, description, index, href = "#" }: PortfolioCategoryProps) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex items-center justify-between border-b border-border py-5 md:py-6 transition-colors hover:bg-secondary/50 px-1 -mx-1 cursor-pointer"
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="text-xs text-muted-foreground font-light tracking-wider">
          {number}
        </span>
        <div>
          <h3 className="text-lg md:text-xl font-light tracking-wide uppercase text-foreground">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground font-light mt-0.5">
            {description}
          </p>
        </div>
      </div>
      <ArrowUpRight
        className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
      />
    </motion.a>
  );
};

export default PortfolioCategory;
