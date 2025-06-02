"use client";

import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import clsx from "clsx";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactFormSchema } from "@/app/utils/zod-schema/contactFormSchema";

// Define Zod schema for form validation
const formSchema = z.object(contactFormSchema);

// Define form data type based on schema
type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Initialize react-hook-form with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const emailData = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      template_params: data,
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
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
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
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
  };

  return (
    <div className="bg-pink-400 dark:bg-pink-300 shadow-board-contact-description">
      <h3 className="mb-6 text-2xl font-black text-black">SEND MESSAGE</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-bold text-black">Name *</label>
            <input
              {...register("name")}
              className={clsx(
                "w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white",
                errors.name && "border-red-500"
              )}
              disabled={isSubmitting}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-black font-bold">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-bold text-black">Email *</label>
            <input
              {...register("email")}
              className={clsx(
                "w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white",
                errors.email && "border-red-500"
              )}
              disabled={isSubmitting}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-black font-bold">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-bold text-black">Subject *</label>
          <input
            {...register("subject")}
            className={clsx(
              "w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow text-black bg-white dark:bg-[#252839] dark:text-white",
              errors.subject && "border-red-500"
            )}
            disabled={isSubmitting}
            placeholder="Project Subject"
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-black font-bold">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-bold text-black">Message *</label>
          <textarea
            {...register("message")}
            rows={6}
            className={clsx(
              "w-full p-4 border-4 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow resize-none text-black bg-white dark:bg-[#252839] dark:text-white",
              errors.message && "border-red-500"
            )}
            disabled={isSubmitting}
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-black font-bold">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "w-full bg-yellow-400 dark:bg-yellow-300 text-black px-6 py-4 font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 flex items-center justify-center gap-2",
            isSubmitting
              ? "!bg-gray-200 dark:!bg-gray-300 shadow-none cursor-wait pointer-events-none"
              : ""
          )}
        >
          <Send size={20} />
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
