import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Muthuram M</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Software Developer | Java | Spring Boot | React.js
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Turning complex ideas into seamless software solutions. Cloud & AI Enthusiast based in Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white min-w-[200px]"
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2" size={20} />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10 min-w-[200px]"
              onClick={() => {
                const resumeContent = `MUTHURAM MURUGANANDAN
Software Developer | Java | Spring Boot | React.js | Cloud & AI Enthusiast

Contact Information:
Email: muthurammuruganandan@gmail.com
Phone: +91 7708278412
Location: Bangalore, India
LinkedIn: linkedin.com/in/muthuram-muruganandan-528444213
GitHub: github.com/muthuram2001126

PROFESSIONAL SUMMARY
Results-driven Software Developer with 1+ years of experience in building scalable enterprise applications using Java, Spring Boot, and modern web technologies. Proven expertise in developing REST APIs, cloud solutions, and AI-powered applications. Microsoft Certified Azure Developer with strong problem-solving skills and passion for innovative technology solutions.

EXPERIENCE

Technology Analyst | KPMG
August 2024 - Present | Bangalore, India
• Architected and developed enterprise-grade Consent Management Platform using Java and Spring Boot, ensuring GDPR compliance
• Built robust REST APIs with MySQL integration for centralized user consent tracking across multiple systems
• Engineered Billboard Application for Goldman Sachs featuring complex fee computation and automated billing workflows
• Integrated Revport billing system and implemented PDF generation for comprehensive financial reports
• Optimized backend performance resulting in 40% faster API response times

Software Developer Intern | Avasoft
November 2023 - July 2024 | Remote
• Contributed to AVALON project management platform development with Jira-like functionality
• Enhanced bug-tracking modules and implemented new design workflows using AI (Asami)
• Achieved 60% development efficiency improvement through automated code generation
• Collaborated with cross-functional teams to deliver features on tight deadlines

TECHNICAL SKILLS

Programming Languages: Java, C/C++, SQL, JavaScript, Python
Web Technologies: React.js, Node.js, Golang, HTML5, CSS3, Bootstrap, Tailwind CSS
Frameworks & Libraries: Spring Boot, Express.js, REST API, GraphQL
Databases: MySQL, MongoDB, PostgreSQL
Cloud & DevOps: Microsoft Azure (AZ-204 Certified), Docker, Git
Tools: IntelliJ IDEA, VS Code, Postman, Android Studio, GitHub, GitLab, Bitbucket
AI/ML: Google Gemini API, OpenAI, Azure AI Services

PROJECTS

AI Resume Generator
• Developed intelligent resume generation system using Google Gemini API
• Analyzes user resumes and job descriptions to create optimized, tailored applications
• Implements advanced NLP techniques for effective qualification-requirement matching

Real-Time Location Tracker
• Built group travel companion app with real-time GPS tracking capabilities
• Features shareable group links and live location monitoring for multiple users
• Integrated Google Maps API and WebSocket for seamless real-time updates

COVID Vaccination Scheduler
• Created comprehensive dual-interface vaccination management system
• User portal for booking appointments with availability-based scheduling
• Admin dashboard for CRUD operations, location management, and vaccine inventory tracking

Soil Nutrient Analysis System
• Designed IoT-based agricultural monitoring solution using Arduino sensors
• Integrated ThingSpeak for data visualization and insights
• Developed Android companion app for remote monitoring

CERTIFICATIONS
• Microsoft Certified: Azure Developer Associate (AZ-204) - 2024
• Azure AI Fundamentals (AI-900) - 2024
• Azure Fundamentals (AZ-900) - 2024
• Generative AI - Microsoft & LinkedIn - 2024
• Prompt Engineering for ChatGPT - Vanderbilt University - 2024

EDUCATION
Bachelor of Engineering in Computer Science
Anna University | 2020 - 2024 | Chennai, India

ACHIEVEMENTS
• Completed 100-day coding challenge demonstrating consistent problem-solving skills
• Active contributor to open-source projects on GitHub
• Passionate about exploring emerging technologies and continuous learning`;

                const blob = new Blob([resumeContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = "/2003_Muthuram_Resume.pdf";
                link.download = '2003_Muthuram_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="https://github.com/muthuram2001126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/muthuram-muruganandan-528444213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:muthurammuruganandan@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
