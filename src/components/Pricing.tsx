import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    size: "100ml",
    price: "₹149",
    popular: false,
  },
  {
    size: "150ml",
    price: "₹199",
    popular: true,
  },
  {
    size: "200ml",
    price: "₹249",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="buy" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Where to Buy
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your perfect size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`gradient-card p-8 rounded-2xl shadow-soft hover:shadow-strong transition-smooth hover:-translate-y-2 animate-fade-up relative ${
                product.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🧴</div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {product.size}
                </h3>
                <p className="text-4xl font-bold text-primary font-playfair">
                  {product.price}
                </p>
              </div>
              <Button className="w-full" size="lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy on Amazon
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4">
            Also available at leading retail stores nationwide
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary/60">
            <span>✓ Free Delivery</span>
            <span>✓ Easy Returns</span>
            <span>✓ Authentic Product</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
