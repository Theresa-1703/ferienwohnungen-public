import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Ferienwohnungen", href: "#wohnungen" },
  { label: "Geschichte", href: "#geschichte" },
  { label: "Aktivitäten", href: "#aktivitaeten" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-card/85 backdrop-blur-md shadow-sm py-3"
          : "bg-card/80 backdrop-blur-md shadow-sm py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="font-display text-2xl font-semibold tracking-wide text-foreground">
          Sandpalais
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild>
            <a href="#kontakt">Verfügbarkeit prüfen</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card/98 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full" asChild>
            <a href="#kontakt" onClick={() => setMobileOpen(false)}>
              Verfügbarkeit prüfen
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
