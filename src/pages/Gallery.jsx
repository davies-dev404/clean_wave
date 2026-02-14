import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1581578731117-104529302f28?auto=format&fit=crop&q=80&w=1000", category: "Residential", title: "Living Room Shine" },
  { id: 2, src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=1000", category: "Laundry", title: "Crisp Folded Linens" },
  { id: 3, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", category: "Office", title: "Corporate Boardroom" },
  { id: 4, src: "https://images.unsplash.com/photo-1558317374-a354d5f3d463?auto=format&fit=crop&q=80&w=1000", category: "Upholstery", title: "Sofa Deep Clean" },
  { id: 5, src: "https://images.unsplash.com/photo-1527512319701-f9a924d52d4d?auto=format&fit=crop&q=80&w=1000", category: "Move-In", title: "Empty Apartment Sparkle" },
  { id: 6, src: "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&fit=crop&q=80&w=1000", category: "Dry Cleaning", title: "Suit Care" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      <SEO title="Gallery" description="See our work in action. CleanWave Gallery." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Work Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at the sparkling results we deliver every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <ScrollAnimation key={img.id} delay={i * 100}>
              <div 
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-bold text-lg">{img.title}</p>
                        <p className="text-sm opacity-80">{img.category}</p>
                    </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full">
                <X className="w-8 h-8" />
            </button>
            <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
