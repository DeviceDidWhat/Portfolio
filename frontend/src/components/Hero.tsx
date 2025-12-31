import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Intro text */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
            Hi, I'm{" "}
            <span className="text-gradient italic">Kavya Bhanvadia</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 leading-relaxed">
            A passionate student crafting digital experiences through{" "}
            <span className="text-foreground">design</span> and{" "}
            <span className="text-foreground">development</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-up-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;