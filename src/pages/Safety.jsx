import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, ClipboardCheck, Activity, Users, Thermometer, FlaskConical, AlertTriangle, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';

const safetyProtocols = [
    {
        icon: Users,
        title: "Vetted Professionals",
        description: "Every technician undergoes rigorous background checks and continuous character assessments. Your home is a sanctuary; we only send people we trust in our own."
    },
    {
        icon: FlaskConical,
        title: "Non-Toxic Standards",
        description: "We use hospital-grade, government-approved disinfectants that are lethal to pathogens but gentle on your pets, children, and the environment. You can manage your cookie preferences (including declining them) using the link in our site footer."
    },
    {
        icon: ClipboardCheck,
        title: "Standardized SOPs",
        description: "Our teams follow strict Standard Operating Procedures for every task, ensuring consistency and preventing cross-contamination between different areas."
    },
    {
        icon: ShieldCheck,
        title: "Full Insurance",
        description: "Rest easy knowing your property is protected. CleanWave is fully insured against accidental damages and workplace injuries."
    }
];

const checklistItems = [
    "Compulsory Personal Protective Equipment (PPE)",
    "Color-coded microfiber cloths for zero cross-contamination",
    "HEPA-filter grade vacuuming technology",
    "Real-time quality assurance supervisor on-site",
    "Contactless payment & digital booking",
    "All tools sanitized between service calls"
];

export default function Safety() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <SEO 
                title="Safety Standards - CleanWave Kenya"
                description="Discover how CleanWave Kenya prioritizes your health and property safety through strict protocols and vetted personnel."
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <ScrollAnimation animation="fade-up">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            Safety Is Our DNA
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                            The CleanWave <br /> Safety Standard
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Professional cleaning is not just about aesthetics—it's about the safety of your family, your health, and your property. 
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Core Pillars */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {safetyProtocols.map((p, i) => (
                        <ScrollAnimation key={i} delay={i * 100} animation="scale-up">
                            <motion.div 
                                whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 premium-shadow hover:premium-shadow-hover transition-all duration-500 h-full border-draw-container relative overflow-hidden"
                            >
                                {/* Border Drawing Lines */}
                                <div className="border-draw-line line-top" />
                                <div className="border-draw-line line-right [transition-delay:100ms]" />
                                <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                <div className="border-draw-line line-left [transition-delay:300ms]" />

                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200 group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-6 relative z-10">
                                    <p.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 relative z-10 leading-tight">{p.title}</h3>
                                <p className="text-slate-500 text-[15px] leading-relaxed font-light relative z-10">{p.description}</p>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Deep Dive Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    
                    <ScrollAnimation animation="fade-right">
                        <h2 className="text-3xl font-serif font-bold mb-8">Rigorous On-Site <br /> Protocols</h2>
                        <div className="space-y-4">
                            {checklistItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Activity className="w-3 h-3 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-left" delay={200}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3" />
                            <img 
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" 
                                alt="Professionally sanitized equipment" 
                                className="relative z-10 rounded-[3rem] shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-slate-900">
                                        <div className="font-bold text-sm">Certified Safe</div>
                                        <div className="text-[10px] text-slate-500 tracking-widest uppercase">KEBS Standard</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Bottom Callout */}
                <ScrollAnimation animation="fade-up" delay={300}>
                    <div className="mt-24 text-center">
                        <div className="max-w-xl mx-auto p-1 border-2 border-dashed border-slate-200 rounded-[3rem]">
                            <div className="bg-white p-12 rounded-[2.8rem]">
                                <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Our Safety Data Sheets (SDS)</h3>
                                <p className="text-slate-600 mb-8">
                                    Corporate clients can request full SDS for our hospital-grade solutions for OSHA compliance purposes.
                                </p>
                                <a href="mailto:safety@cleanwave.co.ke" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-colors">
                                    Contact Safety Office
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
