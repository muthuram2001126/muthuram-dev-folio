import { motion } from "framer-motion";
import { Code2, Sparkles, Target } from "lucide-react";

const About = () => {
  const funFacts = [
    {
      icon: Code2,
      title: "100-Day Coding Challenge",
      description: "Completed an intensive coding challenge to sharpen problem-solving skills",
    },
    {
      icon: Target,
      title: "Scalable Systems",
      description: "Passionate about building robust, scalable software architectures",
    },
    {
      icon: Sparkles,
      title: "Tech Explorer",
      description: "Enthusiastic about exploring new technologies and AI innovations",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know more about who I am</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Software Developer</span> with a BE in Computer Science Engineering 
              and over <span className="text-primary font-semibold">1.5+ year of professional experience</span> in building scalable software solutions.
              Currently working as a Technology Analyst at <span className="text-primary font-semibold">KPMG</span>, I specialize in developing 
              robust backend systems using Java and Spring Boot, along with modern frontend applications using React.js.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              My technical expertise spans across <span className="text-accent font-semibold">REST API development</span>, 
              <span className="text-accent font-semibold"> cloud technologies</span> (Azure certified), 
              and <span className="text-accent font-semibold">full-stack development</span>. I'm passionate about solving complex problems 
              with clean, efficient code and continuously exploring innovations in AI and cloud computing.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Beyond coding, I enjoy contributing to open-source projects, staying updated with the latest tech trends, 
              and building solutions that make a real impact. I believe in writing code that not only works but is maintainable and scalable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Fun Facts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <fact.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{fact.title}</h4>
                  <p className="text-muted-foreground text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
