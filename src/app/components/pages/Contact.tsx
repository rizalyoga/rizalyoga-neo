"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import clsx from "clsx";
import toast from "react-hot-toast";

const Contact = () => {
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
    <section
      id="contact"
      className="py-20 transition-colors bg-white dark:bg-[#252839]"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-cyan-400 dark:bg-cyan-300 inline-block p-4 border-4 border-black shadow-[8px_8px_0px_0px_#000] mb-6">
            <h2 className="text-4xl font-black text-black md:text-5xl">
              CONTACT
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-xl font-bold text-black dark:text-white">
            Let&apos;s work together! Drop me a message and let&apos;s create
            something amazing.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-yellow-300 dark:bg-yellow-400 p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              <h3 className="mb-6 text-2xl font-black text-black">
                GET IN TOUCH
              </h3>
              <p className="mb-6 text-lg font-bold leading-relaxed text-black">
                Ready to start your next project? I&apos;m always excited to
                work on new challenges and collaborate with new people.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Email</div>
                    <div className="text-lg text-black">
                      ach.rizal.yogaswara@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Phone</div>
                    <div className="text-lg text-black">+62 812 2882 1971</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 text-white bg-black border-2 border-black">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-black">Location</div>
                    <div className="text-lg text-black">
                      Mojokerto, Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-lime-400 dark:bg-lime-300 p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xl font-black text-black">
                    AVAILABLE FOR WORK
                  </div>
                  <div className="font-bold text-black">
                    Currently accepting new projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-pink-400 dark:bg-pink-300 p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000]">
            <h3 className="mb-6 text-2xl font-black text-black">
              SEND MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-bold text-black">
                    Name *
                  </label>
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
                  <label className="block mb-2 font-bold text-black">
                    Email *
                  </label>
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
                <label className="block mb-2 font-bold text-black">
                  Subject *
                </label>
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
                <label className="block mb-2 font-bold text-black">
                  Message *
                </label>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
