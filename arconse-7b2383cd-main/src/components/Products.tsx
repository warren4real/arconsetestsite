import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import batteryImg from "@/assets/product-battery.jpg";
import powerStationImg from "@/assets/product-power-station.jpg";
import premiumImg from "@/assets/product-premium.jpg";
import solarPanelImg from "@/assets/product-solar-panel.jpg";

const products = [
  {
    image: batteryImg,
    title: "Home Battery Backup",
    description: "Reliable energy storage solutions to keep your home powered during outages.",
  },
  {
    image: powerStationImg,
    title: "Power Station",
    description: "Portable power stations for on-the-go energy needs and emergency backup.",
  },
  {
    image: premiumImg,
    title: "Premium Series",
    description: "Our top-tier product line featuring advanced technology and superior performance.",
  },
  {
    image: solarPanelImg,
    title: "Solar Panel",
    description: "High-efficiency solar panels designed for maximum energy generation.",
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Sustainable Energy Products
          </h2>
          <p className="text-muted-foreground text-lg">
            High-quality eco-friendly products to power your sustainable lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 bg-card overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
