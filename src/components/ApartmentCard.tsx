import { motion } from "framer-motion";
import { Users, Maximize, Wifi, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApartmentCardProps {
  title: string;
  description: string;
  image: string;
  size: string;
  guests: number;
  price: string;
  amenities: string[];
  onSelect: () => void;
  index: number;
}

const ApartmentCard = ({ title, description, image, size, guests, price, onSelect, index }: ApartmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 border border-border"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
          <span className="font-body text-xs font-semibold tracking-wider uppercase text-primary">
            ab {price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-5">
          <span className="flex items-center gap-1.5">
            <Maximize size={14} />
            {size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {guests} Gäste
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi size={14} />
            WLAN
          </span>
          <span className="flex items-center gap-1.5">
            <ChefHat size={14} />
            Küche
          </span>
        </div>

        <Button variant="outline" className="w-full" onClick={onSelect}>
          Details ansehen
        </Button>
      </div>
    </motion.div>
  );
};

export default ApartmentCard;
