import productTurmeric from "@/assets/product-turmeric.jpg";

const Mission = () => {
  return (
    <section className="py-20 bg-background droplet-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up">
            <img
              src={productTurmeric}
              alt="NIVEA Milk Delights Turmeric Face Wash"
              className="w-full max-w-md mx-auto h-auto rounded-3xl shadow-medium"
            />
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Bye-Bye Acne
            </h2>
            <p className="text-2xl md:text-3xl font-playfair text-primary/90">
              with NIVEA Milk Delights
              <br />
              Turmeric Face Wash
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Cleanses deeply without being harsh — milk and turmeric work
              together to purify and soothe. Experience the gentle power of
              nature combined with NIVEA's trusted skincare expertise.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-primary/80">
                  Reduces 99.9% of acne-causing bacteria
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-primary/80">
                  pH-balanced formula for all skin types
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-primary/80">
                  Leaves skin soft, clean, and refreshed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
