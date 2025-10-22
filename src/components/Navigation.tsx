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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-primary shadow-medium" : "bg-primary/95"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-primary-foreground font-bold text-2xl font-playfair">
              NIVEA
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("ingredients")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              Ingredients
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-primary-foreground hover:text-secondary transition-smooth text-sm font-medium"
            >
              FAQs
            </button>
            <Button
              onClick={() => scrollToSection("buy")}
              variant="secondary"
              className="font-semibold"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
