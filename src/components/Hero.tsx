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
      {/* Top-left logo + text */}
      <div className="absolute top-4 left-4 z-30">
        <a
          href="https://commons.wikimedia.org/wiki/File:Nivea_Logo.png"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-[4px] pointer-events-auto"
        >
          {/* Direct image link to the Commons file (serves the logo). */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Nivea_Logo.png"
            alt="NIVEA logo"
            className="w-12 h-auto"
            style={{ display: "block" }}
          />
          {/* Use a system sans-serif that closely matches the clean sans used in the logo.
              4px gap is provided by space-x-[4px]. */}
          <span
            className="text-white text-lg font-bold uppercase"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            NIVEA
          </span>
        </a>
      </div>

      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer url="https://prod.spline.design/GkZ7uisnFxBEvXpf/scene.splinecode"></spline-viewer>
      </div>

      {/* Black overlay to hide the "Built with Spline" badge (bottom-right) */}
      <div
        className="absolute bottom-4 right-4 w-36 h-12 bg-black rounded-lg z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-up max-w-4xl mx-auto">
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
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 shadow-2xl hover:shadow-white/20 transition-smooth hover:scale-105"
          >
            Explore Now
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
