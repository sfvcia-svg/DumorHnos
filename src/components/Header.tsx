import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Cocinas", href: "#categorias" },
  { label: "Placares", href: "#categorias" },
  { label: "Muebles a Medida", href: "#categorias" },
  { label: "Nosotros", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-400/95 backdrop-blur-md shadow-sm border-b border-gray-700"
          : "bg-gray-400 border-b border-gray-700"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2 p-2 rounded-lg bg-white/80 backdrop-blur-sm">
          <img 
            src="/logo.jpg" 
            alt="Dumor Hnos - Muebles y Aberturas a Medida" 
            className="h-14 w-auto object-contain drop-shadow-md"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("#contacto")}
            className="bg-orange-500 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menú"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contacto")}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-wood-hover transition-colors mt-2"
              >
                Solicitar Presupuesto
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
