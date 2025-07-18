
import { 
  Hammer, 
  Home, 
  Wrench, 
  Palette, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed and crafted to your exact specifications and style preferences.",
      features: ["Tables & Chairs", "Cabinets", "Bookcases", "Entertainment Centers"]
    },
    {
      icon: Home,
      title: "Kitchen Cabinets",
      description: "Transform your kitchen with handcrafted cabinets that combine functionality with stunning aesthetics.",
      features: ["Custom Design", "Quality Hardware", "Soft-Close Doors", "Lifetime Finish"]
    },
    {
      icon: Wrench,
      title: "Restoration",
      description: "Breathe new life into cherished antique and vintage furniture pieces with expert restoration.",
      features: ["Antique Repair", "Refinishing", "Hardware Replacement", "Structural Reinforcement"]
    },
    {
      icon: Palette,
      title: "Finishing & Staining",
      description: "Professional wood finishing services to protect and enhance the natural beauty of wood.",
      features: ["Custom Stains", "Protective Coatings", "Hand Rubbed Finishes", "Color Matching"]
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-wood-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From custom furniture to complete renovations, we provide comprehensive 
            woodworking services with unmatched attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 scale-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-wood-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-wood-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-wood-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-wood-primary rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <button className="inline-flex items-center px-8 py-4 bg-wood-primary hover:bg-wood-dark text-primary-foreground font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
