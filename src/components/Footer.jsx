import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-6">
                <div className="bg-primary/20 p-2 rounded-xl">
                    <Droplets className="w-6 h-6 text-primary fill-primary/20" />
                </div>
                <span className="text-2xl font-bold font-serif tracking-tight text-white">
                    CleanWave<span className="text-primary">.</span>
                </span>
            </Link>
            <p className="mb-6 leading-relaxed">
              Kenya's most trusted partner for premium residential and commercial cleaning solutions. Eco-friendly, reliable, and professional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Work Gallery</Link></li>
              <li><Link to="/quote" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
              <ul className="space-y-4">
                <li><Link to="/services/residential-cleaning" className="hover:text-primary transition-colors text-sm">Residential Cleaning</Link></li>
                <li><Link to="/services/office-commercial" className="hover:text-primary transition-colors text-sm">Office & Commercial</Link></li>
                <li><Link to="/services/laundry-dry-cleaning" className="hover:text-primary transition-colors text-sm">Laundry & Dry Cleaning</Link></li>
                <li><Link to="/services/carpet-upholstery" className="hover:text-primary transition-colors text-sm">Carpet & Upholstery</Link></li>
                <li><Link to="/services/move-in-out" className="hover:text-primary transition-colors text-sm">Move-In / Move-Out</Link></li>
              </ul>
              <ul className="space-y-4">
                <li><Link to="/services/post-construction" className="hover:text-primary transition-colors text-sm">Post-Construction</Link></li>
                <li><Link to="/services/fumigation-pest-control" className="hover:text-primary transition-colors text-sm">Pest Control</Link></li>
                <li><Link to="/services/water-tank-cleaning" className="hover:text-primary transition-colors text-sm">Water Tank Cleaning</Link></li>
                <li><Link to="/services/car-interior-cleaning" className="hover:text-primary transition-colors text-sm">Car Interior Cleaning</Link></li>
                <li><Link to="/services/sanitization-services" className="hover:text-primary transition-colors text-sm">Sanitization & Virus Control</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Westlands Commercial Center, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@cleanwave.co.ke</span>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-800 pt-4 mt-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Available Hours</div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-primary font-bold">Mon - Sat:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} CleanWave Kenya. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/safety" className="hover:text-white transition-colors">Safety Standards</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
