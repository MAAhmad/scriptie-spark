import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            About ScriptieTutor
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Graduate on Time.
            <br />
            <span className="text-muted-foreground">Finally.</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
              Been putting off your thesis for months? You're not alone. Most of my 
              students are working professionals who delayed their thesis because of 
              jobs, internships, or life getting in the way.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now the deadline is real—and the pressure is on. That's exactly why I 
              offer a hassle-free service: hand me your thesis, and I'll guide you 
              to graduation. Students from <span className="text-foreground font-medium">UvA, VU Amsterdam, Erasmus, 
              Tilburg, and Radboud</span> have all finished with my help—even after 
              months of delay.
            </p>

            <div className="pt-4">
              <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                No complicated processes. No endless back-and-forth. Just give me 
                your project, follow my guidance, and get it done.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="space-y-10">
              {/* Stat 1 */}
              <div className="border-b border-border pb-8">
                <div className="text-6xl lg:text-7xl font-bold text-primary mb-2">
                  200+
                </div>
                <div className="text-lg text-muted-foreground uppercase tracking-wide">
                  Students Helped
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-border pb-8">
                <div className="text-6xl lg:text-7xl font-bold text-foreground mb-2">
                  95%
                </div>
                <div className="text-lg text-muted-foreground uppercase tracking-wide">
                  Graduate On Time
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-6xl lg:text-7xl font-bold text-muted-foreground mb-2">
                  5+
                </div>
                <div className="text-lg text-muted-foreground uppercase tracking-wide">
                  Years of Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-xl text-foreground font-medium">
            Book a free call and let's get you graduated—finally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
