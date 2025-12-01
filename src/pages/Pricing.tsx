import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const packages = [
    {
      name: "Success Package 5+",
      price: "70",
      hours: "5 or more hours",
      description: "Perfect for targeted support on specific challenges",
      features: [
        "5+ hours of personalized assistance",
        "Online meetings via Zoom, Teams, Skype, WhatsApp",
        "Proofreading & editing",
        "Hypotheses formulation",
        "Simple data analysis in SPSS and STATA",
        "24h response time",
      ],
    },
    {
      name: "Success Package 10+",
      price: "65",
      hours: "10 or more hours",
      description: "Most popular—comprehensive support for major thesis sections",
      features: [
        "10+ hours of personalized assistance",
        "Online meetings via Zoom, Teams, Skype, WhatsApp",
        "Literature search & review",
        "Survey creation & validation",
        "Advanced data analysis in SPSS, STATA, and R",
        "Writing guidance & feedback",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Success Package 20+",
      price: "60",
      hours: "20 or more hours",
      description: "Complete guidance from start to submission",
      features: [
        "20+ hours of personalized assistance",
        "Online meetings via Zoom, Teams, Skype, WhatsApp",
        "Complete methodology guidance",
        "Full data collection support",
        "Data preparation & advanced analysis",
        "Result interpretation & presentation",
        "Writing support for all chapters",
        "Defense preparation",
        "Highest priority support",
      ],
    },
  ];

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
              Invest in Your Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear pricing. No hidden costs. Pay per hour, buy the package that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className={`h-full flex flex-col ${
                  pkg.popular 
                    ? 'border-2 border-primary shadow-lg relative' 
                    : 'border-border'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold">€{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">Per Hour</span>
                    </div>
                    <CardDescription className="mt-4 text-base">
                      {pkg.hours}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {pkg.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-8"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={scrollToContact}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
          </motion.div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How does payment work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You pay for the hours you need upfront. Once you purchase a package, we'll schedule sessions based on your availability. Any unused hours can be used later.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Can I upgrade my package?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! If you need more hours, you can upgrade to a larger package at any time. The price difference will be adjusted based on the new hourly rate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What if I need help choosing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schedule a free consultation call. We'll discuss your thesis stage, timeline, and specific needs to recommend the right package for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you're not satisfied after the first session, we'll refund the unused hours—no questions asked.
                </p>
              </CardContent>
            </Card>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free call to discuss which package is right for you.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
