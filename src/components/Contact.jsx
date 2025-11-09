import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { playClickSound, playHoverSound } from "../utils/sounds";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    playClickSound();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-16 relative overflow-hidden bg-gradient-to-br from-[#faf8f5] via-[#fefcf9] to-[#f9f7f4] dark:from-gray-900/95 dark:via-gray-900 dark:to-gray-800/95 transition-colors duration-300">
      {/* Cream shading background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5f3ef] dark:bg-gray-800/30 rounded-full opacity-40 dark:opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7f5f1] dark:bg-gray-800/30 rounded-full opacity-40 dark:opacity-20 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#faf8f5] dark:bg-gray-800/20 rounded-full opacity-30 dark:opacity-10 blur-3xl"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-textPrimary-light dark:text-textPrimary-dark mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto rounded-full"></div>
          <p className="font-poppins font-normal text-lg text-textSecondary-light dark:text-textSecondary-dark mt-6">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Centered Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#e8e6e2] dark:border-gray-700/50 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-poppins font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark ${
                  errors.name
                    ? "border-accent2-light dark:border-accent2-dark"
                    : "border-secondary-light/20 dark:border-secondary-dark/30 focus:border-secondary-light dark:focus:border-secondary-dark"
                } focus:outline-none transition-all duration-300 font-poppins`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-accent2-light dark:text-accent2-dark text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-poppins font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark ${
                  errors.email
                    ? "border-accent2-light dark:border-accent2-dark"
                    : "border-secondary-light/20 dark:border-secondary-dark/30 focus:border-secondary-light dark:focus:border-secondary-dark"
                } focus:outline-none transition-all duration-300 font-poppins`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-accent2-light dark:text-accent2-dark text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-poppins font-semibold text-textPrimary-light dark:text-textPrimary-dark mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark ${
                  errors.message
                    ? "border-accent2-light dark:border-accent2-dark"
                    : "border-secondary-light/20 dark:border-secondary-dark/30 focus:border-secondary-light dark:focus:border-secondary-dark"
                } focus:outline-none transition-all duration-300 font-poppins resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="text-accent2-light dark:text-accent2-dark text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-secondary-light dark:bg-secondary-dark text-white dark:text-primary-dark font-poppins font-semibold rounded-xl hover:bg-[#8dd4b8] dark:hover:bg-[#00b894] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary-light/20 dark:bg-secondary-dark/20 text-secondary-light dark:text-secondary-dark px-4 py-3 rounded-xl text-center font-poppins font-medium"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>

          {/* Social Icons */}
          <div className="mt-8 pt-8 border-t border-secondary-light/20 dark:border-secondary-dark/30">
            <p className="text-center font-poppins font-medium text-textSecondary-light dark:text-textSecondary-dark mb-4">
              Or reach out via:
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="mailto:abhishektripathi2096a@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <AiFillMail size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhishek-tripathi-843b11217"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <AiFillLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/AbhisehkTripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                <AiFillGithub size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
