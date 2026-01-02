import { ArrowUpRight, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "CodeSync",
      description: "Real-time coding interview platform with Collaborative Code Editor, HD video calls, screen sharing, and isolated code execution for test cases with instant feedback.",
      tags: ["Node.js", "React.js", "Socket.io", "Docker"],
      color: "from-amber-500/20 to-orange-600/20",
      year: "2025",
      github: "https://github.com/DeviceDidWhat/CodeSync",
      demo: "https://drive.google.com/file/d/1IdbeQRL_75Xu_kiC3Inf78QTnEe-Q4Cq/view",
    },
    {
      id: 2,
      title: "HackSprint",
      description: "Centralized hackathon platform for many participants with role-based access, real-time leaderboard using Socket.io, and GitHub-based submissions for hackathons.",
      tags: ["Redis", "Socket.io", "Kestra", "Node.js", "React.js","MongoDB"],
      color: "from-violet-500/20 to-purple-600/20",
      year: "2025",
      github: "https://github.com/DeviceDidWhat/HackSprint",
      demo: "https://drive.google.com/file/d/1aq3jromAaVBxEyIyavbOpYC-y60DQVlO/view",
    },
    {
      id: 3,
      title: "Library Management System",
      description: "Full-stack document delivery platform supporting 1,000+ PDF assets with MongoDB GridFS, JWT authentication, and automated email notifications.",
      tags: ["Node.js", "React.js", "MongoDB", "Tailwind CSS"],
      color: "from-emerald-500/20 to-teal-600/20",
      year: "2025",
      github: "https://github.com/DeviceDidWhat/Library-Management-System",
      demo: "https://drive.google.com/file/d/1BJtyFPGTI3e42EIrPAd_v-HG3rudparW/view",
    },
    {
      id: 4,
      title: "Optimized-Kafka-Listener",
      description: "Custom Apache Kafka consumer framework with supervisor-controlled lifecycle, crash recovery, and adaptive polling reducing idle CPU usage by 40%.",
      tags: ["Java", "Spring Boot", "Apache Kafka"],
      color: "from-rose-500/20 to-pink-600/20",
      year: "2025",
      github: "https://github.com/DeviceDidWhat/Optimized-Kafka-Listener",
      demo: "https://drive.google.com/file/d/1PjbQ7vNsYGh4jJft4W9E6lng7-_yktHV/view",
    },
    {
      id: 5,
      title: "Email Scheduler",
      description: "Full-stack email scheduling system managing 1,000+ emails/day with Spring Security, JWT authentication, and Apache POI for parsing 500+ row datasets.",
      tags: ["Java", "Spring Boot", "React.js", "MySQL"],
      color: "from-blue-500/20 to-cyan-600/20",
      year: "2024",
      github: "https://github.com/DeviceDidWhat/EMAIL_SCHEDULER",
      demo: "https://drive.google.com/file/d/1v_nfnyWKzta0rityRLA-QD0Nrcincs9C/view",
    },
    {
      id: 6,
      title: "Nexus Connect",
      description: "Privacy-focused real-time communication platform with secure text messaging, low-latency video/voice calls using WebRTC, and seamless file sharing.",
      tags: ["React.js", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      color: "from-fuchsia-500/20 to-purple-600/20",
      year: "2025",
      github: "https://github.com/DeviceDidWhat/Nexus-Connect",
      demo: "/",
    },
  ];

  // Mobile/Tablet: Simple scrollable grid
  if (isMobile || isTablet) {
    return (
      <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-4 sm:mb-6 block">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground">
              Projects
            </h2>
          </div>

          {/* Grid Layout for Mobile/Tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group"
              >
                <div className={`
                  relative h-[420px] sm:h-[450px] md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden
                  bg-gradient-to-br ${project.color}
                  border border-border/50 backdrop-blur-sm
                  shadow-xl shadow-background/50
                  transition-all duration-300
                  hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1
                `}>
                  {/* Card Number */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-foreground/5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end">
                    {/* Year Badge */}
                    <span className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[10px] sm:text-xs tracking-widest text-muted-foreground/60">
                      {project.year}
                    </span>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-background/30 text-foreground/80 rounded-full backdrop-blur-sm border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-foreground text-background rounded-full text-xs sm:text-sm font-medium hover:bg-primary transition-colors"
                      >
                        View Project
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32">
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instruction */}
          <p className="text-center text-muted-foreground/50 text-xs sm:text-sm mt-12 sm:mt-16 tracking-wide">
            Explore all projects
          </p>
        </div>
      </section>
    );
  }

  // Desktop: Stacked card interaction
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <span className="text-primary font-medium tracking-[0.3em] text-xs uppercase mb-6 block">
            Selected Work
          </span>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground">
            Projects
          </h2>
        </div>

        {/* Stacked Cards */}
        <div className="relative h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const totalCards = projects.length;
            const baseRotation = -15 + (index * 6);
            const baseTranslateX = -150 + (index * 60);
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
                className="absolute w-[380px] lg:w-[400px] xl:w-[420px] cursor-pointer"
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
                  relative h-[450px] lg:h-[480px] xl:h-[500px] rounded-3xl overflow-hidden
                  bg-gradient-to-br ${project.color}
                  border border-border/50 backdrop-blur-sm
                  shadow-2xl shadow-background/50
                  ${isActive ? 'border-primary/50' : ''}
                `}>
                  {/* Card Number */}
                  <div className="absolute top-6 left-6">
                    <span className="text-7xl lg:text-8xl font-display font-bold text-foreground/5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-7 lg:p-8 flex flex-col justify-end">
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
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-primary transition-colors"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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
        <p className="text-center text-muted-foreground/50 text-sm mt-16 lg:mt-20 tracking-wide">
          Hover over cards to explore
        </p>
      </div>
    </section>
  );
};

export default Projects;