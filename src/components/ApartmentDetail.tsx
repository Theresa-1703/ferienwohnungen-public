import { X, Wifi, ChefHat, Car, Tv, Snowflake, Bath, Coffee, MapPin, Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const amenityIcons: Record<string, any> = {
  WLAN: Wifi,
  Küche: ChefHat,
  Parkplatz: Car,
  TV: Tv,
  Klimaanlage: Snowflake,
  Badezimmer: Bath,
  Kaffeemaschine: Coffee,
  "Zentrale Lage": MapPin,
};

interface Apartment {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  size: string;
  guests: number;
  price: string;
  amenities: string[];
}

interface ApartmentDetailProps {
  apartment: Apartment | null;
  open: boolean;
  onClose: () => void;
  onInquiry: () => void;
}

const ApartmentDetail = ({ apartment, open, onClose, onInquiry }: ApartmentDetailProps) => {
  if (!apartment) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 bg-card">
        <div className="relative h-72 md:h-96">
          <img
            src={apartment.image}
            alt={apartment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>

        <div className="p-6 md:p-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            {apartment.title}
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-6" />

          <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <Maximize size={16} /> {apartment.size}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={16} /> bis {apartment.guests} Gäste
            </span>
            <span className="font-semibold text-primary">ab {apartment.price}/Nacht</span>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            {apartment.longDescription}
          </p>

          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Ausstattung</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {apartment.amenities.map((a) => {
              const Icon = amenityIcons[a] || Wifi;
              return (
                <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-md px-3 py-2">
                  <Icon size={16} className="text-primary" />
                  {a}
                </div>
              );
            })}
          </div>

          <Button size="lg" className="w-full" onClick={onInquiry}>
            Jetzt anfragen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApartmentDetail;
