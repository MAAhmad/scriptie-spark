import { motion } from "framer-motion";
import { UserCheck, Target, Zap, Heart, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: UserCheck,
    title: "Expert Instructors",
    description: "Work with experienced academic professionals who understand thesis requirements",
  },
  {
    icon: Target,
    title: "Tailored Guidance",
    description: "Personalized support designed specifically for your research topic and methodology",
  },
  {
    icon: Zap,
    title: "Quick Support",
    description: "Get answers and assistance when you need it most with our responsive service",
  },
  {
    icon: Heart,
    title: "Motivational Coaching",
    description: "Stay motivated throughout your journey with encouragement and accountability",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Ensure your thesis meets the highest academic standards and requirements",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Develop effective strategies to complete your thesis on schedule",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose ScriptieTutor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive support system is designed to help you succeed at every stage of your thesis journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
