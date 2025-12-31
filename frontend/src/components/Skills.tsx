const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "VS Code", "Docker", "Linux"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Creativity"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="text-gradient italic">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated collection of technologies and skills I've developed through coursework, 
            projects, and self-directed learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
