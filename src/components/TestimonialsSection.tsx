import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "María G.", text: "Nos hicieron la cocina completa y quedó increíble. Muy prolijos y profesionales." },
  { name: "Carlos R.", text: "El placard quedó perfecto y aprovecharon todo el espacio. Superó nuestras expectativas." },
  { name: "Laura M.", text: "Excelente calidad y atención. Muy recomendables. El escritorio de los chicos es hermoso." },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Lo Que Dicen Nuestros Clientes
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-sm border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
