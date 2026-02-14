import { Shield, Sparkles, Zap, Users, Target, BookOpen, Clock, Heart, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';

const stats = [
    { label: "Pristine Spaces", value: "5,000+" },
    { label: "Expert Cleaners", value: "50+" },
    { label: "Happy Clients", value: "2,000+" },
    { label: "Cities Covered", value: "5" },
];

const values = [
    {
        icon: Shield,
        title: "Uncompromising Trust",
        description: "We don't just clean; we protect. Every member of our team undergoes rigorous background checks and training to ensure your sanctuary remains safe and secure.",
    },
    {
        icon: Sparkles,
        title: "Eco-Luxe Standards",
        description: "We use hospital-grade, non-toxic solutions that are powerful on grime but gentle on your family and pets. Premium hygiene without the chemical footprint.",
    },
    {
        icon: Zap,
        title: "Next-Gen Efficiency",
        description: "Leveraging modern technology for seamless booking, real-time tracking, and precision cleaning techniques that save you time and money.",
    },
];

const USPs = [
    "Vetted & Insured Professionals",
    "100% Satisfaction Guarantee",
    "Eco-Friendly Products Only",
    "Flexible Recurring Schedules",
    "Deep Cleaning Specialists",
    "Premium Support 24/7"
];

export default function About() {
    return (
        <div className="min-h-screen bg-white selection:bg-primary/20">
            <SEO 
                title="Our Story - CleanWave Kenya"
                description="Discover the heart behind CleanWave Kenya. From our humble beginnings to becoming Nairobi's trusted premium cleaning partner."
            />

            {/* Reduced Hero Section - Corporate/Story Style */}
            <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                        alt="Our Workspace" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/70" />
                </div>
                
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <ScrollAnimation animation="fade-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                            The Heart of CleanWave
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light">
                            More than a business, we are a family dedicated to the art of professional hygiene and trust.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Our Story Narrative Section */}
            <section className="py-24 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation animation="fade-right">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                                How a simple idea transformed <br /> into a standard of excellence.
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-left">
                                <p>
                                    Founded in 2023, CleanWave Kenya began with a simple observation: Nairobi's fast-paced lifestyle was leaving people with less time for the things that truly mattered. We saw an opportunity not just to clean homes, but to give back hours of peace and sanctuary to our neighbors.
                                </p>
                                <p>
                                    What started as a small team of three has grown into a premier cleaning agency trusted by hundreds of families and high-profile businesses. Our journey has been defined by a relentless pursuit of 'The Perfect Clean'—a standard that goes beyond the surface to ensure health, safety, and absolute discretion.
                                </p>
                                <p>
                                    Today, we stand as a beacon of reliability in Kenya, employing dozens of trained professionals and leading the charge in eco-friendly cleaning technology.
                                </p>
                            </div>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="fade-left" delay={200}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                                <img 
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop" 
                                    alt="Our Team Planning" 
                                    className="relative rounded-[2rem] shadow-2xl z-10"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Leadership/Team Section */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our People</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">The Experts Behind the Wave</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Mutua", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                            { name: "John Kamau", role: "Operations Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                            { name: "Grace Wanjiku", role: "Quality Assurance Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
                        ].map((member, i) => (
                            <ScrollAnimation key={i} delay={i * 100} animation="fade-up">
                                <motion.div 
                                    whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center border-draw-container premium-shadow hover:premium-shadow-hover transition-all duration-500 relative h-full"
                                >
                                    {/* Border Drawing Lines */}
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-8 border-slate-50 relative z-10 shadow-xl group-hover:rotate-3">
                                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 relative z-10">{member.name}</h3>
                                    <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase relative z-10">{member.role}</p>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section - Integrated naturally */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[4rem] overflow-hidden p-2">
                        <div className="grid lg:grid-cols-3 gap-2">
                            {values.map((v, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="p-16 text-center group border-draw-container relative overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-500 rounded-[3rem]"
                                >
                                    {/* Border Drawing Lines */}
                                    <div className="border-draw-line line-top !bg-primary/50" />
                                    <div className="border-draw-line line-right !bg-primary/50 [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom !bg-primary/50 [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left !bg-primary/50 [transition-delay:300ms]" />

                                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-6 shadow-2xl">
                                        <v.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">{v.title}</h3>
                                    <p className="text-white/60 text-[15px] leading-relaxed font-light">{v.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Key Stats - Impact Numbers (Re-styled for About context) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-2 transition-colors group-hover:text-primary">{stat.value}</div>
                                <div className="text-slate-500 font-bold tracking-widest uppercase text-[10px]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Final CTA */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">Want to learn more about how we work?</h2>
                    <p className="text-slate-600 mb-10">Our process is transparent and built around your unique needs. Let's discuss your space today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="rounded-full px-8">Talk to us</Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="outline" size="lg" className="rounded-full px-8">Explore Services</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
