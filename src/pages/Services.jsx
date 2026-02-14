import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesData } from "@/data/servicesData";

export default function Services() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Residential", "Commercial", "Specialized"];

    const filteredServices = activeCategory === "All" 
        ? servicesData 
        : servicesData.filter(s => s.category === activeCategory);

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto container-padding">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900">Our Services</h1>
                    <p className="text-lg text-muted-foreground mb-10">
                        Tailored cleaning solutions for every need. From high-rise offices to cozy apartments, 
                        we bring the same level of excellence and attention to detail.
                    </p>
                    
                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-lg font-medium transition-all duration-300 relative px-2 py-1 ${
                                    activeCategory === cat 
                                    ? "text-primary" 
                                    : "text-slate-500 hover:text-primary/70"
                                }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        initial={false}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={s.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ServiceCard 
                                        title={s.title} 
                                        description={s.shortDesc} 
                                        price={s.price || "Price on Request"} 
                                        icon={<Icon className="w-6 h-6" />} 
                                        features={s.features} 
                                        image={s.image}
                                        slug={s.slug}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
