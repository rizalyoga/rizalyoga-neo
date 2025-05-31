"use client";

import React, { useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const ContactTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const data = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      template_params: formData,
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Message successfully sent!", {
            style: {
              border: "2px solid #000",
              padding: "16px",
              color: "#000",
              fontWeight: "bold",
              background: "#3FE37B",
            },
            position: "bottom-right",
            iconTheme: {
              primary: "#000",
              secondary: "#FFFAEE",
            },
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error("Failed to send the message, please try again", {
            style: {
              border: "2px solid #000",
              padding: "16px",
              color: "#fff",
              fontWeight: "bold",
              background: "#ED4343",
            },
            position: "bottom-right",
            iconTheme: {
              primary: "#000",
              secondary: "#FFFAEE",
            },
          });
        }
      })
      .finally(() => setIsSending(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Contact Form */}
      <div className="bg-pink-400 dark:bg-pink-300 shadow-board-contact-description">
        <h3 className="mb-6 text-2xl font-black text-black">SEND MESSAGE</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 font-bold text-black">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white"
                disabled={isSending}
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-black">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white"
                disabled={isSending}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-bold text-black">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white"
              disabled={isSending}
              placeholder="Project Subject"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-black">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow resize-none text-black bg-white dark:bg-[#252839] dark:text-white"
              disabled={isSending}
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={clsx(
              "w-full bg-yellow-400 dark:bg-yellow-300 text-black px-6 py-4 font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 flex items-center justify-center gap-2",
              isSending
                ? "!bg-gray-200 dark:!bg-gray-300 shadow-none cursor-wait pointer-events-none"
                : ""
            )}
          >
            <Send size={20} />
            {isSending ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactTable;
