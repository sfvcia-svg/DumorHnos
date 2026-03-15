const Footer = () => {
  return (
    <footer className="bg-charcoal text-secondary-foreground py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-lg font-display font-bold mb-4">Dumor Hnos</h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-2xl mx-auto">
            Carpintería de aluminio y muebles a medida. Diseño, fabricación e instalación
            de soluciones personalizadas para tu hogar.
          </p>
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
