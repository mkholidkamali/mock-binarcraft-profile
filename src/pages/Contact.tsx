
import { useState } from 'react';
import SEOHead from '@/components/UI/SEOHead';
import WhatsAppButton from '@/components/UI/WhatsAppButton';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Workshop",
      details: ["123 Craftsman Ave", "Woodville, State 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri: 8am-6pm"],
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@craftwood.com", "quotes@craftwood.com"],
      link: "mailto:info@craftwood.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00am - 6:00pm", "Sat: 9:00am - 4:00pm", "Sun: Closed"],
      link: null
    }
  ];

  const projectTypes = [
    "Custom Furniture",
    "Kitchen Cabinets",
    "Restoration",
    "Finishing & Staining",
    "Home Renovation",
    "Commercial Project",
    "Other"
  ];

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contact CraftWood for custom woodworking services. Get a free quote for furniture, cabinets, restoration. Located in Woodville with WhatsApp support."
        keywords="contact craftwood, woodworking quotes, custom furniture consultation, kitchen cabinet estimate, wood restoration"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-wood-primary/10 to-wood-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Let's <span className="text-wood-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your woodworking project? Get in touch for a free consultation 
                and detailed quote. We're here to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.title}
                      className="flex items-start space-x-4 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-wood-primary/10 rounded-lg flex items-center justify-center group-hover:bg-wood-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-wood-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {info.link && idx === 0 ? (
                              <a 
                                href={info.link}
                                className="hover:text-wood-primary transition-colors"
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Integration */}
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-foreground mb-3">
                    Quick Response via WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For immediate assistance or quick questions, reach out to us on WhatsApp. 
                    We typically respond within minutes during business hours.
                  </p>
                  <WhatsAppButton 
                    phoneNumber="15551234567"
                    message="Hello! I'm interested in your woodworking services and would like to discuss a project."
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* Contact Form & Map */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Request a Quote
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent resize-none"
                        placeholder="Please describe your project, including dimensions, materials, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-wood-primary hover:bg-wood-dark text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-96 bg-gray-200 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7542975765167!2d-74.00601848459395!3d40.71278797933047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3167c50bef%3A0x2654a32c8c0d1e8f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635789123456!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CraftWood Workshop Location"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      Visit Our Workshop
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Come see our craftsmanship in person. We welcome visitors to our workshop 
                      by appointment. Schedule a visit to discuss your project and see our work up close.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber="15551234567"
          floating={true}
        />
      </main>
    </>
  );
};

export default Contact;
