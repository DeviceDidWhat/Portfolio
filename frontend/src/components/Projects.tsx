import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with real-time inventory and payments.",
      tags: ["React", "Node.js", "Stripe"],
      color: "from-amber-500/20 to-orange-600/20",
      year: "2024",
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Analytics platform with machine learning insights.",
      tags: ["Python", "TensorFlow"],
      color: "from-violet-500/20 to-purple-600/20",
      year: "2024",
    },
    {
      id: 3,
      title: "Mobile Banking",
      description: "Secure fintech application with biometric auth.",
      tags: ["React Native", "Firebase"],
      color: "from-emerald-500/20 to-teal-600/20",
      year: "2024",
    },
    {
      id: 4,
      title: "Design System",
      description: "Component library with 50+ reusable elements.",
      tags: ["TypeScript", "Storybook"],
      color: "from-rose-500/20 to-pink-600/20",
      year: "2023",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative workspace with real-time sync and notifications.",
      tags: ["Vue.js", "WebSocket", "MongoDB"],
      color: "from-blue-500/20 to-cyan-600/20",
      year: "2024",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Track engagement metrics across multiple platforms.",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      color: "from-fuchsia-500/20 to-purple-600/20",
      year: "2023",
    },
    {
      id: 7,
      title: "Fitness Tracker",
      description: "Health monitoring with AI-powered workout recommendations.",
      tags: ["React", "Express", "TensorFlow"],
      color: "from-green-500/20 to-emerald-600/20",
      year: "2023",
    },
    {
      id: 8,
      title: "Video Streaming Platform",
      description: "Netflix-like platform with adaptive streaming and CDN integration.",
      tags: ["Angular", "AWS", "Redis"],
      color: "from-red-500/20 to-rose-600/20",
      year: "2022",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-primary font-medium tracking-[0.3em] text-xs uppercase mb-6 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground">
            Projects
          </h2>
        </div>

        {/* Stacked Cards */}
        <div className="relative h-[500px] md:h-[550px] flex items-center justify-center">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const totalCards = projects.length;
            const baseRotation = -20 + (index * 6);
            const baseTranslateX = -210 + (index * 60);
            const baseTranslateY = index * 3;
            
            // When a card is active, spread others out
            const getTransform = () => {
              if (activeIndex === null) {
                // Default stacked state
                return {
                  rotation: baseRotation,
                  translateX: baseTranslateX,
                  translateY: baseTranslateY,
                  scale: 1 - (index * 0.02),
                  zIndex: totalCards - index,
                };
              }
              
              if (isActive) {
                return {
                  rotation: 0,
                  translateX: 0,
                  translateY: -20,
                  scale: 1.05,
                  zIndex: 100,
                };
              }
              
              // Push other cards away
              const direction = index < activeIndex ? -1 : 1;
              return {
                rotation: direction * 25,
                translateX: direction * (200 + Math.abs(index - activeIndex) * 80),
                translateY: 50,
                scale: 0.85,
                zIndex: totalCards - Math.abs(index - activeIndex),
              };
            };

            const transform = getTransform();

            return (
              <div
                key={project.id}
                className="absolute w-[320px] md:w-[400px] cursor-pointer"
                style={{
                  transform: `
                    translateX(${transform.translateX}px) 
                    translateY(${transform.translateY}px) 
                    rotate(${transform.rotation}deg) 
                    scale(${transform.scale})
                  `,
                  zIndex: transform.zIndex,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={`
                  relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden
                  bg-gradient-to-br ${project.color}
                  border border-border/50 backdrop-blur-sm
                  shadow-2xl shadow-background/50
                  ${isActive ? 'border-primary/50' : ''}
                `}>
                  {/* Card Number */}
                  <div className="absolute top-6 left-6">
                    <span className="text-8xl font-display font-bold text-foreground/5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Year Badge */}
                    <span className="absolute top-6 right-6 text-xs tracking-widest text-muted-foreground/60">
                      {project.year}
                    </span>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-background/30 text-foreground/80 rounded-full backdrop-blur-sm border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-primary transition-colors"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
                      >
                        <Github className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instruction */}
        <p className="text-center text-muted-foreground/50 text-sm mt-16 tracking-wide">
          Hover over cards to explore
        </p>
      </div>
    </section>
  );
};

export default Projects;