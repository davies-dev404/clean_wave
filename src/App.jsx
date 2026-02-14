import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail"; // New
import Gallery from "@/pages/Gallery"; // New
import GetQuote from "@/pages/GetQuote"; // New replacement for Booking
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NewsDetail from "@/pages/NewsDetail"; 
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Safety from "@/pages/Safety";
import CookieConsent from "@/components/CookieConsent";
import Booking from "@/pages/Booking"; // Keeping for legacy/admin or just removing reference if fully replaced. 
// User asked to "replace Booking with Get Quote logic". I'll point /booking to GetQuote or just use /quote.

// Scroll to top component
function ScrollToTopWrapper() {
    const { pathname } = useLocation();
    
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);
    
    return null;
}

// WhatsApp Float Button
import { MessageCircle } from "lucide-react";
function WhatsAppFloat() {
    return (
        <a 
            href="https://wa.me/254700000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center gap-2"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="font-bold hidden md:inline">Chat with us</span>
        </a>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <BrowserRouter>
                    <div className="flex flex-col min-h-screen font-sans">
                        <ScrollToTopWrapper />
                        <Header />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                
                                {/* Services Routes */}
                                <Route path="/services" element={<Services />} />
                                <Route path="/services/:slug" element={<ServiceDetail />} />
                                
                                <Route path="/gallery" element={<Gallery />} />
                                
                                {/* Quote / Booking */}
                                <Route path="/quote" element={<GetQuote />} />
                                <Route path="/booking" element={<GetQuote />} /> {/* Redirect/Alias */}
                                
                                <Route path="/contact" element={<Contact />} />
                                
                                <Route path="/privacy" element={<PrivacyPolicy />} />
                                <Route path="/terms" element={<TermsOfService />} />
                                <Route path="/safety" element={<Safety />} />
                                
                                {/* Placeholder routes for links that might still exist */}
                                <Route path="/newsroom" element={<NotFound />} />
                                <Route path="/news/:id" element={<NewsDetail />} />
                                
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                        <WhatsAppFloat />
                        <CookieConsent />
                        <Toaster />
                    </div>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
