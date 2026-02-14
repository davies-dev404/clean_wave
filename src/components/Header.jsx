import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from "@/data/servicesData";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        // Services will be a dropdown
        { name: "Glassmorphism", href: "/gallery", label: "Gallery" }, // Renamed for display
        { name: "Cleaning Tips", href: "/newsroom" }, 
        { name: "Contact", href: "/contact" },
    ];

    const isHeroPage = ["/", "/about"].includes(location.pathname) || location.pathname.startsWith("/services/");
    const useWhiteText = isHeroPage && !scrolled;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : (isHeroPage ? "bg-transparent py-5" : "bg-white shadow-sm py-3 text-slate-900")}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-colors ${!useWhiteText ? "bg-primary/10 group-hover:bg-primary/20" : "bg-white/10 group-hover:bg-white/20"}`}>
                            <Droplets className={`w-6 h-6 ${!useWhiteText ? "text-primary fill-primary/20" : "text-white fill-white/20"}`} />
                        </div>
                        <span className={`text-xl font-bold font-serif tracking-tight transition-colors ${!useWhiteText ? "text-slate-900" : "text-white"}`}>
                            CleanWave<span className="text-primary">.</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link 
                            to="/" 
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary font-bold" : (!useWhiteText ? "text-slate-600" : "text-white/90")}`}
                        >
                            Home
                        </Link>

                        <Link 
                            to="/about" 
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/about" ? "text-primary font-bold" : (!useWhiteText ? "text-slate-600" : "text-white/90")}`}
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none ${!useWhiteText ? "text-slate-600" : "text-white/90"}`}>
                                Services <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-sm">
                                {servicesData.map((service) => (
                                    <DropdownMenuItem key={service.slug} asChild>
                                        <Link to={`/services/${service.slug}`} className="w-full cursor-pointer">
                                            {service.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuItem asChild>
                                   <Link to="/services" className="w-full cursor-pointer font-bold border-t mt-1 pt-2">View All Services</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link 
                            to="/gallery" 
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/gallery" ? "text-primary font-bold" : (!useWhiteText ? "text-slate-600" : "text-white/90")}`}
                        >
                            Gallery
                        </Link>
                        
                        <Link 
                            to="/contact" 
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/contact" ? "text-primary font-bold" : (!useWhiteText ? "text-slate-600" : "text-white/90")}`}
                        >
                            Contact
                        </Link>

                        <Link to="/quote">
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20">
                                Get Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Home</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">About</Link>
                            
                            <div className="py-2">
                                <span className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Services</span>
                                <div className="pl-4 space-y-3 border-l-2 border-slate-100">
                                    {servicesData.map((service) => (
                                        <Link 
                                            key={service.slug}
                                            to={`/services/${service.slug}`} 
                                            onClick={() => setIsOpen(false)} 
                                            className="block text-base text-slate-700"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Gallery</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Contact</Link>
                            
                            <Link to="/quote" onClick={() => setIsOpen(false)}>
                                <Button className="w-full mt-4 bg-primary text-white rounded-xl py-6 text-lg">
                                    Get Quote
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Header;
