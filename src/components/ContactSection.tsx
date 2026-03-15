import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, User } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100),
  telefono: z.string().trim().min(1, "El teléfono es requerido").max(30),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

const contacts = [
  {
    name: "Martin",
    area: "Muebles",
    phone: "3834921759",
    whatsapp: "543834921759"
  },
  {
    name: "Pablo", 
    area: "Aluminio",
    phone: "3834932555",
    whatsapp: "543834932555"
  }
];

const address = "Av. Pres. Castillo 1900, K4700 San Fernando del Valle de Catamarca, Catamarca";
const googleMapsUrl = "https://maps.google.com/?q=-28.4568568,-65.7471412&z=18";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.us2.make.com/6tvpqkhszwi6hqsg76g3ycgxaqv746io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: result.data.nombre,
          telefono: result.data.telefono,
          mensaje: result.data.mensaje
        }),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        setForm({ nombre: "", telefono: "", mensaje: "" });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast.error("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.");
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition";

  return (
    <section id="contacto" className="py-24 bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Contactanos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Consultá sin compromiso. Estamos para ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Contactos */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Nuestros Contactos</h3>
                {contacts.map((contact, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-wood-light flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.area}</p>
                      </div>
                    </div>
                    <div className="space-y-2 ml-13">
                      <a href={`tel:+54${contact.phone}`} className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{contact.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <a href="mailto:info@dumorhnos.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-wood-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">info@dumorhnos.com</p>
                </div>
              </a>

              {/* Dirección */}
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-wood-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium text-foreground">{address}</p>
                </div>
              </a>
            </div>

            {/* Botones WhatsApp */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Contactar por WhatsApp</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-whatsapp text-secondary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-whatsapp-hover transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {contact.name} - {contact.area}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-lg p-8 shadow-sm border border-border space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
              <input
                id="nombre"
                type="text"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className={inputClass}
                placeholder="Tu nombre"
              />
              {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
              <input
                id="telefono"
                type="tel"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className={inputClass}
                placeholder="Tu teléfono"
              />
              {errors.telefono && <p className="text-destructive text-xs mt-1">{errors.telefono}</p>}
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className={inputClass}
                placeholder="Contanos tu proyecto..."
              />
              {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-sm hover:bg-wood-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Consulta"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
