import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Our Mission</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            To bring the highest standard of hygiene and care to every Kenyan home and office, giving our clients the freedom to enjoy life without the hassle of chores.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container-padding">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
             {/* Unsplash image: team working together or clean towels */}
             {/* folded towels stack */}
            <img 
              src="https://pixabay.com/get/g693528f29db6e0319c67c335ecdc1023ad48d2ddda96688a80c5a1954e037fa77fc2f9d589b4480346187f5bafc9fbc064ea280d6cd67e4bbc004c7b6ccd2171_1280.jpg" 
              alt="Clean Towels" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">The CleanWave Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2023, CleanWave Kenya started with a simple observation: urban life in Kenya is getting busier, and quality, reliable help is hard to find.
              </p>
              <p>
                We set out to create a service that combines professional hotel-standard cleaning with the convenience of modern technology. No more negotiating prices or worrying about reliability.
              </p>
              <p>
                Today, we serve over 2,000 households across Nairobi, Mombasa, and Kisumu, employing a team of 50+ dedicated cleaning professionals who are the heart of our company.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book Online", desc: "Select your service and preferred time in under 60 seconds." },
              { step: "02", title: "We Arrive", desc: "Our uniformed, equipped team arrives at your location." },
              { step: "03", title: "We Clean", desc: "We work our magic using eco-friendly products and expert techniques." },
              { step: "04", title: "You Relax", desc: "Inspect our work and enjoy your sparkling fresh space." },
            ].map((s, i) => (
              <div key={i} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <span className="text-6xl font-bold text-slate-200 absolute top-4 right-4">{s.step}</span>
                <h3 className="text-xl font-bold mb-3 relative z-10">{s.title}</h3>
                <p className="text-slate-500 relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
