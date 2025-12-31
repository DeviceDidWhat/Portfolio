import { Sparkles, BookOpen, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Developer",
      description: "Building modern web applications with cutting-edge technologies",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Designer",
      description: "Creating beautiful, user-centered digital experiences",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learner",
      description: "Constantly exploring new technologies and methodologies",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute inset-0 bg-card rounded-3xl border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-display text-5xl text-primary">Y</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="font-semibold text-foreground">Available for work</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Digital<br />
              <span className="text-gradient italic">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate student with a deep love for technology and design. 
              My journey started with curiosity about how things work, which evolved 
              into creating meaningful digital solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open source, or learning about the latest in web development.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
