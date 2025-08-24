import React from "react";
import { motion } from "framer-motion";

export function AboutUsSection() {
  const keyTerms = ["startups", "mentors", "investors"];
  
  return (
    <section id="about" className="bg-black py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About InsirraForge
            </h2>
          </motion.div>
          
          {/* Content with Dots Pattern */}
          <div className="max-w-3xl mx-auto bg-black border border-neutral-800 rounded-lg p-8 relative">
            {/* Dots Pattern Background */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute left-0 top-4 h-px w-full bg-neutral-700" />
              <div className="absolute bottom-4 left-0 h-px w-full bg-neutral-700" />
              <div className="absolute inset-y-0 left-0 w-px h-full bg-neutral-700" />
              <div className="absolute inset-y-0 right-0 w-px h-full bg-neutral-700" />
              
              {/* Corner Dots */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full" />
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-400 rounded-full" />
            </div>
            
            <div className="text-center relative z-10">
              <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6">
                <p>
                  At InsirraForge, we connect{" "}
                  {keyTerms.map((term, index) => (
                    <motion.span
                      key={term}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                        color: "#3b82ff"
                      }}
                      className="inline-block mx-1 font-semibold text-white cursor-pointer transition-all duration-300"
                    >
                      {term}
                    </motion.span>
                  ))} in one smart ecosystem.
                </p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Our AI-powered platform makes it easier to find the right people, 
                  track progress, and unlock opportunities.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-400"
                >
                  Join the waitlist and be part of the future of growth.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
