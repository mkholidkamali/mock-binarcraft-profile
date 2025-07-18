
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-primary/20 via-transparent to-wood-light/30" />
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Woodworking workshop"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 fade-in">
            Handcrafted
            <span className="block text-wood-light">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed slide-up">
            Creating timeless wooden furniture and home décor with 
            traditional craftsmanship and modern design.
          </p>

          {/* 3D Chair Placeholder */}
          <div className="mb-12 slide-up">
            <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-32 h-32 mx-auto bg-wood-primary/30 rounded-lg flex items-center justify-center float-animation">
                <div className="text-white/80 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                    <Play className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-medium">3D Chair Preview</p>
                  <p className="text-xs opacity-75">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
            <Link to="/portfolio">
              <Button size="lg" className="bg-wood-primary hover:bg-wood-dark text-primary-foreground px-8 py-4 text-lg">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-wood-primary px-8 py-4 text-lg backdrop-blur-sm"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
