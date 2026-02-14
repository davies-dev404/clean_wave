import React from 'react';
import { Shield, Eye, Lock, FileText, Bell, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';

const policySections = [
    {
        icon: Eye,
        title: "Information We Collect",
        content: "We collect information you provide directly to us, such as when you request a quote, create an account, or contact us. This may include your name, email, phone number, and service address."
    },
    {
        icon: Lock,
        title: "How We Use Your Data",
        content: "Your data is used solely to provide and improve our services, process requests, and communicate with you about your bookings. We never sell your personal information to third parties."
    },
    {
        icon: Shield,
        title: "Data Protection",
        content: "We implement hospital-grade digital security measures to protect your personal information. Our systems are regularly audited to ensure your data remains your sanctuary."
    },
    {
        icon: Globe,
        title: "Cookies & Tracking",
        content: "Our website uses essential cookies to enhance your experience. These help us understand site traffic patterns and optimize our booking flows for your convenience."
    },
    {
        icon: Bell,
        title: "Policy Updates",
        content: "CleanWave Kenya may update this policy periodically to reflect changes in our practices or for legal reasons. We encourage you to review this page regularly."
    },
    {
        icon: FileText,
        title: "Your Rights",
        content: "You have the right to access, correct, or delete your personal data at any time. Simply contact our support team at hello@cleanwave.co.ke for any requests."
    }
];

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <SEO 
                title="Privacy Policy - CleanWave Kenya"
                description="Learn how CleanWave Kenya protects your personal information and respects your privacy."
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-up">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Trust & Transparency</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Privacy Policy</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            At CleanWave, your privacy is as important to us as your home's hygiene. 
                            Here is how we handle and protect your information.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {policySections.map((section, i) => (
                        <ScrollAnimation key={i} delay={i * 100} animation="fade-up">
                            <motion.div 
                                whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm premium-shadow hover:premium-shadow-hover transition-all duration-500 h-full flex flex-col border-draw-container relative overflow-hidden"
                            >
                                {/* Border Drawing Lines */}
                                <div className="border-draw-line line-top" />
                                <div className="border-draw-line line-right [transition-delay:100ms]" />
                                <div className="border-draw-line line-bottom [transition-delay:200ms]" />
                                <div className="border-draw-line line-left [transition-delay:300ms]" />

                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 relative z-10">
                                    <section.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 relative z-10 leading-tight">{section.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-[15px] font-light relative z-10">{section.content}</p>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation animation="fade-up" delay={400}>
                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 text-center text-white">
                        <h2 className="text-2xl font-serif font-bold mb-4">Have Questions?</h2>
                        <p className="text-white/60 mb-8 max-w-lg mx-auto">
                            If you have any questions about our privacy practices, 
                            please don't hesitate to reach out to our legal team.
                        </p>
                        <a href="mailto:privacy@cleanwave.co.ke" className="text-primary font-bold hover:underline">
                            privacy@cleanwave.co.ke
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
