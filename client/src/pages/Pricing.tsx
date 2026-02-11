import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Studio / 1BR",
      price: "2,500",
      desc: "Perfect for singles or couples in smaller spaces.",
      features: ["General cleaning", "Bathroom sanitization", "Kitchen surfaces", "Floor mopping", "2 hours approx"]
    },
    {
      name: "2 Bedrooms",
      price: "3,500",
      popular: true,
      desc: "Our most popular package for standard apartments.",
      features: ["All general cleaning", "2 Bathrooms included", "Deep dusting", "Balcony cleaning", "3-4 hours approx"]
    },
    {
      name: "3+ Bedrooms",
      price: "5,000",
      desc: "Comprehensive cleaning for larger family homes.",
      features: ["All general cleaning", "3 Bathrooms included", "Inside windows", "Cabinet fronts", "5+ hours approx"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground">
            No hidden fees. What you see is what you pay. All prices in KES.
          </p>
        </div>

        {/* Cleaning Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular 
                  ? "border-primary shadow-xl shadow-primary/10 scale-105 z-10" 
                  : "border-border shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">KES {plan.price}</span>
                <span className="text-slate-500"> / session</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/booking">
                <Button className={`w-full rounded-xl py-6 ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>
                  Choose Plan
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Laundry Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Laundry Price List</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { item: "Wash & Fold (per KG)", price: "200" },
              { item: "Duvet (Single)", price: "800" },
              { item: "Duvet (Double/King)", price: "1,200" },
              { item: "Carpet (per sq meter)", price: "400" },
              { item: "Suit (Dry Clean)", price: "800" },
              { item: "Dress (Dry Clean)", price: "600" },
              { item: "Curtains (per kg)", price: "350" },
              { item: "Sneakers (Deep Clean)", price: "500" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                <span className="text-slate-700 font-medium">{row.item}</span>
                <span className="font-bold text-slate-900">KES {row.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8">Book Laundry Pickup</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
