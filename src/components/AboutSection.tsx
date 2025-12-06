import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Dark Bold Section */}
      <div className="bg-foreground text-background py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Giant Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-3 gap-4 mb-20"
          >
            <div className="text-center">
              <div className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-primary leading-none">
                200+
              </div>
              <div className="text-sm lg:text-lg text-background/60 uppercase tracking-[0.2em] mt-2">
                Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-background leading-none">
                95%
              </div>
              <div className="text-sm lg:text-lg text-background/60 uppercase tracking-[0.2em] mt-2">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-primary leading-none">
                5+
              </div>
              <div className="text-sm lg:text-lg text-background/60 uppercase tracking-[0.2em] mt-2">
                Years
              </div>
            </div>
          </motion.div>

          {/* Bold Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight mb-8">
              Stop Procrastinating.
              <br />
              <span className="text-primary">Graduate On Time.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Big Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl lg:text-9xl font-black text-primary/10 leading-none mb-4">
                "
              </div>
              <p className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed -mt-16 lg:-mt-20">
                Hand me your thesis, and I'll guide you to graduation.
              </p>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Been putting off your thesis for months?</span> You're not alone. 
                Most of my students are working professionals who delayed their thesis because of jobs, internships, 
                or life getting in the way. Now the deadline is real—and the pressure is on.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Students from <span className="font-semibold text-foreground">UvA, VU Amsterdam, Erasmus, Tilburg, and Radboud</span> have all 
                finished with my help—even after months of delay.
              </p>

              <div className="pt-4">
                <p className="text-xl font-bold text-foreground">
                  Book a free call and let's get you graduated—finally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
