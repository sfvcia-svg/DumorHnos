import { motion } from "framer-motion";
import { MessageCircle, PenTool, Hammer, Home } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Asesoramiento", description: "Escuchamos tu idea y analizamos el espacio." },
  { icon: PenTool, title: "Diseño", description: "Creamos el diseño ideal para tu hogar." },
  { icon: Hammer, title: "Fabricación", description: "Fabricamos cada mueble con precisión y calidad." },
  { icon: Home, title: "Instalación", description: "Instalamos el proyecto final en tu hogar." },
];

const ProcessSection = () => (
  <section id="proceso" className="py-24 bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Cómo Trabajamos
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Un proceso simple y transparente de principio a fin.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-wood-light flex items-center justify-center">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-sm font-bold text-primary mb-2">0{i + 1}</div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
