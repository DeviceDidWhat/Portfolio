import { motion } from "framer-motion";
const Skills = () => {
  const allSkills = [
    { name: "React", size: "large" },
    { name: "TypeScript", size: "large" },
    { name: "JavaScript", size: "medium" },
    { name: "Tailwind CSS", size: "medium" },
    { name: "Next.js", size: "medium" },
    { name: "Python", size: "medium" },
    { name: "Java", size: "medium" },
    { name: "Node.js", size: "large" },
    { name: "C & C++", size: "small" },
    { name: "Spring Boot", size: "medium" },
    { name: "MongoDB", size: "medium" },
    { name: "Redis", size: "small" },
    { name: "MySQL", size: "medium" },
    { name: "REST APIs", size: "small" },
    { name: "GraphQL", size: "small" },
    { name: "WebSockets", size: "small" },
    { name: "WebRTC", size: "small" },
    { name: "Git", size: "medium" },
    { name: "Figma", size: "small" },
    { name: "VS Code", size: "small" },
    { name: "Docker", size: "medium" },
    { name: "Kafka", size: "large" },
    { name: "HTML/CSS", size: "medium" },
    { name: "Problem Solving", size: "small" },
  ];

  const sizeClasses = {
    large: "text-2xl md:text-3xl px-8 py-4 font-semibold",
    medium: "text-lg md:text-xl px-6 py-3 font-medium",
    small: "text-sm md:text-base px-4 py-2",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  };

  const floatAnimation = (index: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 3 + (index % 3),
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: index * 0.2,
    },
  });

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
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {allSkills.map((skill, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={skillVariants}
              animate={floatAnimation(index)}
              className={`
                ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                relative group cursor-default
                text-foreground/70 hover:text-primary
                transition-colors duration-300
              `}
            >
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-xl transition-all duration-500" />

              {/* Skill text with underline animation */}
              <span className="relative inline-block">
                {skill.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-6 relative z-10">

        {/* Animated divider */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Left line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-primary w-24 md:w-40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          />

          {/* Center ornament */}
          <motion.div className="relative flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-primary/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* Right line */}
          <motion.div
            className="h-px bg-gradient-to-l from-transparent via-primary/50 to-primary w-24 md:w-40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;