import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { value: "200+", label: "students helped", color: "bg-[hsl(174,60%,45%)]" },
    { value: "95%", label: "Graduate On Time", color: "bg-[hsl(220,45%,30%)]" },
    { value: "5+", label: "years of experience", color: "bg-[hsl(15,70%,60%)]" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Graduate on Time with ScriptieTutor
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop procrastinating. Start today and graduate on time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Compelling Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Deadline approaching but your thesis isn't?</span> You're not alone. 
              Whether it's a vague research question, confusing statistics, or just complete writer's block—these 
              are the exact problems I've helped hundreds of students solve.
            </p>
            
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              I've guided students from UvA, VU Amsterdam, Erasmus University, Tilburg University, 
              Radboud, and more to successfully complete their theses—often months ahead of schedule.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              No more staring at a blank page. No more confusing feedback loops with supervisors. 
              Just clear, practical guidance that gets your thesis done. <span className="font-medium text-foreground">Book a free call 
              and let's get you graduated.</span>
            </p>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`p-6 ${stat.color} border-0 shadow-lg rounded-xl`}>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-base text-white/90">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
