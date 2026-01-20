import { Check, Leaf, Recycle, Wind, Sun } from "lucide-react";

const features = [
  "100% renewable energy-powered operations",
  "Locally sourced sustainable materials",
  "Zero-waste construction practices",
  "Carbon offset on every project",
  "LEED and Green Building certified",
  "Transparent environmental reporting",
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: Recycle },
  { value: "85%", label: "Waste Diverted", icon: Wind },
  { value: "12K", label: "Tons CO₂ Saved", icon: Leaf },
  { value: "100%", label: "Client Satisfaction", icon: Sun },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose ArConSe</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Building a Greener Future, One Project at a Time
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At ArConSe, sustainability isn't just a buzzword—it's the foundation of everything we do. 
              We combine cutting-edge green technologies with time-tested craftsmanship to deliver 
              buildings that are as beautiful as they are eco-responsible.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-eco/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-eco" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
