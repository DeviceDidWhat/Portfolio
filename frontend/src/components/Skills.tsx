const Skills = () => {
  const allSkills = [
    { name: "React", size: "large" },
    { name: "TypeScript", size: "large" },
    { name: "Tailwind CSS", size: "medium" },
    { name: "Next.js", size: "medium" },
    { name: "Node.js", size: "large" },
    { name: "Python", size: "medium" },
    { name: "PostgreSQL", size: "medium" },
    { name: "REST APIs", size: "small" },
    { name: "GraphQL", size: "small" },
    { name: "Git", size: "medium" },
    { name: "Figma", size: "small" },
    { name: "VS Code", size: "small" },
    { name: "Docker", size: "medium" },
    { name: "Linux", size: "small" },
    { name: "HTML/CSS", size: "medium" },
    { name: "Problem Solving", size: "large" },
    { name: "Communication", size: "medium" },
    { name: "Teamwork", size: "medium" },
    { name: "Creativity", size: "small" },
    { name: "Time Management", size: "small" },
  ];

  const sizeClasses = {
    large: "text-2xl md:text-3xl px-8 py-4 font-semibold",
    medium: "text-lg md:text-xl px-6 py-3 font-medium",
    small: "text-sm md:text-base px-4 py-2",
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-gradient italic">Technologies</span>
          </h2>
        </div>

        {/* Flowing skills cloud */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {allSkills.map((skill, index) => (
            <span
              key={index}
              className={`
                ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                relative group cursor-default
                text-foreground/70 hover:text-primary
                transition-all duration-500
                hover:scale-110 hover:-translate-y-1
              `}
              style={{ 
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-xl transition-all duration-500" />
              
              {/* Skill text with underline animation */}
              <span className="relative inline-block">
                {skill.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
              </span>
            </span>
          ))}
        </div>

        {/* Subtle divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-primary/30" />
          <div className="mx-2 w-1 h-1 rounded-full bg-primary/50" />
          <div className="w-1 h-1 rounded-full bg-primary/30" />
        </div>
      </div>
    </section>
  );
};

export default Skills;