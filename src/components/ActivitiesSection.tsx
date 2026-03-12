import { motion } from "framer-motion";
import { Church, Beer, TreePine, ShoppingBag, Landmark, Music } from "lucide-react";

const activities = [
    { icon: Church, title: "Musterstadter Dom", desc: "Nur 5 Minuten zu Fuß zum romanischen Kaiserdom." },
    { icon: Beer, title: "Rauchbier-Tradition", desc: "Genießen Sie das Original in der historischen Braukultur." },
    { icon: Landmark, title: "Altes Rathaus", desc: "Das Wahrzeichen mitten im Fluss – ein Muss für jeden Besuch." },
    { icon: TreePine, title: "Hain-Park", desc: "Natur pur und Erholung im weitläufigen Stadtpark direkt an der Regnitz." },
    { icon: ShoppingBag, title: "Antiquitäten & Handwerk", desc: "Stöbern in kleinen Läden und Märkten der Altstadt." },
    { icon: Music, title: "Musikfeste & Kultur", desc: "Von Jazz-Rhythmen bis zur Sandkerwa das ganze Jahr erleben." },
];

const ActivitiesSection = () => {
  return (
    <section id="aktivitaeten" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Erleben Sie Musterstadt
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Aktivitäten & Sehenswürdigkeiten
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-md transition-shadow duration-300"
            >
              <item.icon size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
