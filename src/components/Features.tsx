import { Shield, Heart, TestTube, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "pH-Balanced Formula",
    description: "Suitable for all skin types, maintains skin's natural balance.",
  },
  {
    icon: Heart,
    title: "Enriched with Milk Proteins",
    description: "Provides deep nourishment and lasting softness.",
  },
  {
    icon: Leaf,
    title: "Natural Turmeric",
    description: "Helps prevent acne naturally without harsh chemicals.",
  },
  {
    icon: TestTube,
    title: "Dermatologically Tested",
    description: "Clinically proven safe and effective for daily use.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Milk Delights?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of nature and science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="gradient-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
