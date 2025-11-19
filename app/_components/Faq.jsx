"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is a hair transplant?",
    answer:
      "A hair transplant is a medical procedure where hair follicles are moved from a donor area to a thinning or bald area, restoring natural-looking hair density.",
  },
  {
    question: "Which techniques do you use?",
    answer:
      "We offer FUE, DHI, Sapphire FUE, and combination techniques depending on your unique needs and goals.",
  },
  {
    question: "How long does the recovery take?",
    answer:
      "Most patients return to daily activities within 2–3 days. Full recovery and final results take 8–12 months.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients report minimal discomfort thanks to local anesthesia and modern micro-surgical methods.",
  },
  {
    question: "How much does a hair transplant cost?",
    answer:
      "Pricing depends on graft count, technique, and medical requirements. We provide free consultations and personalized quotes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-lg font-medium text-gray-900"
            >
              {faq.question}
              <span className="ml-4 text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}