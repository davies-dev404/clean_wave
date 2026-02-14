import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Skeleton } from "@/components/ui/skeleton";
import SEO from '@/components/SEO';
import { ArrowRight, Calendar, Calculator, ShieldCheck, Newspaper, HeartHandshake, Lightbulb, ScrollText, Quote, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const carpetHero = '/images/carpet_cleaning_hero.png';
const heroImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000";
const teamImg = '/images/team.png';
const careImg = '/images/cleaning_basket.png';
import { newsItems } from '@/data/newsData';
import ScrollAnimation from '@/components/ScrollAnimation';
import { servicesData } from "@/data/servicesData";

const Home = () => {
    const features = servicesData.slice(0, 3).map(s => ({
        title: s.title,
        desc: s.shortDesc,
        image: s.image,
        link: `/services/${s.slug}`
    }));

    const testimonials = [
        {
            text: "CleanWave transformed my home! The team was professional, thorough, and left everything sparkling. Best cleaning service in Nairobi.",
            role: "Homeowner, Westlands"
        },
        {
            text: "Reliable and efficient. We use them for our bi-weekly office cleaning and couldn't be happier with the results.",
            role: "Office Manager, Kilimani"
        },
        {
            text: "The dry cleaning pickup service is a game changer. Friendly staff and my clothes look brand new.",
            role: "Busy Professional"
        }
    ];

    const [heroLoaded, setHeroLoaded] = useState(false);

    return (
        <div className="min-h-screen bg-background font-sans">
            <SEO 
                title="Home"
                description="CleanWave Kenya provides premium residential and commercial cleaning services. Eco-friendly, reliable, and professional."
            />
            <section className="relative min-h-[75vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-muted">
                    {!heroLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                    )}
                    <img 
                        src={heroImage} 
                        alt="CleanWave Hero" 
                        fetchpriority="high"
                        onLoad={() => setHeroLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-blue-900/10" />
                </div>
        
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 mt-16">
                    <ScrollAnimation animation="fade-up">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-white font-bold text-xs uppercase tracking-widest mb-8 border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Same-Day Service Available
                            </div>
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1] drop-shadow-2xl">
                                Experience the joy of <br />
                                <span className="text-primary drop-shadow-[0_4px_30px_rgba(59,130,246,0.8)]">pristine spaces</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/95 mb-12 border-l-4 border-primary pl-6 drop-shadow-lg max-w-2xl leading-relaxed font-light">
                                Professional, hospital-grade cleaning services tailored to your lifestyle. We handle the mess so you can handle the rest.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <Link to="/quote">
                                    <Button size="xl" className="group text-lg px-12 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] bg-primary text-white border-primary hover:bg-primary/90 h-16 relative overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-3">
                                            Get Your Free Quote 
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skewed-shine" />
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button size="xl" variant="outline" className="text-lg px-10 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-md h-16 border-2 transition-all duration-300">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                            
                            <div className="mt-12 flex items-center gap-6 text-white/60">
                                <div className="flex -space-x-3">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-primary flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                                        50+
                                    </div>
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    Joined by <span className="text-white font-bold">50+ households</span> in Nairobi
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>


            <section className="relative z-20 -mt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ScrollAnimation delay={0} className="h-full">
                            <Link to="/quote" className="group h-full block">
                                <motion.div 
                                    whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="bg-white border-draw-container hover:bg-primary transition-colors duration-500 p-8 rounded-2xl shadow-xl border border-slate-100 h-full flex flex-col items-start gap-4 group-hover:border-primary/20 relative overflow-hidden"
                                >
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-white/20 relative z-10 transition-transform duration-500 transform group-hover:rotate-6 shadow-sm">
                                        <Calendar className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900 group-hover:text-white">Book Online</h3>
                                        <p className="text-slate-500 group-hover:text-white/90 text-sm font-light leading-relaxed">Schedule your cleaning session in under 60 seconds.</p>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation delay={100} className="h-full">
                            <div className="group h-full">
                                <motion.div 
                                    whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="bg-white border-draw-container hover:bg-primary transition-colors duration-500 p-8 rounded-2xl shadow-xl border border-slate-100 h-full flex flex-col items-start gap-4 group-hover:border-primary/20 relative overflow-hidden"
                                >
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-white/20 relative z-10 transition-transform duration-500 transform group-hover:rotate-6 shadow-sm">
                                        <Droplets className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900 group-hover:text-white">Eco-Friendly</h3>
                                        <p className="text-slate-500 group-hover:text-white/90 text-sm font-light leading-relaxed">We use safe, non-toxic products for your family and pets.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation delay={200} className="h-full">
                            <Link to="/about" className="group h-full block">
                                <motion.div 
                                    whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="bg-white border-draw-container hover:bg-primary transition-colors duration-500 p-8 rounded-2xl shadow-xl border border-slate-100 h-full flex flex-col items-start gap-4 group-hover:border-primary/20 relative overflow-hidden"
                                >
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-white/20 relative z-10 transition-transform duration-500 transform group-hover:rotate-6 shadow-sm">
                                        <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900 group-hover:text-white">Trusted Staff</h3>
                                        <p className="text-slate-500 group-hover:text-white/90 text-sm font-light leading-relaxed">Vetted, trained, and uniformed professionals you can trust.</p>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollAnimation>

                        <ScrollAnimation delay={300} className="h-full">
                            <Link to="/newsroom" className="group h-full block">
                                <motion.div 
                                    whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="bg-white border-draw-container hover:bg-primary transition-colors duration-500 p-8 rounded-2xl shadow-xl border border-slate-100 h-full flex flex-col items-start gap-4 group-hover:border-primary/20 relative overflow-hidden"
                                >
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-white/20 relative z-10 transition-transform duration-500 transform group-hover:rotate-6 shadow-sm">
                                        <Newspaper className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900 group-hover:text-white">Cleaning Tips</h3>
                                        <p className="text-slate-500 group-hover:text-white/90 text-sm font-light leading-relaxed">Visit our blog for tips on maintaining a clean home.</p>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>



            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <ScrollAnimation animation="fade-right">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Dedication</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                                    Why Choose CleanWave Kenya?
                                </h2>
                            </div>
                        </ScrollAnimation>
            
                        <ScrollAnimation animation="fade-left" delay={200}>
                            <div className="bg-card rounded-2xl shadow-sm p-8 border border-border/50">
                                <Tabs defaultValue="mission" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-8">
                                        <TabsTrigger value="mission">Mission</TabsTrigger>
                                        <TabsTrigger value="vision">Vision</TabsTrigger>
                                        <TabsTrigger value="values">Values</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="mission" className="animate-in fade-in slide-in-from-bottom-2">
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            To provide top-tier cleaning solutions that give our clients back their time and peace of mind, while creating dignified employment opportunities in our community.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="vision" className="animate-in fade-in slide-in-from-bottom-2">
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            To be Kenya's most trusted household name for hygiene and organisation services.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="values" className="animate-in fade-in slide-in-from-bottom-2">
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            Integrity, Reliability, Excellence, and Respect. We treat your home as if it were our own.
                                        </p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <ScrollAnimation key={i} delay={i * 100}>
                                <Link to={item.link} className="group relative overflow-hidden rounded-[2.5rem] h-[450px] bg-accent block cursor-pointer border-draw-container premium-shadow hover:premium-shadow-hover transition-all duration-500">
                                    <div className="border-draw-line line-top" />
                                    <div className="border-draw-line line-right [transition-delay:100ms]" />
                                    <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                    <div className="border-draw-line line-left [transition-delay:300ms]" />

                                    <div className="absolute inset-0">
                                        <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent group-hover:via-slate-900/60 transition-colors duration-500"></div>
                  
                                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                                        <h3 className="text-3xl font-serif font-bold mb-4 transform transition-all duration-500 group-hover:-translate-y-2 drop-shadow-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 text-sm font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <div className="mt-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                            <Button variant="link" className="text-primary p-0 h-auto justify-start font-bold uppercase text-[10px] tracking-[0.2em] drawing-line flex items-center gap-2">
                                                View Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                         <Link to="/services">
                            <Button variant="outline" size="lg" className="rounded-full">View All Services</Button>
                         </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                            Specialized care for every material<br /> and surface
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.slice(0, 6).map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <ScrollAnimation key={i} delay={i * 50} animation="fade-up">
                                    <motion.div 
                                        whileHover={{ 
                                            scale: 1.03,
                                            transition: { duration: 0.4, ease: "easeOut" }
                                        }}
                                        className="bg-card border-draw-container premium-shadow hover:premium-shadow-hover transition-all duration-500 p-10 rounded-[2rem] border border-border/50 group flex flex-col items-start text-left h-full relative"
                                    >
                                        <div className="border-draw-line line-top" />
                                        <div className="border-draw-line line-right [transition-delay:100ms]" />
                                        <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                        <div className="border-draw-line line-left [transition-delay:300ms]" />

                                        <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 leading-tight">{service.title}</h3>
                                        <p className="text-slate-500 mb-8 line-clamp-3 text-[15px] font-light leading-relaxed">
                                            {service.shortDesc}
                                        </p>
                                        <div className="mt-auto">
                                            <Link to={`/services/${service.slug}`}>
                                                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary font-bold uppercase text-[10px] tracking-[0.2em] drawing-line flex items-center gap-2">
                                                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Client Reviews</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-16">
                        We are proud of the relationships we build with our clients. Here is what they have to say.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {testimonials.map((story, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors duration-300">
                                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                                <p className="text-sm leading-relaxed mb-6 opacity-90">{story.text}</p>
                                <p className="font-bold text-primary">— {story.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">See Us In Action</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                                Bringing sparkle to every corner
                            </h2>
                            <p className="text-xl opacity-80 mb-8 max-w-lg">
                                Watch how our team transforms spaces using advanced techniques and eco-friendly products.
                            </p>
                            <Link to="/gallery">
                                <Button size="xl" className="bg-primary hover:bg-primary/90 text-white border-none min-w-[200px]">
                                    Browse Our work
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <video 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                className="w-full h-full object-cover opacity-80"
                            >
                                <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=330c6976fa4f866152864cc7f28848d613c9a0c3&profile_id=175" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 text-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 inline-block">FAQs</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Common Questions</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Find answers to the most frequent questions about our booking process, pricing, and service guarantees.
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[150px]">Get in touch</Button>
                            </Link>
                        </div>
              
                        <div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border-none bg-white shadow-sm rounded-lg px-2">
                                    <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-slate-900">Do I need to be home during the cleaning?</AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4 text-slate-600">
                                        No, you don't. Many clients leave a key or access code. Our staff is fully vetted and insured for your peace of mind.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-none bg-white shadow-sm rounded-lg px-2">
                                    <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-slate-900">Are your products safe for pets?</AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4 text-slate-600">
                                        Absolutely. We use non-toxic, eco-friendly products that are safe for children and pets.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="border-none bg-white shadow-sm rounded-lg px-2">
                                    <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-slate-900">What areas do you cover?</AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4 text-slate-600">
                                        We currently serve Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {newsItems.length > 0 && (
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Blog</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">Latest Cleaning Tips</h2>
              
                        <div className="grid md:grid-cols-3 gap-8">
                            {newsItems.slice(0, 3).map((item, index) => (
                                <Link to={`/news/${item.id}`} key={index} className="group cursor-pointer text-left block">
                                    <motion.div 
                                        whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                                        className="bg-white border-draw-container premium-shadow hover:premium-shadow-hover transition-all duration-500 p-4 rounded-[2rem] border border-slate-100 relative h-full"
                                    >
                                        <div className="border-draw-line line-top" />
                                        <div className="border-draw-line line-right [transition-delay:100ms]" />
                                        <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                        <div className="border-draw-line line-left [transition-delay:300ms]" />

                                        <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] relative bg-slate-100 border border-slate-100 shadow-sm z-10">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                loading="lazy" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                onError={(e) => { e.target.src = ""; }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">Read Article —</span>
                                            </div>
                                        </div>
                                        <div className="px-2 pb-4 z-10 relative">
                                            <div className="text-primary text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">{item.date}</div>
                                            <h3 className="text-xl font-serif font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{item.title}</h3>
                                            <p className="text-slate-500 line-clamp-2 text-[13px] font-light leading-relaxed mb-4">{item.excerpt}</p>
                                            <div className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 drawing-line w-fit">
                                                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="relative z-20 lg:-mb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
                        <div className="p-12 lg:p-24 flex flex-col justify-center">
                            <span className="text-xs font-bold uppercase tracking-widest bg-white/10 w-fit px-3 py-1 rounded mb-6">Have a custom request?</span>
                            <h2 className="text-4xl font-serif font-bold mb-4">Request a Call Back<br/>Today</h2>
                            <p className="text-white/70 mb-8 max-w-md">Leave your details and we'll call you back to discuss your cleaning needs.</p>
                  
                            <div>
                                <Link to="/quote">
                                    <Button className="w-full bg-white text-primary hover:bg-slate-100 h-12 text-lg mt-2 font-bold">
                                        Go to Quote Form
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px] lg:h-auto group">
                            <img 
                                src={careImg} 
                                alt="Professional Cleaning Service" 
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/30 to-transparent lg:w-1/2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
