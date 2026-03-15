import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cocina moderna a medida por Dumor Hnos"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight mb-6">
            Carpinteria de Aluminio y Muebles a medida que transforman tu hogar
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 font-light leading-relaxed">
            Diseñamos y fabricamos cocinas, placares y muebles personalizados con
            materiales de alta calidad y terminaciones modernas. Como tambien fabricamos todo tipo de aberturas en aluminio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#trabajos")}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-wood-hover transition-colors"
            >
              Ver Trabajos
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-secondary-foreground/10 transition-colors"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
