import { motion } from "framer-motion";
import { Palette, Shield, Maximize2, Ruler, Users, Wrench } from "lucide-react";

const benefits = [
  { icon: Palette, title: "Diseño personalizado" },
  { icon: Shield, title: "Materiales de alta calidad" },
  { icon: Maximize2, title: "Optimización de espacios" },
  { icon: Ruler, title: "Fabricación a medida" },
  { icon: Users, title: "Atención personalizada" },
  { icon: Wrench, title: "Instalación profesional" },
];

const WhyUsSection = () => (
  <section className="py-24 bg-muted">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Por Qué Elegirnos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card rounded-lg p-6 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-wood-light flex items-center justify-center shrink-0">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-foreground">{b.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
