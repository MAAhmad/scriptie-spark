import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BarChart3, Database, LineChart, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const DataAnalysis = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Database,
      title: "Data Preparation",
      description: "Clean datasets, handle missing values, remove outliers. Your data ready for analysis.",
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description: "From t-tests to structural equation modeling. We run the tests that answer your research questions.",
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Clear charts and graphs that make your findings obvious. No confusing visuals.",
    },
    {
      icon: FileSpreadsheet,
      title: "Results Interpretation",
      description: "We explain what your numbers mean for your thesis. In plain language.",
    },
  ];

  const basicTechniques = [
    "Descriptive Statistics",
    "T-Tests",
    "Chi-Square Tests",
    "Correlation Analysis",
    "Simple & Multiple Regression",
    "Logistic Regression",
    "ANOVA / MANOVA",
    "Non-Parametric Tests",
    "Factor Analysis",
    "PCA (Principal Component Analysis)",
    "Cluster Analysis",
  ];

  const advancedTechniques = [
    "Structural Equation Modeling (SEM)",
    "Panel Data Analysis (Fixed/Random Effects)",
    "Hierarchical Linear Models (HLM)",
    "Time Series Analysis (ARIMA, VAR)",
    "Survival Analysis",
    "Difference-in-Differences",
    "Propensity Score Matching",
    "Event Study Analysis",
  ];

  const software = ["SPSS", "STATA", "R", "Python", "EViews", "Excel"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Data Analysis That Actually Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not sure which statistical test to run? We'll tell you. Then we'll run it, check it, and explain what it means for your thesis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact}>
                Schedule Free Call
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                document.getElementById('techniques')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                See What We Do
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-muted-foreground">Four core services. No filler.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistical Techniques */}
      <section id="techniques" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Statistical Techniques We Use</h2>
            <p className="text-xl text-muted-foreground">From basic to advanced. We match the method to your research question.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Techniques */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Basic Analysis</CardTitle>
                <CardDescription>Standard statistical methods for most theses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {basicTechniques.map((technique) => (
                    <li key={technique} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{technique}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Analysis</CardTitle>
                <CardDescription>Complex methods for specialized research</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {advancedTechniques.map((technique) => (
                    <li key={technique} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{technique}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Software */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Software We Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {software.map((tool) => (
                <div
                  key={tool}
                  className="px-6 py-3 bg-background rounded-lg border-2 border-border font-semibold"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Not Sure Which Test You Need?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free call. We'll look at your research questions and tell you exactly which statistical methods you need.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Schedule Free Call
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalysis;
