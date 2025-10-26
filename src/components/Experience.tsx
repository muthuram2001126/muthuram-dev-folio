import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Technology Analyst",
      company: "KPMG",
      period: "Aug 2024 – Present",
      location: "Bangalore, India",
      achievements: [
        "Built and optimized REST APIs using Java & Spring Boot for enterprise applications",
        "Developed a centralized Consent Management Platform ensuring user data privacy compliance",
        "Integrated backend workflows for Goldman Sachs' Billboard platform with complex fee computation",
        "Automated billing processes via Revport integration, improving efficiency by 40%",
        "Implemented PDF generation and automated email notifications for financial reports",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Avasoft",
      period: "Nov 2023 – Jul 2024",
      location: "Bangalore, India",
      achievements: [
        "Worked on AVALON, a comprehensive project management tool similar to Jira",
        "Enhanced bug-tracking modules with improved UI/UX and workflow optimization",
        "Implemented new design workflows using AI (Asami) for automated code generation",
        "Achieved 60% development efficiency improvement through AI-powered automation",
        "Collaborated with cross-functional teams to deliver features on tight deadlines",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background hidden md:block" />

              <div className="md:ml-20 glass-card p-8 rounded-2xl hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold text-lg flex items-center gap-2">
                      <Briefcase size={18} />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-foreground/90">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
