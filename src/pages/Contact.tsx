
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const Contact = () => {
  useRevealAnimation();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "residential"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you as soon as possible.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          projectType: "residential"
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a question or ready to start your ceiling project? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin size={40} className="text-gold mx-auto mb-4" />,
                title: "Our Location",
                details: ["Islamabad, Pakistan", "Serving across the capital region"]
              },
              {
                icon: <Phone size={40} className="text-gold mx-auto mb-4" />,
                title: "Phone Number",
                details: ["+92 123 456 789", "+92 987 654 321"]
              },
              {
                icon: <Mail size={40} className="text-gold mx-auto mb-4" />,
                title: "Email Address",
                details: ["info@ishaqceilings.com", "sales@ishaqceilings.com"]
              },
              {
                icon: <Clock size={40} className="text-gold mx-auto mb-4" />,
                title: "Working Hours",
                details: ["Monday - Saturday: 9am - 7pm", "Sunday: Closed"]
              }
            ].map((item, index) => (
              <div key={index} className="bg-midnight p-8 rounded-xl fancy-border text-center reveal hover-glow transition-all duration-300">
                {item.icon}
                <h3 className="text-xl font-playfair font-bold text-white mb-3">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-gradient">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below to get in touch with our team. Whether you have questions about our services, want to request a quote, or are ready to start your project, we're here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-midnight border-gray-700 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-midnight border-gray-700 focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-midnight border-gray-700 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-white mb-2">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className="w-full p-2 rounded-md bg-midnight border border-gray-700 focus:border-gold text-white"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject *</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-midnight border-gray-700 focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-midnight border-gray-700 focus:border-gold"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 w-full py-6 font-montserrat ${isSuccess ? 'bg-green-600' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="mr-2" size={20} />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="reveal order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                  alt="Contact Us" 
                  className="rounded-xl fancy-border w-full h-full object-cover"
                />
                <div className="absolute -bottom-8 -right-8 z-0 w-full h-full border-2 border-gold rounded-xl"></div>
                <div className="absolute -top-8 -left-8 z-0 w-full h-full border-2 border-gold rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Our Location
            </h2>
            <p className="text-gray-300">
              We're based in Islamabad and serve clients throughout the capital region. Visit our office to discuss your ceiling project.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden fancy-border reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.74302503605!2d72.93122232929685!3d33.6162198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6974a2222821f926!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1601234567890!5m2!1sen!2s" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ishaq's Ceiling Creations Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Find answers to common questions about our services, process, and products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {[
              {
                question: "How long does a typical ceiling installation take?",
                answer: "The duration of a ceiling installation depends on the size of the space and the complexity of the design. A standard residential room might take 2-3 days, while larger or more intricate projects could take 1-2 weeks. We'll provide a specific timeline during our consultation."
              },
              {
                question: "What types of ceiling materials do you work with?",
                answer: "We work with a wide range of materials, including gypsum board, POP (Plaster of Paris), wood, metal, acoustic panels, and more. The choice of material depends on your aesthetic preferences, functional requirements, and budget."
              },
              {
                question: "Do you provide services outside Islamabad?",
                answer: "While we're based in Islamabad, we do take on projects in surrounding areas. For projects outside Islamabad, additional travel and accommodation costs may apply. Please contact us to discuss your specific location."
              },
              {
                question: "How much does a custom ceiling design cost?",
                answer: "The cost varies widely based on the size of the space, materials used, complexity of the design, and other factors. We provide detailed, transparent quotes after our initial consultation and assessment. Rest assured, we offer competitive pricing for the quality of our work."
              },
              {
                question: "Do you offer any warranty on your work?",
                answer: "Yes, we provide a warranty on both materials and craftsmanship. The specific terms vary depending on the type of installation, but our standard warranty covers structural integrity and workmanship for at least one year."
              },
              {
                question: "Can you integrate lighting into the ceiling design?",
                answer: "Absolutely! We specialize in integrating various lighting solutions, including recessed lights, LED strips, cove lighting, and decorative fixtures, into our ceiling designs. Our approach ensures both aesthetic appeal and functionality."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-midnight-light p-8 rounded-xl fancy-border hover-glow transition-all duration-300">
                <h3 className="text-xl font-playfair font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-celestial rounded-xl p-8 md:p-12 text-center reveal fancy-border">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation or request a quote. Our team is ready to bring your ceiling vision to life with our expertise and craftsmanship.
            </p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black hover:from-gold hover:to-gold-dark transition-all duration-300 animate-glow text-lg py-6 px-8 font-montserrat"
            >
              <a href="tel:+923001234567">
                <Phone size={18} className="mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
