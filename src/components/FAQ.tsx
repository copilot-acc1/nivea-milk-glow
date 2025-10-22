import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Milk Delights suitable for oily skin?",
    answer:
      "Yes! NIVEA Milk Delights is pH-balanced and suitable for all skin types, including oily skin. The gentle formula cleanses without stripping natural oils, helping to maintain your skin's balance.",
  },
  {
    question: "What makes it different from regular face wash?",
    answer:
      "Unlike harsh face washes, Milk Delights uses milk proteins for gentle cleansing while maintaining moisture. The addition of turmeric provides natural antibacterial properties, making it effective against acne without drying your skin.",
  },
  {
    question: "Can I use it daily?",
    answer:
      "Absolutely! NIVEA Milk Delights is designed for daily use, twice a day - morning and evening. Its gentle formula makes it perfect for regular cleansing without causing irritation.",
  },
  {
    question: "Is it tested for sensitive skin?",
    answer:
      "Yes, NIVEA Milk Delights is dermatologically tested and suitable for sensitive skin. However, if you have specific skin concerns, we recommend doing a patch test before regular use.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Many users notice softer, cleaner skin immediately after first use. For acne-related improvements, consistent use for 2-3 weeks typically shows visible results in skin clarity and reduced breakouts.",
  },
  {
    question: "Does it remove makeup?",
    answer:
      "While Milk Delights is excellent for daily cleansing, we recommend using a dedicated makeup remover first for heavy makeup, then follow with Milk Delights for a deep, gentle cleanse.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Milk Delights
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card rounded-xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
