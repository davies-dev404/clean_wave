import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Sparkles, MapPin, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const testimonials = [
    { name: "Sarah K.", location: "Nairobi", text: "CleanWave transformed my apartment. The deep cleaning service is worth every shilling!" },
    { name: "James O.", location: "Mombasa", text: "Reliable laundry pickup. My suits always come back crisp and fresh." },
    { name: "Anita W.", location: "Kisumu", text: "Friendly staff and they actually arrived on time. Highly recommend for office cleaning." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          {/* Using Unsplash image for a clean, bright living room background */}
          {/* cozy modern living room with sunlight */}
          <img 
            src="https://pixabay.com/get/gc655d7598eb8466badaa737e6174e093efc4b624c32ffd4c449de6ae4d0e4107799118c896f677dd156fd9f06adbfa6768b1f7ed379043250efb8d7b4c10972f_1280.jpg" 
            alt="Clean bright living room" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-padding max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-primary hover:bg-blue-100 border-none rounded-full text-sm">
              ✨ #1 Cleaning Service in Kenya
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 text-slate-900">
              Experience the <br/>
              <span className="text-gradient">Purest Clean</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              CleanWave Kenya brings professional, hotel-standard cleaning to your doorstep. 
              Our eco-friendly processes and background-checked professionals ensure your space is not just clean, but safe and healthy for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/booking">
                <Button size="lg" className="rounded-full px-8 py-7 text-lg shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 hover-lift">
                  Book a Service
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover-lift">
                  See Full Pricing
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <h4 className="font-bold text-slate-900 text-xl">100%</h4>
                <p className="text-sm text-slate-500">Satisfaction Guaranteed</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">50+</h4>
                <p className="text-sm text-slate-500">Vetted Professionals</p>
              </div>
              <div className="hidden md:block">
                <h4 className="font-bold text-slate-900 text-xl">24/7</h4>
                <p className="text-sm text-slate-500">Online Support</p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available Today</span>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs">
                  +2k
                </div>
              </div>
              <span>Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Kenya Trusts CleanWave</h2>
            <p className="text-muted-foreground">We don't just clean; we care for your space with precision and respect.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Trusted & Vetted", desc: "Every cleaner is background-checked and rigorously trained." },
              { icon: <Sparkles />, title: "Eco-Friendly", desc: "We use biodegradable products that are safe for kids and pets." },
              { icon: <Clock />, title: "Punctual", desc: "We value your time. Our team arrives exactly when scheduled." },
              { icon: <Truck />, title: "Free Pickup", desc: "Complimentary pickup and delivery for all laundry services." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
              <p className="text-muted-foreground">Tailored solutions for every corner of your life.</p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="group text-primary">
                View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Home Cleaning"
              description="Deep cleaning for apartments and houses. Includes dusting, mopping, sanitizing, and organizing."
              price="From KES 2,500"
              icon={<Sparkles className="w-6 h-6" />}
              delay={0}
            />
            <ServiceCard 
              title="Laundry & Fold"
              description="Wash, dry, and fold service. We pick up your dirty laundry and return it fresh and neatly packed."
              price="From KES 200/kg"
              icon={<div className="w-6 h-6 flex items-center justify-center font-bold text-lg">L</div>}
              delay={1}
            />
            <ServiceCard 
              title="Office Cleaning"
              description="Professional cleaning for workspaces to keep your team healthy and productive."
              price="Custom Quote"
              icon={<MapPin className="w-6 h-6" />}
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Sparkling Home?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Join 2,000+ happy customers in Kenya. Book your slot in less than 60 seconds.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 py-8 text-xl shadow-2xl font-bold border-none">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
