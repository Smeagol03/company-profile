import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Sun, Moon, Globe, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../../data";
import { useThemeContext } from "../ThemeProvider";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Proyek", href: "/projects" },
  { label: "Kontak", href: "/contact" },
];

const languages = [
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

// Animation variants - defined outside component to prevent recreation
const fadeSlideVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const slideInVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const topBarVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("id");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { isDark, toggleTheme } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Ref for scroll optimization
  const isScrolledRef = useRef(false);

  // Memoized language lookup
  const currentLanguage = useMemo(
    () => languages.find((l) => l.code === currentLang),
    [currentLang],
  );

  // Optimized scroll handler with RAF throttling
  useEffect(() => {
    const updateScrollState = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      isScrolledRef.current = scrolled;
    };

    // Check initial scroll position
    updateScrollState();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    queueMicrotask(() => {
      setIsOpen(false);
      setShowLangMenu(false);
    });
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalOverflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(href);
    },
    [location.pathname],
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    },
    [location.pathname, navigate],
  );

  const handleNavClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      if (location.pathname === href || href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [location.pathname],
  );

  const toggleLangMenu = useCallback(() => {
    setShowLangMenu((prev) => !prev);
  }, []);

  const handleLangSelect = useCallback((langCode: string) => {
    setCurrentLang(langCode);
    setShowLangMenu(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 ${
          isScrolled
            ? "bg-charcoal/98 backdrop-blur-xl shadow-2xl"
            : "bg-charcoal/95 backdrop-blur-md"
        }`}
        style={{
          transition:
            "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Top Info Bar - Hide on scroll */}
        <AnimatePresence initial={false} mode="sync">
          {!isScrolled && (
            <motion.div
              variants={topBarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="hidden lg:block border-b border-charcoal-700/50 will-change-[height,opacity]"
            >
              <div className="container-custom py-2 flex justify-between items-center text-sm">
                <div className="flex items-center gap-6">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 text-concrete-light hover:text-gold transition-colors group"
                  >
                    <Phone
                      size={14}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span>{companyInfo.phone}</span>
                  </a>
                  <span className="flex items-center gap-2 text-concrete/60">
                    <Clock size={14} />
                    <span>{companyInfo.hours}</span>
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-concrete/60 text-xs">
                    🏗️ 25+ Tahun Pengalaman
                  </span>

                  <div className="relative">
                    <button
                      onClick={toggleLangMenu}
                      className="flex items-center gap-2 text-concrete-light hover:text-gold transition-colors group"
                    >
                      <Globe
                        size={14}
                        className="group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="flex items-center gap-1.5">
                        {currentLanguage?.flag}
                        <span className="hidden xl:inline text-xs">
                          {currentLanguage?.name}
                        </span>
                      </span>
                    </button>

                    <AnimatePresence mode="sync">
                      {showLangMenu && (
                        <motion.div
                          variants={fadeSlideVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-full mt-2 bg-charcoal-700 rounded-sm shadow-xl py-1 min-w-35 border border-charcoal-600 will-change-[opacity,transform]"
                        >
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => handleLangSelect(lang.code)}
                              className={`w-full px-4 py-2 text-left hover:bg-charcoal-600 transition-colors flex items-center gap-2 ${
                                currentLang === lang.code
                                  ? "text-gold"
                                  : "text-warm-white"
                              }`}
                            >
                              <span className="text-base">{lang.flag}</span>
                              <span className="text-sm font-medium">
                                {lang.name}
                              </span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Nav */}
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-17">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-10 h-10 bg-linear-to-br from-gold to-gold-dark rounded-sm flex items-center justify-center shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-shadow duration-300 will-change-transform"
              >
                <span className="font-display font-bold text-charcoal text-xl">
                  T
                </span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl tracking-tight text-warm-white group-hover:text-gold transition-colors duration-300">
                  {companyInfo.name}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 font-body text-sm font-medium rounded-sm group transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-warm-white/70 hover:text-warm-white"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full will-change-transform"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="absolute inset-0 bg-warm-white/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="lg:hidden p-2 text-warm-white/70 hover:text-gold transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-sm hover:bg-warm-white/10 transition-colors duration-200 group"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="will-change-transform"
                    >
                      <Sun
                        size={20}
                        className="text-gold group-hover:scale-110 transition-transform duration-200"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="will-change-transform"
                    >
                      <Moon
                        size={20}
                        className="text-warm-white/70 group-hover:text-gold transition-colors duration-200"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-body font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 will-change-transform"
              >
                <span>Konsultasi Gratis</span>
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-warm-white hover:text-gold transition-colors duration-200"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="will-change-transform"
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="will-change-transform"
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="sync">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60 lg:hidden will-change-opacity"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-charcoal-800 z-70 lg:hidden shadow-2xl will-change-transform"
            >
              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 p-2 text-warm-white/70 hover:text-gold transition-colors duration-200 z-80"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              {/* Menu Content */}
              <div className="h-full overflow-y-auto pt-16 pb-6 px-6">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-linear-to-br from-gold to-gold-dark rounded-sm flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-charcoal text-xl">
                      T
                    </span>
                  </div>
                  <span className="font-display font-bold text-xl text-warm-white">
                    Tabranitect
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-charcoal-600 mb-6" />

                {/* Mobile Nav Links */}
                <nav className="space-y-1 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: Math.min(0.05 + index * 0.03, 0.25),
                        duration: 0.2,
                      }}
                      className="will-change-[opacity,transform]"
                    >
                      <Link
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`block font-body text-base font-medium py-3 px-4 rounded-sm transition-colors duration-200 ${
                          isActive(link.href)
                            ? "text-gold bg-gold/10"
                            : "text-warm-white/80 hover:text-warm-white hover:bg-warm-white/5"
                        }`}
                      >
                        <span className="flex items-center">
                          {isActive(link.href) && (
                            <span className="w-1 h-5 bg-gold rounded-full mr-3" />
                          )}
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="h-px bg-charcoal-600 mb-6" />

                {/* Mobile Actions */}
                <div className="space-y-3">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 w-full py-3 px-4 rounded-sm text-warm-white hover:bg-warm-white/5 transition-colors duration-200"
                  >
                    {isDark ? (
                      <Sun size={18} className="text-gold" />
                    ) : (
                      <Moon size={18} />
                    )}
                    <span className="font-medium text-sm">
                      {isDark ? "Mode Terang" : "Mode Gelap"}
                    </span>
                  </button>

                  <div className="flex items-center gap-3 py-3 px-4">
                    <Globe size={18} className="text-warm-white/60" />
                    <select
                      value={currentLang}
                      onChange={(e) => setCurrentLang(e.target.value)}
                      className="bg-charcoal-700 text-warm-white rounded-sm px-3 py-2 font-body text-sm border border-charcoal-600 focus:border-gold focus:outline-none flex-1"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full text-center bg-gold hover:bg-gold-light text-charcoal font-body font-semibold py-4 rounded-sm transition-colors duration-200 shadow-lg shadow-gold/20"
                  >
                    Konsultasi Gratis
                  </Link>

                  {/* Mobile Contact Info */}
                  <div className="pt-6 space-y-2">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-2 text-sm text-concrete-light hover:text-gold transition-colors duration-200 py-2"
                    >
                      <Phone size={16} />
                      <span>{companyInfo.phone}</span>
                    </a>
                    <p className="flex items-center gap-2 text-sm text-concrete/60 py-2">
                      <Clock size={16} />
                      <span>{companyInfo.hours}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-17 bg-charcoal" />
    </>
  );
};
