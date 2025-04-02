"use client";

import React from "react";
import ResourcesHeader from "@/components/ResourcesHeader";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ResourcesHeader />
      <div className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Cookie Policy</h1>
        <div className="prose max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Essential cookies: Required for basic site functionality</li>
              <li>Analytics cookies: Help us understand how visitors use our site</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Marketing cookies: Track your activity for targeted advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Cookies</h2>
            <p className="text-gray-600">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;