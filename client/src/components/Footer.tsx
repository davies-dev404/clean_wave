import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Droplets className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display">CleanWave.ke</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium laundry and cleaning services tailored for busy lifestyles in Kenya. 
              We bring the sparkle back to your home and office.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@cleanwave.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Westlands, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CleanWave Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
