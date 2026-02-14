import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
                >
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
                        
                        <div className="flex gap-5 items-start relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                <Cookie className="w-6 h-6 text-primary" />
                            </div>
                            
                            <div className="flex-grow">
                                <h3 className="text-white font-bold mb-2">We Use Cookies</h3>
                                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                    CleanWave uses essential cookies to enhance your experience and analyze our traffic. 
                                    By clicking "Accept", you agree to our privacy standards.
                                </p>
                                <div className="flex gap-3">
                                    <Button 
                                        onClick={handleAccept} 
                                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold text-xs"
                                    >
                                        Accept All
                                    </Button>
                                    <Button 
                                        variant="outline"
                                        onClick={() => {
                                            localStorage.setItem('cookie-consent', 'declined');
                                            setIsVisible(false);
                                        }} 
                                        className="bg-transparent text-white border-slate-700 hover:bg-white/5 rounded-full px-6 text-xs"
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setIsVisible(false)}
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
