import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ArConSe eco-friendly construction"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
