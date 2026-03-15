import { motion } from "framer-motion";
import catCocinas from "@/assets/cat-cocinas.jpg";
import catPlacares from "@/assets/cat-placares.jpg";
import catTv from "@/assets/cat-tv.jpg";
import catEscritorios from "@/assets/cat-escritorios.jpg";

const categories = [
  { title: "Cocinas a Medida", image: catCocinas },
  { title: "Placares y Vestidores", image: catPlacares },
  { title: "Muebles de TV y Living", image: catTv },
  { title: "Dormitorios y Escritorios", image: catEscritorios },
];

const CategoriesSection = () => (
  <section id="categorias" className="py-24 bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Nuestras Especialidades
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluciones de carpintería premium para cada espacio de tu hogar.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-display font-semibold text-secondary-foreground mb-3">
                {cat.title}
              </h3>
              <span className="inline-block text-sm font-medium text-primary border-b border-primary pb-0.5 group-hover:text-wood-hover transition-colors">
                Ver proyectos →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
