import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "linear-gradient(135deg, hsl(38 92% 50% / 0.3), hsl(280 80% 40% / 0.2))",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team workspaces.",
      tags: ["TypeScript", "Next.js", "Prisma", "Socket.io"],
      image: "linear-gradient(135deg, hsl(200 80% 50% / 0.3), hsl(38 92% 50% / 0.2))",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio showcasing projects and skills with smooth animations and elegant design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "linear-gradient(135deg, hsl(160 60% 40% / 0.3), hsl(200 80% 50% / 0.2))",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tags: ["React", "APIs", "Chart.js"],
      image: "linear-gradient(135deg, hsl(280 80% 40% / 0.3), hsl(320 80% 50% / 0.2))",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient italic">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in design, development, 
            and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                {/* Project Image/Preview */}
                <div
                  className="aspect-video relative"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="heroOutline" size="sm" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
