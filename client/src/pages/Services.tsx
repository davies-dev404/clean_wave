import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { Shirt, Home, Briefcase, Armchair, Move, Droplet } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Residential Cleaning",
      desc: "Comprehensive cleaning for your home. We handle everything from dusting shelves to scrubbing bathroom tiles.",
      price: "From KES 1,500",
      icon: <Home className="w-6 h-6" />,
      features: ["Living room & bedrooms", "Bathroom sanitization", "Kitchen deep clean", "Floor mopping"]
    },
    {
      title: "Laundry Wash & Fold",
      desc: "Hate laundry day? Let us handle it. We wash, dry, and neatly fold your clothes.",
      price: "KES 200 per KG",
      icon: <Shirt className="w-6 h-6" />,
      features: ["Free Pickup & Delivery", "Premium detergents", "Separate colors", "24hr turnaround"]
    },
    {
      title: "Office Cleaning",
      desc: "Keep your workspace professional and hygienic with our tailored office packages.",
      price: "From KES 5,000",
      icon: <Briefcase className="w-6 h-6" />,
      features: ["Desk & equipment dusting", "Trash removal", "Common area cleaning", "Restroom maintenance"]
    },
    {
      title: "Carpet & Upholstery",
      desc: "Revitalize your furniture and carpets with our deep steam cleaning technology.",
      price: "From KES 1,500/seat",
      icon: <Armchair className="w-6 h-6" />,
      features: ["Stain removal", "Odor elimination", "Quick drying", "Fabric protection"]
    },
    {
      title: "Move-In/Move-Out",
      desc: "Moving is stressful enough. Leave the cleaning to us and ensure you get your deposit back.",
      price: "From KES 5,000",
      icon: <Move className="w-6 h-6" />,
      features: ["Inside cabinets", "Appliance cleaning", "Window cleaning", "Deep floor scrubbing"]
    },
    {
      title: "Dry Cleaning",
      desc: "Delicate care for your suits, dresses, and special garments.",
      price: "From KES 500/item",
      icon: <Droplet className="w-6 h-6" />,
      features: ["Stain treatment", "Pressing included", "Hanger delivery", "Fabric expertise"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tailored cleaning solutions for every need. From high-rise offices to cozy apartments, 
            we bring the same level of excellence and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="draw-line cursor-pointer font-medium text-primary">All Services</span>
            <span className="draw-line cursor-pointer font-medium text-slate-500">Residential</span>
            <span className="draw-line cursor-pointer font-medium text-slate-500">Commercial</span>
            <span className="draw-line cursor-pointer font-medium text-slate-500">Specialized</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard 
              key={i}
              title={s.title}
              description={s.desc}
              price={s.price}
              icon={s.icon}
              features={s.features}
              delay={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
