import { useState } from "react";
import { motion } from "motion/react";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden bg-primary-sec">
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent rounded-full opacity-15 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-purple rounded-full opacity-15 animate-float-delayed" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-[36px] md:text-[42px] text-white mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full" />
          <p className="font-inter font-normal text-base sm:text-lg text-textSecondary mt-6">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-6 sm:p-10 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-inter font-semibold text-textSecondary mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-card text-white ${
                  errors.name
                    ? "border-red-500"
                    : "border-glass focus:border-secondary"
                } focus:outline-none transition-all duration-300 font-inter`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-accent2 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-inter font-semibold text-textSecondary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-card text-white ${
                  errors.email
                    ? "border-red-500"
                    : "border-glass focus:border-secondary"
                } focus:outline-none transition-all duration-300 font-inter`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-accent2 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-inter font-semibold text-textSecondary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border bg-card text-white ${
                  errors.message
                    ? "border-red-500"
                    : "border-glass focus:border-secondary"
                } focus:outline-none transition-all duration-300 font-inter resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="text-accent2 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-accent-gradient text-white font-inter font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-secondary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/20 text-secondary px-4 py-3 rounded-xl text-center font-inter font-medium"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>

          {/* Social Icons */}
          <div className="mt-8 pt-8 border-t border-glass">
            <p className="text-center font-inter font-medium text-textSecondary mb-4">
              Or reach out via:
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="mailto:abhishektripathi2096a@gmail.com"
                className="w-12 h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillMail size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhishek-tripathi-843b11217"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/AbhisehkTripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
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
