import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      code: "AZ-204",
      date: "2024",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      code: "AI-900",
      date: "2024",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      code: "AZ-900",
      date: "2024",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Generative AI",
      issuer: "Microsoft & LinkedIn",
      code: "Certificate",
      date: "2024",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      code: "Certificate",
      date: "2024",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Java Programming",
      issuer: "Oracle/Coursera",
      code: "Certificate",
      date: "2023",
      color: "from-red-500 to-red-600",
    },
    {
      title: "React.js Development",
      issuer: "Meta/Coursera",
      code: "Certificate",
      date: "2023",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Stanford/Coursera",
      code: "Certificate",
      date: "2023",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Cloud Computing Basics",
      issuer: "IBM",
      code: "Certificate",
      date: "2023",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional credentials and achievements</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-card p-6 rounded-2xl hover-lift relative overflow-hidden group"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                  <Award className="text-white" size={24} />
                </div>

                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.code}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <CheckCircle size={14} />
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Continuously expanding my knowledge through certifications and hands-on learning
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
