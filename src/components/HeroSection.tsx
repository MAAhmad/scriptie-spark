import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-graduate.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const badges = [
    { text: "3 months faster on average", color: "bg-accent text-accent-foreground" },
    { text: "No more delays", color: "bg-accent text-accent-foreground" },
  ];

  const checkmarks = [
    "Free consultation",
    "100% safe and private",
    "Start immediately",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div 
                  key={badge.text}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} text-sm font-medium`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Trustpilot Rating */}
            <a 
              href="https://www.trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 w-fit hover:bg-card/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
                </svg>
                <span className="font-semibold text-[#00B67A] text-sm">Trustpilot</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#00B67A] fill-[#00B67A]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground text-sm">• 50+ reviews</span>
              </div>
            </a>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Stuck on Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Thesis? Get Unstuck.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Direct, practical help from research design to final submission. No fluff—just the support to get your thesis done.
            </p>

            {/* Checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {checkmarks.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Trusted by students from UvA, VU, Erasmus, Tilburg, and more
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium text-base group"
              >
                Free non-binding call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base"
              >
                See How I Can Help
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Graduate student celebrating success with diploma"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
