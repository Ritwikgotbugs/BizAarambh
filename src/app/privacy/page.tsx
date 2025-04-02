"use client";

import React from "react";
import ResourcesHeader from "@/components/ResourcesHeader";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including
              name, email address, and business details when you register for
              our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information to improve our
                services
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
