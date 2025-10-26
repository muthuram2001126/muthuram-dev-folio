import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Consent Management Platform",
      description: "Enterprise-grade platform for managing user consent and data privacy compliance. Built with Spring Boot and MySQL, featuring robust API integration and real-time consent tracking.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      category: "Enterprise",
      link: null, // Internal KPMG asset
      github: null,
    },
    {
      title: "Billboard Application",
      description: "Complex financial application for Goldman Sachs featuring automated fee computation, billing integration with Revport, and PDF generation for financial reports.",
      tech: ["Java", "Spring Boot", "Revport", "PDF Gen"],
      category: "Finance",
      link: null,
      github: null,
    },
    {
      title: "Soil Nutrient Analysis System",
      description: "IoT-based system for real-time soil monitoring using Arduino sensors. Features ThingSpeak integration for data visualization and Android app for mobile access.",
      tech: ["IoT", "Arduino", "ThingSpeak", "Android"],
      category: "IoT",
      link: null,
      github: "https://github.com/muthuram2001126",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Some of my notable work</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                )}
                {project.link && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                )}
                {!project.link && !project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    disabled
                  >
                    Internal Project
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
