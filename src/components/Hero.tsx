import { Button } from "@/components/ui/button";

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
      className="min-h-screen pt-16 relative overflow-hidden flex items-center justify-center gradient-hero"
    >

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left space for future image/element */}
          <div className="hidden lg:block"></div>
          
          {/* Right content */}
          <div className="flex flex-col items-start text-left space-y-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-anton text-foreground leading-tight">
              For a Natural,
              <br />
              Healthy Glow.
            </h1>
            <p className="text-3xl md:text-4xl font-playfair italic text-foreground">
              Don't Face Wash,{" "}
              <span className="font-bold">Milk Wash.</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover NIVEA Milk Delights — the gentle, pH-balanced way to
              cleanse and glow.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("features")}
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-md border border-white/30 text-foreground hover:bg-white/30 shadow-lg hover:shadow-xl transition-smooth hover:scale-105"
            >
              Explore Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
