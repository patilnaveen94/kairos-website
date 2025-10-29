import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Office",
      details: [
        "KAIROS Integrated Solutions Pvt. Ltd.",
        "#52/2, Raja Nivas, Central Street, Kumara Park West, Bengaluru",
        "Karnataka, India - 560020",
      ],
    },
    { icon: Phone, title: "Phone", details: ["9845129067"] },
    {
      icon: Mail,
      title: "Email",
      details: ["kairosintegratedsolutions@gmail.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">Get In Touch</h1>
            <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Ready to transform lives through skill development? Let's collaborate to build a skilled and empowered India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach out and start your journey with KAIROS
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 w-20 h-20 flex items-center justify-center rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((d, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-1">
                    {d}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
                <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.150069066418!2d77.57336467507514!3d13.00579618730243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16cf52a9a13f%3A0xaaa!2sKumara%20Park%20West%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1729529000000!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="border-0 w-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  KAIROS Integrated Solutions Pvt. Ltd.
                </h3>
                <p className="text-blue-100 mb-2 font-medium">CIN: U74999KA2016PTC097038</p>
                <p className="text-blue-100 mb-6">Registered Office: Karnataka, India</p>
                <p className="text-blue-50 mb-8 leading-relaxed">
                  A leading skill development organization empowering India's youth through innovative training programs, strategic partnerships, and sustainable employment solutions.
                </p>
                
                <div className="border-t border-blue-400 pt-6">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-primary to-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold/5 to-transparent transform -skew-y-3"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Lives?</h2>
          <div className="w-32 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Whether you want to partner with us, join our training programs, explore government collaborations, or contribute to CSR initiatives — let's create lasting impact together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="tel:+919845129067"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-primary px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-400 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:kairosintegratedsolutions@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gold hover:text-primary transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Email Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;