"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission (API call or email integration here)
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-white dark:bg-neutral-950 py-8 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-7xl font-medium text-gray-900 dark:text-white">
            We would love to hear from you!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            Have questions or need help? Fill out the form and we’ll get back to you shortly.
          </p>
          <div className="flex space-x-6 mt-4">
           <FaFacebook className="inline-block text-2xl mr-2 text-black" />
           <FaXTwitter className="inline-block text-2xl mr-2 text-black" />
           <FaLinkedin className="inline-block text-2xl mr-2 text-black" />
           <FaInstagram className="inline-block text-2xl mr-2 text-black" />
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-neutral-900 p-6 md:p-8 rounded-xl space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-white dark:bg-neutral-800 border text-sm border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-white dark:bg-neutral-800 border text-sm border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full mt-1 p-3 bg-white dark:bg-neutral-800 border text-sm border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-500 via-gray-900 to-black text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
