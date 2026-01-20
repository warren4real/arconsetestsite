import { Leaf, Globe, Sparkles, TreePine } from "lucide-react";

const sustainabilityPillars = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "We prioritize recycled, reclaimed, and locally-sourced materials to reduce transportation emissions and support circular economy practices.",
  },
  {
    icon: Globe,
    title: "Carbon Neutral Operations",
    description: "Our entire operation—from offices to job sites—runs on renewable energy. Any remaining emissions are offset through verified carbon credits.",
  },
  {
    icon: Sparkles,
    title: "Energy-Efficient Design",
    description: "Every project is designed for maximum energy efficiency with passive heating/cooling, optimal insulation, and smart building systems.",
  },
  {
    icon: TreePine,
    title: "Ecosystem Restoration",
    description: "For every project, we commit to planting 50 native trees and restoring local ecosystems affected by construction activities.",
  },
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Sustainability at Our Core
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Environmental responsibility isn't an afterthought—it's embedded in every decision, 
            every material choice, and every construction technique we employ.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sustainabilityPillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-primary-foreground/70">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
