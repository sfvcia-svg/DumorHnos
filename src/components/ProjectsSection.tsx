import { motion } from "framer-motion";
import projCocina1 from "@/assets/proj-cocina1.jpg";
import projPlacard1 from "@/assets/proj-placard1.jpg";
import projInfantil1 from "@/assets/proj-infantil1.jpg";
import projIsla1 from "@/assets/proj-isla1.jpg";
import projGuardado1 from "@/assets/proj-guardado1.jpg";
import projCocina2 from "@/assets/proj-cocina2.jpg";

const projects = [
  { image: projCocina1, category: "Cocinas", description: "Cocina moderna con isla central en blanco y negro." },
  { image: projPlacard1, category: "Placares", description: "Placard corredizo con paneles de espejo y madera." },
  { image: projInfantil1, category: "Infantiles", description: "Escritorio infantil con estantería integrada." },
  { image: projIsla1, category: "Cocinas", description: "Isla de cocina con barra desayunadora en madera." },
  { image: projGuardado1, category: "Guardado", description: "Mueble de guardado con organización a medida." },
  { image: projCocina2, category: "Cocinas", description: "Cocina integral con iluminación LED integrada." },
];

const ProjectsSection = () => (
  <section id="trabajos" className="py-24 bg-muted">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Una selección de nuestros trabajos más recientes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={proj.image}
                alt={proj.description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {proj.category}
              </span>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
