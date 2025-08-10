import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, CheckCircle, XCircle, Loader } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending..." });
    const backendUrl = import.meta.env.VITE_BACKEND_URL + "/api/send";
    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Message Sent Successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    }
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return (
    <AnimatedSection>
      <div id="contact" className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-4 tracking-wide select-none">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-lg mx-auto">
          Have a question or want to work together? Drop me a line!
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto bg-gray-900/70 rounded-2xl p-10 shadow-xl border border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-1">
                <User className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" size={22} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="pl-14 pr-5 py-4 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-inner text-gray-100 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition"
                />
              </div>

              <div className="relative flex-1">
                <Mail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" size={22} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="pl-14 pr-5 py-4 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-inner text-gray-100 placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="resize-none p-5 w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-inner text-gray-100 placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status.type === "sending"}
              className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                text-gray-100 font-semibold py-4 rounded-3xl flex items-center justify-center gap-3
                shadow-lg hover:from-gray-600 hover:via-gray-700 hover:to-gray-800
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-all"
              whileHover={{ scale: status.type === "sending" ? 1 : 1.05, boxShadow: "0 0 15px rgba(156,163,175,0.6)" }}
              whileTap={{ scale: status.type === "sending" ? 1 : 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {status.type === "sending" ? (
                <>
                  <Loader className="animate-spin text-gray-300" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </motion.button>

            <div className="text-center mt-3 min-h-[1.5rem]">
              {status.message && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold
                    ${
                      status.type === "success"
                        ? "text-green-400"
                        : status.type === "error"
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
                >
                  {status.type === "success" && <CheckCircle size={18} />}
                  {status.type === "error" && <XCircle size={18} />}
                  {status.message}
                </motion.span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
