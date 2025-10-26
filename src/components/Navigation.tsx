import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-300 rounded-full
        ${isScrolled
          ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
          : "bg-white/10 backdrop-blur-xl border border-white/30"
        }
        /* position tweaks */
        md:top-4 md:left-1/2 md:-translate-x-1/2
        top-8 right-4  /* mobile: slightly lower + shifted right */
      `}
    >
      <div className="py-3 px-6 md:px-8 mx-6">
        <div className="flex items-center justify-between">
          {/* Left spacer for symmetry */}
          <div className="w-6" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <button
              onClick={() => scrollToSection("ingredients")}
              className="hover:text-primary transition-all duration-200 text-sm"
            >
              Ingredients
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-primary transition-all duration-200 text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-primary transition-all duration-200 text-sm"
            >
              FAQs
            </button>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Desktop Buy Now */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("pricing")}
                variant="secondary"
              >
                Buy Now
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white hover:text-primary transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Right spacer */}
          <div className="w-6" />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 text-white font-medium animate-fade-in">
            <button
              onClick={() => scrollToSection("ingredients")}
              className="hover:text-primary transition-all duration-200 text-base"
            >
              Ingredients
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-primary transition-all duration-200 text-base"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-primary transition-all duration-200 text-base"
            >
              FAQs
            </button>
            <Button
              onClick={() => scrollToSection("pricing")}
              variant="secondary"
              className="w-32 mt-1"
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
