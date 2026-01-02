import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const, // Custom easing
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden min-h-screen"
    >
      {/* Magazine spread layout */}
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary/60 font-mono text-sm tracking-[0.3em] uppercase inline-block"
          >
            Get to know me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold mt-4 text-foreground"
          >
            About<motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="text-primary inline-block"
            >.</motion.span>
          </motion.h2>
        </motion.div>

        {/* Main spread */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-start"
        >
          {/* Left column - Large Image */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 relative"
            style={{ y: imageY }}
          >
            <div className="relative">
              {/* Main image frame */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/4] bg-card border border-border overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"
                />
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center border-4 border-primary/20"
                    >
                      <span className="font-display text-5xl text-primary">Y</span>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-sm text-muted-foreground italic"
                    >
                      Your photo here
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Photo caption */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 bg-primary px-4 py-2"
              >
                <p className="text-xs font-bold text-primary-foreground tracking-wider uppercase">
                  Software Developer
                </p>
              </motion.div>

              {/* Decorative quote */}
              <motion.div
                style={{ y: quoteY }}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 text-[120px] font-display text-primary leading-none select-none"
              >
                "
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 lg:pl-12"
          >
            {/* Large headline */}
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6">
                Where{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="italic text-primary inline-block"
                >
                  passion
                </motion.span>{" "}
                meets{" "}
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="border-b-4 border-primary inline-block origin-left"
                >
                  precision
                </motion.span>
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-1 bg-primary"
              />
            </motion.div>

            {/* Two column text */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div variants={itemVariants}>
                <p className="text-muted-foreground leading-relaxed">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-5xl font-display text-primary float-left mr-3 mt-1 leading-none inline-block"
                  >
                    I
                  </motion.span>
                  have a strong passion for building impactful and
                  scalable software solutions. I have worked on multiple full-stack projects and gained
                  hands-on experience with modern technologies and frameworks, including Kafka, through real-world implementations.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-muted-foreground leading-relaxed">
                  My journey focuses on writing clean, efficient code and building systems that solve meaningful problems.
                  I enjoy turning ideas into reliable applications and continuously improving my skills through practical
                  development and exploration of new technologies.
                </p>
              </motion.div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              variants={itemVariants}
              // whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-l-4 border-primary pl-6 py-4 mb-12"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-display text-xl md:text-2xl text-foreground italic"
              >
                "Don’t watch the clock; do what it does. Keep going."
              </motion.p>
              <motion.cite
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm text-muted-foreground mt-2 block not-italic"
              >
                — Sam Levenson
              </motion.cite>
            </motion.blockquote>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {/* Education Card */}
              <motion.div
                className="relative flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {/* Absolute Badge - Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
                    2028
                  </span>
                </div>

                {/* Icon - Smaller & Tighter */}
                <div className="w-10 h-10 bg-primary/5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  {/* Label (looks like a mini-heading) */}
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-0.5">
                    Education
                  </h4>

                  {/* Main Value */}
                  <p className="font-display text-base font-bold text-foreground leading-tight">
                    IIT Jodhpur
                  </p>

                  {/* Subtext */}
                  <p className="text-xs text-muted-foreground mt-1">
                    B.Tech in Computer Science
                  </p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="relative flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-primary/5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  {/* Label */}
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-0.5">
                    Phone
                  </h4>

                  {/* Main Value */}
                  <p className="font-display text-base font-bold text-foreground leading-tight">
                    +91 79901 60242
                  </p>

                  {/* Subtext */}
                  <p className="text-xs text-muted-foreground mt-1">
                    Available for opportunities
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="gap-3"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom pagination style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-border"
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-muted-foreground uppercase"
          >
            Continue Reading
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;