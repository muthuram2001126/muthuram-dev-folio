import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    emailjs
        .send(
            "service_dvr23m7", // replace with EmailJS Service ID
            "template_eqw9pts", // replace with EmailJS Template ID
            {
              username: formData.name,
              email: formData.email,
              user_message: formData.message,
              // to_email: "muthurammuruganandan@gmail.com",
            },
            "iRSettVeWihBU7X6V" // replace with EmailJS Public Key
        )
        .then(() => {
          // 2️⃣ Send auto-reply to USER
          emailjs.send(
              "service_dvr23m7",
              "template_gecq5ad", // new template for sender
              {
                username: formData.name,
                email: formData.email,
                user_message: formData.message,
              },
              "iRSettVeWihBU7X6V"
          );
          toast({
            title: "Message Sent",
            description: "Your message has been delivered successfully.",
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast({
            title: "Sending Failed",
            description: "There was an issue sending your message. Please try again later.",
            variant: "destructive",
          });
        });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muthurammuruganandan@gmail.com",
      href: "mailto:muthurammuruganandan@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7708278412",
      href: "tel:+917708278412",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
  ];

  return (
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your next project
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out for collaborations, opportunities, or
                  just a friendly chat about technology!
                </p>
              </div>


              {contactInfo.map((info, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                          <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                      ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
              ))}

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me:
                </p>
                <div className="flex gap-4">
                  <a
                      href="https://github.com/muthuram2001126"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                  >
                    {/* GitHub Icon */}
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                    </svg>
                  </a>
                  <a
                      href="https://linkedin.com/in/muthuram-muruganandan-528444213"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                  >
                    {/* LinkedIn Icon */}
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5..." />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 rounded-2xl space-y-6"
              >
                <div>
                  <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50"
                  />
                </div>

                <div>
                  <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50"
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white"
                    size="lg"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
