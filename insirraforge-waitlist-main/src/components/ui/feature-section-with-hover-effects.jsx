import React from "react";
import { cn } from "../../lib/utils";
import {
  IconBrain,
  IconFileText,
  IconUsers,
  IconChartBar,
  IconBriefcase,
  IconTrendingUp,
  IconTarget,
  IconRocket,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI Startup Readiness Score",
      description:
        "Instantly tells you how investable your startup is with AI-powered analysis and scoring.",
      icon: <IconBrain className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Pitch Deck Analyzer",
      description:
        "Get AI-powered investor-style feedback in minutes, not weeks. Professional analysis at lightning speed.",
      icon: <IconFileText className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Smart Matching System",
      description:
        "Startups ↔ Investors ↔ Experts, curated by AI for perfect connections and partnerships.",
      icon: <IconUsers className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Growth Dashboard",
      description: "Track metrics & generate investor-friendly reports automatically with real-time insights.",
      icon: <IconChartBar className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Expert Marketplace",
      description: "Book vetted experts per-hour, pay seamlessly through our secure platform.",
      icon: <IconBriefcase className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Exclusive Deal Flow",
      description: "Investors get early access to curated startups before anyone else in the market.",
      icon: <IconTrendingUp className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: "Market Trends Snapshot",
      description: "Sector-wise insights powered by AI to help you make informed strategic decisions.",
      icon: <IconTarget className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Complete Ecosystem",
      description: "Everything you need to build, fund, and scale your startup in one integrated platform.",
      icon: <IconRocket className="w-8 h-8 text-pink-600" />,
    },
  ];
  
  return (
    <section id="features" className="bg-black py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powerful Features for Startup Success
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, fund, and scale your startup with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <div className="w-12 h-12 flex items-center justify-center">
          {React.cloneElement(icon, { className: "w-8 h-8 text-gray-400" })}
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
