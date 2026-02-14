import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [location] = useLocation();
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Droplets className="w-6 h-6 text-primary"/>
            </div>
            <span className={`text-xl font-bold font-display tracking-tight ${scrolled ? "text-foreground" : "text-foreground"}`}>
              CleanWave<span className="text-primary">.ke</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (<Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary font-bold" : "text-muted-foreground"}`}>
                {link.name}
              </Link>))}
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/25">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:bg-muted rounded-full">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-border overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (<Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${location === link.href ? "text-primary" : "text-foreground"}`}>
                  {link.name}
                </Link>))}
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-primary text-white rounded-xl py-6 text-lg">
                  Book a Service
                </Button>
              </Link>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </nav>);
}
