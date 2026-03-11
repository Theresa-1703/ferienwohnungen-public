import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            So finden Sie uns
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Lage & Anfahrt
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="rounded-lg overflow-hidden h-80 lg:h-auto border border-border"
          >
          <iframe
              src=""
              width="100%"
              height="100%"
              style={{border: 0, minHeight: 320}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sandpalais Musterstadt Karte"
          />
          </motion.div>

          <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.2}}
              className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0"/>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Adresse</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Sandpalais<br />
                  {import.meta.env.VITE_CONTACT_ADDRESS}<br />
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Telefon</h3>
                <p className="font-body text-sm text-muted-foreground">{import.meta.env.VITE_CONTACT_PHONE}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">E-Mail</h3>
                <p className="font-body text-sm text-muted-foreground">{import.meta.env.VITE_CONTACT_EMAIL}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Check-in / Check-out</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Check-in: ab 15:00 Uhr<br />
                  Check-out: bis 11:00 Uhr
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
