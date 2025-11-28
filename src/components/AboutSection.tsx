import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Graduate On Time with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                ScriptieTutor
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Straightforward thesis support that gets results. We help you finish without delays.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Stuck identifying a research gap? Can't figure out which statistical test to use? Lost motivation? 
              We provide concrete solutions—not generic advice.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Get practical, step-by-step guidance tailored to your specific thesis challenges. 
              Regular check-ins keep you on track toward your deadline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-foreground font-medium">Years Experience</div>
              </Card>
              
              <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-foreground font-medium">Theses Completed</div>
              </Card>
              
              <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-foreground font-medium">Graduate On Time</div>
              </Card>
              
              <Card className="p-6 bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="text-4xl font-bold text-primary mb-1">3mo</div>
                <div className="text-sm text-foreground font-medium">Average Time Saved</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
