
import SEOHead from '@/components/UI/SEOHead';
import { 
  Hammer, 
  Home, 
  Wrench, 
  Palette, 
  CheckCircle,
  ArrowRight,
  Sofa,
  Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Custom Furniture",
      description: "Transform your space with bespoke furniture pieces designed specifically for your needs and style preferences.",
      features: [
        "Dining tables and chairs",
        "Bedroom furniture sets",
        "Living room pieces",
        "Office furniture",
        "Entertainment centers",
        "Custom storage solutions"
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from $500"
    },
    {
      icon: Home,
      title: "Kitchen Cabinets",
      description: "Elevate your kitchen with handcrafted cabinets that combine functionality, durability, and stunning aesthetics.",
      features: [
        "Custom cabinet design",
        "Soft-close hardware",
        "Premium wood finishes",
        "Counter integration",
        "Pull-out organizers",
        "Crown molding details"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from $2,500"
    },
    {
      icon: Wrench,
      title: "Restoration Services",
      description: "Breathe new life into antique and vintage furniture with our expert restoration and refinishing services.",
      features: [
        "Antique restoration",
        "Structural repairs",
        "Wood refinishing",
        "Hardware replacement",
        "Upholstery coordination",
        "Color matching"
      ],
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from $200"
    },
    {
      icon: Palette,
      title: "Finishing & Staining",
      description: "Protect and enhance your wood with professional finishing services using premium stains and protective coatings.",
      features: [
        "Custom color matching",
        "Hand-rubbed finishes",
        "Protective topcoats",
        "Distressing techniques",
        "Eco-friendly options",
        "Maintenance guidance"
      ],
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from $150"
    },
    {
      icon: Sofa,
      title: "Home Renovations",
      description: "Complete room makeovers featuring custom millwork, built-ins, and architectural wood elements.",
      features: [
        "Built-in bookcases",
        "Wainscoting installation",
        "Crown molding",
        "Custom trim work",
        "Fireplace mantels",
        "Room dividers"
      ],
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Starting from $1,000"
    },
    {
      icon: Coffee,
      title: "Commercial Projects",
      description: "Professional woodworking services for restaurants, offices, and retail spaces with commercial-grade durability.",
      features: [
        "Restaurant furniture",
        "Reception desks",
        "Display fixtures",
        "Conference tables",
        "Bar tops",
        "Custom signage"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Quote on request"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We discuss your vision, needs, and budget to create the perfect plan."
    },
    {
      step: "2",
      title: "Design & Quote",
      description: "Detailed drawings and transparent pricing for your approval."
    },
    {
      step: "3",
      title: "Crafting",
      description: "Skilled artisans bring your piece to life with precision and care."
    },
    {
      step: "4",
      title: "Delivery",
      description: "Professional installation and finishing touches in your space."
    }
  ];

  return (
    <>
      <SEOHead
        title="Services"
        description="Professional woodworking services including custom furniture, kitchen cabinets, restoration, finishing, and commercial projects. Quality craftsmanship guaranteed."
        keywords="woodworking services, custom furniture, kitchen cabinets, wood restoration, commercial woodworking, finishing services"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-wood-primary/10 to-wood-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-wood-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From custom furniture to complete renovations, we provide comprehensive 
                woodworking services with unmatched attention to detail and craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <service.icon className="h-8 w-8 mb-2" />
                      <h3 className="text-2xl font-serif font-bold">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-wood-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-lg font-semibold text-wood-primary">
                        {service.price}
                      </span>
                      <Link to="/contact">
                        <button className="inline-flex items-center text-wood-primary hover:text-wood-dark font-medium">
                          Get Quote
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-wood-primary">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From initial consultation to final delivery, we ensure a smooth and 
                transparent process that exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-wood-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-wood-dark transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-wood-primary/20" 
                         style={{ transform: 'translateX(-50%)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wood-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your vision and create something beautiful together. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-wood-primary hover:bg-gray-100 font-medium rounded-lg transition-colors shadow-lg">
                  Get Free Quote
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-wood-primary font-medium rounded-lg transition-colors">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
