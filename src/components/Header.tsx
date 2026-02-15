import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@pozimedia",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <polygon fill="white" points="9.545,15.568 15.818,12 9.545,8.432" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pozimedia",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pozipoyraz",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isPhoto = location.pathname === "/photography";
  const isClients = location.pathname === "/clients";
  const isPackages = location.pathname === "/packages";
  const isDocuments = location.pathname === "/documents";
  const isVideography = !isPhoto && !isClients && !isPackages && !isDocuments;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-12 md:mb-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <Link to="/">
          <img
            src={logo}
            alt="Pozi Visual Art"
            className="h-32 md:h-40 w-auto invert -ml-3"
          />
        </Link>
        <div id="socials" className="flex items-center gap-4">
          {!isHome && (
            <>
              <Link
                to="/"
                aria-label="Home"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Home className="w-4 h-4" />
              </Link>
              <span className="w-px h-4 bg-border mx-1" />
            </>
          )}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Link
          to="/"
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
            isVideography
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          Videography
        </Link>
        <Link
          to="/photography"
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
            isPhoto
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          Photography
        </Link>
        <Link
          to="/clients"
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
            isClients
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          Clients
        </Link>
        <Link
          to="/packages"
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
            isPackages
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          Packages
        </Link>
        <Link
          to="/documents"
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-light rounded-full border transition-all duration-300 ${
            isDocuments
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          Documents
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
