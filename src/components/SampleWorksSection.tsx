import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, BarChart3, Calculator, X, ZoomIn } from "lucide-react";

type Category = "all" | "theoretical" | "analysis" | "methodology";

interface SampleWork {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
}

const sampleWorks: SampleWork[] = [
  {
    id: 1,
    title: "Theoretical Framework",
    category: "theoretical",
    description: "Literature review structure for marketing research thesis",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=520&fit=crop",
  },
  {
    id: 2,
    title: "SPSS Analysis Results",
    category: "analysis",
    description: "Regression analysis output with interpretation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=520&fit=crop",
  },
  {
    id: 3,
    title: "Research Methodology",
    category: "methodology",
    description: "Mixed methods approach with sampling equations",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=520&fit=crop",
  },
  {
    id: 4,
    title: "Conceptual Model",
    category: "theoretical",
    description: "Hypothesis development framework diagram",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=520&fit=crop",
  },
  {
    id: 5,
    title: "Statistical Tables",
    category: "analysis",
    description: "Correlation matrix and descriptive statistics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=520&fit=crop",
  },
  {
    id: 6,
    title: "Sample Size Calculation",
    category: "methodology",
    description: "Power analysis and sampling methodology",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=520&fit=crop",
  },
];

const categories = [
  { id: "all" as Category, label: "All Samples", icon: FileText },
  { id: "theoretical" as Category, label: "Theoretical Framework", icon: FileText },
  { id: "analysis" as Category, label: "Data Analysis", icon: BarChart3 },
  { id: "methodology" as Category, label: "Methodology", icon: Calculator },
];

export const SampleWorksSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedWork, setSelectedWork] = useState<SampleWork | null>(null);

  const filteredWorks = activeCategory === "all" 
    ? sampleWorks 
    : sampleWorks.filter(work => work.category === activeCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sample Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at actual samples from completed thesis projects. See the quality and detail we deliver.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative bg-background rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Document Frame */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-10 pointer-events-none" />
                  
                  {/* Image */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-primary-foreground text-center p-4">
                      <ZoomIn className="w-10 h-10 mx-auto mb-2" />
                      <span className="text-sm font-medium">View Sample</span>
                    </div>
                  </div>
                </div>

                {/* Document info */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${
                      work.category === "theoretical" ? "bg-blue-500" :
                      work.category === "analysis" ? "bg-green-500" : "bg-purple-500"
                    }`} />
                    <span className="text-xs text-muted-foreground capitalize">
                      {work.category === "theoretical" ? "Theoretical Framework" :
                       work.category === "analysis" ? "Data Analysis" : "Methodology"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{work.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{work.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-[3/4] max-h-[70vh] overflow-hidden">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${
                    selectedWork.category === "theoretical" ? "bg-blue-500" :
                    selectedWork.category === "analysis" ? "bg-green-500" : "bg-purple-500"
                  }`} />
                  <span className="text-sm text-muted-foreground capitalize">
                    {selectedWork.category === "theoretical" ? "Theoretical Framework" :
                     selectedWork.category === "analysis" ? "Data Analysis" : "Methodology"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{selectedWork.title}</h3>
                <p className="text-muted-foreground">{selectedWork.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
