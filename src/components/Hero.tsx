import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-16 gradient-hero droplet-pattern relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              For a Natural,
              <br />
              Healthy Glow.
            </h1>
            <p className="text-3xl md:text-4xl font-playfair italic text-primary">
              Don't Face Wash,{" "}
              <span className="font-bold">Milk Wash.</span>
            </p>
            <p className="text-lg md:text-xl text-primary/80 max-w-lg">
              Discover NIVEA Milk Delights — the gentle, pH-balanced way to
              cleanse and glow.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("features")}
              className="text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
            >
              Explore Now
            </Button>
          </div>

          <div className="relative animate-float">
            <img
              src={heroProduct}
              alt="NIVEA Milk Delights Face Wash Range"
              className="w-full h-auto rounded-3xl shadow-strong"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-secondary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
