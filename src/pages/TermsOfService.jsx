import React from 'react';
import { Scale, CheckCircle2, AlertCircle, CreditCard, XCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';

const terms = [
    {
        icon: CheckCircle2,
        title: "Service Scope",
        content: "CleanWave provides professional hygiene services as described in the service quotation. We reserve the right to limit services in areas deemed unsafe or hazardous for our personnel."
    },
    {
        icon: CreditCard,
        title: "Payment Terms",
        content: "Invoices are due upon completion of the service unless otherwise agreed in writing. For larger contracts or recurring services, we may require a deposit or valid credit card on file."
    },
    {
        icon: XCircle,
        title: "Cancellations",
        content: "We understand plans change. Cancellations made less than 24 hours before the scheduled service may incur a 30% convenience fee to cover our scheduling and logistics costs."
    },
    {
        icon: AlertCircle,
        title: "Liability & Claims",
        content: "While we treat your space with utmost care, any claims regarding damage or missing items must be reported within 24 hours of service completion to facilitate a proper investigation."
    },
    {
        icon: Info,
        title: "Satisfaction Guarantee",
        content: "Your joy is our priority. If you are not 100% satisfied with the quality of our clean, notify us within 24 hours and we will re-clean the specific area at no additional cost."
    },
    {
        icon: Scale,
        title: "Legal Jurisdiction",
        content: "These terms are governed by the laws of the Republic of Kenya. Any disputes shall be settled through arbitration in Nairobi before any formal legal proceedings."
    }
];

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <SEO 
                title="Terms of Service - CleanWave Kenya"
                description="Read the terms and conditions that govern the professional cleaning services provided by CleanWave Kenya."
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-up">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Agreement</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Terms of Service</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Transparency is the foundation of trust. These terms ensure a smooth, professional
                            partnership between CleanWave and our valued clients.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {terms.map((term, i) => (
                        <ScrollAnimation key={i} delay={i * 50} animation="fade-right">
                            <motion.div 
                                whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                                className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex gap-8 items-start hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl border-draw-container relative overflow-hidden"
                            >
                                {/* Border Drawing Lines */}
                                <div className="border-draw-line line-top" />
                                <div className="border-draw-line line-right [transition-delay:100ms]" />
                                <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                <div className="border-draw-line line-left [transition-delay:300ms]" />

                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 relative z-10">
                                    <term.icon className="w-7 h-7" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 leading-tight">{term.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-[15px] font-light">
                                        {term.content}
                                    </p>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation animation="fade-up" delay={400}>
                    <div className="mt-20 border-t border-slate-100 pt-16 text-center">
                        <p className="text-slate-500 text-sm italic">
                            Last Updated: February 12, 2024. <br />
                            By booking a service with CleanWave Kenya, you agree to these terms and conditions.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
