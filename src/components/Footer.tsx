import { Link } from "react-router-dom";

const Footer = () => {
  const legalLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
      <footer className="bg-foreground px-6 py-12">
        <div className="container mx-auto text-center">
          {/* Markenname mit der korrekten Schreibweise */}
          <h3 className="font-display text-2xl text-primary-foreground mb-2">Sandpalais</h3>

          <p className="font-body text-sm text-primary-foreground/60 mb-8">
            Ferienwohnungen im Barockpalais · Musterstadt
          </p>

          {/* Navigation zu den neuen Unterseiten */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {legalLinks.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
            ))}
          </nav>

          {/* Trennlinie */}
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />

          {/* Copyright */}
          <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
            © {new Date().getFullYear()} Sandpalais Musterstadt. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
  );
};

export default Footer;