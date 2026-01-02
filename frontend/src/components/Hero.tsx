import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating orbs with smooth motion */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10" style={{ pointerEvents: 'auto' }}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Intro text */}
          <motion.p
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
            variants={itemVariants}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Name with special animation - FIXED overflow issue */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 pb-4 overflow-visible"
            variants={nameVariants}
            style={{
              perspective: "1000px",
              lineHeight: "1.2"
            }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-gradient italic inline-block pb-2"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                delay: 0.5,
              }}
              style={{
                transformOrigin: "center center",
                display: "inline-block",
                paddingBottom: "0.25rem"
              }}
            >
              Kavya Bhanvadia
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            A passionate{" "}
            <motion.span
              className="text-foreground font-semibold"
              style={{ display: "inline-block", cursor: "default" }}
            >
              software developer
            </motion.span>{" "}
            focused on building efficient, scalable, and impactful solutions.{" "}
          </motion.p>

          {/* CTA Buttons - FIXED click functionality */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleScrollTo('#projects')}
              className="cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              View My Work
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => handleScrollTo('#contact')}
              className="cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links with enhanced styling */}
          <motion.div
            className="flex justify-center gap-8"
            variants={itemVariants}
          >
            <a
              href="https://github.com/DeviceDidWhat"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={28} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavya-bhanvadia-58026a328/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:kavyabhanvadia@gmail.com"
              className="cursor-pointer text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Email Contact"
            >
              <Mail size={28} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;