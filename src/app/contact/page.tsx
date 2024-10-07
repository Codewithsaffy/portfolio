"use client";

import { useState } from "react";
import axios from "axios";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Email validation function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      errors.name = "Name is required.";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Valid email is required.";
      valid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Send a POST request using axios
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.log(error)
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    }
  };

  return (
    <div className="min-h-screen flex items-center lg:items-end justify-center pt-24 px-4 pb-10 relative bg-[#000214]">
      <Link href={"/"} className="absolute flex hover:cursor-pointer z-10 justify-center items-center top-2 left-2 p-4 border border-white rounded-full bg-[#CBACF9] text-white">
        <FaArrowLeft />
      </Link>
            <BackgroundBeams />

      <div className="border border-dark-accent/30 text-[#CBAFC9]  z-10 bg-gradient-to-r from-[#04071D] to-[#0C0E23 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl z-20 font-semibold mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-[#CBACF9]"
              } rounded-md bg-[#cbafc932] backdrop-blur-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-[#CBAFC9]"
              } rounded-md bg-[#cbafc932] backdrop-blur-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium ">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-[#CBACF9]"
              } rounded-md bg-[#cbafc932] backdrop-blur-lg  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p
              className={`text-center mt-4 ${
                statusMessage.includes("successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
