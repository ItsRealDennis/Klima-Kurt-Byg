"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig email adresse"),
  phone: z.string().min(8, "Telefonnummer skal være mindst 8 cifre"),
  subject: z.string().min(5, "Emne skal være mindst 5 tegn"),
  message: z.string().min(10, "Besked skal være mindst 10 tegn"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual backend when ready)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name */}
      <motion.div variants={staggerItem}>
        <label
          htmlFor="name"
          className="block text-earth-900 font-medium mb-2"
        >
          Navn *
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-600/20 outline-none transition-all duration-300"
          placeholder="Dit fulde navn"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
        )}
      </motion.div>

      {/* Email and Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={staggerItem}>
          <label
            htmlFor="email"
            className="block text-earth-900 font-medium mb-2"
          >
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-600/20 outline-none transition-all duration-300"
            placeholder="din@email.dk"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </motion.div>

        <motion.div variants={staggerItem}>
          <label
            htmlFor="phone"
            className="block text-earth-900 font-medium mb-2"
          >
            Telefon *
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-600/20 outline-none transition-all duration-300"
            placeholder="+45 12 34 56 78"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </motion.div>
      </div>

      {/* Subject */}
      <motion.div variants={staggerItem}>
        <label
          htmlFor="subject"
          className="block text-earth-900 font-medium mb-2"
        >
          Emne *
        </label>
        <input
          {...register("subject")}
          type="text"
          id="subject"
          className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-600/20 outline-none transition-all duration-300"
          placeholder="Hvad handler din henvendelse om?"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={staggerItem}>
        <label
          htmlFor="message"
          className="block text-earth-900 font-medium mb-2"
        >
          Besked *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-sage-600 focus:ring-2 focus:ring-sage-600/20 outline-none transition-all duration-300 resize-none"
          placeholder="Fortæl os om dit projekt..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={staggerItem}>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full px-8 py-4 bg-sage-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-sage-700 disabled:bg-sage-400 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sender...
            </span>
          ) : (
            "Send besked"
          )}
        </motion.button>
      </motion.div>

      {/* Status Messages */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-green-50 border-2 border-green-200 rounded-xl"
          >
            <p className="text-green-800 font-medium">
              Tak for din henvendelse! Vi vender tilbage hurtigst muligt.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-50 border-2 border-red-200 rounded-xl"
          >
            <p className="text-red-800 font-medium">
              Der opstod en fejl. Prøv venligst igen.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
