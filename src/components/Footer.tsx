const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-secondary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Dumor Hnos</h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Carpintería y muebles a medida. Diseño, fabricación e instalación
              de soluciones personalizadas para tu hogar.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary-foreground/80">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><button onClick={() => scrollTo("#categorias")} className="hover:text-primary transition-colors">Cocinas a Medida</button></li>
              <li><button onClick={() => scrollTo("#categorias")} className="hover:text-primary transition-colors">Placares y Vestidores</button></li>
              <li><button onClick={() => scrollTo("#categorias")} className="hover:text-primary transition-colors">Muebles de TV</button></li>
              <li><button onClick={() => scrollTo("#categorias")} className="hover:text-primary transition-colors">Escritorios</button></li>
              <li><button onClick={() => scrollTo("#categorias")} className="hover:text-primary transition-colors">Muebles Infantiles</button></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary-foreground/80">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="tel:+5491112345678" className="hover:text-primary transition-colors">+54 11 1234-5678</a></li>
              <li><a href="mailto:info@dumorhnos.com" className="hover:text-primary transition-colors">info@dumorhnos.com</a></li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} Dumor Hnos — Muebles a medida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
