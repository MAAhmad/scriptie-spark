import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-graduate.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--accent)/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE3NiA3MCUgNDUlIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">3 months faster on average</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Stuck on Your Thesis?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Get Unstuck.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Direct, practical help from research design to final submission. 
              No fluff—just concrete guidance to get your thesis done.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No obligations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Start immediately</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium text-base font-semibold group px-8"
              >
                Request Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base font-semibold"
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-foreground font-medium">Students Helped</div>
                <div className="text-xs text-muted-foreground">From UvA to Erasmus</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-foreground font-medium">Graduate On Time</div>
                <div className="text-xs text-muted-foreground">Guaranteed results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-foreground font-medium">Years Experience</div>
                <div className="text-xs text-muted-foreground">Proven expertise</div>
              </div>
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
                alt="Graduate student celebrating success"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-8 rounded-2xl shadow-strong"
            >
              <div className="text-5xl font-bold mb-1">24/7</div>
              <div className="text-sm font-medium opacity-90">Support</div>
              <div className="text-xs opacity-75 mt-1">Even on weekends</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
