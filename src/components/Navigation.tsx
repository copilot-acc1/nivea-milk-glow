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
        {/* 
          Layout notes:
          - removed logo element but kept symmetric edge spacers (w-6) on left and right so the visual offset remains.
          - increased the horizontal gap between items by 4px (gap-7 = 28px) so each text/button pair has 4px more space than gap-6.
          - outer flex children are: left spacer, nav group, buy button, right spacer — gap-7 applies between these so the space between the nav group and Buy Now is increased as well.
        */}
        <div className="flex flex-col md:flex-row items-center justify-between md:p-10 gap-7">
          {/* left spacer preserving the previous left empty area (w-6 = 24px) */}
          <div className="w-4" />

          {/* Only the requested nav items (visible on md+) */}
          <div className="hidden md:flex items-center gap-7 text-white">
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

          {/* Buy Now stays at the right. gap-7 ensures the space between the last nav item and the button is increased by 4px */}
          <div className="flex items-center">
            <Button
              onClick={() => scrollToSection("pricing")}
              variant="secondary"
            >
              Buy Now
            </Button>
          </div>

          {/* right spacer to mirror left spacer so left of Ingredients == right of Buy Now */}
          <div className="w-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
