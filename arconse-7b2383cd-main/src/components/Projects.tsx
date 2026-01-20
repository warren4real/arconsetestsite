import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Eco Home",
    category: "Residential",
  },
  {
    image: project2,
    title: "Green Office Complex",
    category: "Commercial",
  },
  {
    image: project3,
    title: "Sustainable Interior",
    category: "Renovation",
  },
  {
    image: project4,
    title: "Luxury Green Residence",
    category: "Residential",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Completed Works
          </h2>
          <p className="text-muted-foreground">
            A selection of our sustainable construction projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-medium uppercase">{project.category}</span>
                <h3 className="text-primary-foreground font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
