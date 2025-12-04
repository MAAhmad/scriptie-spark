import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const hooks = [
    { icon: Clock, text: "Start this week" },
    { icon: Shield, text: "100% confidential" },
    { icon: CheckCircle, text: "Satisfaction guaranteed" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Finally Finish Your Thesis?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join 500+ students who graduated on time with ScriptieTutor
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {hooks.map((hook) => {
              const Icon = hook.icon;
              return (
                <div key={hook.text} className="flex items-center gap-2 text-primary-foreground">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{hook.text}</span>
                </div>
              );
            })}
          </div>

          {/* Trustpilot Rating */}
          <a 
            href="https://www.trustpilot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 hover:bg-primary-foreground/20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
              </svg>
              <span className="font-semibold text-primary-foreground text-sm">Trustpilot</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#00B67A] fill-[#00B67A]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary-foreground">4.9</span>
              <span className="text-primary-foreground/80 text-sm">• 50+ reviews</span>
            </div>
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/pricing")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
