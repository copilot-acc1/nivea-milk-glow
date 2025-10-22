import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    review:
      "My skin feels so soft and clean! The turmeric variant has really helped with my acne. I love how gentle it is.",
    rating: 5,
    image: "👩",
  },
  {
    name: "Ananya Desai",
    review:
      "Finally, a face wash that doesn't dry out my skin! The milk formula is amazing. My skin glows naturally now.",
    rating: 5,
    image: "👩‍🦱",
  },
  {
    name: "Riya Patel",
    review:
      "I've been using it for 3 weeks and my acne has reduced significantly. It's gentle, effective, and smells great!",
    rating: 5,
    image: "👱‍♀️",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Loved by Glowing Skin Everywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-primary text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
