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

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-smooth rounded-full
        ${isScrolled ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl" : "bg-white/10 backdrop-blur-xl border border-white/30"}`}
    >
      <div className="py-[12px] px-[24px] mx-[24px] my-0">
        <div className="flex items-center justify-between gap-12">
          {/* spacer where the logo used to be (keeps layout centered) */}
          <div className="w-6" />

          {/* Only the requested nav items (visible on md+) */}
          <div className="hidden md:flex items-center gap-8 text-white">
            <button
              onClick={() => scrollToSection("ingredients")}
              className="text-white hover:text-primary transition-smooth text-sm"
            >
              Ingredients
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-primary transition-smooth text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-primary transition-smooth text-sm"
            >
              FAQs
            </button>
          </div>

          {/* Buy Now stays at the right exactly as before */}
          <div className="flex items-center">
            <Button
              onClick={() => scrollToSection("pricing")}
              variant="secondary"
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
