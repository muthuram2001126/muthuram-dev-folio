import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Consent Management Platform",
      description: "Developed an enterprise-grade platform for KPMG to manage user consent and ensure data privacy compliance. Built robust REST APIs using Java and Spring Boot with MySQL database for centralized consent tracking and seamless integration across systems.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      category: "Enterprise",
    },
    {
      title: "Billboard Application",
      description: "Engineered a sophisticated financial application for Goldman Sachs handling complex fee computations and automated billing workflows. Integrated with Revport for seamless billing operations and implemented PDF generation for detailed financial reports.",
      tech: ["Java", "Spring Boot", "Revport", "PDF Gen"],
      category: "Finance",
    },
    {
      title: "AI Resume Generator",
      description: "Built an intelligent resume generation system leveraging Google Gemini API that analyzes user resumes and job descriptions to create optimized, tailored resumes. Implements advanced NLP techniques to match qualifications with job requirements effectively.",
      tech: ["React.js", "Gemini API", "Node.js", "AI/ML"],
      category: "AI",
    },
    {
      title: "Real-Time Location Tracker",
      description: "Created a group travel companion app enabling real-time location tracking for friends on separate routes. Features shareable group links for easy member addition and live GPS tracking to monitor each person's location along their journey to the destination.",
      tech: ["React.js", "Google Maps API", "WebSocket", "Node.js"],
      category: "Real-Time",
    },
    {
      title: "COVID Vaccination Scheduler",
      description: "Developed a comprehensive vaccination management system with dual interfaces: user portal for booking appointments based on vaccine availability and location preferences, and admin dashboard for complete CRUD operations, location management, and vaccine inventory tracking with unique ID generation.",
      tech: ["React.js", "Node.js", "MongoDB", "Express"],
      category: "Healthcare",
    },
    {
      title: "Soil Nutrient Analysis System",
      description: "Designed an IoT-based agricultural monitoring solution using Arduino sensors for real-time soil analysis. Integrated ThingSpeak for data visualization and developed an Android companion app for remote monitoring and insights.",
      tech: ["IoT", "Arduino", "ThingSpeak", "Android"],
      category: "IoT",
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

              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground italic">
                  Proprietary Project - Details under NDA
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
