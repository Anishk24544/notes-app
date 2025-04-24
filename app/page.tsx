// app/page.jsx
"use client";

import { useState } from "react";
import {
  ChevronRight,
  Sparkles,
  Book,
  Layers,
  Zap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      <header className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">NeuraNotes</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#login"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Log in
              </a>
              <a
                href="#signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 "
              >
                Sign up Free
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-slate-300 hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 bg-slate-800 rounded-lg shadow-xl mb-4">
              <nav className="flex flex-col space-y-2 px-4">
                <a
                  href="#features"
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
                <div className="border-t border-slate-700 my-2"></div>
                <a
                  href="#login"
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-center shadow-lg shadow-indigo-500/20"
                >
                  Sign up Free
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="relative pt-10 pb-20 lg:pt-20 z-10">
        <div className="container max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="flex items-center w-[fit-content] px-4 mb-6 p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 self-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500">
                  <Sparkles size={14} className="text-white" />
                </span>
                <span className="ml-2 text-sm font-medium text-slate-300">
                  AI-Powered Note Taking
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                <span className="block">Take smarter notes with</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                  AI assistance
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                NeuraNotes combines the simplicity of note-taking with powerful
                AI summarization. Capture your thoughts, and let our AI organize
                and highlight what matters most.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#signup"
                  className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-indigo-500/20 transition-all"
                >
                  Get Started Free
                  <ChevronRight className="ml-2" size={18} />
                </a>
                <a
                  href="#demo"
                  className="flex items-center justify-center border border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Watch Demo
                </a>
              </div>

              <div className="mt-8 flex items-center text-sm text-slate-400">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                </div>
                <div>
                  <span className="font-semibold text-slate-300">5,000+</span>{" "}
                  active users
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl transform rotate-3 scale-105 blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-700 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="text-xs text-slate-400 ml-4">
                      Meeting Notes
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-slate-400 mb-1">
                      Wednesday, April 23 - 10:30 AM
                    </div>
                    <h2 className="text-lg font-semibold mb-4">
                      Product Strategy Meeting
                    </h2>
                    <div className="border-l-2 border-indigo-500 pl-3 mb-4">
                      <div className="text-xs uppercase font-bold text-indigo-400 mb-1">
                        AI Summary
                      </div>
                      <div className="text-sm text-slate-300">
                        Team discussed Q3 roadmap priorities. Agreed to focus on
                        mobile app improvements and new analytics dashboard.
                        John to prepare prototype by next week.
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-slate-400">
                      <p>
                        - Introduction of new team members (Sarah and David)
                      </p>
                      <p>- Discussed current quarter objectives and progress</p>
                      <p>
                        - Mobile app performance issues raised by customer
                        support
                      </p>
                      <p>- Analytics dashboard redesign needed for better UX</p>
                      <p>- John volunteered to create initial wireframes</p>
                      <p>- Budget approval for new design tools confirmed</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center text-indigo-400 text-xs font-medium">
                        <Sparkles size={14} className="mr-1" />
                        AI Enhanced
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
                          <Layers size={14} />
                        </button>
                        <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
                          <Book size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features section */}
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Features that make note-taking smarter
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover how NeuraNotes transforms your ideas into organized,
              actionable insights with our AI-powered toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                <Sparkles size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Summarization</h3>
              <p className="text-slate-300">
                Our AI analyzes your notes to extract key points, action items,
                and crucial information so you never miss what matters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Organization
              </h3>
              <p className="text-slate-300">
                Notes automatically organized by topics, projects, and
                priorities with smart tagging and categorization.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                <Layers size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cross-Platform Sync
              </h3>
              <p className="text-slate-300">
                Access your notes from anywhere with real-time syncing across
                all your devices. Never lose an idea again.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                <Book size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Formatting</h3>
              <p className="text-slate-300">
                Express yourself with a full suite of formatting tools,
                including markdown support, code blocks, and media embeds.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Collaborative Notes
              </h3>
              <p className="text-slate-300">
                Share and collaborate on notes in real-time with team members.
                Perfect for meetings, projects, and group studies.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customizable Workspace
              </h3>
              <p className="text-slate-300">
                Tailor your workspace to your needs with customizable themes,
                layouts, and shortcut preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section
        id="how-it-works"
        className="py-20 bg-slate-900/50 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                How NeuraNotes Works
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A simple, intuitive workflow designed to make your note-taking
              experience seamless and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Take Notes Your Way
              </h3>
              <p className="text-slate-300">
                Write naturally as you would on paper. Type, dictate, or upload
                images of handwritten notes—NeuraNotes understands it all.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/20">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AI Processes Your Notes
              </h3>
              <p className="text-slate-300">
                Our AI analyzes your content, identifying key points, action
                items, and connections between different notes and topics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Get Organized Insights
              </h3>
              <p className="text-slate-300">
                Access your organized notes with AI-generated summaries, tags,
                and connections to other relevant information in your workspace.
              </p>
            </div>
          </div>

          {/* Demo button */}
          <div className="mt-16 text-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-600 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              See it in action
              <ChevronRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Simple, transparent pricing options to fit your needs. No hidden
              fees or complicated tiers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Free</h3>
                <p className="text-slate-400 text-sm">For casual note-takers</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-400 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">Up to 50 notes</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    Basic AI summarization (5/month)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    Mobile and desktop access
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    Basic formatting options
                  </span>
                </li>
              </ul>
              <a
                href="#signup"
                className="block w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-center rounded-lg font-medium transition-colors"
              >
                Start for Free
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-cyan-900/50 backdrop-blur-sm border border-indigo-700/50 rounded-xl p-6 transform translate-y-[-8px] shadow-xl shadow-indigo-500/10 relative">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Pro</h3>
                <p className="text-slate-300 text-sm">
                  For serious note-takers
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-slate-300 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Unlimited notes</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Advanced AI summarization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Collaborative editing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Advanced formatting</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <a
                href="#signup-pro"
                className="block w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-center rounded-lg font-medium transition-colors"
              >
                Get Pro
              </a>
            </div>

            {/* Business Plan */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Business</h3>
                <p className="text-slate-400 text-sm">
                  For teams and organizations
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-slate-400 ml-1">/user/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    Everything in Pro, plus:
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">Team workspaces</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    Admin controls & analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">
                    SSO & advanced security
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-indigo-400 mr-2 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">Dedicated support team</span>
                </li>
              </ul>
              <a
                href="#contact-sales"
                className="block w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-center rounded-lg font-medium transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-900/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about NeuraNotes. Can't find the
              answer you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium">
                    How does the AI summarization work?
                  </h3>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  <p>
                    Our AI analyzes your notes to identify key points, action
                    items, and important information. It uses natural language
                    processing to understand context and meaning, then generates
                    a concise summary that captures the essence of your notes.
                    The AI improves over time as it learns your writing style
                    and preferences.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium">
                    Is my data secure and private?
                  </h3>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  <p>
                    Yes, we take data security and privacy very seriously. All
                    your notes are encrypted both in transit and at rest. We
                    don't share your data with third parties, and our AI
                    processing happens securely on our servers. You can also
                    enable additional security features like two-factor
                    authentication and end-to-end encryption in our Pro and
                    Business plans.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium">
                    Can I use NeuraNotes offline?
                  </h3>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  <p>
                    Yes, NeuraNotes works offline on our desktop and mobile
                    apps. You can create and edit notes without an internet
                    connection, and they will automatically sync once you're
                    back online. However, AI summarization features require an
                    internet connection to process.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium">
                    How do I collaborate with my team?
                  </h3>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  <p>
                    With Pro and Business plans, you can invite team members to
                    collaborate on notes in real-time. Share notes or entire
                    notebooks with specific permissions (view, edit, or admin).
                    Changes sync instantly, and you can see who's currently
                    viewing or editing a note. For Business accounts, you can
                    organize team members into workspaces with custom
                    permissions and roles.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium">
                    Can I import notes from other apps?
                  </h3>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  <p>
                    Yes, NeuraNotes supports importing notes from popular
                    applications like Evernote, OneNote, Google Keep, and Apple
                    Notes. We also support importing from text files, Markdown
                    files, and PDFs. Our smart importer preserves your
                    formatting and organization structure as much as possible.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/80 to-cyan-900/80 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-8 lg:p-12 shadow-xl shadow-indigo-900/20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0 lg:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to transform your note-taking?
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  Join thousands of users who are already using NeuraNotes to
                  organize their thoughts and ideas more effectively.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="#signup"
                    className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-indigo-500/20 transition-all"
                  >
                    Get Started Free
                    <ChevronRight className="ml-2" size={18} />
                  </a>
                  <a
                    href="#demo"
                    className="flex items-center justify-center border border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700/50 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-900"></div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Trusted by 5,000+</div>
                    <div className="text-slate-400">Professionals & teams</div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="bg-slate-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-300 m-1">
                    ⭐️ 4.9/5 App Store
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-300 m-1">
                    ⭐️ 4.8/5 Play Store
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-300 m-1">
                    🔒 GDPR Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-6 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                NeuraNotes
              </div>
              <p className="text-slate-400 mb-4">
                The AI-powered note-taking app that helps you capture, organize,
                and extract insights from your ideas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-slate-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
