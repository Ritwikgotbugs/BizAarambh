import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackToTopButton from "../components/BackToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative">
      {/* Top Right Corner - Login Button */}
      <div className="absolute top-4 right-4 z-50">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
        >
          Login
        </Link>
      </div>

      {/* Hero Section - Updated with more modern styling */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
                    StartKaro
                  </span>
                </h1>
                <p className="mt-4 text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                  Simplifying Startup Journeys for Aspiring Entrepreneurs
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/onboarding"
                    className="bg-white text-blue-600 px-10 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-800/30 transform hover:-translate-y-1"
                  >
                    START
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern geometric shapes */}
        <div className="absolute bottom-0 left-0 w-full h-20 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Introduction Section - Updated with cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Solutions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to help entrepreneurs navigate the complex
              business landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Licensing Information Hub
              </h3>
              <p className="text-gray-600 mb-4">Comprehensive database</p>
              <p className="text-gray-700">
                Our database contains detailed information on all licensing
                requirements for food service businesses, including federal,
                state, and local regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Budget Summarizer Tool
              </h3>
              <p className="text-gray-600 mb-4">Financial planning made easy</p>
              <p className="text-gray-700">
                Our tool automatically generates financial projections and
                plans, providing valuable insights and helping you make informed
                decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Fund Raising Opportunities
              </h3>
              <p className="text-gray-700">
                Connect with angel investors for raising investments and allow
                the startup to grow. We provide a platform to showcase your
                business and attract potential investors.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Government Scheme Matcher
              </h3>
              <p className="text-gray-700">
                Identify eligible government programs and receive personalized
                recommendations based on your business profile. Never miss out
                on available support and funding opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals Section - Updated with modern design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Project SDG
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting sustainable development goals through entrepreneurship
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-3/12 px-4 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Impact
                </h3>
                <p className="text-gray-600">
                  Aligned with UN Sustainable Development Goals
                </p>
              </div>
              <div className="w-full md:w-9/12 px-4">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="bg-red-600 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 mt-1 shadow-lg">
                      8
                    </span>
                    <div>
                      <p className="font-bold text-xl text-gray-800">
                        Goal 8: Decent Work & Economic Growth
                      </p>
                      <p className="text-gray-600 mt-1">
                        By fostering entrepreneurship and creating sustainable
                        business opportunities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 mt-1 shadow-lg">
                      9
                    </span>
                    <div>
                      <p className="font-bold text-xl text-gray-800">
                        Goal 9: Industry, Innovation & Infrastructure
                      </p>
                      <p className="text-gray-600 mt-1">
                        By promoting digital business solutions and
                        technological advancement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-600 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 mt-1 shadow-lg">
                      10
                    </span>
                    <div>
                      <p className="font-bold text-xl text-gray-800">
                        Goal 10: Reduced Inequalities
                      </p>
                      <p className="text-gray-600 mt-1">
                        By democratizing access to government funding & business
                        knowledge for all entrepreneurs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-8 h-full text-white shadow-xl transform transition-transform hover:scale-105">
              <div className="text-7xl font-bold mb-6 opacity-90">10</div>
              <div className="text-2xl font-bold uppercase mb-4">
                Reduced Inequalities
              </div>
              <p className="text-pink-100">
                Creating equal opportunities for entrepreneurs from all
                backgrounds
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 h-full text-white shadow-xl transform transition-transform hover:scale-105">
              <div className="text-7xl font-bold mb-6 opacity-90">8</div>
              <div className="text-2xl font-bold uppercase mb-4">
                Decent Work and Economic Growth
              </div>
              <p className="text-red-100">
                Supporting sustainable business models that create quality jobs
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 h-full text-white shadow-xl transform transition-transform hover:scale-105">
              <div className="text-7xl font-bold mb-6 opacity-90">9</div>
              <div className="text-2xl font-bold uppercase mb-4">
                Industry, Innovation and Infrastructure
              </div>
              <p className="text-orange-100">
                Fostering technological advancement and digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Vision Section - Updated with modern design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Product Vision
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our mission to transform the entrepreneurial landscape
            </p>
          </div>

          <div className="flex flex-wrap items-stretch">
            <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-10 rounded-2xl text-white h-full shadow-xl">
                <h2 className="text-3xl font-bold mb-6">
                  Product Vision Statement
                </h2>
                <p className="text-xl mb-6 text-teal-100">
                  To provide startups with seamless access to essential
                  registration, licensing, government policies, and financial
                  planning tools for a hassle-free launch and growth.
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    href="/about"
                    className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors backdrop-blur-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-7/12 px-4">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Empowering Entrepreneurs
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Simplifying Startup Journeys through innovative digital
                        solutions
                      </p>
                    </div>
                  </div>

                  {/* Other vision items with similar styling */}
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Seamless Access
                      </h3>
                      <p className="text-gray-600 mt-2">
                        To essential registration, licensing, government
                        policies, and financial planning tools
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Target Audience
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Aspiring Entrepreneurs, Early-Stage Startups, Small &
                        Medium Businesses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Solving Key Challenges
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Complex registration & licensing processes, lack of
                        awareness about government schemes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Comprehensive Solutions
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Registration & Licensing Guide, Government Schemes &
                        Policies, Budget Summarizer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-3 mr-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Impact & Goals
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Simplify business setup, empower startups with informed
                        decisions, accelerate growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with modern design */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat bg-center"></div>
        </div>

        {/* Add animated shapes for modern look */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-96 -right-24 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who have simplified their startup
            process with StartKaro and turned their business dreams into reality
          </p>
          <div className="flex justify-center">
            <Link
              href="/onboarding"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-800/30 transform hover:-translate-y-1"
            >
              START
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Updated with modern design */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                  StartKaro
                </span>
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering entrepreneurs to start and grow their businesses with
                ease through innovative digital solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-pink-500/20 transform hover:-translate-y-1"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Resources
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/aboutUs"
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>{" "}
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>{" "}
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-blue-500 transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>{" "}
                    Resource Library
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 flex items-start group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    support@startkaro.com
                  </span>
                </li>
                <li className="text-gray-400 flex items-start group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    +91 1234567890
                  </span>
                </li>
                <li className="text-gray-400 flex items-start group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">
                    Mumbai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2023 <span className="text-blue-400">StartKaro</span>. All
              rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Remove the inline button with onClick and only use the client component */}
      {/* <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button> */}
      <BackToTopButton />
    </div>
  );
}
