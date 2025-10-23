import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-smooth rounded-full ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-white/60 backdrop-blur-sm"}`}>
      <div className="px-15 py-2.5 rounded-bl-sm ">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="text-black font-bold text-2xl font-anton">
              NIVEA
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            
            <button onClick={() => scrollToSection("how-it-works")} className="text-black hover:text-primary transition-smooth text-sm font-anton">
              How It Works
            </button>
            <button onClick={() => scrollToSection("features")} className="text-black hover:text-primary transition-smooth text-sm font-anton">
              Features
            </button>
            <button onClick={() => scrollToSection("ingredients")} className="text-black hover:text-primary transition-smooth text-sm font-anton">
              Ingredients
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-black hover:text-primary transition-smooth text-sm font-anton">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-black hover:text-primary transition-smooth text-sm font-anton">
              FAQs
            </button>
            <Button onClick={() => scrollToSection("pricing")} variant="secondary" className="font-anton">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;