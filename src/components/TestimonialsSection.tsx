import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, Clock } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    program: "MSc Psychology",
    size: "large",
    highlight: "Got unstuck in methodology",
    quote: "I was completely stuck on my research design. After one call, everything clicked. Finished my thesis 2 months ahead of schedule.",
    result: "Graduated 2 months early"
  },
  {
    id: 2,
    name: "Michael K.",
    program: "MA Business",
    size: "small",
    highlight: "Passed defense first try",
    quote: "Committee loved my methodology section. Your guidance made all the difference.",
    result: "8.5 grade"
  },
  {
    id: 3,
    name: "Emma L.",
    program: "BSc Data Science",
    size: "medium",
    highlight: "From panic to plan in 24h",
    quote: "2 weeks left, 3 chapters unwritten. You created a realistic timeline that actually worked. Graduated on time.",
    result: "Finished on time"
  },
  {
    id: 4,
    name: "David R.",
    program: "PhD Sociology",
    size: "small",
    highlight: "Structure clarity",
    quote: "Your literature review feedback clarified everything. Much more confident now.",
    result: "On track"
  },
  {
    id: 5,
    name: "Lisa T.",
    program: "MSc Economics",
    size: "large",
    highlight: "8.5 final grade",
    quote: "Couldn't have done it without your support. The statistical analysis guidance was exactly what I needed to push my grade up.",
    result: "8.5 grade"
  },
  {
    id: 6,
    name: "James P.",
    program: "MA Education",
    size: "medium",
    highlight: "SPSS made simple",
    quote: "I was drowning in SPSS output. You explained it in a way that finally made sense. Saved me weeks of confusion.",
    result: "Completed analysis"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Students, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we helped students like you graduate on time
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${testimonial.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                ${testimonial.size === "medium" ? "lg:col-span-2" : ""}
                ${testimonial.size === "small" ? "lg:col-span-1" : ""}
              `}
            >
              <Card className={`
                h-full p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 
                bg-gradient-to-br from-card to-card/80 backdrop-blur border-2 hover:border-primary/50
                ${testimonial.size === "large" ? "p-8" : ""}
              `}>
                {/* WhatsApp-style indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.program}</div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <CheckCircle2 className="w-3 h-3" />
                  {testimonial.highlight}
                </div>

                {/* Quote */}
                <blockquote className={`
                  text-foreground leading-relaxed mb-4
                  ${testimonial.size === "large" ? "text-lg" : "text-sm"}
                `}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Result badge */}
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-accent">{testimonial.result}</span>
                </div>

                {/* Chat bubble decoration for large cards */}
                {testimonial.size === "large" && (
                  <div className="mt-6 p-4 bg-[#dcf8c6] dark:bg-primary/10 rounded-lg rounded-br-none shadow-sm">
                    <p className="text-sm text-foreground italic">
                      "This is exactly what I needed. Thank you!"
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 block text-right">
                      WhatsApp conversation
                    </span>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Students Helped</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Graduate On Time</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join them?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-strong hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
