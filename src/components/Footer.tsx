import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-2xl mb-4 font-playfair">NIVEA</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted skincare for generations. Experience the gentle care of
              Milk Delights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About NIVEA</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 NIVEA India. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
