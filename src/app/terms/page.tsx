"use client";

import React from "react";
import ResourcesHeader from "@/components/ResourcesHeader";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
        <div className="prose max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using StartKaro, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse our services for unauthorized purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;