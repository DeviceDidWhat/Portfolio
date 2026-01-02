import { Github, Linkedin, Mail, Twitter, Heart, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/DeviceDidWhat", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/kavya-bhanvadia-58026a328/", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/kavya_b4", label: "Instagram" },
    { icon: <Mail size={18} />, href: "mailto:kavyabhanvadia@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <p>© {currentYear} All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-border" />
            
            {/* Social links with enhanced hover */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with
            <Heart size={14} className="text-primary fill-primary animate-pulse" />
            by Kavya Bhanvadia
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;