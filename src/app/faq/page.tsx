'use client'

import React, { useState } from 'react';
import ResourcesHeader from '@/components/ResourcesHeader';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is StartKaro?",
      answer: "StartKaro is your one-stop platform for aspiring entrepreneurs in India. We provide resources, guidance, and tools to help you transform your business idea into reality."
    },
    {
      question: "Is StartKaro free to use?",
      answer: "Yes! StartKaro's basic features are completely free. We believe in making entrepreneurship accessible to everyone who has the drive to succeed."
    },
    {
      question: "How can StartKaro help me with my business?",
      answer: "We offer comprehensive resources including business planning tools, legal guidance, funding information, and a supportive community of entrepreneurs to help you at every stage of your startup journey."
    },
    {
      question: "Do I need to register to access the resources?",
      answer: "While some resources are freely available, registering gives you access to personalized recommendations, saved articles, and our community features."
    },
    {
      question: "Can I get funding through StartKaro?",
      answer: "StartKaro connects you with potential investors and provides information about various funding options, but we don't directly provide funding. We help you prepare and connect with the right opportunities."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the 'Start' button, create your account, and begin exploring our resources. Our platform will guide you through the initial steps based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">Still have questions?</p>
          <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;