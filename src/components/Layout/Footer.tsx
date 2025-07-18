
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-wood-primary">
                <Hammer className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">CraftWood</h3>
                <p className="text-sm text-primary-foreground/80">Artisan Woodworking</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating beautiful, handcrafted wooden furniture and home decor with 
              passion, precision, and years of expertise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Custom Furniture</li>
              <li>Kitchen Cabinets</li>
              <li>Home Renovations</li>
              <li>Restoration</li>
              <li>Wood Finishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-wood-light mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  123 Craftsman Ave<br />
                  Woodville, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-wood-light flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-wood-light flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  info@craftwood.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 CraftWood. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for fine craftsmanship
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
