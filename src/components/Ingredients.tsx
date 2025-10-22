import ingredientsVisual from "@/assets/ingredients-visual.jpg";

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-20 gradient-hero droplet-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Here's What Makes Your
            <br />
            Acne-Prone Skin Glow
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={ingredientsVisual}
            alt="Milk and Turmeric Ingredients"
            className="w-full h-auto rounded-3xl shadow-strong"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="gradient-card p-8 rounded-2xl shadow-medium animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-secondary/40 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl">🥛</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 text-center font-playfair">
              Milk
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              Cleanses deeply to remove impurities while maintaining skin's
              natural moisture. Rich in proteins and vitamins for soft,
              nourished skin.
            </p>
          </div>

          <div className="gradient-card p-8 rounded-2xl shadow-medium animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-accent/40 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 text-center font-playfair">
              Turmeric
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed">
              Reduces 99.9% of acne-causing bacteria naturally. Anti-inflammatory
              properties help soothe skin and prevent breakouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
