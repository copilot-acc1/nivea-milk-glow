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
      className="min-h-screen pt-16 relative overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/30"></div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-anton text-white leading-tight">
            For a Natural,
            <br />
            Healthy Glow.
          </h1>
          <p className="text-3xl md:text-4xl font-playfair italic text-white">
            Don't Face Wash,{" "}
            <span className="font-bold">Milk Wash.</span>
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Discover NIVEA Milk Delights — the gentle, pH-balanced way to
            cleanse and glow.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("features")}
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-smooth hover:scale-105"
          >
            Explore Now
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/60 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/40 rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/50 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
