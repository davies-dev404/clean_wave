import { useParams, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from '@/components/SEO';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                <Link to="/services">
                    <Button>Back to Services</Button>
                </Link>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
             <SEO 
                title={service.title}
                description={service.shortDesc}
            />
            {/* Hero Banner */}
            <div className="relative h-[400px] bg-slate-900 text-white overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-4xl px-4 pt-20">
                        <motion_div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
                                <Icon className="w-10 h-10 text-primary" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">{service.title}</h1>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto">{service.shortDesc}</p>
                        </motion_div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <ScrollAnimation>
                            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.fullDesc}
                            </p>
                            
                            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6">What's Included</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-1">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                            <p className="text-slate-600 mb-6">
                                Book your {service.title.toLowerCase()} session today and experience the difference.
                            </p>
                            <Link to="/quote">
                                <Button size="lg" className="w-full text-lg mb-4">Get a Quote</Button>
                            </Link>
                            <div className="text-center">
                                <Link to="/services" className="text-sm text-slate-500 hover:text-primary flex items-center justify-center gap-2">
                                    <ArrowLeft className="w-4 h-4" /> Back to all Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper for motion div since we can't use motion.div directly inside the return if motion isn't imported as default or named properly in scope without issues sometimes if we are lazy.
// Actually I forgot to import motion.
import { motion } from "framer-motion";
const motion_div = motion.div;
