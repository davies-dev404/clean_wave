import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop"; // We'll create this inline component below or just ignore if strict one-file

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Booking from "@/pages/Booking";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Helper component for scrolling to top on route change
function ScrollToTopWrapper() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/booking" component={Booking} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen font-sans">
          <ScrollToTopWrapper />
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <WhatsAppFloat />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
