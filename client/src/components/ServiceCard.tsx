import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features?: string[];
  delay?: number;
}

export function ServiceCard({ title, description, price, icon, features = [], delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/50 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-6 border-t border-border/50 flex items-center justify-between mt-auto">
        <span className="font-bold text-lg text-primary">{price}</span>
        <Link href="/booking">
          <button className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
