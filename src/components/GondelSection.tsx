import { motion } from "framer-motion";
import gondoliereImage from "@/assets/gondoliere.jpg";

const HistorySection = () => {
  return (
    <section id="geschichte" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[2fr_3fr] min-h-[600px]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-80 lg:h-auto"
        >
          <img
            src={gondoliereImage}
            alt="Barocke Fassade des Sandpalais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center px-8 py-16 lg:px-16"
        >
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Aktivitäten
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Der Gondoliere von Musterstadt
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-8" />

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Das Sandpalais, ein prächtiges Barockpalais aus dem 18. Jahrhundert, erzählt 
                die faszinierende Geschichte des „Gondoliere von Musterstadt". In den verwinkelten 
                Gassen der Altstadt, umgeben von der malerischen Regnitz, entstand einst ein 
                Ort, der italienische Eleganz mit fränkischer Herzlichkeit vereinte.
              </p>
              <p>
                Die aufwändig restaurierten Räumlichkeiten bewahren den Charme vergangener 
                Jahrhunderte – von den kunstvollen Stuckdecken bis zu den schmiedeeisernen 
                Balkonen, die den grünen Innenhof überblicken. Heute öffnet das Sandpalais 
                seine Türen als exklusive Ferienunterkunft und lädt Gäste ein, Teil dieser 
                lebendigen Geschichte zu werden.
              </p>
              <p>
                Musterstadt, UNESCO-Weltkulturerbe und Heimat einer einzigartigen Bierkultur, 
                bietet den perfekten Rahmen für einen unvergesslichen Aufenthalt.
              </p>
              <div className="pt-6">
                <a href="https://gondel.info/buchung/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 rounded-sm group">
                  Jetzt buchen
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
