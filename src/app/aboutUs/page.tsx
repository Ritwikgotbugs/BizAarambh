"use client";

import React from "react";
import ResourcesHeader from "@/components/ResourcesHeader";
import Image from "next/image";

const AboutUsPage = () => {
  const creators = [
    {
      name: "Anish Agrawal",
      role: "Co-Founder & Developer",
      image: "/anish.jpg",
      quote:
        "Our vision is to simplify the entrepreneurial journey in India by providing a comprehensive platform that guides aspiring business owners through every step of their startup journey.",
      linkedin: "https://linkedin.com/in/your-profile",
    },
    {
      name: "Farhan Alam",
      role: "Co-Founder & Developer",
      image: "/farhan.jpeg", // Updated image extension to .jpeg
      quote:
        "We believe that everyone deserves the opportunity to turn their business dreams into reality. StartKaro is our contribution to making that possible.",
      linkedin: "https://linkedin.com/in/your-profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          The passionate minds behind StartKaro, working to empower
          entrepreneurs across India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="rounded-full object-cover border-4 border-blue-100 shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {creator.name}
                </h3>
                <p className="text-blue-600 font-medium mb-6">{creator.role}</p>
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-blue-400 transform -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-6 pl-8">
                    {creator.quote}
                  </p>
                </div>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto transform hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-blue-100">
            To democratize entrepreneurship in India by providing accessible,
            comprehensive resources and tools that simplify the journey from
            idea to successful business launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
