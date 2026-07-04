import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Phone, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";

const quotes = [
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Dream big. Start small. Act now.",
    author: "Robin Sharma"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Roy T. Bennett"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Select random quote on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  // Parallax effects - disable on mobile for performance
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);
  const quoteY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -50]);

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
        ease: [0.22, 1, 0.36, 1] as const,
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
      className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden min-h-screen"
    >
      {/* Magazine spread layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary/60 font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase inline-block"
          >
            Get to know me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 sm:mt-4 text-foreground"
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
          className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-start"
        >
          {/* Left column - Large Image */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 relative"
            style={{ y: imageY }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main image frame */}
              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
                <img
                  src="/Kavya.jpg"
                  alt="Kavya Yadav"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Photo caption */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-primary px-3 py-1.5 sm:px-4 sm:py-2"
              >
                <p className="text-[10px] sm:text-xs font-bold text-primary-foreground tracking-wider uppercase">
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
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-[80px] sm:text-[120px] font-display text-primary leading-none select-none"
              >
                "
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 lg:pl-8 xl:pl-12"
          >
            {/* Large headline */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 md:mb-10"
            >
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
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
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-0.5 sm:h-1 bg-primary max-w-[96px]"
              />
            </motion.div>

            {/* Two column text */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
            >
              <motion.div variants={itemVariants}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-display text-primary float-left mr-2 sm:mr-3 mt-0.5 sm:mt-1 leading-none inline-block"
                  >
                    I
                  </motion.span>
                  have a strong passion for building impactful and
                  scalable software solutions. I have worked on multiple full-stack projects and gained
                  hands-on experience with modern technologies and frameworks, including Kafka, through real-world implementations.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  My journey focuses on writing clean, efficient code and building systems that solve meaningful problems.
                  I enjoy turning ideas into reliable applications and continuously improving my skills through practical
                  development and exploration of new technologies.
                </p>
              </motion.div>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              variants={itemVariants}
              transition={{ duration: 0.3 }}
              className="border-l-2 sm:border-l-4 border-primary pl-4 sm:pl-6 py-3 sm:py-4 mb-8 sm:mb-10 md:mb-12"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-display text-lg sm:text-xl md:text-2xl text-foreground italic"
              >
                "{randomQuote.text}"
              </motion.p>
              <motion.cite
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 block not-italic"
              >
                — {randomQuote.author}
              </motion.cite>
            </motion.blockquote>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
              {/* Education Card */}
              <motion.div
                className="relative flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {/* Absolute Badge - Top Right */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
                    2028
                  </span>
                </div>

                {/* Icon - Smaller & Tighter */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col pr-10 sm:pr-0">
                  {/* Label (looks like a mini-heading) */}
                  <h4 className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-0.5">
                    Education
                  </h4>

                  {/* Main Value */}
                  <p className="font-display text-sm sm:text-base font-bold text-foreground leading-tight">
                    IIT Jodhpur
                  </p>

                  {/* Subtext */}
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
                    B.Tech in Computer Science
                  </p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="relative flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {/* Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  {/* Label */}
                  <h4 className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-0.5">
                    Phone
                  </h4>

                  {/* Main Value */}
                  <p className="font-display text-sm sm:text-base font-bold text-foreground leading-tight">
                    +91 79901 60242
                  </p>

                  {/* Subtext */}
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
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
              transition={{ delay: 0.2 }}
              className="flex justify-start"
            >
              <Button
                variant="hero"
                size="lg"
                className="gap-2 sm:gap-3 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1pPboZplgwtQTrEUnhLBuQ0jN0BB_hbM_/view?usp=sharing', '_blank')}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
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
          className="mt-12 sm:mt-16 md:mt-20 flex items-center justify-center gap-3 sm:gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-border sm:w-16"
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase whitespace-nowrap"
          >
            Continue Reading
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-border sm:w-16"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;