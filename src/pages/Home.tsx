
import SEOHead from '@/components/UI/SEOHead';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Testimonials from '@/components/Home/Testimonials';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="CraftWood - Professional artisan woodworking services. Custom furniture, kitchen cabinets, restoration, and finishing. Quality craftsmanship with modern design."
        keywords="woodworking, custom furniture, kitchen cabinets, wood restoration, artisan, handcrafted furniture, wood finishing"
      />
      
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
