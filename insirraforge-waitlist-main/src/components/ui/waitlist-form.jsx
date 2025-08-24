import React, { useState } from "react";
import { motion } from "framer-motion";
import { LiquidButton } from "./liquid-glass-button.jsx";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("startup");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !userType) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Waitlist submission:", { email, userType });
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setUserType("startup");
      setIsLoading(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div id="waitlist" className="h-[40rem] w-full rounded-md bg-gradient-to-br from-gray-900 via-black to-gray-900 relative flex flex-col items-center justify-center antialiased overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-[-10%] top-[15%] w-96 h-24 bg-gradient-to-r from-orange-500/[0.15] to-amber-500/[0.15] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-[-5%] bottom-[20%] w-80 h-20 bg-gradient-to-r from-amber-500/[0.15] to-orange-400/[0.15] rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-2xl mx-auto p-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 font-bold mb-4">
              Thank You!
            </h2>
            <p className="text-gray-200 text-lg mb-6 max-w-lg mx-auto">
              You've been added to our waitlist. We'll notify you when we launch!
            </p>
            <LiquidButton
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
                setUserType("startup");
              }}
              className="text-white"
            >
              Join Another Email
            </LiquidButton>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist" className="h-[40rem] w-full rounded-md bg-gradient-to-br from-gray-900 via-black to-gray-900 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-[-10%] top-[15%] w-96 h-24 bg-gradient-to-r from-orange-500/[0.15] to-amber-500/[0.15] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-[-5%] bottom-[20%] w-80 h-20 bg-gradient-to-r from-amber-500/[0.15] to-orange-400/[0.15] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 font-bold mb-6">
            Join the Waitlist
          </h1>
          <p className="text-gray-200 max-w-lg mx-auto text-lg">
            Be among the first to experience InsirraForge - the AI-powered platform that connects startups, investors, and mentors.
          </p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* User Type Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-200 text-center">
              I am a:
            </label>
            <div className="flex gap-2 justify-center">
              {[
                { value: "startup", label: "Startup" },
                { value: "investor", label: "Investor" },
                { value: "mentor", label: "Mentor" }
              ].map((type) => (
                <label
                  key={type.value}
                  className={`cursor-pointer rounded-lg border-2 px-4 py-2 text-center transition-all hover:scale-105 ${
                    userType === type.value
                      ? "border-orange-400 bg-orange-500/30 text-white shadow-lg shadow-orange-500/25"
                      : "border-gray-600 bg-gray-800/80 hover:border-gray-500 hover:bg-gray-700/80 text-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="userType"
                    value={type.value}
                    checked={userType === type.value}
                    onChange={(e) => setUserType(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 text-center">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 rounded-lg border-2 border-gray-600 bg-gray-800/80 px-4 py-3 text-base text-white placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <LiquidButton
            type="submit"
            disabled={isLoading || !email || !userType}
            className="w-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Joining...
              </div>
            ) : (
              "Join Waitlist"
            )}
          </LiquidButton>
        </motion.form>
      </div>
    </div>
  );
}
