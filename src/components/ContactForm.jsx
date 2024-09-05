import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import emailjs from "emailjs-com";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const schema = yup.object().shape({
    title: yup.string().required("Oops the Title "),
    email: yup.string().email("Invalid email").required("enter your email!"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await schema.validate(formData, { abortEarly: false });

      const response = await emailjs.send(
        "service_kn4v2ym", // Replace with your EmailJS service ID
        "template_p8srj6c", // Replace with your EmailJS template ID
        {
          from_name: formData.title,
          from_email: formData.email,
          message: formData.message,
        },
        "namUt0_Q5gclhEEb7" // Replace with your EmailJS user ID
      );

      if (response.status === 200) {
        toast.dark("Message sent successfully ✅");
      } else {
        toast.dark("❗Oops not send ❗");
      }
    } catch (err) {
      if (err.inner) {
        const errorMessages = err.inner.map((error) => error.message).join(" and ");
        toast.dark(`${errorMessages}`);
      } else {
        toast.dark("Ooops Please try again.");
      }
    } finally {
      setLoading(false);
      setFormData({
        title: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <motion.div
      style={{ scale }}
      className="h-2/3 w-1/3 max-md:w-4/5 border-b-2 border-neutral-700 rounded-lg flex flex-col items-center justify-evenly"
    >
      <ToastContainer />
      <div className="ml-6 h-1/6 w-5/6 flex flex-col items-start">
        <h2 className="text-neutral-400 text-sm leading-5 font-josefin text-center">
          Get in touch
        </h2>
        <h1 className="text-[#f9f0ec] text-center text-3xl font-thin tracking-widest">
          Contact
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-4"
      >
        <input
          className="bg-black placeholder:text-neutral-600 p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
          placeholder="title..."
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="bg-black placeholder:text-neutral-600 p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
          placeholder="email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-black placeholder:text-neutral-600 p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
          placeholder="message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-2 border-2 border-[#141414] text-neutral-400 rounded-2xl font-josefin hover:text-white transition-colors duration-500"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
};
