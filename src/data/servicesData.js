import { 
  Home, 
  Shirt, 
  Briefcase, 
  Armchair, 
  Move, 
  Droplet, 
  Sparkles, 
  Building2,
  Construction,
  ShieldCheck,
  Waves,
  Car,
  StickyNote
} from 'lucide-react';
export const servicesData = [
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    shortDesc: "Comprehensive cleaning for apartments, houses, and estates in Nairobi.",
    fullDesc: "Experience the ultimate home hygiene with our signature residential service. We handle everything from high-rise apartments to sprawling estates with precision and a commitment to a non-toxic environment.",
    icon: Home,
    price: "On Request",
    features: [
      "Dusting and surface wiping",
      "Floor vacuuming and mopping",
      "Kitchen deep cleaning (appliances, cabinets, sinks)",
      "Bathroom sanitization",
      "Bedroom cleaning and bed making",
      "Balcony cleaning",
      "Trash removal",
      "After-party cleaning"
    ],
    image: "/images/residential_kit.png",
    category: "Residential"
  },
  {
    id: "office-commercial",
    title: "Office & Commercial",
    slug: "office-commercial",
    shortDesc: "Professional cleaning for offices, shops, schools, hospitals & buildings.",
    fullDesc: "A clean workspace is a productive one. Our commercial teams provide discreet, high-standard maintenance for corporate and public environments.",
    icon: Building2,
    price: "On Request",
    features: [
      "Desk and workstation cleaning",
      "Reception and common area cleaning",
      "Restroom sanitization and restocking",
      "Floor polishing and scrubbing",
      "Interior & exterior window cleaning",
      "Waste collection and disposal",
      "Scheduled daily/weekly/monthly contracts"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    category: "Commercial"
  },
  {
    id: "laundry-dry-cleaning",
    title: "Laundry & Dry Cleaning",
    slug: "laundry-dry-cleaning",
    shortDesc: "Convenient and professional garment care with free pickup.",
    fullDesc: "Premium care for your wardrobe. From everyday wear to specialized wedding gowns, we ensure your garments return fresh, crisp, and perfectly folded.",
    icon: Shirt,
    price: "On Request",
    features: [
      "Wash, dry & fold",
      "Free pickup & delivery (selected areas)",
      "Stain treatment",
      "Suit & gown dry cleaning",
      "Wedding dress care",
      "Ironing & pressing services"
    ],
    image: "/images/dry_cleaning_shirts.png",
    category: "Specialized"
  },
  {
    id: "carpet-upholstery",
    title: "Carpet & Upholstery",
    slug: "carpet-upholstery",
    shortDesc: "Deep steam cleaning for carpets, sofas, and mattresses.",
    fullDesc: "Revitalize your living space. Our deep-shampooing technology removes allergens and stains, leaving your furniture and floors smelling fresh and looking new.",
    icon: Armchair,
    price: "On Request",
    features: [
      "Carpet shampooing",
      "Sofa and upholstery cleaning",
      "Mattress deep cleaning",
      "Odor and stain removal",
      "Dust mite treatment",
      "Fast drying technology"
    ],
    image: "/images/carpet_cleaning_hero.png",
    category: "Specialized"
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out",
    slug: "move-in-out",
    shortDesc: "Detailed deep cleaning ideal for tenants and landlords.",
    fullDesc: "Stress-free moving starts here. We painstakingly detail every corner—from cabinets to window tracks—to ensure you get your full deposit back.",
    icon: Move,
    price: "On Request",
    features: [
      "Cabinet and wardrobe cleaning",
      "Appliance deep cleaning",
      "Wall and skirting cleaning",
      "Window tracks cleaning",
      "Floor scrubbing",
      "Cobweb removal"
    ],
    image: "/images/move_in_out.png",
    category: "Specialized"
  },
  {
    id: "post-construction",
    title: "Post-Construction",
    slug: "post-construction",
    shortDesc: "Detailed cleaning after renovations or new building works.",
    fullDesc: "Turn a construction site into a home. We specialize in removing industrial dust, paint splatters, and cement stains from all surfaces.",
    icon: Construction,
    price: "On Request",
    features: [
      "Removal of dust and debris",
      "Paint and cement stain removal",
      "Glass polishing",
      "Deep floor cleaning",
      "Full sanitization"
    ],
    image: "/images/post_construction.png",
    category: "Commercial"
  },
  {
    id: "fumigation-pest-control",
    title: "Pest Control",
    slug: "fumigation-pest-control",
    shortDesc: "Safe and effective fumigation solutions across Kenya.",
    fullDesc: "Total protection against pests. Our government-approved eco-friendly treatments target everything from bedbugs to rodents safely and effectively.",
    icon: ShieldCheck,
    price: "On Request",
    features: [
      "Bedbug treatment",
      "Cockroach control",
      "Termite treatment",
      "Rodent control",
      "Mosquito control",
      "Office & warehouse fumigation"
    ],
    image: "/images/pest_control.png",
    category: "Specialized"
  },
  {
    id: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    shortDesc: "Professional disinfection of underground and overhead tanks.",
    fullDesc: "Ensure your water is safe for consumption. We remove sludge and disinfect your tanks using certified, safe water treatment protocols.",
    icon: Waves,
    price: "On Request",
    features: [
      "Underground tank cleaning",
      "Overhead tank cleaning",
      "Sludge removal",
      "Tank disinfection",
      "Safe water treatment"
    ],
    image: "/images/water_tank.png",
    category: "Industrial"
  },
  {
    id: "car-interior-cleaning",
    title: "Car Interior Cleaning",
    slug: "car-interior-cleaning",
    shortDesc: "Premium dashboard detailing and seat shampooing.",
    fullDesc: "That new car smell, restored. We deep-clean every inch of your vehicle's interior, from leather treatment to odor removal.",
    icon: Car,
    price: "On Request",
    features: [
      "Seat shampooing",
      "Dashboard detailing",
      "Carpet vacuuming",
      "Odor removal",
      "Leather treatment"
    ],
    image: "/images/car_detailing.png",
    category: "Specialized"
  },
  {
    id: "sanitization-services",
    title: "Sanitization & Virus Control",
    slug: "sanitization-services",
    shortDesc: "Hospital-grade disinfection for homes and offices.",
    fullDesc: "Protect your health with professional infection control. Our fogging and misting services eliminate pathogens from high-touch surfaces.",
    icon: Droplet,
    price: "On Request",
    features: [
      "COVID & virus disinfection",
      "Fogging & mist spraying",
      "High-touch surface sanitization",
      "Hospital-grade disinfectants",
      "Emergency response sanitization"
    ],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000",
    category: "Industrial"
  }
];
