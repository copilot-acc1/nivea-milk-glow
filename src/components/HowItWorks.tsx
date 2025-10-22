import { Droplets, Sparkles, Sun } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    title: "Cleanses Gently",
    description:
      "Milk removes impurities while maintaining moisture, keeping your skin hydrated and soft.",
  },
  {
    icon: Sparkles,
    title: "Purifies Skin",
    description:
      "Turmeric fights acne-causing bacteria naturally, helping you achieve clearer skin.",
  },
  {
    icon: Sun,
    title: "Natural Glow",
    description:
      "Skin feels soft, clean, and refreshed with a healthy, natural radiance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to naturally glowing, healthy skin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-secondary/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
