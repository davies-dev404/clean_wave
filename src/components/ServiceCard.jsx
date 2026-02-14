import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export function ServiceCard({ title, description, price, icon, features = [], image, delay = 0 }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.5, ease: "easeOut" }
            }}
            transition={{ duration: 0.5, delay: delay * 0.1 }} 
            viewport={{ once: true }} 
            className="group border-draw-container bg-card rounded-3xl border border-border/50 premium-shadow hover:premium-shadow-hover transition-all duration-500 flex flex-col h-full"
        >
            {/* Border Drawing Lines */}
            <div className="border-draw-line line-top" />
            <div className="border-draw-line line-right [transition-delay:125ms]" />
            <div className="border-draw-line line-bottom [transition-delay:250ms]" />
            <div className="border-draw-line line-left [transition-delay:375ms]" />

            {image && (
                <div className="relative h-56 overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1000";
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        {icon}
                    </div>
                </div>
            )}
            
            <div className="p-10 flex flex-col flex-grow">
                {!image && (
                    <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {icon}
                    </div>
                )}
      
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display tracking-tight leading-tight">{title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-[15px] font-light">
                {description}
            </p>

            {features.length > 0 && (
                <ul className="mb-8 space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-[13px] text-slate-600 font-medium">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="font-bold text-[10px] text-primary uppercase tracking-[0.2em]">{price || "Price: On Request"}</span>
                    <Link to="/quote">
                        <Button variant="ghost" className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-primary transition-colors p-0 hover:bg-transparent drawing-line uppercase tracking-wider">
                            Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

// Added Button import from ui to match usage if needed, or just use button tag. 
// Original used a button tag inside Link.
// Button component is better if available (it is in @/components/ui/button).
import { Button } from "@/components/ui/button";
