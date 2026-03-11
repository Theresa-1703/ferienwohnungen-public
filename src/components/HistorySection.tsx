import { motion } from "framer-motion";
import gondoliereImage from "@/assets/gondoliere.jpg";

const HistorySection = () => {
  return (
    <section id="geschichte" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Geschichte</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">Ein Haus voller Zeitgeschichte</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid gap-12 font-body text-muted-foreground leading-relaxed">
          {/* Einleitung */}
          <p className="text-lg text-foreground italic text-center mb-8">
            „Der Name ‚Sandpalais‘ begründete sich nicht auf adlige Bewohner, sondern auf die schlossähnliche Architektur im Volksmund.“
          </p>

          {/* Meilensteine */}
          <div className="space-y-8 border-l border-primary/30 pl-8 ml-4">
            <div>
              <span className="text-primary font-semibold block mb-1">1392 – 1645</span>
              <p>Erstmalige Erwähnung als drei separate Häuser. Nach der Zerstörung im Krieg 1632 erfolgte 1645 der Neubau durch Büttner Hans Lienß.</p>
            </div>
            <div>
              <span className="text-primary font-semibold block mb-1">Um 1800</span>
              <p>Grundlegende Renovierung im klassizistischen Stil. Es entstand das dreigeschossige Traufseithaus mit Mansarddach und den markanten Pfeilerarkaden im Innenhof.</p>
            </div>
            <div>
              <span className="text-primary font-semibold block mb-1">Architektonische Schätze</span>
              <p>Die freitragende Eichentreppe von 1725, kunstvolle Reliefmedallions mit Putten und die „Belle Etage“ im 2. Obergeschoss zeugen von barocker Pracht und klassizistischer Eleganz.</p>
            </div>
            <div>
              <span className="text-primary font-semibold block mb-1">1938 bis heute</span>
              <p>Erwerb durch Franz Müller, Mitbegründer der Musterstadter Sandkerwa. Die Räume bewahren bis heute Details wie die vier Jahreszeiten als Holzreliefs und Teile der alten Stadtmauer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
