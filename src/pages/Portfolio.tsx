
import { useState } from 'react';
import SEOHead from '@/components/UI/SEOHead';
import { Search, Filter, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Modern Dining Set",
      category: "furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary oak dining table with matching chairs for a modern home.",
      client: "Johnson Family",
      year: "2024"
    },
    {
      id: 2,
      title: "Rustic Kitchen Cabinets",
      category: "cabinets",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hand-crafted kitchen cabinets with custom hardware and soft-close doors.",
      client: "Miller Residence",
      year: "2024"
    },
    {
      id: 3,
      title: "Antique Restoration",
      category: "restoration",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Victorian-era armchair restored to its original beauty with period-appropriate finishes.",
      client: "Heritage Collectors",
      year: "2023"
    },
    {
      id: 4,
      title: "Office Built-ins",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom built-in shelving and desk system for a professional office space.",
      client: "Tech Solutions Inc.",
      year: "2024"
    },
    {
      id: 5,
      title: "Live Edge Coffee Table",
      category: "furniture",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Stunning live edge walnut coffee table with steel hairpin legs.",
      client: "Anderson Home",
      year: "2023"
    },
    {
      id: 6,
      title: "Master Bedroom Suite",
      category: "furniture",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete bedroom set including bed frame, nightstands, and dresser.",
      client: "Williams Family",
      year: "2024"
    },
    {
      id: 7,
      title: "Restaurant Bar Top",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reclaimed wood bar top with custom steel base for upscale restaurant.",
      client: "Rustic Bistro",
      year: "2023"
    },
    {
      id: 8,
      title: "Child's Play Kitchen",
      category: "furniture",
      image: "https://images.unsplash.com/photo-1544032527-8241ecb75150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Miniature play kitchen with working doors and safe, rounded edges.",
      client: "The Chen Family",
      year: "2024"
    },
    {
      id: 9,
      title: "Bathroom Vanity",
      category: "cabinets",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom bathroom vanity with vessel sink integration and hidden storage.",
      client: "Rodriguez Renovation",
      year: "2023"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'furniture', label: 'Custom Furniture' },
    { value: 'cabinets', label: 'Cabinets' },
    { value: 'restoration', label: 'Restoration' },
    { value: 'commercial', label: 'Commercial' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Portfolio"
        description="Browse our portfolio of custom furniture, kitchen cabinets, restoration projects, and commercial woodworking. See the quality craftsmanship of CraftWood."
        keywords="woodworking portfolio, custom furniture gallery, kitchen cabinet examples, restoration projects, commercial woodworking"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-wood-primary/10 to-wood-light/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-wood-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our finest work - from custom furniture pieces to complete 
                renovations, each project showcases our commitment to exceptional craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Search */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      filter === category.value
                        ? 'bg-wood-primary text-primary-foreground shadow-lg'
                        : 'bg-gray-100 text-muted-foreground hover:bg-wood-primary/10 hover:text-wood-primary'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6 text-center text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 scale-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium bg-wood-primary/80 px-2 py-1 rounded">
                          {categories.find(cat => cat.value === project.category)?.label}
                        </span>
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <Filter className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Create Your <span className="text-wood-primary">Masterpiece?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's work together to bring your vision to life. From concept to completion, 
              we'll ensure your project exceeds expectations.
            </p>
            <button className="px-8 py-4 bg-wood-primary hover:bg-wood-dark text-primary-foreground font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
