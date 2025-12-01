import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, LineChart, Database, GraduationCap, ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "thesis-tutoring",
    icon: GraduationCap,
    title: "Thesis Tutoring",
    description: "Complete guidance from topic selection to defense preparation",
    details: {
      intro: "Starting your thesis can feel overwhelming. We'll guide you through every step—from finding your topic to preparing for your defense.",
      steps: [
        {
          title: "Topic Selection",
          description: "Find a research topic that matches your interests and meets academic requirements"
        },
        {
          title: "Literature Review",
          description: "Build a solid theoretical framework with the latest academic research"
        },
        {
          title: "Research Design",
          description: "Choose the right methodology tailored to your research questions"
        },
        {
          title: "Data Collection",
          description: "Select appropriate methods, create surveys, ensure validity"
        },
        {
          title: "Data Analysis",
          description: "Pick the right statistical techniques and interpret results correctly"
        },
        {
          title: "Writing & Drafting",
          description: "Structure your thesis clearly with proper academic writing"
        },
        {
          title: "Citation & Referencing",
          description: "Follow your university's citation style (APA, MLA, Chicago)"
        },
        {
          title: "Editing & Proofreading",
          description: "Polish grammar, spelling, and formatting for professional submission"
        },
        {
          title: "Final Submission",
          description: "Final check to ensure it meets all university requirements"
        },
        {
          title: "Defense Preparation",
          description: "Anticipate questions and refine your presentation"
        }
      ]
    }
  },
  {
    id: "data-collection",
    icon: Database,
    title: "Data Collection",
    description: "Design surveys, gather quality data, ensure reliability",
    details: {
      intro: "Collecting the right data is crucial. We help you design effective surveys and gather reliable data for your research.",
      steps: [
        {
          title: "Survey Design",
          description: "Create questionnaires that actually answer your research questions"
        },
        {
          title: "Sample Selection",
          description: "Identify the right target group and determine sample size"
        },
        {
          title: "Data Quality",
          description: "Ensure reliability and validity of your measurement instruments"
        },
        {
          title: "Distribution Strategy",
          description: "Choose effective channels to reach your respondents"
        },
        {
          title: "Response Management",
          description: "Track responses and manage follow-ups for better response rates"
        },
        {
          title: "Data Preparation",
          description: "Clean and organize collected data for analysis"
        }
      ]
    }
  },
  {
    id: "data-analysis",
    icon: LineChart,
    title: "Data Analysis",
    description: "Statistical analysis from basic tests to advanced modeling",
    details: {
      intro: "Not sure which test to run? We'll tell you, then run it, check it, and explain what it means for your thesis.",
      steps: [
        {
          title: "Data Preparation",
          description: "Clean datasets, handle missing values, remove outliers"
        },
        {
          title: "Statistical Analysis",
          description: "From t-tests to structural equation modeling—we match the method to your question"
        },
        {
          title: "Data Visualization",
          description: "Clear charts and graphs that make your findings obvious"
        },
        {
          title: "Results Interpretation",
          description: "Understand what your numbers mean for your thesis—in plain language"
        }
      ],
      techniques: {
        basic: [
          "Descriptive Statistics",
          "T-Tests & Chi-Square",
          "Correlation Analysis",
          "Regression Analysis",
          "ANOVA / MANOVA",
          "Factor Analysis"
        ],
        advanced: [
          "Structural Equation Modeling (SEM)",
          "Panel Data Analysis",
          "Hierarchical Linear Models",
          "Time Series Analysis",
          "Survival Analysis",
          "Propensity Score Matching"
        ]
      },
      software: ["SPSS", "STATA", "R", "Python", "EViews", "Excel"]
    }
  },
  {
    id: "training",
    icon: BookOpen,
    title: "Training & Workshops",
    description: "Learn research skills and statistical methods hands-on",
    details: {
      intro: "Want to learn how to do it yourself? We offer personalized training in research methods and statistical analysis.",
      steps: [
        {
          title: "Research Methods Training",
          description: "Learn qualitative and quantitative research design"
        },
        {
          title: "SPSS Training",
          description: "Master data analysis in SPSS from basics to advanced techniques"
        },
        {
          title: "STATA Training",
          description: "Learn statistical analysis and econometrics in STATA"
        },
        {
          title: "R & Python Training",
          description: "Build skills in modern data analysis programming"
        },
        {
          title: "Academic Writing",
          description: "Improve your scientific writing and argumentation"
        },
        {
          title: "Literature Review",
          description: "Learn systematic literature search and synthesis techniques"
        }
      ]
    }
  }
];

export const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
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

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-medium transition-all duration-300 bg-card border-border overflow-hidden">
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-foreground">
                            {service.title}
                          </h3>
                          <ChevronDown 
                            className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ml-2 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="p-8 pt-6 space-y-6">
                        <p className="text-foreground leading-relaxed">
                          {service.details.intro}
                        </p>

                        <div className="space-y-4">
                          {service.details.steps.map((step) => (
                            <div key={step.title} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {service.details.techniques && (
                          <div className="mt-6 pt-6 border-t border-border space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Basic Techniques</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.details.techniques.basic.map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Advanced Techniques</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.details.techniques.advanced.map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Software We Use</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.details.software.map((soft) => (
                                  <span key={soft} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                                    {soft}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToContact();
                          }}
                          className="w-full mt-4"
                        >
                          Get Started
                        </Button>
                      </div>
                    </motion.div>
                  )}
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
