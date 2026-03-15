import { motion } from "framer-motion";

const categories = [
  { title: "Cocinas a Medida", image: "/muebles/481030108_8744190735684973_7665044735022357421_n.jpg" },
  { title: "Placares y Vestidores", image: "/muebles/118194694_2907565276014244_5388719589011500868_n.jpg" },
  { title: "Muebles de TV y Living", image: "/muebles/481181218_8803105086460204_4071323596374241234_n.jpg" },
  { title: "Dormitorios y Escritorios", image: "/muebles/481274661_8808240915946621_4284152639265031695_n.jpg" },
  { title: "Aberturas de Aluminio", image: "/aluminio/tmp52k8jjjc.png" },
  { title: "Puertas y Ventanas", image: "/aluminio/tmp5ded5ezl.png" },
  { title: "Cortinas de Aluminio", image: "/aluminio/tmpd_7j8swt.png" },
  { title: "Cerramientos y Terrazas", image: "/aluminio/tmpfo00yf6_.png" },
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

      {/* Sección adicional de imágenes destacadas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Nuestros Trabajos Destacados
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <img src="/muebles/481281062_8808240892613290_3822932019260653264_n.jpg" alt="Trabajo destacado 1" className="w-full h-40 object-cover rounded-lg" />
          <img src="/muebles/482223827_8803105419793504_7251535500776921059_n.jpg" alt="Trabajo destacado 2" className="w-full h-40 object-cover rounded-lg" />
          <img src="/muebles/53340216_1861924487245000_4524058476451725312_n.jpg" alt="Trabajo destacado 3" className="w-full h-40 object-cover rounded-lg" />
          <img src="/muebles/55485895_1889928451111270_9004531530294362112_n.jpg" alt="Trabajo destacado 4" className="w-full h-40 object-cover rounded-lg" />
          <img src="/muebles/55658742_1889928417777940_7550565962500538368_n.jpg" alt="Trabajo destacado 5" className="w-full h-40 object-cover rounded-lg" />
          <img src="/aluminio/tmph5grc2ge.png" alt="Aluminio destacado 1" className="w-full h-40 object-cover rounded-lg" />
          <img src="/aluminio/tmpjlhbbkrh.png" alt="Aluminio destacado 2" className="w-full h-40 object-cover rounded-lg" />
          <img src="/aluminio/tmpnxfh2p6t.png" alt="Aluminio destacado 3" className="w-full h-40 object-cover rounded-lg" />
          <img src="/aluminio/tmpqj4v9xxx.png" alt="Aluminio destacado 4" className="w-full h-40 object-cover rounded-lg" />
          <img src="/aluminio/tmps3e1dxrj.png" alt="Aluminio destacado 5" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default CategoriesSection;
