import { Mail, MapPin, Send, Github, Linkedin, Twitter, Clock, Zap, Code, Sparkles, Calendar, Thermometer, Sun, Cloud, Snowflake, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isTyping, setIsTyping] = useState(false);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  // Handle typing indicator
  const handleTyping = () => {
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xzdzlwak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/DeviceDidWhat", handle: "@DeviceDidWhat" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kavya-bhanvadia-58026a328/", handle: "/kavya-bhanvadia" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/kavya_b4", handle: "@kavya_b4" },
  ];

  const contactMethods = [
    { icon: Mail, label: "Email", value: "kavyabhanvadia@gmail.com", href: "mailto:kavyabhanvadia@gmail.com" },
    { icon: MapPin, label: "Location", value: "Rajkot, Gujarat, India", href: null },
  ];
  

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient italic">Connect</span>
            <br />
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side - Terminal Style Info */}
            {/* Left Side - Terminal Style Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Terminal Window */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">contact_info.sh</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-4">
                  <div className="text-muted-foreground">
                    <span className="text-primary">$</span> cat contact_methods.txt
                  </div>

                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 pl-4"
                    >
                      <method.icon className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{method.label}:</span>
                      {method.href ? (
                        <a href={method.href} className="text-foreground hover:text-primary transition-colors">
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{method.value}</span>
                      )}
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-border/50">
                    <div className="text-muted-foreground mb-3">
                      <span className="text-primary">$</span> ls ./social_links/
                    </div>

                    <div className="flex flex-wrap gap-3 pl-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          initial={{ opacity: 0, scale: 1 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all group"
                        >
                          <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                            {social.handle}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="text-muted-foreground mb-3">
                      <span className="text-primary">$</span> echo "Let's build something amazing together!"
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="pl-4 text-foreground"
                    >
                      Let's build something amazing together!
                    </motion.div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Available for work</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently open to freelance projects and internship opportunities. Let's discuss how we can collaborate!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form as Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-2 text-xs text-muted-foreground font-mono">message.tsx</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Editor Content */}
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Line Numbers + Code Style */}
                  <div className="font-mono text-sm">
                    {/* Interface declaration */}
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">1</span>
                      <div>
                        <span className="text-purple-400">interface</span>
                        <span className="text-foreground"> Message </span>
                        <span className="text-muted-foreground">{"{"}</span>
                      </div>
                    </div>

                    {/* Name Field */}
                    <div className="flex gap-4 mb-1">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">2</span>
                      <div className="flex-1">
                        <span className="text-muted-foreground pl-4">name:</span>
                        <span className="text-blue-400"> string</span>
                        <span className="text-muted-foreground">;</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right"></span>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          handleTyping();
                        }}
                        className="flex-1 ml-4 px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 font-sans text-base"
                        placeholder='Your name'
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="flex gap-4 mb-1">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">3</span>
                      <div className="flex-1">
                        <span className="text-muted-foreground pl-4">email:</span>
                        <span className="text-blue-400"> string</span>
                        <span className="text-muted-foreground">;</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right"></span>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          handleTyping();
                        }}
                        className="flex-1 ml-4 px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 font-sans text-base"
                        placeholder='your@email.com'
                        required
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="flex gap-4 mb-1">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">4</span>
                      <div className="flex-1">
                        <span className="text-muted-foreground pl-4">subject:</span>
                        <span className="text-blue-400"> string</span>
                        <span className="text-muted-foreground">;</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right"></span>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          handleTyping();
                        }}
                        className="flex-1 ml-4 px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 font-sans text-base"
                        placeholder='What is this about?'
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="flex gap-4 mb-1">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">5</span>
                      <div className="flex-1">
                        <span className="text-muted-foreground pl-4">message:</span>
                        <span className="text-blue-400"> string</span>
                        <span className="text-muted-foreground">;</span>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right"></span>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          handleTyping();
                        }}
                        className="flex-1 ml-4 px-3 py-2 rounded-lg bg-muted/30 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 resize-none font-sans text-base"
                        placeholder='Tell me about your project...'
                        required
                      />
                    </div>

                    {/* Closing brace */}
                    <div className="flex gap-4 mb-6">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">6</span>
                      <span className="text-muted-foreground">{"}"}</span>
                    </div>

                    {/* Submit function */}
                    <div className="flex gap-4 mb-4">
                      <span className="text-muted-foreground/50 select-none w-6 text-right">7</span>
                      <div className="flex-1">
                        <Button
                          type="submit"
                          variant="hero"
                          size="lg"
                          className="w-full group"
                          disabled={isSubmitting}
                        >
                          <span className="font-mono text-sm">
                            <span className="text-primary-foreground/70">await</span> sendMessage()
                          </span>
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 ml-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                            />
                          ) : (
                            <Send className="w-4 h-4 ml-2" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 mb-4"
                      >
                        <span className="text-muted-foreground/50 select-none w-6 text-right"></span>
                        <div className={`flex-1 ml-4 px-4 py-3 rounded-lg ${
                          submitStatus.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400'
                            : 'bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400'
                        }`}>
                          <p className="text-sm font-medium">{submitStatus.message}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </form>

                {/* Editor Footer */}
                <div className="px-4 py-2 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <div className="flex items-center gap-4">
                    <span>TypeScript React</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isTyping && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary"
                      >
                        Typing...
                      </motion.span>
                    )}
                    <span>Ln 7, Col 1</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 