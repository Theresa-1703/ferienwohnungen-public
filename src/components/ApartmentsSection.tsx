import { useState } from "react";
import { motion } from "framer-motion";
import ApartmentCard from "./ApartmentCard";
import ApartmentDetail from "./ApartmentDetail";
import venezia from "@/assets/venezia.jpg";
import casanova from "@/assets/casanova.jpg";

const apartments = [
  {
    title: "Venezia",
    description: "Großzügige Ferienwohnung im barocken Stil für bis zu 5 Personen.",
    longDescription: "Erleben Sie venezianisches Flair im Herzen von Musterstadt. Die Ferienwohnung 'Venezia' bietet Platz für bis zu 5 Personen und ist ideal für Familien geeignet. Sämtliche Nebenkosten, Bettwäsche, Handtücher, Endreinigung sowie WLAN sind bereits im Preis enthalten. Ein besonderes Highlight ist der inklusive Garagenstellplatz direkt am Haus. Kinder bis 6 Jahre übernachten bei uns kostenfrei.",
    image: venezia,
    size: "85m²",
    guests: 5,
    price: "Ab 75 €",
    amenities: ["WLAN", "Garagenstellplatz", "Bettwäsche inkl.", "Handtücher inkl.", "Zentrale Lage", "Endreinigung inkl."],
  },
  {
    title: "Casanova",
    description: "Charmante Unterkunft mit historischem Charakter für bis zu 4 Personen.",
    longDescription: "Das Apartment 'Casanova' besticht durch seine gemütliche Atmosphäre und den historischen Charme des Barockpalais. Die Wohnung ist für bis zu 4 Personen ausgelegt. Im Mietpreis sind alle Nebenkosten, Bettwäsche, Handtücher und die Endreinigung enthalten. Wie bei all unseren Apartments steht Ihnen ein eigener Stellplatz für Ihr Fahrzeug zur Verfügung. Kinder bis 6 Jahre reisen kostenlos mit.",
    image: casanova,
    size: "72m²",
    guests: 4,
    price: "Ab 70 €",
    amenities: ["WLAN", "Garagenstellplatz", "Bettwäsche inkl.", "Handtücher inkl.", "Zentrale Lage", "Endreinigung inkl."],
  },
];

const ApartmentsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const scrollToInquiry = () => {
    setSelected(null);
    setTimeout(() => {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
      <section id="wohnungen" className="section-padding">
        <div className="container mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Unsere Unterkünfte
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Ferienwohnungen
            </h2>
            <div className="gold-divider" />
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Zwei einzigartige Wohnungen in unserem historischen Barockpalais in Musterstadt –
              inklusive Stellplatz und vollem Komfort für Ihren Aufenthalt.
            </p>
          </motion.div>

          {/* Zentrierung bei zwei Karten: justify-center hinzugefügt */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
            {apartments.map((apt, i) => (
                <ApartmentCard
                    key={apt.title}
                    {...apt}
                    index={i}
                    onSelect={() => setSelected(i)}
                />
            ))}
          </div>
        </div>

        <ApartmentDetail
            apartment={selected !== null ? apartments[selected] : null}
            open={selected !== null}
            onClose={() => setSelected(null)}
            onInquiry={scrollToInquiry}
        />
      </section>
  );
};

export default ApartmentsSection;