import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Users, Mail, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { toast } from "sonner";

const InquiryForm = () => {
  const [step, setStep] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [apartment, setApartment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const steps = [
    { label: "Reisedaten", icon: CalendarIcon },
    { label: "Gäste & Wohnung", icon: Users },
    { label: "Kontaktdaten", icon: Mail },
  ];

  const canNext = () => {
    if (step === 0) return checkIn && checkOut;
    if (step === 1) return guests && apartment;
    if (step === 2) return name && email;
    return false;
  };

  const handleSubmit = () => {
    toast.success("Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
    setStep(0);
    setCheckIn(undefined);
    setCheckOut(undefined);
    setGuests("");
    setApartment("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Buchungsanfrage
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Jetzt anfragen
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Steps indicator */}
        <div className="flex justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-semibold transition-colors",
                  i <= step ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                )}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span className="hidden sm:inline font-body text-xs text-muted-foreground">{s.label}</span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 shadow-sm border border-border"
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Anreise</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !checkIn && "text-muted-foreground")}>
                          <CalendarIcon size={16} className="mr-2" />
                          {checkIn ? format(checkIn, "dd. MMM yyyy", { locale: de }) : "Datum wählen"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} disabled={(d) => d < new Date()} className="p-3 pointer-events-auto" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Abreise</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left", !checkOut && "text-muted-foreground")}>
                          <CalendarIcon size={16} className="mr-2" />
                          {checkOut ? format(checkOut, "dd. MMM yyyy", { locale: de }) : "Datum wählen"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} disabled={(d) => d < (checkIn || new Date())} className="p-3 pointer-events-auto" />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Anzahl Gäste</label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger><SelectValue placeholder="Gäste wählen" /></SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Gast" : "Gäste"}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Wohnung</label>
                  <Select value={apartment} onValueChange={setApartment}>
                    <SelectTrigger><SelectValue placeholder="Wohnung wählen" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residenz">Residenz Suite (85 m², bis 4 Gäste)</SelectItem>
                      <SelectItem value="gondoliere">Gondoliere Studio (45 m², bis 2 Gäste)</SelectItem>
                      <SelectItem value="familie">Familien Apartment (110 m², bis 6 Gäste)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input value={name} onChange={e => setName(e.target.value)} placeholder="Ihr vollständiger Name" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">E-Mail</label>
                  <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Nachricht (optional)</label>
                  <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Besondere Wünsche oder Fragen..." rows={3} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              className={step === 0 ? "invisible" : ""}
            >
              <ArrowLeft size={16} className="mr-1" /> Zurück
            </Button>

            {step < 2 ? (
              <Button onClick={() => setStep(s => s + 1)} disabled={!canNext()}>
                Weiter <ArrowRight size={16} className="ml-1" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canNext()}>
                Anfrage senden <Check size={16} className="ml-1" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryForm;
