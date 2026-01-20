import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-eco/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Sustainable Future?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project and explore how ArConSe can bring your vision to life 
            with our eco-friendly construction expertise. Free consultation, no obligations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              <Phone className="w-5 h-5" />
              Schedule a Call
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-primary-foreground/70 text-sm mt-8">
            Or call us directly: <span className="font-semibold text-primary-foreground">+1 (555) 123-4567</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
