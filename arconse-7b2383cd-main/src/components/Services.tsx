import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import solarImg from "@/assets/service-solar.jpg";
import rainwaterImg from "@/assets/service-rainwater.jpg";
import waterImg from "@/assets/service-water.jpg";
import composterImg from "@/assets/service-composter.jpg";

const services = [
  {
    image: solarImg,
    title: "Solar Power",
    description: "Complete solar panel installation and renewable energy systems for sustainable power generation.",
  },
  {
    image: rainwaterImg,
    title: "Rainwater Harvesting",
    description: "Efficient rainwater collection and storage systems to reduce water consumption and costs.",
  },
  {
    image: waterImg,
    title: "Water Treatment",
    description: "Advanced water treatment and recycling solutions for clean, sustainable water management.",
  },
  {
    image: composterImg,
    title: "Automated Organic Composter",
    description: "Smart composting systems that convert organic waste into nutrient-rich fertilizer automatically.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Comprehensive Eco-Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we offer a full range of sustainable building services 
            designed to minimize environmental impact while maximizing quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 bg-card overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
