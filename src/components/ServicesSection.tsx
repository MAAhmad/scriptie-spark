import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, LineChart, FileEdit, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Research Design",
    description: "Clear direction for your research gap and methodology",
    features: [
      "Find relevant literature fast",
      "Sharp research questions",
      "Choose the right method",
    ],
  },
  {
    icon: LineChart,
    title: "Statistical Analysis",
    description: "Get your data analyzed correctly the first time",
    features: [
      "SPSS, R, or Python support",
      "Understand what tests to use",
      "Present results clearly",
    ],
  },
  {
    icon: FileEdit,
    title: "Writing Support",
    description: "Structure and write chapters that make sense",
    features: [
      "Logical chapter structure",
      "Direct feedback on drafts",
      "Proper citations & references",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Final Review",
    description: "Submit with confidence—no last-minute surprises",
    features: [
      "Full thesis review",
      "Check formatting requirements",
      "Ready for submission",
    ],
  },
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical support for every stage of your thesis—from start to submission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 bg-card border-border">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-medium"
          >
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
