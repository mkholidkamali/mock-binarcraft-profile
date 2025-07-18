
import SEOHead from '@/components/UI/SEOHead';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1,200+" },
    { icon: Heart, label: "Passion Rating", value: "100%" }
  ];

  const team = [
    {
      name: "David CraftWood",
      role: "Master Craftsman & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years of experience, David combines traditional techniques with modern innovation to create stunning wooden masterpieces."
    },
    {
      name: "Maria Santos",
      role: "Design Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Maria brings creativity and precision to every project, ensuring each piece perfectly matches our clients' vision and lifestyle."
    },
    {
      name: "James Wilson",
      role: "Restoration Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "James specializes in breathing new life into antique and vintage pieces, preserving their history while enhancing their beauty."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about CraftWood's story, our team of skilled artisans, and our commitment to creating exceptional handcrafted wooden furniture and home décor."
        keywords="about craftwood, woodworking team, artisan craftsmen, furniture makers, wood crafting experience"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-wood-primary/10 to-wood-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-wood-primary">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded on the principles of quality craftsmanship and customer satisfaction, 
                CraftWood has been creating beautiful wooden furniture and home décor for over 15 years.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Crafting Excellence Since 2009
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a passion project in a small garage has grown into a 
                    full-service woodworking business that serves clients throughout the region. 
                    Our journey began with a simple belief: that handcrafted furniture should 
                    be both beautiful and functional.
                  </p>
                  <p>
                    Every piece we create tells a story - your story. Whether it's a custom 
                    dining table where families gather, a restored antique that carries generations 
                    of memories, or kitchen cabinets that transform a house into a home, we pour 
                    our hearts into every project.
                  </p>
                  <p>
                    Our commitment to sustainability means we source our materials responsibly 
                    and use traditional techniques that stand the test of time. We believe in 
                    creating furniture that your grandchildren will cherish.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Craftsman working on wood"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-wood-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                  <p className="text-sm font-medium">Quality Guaranteed</p>
                  <p className="text-2xl font-bold">15+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-wood-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wood-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-wood-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Meet Our <span className="text-wood-primary">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our skilled artisans bring decades of combined experience and a shared 
                passion for creating exceptional wooden furniture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-wood-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-wood-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Values
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                These core principles guide everything we do and every piece we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on materials or craftsmanship. Every piece is built to last generations."
                },
                {
                  title: "Customer Focus",
                  description: "Your vision drives our work. We listen, collaborate, and deliver exactly what you envision."
                },
                {
                  title: "Sustainable Practices",
                  description: "We responsibly source materials and use eco-friendly finishes to protect our environment."
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
